testthat::test_that('copy_example_tasks', {

  destination_folder = paste0(tempdir(), "/TEST_testthat/example_tasks")
  files_example_task = 20
  
  testthat::expect_message(
    jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = TRUE), 
    regexp = paste0("Example tasks copied to `", destination_folder, "`")
  )

  files_example_protocol = list.files(destination_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_example_protocol), expected = files_example_task)
  
    
  testthat::expect_message(
    jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = TRUE, which_tasks = "Slider"), 
    regexp = paste0("Example tasks copied to `", destination_folder, "`")
  )
  
  testthat::expect_message(
    jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = FALSE, which_tasks = "NonExistentTask"), 
    regexp = "Only found 0 of the 1 tasks")
  
  
  unlink(destination_folder, recursive = TRUE)
  
  
})
