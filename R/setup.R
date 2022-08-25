setup <- function() {
  
  if (!require('rlang')) install.packages('rlang'); library('rlang')
  
  rlang::check_installed(
    pkg = c("cli", "dplyr", "here", "janitor", "purrr", "readr", "stringr"),
    reason = "to run the initial setup")
  
  suppressPackageStartupMessages(library(dplyr))
  suppressPackageStartupMessages(library(readr))
  suppressPackageStartupMessages(library(purrr))
  suppressPackageStartupMessages(library(janitor))
  
}