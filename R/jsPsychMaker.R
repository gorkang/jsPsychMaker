#' jsPsychMaker
#'
#' Avoid NOTE about "no visible binding for global variable"
#'
#' @docType package
#' @name jsPsychMaker
#' @keywords internal
NULL
## FROM janitor: quiets concerns of R CMD check re: the .'s that appear in pipelines
if (getRversion() >= "2.15.1") utils::globalVariables(c("."))
# Avoid NOTE about "no visible binding for global variable":
if (getRversion() >= "2.15.1") utils::globalVariables(c("csv_in_subfolder", "file_name", "plugin", "ID", "browseURL", "value", "task_name", "mtime", "experiment", "num", "root_folder_task", "subnum", "task", "trialid"))

