# jsPsychMaker_config
# This shiny app creates a canonical_protocol/config.js copy using the shiny inputs
# Allows to configure a protocol using a UI


# TODO --------------------------------------------------------------------

# - USE shinyTime::shinyTimeExample() for max_time

# - var_researcher_email appears twice. In consent AND config. The config one is overwritten by the consent one!!!

# - Use HTML editor for intro/outro:
    # https://github.com/deepanshu88/ShinyEditor
    # https://thedubworld.wordpress.com/2016/03/13/adding-a-html-editor-to-shiny/


# Libraries ---------------------------------------------------------------

  library(shiny)
  library(shinyWidgets) #https://dreamrs.github.io/shinyWidgets/
  library(dplyr, warn.conflicts = FALSE)
  library(tidyr)
  library(purrr)
  library(htmltools)
  library(shinyjs)
  library(httr)


# External files ---------------------------------------------------------

  # Get tasks in Github
  get_github_tasks <- function(folder_files = "canonical_protocol/tasks/") {
    req = GET("https://api.github.com/repos/gorkang/jsPsychMaker/git/trees/main?recursive=1")
    stop_for_status(req)
    filelist <- unlist(lapply(content(req)$tree, "[", "path"), use.names = F)
    # Get only files in folder_files
    gsub(folder_files, "", grep(folder_files, filelist, value = TRUE, fixed = TRUE))
  }

  # List of available tasks
  available_tasks <- gsub("\\.js", "", get_github_tasks())
  # If we are reading a config file, we add to sequential and random available_tasks tasks those in the file that we do not have in jsPsychMakeR
  # We don't do that for first and last tasks
  

  # Use config.js to fill out input parameters
  CONFIG_file = readLines("https://raw.githubusercontent.com/gorkang/jsPsychMaker/main/canonical_protocol_clean/config.js")
  # CONFIG_file = readLines(here::here("canonical_protocol_clean/config.js"))
  # CONFIG_file = readLines(here::here("~/Downloads/new_protocol/config.js"))
  
  # Consent JS file
  CONSENT_file = readLines("https://raw.githubusercontent.com/gorkang/jsPsychMaker/main/canonical_protocol/media/consent/consent-placeholder.js")

  
  

# INITIAL VARS ------------------------------------------------------------

# Function to extract individual strings from js vectors. ['DEMOGR', 'AIM'] -> "DEMOGR" "AIM"   
  # If the strings are in multiple lines, can´t get them
separate_vector <- function(value) lapply(regmatches(value, gregexpr('(\').*?(\')|(").*?(")', value, perl = TRUE)), function(y) gsub("^\'|\'$|^\"|\"$", "", y))
    
# DF with all parameters in config.js

# Read a config file  
read_CONFIG <- function(CONFIG_file) {

  DF_temp =
    stringi::stri_extract_all(str = CONFIG_file, regex = "(.*) = (.*)") %>% 
    gsub("(.*);.*", "\\1", .) %>% # Delete things after ";"
    as_tibble() %>% 
    drop_na(value) %>% 
    separate(value, into = c("variable", "value"), sep = " = ", extra = "merge")
  
  DF = DF_temp %>% 
    rowwise() %>% 
    mutate(
      # Get rid of initial ' when not tasks (separate_vector() does not like things like 'Consent')
      value = 
        case_when(
          !grepl("first_tasks|last_tasks|secuentially_ordered_tasks|randomly_ordered_tasks", variable) ~ gsub("^'|^`|'$|`$", "", value),
          TRUE ~ value
        ),
      value = 
             case_when(
               value == "true" ~ list(TRUE),
               value == "false" ~ list(FALSE),
               variable == "max_time" ~ list(gsub("\"([0-9]{2}).*", "\\1", value)),
               variable == "intro_HTML" ~ list(gsub("`", "", value)),
               variable == "first_tasks" ~ separate_vector(value),
               variable == "last_tasks" ~ separate_vector(value),
               grepl("secuentially_ordered_tasks_|randomly_ordered_tasks_", variable) ~ separate_vector(value),
               variable == "tasks" ~ separate_vector(value),
               
               TRUE ~ list(value)
             )
      ) |> 
    # Avoid comments
    filter(!grepl("//", variable))
  
  return(DF)
}

