setup <- function() {
  
  if (!require('rlang')) install.packages('rlang'); library('rlang')
  
  rlang::check_installed(
    pkg = c("dplyr", "readr", "purrr", "janitor", "cli"),
    reason = "to run the initial setup")
  
  suppressPackageStartupMessages(library(dplyr))
  suppressPackageStartupMessages(library(readr))
  suppressPackageStartupMessages(library(purrr))
  suppressPackageStartupMessages(library(janitor))
  
}