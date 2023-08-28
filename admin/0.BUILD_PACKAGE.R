# Github version
# remotes::install_github("gorkang/jsPsychMaker")

# Prepare inst/ zips ------------------------------------------------------
  
  # If there are changes to `canonical_protocol/tasks`, `canonical_protocol_clean`, `example_tasks` or `example_tasks_errors`, run this:

  # DESCRIPTION and NEWS ---
    file.copy(from = c("DESCRIPTION", "NEWS.md"),
              to = c("canonical_protocol_clean/DESCRIPTION", "canonical_protocol_clean/NEWS.md"), 
              overwrite = TRUE)

  # TASKS ---

    # Remove old files
    file.remove("inst/templates/tasks.zip")
    file.remove("inst/templates/canonical_protocol_clean.zip")
    file.remove("inst/templates/example_tasks.zip")
    file.remove("inst/templates/example_tasks_errors.zip")

    Sys.sleep(5) # Time for insync to sync
        
    
    # tasks ---
    jsPsychHelpeR::zip_files(folder_files = "canonical_protocol/tasks/", 
                             zip_name = "inst/templates/tasks.zip", 
                             remove_files = FALSE)

  # canonical_protocol_clean ---
    jsPsychHelpeR::zip_files(folder_files = "canonical_protocol_clean/", 
                             zip_name = "inst/templates/canonical_protocol_clean.zip", 
                             remove_files = FALSE)

  # Example tasks ---
    jsPsychHelpeR::zip_files(folder_files = "admin/example_tasks/example_tasks/", 
                             zip_name = "inst/templates/example_tasks.zip", 
                             remove_files = FALSE)
    
  # Example tasks errors ---
    jsPsychHelpeR::zip_files(folder_files = "admin/example_tasks/example_tasks_errors/", 
                             zip_name = "inst/templates/example_tasks_errors.zip", 
                             remove_files = FALSE)
    
    
    

# Build package -----------------------------------------------------------

  # Build and install
  devtools::document()
  devtools::load_all()
  devtools::build()
  devtools::install()

  # CHECKS
  devtools::test() # Run all tests (~35s)
  devtools::check() # Check package (~70s) # Includes test()
  
  devtools::test_coverage()
  # Not necessary because we have a use_github_action???
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
  # tools::showNonASCIIfile(file = "R/create_task.R")
  
  # https://altcodeunicode.com/alt-codes-letter-o-with-accents/
  # e.g. ó -> \u00F3
