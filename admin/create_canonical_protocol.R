# Help create a protocol with all the available tasks
  # Make sure we have all the prepare_TASK.R files in jsPsychHelpeR
  # After testing everything works, we should move it to 999/


# Parameters --------------------------------------------------------------

   jsPsych_version = 6
  # jsPsych_version = 7

   folder_task = "~/Downloads/protocol999"

   
# Get all tasks in jsPsychMaker -------------------------------------------

  TASKS_raw = jsPsychMaker::list_available_tasks()

  # Filter out not working tasks, or tasks with a complex requirement, etc.
  NOT_INCLUDED = c(
    
    # Media paths hardcoded: SHOULD PRELOAD!
    "BART",
    
    # WORKS but requires the monkey to identify with a specific id (123ab)
    "DMW_01", 
    
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
  # TASKS = TASKS_raw$tasks[TASKS_raw$tasks %in% NOT_WORKING]
  TASKS = TASKS_raw$tasks[!TASKS_raw$tasks %in% NOT_INCLUDED]


# Create protocol ---------------------------------------------------------

  # BUG: block_tasks = "secuentially_ordered_tasks_1" SHOULD ALSO MODIFY tasks in config.js
          # tasks = ['first_tasks', 'randomly_ordered_tasks_1', 'last_tasks']; // randomly_ordered_tasks_1 HERE SHOULD BE secuentially_ordered_tasks_1
  
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


  jsPsychHelpeR::run_initial_setup()