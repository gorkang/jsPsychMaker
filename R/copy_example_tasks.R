#' copy_example_tasks
#'
#' @param destination_folder Destination folder for the examples
#'
#' @return
#' @export
#' @importFrom purrr walk
#' @importFrom callr r
#'
#' @examples
copy_example_tasks <- function(destination_folder) {
  
  # destination_folder = "~/Downloads"
  list_unzip(location = "jsPsychMaker", zip_file = "example_tasks.zip",
             action = "unzip", destination_folder = destination_folder)

  cli::cli_alert_success("Example tasks copied to {.code {paste0(destination_folder)}}")
}
