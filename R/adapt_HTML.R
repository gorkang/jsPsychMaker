#' adapt_HTML
#'
#' @param CSVs CSV/XML files so we can extract names of tasks
#' @param folder_output Where to change the index.html file
#'
#' @return
#' @export
#' @importFrom purrr map_df
#' @importFrom cli cli_alert_info cli_abort
#'
#' @examples
adapt_HTML <- function(CSVs, folder_output) {
  
  TASKS = basename(dirname(CSVs))

  # Used plugins
  # PLUGINS = purrr::map_df(CSVs, readr::read_csv, col_types = readr::cols(.default = readr::col_character())) |> dplyr::distinct(plugin) 
  
  # READ files
  file_extension = unlist(strsplit(basename(CSVs), split="\\."))[seq(from = 2, to = length(CSVs) * 2, by = 2)]
  
  if (all(file_extension == "csv")) {
    
    PLUGINS = purrr::map_df(CSVs, readr::read_csv, col_types = readr::cols(.default = readr::col_character())) |> dplyr::distinct(plugin) 
    
  } else if (all(file_extension %in% c("xls", "xlsx"))) {
    
    PLUGINS = purrr::map_df(CSVs, readxl::read_excel, col_types = c("text")) |> dplyr::distinct(plugin) 
    
  } else {
    cli::cli_abort("{.code {CSVs}} should be all .csv or all .xls/xlsx files")
  }
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
  
  
  cli::cli_alert_info("Writing new index.html")
  cat(INDEX_plugins, file = index_file, sep = "\n")
}