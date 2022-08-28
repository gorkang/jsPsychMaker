#' create_protocol
#'
#' @param tasks_folder Add folder of the protocol 
#' @param add_canonical_tasks Add already available tasks to the protocol
#' @param folder_output Where to create the protocol
#' @param launch_browser TRUE/FALSE
#' @param piloting_task Name of task to pilot (will be only task in config.js)
#'
#' @return
#' @export
#' @importFrom purrr map_df
#' @importFrom cli cli_h1 cli_h2 cli_alert_success cli_alert_info cli_abort cli_alert_danger
#' @importFrom purrr walk
#' @importFrom janitor remove_empty
#' @importFrom here here
#' @importFrom utils browseURL
#'
#' @examples
create_protocol <- function(tasks_folder = NULL, 
                            add_canonical_tasks = NULL,
                            folder_output = "admin/OUTPUT/NEW", 
                            launch_browser = FALSE, 
                            piloting_task = NULL) {
  
  # DEBUG
  # tasks_folder = "admin/example_tasks_new_protocol/"
  # add_canonical_tasks = c("AIM", "EAR", "IRI")
  # folder_output = "admin/OUTPUT/NEW"
  # launch_browser = TRUE
  # piloting_task = NULL

  # invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))
  # setup()
  

  # Copy canonical_protocol_clean -------------------------------------------
  
  cli::cli_h1("Create new protocol in {folder_output}")
  
  folder_output = here::here(folder_output)
  
  # Check if folder exists
  if (dir.exists(folder_output)) {
    # Need to remove the contents just in case there are old tasks
    cli::cli_alert_info("Removing content of existing {.code {folder_output}}")
    unlink(folder_output, recursive = TRUE)
    dir.create(folder_output, recursive = TRUE)
  } else if (!dir.exists(folder_output)) {
    dir.create(folder_output, recursive = TRUE)
  }
  copy_canonical_clean(destination_folder = folder_output)
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKmultichoice.js")))
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKslider.js")))
  
  cli::cli_alert_success("Copied `canonical_protocol_clean` to {.code {folder_output}}")
  
  
  # Create new tasks --------------------------------------------------------
  
  if (!is.null(tasks_folder)) {
    
    tasks_folder = here::here(tasks_folder)
    
    # Temp var to see if we have CSVs
    CSVs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.csv|\\.xls|\\.xlsx", full.names = TRUE)
    
    TASKS = basename(dirname(CSVs))
  
    cli::cli_alert_info("Found the following tasks in {.code {tasks_folder}}:\n - {.code {TASKS}}\n")
  
    # CHECKS ---
    
      # Check if csv's in root folder
      if (basename(tasks_folder) %in% TASKS) cli::cli_abort(c("There is a csv file in the root folder.", " - Please remove: {CSVs[dirname(CSVs) %in% gsub('/$','', tasks_folder)]}."))
      
      # Names of tasks are correct
      regexp_TASK_NAMES = " |-|_|!|&|\\(|\\)|\\[|\\]|\\{|\\}|^[0-9]"
      check_TASK_NAMES = grepl(regexp_TASK_NAMES, TASKS)
      if (any(check_TASK_NAMES)) cli::cli_abort("Tasks with forbiden names (use only alphanumeric characters, do not start with a number): {.code {TASKS[check_TASK_NAMES]}}")
  
      
    # Loop through folders with CSVs ---
    1:length(TASKS) |> 
      purrr::walk(~{
        cli::cli_h1("create_task: {TASKS[.x]}")
        create_task(task_folder = paste0(tasks_folder, "/", TASKS[.x], "/"), folder_output = folder_output)
      })
  
  } else {
    CSVs = NULL
  }

  # ADD canonical tasks -----------------------------------------------------
  
  # add_canonical_tasks = c("AIM", "EAR")
  if (!is.null(add_canonical_tasks)) {
    
    cli::cli_h1("ADD tasks from already existing tasks")
    
    # Get tasks from "/templates/tasks.zip"
    tasks = list_available_tasks(show_help = FALSE)
    
    # Check if add_canonical_tasks exist  
    if (!all(add_canonical_tasks %in% tasks$tasks)) cli::cli_abort(c("Task/s not found: {.code {add_canonical_tasks[!add_canonical_tasks %in% tasks$tasks]}}",
                                                               "",
                                                               "You can choose from the following: {.code {tasks$tasks}}"))
    
    # Copy add_canonical_tasks to tasks folder
    unzip(tasks$tasks_zip, files = paste0(add_canonical_tasks, ".js"), exdir = paste0(folder_output, "/tasks/"))
    
    cli::cli_alert_success("Added: {.code {add_canonical_tasks}}")
    
  } else {
    add_canonical_tasks = NULL
  }
  


  # Modify config.js --------------------------------------------------------

  cli::cli_h1("Prepare new protocol")
  cli::cli_h2("Modify config.js")
  
  # If piloting, include only the task selected in the protocol
  if (!is.null(piloting_task)) {
    tasks_canonical = list(PATHS_tasks = paste0("tasks/", piloting_task, ".js"),
                           tasks = piloting_task)
  } else {
    # Use all available tasks in canonical_protocol to create a new config.js
    tasks_canonical = extract_tasks_from_protocol(folder_protocol = folder_output)
  }
  
  # ADD add_canonical_tasks to tasks_canonical so we also added them to config.js
  # if (!is.null(add_canonical_tasks)) {
  #   # tasks_canonical$PATHS_tasks = c(tasks_canonical$PATHS_tasks, paste0("tasks/", add_canonical_tasks, ".js"))
  #   # tasks_canonical$tasks = c(tasks_canonical$tasks, add_canonical_tasks)
  #   
  #   # Get plugins of add_canonical_tasks tasks
  #   path_to_added_tasks = paste0(folder_output, "/tasks/", add_canonical_tasks, ".js")
  #   all_files_js = purrr::map(path_to_added_tasks, readLines) |> unlist()
  #   new_plugins = all_files_js[which(grepl("^[ ]{1,20}type:", all_files_js))] |> 
  #     trimws() |> unique() |> 
  #     stringr::str_remove_all(pattern = "type: |'|,")
  # } else {
  #   new_plugins = NULL
  # }
  
  
  # Replace tasks in config
  replace_tasks_config_js(folder_protocol = folder_output,
                          tasks = tasks_canonical, 
                          block_tasks = "randomly_ordered_tasks_1") 
 
  cli::cli_alert_info("More information about protocol configuration on the jsPsychR manual: {.url https://gorkang.github.io/jsPsychR-manual/qmd/03-jsPsychMaker.html#experiment-configuration}")
  

# Modify HTML -------------------------------------------------------------

  cli::cli_h2("Adapt index.html")
  
  # Adds needed plugins, necessary extra files for tasks...
  
  # Get plugins of add_canonical_tasks tasks
  path_to_tasks = list.files(path = paste0(folder_output, "/tasks/"), pattern = ".js", full.names = TRUE)
  # Read tasks js
  all_files_js = purrr::map(path_to_tasks, readLines) |> unlist()
  # Extract plugins
  PLUGINS_used_raw = all_files_js[which(grepl("^[ ]{1,20}type:", all_files_js))] |> 
    trimws() |> unique() |> 
    stringr::str_remove_all(pattern = "type: |'|,")
  
  # Get rid of things catched by re regex that are not plugins
  BLACKlist_plugins = c("number", "text")
  PLUGINS_used = PLUGINS_used_raw[!grepl(paste0(BLACKlist_plugins, collapse = "|"), PLUGINS_used_raw)]
  
  
  
  # CHECK we have all the used plugins ---
    # TODO: ALMOST identical to chunk in create_items_from_file.R (Correct the issue in {.code {file_name}} appears in create_items_from_file.R but not here)
  packagePath <- find.package("jsPsychMaker", lib.loc = NULL, quiet = TRUE)
  canonical_zip = paste0(packagePath, "/templates/canonical_protocol_clean.zip")
  canonical_zip_files = unzip(canonical_zip, list=TRUE)[,1]
  ALL_available_plugins = canonical_zip_files[grepl(pattern = "plugins/jspsych-", canonical_zip_files)] |> basename() |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
  CHECK_ALL_available_plugins = !paste0("jspsych-", PLUGINS_used) %in% ALL_available_plugins
  if (any(CHECK_ALL_available_plugins)) cli::cli_abort(c("Plugin/s {.code {PLUGINS_used[CHECK_ALL_available_plugins]}} NOT found in {.code {paste0(folder_output, '/jsPsych-6/plugins/')}}"
                                                         # " - Correct the issue in {.code {file_name}}" # 
                                                         ))
  
  
  # Adapt HTML
  
  adapt_HTML(TASKS = tasks_canonical$tasks, new_plugins = PLUGINS_used, folder_output = folder_output)
  
  
  
  
# Launch protocol --------------------------------------------------------

  if (launch_browser == TRUE) {
    
    cli::cli_h1("Open new protocol in browser")
    
    URL = paste0("file:///", here::here(normalizePath(folder_output)), "/index.html", "?uid=", sample(1:1000, 1))
    
    OS = Sys.info()["sysname"]
    
    if (OS == "Linux") {
      system(paste0("google-chrome ", URL, " --incognito"))
    } else {
      utils::browseURL(URL)
      cli::cli_alert_info("If you encounter errors in the Javascript (F12) Console about 'indexedDB_controller.js' or 'Uncaught (in promise) element not found'. Launch the experiment in an Incognito window.")
    }
    
  }
  
}
