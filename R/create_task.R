create_task <- function(task_folder, folder_output = NULL, INSTRUCTIONS) {

  # DEBUG
  # task_folder = "admin/example_tasks_new_protocol/CRTMCQ4/"
  # folder_output = "tasks/CRTMCQ4/"
  
  invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))
  setup()
  
  # Parameters
  task_name = gsub("(.*)\\..*", "\\1", basename(task_folder))
  HTMLs = list.files(task_folder, recursive = TRUE, pattern = "\\.html", full.names = TRUE)
  CSV = list.files(task_folder, recursive = TRUE, pattern = "\\.csv", full.names = TRUE)
  task_name_CSV = gsub("(.*)\\..*", "\\1", basename(CSV))
  
  # Output filename
  if(is.null(folder_output)) folder_output = task_folder # If folder_output = NULL, save in task_folder
  name_output = paste0(folder_output, "/", task_name, ".js")
  
  
  # CHECK only one CSV  
  if (length(CSV) != 1) cli::cli_abort(c("We need 1 CSV file but you have {length(CSV)}"))
  if (task_name != task_name_CSV) cli::cli_abort(c("The name of the folder ({.code {task_name}}) and the .csv inside ({.code {task_name_CSV}}) need to be equal."))
  
  
  # If there are no HTML files, use default instructions
  if (length(HTMLs) == 0) {
    task_instructions = paste0("<p><left><b><big>", task_name, "</big></b><br/>Lee con atención y contesta las siguientes preguntas.</left></p>")
  } else {
    task_instructions = HTMLs  
  }
  
  cli::cli_alert_info("CSV: {CSV}")
  cli::cli_alert_info("HTML: {task_instructions}")
  

  # Create task chunks ------------------------------------------------------

    # Create items
    ITEMS = create_items_from_file(file_name = CSV) |> unlist() |> paste(collapse = "")
    
    # Create instructions
    INSTRUCTIONS_out = create_instructions(INSTRUCTIONS = task_instructions, task_name = task_name)
    
    # Create intro [DO NOT CHANGE TABULATION, etc.]
    INTRO = 
    paste0("/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
    questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
    questions.push( check_fullscreen('", task_name,"') );
    ", task_name," = [];    //temporal timeline
    ")
  
    # Create outro [DO NOT CHANGE TABULATION, etc.]
    OUTRO = paste0("
    // Randomize order of items
    if (debug_mode === false) ", task_name," = jsPsych.randomization.repeat(", task_name,",1);
    ", task_name, ".unshift(instruction_screen_experiment);
    questions.push.apply(questions, ", task_name,");
    
    call_function('", task_name,"');
    ")
    
    # JOIN all
    FINAL_TASK = paste0(INTRO, INSTRUCTIONS_out, ITEMS, OUTRO)
    

  # Output ------------------------------------------------------------------

  cli::cli_alert_success("Saving task in {name_output}")
    
  # Save to file
  cat(FINAL_TASK, file = name_output, sep = "\n", append = FALSE) 

}
