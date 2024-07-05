testthat::test_that('create_protocol', {
  
  # Copy example tasks to local folder
  destination_folder = paste0(tempdir(), "/TEST_testthat/create_protocol")
  unlink(destination_folder, recursive = TRUE)
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = FALSE)
  
  # Create quiet version
  create_protocol_quiet <- purrr::quietly(jsPsychMaker::create_protocol)
  


  # Using example_tasks csv's, XLS, weird chars ------------------------------
  
  # Includes all plugins
  output_folder = paste0(destination_folder, "/../create_protocol1")

  OUT = create_protocol_quiet(folder_tasks = paste0(destination_folder),
                              folder_output = output_folder)

  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 11
  files_expected_media = 11
  files_expected_jsPsych = 25 
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)

  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  
  
    
  # Only from canonical_tasks (with images)----------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol2")

  OUT = create_protocol_quiet(canonical_tasks = c("AIM", "EAR", "IRI", "INFCONS"),
                              folder_output = output_folder)
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 6
  files_expected_media = 16
  files_expected_jsPsych = 12
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Only from canonical_tasks (without images)-------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol3")

  OUT = create_protocol_quiet(canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = output_folder)
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 5
  files_expected_media = 5
  files_expected_jsPsych = 11
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  
  

  # Both from example_tasks AND canonical_tasks -------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol4")

  OUT = create_protocol_quiet(folder_tasks = paste0(destination_folder),
                              canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = output_folder)
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 14
  files_expected_media = 11
  files_expected_jsPsych = 25
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  

  
  # Protocol ALL canonical ------------------------------------------------
    # Needs to be updated when new tasks and/or plugins, etc. are added
  
  output_folder = paste0(destination_folder, "/../create_protocol5")

  TASKS = jsPsychMaker::list_available_tasks()
  TASKS$tasks = TASKS$tasks[!TASKS$tasks %in% c("Bayesian39", "Bayesian40")]
  #BayesianXY tasks have:
  # sample: {
  # type: 'custom',
  # And custom is treated as a plugin...
  
  OUT = create_protocol_quiet(canonical_tasks = TASKS$tasks,
                              folder_output = output_folder)
  
  # Check expected == protocol
  
  # REVIEW:  # Maybe don´t include tests for tasks and media in here, as this protocol will change often
  files_expected_controllers = 19
  files_expected_tasks = 111
  files_expected_media = 18
  files_expected_jsPsych = 25
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  
  # Test overwrite folder_output -------------------------------------------
  
  # Create protocol 2x in same folder so the second time needs to remove
  output_folder = paste0(destination_folder, "/../create_protocol7")
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder)
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 3
  files_expected_media = 5
  files_expected_jsPsych = 10
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder)
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 3
  files_expected_media = 5
  files_expected_jsPsych = 10
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Test piloting task -----------------------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol8")

  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder, 
                              piloting_task = "AIM")
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 3
  files_expected_media = 5
  files_expected_jsPsych = 10
  
  files_protocol_controllers = list.files(paste0(output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  unlink(output_folder, recursive = TRUE)
  
  
  # Test no output folder ---------------------------------------------
  
  default_output_folder = "~/Downloads/new_protocol_999"
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM"))
  
  # Check expected == protocol
  
  files_expected_controllers = 19
  files_expected_tasks = 3
  files_expected_media = 5
  files_expected_jsPsych = 10
  
  files_protocol_controllers = list.files(paste0(default_output_folder, "/controllers/"), recursive = TRUE)
  files_protocol_tasks = list.files(paste0(default_output_folder, "/tasks/"), recursive = TRUE)
  files_protocol_media = list.files(paste0(default_output_folder, "/media/"), recursive = TRUE)
  files_protocol_jsPsych = list.files(paste0(default_output_folder, "/jsPsych-6/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_protocol_controllers), expected = files_expected_controllers)
  testthat::expect_equal(object = length(files_protocol_tasks), expected = files_expected_tasks)
  testthat::expect_equal(object = length(files_protocol_media), expected = files_expected_media)
  testthat::expect_equal(object = length(files_protocol_jsPsych), expected = files_expected_jsPsych)
  
  
  # BROWSER ----------------------------------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol_browser_999")
  message_expected = "Open new protocol in browser"
  
  # callr::rcmd()
  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder, 
                              launch_browser = TRUE)
  
  
  testthat::expect_match(object = OUT$messages[length(OUT$messages) - 1],
                         regexp = "Open new protocol in browser")
  
  unlink(output_folder, recursive = TRUE)
  
  
  output_folder = paste0(destination_folder, "/../create_protocol_browser_999")
  message_expected = "Open new protocol in browser"
  
  # callr::rcmd()
  OUT = create_protocol_quiet(canonical_tasks = c("EmpaTom"),
                              folder_output = output_folder, 
                              launch_browser = TRUE)
  
  
  testthat::expect_match(object = OUT$messages[length(OUT$messages) - 1],
                         regexp = "Open new protocol in browser")
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  
  # Final cleanup -----------------------------------------------------------

  # Delete destination_folder created in first step
  unlink(destination_folder, recursive = TRUE)
  
})
