
# Prepare files -----------------------------------------------------------
  
  # IF there are changes to `canonical_protocol/tasks` or `canonical_protocol_clean`, run this:

  # TASKS ---
    # Remove old
    file.remove("inst/templates/tasks.zip")
    # Copy canonical_protocol/tasks to inst/templates/tasks.zip
    files_tasks = list.files(path = "canonical_protocol/tasks", full.names = TRUE, recursive = TRUE)
    zip(zipfile = "inst/templates/tasks.zip", files = files_tasks, extras = "-j")

  # canonical_protocol_clean ---
    # Remove old
    file.remove("inst/templates/canonical_protocol_clean.zip")
    # Copy canonical_protocol_clean to inst/templates/canonical_protocol_clean.zip
    setwd("canonical_protocol_clean/")
    files_canonical_protocol_clean = list.files(path = ".", full.names = TRUE, recursive = TRUE)
    zip(zipfile = "../inst/templates/canonical_protocol_clean.zip", files = files_canonical_protocol_clean)
    setwd("../")
  

# Build package -----------------------------------------------------------

  # Build and install
  devtools::document()
  devtools::load_all()
  devtools::build()
  devtools::install()

  # CHECKS
  devtools::test() # Run all tests (~35s)
  devtools::check() # Check package (~70s)
  
  devtools::test_coverage()
  # Not necesary because we have a use_github_action???
  # covr::codecov(token = "6c8a8848-9175-446c-9cb8-131378f96356") # UPLOAD coverage reports to https://codecov.io/gh/gorkang/jsPsychMaker/
  
  

# Code coverage -----------------------------------------------------------
  
  # FIRST TIME
  # 1) usethis::use_coverage(type = c("codecov"))
  # 2) usethis::use_github_action("test-coverage") # To continuosly monitor code coverage
  # 3) Go to website: codecov.io using the GitHub account and setup the repo
  
  COV_REPORT = covr::package_coverage(); COV_REPORT # Test coverage report. If a testthat tests fails, this FAILS!
  covr::report(COV_REPORT) # Check local shiny app with Coverage report    
  # TOKEN FROM step 3)
  covr::codecov(token = "6c8a8848-9175-446c-9cb8-131378f96356") # UPLOAD coverage reports to https://codecov.io/gh/gorkang/jsPsychMaker/
  

# REMEMBER ----------------------------------------------------------------

# If warning about non-ASCII characters. Find character and replace 
  # https://altcodeunicode.com/alt-codes-letter-o-with-accents/
  # tools::showNonASCIIfile(file = "R/create_task.R")
  # e.g. ó -> \u00F3
