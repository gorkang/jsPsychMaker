#' copy_example_tasks
#'
#' @param destination_folder Destination folder for the examples
#' @param file_zip name of zip with examples
#' @param show_messages TRUE/FALSE
#'
#' @return
#' @export
#' @importFrom purrr walk
#' @importFrom callr r
#'
#' @examples
copy_example_tasks <- function(destination_folder, file_zip = "example_tasks.zip", show_messages = TRUE) {
  
  list_unzip(location = "jsPsychMaker", zip_file = file_zip,
             action = "unzip", destination_folder = destination_folder)

  if (show_messages == TRUE) cli::cli_alert_success("Example tasks copied to {.code {paste0(destination_folder)}}")
}
