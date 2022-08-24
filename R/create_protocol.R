# Create protocol
create_protocol <- function(tasks_folder, folder_output = "admin/OUTPUT/NEW", launch_browser = FALSE) {
  
  # DEBUG
  # tasks_folder = "admin/tasks/new_protocol"
  # folder_output = "admin/OUTPUT/NEW"
  
  invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))
  
  source("../jsPsychHelpeR/admin/helper-scripts-admin.R")
  
  

  # Copy canonical_protocol_clean -------------------------------------------
  
  cli::cli_h1("Create new protocol in {folder_output}")
  
  if (!file.exists(folder_output)) dir.create(folder_output, recursive = TRUE)
  copy_canonical_clean(destination_folder = folder_output)
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKmultichoice.js")))
  suppressWarnings(file.remove(paste0(folder_output, "/tasks/SHORNAMETASKslider.js")))
  
  cli::cli_alert_success("Copied canonical_protocol_clean to {folder_output}")

  
  # Create new tasks --------------------------------------------------------

  
  HTMLs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.html", full.names = TRUE)
  CSVs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.csv", full.names = TRUE)
  
  TASKS = basename(dirname(CSVs))
  
  cli::cli_alert_info("Found the following tasks: {TASKS}")
  
  
  if (basename(tasks_folder) %in% TASKS) cli::cli_abort(c("There is a csv file in the root folder.", " - Please remove: {CSVs[dirname(CSVs) %in% gsub('/$','', tasks_folder)]}."))
  
  1:length(TASKS) |> 
    purrr::walk(~{
      
      cli::cli_h1("create_task: {TASKS[.x]}")
      
      # .x = 3
      task_file_name = CSVs[grepl(paste0("/", TASKS[.x], "\\.csv"), CSVs)]
      instructions_files = HTMLs[grepl(paste0("/", TASKS[.x], "_instructions.?\\.html"), HTMLs)]
      
      # If there are no HTML files, use default instructions
      if (length(instructions_files) == 0) {
        task_instructions = paste0("<p><left><b><big>", TASKS[.x], "</big></b><br/>Lee con atención y contesta las siguientes preguntas.</left></p>")
      } else {
        task_instructions = instructions_files  
      }
      
      cli::cli_alert_info("CSV: {task_file_name}")
      cli::cli_alert_info("HTML: {task_instructions}")

      create_task(file_name = task_file_name, folder_output = paste0(folder_output, "/tasks/"), INSTRUCTIONS = task_instructions)
      
    })
  

# Modify config.js --------------------------------------------------------

  cli::cli_h1("Prepare new protocol")
  
  # Use all available tasks in canonical_protocol to create a new config.js
  tasks_canonical = extract_tasks_from_protocol(folder_protocol = folder_output)

  replace_tasks_config_js(folder_protocol = folder_output,
                          tasks = tasks_canonical, 
                          block_tasks = "randomly_ordered_tasks_1") 
 

  cli::cli_alert_info("More information about protocol configuration on the jsPsychR manual: {.url https://gorkang.github.io/jsPsychR-manual/qmd/03-jsPsychMaker.html#experiment-configuration}")
  

# Launch protocol --------------------------------------------------------

  if (launch_browser == TRUE) {
    
    cli::cli_h1("Open new protocol in browser")
    
    URL = paste0("file:///", here::here(folder_output), "/index.html", "?uid=", sample(1:1000, 1))
    # browseURL(URL)
    # processx::run(command = "google-chrome", args = c(URLdecode(URL), " --incognito"))
    system(paste0("google-chrome ", URL, " --incognito"))
    
  }
  
}
