# Create tasks or full protocols using csv files for the items and html for the instructions
  # https://gorkang.github.io/jsPsychR-manual/qmd/07-NEWtasks.html#create-tasks


# Install and/or load library --------------------------------------------

  # remotes::install_github("gorkang/jsPsychMaker") # Install from Github
  library(jsPsychMaker)



# List available tasks ----------------------------------------------------

  jsPsychMaker::list_available_tasks()


# Create protocol --------------------------------------------------------
  
  # Copy example tasks to local folder
  jsPsychMaker::copy_example_tasks(destination_folder = "~/Downloads/TEST")
  
  # Create protocol
  jsPsychMaker::create_protocol(tasks_folder = "~/Downloads/TEST/",
                                add_canonical_tasks = c("AIM", "EAR", "IRI"),
                                folder_output = "~/Downloads/TEST/new_protocol", 
                                launch_browser = TRUE)

  # Add piloting_task parameter if you want to test a specific task from the protocol

  
# Create task -------------------------------------------------------------

  # Create a single task
  jsPsychMaker::create_task(task_folder = "~/Downloads/TEST/ImageButtonResponse/")
