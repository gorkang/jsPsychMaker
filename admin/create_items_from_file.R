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

# file_name = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMaker/admin/tasks_new_protocol/AnsMat/AnsMat.csv"
DF = readr::read_csv(paste0(file_name), col_types = cols(.default = col_character())) |> 
  janitor::remove_empty(which = "cols") # Remove columns when all are NAs

task_name = gsub("(.*)\\..*", "\\1", basename(file_name))


1:nrow(DF) |>
purrr::map( ~ {
  
  # Plugin
  PLUGIN = DF$plugin[.x]
  
  # Set all parameters to default value
  MAP_preamble = NULL
  MAP_prompt = NULL
  MAP_stimulus = NULL
  MAP_options = NULL
  MAP_random_options = "random_options: true,"
  MAP_horizontal = "horizontal: false,"
  
  # Slider
  MAP_require_movement = "require_movement: true,"
  MAP_labels = NULL
  
  
  # Last parameter, do not include "," at the end
  MAP_required = "required: true"
  
  
  # Process parameters
  item_number = sprintf("%03d", .x)
  
  if ("options" %in% colnames(DF)) MAP_options = paste0("options: ['&nbsp;", paste(strsplit(x = DF$options[.x], split = ",") |> unlist() |> trimws(), collapse = "', '&nbsp;"), "'],")
  if ("preamble" %in% colnames(DF)) MAP_preamble = paste0("preamble: '", DF$preamble[.x], "',")
  if ("prompt" %in% colnames(DF)) MAP_prompt = paste0("prompt: '", DF$prompt[.x], "',")
  if ("stimulus" %in% colnames(DF)) MAP_stimulus = paste0("stimulus: '", DF$stimulus[.x], "',")
  if ("random_options" %in% colnames(DF)) MAP_random_options = paste0("random_options: ", DF$random_options[.x], ",")
  if ("required" %in% colnames(DF)) MAP_required = paste0("required: ", DF$required[.x], "")
  
  # Slider
  if ("labels" %in% colnames(DF)) MAP_labels = paste0("labels: ['&nbsp;", paste(strsplit(x = DF$labels[.x], split = ",") |> unlist() |> trimws(), collapse = "', '&nbsp;"), "'],")
  if ("require_movement" %in% colnames(DF)) MAP_require_movement = paste0("require_movement: ", DF$require_movement[.x], ",")
  
  

  # CHECKS specific plugins -------------------------------------------------
  if (PLUGIN == "html-slider-response"){
    if (is.null(MAP_stimulus) & !is.null(MAP_prompt)) cli::cli_alert_warning("html-slider-response needs a stimulus, not only a prompt. Using prompt as stimulus")
    MAP_stimulus = gsub("prompt: ", "stimulus: ", MAP_prompt)
    MAP_prompt = NULL
  } 
  
  
  # TODO: The structure of the CHUNK is different in different plugins???
  
  # Create chunk
  ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN, "',
    ", MAP_stimulus, "
    ", if (PLUGIN == "html-slider-response") {MAP_prompt}, " 
    ", if (PLUGIN == "html-slider-response") {MAP_labels}, " 
    ", MAP_require_movement, "

    questions: [{
      ", MAP_preamble, "
      ", MAP_prompt, "
      ", MAP_options, "
      ", MAP_random_options, "
      ", MAP_horizontal, "
      ", MAP_required, "
    }],
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", task_name, ".push(question", item_number, ");", "\n")
  
  # Clean empty lines leaved by empty parameters
  ITEM_output = gsub("\\n[[:space:]]{1,100}\\n", "\\\n", ITEM_output_RAW)
  
  ITEM_output
  
})

}

