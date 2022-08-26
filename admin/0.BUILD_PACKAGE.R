devtools::document()
devtools::load_all()

devtools::build()

devtools::check()

devtools::install()

# TODO: As a part of the build package process, should COPY "canonical_protocol_clean" to "inst/templates/canonical_protocol_clean.zip"
# TODO: Add more template plugins!

# 1 warning left: 
  # checking R files for non-ASCII characters ...
  # Found the following file with non-ASCII characters:
  #   create_task.R
  # Portable packages must use only ASCII characters in their R code,
  # except perhaps in comments.
  # Use \uxxxx escapes for other characters.

