# Create tasks or full protocols using csv files for the items and html for the instructions
  # https://gorkang.github.io/jsPsychR-manual/qmd/07-NEWtasks.html#create-tasks

# Source functions
invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))


# Create protocol --------------------------------------------------------

create_protocol(tasks_folder = "admin/example_tasks_new_protocol/", 
                folder_output = "admin/OUTPUT/NEW", 
                launch_browser = TRUE
                # , piloting_task = "CRTMCQ4"
                )


# Create task -------------------------------------------------------------

# create_task(task_folder = "admin/example_tasks_new_protocol/CRTMCQ4/")
