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



# INITIAL VARS ------------------------------------------------------------

available_tasks = gsub("\\.js", "", list.files(here::here("canonical_protocol/tasks/")))

# WIP
CONFIG_file = readLines(here::here("canonical_protocol/config.js"))
# CONFIG_file[grepl("pid = .*", CONFIG_file)]
DF_config = stringi::stri_extract_all(str = CONFIG_file, regex = "(.*) = (.*)")
stringr::str_split(DF_config, pattern = " = ")
# UI ----------------------------------------------------------------------

ui <- fluidPage(
  # tags$head(
  #   useShinyjs(),
  #   tags$script(src='https://cdn.tiny.cloud/1/zjy37wwdciq19l8tgavmu8ef2yavy17lzfaxigmlmyozo66p/tinymce/5/tinymce.min.js')
  # ),

  sidebarLayout(

  # Sidebar -----------------------------------------------------------------

    sidebarPanel(width = 2,
      selectInput(inputId = "controller", label = "Show", choices = c("jsPsychMakeR", "jsPsychMonkeys", "jsPsychHelpeR")),
      downloadButton(outputId = "download_button", label = "Create config")
    ),


  # Main panel -------------------------------------------------------------

    mainPanel(
      tabsetPanel(
        id = "switcher",
        type = "hidden",

        tabPanelBody("jsPsychMakeR", {

        # jsPsychMakeR -------------------------------------------------------------------

          mainPanel(

            shiny::h2("Select your experiment parameters"),
            shiny::hr(),

            shiny::h3("Tasks"),
            shiny::hr(),

            fluidRow(
              column(width = 5,
                     selectInput("num_random", "select number of random blocks", choices = seq(0, 5, 1), selected = 1, width = "100")
              ),
              column(width = 5,
                     selectInput("num_sequential", "select number of sequential blocks", choices = seq(0, 5, 1), selected = 1, width = "100")
              )
            ),

            selectInput(inputId = 'first_tasks',
                        label = 'first_tasks',
                        choices = available_tasks,
                        multiple = TRUE,
                        selectize = TRUE,
                        width = "100%",
                        selected = c("Consent","DEMOGR")),

            selectInput(inputId = 'last_tasks',
                        label = 'last_tasks',
                        choices = available_tasks,
                        multiple = TRUE,
                        selectize = TRUE,
                        width = "100%",
                        selected = c("Goodbye")),

            uiOutput("dynamic_sequencial_blocks"),
            uiOutput("dynamic_random_blocks"),
            uiOutput("dynamic_tasks_input"),


            shiny::h3("Other parameters"),
            shiny::hr(),

            numericInput(inputId = "pid", label = "pid", value = 999, width = "100"),
            numericInput(inputId = "max_participants", label = "max_participants", value = 100, width = "100"),
            numericInput(inputId = "max_time", label = "max_time (h):", value = 24),

            shiny::hr(),

            fluidRow(

              column(width = 4,
                     switchInput(inputId = "online", label = "online", value = TRUE, width = "100")
              ),
              column(width = 4,
                     switchInput(inputId = "accept_discarded", label = "accept_discarded", value = TRUE, width = "100")
              ),
              column(width = 4,
                     switchInput(inputId = "random_id", label = "random_id", value = FALSE, width = "100")
              )

            ),

            shiny::h3("Intro experiment"),
            shiny::hr(),
            textInput("var_researcher_email", "var_researcher_email", "youremail@email.com", placeholder = "youremail@email.com"),

            textAreaInput(inputId = "intro_HTML", label = "intro_HTML",
                          value = paste0('<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>',
                                         'Para cambiar este texto, edita la variable intro_HTML en config.js<BR><BR>',
                                         'Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>',
                                         'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>'),
                          width = "100%", rows = 5),

            # tags$script("tinymce.init({
            # selector: 'textarea',
            # toolbar_mode: 'floating',
            # tinycomments_mode: 'embedded',
            # tinycomments_author: 'Author name',});")






          )
        }),
        tabPanelBody("jsPsychMonkeys", {

        # jsPsychMonkeys -------------------------------------------------------------------

          "jsPsychMonkeys content"



          }),
        tabPanelBody("jsPsychHelpeR", {

          # jsPsychHelpeR -------------------------------------------------------------------
          "HELPER 3 content"

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

          selectInput(inputId = paste0("secuentially_ordered_tasks_", i),#'secuentially_ordered_tasks_1',
                      label = paste0("secuentially_ordered_tasks_", i),
                      choices = available_tasks,
                      multiple = TRUE,
                      selectize = TRUE,
                      width = "100%",
                      selected = c(""))
        })
      }
    })

    output$dynamic_random_blocks <- renderUI({
      num_random <- as.integer(input$num_random)

      if (num_random > 0) {

        lapply(1:num_random, function(i) {

          selectInput(inputId = paste0("randomly_ordered_tasks_", i),#'secuentially_ordered_tasks_1',
                      label = paste0("randomly_ordered_tasks_", i),
                      choices = available_tasks,
                      multiple = TRUE,
                      selectize = TRUE,
                      width = "100%",
                      selected = c(""))
        })

      }
    })


  # Tasks -------------------------------------------------------------------

  output$dynamic_tasks_input <- renderUI({

    # num_random <- as.integer(input$num_random)

    INPUTS_random = ifelse(input$num_random > 0, list(paste0("randomly_ordered_tasks_", 1:input$num_random)), "")
    INPUTS_sequential = ifelse(input$num_sequential > 0, list(paste0("secuentially_ordered_tasks_", 1:input$num_sequential)), "")

    selectInput(inputId = 'tasks',
                label = 'Order of task blocks',
                choices = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"),
                multiple = TRUE,
                selectize = TRUE,
                width = "100%",
                selected = c("first_tasks", unlist(INPUTS_random), unlist(INPUTS_sequential), "last_tasks"))


  })



  # Button ------------------------------------------------------------------

    TEXT = reactive({

      INPUT_config = readLines(here::here("canonical_protocol/config.js"))

      list_of_inputs <- reactiveValuesToList(input)
      print(list_of_inputs)

      # XXX = list(online = TRUE, max_participants = "1", last_tasks = "Goodbye")
      # list_of_inputs = XXX

      replace_TAG <- function(name_tag) {

        # name_tag = XXX[3]

        name_text = names(name_tag[1])
        value_text = name_tag[1]
        # str(value_text[[1]])

        if(is.null(all_of(value_text[[1]]))) value_text = ""

        # Prepare vars for js file
        if(value_text %in% c(TRUE, FALSE)) {
          value_text = tolower(value_text)
        } else if (is.character(value_text[[1]])) {
          value_text = paste0("'", value_text, "'")
        } else {
          value_text = value_text
        }


        if (name_text == "max_time") value_text = paste0("'", sprintf("%02d", value_text[[1]]), ":00:00'")


        INPUT_config <<- gsub(pattern = paste0(name_text, " = .*"),
             replacement = paste0(name_text, " = ", value_text), INPUT_config)

        return(INPUT_config)


      }


      OUTPUT_config =
        1:length(list_of_inputs) %>%
        purrr::map(~{
          # .x = 1
          replace_TAG(list_of_inputs[.x])
        })


      # OUTPUT_config = gsub("intro_HTML = .*", paste0("intro_HTML = `", input$intro_HTML, "`"), INPUT_config)

    OUTPUT = OUTPUT_config[[length(OUTPUT_config)]]
    OUTPUT
      # list_of_inputs %>% unlist()

    })

    output$download_button <- downloadHandler(
      filename = "config.js",

      # filename = function(){
      #   paste("data-", Sys.Date(), ".txt", sep = "")
      #   # "config.js"
      # },
      content = function(file) {
        # writeLines(paste(text, collapse = ", "), file)
        writeLines(TEXT(), file)

        # write.table(paste(text,collapse=", "), file,col.names=FALSE)
      }
    )





}

# Run the application
shinyApp(ui = ui, server = server)
