testthat::test_that('create_task_separator', {
  # Create a task where the options are separated by ";"
  
  destination_folder = paste0(tempdir(), "/TEST_testthat/task_separator")
  destination_task = paste0(destination_folder, "/MultiChoiceSeparator/")
  
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = FALSE)
  
  jsPsychMaker::create_task(folder_task = destination_task, options_separator = ";")
  files_expected = 1
  files_task = list.files(paste0(destination_task, "/tasks/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_task), expected = files_expected)
  
  unlink(destination_folder, recursive = TRUE)
  
  
})
