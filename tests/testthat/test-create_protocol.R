testthat::test_that('create_protocol', {
  
  destination_folder = "~/Downloads/TEST_testthat/folder_tasks"
  
  
  # Copy example tasks to local folder
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder)
  
  


  # Only from csv's ---------------------------------------------------------
  # Includes all plugins
  output_folder = paste0(destination_folder, "/../create_protocol1")
  files_expected = 61
  
  jsPsychMaker::create_protocol(folder_tasks = destination_folder,
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
    
  # Only from canonical_tasks (with images)----------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol2")
  files_expected = 55
  
  jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI", "INFCONS"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Only from canonical_tasks (without images)-------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol3")
  files_expected = 42
  
  jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  

  # Both from csv's AND canonical_tasks -------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol4")
  files_expected = 64
  
  jsPsychMaker::create_protocol(folder_tasks = destination_folder,
                                canonical_tasks = c("AIM", "EAR", "IRI"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  

  
  # Protocol ALL canonical ------------------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol5")
  files_expected = 114
  
  TASKS = jsPsychMaker::list_available_tasks()
  
  jsPsychMaker::create_protocol(canonical_tasks = TASKS$tasks,
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  
  # Test overwrite folder_output -------------------------------------------
  
  # Create protocol 2x in same folder so the second time needs to remove
  output_folder = paste0(destination_folder, "/../create_protocol7")
  files_expected = 39
  
  jsPsychMaker::create_protocol(canonical_tasks = c("AIM"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)

  jsPsychMaker::create_protocol(canonical_tasks = c("AIM"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Test piloting task -----------------------------------------------------
  
  
  output_folder = paste0(destination_folder, "/../create_protocol8")
  files_expected = 39
  
  jsPsychMaker::create_protocol(canonical_tasks = c("AIM"),
                                folder_output = output_folder, 
                                launch_browser = FALSE, 
                                piloting_task = "AIM")
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  

  
  # Final cleanup -----------------------------------------------------------

  # Delete destination_folder created in first step
  unlink(destination_folder, recursive = TRUE)
  
})
