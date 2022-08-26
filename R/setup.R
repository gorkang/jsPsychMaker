#' setup
#'
#' @return
#' @export
#' @importFrom rlang check_installed
#'
#' @examples
setup <- function() {
  
  rlang::check_installed(
    pkg = c("cli", "dplyr", "here", "janitor", "purrr", "readr", "stringr"),
    reason = "to run the initial setup")
  
}