#' copy_example_tasks
#'
#' @param destination_folder Destination folder for the examples
#'
#' @return
#' @export
#' @importFrom purrr walk
#'
#' @examples
copy_example_tasks <- function(destination_folder) {
  
  # destination_folder = "~/Downloads"
  packagePath <- find.package("jsPsychMaker", lib.loc=NULL, quiet = TRUE)
  example_tasks_folder = paste0(packagePath, "/templates/example_tasks")
  example_tasks_files = list.files(example_tasks_folder, full.names = TRUE, recursive = TRUE)

  # Create folders  
  folders_to_create = paste0(destination_folder, unique(dirname(example_tasks_files)) |> stringr::str_replace_all(pattern = paste0(packagePath, "/templates"), replacement = ""))
  purrr::walk(folders_to_create, dir.create, recursive = TRUE, showWarnings = FALSE)
  
  # Copy files
  invisible(file.copy(from = example_tasks_files, 
            to = paste0(destination_folder, "/example_tasks/", basename(dirname(example_tasks_files)), "/", basename(example_tasks_files)), overwrite = TRUE))
  
  cli::cli_alert_success("Example tasks copied to {.code {paste0(destination_folder, '/example_tasks/')}}")
}
