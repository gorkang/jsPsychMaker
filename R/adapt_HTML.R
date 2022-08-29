#' adapt_HTML
#'
#' @param TASKS list of tasks in protocol
#' @param new_plugins plugins used by tasks
#' @param folder_output where to change the index.html file
#'
#' @return
#' @export
#' @importFrom purrr map_df
#' @importFrom cli cli_alert_info cli_abort
#' @importFrom tibble tibble
#'
#' @examples
adapt_HTML <- function(TASKS, new_plugins = NULL, folder_output) {
  
  # Used plugins
  PLUGINS = tibble::tibble(plugin = new_plugins) |> dplyr::distinct(plugin)
  
  # Create code for all plugins used
  code_plugins = paste0('\t<script src="jsPsych-6/plugins/jspsych-', PLUGINS$plugin, '.js"></script>')
    
  # Read index
  index_file = paste0(folder_output, "/index.html")
  INDEX = readLines(index_file)

  # Detect canonical_clean plugins
  begin_plugins = which(grepl("<!-- Protocol Plugins: CANONICAL -->", INDEX)) + 1
  end_plugins = which(grepl("<!-- Mic controller -->", INDEX)) + 1
  
  # Remove canonical_clean plugins
  INDEX_clean = INDEX[-c(begin_plugins:end_plugins)]
  
  # Add plugins
  INDEX_plugins = append(INDEX_clean, code_plugins, after = begin_plugins -1)
  

  # Specific tasks changes --------------------------------------------------

    # ADD mic plugin if needed
    TASKS_mic = c("SCGT")
    
    if (TASKS_mic %in% TASKS) {
      code_mic = c('\t<!-- Mic controller -->\n\t<script src="controllers/js/mic_controller.js"></script>\n')
      end_new_plugins = which(grepl(code_plugins[length(code_plugins)], INDEX_plugins)) + 1
      INDEX_plugins = append(INDEX_plugins, code_mic, after = end_new_plugins)
    }
    
    # RMET
    if (!"RMET" %in% TASKS) {
      RMET_tooltip = which(grepl("<!-- RMET tooltip -->", INDEX_plugins))
      INDEX_plugins = INDEX_plugins[-c(RMET_tooltip:(RMET_tooltip + 1))]
    }


  # Write new index ---------------------------------------------------------
  
  cli::cli_alert_info("Writing new index.html")
  cat(INDEX_plugins, file = index_file, sep = "\n")
  
}
