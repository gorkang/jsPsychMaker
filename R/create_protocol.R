#' create_protocol
#'
#' @param folder_tasks Add folder of the protocol 
#' @param canonical_tasks Add already available tasks to the protocol
#' @param folder_output Where to create the protocol
#' @param launch_browser TRUE/FALSE
#' @param which_browser firefox/chrome
#' @param piloting_task Name of task to pilot (will be only task in config.js)
#' @param force_download_media download media even if the file already exists
#' @param show_messages TRUE/FALSE
#' @param block_tasks Where to insert the tasks: randomly_ordered_tasks_1 or secuentially_ordered_tasks_1
#' @param jsPsych_version By default jsPsych6. Can also be 7 for jsPsych7
#' @param options_separator different options are by default separated by ;
#'
#' @return Creates a full protocol
#' @export
#' @importFrom purrr map_df
#' @importFrom cli cli_h1 cli_h2 cli_alert_success cli_alert_info cli_abort cli_alert_danger
#' @importFrom purrr walk
#' @importFrom janitor remove_empty
#' @importFrom here here
#' @importFrom utils browseURL
#' 
#' @examples
#' \dontrun{
#' 
#' # Create a protocol with the tasks AIM, EAR and IRI in ~/Downloads/protocol999 
#' # and open it in a browser
#'   jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI"),
#'                                 folder_output = "~/Downloads/protocol999", 
#'                                 launch_browser = TRUE)
#' 
#' 
#' # Create protocol using csv/xls files:
#' 
#' # 1) Extract example tasks
#'   jsPsychMaker::copy_example_tasks(destination_folder = "~/Downloads/ExampleTasks")
#'   
#' # 2) Create protocol
#'   jsPsychMaker::create_protocol(folder_tasks = "~/Downloads/ExampleTasks/", 
#'                                 folder_output = "~/Downloads/protocol999", 
#'                                 launch_browser = TRUE)
#'
#'
#' # Create a protocol with canonical tasks and tasks from csv/xls files: 
#' 
#'  jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI"),
#'                                 folder_tasks = "~/Downloads/ExampleTasks/", 
#'                                 folder_output = "~/Downloads/protocol999", 
#'                                 launch_browser = TRUE)
#' }
#'
create_protocol <- function(folder_tasks = NULL, 
                            canonical_tasks = NULL,
                            folder_output = "~/Downloads/new_protocol_999", 
                            force_download_media = FALSE,
                            launch_browser = FALSE, 
                            which_browser = "firefox",
                            piloting_task = NULL,
                            show_messages = TRUE,
                            block_tasks = "secuentially_ordered_tasks_1",
                            jsPsych_version = 6,
                            options_separator = ";") {
  
  # DEBUG
  # jsPsychAdmin::get_parameters_of_function(name_function = "jsPsychMaker::create_protocol()", load_parameters = TRUE)
    # canonical_tasks = "AIM"
    # jsPsychMaker::copy_example_tasks(destination_folder = "~/Downloads/TEST")
    # folder_tasks = "~/Downloads/TEST/"
  # devtools::load_all()
  

  # CHECK -------------------------------------------------------------------
  
  if (!grepl("[0-9]", basename(folder_output))) cli::cli_abort("folder_output: {.code {basename(folder_output)}/} does not contain a number. We need a number to extract the pid (e.g. `{basename(folder_output)}_999/`).")
  

  # Copy canonical_protocol_clean -------------------------------------------
  
  if (show_messages == TRUE) cli::cli_h1("Create new protocol")
  
  if (show_messages == TRUE) cli::cli_h2("Parameters")
  if (!is.null(folder_tasks) & show_messages == TRUE) cli::cli_alert_info("folder_tasks: {.code {folder_tasks}}")
  if (show_messages == TRUE) cli::cli_alert_info("folder_output: {.code {folder_output}}")
  if (!is.null(canonical_tasks) & show_messages == TRUE) cli::cli_alert_info("canonical_tasks: {.code {canonical_tasks}}")
  if (show_messages == TRUE) cli::cli_h2("Preparation")
  
  
  folder_output = here::here(folder_output)

  # Check if folder exists
  if (dir.exists(folder_output)) {
    # Need to remove the contents just in case there are old tasks
    if (show_messages == TRUE) cli::cli_alert_info("Removing content of existing {.code {folder_output}}")
    unlink(folder_output, recursive = TRUE)
    dir.create(folder_output, recursive = TRUE)
  } else if (!dir.exists(folder_output)) {
    dir.create(folder_output, recursive = TRUE)
  }
  
  # copy_canonical_clean protocol version 6 or 7
  list_unzip(location = "jsPsychMaker", 
             zip_file = paste0("canonical_clean_", jsPsych_version, ".zip"), 
             action = "unzip", 
             destination_folder = folder_output)
  
  # Clean unneeded files
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKmultichoice.js")))
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKslider.js")))
  
  if (show_messages == TRUE) cli::cli_alert_success("Copied `canonical_protocol_clean` to {.code {folder_output}}")
  
  
  # Create new tasks --------------------------------------------------------
  
  if (!is.null(folder_tasks)) {
    
    folder_tasks = here::here(folder_tasks)
    
    # Temp var to see if we have CSV_XLS_files
    input_CSV_XLS_files = list.files(folder_tasks, recursive = TRUE, pattern = "\\.csv|\\.xls|\\.xlsx", full.names = TRUE)
    TASKS = basename(dirname(input_CSV_XLS_files))
  
    # fs::fs_path(input_CSV_XLS_files)
    if (show_messages == TRUE) cli::cli_alert_info("Found the following tasks: {.code {TASKS}}\n")
  
    # CHECKS ---

      # All tasks are in subfolders of folder_tasks
        
        DF_checks = tibble(file_name = normalizePath(input_CSV_XLS_files)) |> 
          mutate(task_name =  gsub('(.?)\\..*', '\\1', basename(file_name)),
                 task_name_should = basename(dirname(file_name)),
                 root_folder_task = basename(dirname(dirname(file_name))),
                 csv_in_subfolder = root_folder_task == basename(folder_tasks))
        
        # DF_checks
        csv_out_of_subfolders = DF_checks |> filter(csv_in_subfolder != TRUE)
        any_csv_out_of_subfolders = nrow(csv_out_of_subfolders) > 0
        all_csv_out_of_subfolders = nrow(DF_checks) == nrow(csv_out_of_subfolders)
        # wrong_task_name = DF_checks |> filter(task_name != task_name_should) # We do this check in create_task
      
      if (nrow(DF_checks)> 0 & all_csv_out_of_subfolders) {
        
        cli::cli_abort(c("folder_tasks (`{folder_tasks}`) should only contains folders (one for each task).",
                         "- Maybe you need to move `{folder_tasks}{basename(csv_out_of_subfolders$file_name)}` to `{folder_tasks}{csv_out_of_subfolders$task_name}/{basename(csv_out_of_subfolders$file_name)}`"))
          
      } else if (any_csv_out_of_subfolders) {
        
        cli::cli_abort(
          c("ALL csv/xls files should be in subfolders of the main folder. Move: ", 
            " {folder_tasks}{basename(csv_out_of_subfolders$file_name)} ",
            "to ",
            " {folder_tasks}{csv_out_of_subfolders$task_name}/{basename(csv_out_of_subfolders$file_name)}"))
        
      }
         # fs::dir_tree(folder_tasks, recurse = FALSE)
        
      
      # Names of tasks are correct
      regexp_TASK_NAMES = " |-|_|!|&|\\(|\\)|\\[|\\]|\\{|\\}|^[0-9]"
      check_TASK_NAMES = grepl(regexp_TASK_NAMES, TASKS)
      if (any(check_TASK_NAMES)) cli::cli_abort("Tasks with forbiden names (use only alphanumeric characters, do not start with a number, use CamelCase, AVOID under_scored_task_names): {.code {TASKS[check_TASK_NAMES]}}")
  
      
    # Loop through folders with input_CSV_XLS_files ---
    # seq_len(length(TASKS)) |> # With this, when length == 0 it does not enter the loop. Some of the tests depend on this
    1:length(TASKS) |> 
      purrr::walk(~{
        # .x = 1
        folder_task_loop = paste0(folder_tasks, "/", TASKS[.x], "/")
        if (show_messages == TRUE) cli::cli_h1("create_task: {TASKS[.x]}")
        create_task(folder_task = folder_task_loop, 
                    folder_output = folder_output, 
                    options_separator = options_separator,
                    show_messages = show_messages,
                    jsPsych_version = jsPsych_version)
      })
  
  } else {
    input_CSV_XLS_files = NULL
  }
  

  # ADD canonical tasks -----------------------------------------------------

  # Get rid of white spaces
  if(!is.null(canonical_tasks)) canonical_tasks = trimws(canonical_tasks)
  
  if (!is.null(canonical_tasks)) {
    
    if (show_messages == TRUE) cli::cli_h1("ADD tasks from canonical_protocol")
    
    # Get tasks from "/templates/tasks.zip"
    tasks = list_available_tasks(show_help = FALSE, jsPsych_version = jsPsych_version)
    
    # Check if canonical_tasks exist  
    if (!all(canonical_tasks %in% tasks$tasks)) cli::cli_abort(c("Task/s not found: {.code {canonical_tasks[!canonical_tasks %in% tasks$tasks]}}",
                                                               " - Run `jsPsychMaker::list_available_tasks()` to list all the available tasks."))
    
    # Copy canonical_tasks (version 6 or 7) to tasks folder 
    list_unzip(location = "jsPsychMaker", 
               zip_file = paste0("tasks", jsPsych_version, ".zip"), 
               action = "unzip",
               destination_folder = paste0(folder_output, "/tasks/"), 
               files_to_unzip = paste0(canonical_tasks, ".js"),
               silent = TRUE)
    
    
    if (show_messages == TRUE) cli::cli_alert_success("Added: {.code {canonical_tasks}}")
    
  } else {
    canonical_tasks = NULL
  }
  


  # Get all tasks js --------------------------------------------------------

  # Get all tasks to extract info about plugins, media... (See Modify config.js and Modify HTML below)
  path_to_tasks = list.files(path = paste0(folder_output, "/tasks/"), pattern = ".js", full.names = TRUE)
  all_files_js = purrr::map(path_to_tasks, readLines) |> unlist()
  

  # Modify config.js --------------------------------------------------------

  if (show_messages == TRUE) cli::cli_h1("Prepare new protocol")
  if (show_messages == TRUE) cli::cli_h2("Modify config.js")
  
  # If piloting, include only the task selected in the protocol
  if (!is.null(piloting_task)) {
    tasks_canonical = list(PATHS_tasks = paste0("tasks/", piloting_task, ".js"),
                           tasks = piloting_task)
  } else {
    # Use all available tasks in canonical_protocol to create a new config.js
    tasks_canonical = extract_tasks_from_protocol(folder_protocol = folder_output)
  }
  
  
  # MEDIA ---
  # Get media and prepare the media strings for config.js
  all_media_protocol = get_media_for_protocol(
    all_files_js = all_files_js,
    folder_protocol = folder_output,
    force_download_media = force_download_media,
    show_messages = show_messages
  )
  
  
  
  # Replace tasks in config ---
  update_config_js(folder_protocol = folder_output,
                   tasks = tasks_canonical,
                   block_tasks = block_tasks,
                   media  = all_media_protocol,
                   show_messages = show_messages)
 
  if (show_messages == TRUE) cli::cli_alert_info("More information about protocol configuration on the jsPsychR manual: {.url https://gorkang.github.io/jsPsychR-manual/qmd/03-jsPsychMaker.html#experiment-configuration}")
  

  # Modify HTML -------------------------------------------------------------

  if (show_messages == TRUE) cli::cli_h2("Adapt index.html")
  
  # PLUGINS ---
  
    # Extract plugins
    PLUGINS_used_raw0 = all_files_js[which(grepl("^[ ]{1,20}type:", all_files_js))]
    
    PLUGINS_used_raw = 
      # Make sure all plugins are called inside ''
      gsub('"', "'", PLUGINS_used_raw0) |>
      trimws() |> unique() |> 
      stringr::str_remove_all(pattern = "type: |type:|'|,")
    
    # Get rid of things catched by re regex that are not plugins
    BLACKlist_plugins = c("^number$", "^text$")
    
    # Adds plugins
    PLUGINS_used = PLUGINS_used_raw[!grepl(paste0(BLACKlist_plugins, collapse = "|"), PLUGINS_used_raw)]
    
  
  # CHECKS ---
    
    # TODO: ALMOST identical to chunk in create_items_from_file.R (Correct the issue in {.code {file_name}} appears in create_items_from_file.R but not here)
    
    # List all files from canonical_protocol_clean.zip
    canonical_zip_files = list_unzip(location = "jsPsychMaker", zip_file = paste0("canonical_clean_", jsPsych_version, ".zip"), action = "list")

    # TODO: EXTEND TO v7    
    if (jsPsych_version == 6) {
      # we have all the used plugins
      ALL_available_plugins = canonical_zip_files[grepl(pattern = "plugins/jspsych-", canonical_zip_files)] |> basename() |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
      CHECK_ALL_available_plugins = !paste0("jspsych-", PLUGINS_used) %in% ALL_available_plugins
      if (any(CHECK_ALL_available_plugins)) cli::cli_abort(c("Plugin/s {.code {PLUGINS_used[CHECK_ALL_available_plugins]}} NOT found in {.code {paste0(folder_output, '/jsPsych-6/plugins/')}}"
                                                           # " - Correct the issue in {.code {file_name}}" # 
                                                           ))
      
      # Clean up protocol to keep only the essential and used plugins
      ESSENTIAL_plugins = c("jspsych-call-function", "jspsych-fullscreen", "jspsych-preload")
      plugins_to_delete = ALL_available_plugins[!ALL_available_plugins %in% c(ESSENTIAL_plugins, paste0("jspsych-", PLUGINS_used))]
      file.remove(paste0(folder_output, "/jsPsych-6/plugins/", plugins_to_delete, ".js"))
      if (show_messages == TRUE) cli::cli_alert_info("Deleted {length(plugins_to_delete)} unused plugin files: {.code {plugins_to_delete}}")
  }
    
  # Adapt HTML ---
  # Adds plugins, media, necessary extra files for tasks...
  adapt_HTML(TASKS = tasks_canonical$tasks, new_plugins = PLUGINS_used, folder_output = folder_output, show_messages = show_messages, jsPsych_version = jsPsych_version)
  


  # CHECKS ------------------------------------------------------------------

  check_trialids(local_folder_protocol = folder_output, show_messages = show_messages)
  
    
  
  # Launch protocol --------------------------------------------------------

  if (launch_browser == TRUE) {
    
    URL = paste0("file:///", here::here(normalizePath(folder_output)), "/index.html", "?uid=", sample(1:1000, 1))
    
    if (show_messages == TRUE) cli::cli_h1("Open new protocol in browser")
    if (show_messages == TRUE) cli::cli_alert_info("URL: {URL}")
    
    OS = Sys.info()["sysname"]

    plugins_CORS = c("video")
    
    if (OS == "Linux") {
      
      cors_path = normalizePath("~/.chrome-CORS")
      
      if (which_browser == "chrome") {
        if (any(grepl(plugins_CORS, PLUGINS_used))) {
          system2(command = "google-chrome", args = c(URL, "--incognito", "--disable-web-security", paste0("--user-data-dir=\"", cors_path, "\"")), stdout = FALSE, stderr = FALSE)
          # system(paste0("google-chrome ", URL, " --incognito --disable-web-security --user-data-dir=\"", cors_path, "\" &"))  
        } else {
          system2(command = "google-chrome", args = c(URL, "--incognito"), stdout = FALSE, stderr = FALSE)
        }
      # If not chrome, use firefox
      } else {
        system2(command = "firefox", args = c("--private-window", URL), stdout = FALSE, stderr = FALSE)
      }
    
    # Mac and Windows
    } else {
      
      if (any(grepl(plugins_CORS, PLUGINS_used))) {
        cli::cli_alert_danger("If you want to run the protocol locally you will need to disable web security (CORS)")
        cli::cli_alert_info(paste0('- Windows [command line]: start chrome --new-window --incognito --disable-web-security --user-data-dir="C:/Chrome" "', gsub("file:///", "C:/", URL), '"'))
        # start chrome --new-window --incognito --disable-web-security --user-data-dir="C:/Chrome"  "C:/Users/emrys/Documents/Downloads/TEST/new_protocol1/index.html" 
      }

      utils::browseURL(URL)
      cli::cli_alert_info("If you encounter errors in the Javascript (F12) Console about 'indexedDB_controller.js' or 'Uncaught (in promise) element not found'. Launch the experiment in an Incognito window.")
      # Works Windows 10: processx::run(command = "powershell", args = c('start chrome --incognito'))
      

    }
    
  }
  
}


