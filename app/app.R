# jsPsychMaker_config
# This shiny app creates a canonical_protocol/config.js copy using the shiny inputs
# Allows to configure a protocol using a UI

# TODO: 
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

# library(shinyjs)


# External files ---------------------------------------------------------

  get_github_files <- function() {
    library(httr)
    req = GET("https://api.github.com/repos/gorkang/jsPsychMaker/git/trees/main?recursive=1")
    stop_for_status(req)
    filelist <- unlist(lapply(content(req)$tree, "[", "path"), use.names = F)
    gsub("canonical_protocol/tasks/", "", grep("canonical_protocol/tasks/", filelist, value = TRUE, fixed = TRUE))
  }

  # List of available tasks
  available_tasks <- gsub("\\.js", "", get_github_files())
  # available_tasks2 <- gsub("\\.js", "", list.files(here::here("canonical_protocol/tasks/")))
  
  # Use config.js to fill out input parameters
  # CONFIG_file = readLines(here::here("canonical_protocol/config.js"))
  CONFIG_file = readLines("https://raw.githubusercontent.com/gorkang/jsPsychMaker/main/canonical_protocol/config.js")

  # Consent JS file
  CONSENT_file = readLines("https://raw.githubusercontent.com/gorkang/jsPsychMaker/main/canonical_protocol/media/consent/consent-placeholder.js")

  
  

# INITIAL VARS ------------------------------------------------------------

# Function to extract individual strings from js vectors. ['DEMOGR', 'AIM'] -> "DEMOGR" "AIM"   
separate_vector <- function(value) list(lapply(regmatches(value, gregexpr('(\').*?(\')', value, perl = TRUE)), function(y) gsub("^\'|\'$", "", y)))

# DF with all parameters in config.js
DF_config = 
  stringi::stri_extract_all(str = CONFIG_file, regex = "(.*) = (.*)") %>% 
  gsub("(.*);.*", "\\1", .) %>% # Delete things after ";"
  as_tibble() %>% 
  drop_na(value) %>% 
  separate(value, into = c("variable", "value"), sep = " = ", extra = "merge") %>% 
  rowwise() %>% 
  mutate(
    value = gsub("^'|^`|'$|`$", "", value),
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
           ))


DF_consent = 
  stringi::stri_extract_all(str = CONSENT_file, regex = "(.*) = (.*)") %>% 
  gsub("(.*);.*", "\\1", .) %>% # Delete things after ";"
  as_tibble() %>% 
  drop_na(value) %>% 
  separate(value, into = c("variable", "value"), sep = " = ", extra = "merge")


# Function to extract parameters from DF_config and DF_consent
get_params <- function(variable_str, what, DF = DF_config) {
  # variable_str = "randomly_ordered_tasks_1"
  # what = "value"
  DF %>% filter(variable == variable_str) %>% pull(what) %>% unlist()
}

# get_params("randomly_ordered_tasks_1", "value")
# get_params("secuentially_ordered_tasks_1", "value")

# get_params("var_title", "variable", DF_consent)
# get_params("var_title", "value", DF_consent)


# UI ----------------------------------------------------------------------

