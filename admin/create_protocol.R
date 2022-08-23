# # Create protocol
# 
# ONly parameter, a folder
# 
# Look for all csv (one task per csv)
# Look for all html (instructions page per html)
# 
# Copy canonical_clean
# Create tasks in canonical_clean
# Change config.js
# 
# 
# PROTOCOL_FILES
#   TASK1
#     TASK1.csv
#     TASK1_instructions.html
#     TASK1_instructions2.html
#     TASK1_instructions3.html
#   TASK2
#     TASK2.csv
#     TASK2_instructions.html
#     TASK2_instructions2.html
#     TASK2_instructions3.html


    
create_protocol <- function(tasks_folder, folder_output = "admin/OUTPUT/") {
  
  # DEBUG
  # tasks_folder = "admin/tasks/new_protocol"
  # folder_output = "admin/OUTPUT"
  
  source("admin/create_instructions.R")
  source("admin/create_items_from_file.R")
  source("admin/create_task.R")
  
  cli::cli_alert_info(folder_output)
  
  if (!file.exists(folder_output)) dir.create(folder_output)
  
  HTMLs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.html", full.names = TRUE)
  CSVs = list.files(tasks_folder, recursive = TRUE, pattern = "\\.csv", full.names = TRUE)
  
  TASKS = basename(dirname(CSVs))
  
  1:length(TASKS) |> 
    purrr::walk(~{
      
      # .x = 2
      task_file_name = CSVs[grepl(paste0("/", TASKS[.x], "\\.csv"), CSVs)]
      task_instructions = HTMLs[grepl(paste0("/", TASKS[.x], "_instructions.?\\.html"), HTMLs)]
      
      cli::cli_alert_info("{task_file_name}")
      cli::cli_alert_info("{task_instructions}")
      
      cli::cli_h1("create_task")
      create_task(file_name = task_file_name, folder_output = folder_output, INSTRUCTIONS = task_instructions)
      
    })
  
  
  
}

create_protocol(tasks_folder = "admin/tasks/new_protocol", folder_output = "admin/OUTPUT")
  
