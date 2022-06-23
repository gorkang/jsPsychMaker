# This shiny app creates a canonical_protocol/config.js copy using the shiny inputs
# Allows to configure a protocol using a UI

# TODO: 
  # - READ canonical_protocol/config.js to set default options in each shiny inputs
  # - Implement all options (outro, debug, ...)
  # - Use HTML editor for intro/outro:
    # https://github.com/deepanshu88/ShinyEditor
    # https://thedubworld.wordpress.com/2016/03/13/adding-a-html-editor-to-shiny/


library(shiny)
library(shinyWidgets) #https://dreamrs.github.io/shinyWidgets/
# library(shinyjs)
library(dplyr, warn.conflicts = FALSE)
library(tidyr)
library(purrr)


# INITIAL VARS ------------------------------------------------------------

available_tasks <- gsub("\\.js", "", list.files(here::here("canonical_protocol/tasks/")))

# Use config.js to fill out input parameters
CONFIG_file = readLines(here::here("canonical_protocol/config.js"))

# Function to extract individual strings from js vectors
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


get_params <- function(variable_str, what) {
  # variable_str = "randomly_ordered_tasks_1"
  # what = "value"
  DF_config %>% filter(variable == variable_str) %>% pull(what) %>% unlist()
}

get_params("randomly_ordered_tasks_1", "value")
get_params("secuentially_ordered_tasks_1", "value")


# UI ----------------------------------------------------------------------

