#' create_instructions
#'
#' @param INSTRUCTIONS HTML files or character vector
#' @param task_name Name of task
#' @param jsPsych_version By default jsPsych6. Can also be 7 for jsPsych7
#'
#' @return Returns a string with the instructions for a task
# #' @export
#' @importFrom purrr map
create_instructions <- function(INSTRUCTIONS, task_name, jsPsych_version = 6) {
  
  # Can input INSTRUCTIONS as one or more files, and one or more elements (HTML code) in a vector or a list
  MAP_instructions = 
    1:length(INSTRUCTIONS) |> 
    
    purrr::map(~ {
      
      INSTRUCTIONS_clean = INSTRUCTIONS |> unlist()
      
      if (all(file.exists(INSTRUCTIONS_clean))) {
        INSTRUCTIONS_text = readLines(INSTRUCTIONS[.x])
      } else {
        INSTRUCTIONS_text = INSTRUCTIONS_clean[.x]
      }
      
      FINAL_string = ""
      if (.x == 1) FINAL_string = paste0("pages: [`", INSTRUCTIONS_text |> paste(collapse = ""))
      if (.x != 1) FINAL_string = paste0("\t    `", INSTRUCTIONS_text |> paste(collapse = ""))
      
      if (.x < length(INSTRUCTIONS_clean)) FINAL_string[2] = "`,\n" 
      if (.x == length(INSTRUCTIONS_clean)) FINAL_string[2] = "`]"
      FINAL_string

    }) |> unlist() |> paste(collapse = "")
  
  
  if (jsPsych_version == 7) {
    string_type = "type: jsPsychInstructions"
  } else {
    string_type = "type: 'instructions'"
  }
  
  INSTRUCTIONS_out = paste0("
  var instruction_screen_experiment = {
    ",# type: 'instructions',
    string_type, ",
    ", paste(MAP_instructions, collapse = ""), ",
    data:{trialid: '", task_name,"_000', procedure: '", task_name,"'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
      }
    };
    ")
  
  return(INSTRUCTIONS_out)
}
