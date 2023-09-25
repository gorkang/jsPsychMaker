# Help create a protocol with all the available tasks
  # Make sure we have all the prepare_TASK.R files in jsPsychHelpeR
  # After testing everything works, we should move it to 9996/ and 9997/


# Parameters --------------------------------------------------------------

  jsPsych_version = 6
  folder_task = "~/Downloads/protocol9996"

  # jsPsych_version = 7
  # folder_task = "~/Downloads/protocol9997"

   
# Get all tasks in jsPsychMaker -------------------------------------------

  TASKS_raw = jsPsychMaker::list_available_tasks(jsPsych_version = jsPsych_version)

  # Filter out not working tasks, or tasks with a complex requirement, etc.
  NOT_INCLUDED = c(
    
    # NOT WORKING IN v7
    "ConsentHTML",
    
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

  jsPsychMonkeys::release_the_monkeys(uid = "1", 
                                      local_folder_tasks = folder_task,
                                      disable_web_security = TRUE, 
                                      keep_alive = TRUE,
                                      open_VNC = TRUE)


# Helper ------------------------------------------------------------------

  
  jsPsychHelpeR::run_initial_setup(pid = paste0("999", jsPsych_version),
                                   data_location = folder_task)
  