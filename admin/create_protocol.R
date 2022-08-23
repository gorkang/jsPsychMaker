# Create protocol
create_protocol <- function(tasks_folder, folder_output = "admin/OUTPUT/NEW") {
  
  # DEBUG
  # tasks_folder = "admin/tasks/new_protocol"
  # folder_output = "admin/OUTPUT/NEW"
  
  source("admin/create_instructions.R")
  source("admin/create_items_from_file.R")
  source("admin/create_task.R")
  source("../jsPsychHelpeR/admin/helper-scripts-admin.R")
  
  

  # Copy canonical_protocol_clean -------------------------------------------
  
  cli::cli_h1("Create NEW protocol in {folder_output}")

  if (!file.exists(folder_output)) dir.create(folder_output)
  copy_canonical_clean(destination_folder = folder_output)
  file.remove(paste0(folder_output, "/tasks/SHORNAMETASKmultichoice.js"))
  file.remove(paste0(folder_output, "/tasks/SHORNAMETASKslider.js"))

  # Create new tasks --------------------------------------------------------

  
  HTMLs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.html", full.names = TRUE)
  CSVs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.csv", full.names = TRUE)
  
  TASKS = basename(dirname(CSVs))
  
  if (basename(tasks_folder) %in% TASKS) cli::cli_abort("There is a csv file in the root folder. Please remove.")
  
  1:length(TASKS) |> 
    purrr::walk(~{
      
      cli::cli_h1("create_task: {TASKS[.x]}")
      
      # .x = 2
      task_file_name = CSVs[grepl(paste0("/", TASKS[.x], "\\.csv"), CSVs)]
      task_instructions = HTMLs[grepl(paste0("/", TASKS[.x], "_instructions.?\\.html"), HTMLs)]
      
      cli::cli_alert_info("{task_file_name}")
      cli::cli_alert_info("{task_instructions}")

      create_task(file_name = task_file_name, folder_output = paste0(folder_output, "/tasks/"), INSTRUCTIONS = task_instructions)
      
    })
  

# Modify config.js --------------------------------------------------------

  
  # Use all available tasks in canonical_protocol to create a new config.js
  tasks_canonical = extract_tasks_from_protocol(folder_protocol = folder_output)

  replace_tasks_config_js(folder_protocol = folder_output,
                          tasks = tasks_canonical, 
                          block_tasks = "randomly_ordered_tasks_1") 
  
}
