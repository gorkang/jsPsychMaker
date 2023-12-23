#' copy_example_tasks
#'
#' @param destination_folder Destination folder for the examples
#' @param file_zip name of zip with examples
#' @param which_tasks NULL for everything, or a specific name (e.f. Slider)
#' @param show_messages TRUE/FALSE
#'
#' @return unzips example tasks to the destination_folder
#' @export
#' @importFrom purrr walk
#' @importFrom callr r
copy_example_tasks <- function(destination_folder, file_zip = "example_tasks.zip", which_tasks = NULL, show_messages = TRUE) {
  
  # which_tasks = c("Slider", "MultiChoice")
  
  list_unzip(location = "jsPsychMaker", zip_file = file_zip,
             action = "unzip", destination_folder = destination_folder)
  
  if (!is.null(which_tasks)) {
    ALL_tasks = list.dirs(destination_folder, recursive = FALSE)
    
    found_tasks = ALL_tasks[which(basename(ALL_tasks) %in% which_tasks)]
    if (length(found_tasks) < length(which_tasks)) {
      cli::cli_alert_warning(
      c("Only found {length(found_tasks)} of the {length(which_tasks)} tasks: {basename(found_tasks)}\n\n",
      "Tasks available: \n {basename(ALL_tasks)}\n\n"))
    }
    
    DELETE = ALL_tasks[which(!basename(ALL_tasks) %in% which_tasks)]
    unlink(DELETE, recursive = TRUE)
    if (show_messages == TRUE) cli::cli_alert_info("Deleted {basename(DELETE)} from {.code {destination_folder}}")
    
  }
  
  if (show_messages == TRUE) cli::cli_alert_success("Example tasks copied to {.code {paste0(destination_folder)}}")
}
