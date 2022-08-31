testthat::test_that('list_available_tasks', {

  TASKS = jsPsychMaker::list_available_tasks()
  testthat::expect_length(TASKS, 2)
  testthat::expect_equal(length(TASKS$tasks), length(TASKS$tasks_js))

})