# Initial configuration. By default, reads the Github file  
DF_config = read_CONFIG(CONFIG_file)


DF_consent = 
  stringi::stri_extract_all(str = CONSENT_file, regex = "(.*) = (.*)") %>% 
  gsub("(.*);.*", "\\1", .) %>% # Delete things after ";"
  as_tibble() %>% 
  drop_na(value) %>% 
  separate(value, into = c("variable", "value"), sep = " = ", extra = "merge")


# Function to extract parameters from DF_config and DF_consent
get_params <- function(variable_str, what, DF = DF_config) {
  DF %>% filter(variable %in% variable_str) %>% pull(what) %>% unlist()
}
# get_params(variable_str = "randomly_ordered_tasks_1", what = "value", DF = DF_config)
# get_params("secuentially_ordered_tasks_1", "value", DF_config)


# Function to find and replace the values associated to each tag
# It also adapts the output text to js
replace_TAG <- function(name_tag) {
  
  # DEBUG
  # XXX = list(max_participants = 222,
  #            randomly_ordered_tasks_1 = c("TEST"),
  #            randomly_ordered_tasks_2 = c("NEWX"))
  # name_tag = XXX[1]
  
  name_text = names(name_tag[1])
  value_text = name_tag[1]
  
  if(is.null(all_of(value_text[[1]]))) value_text = ""
  
  # Prepare vars for js file
  if(value_text %in% c(TRUE, FALSE)) {
    
    # cli::cli_alert("logical")
    value_text = tolower(value_text)
    
  } else if (is.character(value_text[[1]])) {
    
    # cli::cli_alert("character || {value_text[[1]]}")
    
    # If it's a string, add ''
    if (length(value_text[[1]]) == 1) {
      value_text = paste0("'", value_text, "'") # Add ''
      # If it's a vector, add []
    } else {
      value_text = value_text %>% gsub("c\\(", "[", .) %>% gsub("\\)", "]", .) # c("a", "b") -> ["a", "b"]
    }
    
    
  } else {
    
    # cli::cli_alert("Numeric")
    value_text = value_text
    
  }
  
  # If it's max_time, replace only hour
  if (name_text == "max_time") value_text = paste0("'", sprintf("%02d", value_text[[1]]), ":00:00'")
  

  location_name = which(grepl(name_text, CONFIG_file))
  if (length(location_name) == 0) cli::cli_alert_warning("`{name_text}` not found")
  
  # Find position of tasks and insert the secuentially_ordered_tasks_n AND randomly_ordered_tasks_n tags
  if (length(location_name) == 0 & grepl("secuentially_ordered_tasks_|randomly_ordered_tasks_", name_text)) {
    ALL_secuential_and_random_positions = c(which(grepl("secuentially_ordered_tasks_", CONFIG_file)), which(grepl("randomly_ordered_tasks_", CONFIG_file)))
    max_secuential_and_random_positions = max(ALL_secuential_and_random_positions)
    
    cli::cli_alert_warning("`{name_text}` ADDED at line {max_secuential_and_random_positions - 3}")
    CONFIG_file <<- append(x = CONFIG_file, values = paste0(name_text, " = ", value_text), after = max_secuential_and_random_positions - 3)
    CONFIG_file <<- append(x = CONFIG_file, values = paste0("\n"), after = max_secuential_and_random_positions - 2) # Add empty line after
    
  }
  
  # Overwrite CONFIG_file (<<- so it will use it in the map loop)
  CONFIG_file <<- gsub(pattern = paste0("^", name_text, " = .*"),
                       replacement = paste0(name_text, " = ", value_text), CONFIG_file)
  
  CONSENT_file <<- gsub(pattern = paste0("^", name_text, " = .*"),
                       replacement = paste0(name_text, " = ", value_text), CONSENT_file)
  
  OUTPUT = list(CONFIG_file = CONFIG_file,
                CONSENT_file = CONSENT_file)
  
  return(OUTPUT)
}



# UI ----------------------------------------------------------------------

