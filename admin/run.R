# Create full protocols using csv files for the items and html for the instructions


# Source functions --------------------------------------------------------

source("admin/create_instructions.R")
source("admin/create_items_from_file.R")
source("admin/create_protocol.R")
source("admin/create_task.R")


# Create protocol ---------------------------------------------------------

# The tasks_folder expects a folder with sub-folders with the ShortName of tasks
# Inside, they need to have a csv file and html files 
  # The csv file (ShortName.csv) needs to have an ID and plugin columns, and then columns by the 
  # name of parameters used in the plugin
  # For each html file (ShortName_instructions.html, ShortName_instructions2.html, etc)
  # an instructions page will be created
create_protocol(tasks_folder = "admin/example_tasks_new_protocol/", folder_output = "admin/OUTPUT/NEW")



# Launch protocol ---------------------------------------------------------

URL = paste0("file:///", here::here("admin/OUTPUT/NEW/index.html"), "?uid=", sample(1:1000, 1))
# browseURL(URL)
# processx::run(command = "google-chrome", args = c(URLdecode(URL), " --incognito"))
system(paste0("google-chrome ", URL, " --incognito"))






# Create new --------------------------------------------------------------
# Get questions from old experiment.js file. Only works with a simple structure
source("admin/extract_clean_questions.R")
XXX = extract_clean_questions(FILE = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMaker/canonical_protocol/tasks/ERQ.js")
write_csv(XXX, "admin/example_tasks_new_protocol/ERQ.csv")

