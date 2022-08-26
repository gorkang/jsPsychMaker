# Create tasks or full protocols using csv files for the items and html for the instructions
  # https://gorkang.github.io/jsPsychR-manual/qmd/07-NEWtasks.html#create-tasks


# Install and/or load library --------------------------------------------

  # remotes::install_github("gorkang/jsPsychMaker") # Install from Github
  library(jsPsychMaker)


# Create protocol --------------------------------------------------------
  
  # Copy example tasks to local folder
  copy_example_tasks("~/Downloads/TEST")
  
  # Create protocol
  create_protocol(tasks_folder = "~/Downloads/TEST/example_tasks/", 
                  folder_output = "~/Downloads/TEST/new_protocol", 
                  launch_browser = TRUE)

  # Add piloting_task parameter if you want to test a specific task from the protocol

  
# Create task -------------------------------------------------------------

  # Create a single task
  create_task(task_folder = "admin/example_tasks_new_protocol/CRTMCQ4/")
