create_items_from_file <- function(file_name) {

# DEBUG
# file_name = "admin/example_tasks_new_protocol//AnsMat/AnsMat.csv"

  # if (!require('rlang')) install.packages('rlang'); library('rlang')
  # rlang::check_installed(
  #   pkg = c("dplyr", "readr", "purrr", "janitor"), 
  #   reason = "to run the initial setup")
  
  suppressPackageStartupMessages(library(dplyr))
  suppressPackageStartupMessages(library(readr))
  suppressPackageStartupMessages(library(purrr))
  suppressPackageStartupMessages(library(janitor))
  
  # Read CSV file
  DF = readr::read_csv(paste0(file_name), col_types = cols(.default = col_character())) |> 
    janitor::remove_empty(which = "cols") # Remove columns when all are NAs
  
  DF_columns_parameters = DF |> dplyr::select(-ID, -plugin)
  
  task_name = gsub("(.*)\\..*", "\\1", basename(file_name))

  ALL_PLUGINS = DF |> distinct(plugin) |> pull(plugin)
  WEBS_help = paste0("https://www.jspsych.org/6.3/plugins/jspsych-", ALL_PLUGINS, "/")
  cli::cli_alert_info("Found parameters: {.code {names(DF_columns_parameters)}}. For help with {.code {ALL_PLUGINS}}: {.url {WEBS_help}}")
  
  
# CHECKS ------------------------------------------------------------------

  essential_columns = c("ID", "plugin")
  esentials_present = essential_columns %in% names(DF)
  if (!all(esentials_present)) cli::cli_abort("Missing the following essential column: `{essential_columns[!esentials_present]}` in `{basename(file_name)}`")



# Loop by row (items) -----------------------------------------------------

# For each row in the csv (each item)
1:nrow(DF) |>
  purrr::map( ~ {

  # Plugin
  PLUGIN = DF$plugin[.x]
  
  # Item number
  item_number = sprintf("%03d", .x)
  
  # Select all minus ID and plugin
  DF_MAP = DF_columns_parameters[.x,]# |> dplyr::select(-ID, -plugin)

  # ADD DEFAULTS ---
  
    # Add require_movement to all sliders
    if (grepl("slider", PLUGIN) & !"require_movement" %in% names(DF_MAP)) DF_MAP = DF_MAP |> mutate(require_movement = "true")
    # Add require to all non-sliders
    if (!grepl("slider", PLUGIN) & !"required" %in% names(DF_MAP)) DF_MAP = DF_MAP |> mutate(required = "true")
  
  
  # Create a parameter vector with everything in the csv ---
  ALL = 1:ncol(DF_MAP) |>
    map(~{
      # .x = 2
      is_a_number = grepl("^[0-9]+$", DF_MAP[.x])
      is_a_logical = DF_MAP[.x] %in% c("true", "false")
      is_an_enumeration = grepl(",", DF_MAP[.x])

      # If it contains an enumeration
      if (is_an_enumeration) {
        DF_MAP[.x] = paste0("['&nbsp;", paste(strsplit(x = DF_MAP[[.x]], split = ",") |> unlist() |> trimws(), collapse = "', '&nbsp;"), "']")
        
        # If it is not logical and not a number
      } else if (!is_a_logical & !is_a_number) {
        DF_MAP[.x] = paste0("'", DF_MAP[.x], "'")
      }
      # Final string
      paste0(colnames(DF_MAP[.x]), ": ", DF_MAP[.x])
    }) |>
    unlist() |> paste(collapse = ",\n      ")



  # Create chunk ------------------------------------------------------------

  # We insert the parameters inside questions (if it's a survey plugin)
  if (grepl("survey", PLUGIN)) {

    ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN, "',
    questions: [{
      ", ALL, "
    }],
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", task_name, ".push(question", item_number, ");", "\n")

  # We don't use the questions vector otherwise
  } else {

    ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN, "',
    ", ALL, ",
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", task_name, ".push(question", item_number, ");", "\n")

  }


  # Clean empty lines leaved by empty parameters
  ITEM_output = gsub("\\n[[:space:]]{1,100}\\n", "\\\n", ITEM_output_RAW)

  ITEM_output

  
})

}

