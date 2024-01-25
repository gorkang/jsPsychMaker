# Github version
# remotes::install_github("gorkang/jsPsychMaker")


# Create pull request to merge changes -------------------------------------

  usethis::pr_init(branch = "NameOfTemporalBranch")
  usethis::pr_push()
  usethis::pr_finish()

  # After approving others' pull requests
    # Need to delete local branch

# Process new docs --------------------------------------------------------

  source("admin/process_docs.R")
  process_docs()
  
  DF_tasks = jsPsychAdmin::check_tasks_source("gorkang@gmail.com")
  DT::datatable(DF_tasks, filter = 'top', options = list(dom = "tip", pageLength = -1, paging = FALSE))
  
# Prepare inst/ zips ------------------------------------------------------
  
  # If there are changes to `canonical_protocol/tasks`, `canonical_protocol_clean`, `example_tasks` or `example_tasks_errors`, run this:

  # DESCRIPTION and NEWS ---
    file.copy(from = c("DESCRIPTION", "NEWS.md"),
              to = c("canonical_clean_6/DESCRIPTION", "canonical_clean_6/NEWS.md",
                     "canonical_clean_7/DESCRIPTION", "canonical_clean_7/NEWS.md"), 
              overwrite = TRUE)

  # TASKS ---

    # Remove old files
    file.remove("inst/templates/tasks6.zip")
    file.remove("inst/templates/tasks7.zip")
    file.remove("inst/templates/canonical_clean_6.zip")
    file.remove("inst/templates/canonical_clean_7.zip")
    file.remove("inst/templates/example_tasks.zip")
    file.remove("inst/templates/example_tasks_errors.zip")

    Sys.sleep(6) # Time for insync to sync
        
    
  # tasks ---
    
    # file.copy(from = "canonical_protocol/tasks/Consent.js", 
    #           to = "canonical_clean_6/tasks/Consent.js")
    # 
    # file.copy(from = "canonical_protocol/tasks/Goodbye.js", 
    #           to = "canonical_clean_6/tasks/Goodbye.js")
    
    # v6
    jsPsychHelpeR::zip_files(folder_files = "canonical_protocol/tasks/", 
                             zip_name = "inst/templates/tasks6.zip", 
                             remove_files = FALSE)
    # v7
    jsPsychHelpeR::zip_files(folder_files = "canonical_protocol/tasks7/", 
                             zip_name = "inst/templates/tasks7.zip", 
                             remove_files = FALSE)

  # canonical_protocol_clean ---
    #v6
    jsPsychHelpeR::zip_files(folder_files = "canonical_clean_6/", 
                             zip_name = "inst/templates/canonical_clean_6.zip", 
                             remove_files = FALSE)
    #v7
    jsPsychHelpeR::zip_files(folder_files = "canonical_clean_7/", 
                             zip_name = "inst/templates/canonical_clean_7.zip", 
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
  # devtools::build()
  devtools::install()

  # CHECKS
  devtools::test() # Run all tests (~53s)
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
