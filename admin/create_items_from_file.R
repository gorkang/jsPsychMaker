create_items_from_file <- function(file_name) {
  

# require_movement:true, 
  # required: true, 
  # min: 1, max: 7, 
  # slider_width: 500, 
  # slider_start: 4, step: 1,  
  # button_label: "Siguiente",
  
library(readr)
library(purrr)
library(janitor)

# file_name = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMaker/admin/example_tasks_new_protocol/CRT7/CRT7.csv"
DF = readr::read_csv(paste0(file_name), col_types = cols(.default = col_character())) |> 
  janitor::remove_empty(which = "cols") # Remove columns when all are NAs

task_name = gsub("(.*)\\..*", "\\1", basename(file_name))


1:nrow(DF) |>
purrr::map( ~ {
  
  # Plugin
  PLUGIN = DF$plugin[.x]
  
  
  
  # TODO: NEED TO INCLUDE SOME DEFAULTS
  
  # random_options: true
  # require_movement: true
  # required: true
  


  # Select all minus IF and plugin
  DF_MAP = DF[.x,] |> select(-ID, -plugin) #, -starts_with("stimulus")

  # Create a parameter vector with everything in the csv
  ALL = 1:ncol(DF_MAP) |>
    map(~{
      # .x = 2
      is_a_number = grepl("^[0-9]+$", DF_MAP[.x])
      is_a_logical = DF_MAP[.x] %in% c("true", "false")
      is_an_enumeration = grepl(",", DF_MAP[.x])

      # If it contains an enumeration
      if (is_an_enumeration) {
        DF_MAP[.x] = paste0("['&nbsp;", paste(strsplit(x = DF_MAP[[.x]], split = ",") |> unlist() |> trimws(), collapse = "', '&nbsp;"), "']")
        
        # If it is not logical and not a number
      } else if (!is_a_logical & !is_a_number) {
        DF_MAP[.x] = paste0("'", DF_MAP[.x], "'")
      }
      # Final string
      paste0(colnames(DF_MAP[.x]), ": ", DF_MAP[.x])
    }) |>
    unlist() |> paste(collapse = ",\n")



  # Create chunk ------------------------------------------------------------

  # We insert the parameters inside questions (if it's a survey plugin)
  if (grepl("survey", PLUGIN)) {

    ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN, "',
    questions: [{
      ", ALL, "
    }],
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", task_name, ".push(question", item_number, ");", "\n")

  # We don't use the questions vector otherwise
  } else {

    ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN, "',
    ", ALL, ",
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", task_name, ".push(question", item_number, ");", "\n")

  }


  # Clean empty lines leaved by empty parameters
  ITEM_output = gsub("\\n[[:space:]]{1,100}\\n", "\\\n", ITEM_output_RAW)

  ITEM_output

  
  
  
  
})

}

