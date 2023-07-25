testthat::test_that('copy_example_tasks', {

  destination_folder = "~/Downloads/TEST_testthat/example_tasks"
  files_example_task = 23
  
  testthat::expect_message(
    jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = TRUE), 
    regexp = paste0("Example tasks copied to `", destination_folder, "`")
  )
  
  files_example_protocol = list.files(destination_folder, recursive = TRUE)
  testthat::expect_equal(object = length(files_example_protocol), expected = files_example_task)
  
  unlink(destination_folder, recursive = TRUE)
  
  
})
