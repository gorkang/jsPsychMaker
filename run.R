# Create full protocols using csv files for the items and html for the instructions

  # The tasks_folder expects a folder with sub-folders with the ShortName of tasks
  # Inside, they need to have a csv file and html files 

  # The csv file (ShortName.csv) needs to have an ID and plugin columns, and then 
  # columns by the name of parameters used in the plugin
  # For each html file (ShortName_instructions.html, ShortName_instructions2.html, etc)
  # an instructions page will be created. If there is no html, a default page will be used


# Create protocol ---------------------------------------------------------

# Source functions
invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))

# Create protocol
create_protocol(tasks_folder = "admin/example_tasks_new_protocol/", 
                folder_output = "admin/OUTPUT/NEW", 
                launch_browser = TRUE)