ui <- fluidPage(
  shinyjs::useShinyjs(),  
  

  # Sidebar -----------------------------------------------------------------
  
  sidebarLayout(
    sidebarPanel(
      width = 2,
      shiny::h4("jsPsychMakeR config"),
      # shiny::h4("Select your experiment parameters"),
      shiny::hr(),
      
      uiOutput("text"),
      
      shiny::hr(),
      fileInput("config_file", "Select a config.js file"),

      shiny::hr(),
      downloadButton(outputId = "download_button", label = "Create config"),
      downloadButton(outputId = "download_consent", label = "Create consent")
    ),


  # Main panel -------------------------------------------------------------
    mainPanel(
      tabsetPanel(
        id = "switcher",
        type = "tabs",

        
        # Main parameters --------------------------------------------------------
        
        tabPanel(title = "Main parameters", value = "Main parameters", {
          
          mainPanel(
            
            shiny::h3("Main parameters"),
            shiny::hr(),
            
            helpText("Protocol ID for your protocol. If an online protocol, ask the server administrator"),
            uiOutput("pid"),

            helpText("Max number of participants per condition"),
            uiOutput("max_participants"),
            
            helpText("Time in hours participants will have to complete the protocol after accepting the Consent form"),
            uiOutput("max_time"),
            
            
            shiny::hr(),
            
            helpText("The protocol will run online or offline"),
            uiOutput("online"),
            
            helpText("Should participants be able to continue the protocol after they run out of time?"),
            uiOutput("accept_discarded"),
            
            helpText("Assign random id to participants of ask for one"),
            uiOutput("random_id"),
            
            helpText("If testing the protocol, it is recommended to use debug_mode"),
            uiOutput("debug_mode"),
            
          )
        }),

        # Tasks -------------------------------------------------------------------
        
        tabPanel("Tasks", value = "Tasks", {
          
          mainPanel(

            shiny::h3("Tasks"),
            shiny::hr(),
            shiny::h4("# of blocks"),
            shiny::helpText("Select how many random and sequential blocks of taks you need."),
            shiny::br(),
            
            fluidRow(
              column(width = 5, uiOutput("num_random")),
              column(width = 5, uiOutput("num_sequential"))
            ),
            
            shiny::hr(),
            shiny::h4("Tasks per block"),
            shiny::helpText("Select the tasks you want in each block. The tasks in random blocks will be presented in random order."),
            shiny::br(),
            
            uiOutput("first_tasks"),
            uiOutput("dynamic_sequencial_blocks"),
            uiOutput("dynamic_random_blocks"),
            uiOutput("last_tasks"),
  
            shiny::hr(),
            shiny::h4("Order of blocks"),
            shiny::helpText("Select the order in which the blocks will be presented."),
            shiny::br(),
            
            uiOutput("dynamic_tasks"),
          )
        }),
        

      # Intro experiment --------------------------------------------------------

      tabPanel("Text parameters", value = "Text parameters", {

          mainPanel(
            shiny::h3("Text parameters"),
            shiny::hr(),
            shiny::h4("Intro screens"),
            shiny::helpText("Text to show in the initial screen (intro_HTML) and in the screen after the user ID is assigned (outro_HTML)"),
            shiny::br(),
            
            # textInput(inputId = get_params("var_researcher_email", "variable"), label = get_params("var_researcher_email", "variable"), value = get_params("var_researcher_email", "value"), placeholder = "youremail@email.com"),
            # textAreaInput(inputId = get_params("intro_HTML", "variable"), label = get_params("intro_HTML", "variable"), value = get_params("intro_HTML", "value"), width = "100%", rows = 5),
            # textAreaInput(inputId = get_params("outro_HTML", "variable"), label = get_params("outro_HTML", "variable"), value = get_params("outro_HTML", "value"), width = "100%", rows = 5),

            uiOutput("var_researcher_email"),
            uiOutput("intro_HTML"),
            uiOutput("outro_HTML"),
            
                        
            shiny::hr(),
            shiny::h4("Messages"),
            shiny::helpText("Text of messages shown in protocol"),
            shiny::br(),
            
            # textInput(inputId = get_params("message_str", "variable"), label = get_params("message_str", "variable"), value = get_params("message_str", "value"), width = "100%"),
            uiOutput("message_str"),
            
            shiny::helpText("Text shown while loading experiment materials.")
            
          )
        }),
      
      

      # Consent -----------------------------------------------------------------

      tabPanel("Consent", value = "Consent", {
        
        mainPanel(
          shiny::h3("Consent form"),
          shiny::hr(),
          shiny::h4("Parameters consent form"),
          shiny::helpText("Fill this TAB ONLY if you want to create a Consent form using our template. Once you are done, click [Create consent]. Copy the downloaded file to '/media/consent/consent-placeholder.js'. You can ", shiny::HTML("<a href = 'consent_example.pdf'>DOWNLOAD the Consent template here.</a>.")),
          shiny::br(),
          
          textAreaInput(inputId = get_params("var_title", "variable", DF_consent), 
                        label = get_params("var_title", "variable", DF_consent), 
                        value = get_params("var_title", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_researcher_name", "variable", DF_consent), 
                        label = get_params("var_researcher_name", "variable", DF_consent), 
                        value = get_params("var_researcher_name", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_researcher_email", "variable", DF_consent), 
                        label = get_params("var_researcher_email", "variable", DF_consent), 
                        value = get_params("var_researcher_email", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_researcher_affiliation", "variable", DF_consent), 
                        label = get_params("var_researcher_affiliation", "variable", DF_consent), 
                        value = get_params("var_researcher_affiliation", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_researcher_university", "variable", DF_consent), 
                        label = get_params("var_researcher_university", "variable", DF_consent), 
                        value = get_params("var_researcher_university", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_ethics_comitee_name_president", "variable", DF_consent), 
                        label = get_params("var_ethics_comitee_name_president", "variable", DF_consent), 
                        value = get_params("var_ethics_comitee_name_president", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_ethics_comitee_phone", "variable", DF_consent), 
                        label = get_params("var_ethics_comitee_phone", "variable", DF_consent), 
                        value = get_params("var_ethics_comitee_phone", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_ethics_comitee_email", "variable", DF_consent), 
                        label = get_params("var_ethics_comitee_email", "variable", DF_consent), 
                        value = get_params("var_ethics_comitee_email", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_purpose", "variable", DF_consent), 
                        label = get_params("var_purpose", "variable", DF_consent), 
                        value = get_params("var_purpose", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_procedure", "variable", DF_consent), 
                        label = get_params("var_procedure", "variable", DF_consent), 
                        value = get_params("var_procedure", "value", DF_consent), width = "100%", rows = 5),
          
          textAreaInput(inputId = get_params("var_comprehension", "variable", DF_consent), 
                        label = get_params("var_comprehension", "variable", DF_consent), 
                        value = get_params("var_comprehension", "value", DF_consent), width = "100%", rows = 5),
          
          # get_params("var_title", "variable", DF_consent)
          # get_params("var_title", "value", DF_consent)
          
        )
      })
      )
    )
  )
)

server <- function(input, output, session) {

  
  # Dynamic input fields ----------------------------------------------------

    # Function to create the inputs
    create_dynamic_input <- function(name_input = NULL, DF_config, input_type = "") {

      if (input_type == "numeric") {
        renderUI(numericInput(inputId = get_params(name_input, "variable", DF_config), label = get_params(name_input, "variable", DF_config), value = get_params(name_input, "value", DF_config), width = "100"))    
      } else if (input_type == "text") {
        renderUI(textInput(inputId = get_params(name_input, "variable", DF_config), label = get_params(name_input, "variable", DF_config), value = get_params(name_input, "value", DF_config), width = "100%"))
      } else if (input_type == "textarea") {
        renderUI(textAreaInput(inputId = get_params(name_input, "variable", DF_config), label = get_params(name_input, "variable", DF_config), value = get_params(name_input, "value", DF_config), width = "100%", rows = 5))
      } else if (input_type == "logical") {
        renderUI(switchInput(inputId = get_params(name_input, "variable", DF_config), label = get_params(name_input, "variable", DF_config), value = get_params(name_input, "value", DF_config), width = "auto", handleWidth = 75, labelWidth = 100))

                
      } else if (name_input == "num_sequential") {
        
        max_choices = 5
        num_choices = DF_config |> filter(grepl("secuentially", variable)) |> filter(length(unlist(value)) > 0) |> nrow()
        # print(paste0("num_choices (seq):", num_choices))
        if (num_choices > 5) max_choices = num_choices
        renderUI(selectInput(name_input, "# sequential blocks", choices = seq(0, max_choices, 1), selected = num_choices, width = "150"))
        
      } else if (name_input == "num_random") {
        
        max_choices = 5
        num_choices = DF_config |> filter(grepl("randomly", variable)) |> filter(length(unlist(value)) > 0) |> nrow()
        # print(paste0("num_choices (rand):", num_choices))
        if (num_choices > 5) max_choices = num_choices
        renderUI(selectInput(name_input, "# random blocks", choices = seq(0, max_choices, 1), selected = num_choices, width = "150"))
        
        
        
      } else if (name_input == "first_tasks" | name_input == "last_tasks") {

        renderUI({
          
          # If we read a config.js file, the only available tasks are those present in the config.js file
          # if (!is.null(input$config_file) & !is.null(input$num_random) & !is.null(input$num_sequential)) {
            if (!is.null(input$config_file)) available_tasks = NULL
            
            print(paste0("first_tasks: ", get_params("first_tasks", "value", DF_config)))
            
            
            # If not available yet, value is 5
            num_random = ifelse(is.null(input$num_random), 5, input$num_random)
            num_sequential = ifelse(is.null(input$num_sequential), 5, input$num_sequential)
            
            available_tasks = unique(c(available_tasks,
                                       get_params(paste0("randomly_ordered_tasks", "_", 1:num_random), "value", DF_config),
                                       get_params(paste0("secuentially_ordered_tasks", "_", 1:num_sequential), "value", DF_config),
                                       get_params("first_tasks", "value", DF_config),
                                       get_params("last_tasks", "value", DF_config)))
          # }
          
          selectizeInput(inputId = get_params(name_input, "variable"),
                         label = get_params(name_input, "variable"),
                         selected = get_params(name_input, "value"),
                         choices = available_tasks,
                         multiple = TRUE, width = "100%",
                         options = list(plugins = list("drag_drop", "remove_button")))
          
        })
        
      } else if (name_input == "secuentially_ordered_tasks" | name_input == "randomly_ordered_tasks") {
        
        renderUI({
          
          num_chunks = ifelse(name_input == "randomly_ordered_tasks", as.integer(input$num_random), as.integer(input$num_sequential))
          num_chunks <- as.integer(num_chunks)
          if (length(num_chunks) == 0 | is.na(num_chunks)) num_chunks = 0
          
          if (num_chunks > 0) {
            
            lapply(1:num_chunks, function(i) {
              
              # If we are reading a config file, show only the tasks in the file, as the protocol folder may not have all tasks and plugins
              # This is a bit different, as the Githuf config has SHORTNAMETASKslider and SHORTNAMEtaskmultichoice, but those are not available tasks
              if (!is.null(input$config_file)) available_tasks = NULL
              available_tasks = unique(c(available_tasks,
                                         get_params(paste0("randomly_ordered_tasks", "_", 1:input$num_random), "value", DF_config),
                                         get_params(paste0("secuentially_ordered_tasks", "_", 1:input$num_sequential), "value", DF_config),
                                         get_params("first_tasks", "value", DF_config),
                                         get_params("last_tasks", "value", DF_config)))
              
              num_chunks_params = length(get_params(paste0(name_input, "_", i), "variable", DF_config))

              # If num_random or num_sequential was changed, manually assign name, as it is not available yet here
              if (num_chunks > num_chunks_params) {
                variable_name = paste0(name_input, "_", i)
              } else {
                variable_name = get_params(paste0(name_input, "_", i), "variable", DF_config)
              }
              
              selectizeInput(inputId = variable_name,
                             label = variable_name,
                             choices = available_tasks,
                             multiple = TRUE, width = "100%",
                             selected = get_params(paste0(name_input, "_", i), "value", DF_config),
                             options = list(plugins = list("drag_drop", "remove_button"))
              )
            })
          }
        })
        
      } else if (name_input == "tasks") {
        renderUI({
          
          # All randomly_ordered_tasks_ and secuentially_ordered_tasks_ inputs created dinamically
          INPUTS_random = ifelse(input$num_random > 0, list(paste0("randomly_ordered_tasks_", 1:input$num_random)), "")
          INPUTS_sequential = ifelse(input$num_sequential > 0, list(paste0("secuentially_ordered_tasks_", 1:input$num_sequential)), "")
          
          # Order of task blocks should be read from config initially
          selectizeInput(inputId = 'tasks',
                         label = 'Order of task blocks',
                         choices = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"),
                         multiple = TRUE,
                         # selectize = TRUE,
                         width = "100%",
                         selected = get_params("tasks", "value", DF_config), # If we use this, the selection does not change automatically when adding more random or sequential blocks
                         # selected = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"), # If we use this, it does not respect the tasks parameters in the config, just adds everything
                         options = list(plugins = list("drag_drop", "remove_button"))
          )
        })
        
      }
    }
    
    
    # BOTH SHOULD CONTAIN THE SAME output ELEMENTS
    # Initial state of FORMS (Github config.js) ----------------------------
      # Using DF_config loaded from Github file
    
      # MAIN parameters ---
      output$pid = create_dynamic_input("pid", DF_config, "numeric")
      output$max_participants = create_dynamic_input("max_participants", DF_config, "numeric")
      output$max_time = create_dynamic_input("max_time", DF_config, "numeric")
      output$online = create_dynamic_input("online", DF_config, "logical")
      output$accept_discarded = create_dynamic_input("accept_discarded", DF_config, "logical")
      output$random_id = create_dynamic_input("random_id", DF_config, "logical")
      output$debug_mode = create_dynamic_input("debug_mode", DF_config, "logical")
      
      # TEXT parameters ---
      output$var_researcher_email = create_dynamic_input("var_researcher_email", DF_config, "text")
      output$intro_HTML = create_dynamic_input("intro_HTML", DF_config, "textarea")
      output$outro_HTML = create_dynamic_input("outro_HTML", DF_config, "textarea")
      output$message_str = create_dynamic_input("message_str", DF_config, "text")
      
      # TASKS parameters --- 
      output$num_sequential = create_dynamic_input("num_sequential", DF_config)
      output$num_random = create_dynamic_input("num_random", DF_config)
      
      output$first_tasks = create_dynamic_input("first_tasks", DF_config)
      output$last_tasks = create_dynamic_input("last_tasks", DF_config)
      
      output$dynamic_sequencial_blocks = create_dynamic_input("secuentially_ordered_tasks", DF_config)
      output$dynamic_random_blocks = create_dynamic_input("randomly_ordered_tasks", DF_config)
      
      output$dynamic_tasks <- create_dynamic_input("tasks", DF_config)
        
    # BOTH SHOULD CONTAIN THE SAME output ELEMENTS
    # IF a config file is loaded, CHANGE ALL VALUES --------------------------
      observeEvent(input$config_file, {

        # READS config file selected to get a new DF_config        
        print(input$config_file$datapath)
        CONFIG_file = readLines(input$config_file$datapath)
        DF_config = read_CONFIG(CONFIG_file)
      
        # *****These are an exact copy of the ones above******
        # MAIN parameters ---
        output$pid = create_dynamic_input("pid", DF_config, "numeric")
        output$max_participants = create_dynamic_input("max_participants", DF_config, "numeric")
        output$max_time = create_dynamic_input("max_time", DF_config, "numeric")
        output$online = create_dynamic_input("online", DF_config, "logical")
        output$accept_discarded = create_dynamic_input("accept_discarded", DF_config, "logical")
        output$random_id = create_dynamic_input("random_id", DF_config, "logical")
        output$debug_mode = create_dynamic_input("debug_mode", DF_config, "logical")
        
        # TEXT parameters ---
        output$var_researcher_email = create_dynamic_input("var_researcher_email", DF_config, "text")
        output$intro_HTML = create_dynamic_input("intro_HTML", DF_config, "textarea")
        output$outro_HTML = create_dynamic_input("outro_HTML", DF_config, "textarea")
        output$message_str = create_dynamic_input("message_str", DF_config, "text")
        
        # TASKS parameters --- 
        output$num_sequential = create_dynamic_input("num_sequential", DF_config)
        output$num_random = create_dynamic_input("num_random", DF_config)
        
        output$first_tasks = create_dynamic_input("first_tasks", DF_config)
        output$last_tasks = create_dynamic_input("last_tasks", DF_config)
        
        output$dynamic_sequencial_blocks = create_dynamic_input("secuentially_ordered_tasks", DF_config)
        output$dynamic_random_blocks = create_dynamic_input("randomly_ordered_tasks", DF_config)
        
        output$dynamic_tasks <- create_dynamic_input("tasks", DF_config)
        
        # *****************************************************
      })
      

  
  # Change tab --------------------------------------------------------------

  # Sequential blocks -----------------------------------------------------------

# TODO: These two are redundant, as OUTPUT contains OUTPUT$CONFIG_file and OUTPUT$CONSENT_file
  
  # CREATE config.js ------------------------------------------------------------------

    TEXT = reactive({

      # Get all inputs from shiny app
      list_of_inputs <- reactiveValuesToList(input)
      print(list_of_inputs)

      # Go trough all list_of_inputs and change one by one in OUTPUT_config
      OUTPUT_config =
        1:length(list_of_inputs) %>%
        purrr::map(~{
          
          # print(paste0(.x, ": ",  list_of_inputs[.x]))
          cli::cli_alert_info("{names(list_of_inputs[.x])}: {list_of_inputs[.x]}")
          # .x = 1
          replace_TAG(list_of_inputs[.x])
          
        })
      
      # Get last element of OUTPUT_config, where all changes have been made
      OUTPUT = OUTPUT_config[[length(OUTPUT_config)]]
      OUTPUT$CONFIG_file

    })

    
    # CREATE consent-placeholder.js -------------------------------------------

    TEXT_consent = reactive({
      
      # Get all inputs from shiny app
      list_of_inputs <- reactiveValuesToList(input)
      # print(list_of_inputs)

      # Go trough all list_of_inputs and change one by one in OUTPUT_consent
      OUTPUT_consent =
        1:length(list_of_inputs) %>%
        purrr::map(~{
          # cli::cli_alert_info("{names(list_of_inputs[.x])}: {list_of_inputs[.x]}")
          # .x = 1
          replace_TAG(list_of_inputs[.x])
        })
      
      # Get last element of OUTPUT_consent, where all changes have been made
      OUTPUT = OUTPUT_consent[[length(OUTPUT_consent)]]
      OUTPUT$CONSENT_file
      
    })
    
 

  # config.js button --------------------------------------------------------

    output$download_button <- downloadHandler(
      filename = "config.js",
      content = function(file) {
        writeLines(TEXT(), file)
        }
    )
    
  # consent-placeholder.js button -------------------------------------------
    
    output$download_consent <- downloadHandler(
      filename = "consent-placeholder.js",
      content = function(file) {
        writeLines(TEXT_consent(), file)
      }
    )

    

  # Change button and text depending on TAB ---------------------------------
  
    observeEvent(input$switcher,{
      observe(
        if(input$switcher == "Consent"){
          
          output$text <- renderUI({
            HTML("This app will help you create your Consent form file for a jsPsychMaker protocol. <BR><BR>
            After selecting the parameters for the Consent, click [Create consent]. <BR><BR>
            A 'consent-placeholder.js' file will be downloaded to your Downloads folder. Copy the file to the <B>media/consent/</B> folder in your protocol folder."
                 )})
          
          shinyjs::show("download_consent")
          shinyjs::hide("download_button")
          
        } else{
          
          output$text <- renderUI({
            HTML("This app will help you create your first config.js file for a jsPsychMaker protocol. Please, see the <a href = 'https://gorkang.github.io/jsPsychR-manual/'>jsPsychR-manual</a> for more details. <BR><BR>
            After selecting the parameters for the experiment in the tabs <B>Main parameters, Tasks, Text parameters</B>, click [Create config]. <BR><BR>
            A 'config.js' file will be downloaded to your Downloads folder. Copy the file to your protocol folder."
                 )})
          
          shinyjs::show("download_button")
          shinyjs::hide("download_consent")
          
        }
      )

    })

}

# Run the application
shinyApp(ui = ui, server = server)
