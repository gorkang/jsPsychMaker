#' create_task
#' 
#' This is a description
#'
#' @param folder_task Add folder of the task 
#' @param folder_output Where to create the task
#' @param options_separator different options are by default separated by ,
#' @param show_messages TRUE/FALSE
#'
#' @return Creates a task
#' @export
#' @importFrom cli cli_alert_success cli_alert_info cli_abort
#' @importFrom here here
create_task <- function(folder_task, folder_output = NULL, options_separator = ",", show_messages = FALSE) {

  # DEBUG
  # .x = 1
  # folder_task = paste0(tasks_folder, "/", TASKS[.x], "/")
  # folder_task = "admin/example_tasks_new_protocol/BNT/"
  # folder_output = "tasks/BNT/"
  # folder_output = NULL
  # options_separator=","
  # devtools::load_all()

  
  # Parameters
  folder_task = here::here(folder_task)
  task_name = gsub("(.*)\\..*", "\\1", basename(folder_task))
  HTMLs = list.files(folder_task, recursive = TRUE, pattern = "\\.html", full.names = TRUE)
  input_CSV_XLS_files = list.files(folder_task, recursive = TRUE, pattern = "\\.csv|\\.xls|\\.xlsx", full.names = TRUE)
  task_name_CSV = gsub("(.*)\\..*", "\\1", basename(input_CSV_XLS_files))
  
  HTMLs = here::here(HTMLs)
  
  # Output filename
  if(is.null(folder_output)) folder_output = folder_task # If folder_output = NULL, save in folder_task
  folder_output = here::here(folder_output)
  
  name_output = paste0(folder_output, "/tasks/", task_name, ".js")
  if (!file.exists(name_output)) dir.create(dirname(name_output), recursive = TRUE, showWarnings = FALSE)
  
  
  # CHECK only one input_CSV_XLS_files  
  if (length(input_CSV_XLS_files) != 1) cli::cli_abort(c("We need 1 CSV/XLS file but you have {length(input_CSV_XLS_files)}"))
  if (task_name != task_name_CSV) cli::cli_abort(c("The name of the folder ({.code {task_name}}) and the .csv inside ({.code {task_name_CSV}}) need to be equal."))
  
  
  # If there are no HTML files, use default instructions 
  if (length(HTMLs) == 0) {
    task_instructions = paste0("<p><left><b><big>", task_name, "</big></b><br/>Lee con atenci\u00F3n y contesta las siguientes preguntas.</left></p>")
    task_instructions_message = ".html NOT found. Using default instructions."
  } else {
    task_instructions = HTMLs  
    task_instructions_message = paste0(basename(dirname(task_instructions)), "/", basename(task_instructions))
  }

  CSV_XLS_message = paste0(basename(dirname(input_CSV_XLS_files)), "/", basename(input_CSV_XLS_files))
  if (show_messages == TRUE) cli::cli_alert_info("CSV/XLS: {.code {CSV_XLS_message}}")
  if (show_messages == TRUE) cli::cli_alert_info("HTML: {task_instructions_message}")
  
  

  # Create task chunks ------------------------------------------------------

    # Create items
    ITEMS = create_items_from_file(file_name = input_CSV_XLS_files, 
                                   folder_output = folder_output, 
                                   options_separator = options_separator,
                                   show_messages = show_messages) |> 
    unlist() |> paste(collapse = "")
    
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
    
    
  # Add media ---------------------------------------------------------------
    
    
    # Extract plugins
    PLUGINS_used_raw = gsub(".*type: '(.*?)'.*", "\\1", ITEMS)
    # stringr::str_replace_all(string = ITEMS, pattern = "type: '(.*?)'", replacement = "\\1")
    
    # If we enforce the structure of canonical/media...  we can directly use the stimulus parameter in the input_CSV_XLS_files file
    images_task = list.files(paste0(folder_task, "/media/images"), recursive = TRUE, full.names = TRUE, pattern = "\\.jpg|\\.png")
    videos_task = list.files(paste0(folder_task, "/media/videos"), recursive = TRUE, full.names = TRUE, pattern = "\\.mp4|\\.avi")
    audios_task = list.files(paste0(folder_task, "/media/audios"), recursive = TRUE, full.names = TRUE, pattern = "\\.mp3|\\.wav")
    
    basename_dir_images = ifelse(length(images_task) > 0, basename(dirname(images_task)), "")
    basename_dir_videos = ifelse(length(videos_task) > 0, basename(dirname(videos_task)), "")
    basename_dir_audios = ifelse(length(audios_task) > 0, basename(dirname(audios_task)), "")
    
    # Check media inside TASK subfolder
    if ((length(images_task) > 1 & basename_dir_images == "images") | (length(videos_task) > 1 & basename_dir_videos == "videos") | (length(audios_task) > 1 & basename_dir_audios == "audios")) {
      cli::cli_abort("Make sure the images, videos o audios are inside /media/[images, videos or audios]/[NAME OF THE TASK]")
    }
    
    # CHECK media files NOT in "/media/images/"
    ALL_files = list.files(paste0(folder_task), recursive = TRUE, full.names = TRUE)
    
    # All minus things present in image, videos and audios vectors
    ALL_minus_proper_media = ALL_files[!ALL_files %in% images_task & !ALL_files %in% videos_task & !ALL_files %in% audios_task]
    # Get rid of expected files
    non_expected_files = ALL_minus_proper_media[!grepl("\\.csv|\\.xls|\\.xlsx|\\.html|\\.txt|\\.js", ALL_minus_proper_media)]
    
    # CHECKS ---
    
      # Non expected files
      if (length(non_expected_files) != 0) cli::cli_abort(c("Files out of place in {folder_output}:  {.code {basename(dirname(non_expected_files))}/{basename(non_expected_files)}}\n\n", 
                                                            "If you have media files, move them to: \n-Images: 'media/images' \n-Videos: 'media/videos' \n-Audio: 'media/audios'\n\n"))
    
      # If we detect an image, video or audio plugin and no files, warning
      if (any(grepl("image|video|audio", PLUGINS_used_raw)) & length(images_task) == 0 & length(videos_task) == 0 & length(audios_task) == 0) cli::cli_abort(c("Media plugin detected, but no media files found in :  {.code {task_name}}\n\n", 
                                                                                                                                                               "If you have media files, move them to: \n-Images: 'media/images' \n-Videos: 'media/videos' \n-Audio: 'media/audios'\n\n"))
    
    # Copy files ---
    if (length(images_task) != 0) {
      destination_images = paste0(folder_output, "/media/images/", basename_dir_images, "/", basename(images_task))
      dir.create(dirname(destination_images), recursive = TRUE, showWarnings = FALSE)
      file.copy(from = images_task, to = destination_images)
    }
    
    if (length(videos_task) != 0) {
      destination_videos = paste0(folder_output, "/media/videos/", basename_dir_videos, "/", basename(videos_task))
      dir.create(dirname(destination_videos), recursive = TRUE, showWarnings = FALSE)
      file.copy(from = videos_task, to = destination_videos)
    }
    if (length(audios_task) != 0) {
      destination_audios = paste0(folder_output, "/media/audios/", basename_dir_audios, "/", basename(audios_task))
      dir.create(dirname(destination_audios), recursive = TRUE, showWarnings = FALSE)
      file.copy(from = audios_task, to = destination_audios)
    }
    
    

  # Output ------------------------------------------------------------------

  if (show_messages == TRUE) cli::cli_alert_success("Saving task in {name_output}")
    
  # Save to file
  cat(FINAL_TASK, file = name_output, sep = "\n", append = FALSE) 

}
