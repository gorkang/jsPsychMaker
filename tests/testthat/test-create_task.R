testthat::test_that('create_task', {

  destination_folder = paste0(tempdir(), "/TEST_testthat/create_task")
  destination_task = paste0(destination_folder, "/IfQuestion/")
  
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, show_messages = FALSE)

  jsPsychMaker::create_task(folder_task = destination_task)
  files_expected = 1
  files_task = list.files(paste0(destination_task, "/tasks/"), recursive = TRUE)
  
  testthat::expect_equal(object = length(files_task), expected = files_expected)
  
  unlink(destination_folder, recursive = TRUE)
  
  
})
