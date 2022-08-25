# Create protocol
create_protocol <- function(tasks_folder, folder_output = "admin/OUTPUT/NEW", launch_browser = FALSE, piloting_task = NULL) {
  
  # DEBUG
  # tasks_folder = "admin/example_tasks_new_protocol/"
  # folder_output = "admin/OUTPUT/NEW"
  # launch_browser = TRUE
  # piloting_task = NULL
  
  invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))
  source("admin/helper-scripts-admin.R")
  setup()
  

  # Copy canonical_protocol_clean -------------------------------------------
  
  cli::cli_h1("Create new protocol in {folder_output}")
  
  if (!file.exists(folder_output)) dir.create(folder_output, recursive = TRUE)
  copy_canonical_clean(destination_folder = folder_output)
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKmultichoice.js")))
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKslider.js")))
  
  cli::cli_alert_success("Copied `canonical_protocol_clean` to {.code {folder_output}}")
  
  
  # Create new tasks --------------------------------------------------------

  # Temp var to see if we have CSVs
  CSVs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.csv", full.names = TRUE)
  
  TASKS = basename(dirname(CSVs))

  cli::cli_alert_info("Found the following tasks in {.code {tasks_folder}}:\n - {TASKS}\n")

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
  
  # Replace tasks in config
  replace_tasks_config_js(folder_protocol = folder_output,
                          tasks = tasks_canonical, 
                          block_tasks = "randomly_ordered_tasks_1") 
 
  cli::cli_alert_info("More information about protocol configuration on the jsPsychR manual: {.url https://gorkang.github.io/jsPsychR-manual/qmd/03-jsPsychMaker.html#experiment-configuration}")
  

  

# Modify HTML -------------------------------------------------------------

  cli::cli_h2("Adapt index.html")
  
  
  adapt_HTML(CSVs = CSVs, folder_output = folder_output)
  
  
  
  
# Launch protocol --------------------------------------------------------

  if (launch_browser == TRUE) {
    
    cli::cli_h1("Open new protocol in browser")
    
    URL = paste0("file:///", here::here(folder_output), "/index.html", "?uid=", sample(1:1000, 1))
    # browseURL(URL)
    # processx::run(command = "google-chrome", args = c(URLdecode(URL), " --incognito"))
    system(paste0("google-chrome ", URL, " --incognito"))
    
  }
  
}
