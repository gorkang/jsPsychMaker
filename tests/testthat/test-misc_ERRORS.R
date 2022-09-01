testthat::test_that('misc_ERRORS', {

    testthat::expect_message(
    regexp = "Can't find anything in `NON-EXISTENT`",
    check_trialids(folder_protocol = "NON-EXISTENT"))
  
})
