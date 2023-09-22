#' adapt_HTML
#'
#' @param TASKS list of tasks in protocol
#' @param new_plugins plugins used by tasks
#' @param folder_output where to change the index.html file
#' @param show_messages TRUE/FALSE
#' @param jsPsych_version By default jsPsych6. Can also be 7 for jsPsych7
#'
#' @return Writes a file
# #' @export
#' @importFrom purrr map_df
#' @importFrom cli cli_alert_info cli_abort cli_alert_success
#' @importFrom tibble tibble
adapt_HTML <- function(TASKS, new_plugins = NULL, folder_output, show_messages = TRUE, jsPsych_version = 6) {

  # Read index
  index_file = paste0(folder_output, "/index.html")
  INDEX = readLines(index_file)
  
  # Plugins -----------------------------------------------------------------

    # Used plugins
    PLUGINS = tibble::tibble(plugin = new_plugins) |> dplyr::distinct(plugin)
    if (jsPsych_version == 7) {
      PLUGINS$plugin = gsub("jsPsych", "", PLUGINS$plugin) %>% 
      gsub("([A-Z])", "-\\1", .) %>%
      gsub("^([a-z])", "-\\1", .) %>%
      tolower()
      #gsub("([A-Z])", paste0("-", "\\1"), gsub("jsPsych", "", PLUGINS$plugin)) |> tolower()
      }
    
    # Create code for all plugins used
    sting_plugins = ifelse(jsPsych_version == 6, "jspsych", "plugin")
    code_plugins = paste0('\t<script src="jsPsych-', jsPsych_version , paste0('/plugins/', sting_plugins), PLUGINS$plugin, '.js"></script>')
  
    # Detect canonical_clean plugins
    begin_plugins = which(grepl("<!-- Protocol Plugins: CANONICAL -->", INDEX)) + 1
    end_plugins = which(grepl("<!-- Mic controller -->", INDEX)) + 1
    
    # Remove canonical_clean plugins
    INDEX_clean = INDEX[-c(begin_plugins:end_plugins)]
    
    # Add plugins to index.html
    INDEX_plugins = append(INDEX_clean, code_plugins, after = begin_plugins -1)
    
    if (show_messages == TRUE) cli::cli_alert_info("Added plugins to index.html: {.code {PLUGINS$plugin}}")
    
  

  # Specific tasks changes --------------------------------------------------

    # ADD mic plugin if needed
    TASKS_mic = c("SCGT")
    
    if (TASKS_mic %in% TASKS) {
      code_mic = c('\t<!-- Mic controller -->\n\t<script src="controllers/js/mic_controller.js"></script>\n')
      end_new_plugins = which(grepl(code_plugins[length(code_plugins)], INDEX_plugins)) + 1
      INDEX_plugins = append(INDEX_plugins, code_mic, after = end_new_plugins)
      if (show_messages == TRUE) cli::cli_alert_info("Added extra dependencies for: {.code {TASKS_mic}}")
    }
    
    # RMET
    if ("RMET" %in% TASKS) {
      RMET_tooltip = which(grepl("<!-- RMET tooltip -->", INDEX_plugins))
      INDEX_plugins = INDEX_plugins[-c(RMET_tooltip:(RMET_tooltip + 1))]
      if (show_messages == TRUE) cli::cli_alert_info("Added extra dependencies for: `RMET`")
    }


  # Write new index ---------------------------------------------------------
    
  cat(INDEX_plugins, file = index_file, sep = "\n")
  if (show_messages == TRUE) cli::cli_alert_success("Writing new index.html")
    
  
}
