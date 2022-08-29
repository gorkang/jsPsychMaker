# TEST

# remotes::install_github("gorkang/jsPsychMaker") # Install from Github
library(jsPsychMaker)


# List available tasks ----------------------------------------------------

jsPsychMaker::list_available_tasks()


# Create protocol --------------------------------------------------------

# Copy example tasks to local folder
jsPsychMaker::copy_example_tasks(destination_folder = "~/Downloads/TEST")

# Only from csv's
jsPsychMaker::create_protocol(tasks_folder = "~/Downloads/TEST/",
                              folder_output = "~/Downloads/TEST/new_protocol1", 
                              launch_browser = FALSE)

# Only from canonical_tasks (with images)
jsPsychMaker::create_protocol(add_canonical_tasks = c("AIM", "EAR", "IRI", "INFCONS"),
                              folder_output = "~/Downloads/TEST/new_protocol2", 
                              launch_browser = FALSE)

# Only from canonical_tasks (without images)
jsPsychMaker::create_protocol(add_canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = "~/Downloads/TEST/new_protocol3", 
                              launch_browser = FALSE)


# Both from csv's AND canonical_tasks
jsPsychMaker::create_protocol(tasks_folder = "~/Downloads/TEST/",
                              add_canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = "~/Downloads/TEST/new_protocol4", 
                              launch_browser = FALSE)


# Protocol ALL plugins
jsPsychMaker::create_protocol(tasks_folder = "admin/example_ALL/",
                              folder_output = "~/Downloads/TEST/ALL/", 
                              launch_browser = TRUE)



# Create task -------------------------------------------------------------

# Create a single task
jsPsychMaker::create_task(task_folder = "~/Downloads/TEST/ImageButtonResponse/")