ui <- fluidPage(

  # Sidebar -----------------------------------------------------------------
  
  sidebarLayout(
    sidebarPanel(
      width = 2,
      shiny::h4("jsPsychMakeR config"),
      # shiny::h4("Select your experiment parameters"),
      shiny::hr(),
      
      HTML("This app will help you create your first config.js file for a jsPsychMaker jsPsych protocol. Please, see the <a href = 'https://gorkang.github.io/jsPsychR-manual/'>jsPsychR-manual</a> for more details. <BR><BR>"),
      HTML("After selecting the parameters for the experiment, click 'Create config'. <BR><BR>A 'config.js' file will be downloaded to your Downloads folder. Copy the file to your protocol folder."),
      # selectInput(inputId = "controller", label = "Show", choices = c("Tasks", "Other parameters", "Intro experiment")),
      
      shiny::hr(),
      downloadButton(outputId = "download_button", label = "Create config")
    ),


  # Main panel -------------------------------------------------------------

    mainPanel(
      tabsetPanel(
        id = "switcher",
        type = "tabs",

        
        
        # Main parameters --------------------------------------------------------
        
        tabPanel("Main parameters", {
          
          mainPanel(
            
            shiny::h3("Main parameters"),
            shiny::hr(),
            
            # shiny::h4("Numeric parameters"),
            # shiny::HTML("Enter your protocol number, max number of participants and max time for your protocol"),
            # shiny::br(),
            
            helpText("Protocol ID for your protocol. If an online protocol, ask the server administrator"),
            numericInput(inputId = get_params("pid", "variable"), label = get_params("pid", "variable"), value = get_params("pid", "value"), width = "100"),
            
            helpText("Max number of participants per condition"),
            numericInput(inputId = get_params("max_participants", "variable"), label = get_params("max_participants", "variable"), value = get_params("max_participants", "value"), width = "100"),
            
            helpText("Time in hours participants will have to complete the protocol after accepting the Consent form"),
            numericInput(inputId = get_params("max_time", "variable"), label = get_params("max_time", "variable"), value = get_params("max_time", "value"), width = "100"),
            
            shiny::hr(),
            # shiny::h4("Logical parameters"),
            # shiny::HTML("Select if you want an online/offline protocol, if you will accept discarded participants (after running out of time), if participants will be assigned a random id..."),
            # shiny::br(),
            
            helpText("The protocol will run online or offline"),
            switchInput(inputId = get_params("online", "variable"), label = get_params("online", "variable"), value = get_params("online", "value"), width = "100"),
            
            helpText("Should participants be able to continue the protocol after they run out of time?"),
            switchInput(inputId = get_params("accept_discarded", "variable"), label = get_params("accept_discarded", "variable"), value = get_params("accept_discarded", "value"), width = "100"),
            
            helpText("Assign random id to participants of ask for one"),
            switchInput(inputId = get_params("random_id", "variable"), label = get_params("random_id", "variable"), value = get_params("random_id", "value"), width = "100"),
            
            helpText("If testing the protocol, it is recommended to use debug_mode"),
            switchInput(inputId = get_params("debug_mode", "variable"), label = get_params("debug_mode", "variable"), value = get_params("debug_mode", "value"), width = "100")
            
          )
        }),

        # Tasks -------------------------------------------------------------------
        
        tabPanel("Tasks", {
          
          mainPanel(

            shiny::h3("Tasks"),
            shiny::hr(),
            shiny::h4("# of blocks"),
            shiny::helpText("Select how many random and sequential blocks of taks you need."),
            shiny::br(),
            
            fluidRow(
              column(width = 5, selectInput("num_random", "# random blocks", choices = seq(0, 5, 1), selected = 1, width = "150")),
              column(width = 5, selectInput("num_sequential", "# sequential blocks", choices = seq(0, 5, 1), selected = 0, width = "150"))
            ),
            
            shiny::hr(),
            shiny::h4("Tasks per block"),
            shiny::helpText("Select the tasks you want in each block. The tasks in random blocks will be presented in random order."),
            shiny::br(),
            
            selectizeInput(inputId = get_params("first_tasks", "variable"), 
                           label = get_params("first_tasks", "variable"), 
                           selected = get_params("first_tasks", "value"),  
                           choices = available_tasks, 
                           multiple = TRUE, width = "100%",
                           options = list(plugins = list("drag_drop", "remove_button"))),
            # selectInput(inputId = get_params("first_tasks", "variable"), label = get_params("first_tasks", "variable"), selected = get_params("first_tasks", "value"),  choices = available_tasks, multiple = TRUE, selectize = TRUE, width = "100%"),
            uiOutput("dynamic_sequencial_blocks"),
            uiOutput("dynamic_random_blocks"),
            selectizeInput(inputId = get_params("last_tasks", "variable"), 
                           label = get_params("last_tasks", "variable"), 
                           selected = get_params("last_tasks", "value"),  
                           choices = available_tasks, 
                           multiple = TRUE, width = "100%",
                        options = list(plugins = list("drag_drop", "remove_button"))),
            
            shiny::hr(),
            shiny::h4("Order of blocks"),
            shiny::helpText("Select the order in which the blocks will be presented."),
            shiny::br(),
            
            uiOutput("dynamic_tasks_input"),
          )
        }),
        
        

        
        

      # Intro experiment --------------------------------------------------------

        
      tabPanel("Text parameters", {

          mainPanel(
            shiny::h3("Text parameters"),
            shiny::hr(),
            shiny::h4("Intro screens"),
            shiny::helpText("Text to show in the initial screen (intro_HTML) and in the screen after the user ID is assigned (outro_HTML)"),
            shiny::br(),
            
            textInput(inputId = get_params("var_researcher_email", "variable"), label = get_params("var_researcher_email", "variable"), value = get_params("var_researcher_email", "value"), placeholder = "youremail@email.com"),
            
            textAreaInput(inputId = get_params("intro_HTML", "variable"), label = get_params("intro_HTML", "variable"), value = get_params("intro_HTML", "value"), width = "100%", rows = 5),
            textAreaInput(inputId = get_params("outro_HTML", "variable"), label = get_params("outro_HTML", "variable"), value = get_params("outro_HTML", "value"), width = "100%", rows = 5),
            
            shiny::hr(),
            shiny::h4("Messages"),
            shiny::helpText("Text of messages shown in protocol"),
            shiny::br(),
            
            textInput(inputId = get_params("message_str", "variable"), label = get_params("message_str", "variable"), value = get_params("message_str", "value"), width = "100%"),
            shiny::helpText("Text shown while loading experiment materials.")
            
          )
        }),
      tabPanel("Consent", {
        
        mainPanel(
          shiny::h3("Consent form"),
          shiny::hr(),
          shiny::h4("Parameters consent form JS"),
          shiny::helpText("Fill out and download consent.js. Then copy to XXX/XXX/consent.js"),
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

      
  # Change tab --------------------------------------------------------------

  observeEvent(input$controller, {
    updateTabsetPanel(inputId = "switcher", selected = input$controller)
    })


  # Random blocks -----------------------------------------------------------

    output$dynamic_sequencial_blocks <- renderUI({
      
      num_sequential <- as.integer(input$num_sequential)

      if (num_sequential > 0) {

        lapply(1:num_sequential, function(i) {

          selectizeInput(inputId = paste0("secuentially_ordered_tasks_", i),#'secuentially_ordered_tasks_1',
                      label = paste0("secuentially_ordered_tasks_", i),
                      choices = available_tasks,
                      multiple = TRUE,
                      # selectize = TRUE,
                      width = "100%",
                      selected = get_params(paste0("secuentially_ordered_tasks_", i), "value"),
                      options = list(plugins = list("drag_drop", "remove_button"))
                      )
        })
      }
    })

    output$dynamic_random_blocks <- renderUI({
      
      num_random <- as.integer(input$num_random)

      if (num_random > 0) {

        lapply(1:num_random, function(i) {
          
          selectizeInput(inputId = paste0("randomly_ordered_tasks_", i), #'randomly_ordered_tasks_1',
                      label = paste0("randomly_ordered_tasks_", i),
                      choices = available_tasks,
                      multiple = TRUE,
                      # selectize = TRUE,
                      width = "100%",
                      selected = get_params(paste0("randomly_ordered_tasks_", i), "value"),
                      options = list(plugins = list("drag_drop", "remove_button"))
                      )
        })

      }
    })


  # Tasks -------------------------------------------------------------------

  output$dynamic_tasks_input <- renderUI({

    # num_random <- as.integer(input$num_random)

    # All randomly_ordered_tasks_ and secuentially_ordered_tasks_ inputs created dinamically
    INPUTS_random = ifelse(input$num_random > 0, list(paste0("randomly_ordered_tasks_", 1:input$num_random)), "")
    INPUTS_sequential = ifelse(input$num_sequential > 0, list(paste0("secuentially_ordered_tasks_", 1:input$num_sequential)), "")

    selectizeInput(inputId = 'tasks',
                label = 'Order of task blocks',
                choices = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"),
                multiple = TRUE,
                # selectize = TRUE,
                width = "100%",
                # selected = get_params("tasks", "value") # If we use this, the selection does not change automatically when adding more random or sequential blocks
                selected = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"),
                options = list(plugins = list("drag_drop", "remove_button"))
                )
  })



  # Button ------------------------------------------------------------------

    TEXT = reactive({

      # INPUT_config = readLines(here::here("canonical_protocol/config.js"))

      list_of_inputs <- reactiveValuesToList(input)
      print(list_of_inputs)

      # XXX = list(online = TRUE, max_participants = "1", last_tasks = c('DEMOGR', 'AIM'))
      # list_of_inputs = XXX

      # Function to find and replace the values associated to each tag
      # It also adapts the output text to js
      replace_TAG <- function(name_tag) {
        
        # name_tag = XXX[3]
        name_text = names(name_tag[1])
        value_text = name_tag[1]
        
        if(is.null(all_of(value_text[[1]]))) value_text = ""

        # Prepare vars for js file
        if(value_text %in% c(TRUE, FALSE)) {
          
          cli::cli_alert("logical")
          value_text = tolower(value_text)
          
        } else if (is.character(value_text[[1]])) {
          
          cli::cli_alert("character || {value_text[[1]]}")
          
          # If it's a string, add ''
          if (length(value_text[[1]]) == 1) {
            value_text = paste0("'", value_text, "'") # Add ''
          # If it's a vector, add []
          } else {
            value_text = value_text %>% gsub("c\\(", "[", .) %>% gsub("\\)", "]", .) # c("a", "b") -> ["a", "b"]
          }
          
          
        } else {
          
          cli::cli_alert("Numeric")
          value_text = value_text
          
        }

        # If it's max_time, replace only hour
        if (name_text == "max_time") value_text = paste0("'", sprintf("%02d", value_text[[1]]), ":00:00'")

        # Overwrite CONFIG_file (<<- so it will use it in the map loop)
        CONFIG_file <<- gsub(pattern = paste0("^", name_text, " = .*"),
             replacement = paste0(name_text, " = ", value_text), CONFIG_file)

        return(CONFIG_file)


      }

      # Go trough all list_of_inputs and change one by one in OUTPUT_config
      OUTPUT_config =
        1:length(list_of_inputs) %>%
        purrr::map(~{
          
          cli::cli_alert_info("{names(list_of_inputs[.x])}: {list_of_inputs[.x]}")
          # .x = 1
          replace_TAG(list_of_inputs[.x])
        })
      
      # Get last element of OUTPUT_config, where all changes have been made
      OUTPUT = OUTPUT_config[[length(OUTPUT_config)]]
      OUTPUT

    })

    output$download_button <- downloadHandler(
      filename = "config.js",
      content = function(file) {
        writeLines(TEXT(), file)
        }
    )


}

# Run the application
shinyApp(ui = ui, server = server)
