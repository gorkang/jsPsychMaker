# Help create a protocol with all the available tasks for v6 or v7 of jsPsych

# Simulate data with a monkey

# Run jsPsychHelpeR

# After testing everything works, upload to 9996/ and 9997/



# Parameters --------------------------------------------------------------

  jsPsych_version = 6
  folder_task = "~/Downloads/protocol9996"

  # jsPsych_version = 7
  # folder_task = "~/Downloads/protocol9997"

   
# Get all tasks in jsPsychMaker -------------------------------------------

  TASKS_raw = jsPsychMaker::list_available_tasks(jsPsych_version = jsPsych_version)

  # Filter out not working tasks, or tasks with a complex requirement, etc.
  NOT_INCLUDED = c(
    
    # NOT WORKING (?)
    # "ConsentHTML",
    
    # DONT HAVE prepare_TASK.R
    "BDI", "LOT", "MCQ30", "NARS", "RobToM", 
    
    # Media paths hardcoded: SHOULD PRELOAD!
    "BART",
    
    # WORKS but requires the monkey to identify with a specific id (123ab)
    "DMW", 
    
    # Tasks with between participants variables
    "FKEA", "CTT",
    
    # Images are loaded programatically using # preamble: "<img width='100%'src='" + img_folder + "RMET/" + index.toString() + ".png" + "' />",
      # NOT detected and not downloaded
    "RMET", 
    
    # IMAGES are not loading. Also, this task is not ready (?) 
    "PPD",
    
    # Tasks uses mic (not available in docker container)
    "SCGT"
    )
  
  
  # Final tasks
  TASKS = TASKS_raw$tasks[!TASKS_raw$tasks %in% NOT_INCLUDED]
  
  # Tasks not tested. TODO: Fix!
  TASKS_not_included = TASKS_raw$tasks[TASKS_raw$tasks %in% NOT_INCLUDED]
  cli::cli_alert_warning("NOT testing {length(TASKS_not_included)} tasks: {.code {TASKS_not_included}}")
  

# Create protocol ---------------------------------------------------------

  jsPsychMaker::create_protocol(
    canonical_tasks = TASKS,
    block_tasks = "secuentially_ordered_tasks_1",
    folder_output = folder_task,
    launch_browser = FALSE,
    jsPsych_version = jsPsych_version
  )


# Test protocol -----------------------------------------------------------

  # TODO: run 5 monkeys in parallel and use jsPsychHelpeR snapshots to check all is well
  
  jsPsychMonkeys::release_the_monkeys(
    # forced_seed = ???,
    uid = "1",
    local_folder_tasks = folder_task,
    disable_web_security = TRUE,
    keep_alive = TRUE,
    open_VNC = TRUE
  )
  

# Helper ------------------------------------------------------------------
  
  # TODO: get snapshots for 5 monkeys in v6 and v7
  #     CHECK snapshots match between versions v6 and v7
  #     CHECK nothing changes
  
  jsPsychHelpeR::run_initial_setup(
    pid = paste0("999", jsPsych_version),
    data_location = paste0(folder_task, "/.data/")
  )
  
  # Did not find the prepare_FUN for 5 task: BDI, LOT, MCQ30, NARS, and RobToM. 
  
  # Unused prepare_TASKS.R: 
    # prepare_BART.R, prepare_CEL.R, prepare_CTT.R, prepare_DMW.R, prepare_FKEA.R, prepare_RMET.R, and prepare_SCGT.R
    # prepare_AIM23.R, prepare_DEMOGR12.R, prepare_DEMOGR22.R, prepare_DEMOGR23.R, prepare_DEMOGR24.R, prepare_DEMOGR27.R, prepare_DEMOGR29.R, prepare_DEMOGR3.R, prepare_FONDECYT2022E1.R, prepare_FORM4.R, prepare_FORM5.R, prepare_FORM6.R
  
  
  
# Upload to server ---------------------------------------------------------
  
  # UPLOAD
  jsPsychHelpeR::sync_server_local(
    direction = "local_to_server",
    local_folder = folder_task,
    server_folder = paste0("999", jsPsych_version),
    only_test = FALSE,
    delete_nonexistent = TRUE
  )  
  