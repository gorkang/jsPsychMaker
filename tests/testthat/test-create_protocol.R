testthat::test_that('create_protocol', {
  
  destination_folder = "~/Downloads/TEST_testthat/folder_tasks"
  
  
  # Copy example tasks to local folder
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder)
  
  


  # Only from csv's ---------------------------------------------------------

  output_folder = paste0(destination_folder, "/../create_protocol1")
  files_expected = 62
  
  jsPsychMaker::create_protocol(folder_tasks = destination_folder,
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
    
  # Only from canonical_tasks (with images)----------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol2")
  files_expected = 72
  
  jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI", "INFCONS"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Only from canonical_tasks (without images)-------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol3")
  files_expected = 60
  
  jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  

  # Both from csv's AND canonical_tasks -------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol4")
  files_expected = 65
  
  jsPsychMaker::create_protocol(folder_tasks = destination_folder,
                                canonical_tasks = c("AIM", "EAR", "IRI"),
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  
  
  
  
  # Protocol ALL plugins --------------------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol5")
  folder_protocol_all_plugins = "admin/example_ALL/"
  
  files_expected = 61
  
  jsPsychMaker::create_protocol(folder_tasks = folder_protocol_all_plugins,
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  

  
  # Protocol ALL canonical ------------------------------------------------
  
  output_folder = paste0(destination_folder, "/../create_protocol6")
  files_expected = 124
  
  TASKS = jsPsychMaker::list_available_tasks()
  
  jsPsychMaker::create_protocol(canonical_tasks = TASKS$tasks,
                                folder_output = output_folder, 
                                launch_browser = FALSE)
  
  files_protocol = list.files(output_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_protocol), expected = files_expected)
  
  unlink(output_folder, recursive = TRUE)
  

  # Delete destination_folder created in first step
  unlink(destination_folder, recursive = TRUE)
  
})
