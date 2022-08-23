create_items_from_file <- function(file_name) {
  
library(readr)
library(purrr)

# file_name = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMaker/admin/CRTMCQ4.csv"
DF = readr::read_csv(paste0(file_name), col_types = cols(.default = col_character()))

task_name = gsub("(.*)\\..*", "\\1", basename(file_name))


1:nrow(DF) |>
purrr::map( ~ {
  
  # Set all parameters to default value
  MAP_preamble = NULL
  MAP_prompt = NULL
  MAP_options = NULL
  MAP_random_options = "random_options: true,"
  MAP_horizontal = "horizontal: false,"
  
  # Last parameter, do not include "," at the end
  MAP_required = "required: true"
  
  
  # Process parameters
  item_number = sprintf("%03d", .x)
  
  if("options" %in% colnames(DF)) MAP_options = paste0("options: ['", paste(strsplit(x = DF$options[.x], split = ",") |> unlist() |> trimws(), collapse = "', '"), "'],")
  if("preamble" %in% colnames(DF)) MAP_preamble = paste0("preamble: '", DF$preamble[.x], "',")
  if("prompt" %in% colnames(DF)) MAP_prompt = paste0("prompt: '", DF$prompt[.x], "',")
  if("random_options" %in% colnames(DF)) MAP_random_options = paste0("random_options: ", DF$random_options[.x], ",")
  if("required" %in% colnames(DF)) MAP_required = paste0("required: ", DF$required[.x], "")
  
  
  # TODO: The structure of the CHUNK is different in different plugins???
  
  # Create chunk
  ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", DF$plugin[.x], "',
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