ui <- fluidPage(

  # Sidebar -----------------------------------------------------------------
  
  sidebarLayout(
    sidebarPanel(
      width = 2,
      shiny::h3("Select your experiment parameters"),
      shiny::hr(),
      
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

        tabPanel("Tasks", {

        # Tasks -------------------------------------------------------------------

          mainPanel(

            shiny::h3("Tasks"),
            shiny::hr(),
            shiny::h4("# of blocks"),
            shiny::HTML("Select how many random and sequential blocks of taks you need"),
            shiny::br(),shiny::br(),
            
            fluidRow(
              column(width = 5, selectInput("num_random", "# random blocks", choices = seq(0, 5, 1), selected = 1, width = "150")),
              column(width = 5, selectInput("num_sequential", "# sequential blocks", choices = seq(0, 5, 1), selected = 0, width = "150"))
            ),
            
            shiny::hr(),
            shiny::h4("Tasks per block"),
            shiny::HTML("Select the tasks you want in each block"),
            shiny::br(),shiny::br(),
            
            selectInput(inputId = get_params("first_tasks", "variable"), label = get_params("first_tasks", "variable"), selected = get_params("first_tasks", "value"),  choices = available_tasks, multiple = TRUE, selectize = TRUE, width = "100%"),
            uiOutput("dynamic_sequencial_blocks"),
            uiOutput("dynamic_random_blocks"),
            selectInput(inputId = get_params("last_tasks", "variable"), label = get_params("last_tasks", "variable"), selected = get_params("last_tasks", "value"),  choices = available_tasks, multiple = TRUE, selectize = TRUE, width = "100%"),
            
            shiny::hr(),
            shiny::h4("Order of blocks"),
            shiny::HTML("Select the order in which the blocks will be presented"),
            shiny::br(),shiny::br(),
            
            uiOutput("dynamic_tasks_input"),



          )
        }),
        
        

        # Other parameters --------------------------------------------------------

        
        tabPanel("Other parameters", {
          
          mainPanel(
            
            shiny::h3("Other parameters"),
            shiny::hr(),
            
            shiny::h4("Numeric parameters"),
            # shiny::HTML("Enter number"),
            shiny::br(),shiny::br(),
            
            
            numericInput(inputId = get_params("pid", "variable"), label = get_params("pid", "variable"), value = get_params("pid", "value"), width = "100"),
            numericInput(inputId = get_params("max_participants", "variable"), label = get_params("max_participants", "variable"), value = get_params("max_participants", "value"), width = "100"),
            numericInput(inputId = get_params("max_time", "variable"), label = get_params("max_time", "variable"), value = get_params("max_time", "value"), width = "100"),
            
            shiny::hr(),
            shiny::h4("Logical parameters"),
            # shiny::HTML("Click on switches"),
            shiny::br(),shiny::br(),
            switchInput(inputId = get_params("online", "variable"), label = get_params("online", "variable"), value = get_params("online", "value"), width = "100"),
            switchInput(inputId = get_params("accept_discarded", "variable"), label = get_params("accept_discarded", "variable"), value = get_params("accept_discarded", "value"), width = "100"),
            switchInput(inputId = get_params("random_id", "variable"), label = get_params("random_id", "variable"), value = get_params("random_id", "value"), width = "100"),
            switchInput(inputId = get_params("debug_mode", "variable"), label = get_params("debug_mode", "variable"), value = get_params("debug_mode", "value"), width = "100")
          )


          }),
        

      # Intro experiment --------------------------------------------------------

        
        tabPanel("Text parameters", {

          mainPanel(
            shiny::h3("Text parameters"),
            shiny::hr(),
            shiny::h4("Intro screens"),
            shiny::HTML("Text to show in the initial screen (intro_HTML) and in the screen after the user ID is assigned (outro_HTML)"),
            shiny::br(),shiny::br(),
            
            textInput(inputId = get_params("var_researcher_email", "variable"), label = get_params("var_researcher_email", "variable"), value = get_params("var_researcher_email", "value"), placeholder = "youremail@email.com"),
            
            textAreaInput(inputId = get_params("intro_HTML", "variable"), label = get_params("intro_HTML", "variable"), value = get_params("intro_HTML", "value"), width = "100%", rows = 5),
            textAreaInput(inputId = get_params("outro_HTML", "variable"), label = get_params("outro_HTML", "variable"), value = get_params("outro_HTML", "value"), width = "100%", rows = 5),
            
            shiny::hr(),
            shiny::h4("Messages"),
            shiny::HTML("Text of messages shown in protocol"),
            shiny::br(),shiny::br(),
            
            textInput(inputId = get_params("message_str", "variable"), label = get_params("message_str", "variable"), value = get_params("message_str", "value")),
            
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
      available_tasks <- gsub("\\.js", "", list.files(here::here("canonical_protocol/tasks/")))

      if (num_sequential > 0) {

        lapply(1:num_sequential, function(i) {

          selectInput(inputId = paste0("secuentially_ordered_tasks_", i),#'secuentially_ordered_tasks_1',
                      label = paste0("secuentially_ordered_tasks_", i),
                      choices = available_tasks,
                      multiple = TRUE,
                      selectize = TRUE,
                      width = "100%",
                      selected = get_params(paste0("secuentially_ordered_tasks_", i), "value")
                      )
        })
      }
    })

    output$dynamic_random_blocks <- renderUI({
      
      num_random <- as.integer(input$num_random)
      available_tasks <- gsub("\\.js", "", list.files(here::here("canonical_protocol/tasks/")))

      if (num_random > 0) {

        lapply(1:num_random, function(i) {
          
          selectInput(inputId = paste0("randomly_ordered_tasks_", i), #'randomly_ordered_tasks_1',
                      label = paste0("randomly_ordered_tasks_", i),
                      choices = available_tasks,
                      multiple = TRUE,
                      selectize = TRUE,
                      width = "100%",
                      selected = get_params(paste0("randomly_ordered_tasks_", i), "value")
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

    selectInput(inputId = 'tasks',
                label = 'Order of task blocks',
                choices = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"),
                multiple = TRUE,
                selectize = TRUE,
                width = "100%",
                # selected = get_params("tasks", "value") # If we use this, the selection does not change automatically when adding more random or sequential blocks
                selected = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks")
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
      

      # OUTPUT_config = gsub("intro_HTML = .*", paste0("intro_HTML = `", input$intro_HTML, "`"), INPUT_config)

      # list_of_inputs %>% unlist()

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
