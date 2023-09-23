testthat::test_that('list_unzip', {

  destination_folder = paste0(tempdir(), "/TEST_testthat/list_unzip")
  unlink(destination_folder, recursive = TRUE)
  
  testthat::expect_message(
    regexp = 'listing all zip files',
    jsPsychMaker::list_unzip(location = destination_folder, silent = FALSE)
    )
    
  testthat::expect_length(
    jsPsychMaker::list_unzip(location = destination_folder),
    n = 0
  )
    
  testthat::expect_error(
    regexp = "NON.zip not found in",
    jsPsychMaker::list_unzip(location = destination_folder, zip_file = "NON.zip")
  )

  
  testthat::expect_message(
    regexp = 'zip_file == "?"',
    jsPsychMaker::list_unzip(location = "jsPsychMaker", silent = FALSE)
  )
  
  testthat::expect_message(
    regexp = 'action == "list"',
    jsPsychMaker::list_unzip(location = "jsPsychMaker", silent = FALSE, action = "list", zip_file = "tasks6.zip")
  )
  
  testthat::expect_message(
    regexp = 'action == "list"',
    jsPsychMaker::list_unzip(location = "jsPsychMaker", silent = FALSE, action = "list", zip_file = "tasks7.zip")
  )
  
  testthat::expect_error(
    regexp = 'NONexisting.zip not found in',
    jsPsychMaker::list_unzip(location = "jsPsychMaker", zip_file = "NONexisting.zip")
  )
  
  testthat::expect_error(
    regexp = '`destination_folder` is empty.',
    jsPsychMaker::list_unzip(location = "jsPsychMaker", destination_folder = NULL, action = "unzip", zip_file = "tasks6.zip")
  )
  
  testthat::expect_message(
    regexp = paste0('UNZIPed `tasks6.zip` to `', destination_folder, '`'),
    jsPsychMaker::list_unzip(location = "jsPsychMaker", destination_folder = destination_folder, silent = FALSE, action = "unzip", zip_file = "tasks6.zip")
  )
  
  testthat::expect_error(
    regexp = '`nonexistent` does not exist inside',
    jsPsychMaker::list_unzip(
      location = "jsPsychMaker",
      destination_folder = destination_folder,
      silent = FALSE,
      action = "unzip",
      zip_file = "tasks6.zip", files_to_unzip = "nonexistent"
    )
  )
  
  testthat::expect_message(
    regexp = 'UNZIPing|UNZIPed `1` files from `tasks6.zip`',
    jsPsychMaker::list_unzip(
      location = "jsPsychMaker",
      destination_folder = destination_folder,
      silent = FALSE,
      action = "unzip",
      zip_file = "tasks6.zip", files_to_unzip = "AIM.js"
    )
  )
  
  testthat::expect_message(
    regexp = '`action` needs to be either `list` or `unzip`',
    jsPsychMaker::list_unzip(
      location = "jsPsychMaker",
      destination_folder = destination_folder,
      silent = FALSE,
      action = "sd",
      zip_file = "tasks6.zip", files_to_unzip = "AIM.js"
    )
  )
  
  
  
  TASKS = jsPsychMaker::list_available_tasks()
  testthat::expect_length(TASKS, 2)
  
  testthat::expect_equal(length(TASKS$tasks), length(TASKS$tasks_js))
  
  testthat::expect_message(
    regexp = "For more info about the tasks, see",
    jsPsychMaker::list_available_tasks(show_help = TRUE))

  unlink(destination_folder, recursive = TRUE)
  
})
