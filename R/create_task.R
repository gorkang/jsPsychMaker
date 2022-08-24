create_task <- function(file_name, folder_output = NULL, INSTRUCTIONS) {

  # DEBUG
  # file_name = "admin/tasks/CRTMCQ4/CRTMCQ4.csv"
  # INSTRUCTIONS = "admin/tasks/CRTMCQ4/CRTMCQ4_instructions.html"
  # folder_output = "tasks/CRTMCQ4/"
  
  invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))
  
  # Parameters
  task_name = gsub("(.*)\\..*", "\\1", basename(file_name))
  
  
  # Output filename
  if(is.null(folder_output)) folder_output = dirname(file_name)
  name_output = paste0(folder_output, "/", task_name, ".js")
  
  
  ITEMS = create_items_from_file(file_name = file_name) |> unlist() |> paste(collapse = "")
  
  INSTRUCTIONS_out = create_instructions(INSTRUCTIONS = INSTRUCTIONS, task_name = task_name)
  
  INTRO = 
  paste0("/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
  
  questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
  questions.push( check_fullscreen('", task_name,"') );
  ", task_name," = [];    //temporal timeline
  ")
  
  OUTRO = paste0("
  // Randomize order of items
  if (debug_mode === false) ", task_name," = jsPsych.randomization.repeat(", task_name,",1);
  ", task_name, ".unshift(instruction_screen_experiment);
  questions.push.apply(questions, ", task_name,");
  
  call_function('", task_name,"');
  ")
  
  
  FINAL_TASK = paste0(INTRO, INSTRUCTIONS_out, ITEMS, OUTRO)
  
  cli::cli_alert_success("Saving task in {name_output}")
  cat(FINAL_TASK, file = name_output, sep = "\n", append = FALSE)
  
  
  
}

# create_task(file_name = "admin/tasks/CRTMCQ4/CRTMCQ4.csv", INSTRUCTIONS = c("admin/tasks/CRTMCQ4/CRTMCQ4_instructions.html", "admin/tasks/CRTMCQ4/CRTMCQ4_instructions2.html"))
