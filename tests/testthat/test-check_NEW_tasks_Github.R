testthat::test_that('check_NEW_tasks_Github', {
  
  # If this fails, UPDATE package with new tasks!
  testthat::expect_message(object = jsPsychMaker::check_NEW_tasks_Github(),
                           regexp = "No new tasks available")
  
})
