testthat::test_that('create_protocol', {
  
  destination_folder = "~/Downloads/TEST_testthat/folder_tasks"
  
  
  # Copy example tasks to local folder
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = FALSE)
  
  # Create quiet version
  create_protocol_quiet <- purrr::quietly(jsPsychMaker::create_protocol)
  
  


  # Using example_tasks csv's, XLS, weird chars ------------------------------
  
  # Includes all plugins
  output_folder = paste0(destination_folder, "/../create_protocol1")
  files_expected = 68
  
  OUT = create_protocol_quiet(folder_tasks = paste0(destination_folder),
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
    
  # Only from canonical_tasks (with images)----------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol2")
  files_expected = 59
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM", "EAR", "IRI", "INFCONS"),
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Only from canonical_tasks (without images)-------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol3")
  files_expected = 46
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  

  # Both from example_tasks AND canonical_tasks -------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol4")
  files_expected = 71
  
  OUT = create_protocol_quiet(folder_tasks = paste0(destination_folder),
                              canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  

  
  # Protocol ALL canonical ------------------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol5")
  files_expected = 120
  
  TASKS = jsPsychMaker::list_available_tasks()
  
  OUT = create_protocol_quiet(canonical_tasks = TASKS$tasks,
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  
  # Test overwrite folder_output -------------------------------------------
  
  # Create protocol 2x in same folder so the second time needs to remove
  output_folder = paste0(destination_folder, "/../create_protocol7")
  files_expected = 43
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)

  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Test piloting task -----------------------------------------------------
  
  
  output_folder = paste0(destination_folder, "/../create_protocol8")
  files_expected = 43
  
  OUT = create_protocol_quiet(canonical_tasks = c("AIM"),
                              folder_output = output_folder, 
                              piloting_task = "AIM")
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  

  
  # Test no output folder ---------------------------------------------
  
  output_folder = "~/Downloads/new_protocol_999"
  files_expected = 43

  OUT = create_protocol_quiet(canonical_tasks = c("AIM"))
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  
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
