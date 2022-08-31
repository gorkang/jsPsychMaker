
# Prepare files -----------------------------------------------------------
  
  # IF there are changes to `canonical_protocol/tasks` or `canonical_protocol_clean`, run this:

  # Remove old
  file.remove("inst/templates/tasks.zip")
  # Copy canonical_protocol/tasks to inst/templates/tasks.zip
  files_tasks = list.files(path = "canonical_protocol/tasks", full.names = TRUE, recursive = TRUE)
  zip(zipfile = "inst/templates/tasks.zip", files = files_tasks, extras = "-j")

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
  devtools::test() # Run all tests (~15s)
  devtools::check() # Check package (~30s)
  
  devtools::test_coverage()
  
  

# REMEMBER ----------------------------------------------------------------

# If warning about non-ASCII characters. Find character and replace 
  # https://altcodeunicode.com/alt-codes-letter-o-with-accents/
  # tools::showNonASCIIfile(file = "R/create_task.R")
  # e.g. ó -> \u00F3
