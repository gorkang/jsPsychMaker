#' create_items_from_file
#'
#' @param file_name CSV/XLS file with info about the task
#' @param folder_output Where do we have the canonical_protocol_clean
#'
#' @return
#' @export
#' @importFrom purrr map
#' @importFrom cli cli_alert_info cli_abort cli_alert_danger
#' @importFrom janitor remove_empty
#' @importFrom readr read_csv cols col_character
#' @importFrom readxl read_excel
#' @importFrom stringr str_replace_all
#'
#' @examples
create_items_from_file <- function(file_name, folder_output = NULL) {

  # TODO
  # At some point we changed the wat conditional questions trialid's are build, so they 
  # do not increase item, they add _1 to the question they depend: e.g. PVC_001_1
    # See PVC or Report. 
    #  PROBLEM: HOW would be apply that to the BNT??? 1, 1_1, 1_2, 1_1_1???
  
  # DEBUG
  # file_name = "admin/example_tasks_new_protocol//AnsMat//AnsMat.csv"
  # folder_output = "admin/OUTPUT/NEW"

  # READ file
  file_extension = strsplit(basename(file_name), split="\\.")[[1]][2]
  if (file_extension == "csv") {
    
    DF = readr::read_csv(paste0(file_name), col_types = readr::cols(.default = readr::col_character())) |> 
      janitor::remove_empty(which = "cols") # Remove columns when all are NAs
    
  } else if (file_extension %in% c("xls", "xlsx")) {
    
    DF = readxl::read_excel(paste0(file_name), col_types = c("text")) |> 
      janitor::remove_empty(which = "cols") # Remove columns when all are NAs
    
   } else {
    cli::cli_abort("{.code {file_name}} should be a .csv or .xls/xlsx file")
  }
  
  
  
  

  # Only parameters DF
  DF_columns_parameters = DF |> dplyr::select(-ID, -plugin)
  
  task_name = gsub("(.*)\\..*", "\\1", basename(file_name))

  PLUGINS_used = DF |> dplyr::distinct(plugin) |> dplyr::pull(plugin)
  
  # CHECK we have all the used plugins
  packagePath <- find.package("jsPsychMaker", lib.loc = NULL, quiet = TRUE)
  canonical_zip = paste0(packagePath, "/templates/canonical_protocol_clean.zip")
  canonical_zip_files = unzip(canonical_zip, list=TRUE)[,1]
  ALL_available_plugins = canonical_zip_files[grepl(pattern = "plugins/jspsych-", canonical_zip_files)] |> basename() |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
  
  
  # ALL_available_plugins = list.files(folder_output, recursive = TRUE, pattern = "jspsych-") |> basename() |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
  CHECK_ALL_available_plugins = !paste0("jspsych-", PLUGINS_used) %in% ALL_available_plugins
  if (any(CHECK_ALL_available_plugins)) cli::cli_abort(c("Plugin/s {.code {PLUGINS_used[CHECK_ALL_available_plugins]}} NOT found in {.code {paste0(folder_output, '/jsPsych-6/plugins/')}}", 
                                                       " - Correct the issue in {.code {file_name}}"))
  
  
  WEBS_help = paste0("https://www.jspsych.org/6.3/plugins/jspsych-", PLUGINS_used, "/")
  cli::cli_alert_info("Found parameters: {.code {names(DF_columns_parameters)}}. For help with {.code {PLUGINS_used}}: {.url {WEBS_help}}")
  
  
# CHECKS ------------------------------------------------------------------

  # Have essential columns
  essential_columns = c("ID", "plugin")
  esentials_present = all(essential_columns %in% names(DF))
  if (!esentials_present) cli::cli_abort("Missing the following essential column: `{essential_columns[!esentials_present]}` in `{basename(file_name)}`")

  # Have text output columns
  TEXT_columns = c("prompt", "stimulus", "preamble")
  text_columns_present = any(TEXT_columns %in% names(DF_columns_parameters))
  if (!text_columns_present) cli::cli_alert_danger("Missing an output text column. Usually should have one of: {.code {TEXT_columns}}")

  # IDs
  if (any(is.na(DF$ID))) cli::cli_abort(c("Some of the ID's are empty"))
  if (!all(DF$ID == 1:nrow(DF))) cli::cli_abort(c("ID's need to be correlative.", "- You have:    {DF$ID}", "- Expected: {1:nrow(DF)}"))
  
  # There is ID and/or plugin, but no parameters
  if (nrow(janitor::remove_empty(DF_columns_parameters, which = "rows")) != nrow(DF_columns_parameters)) cli::cli_abort(c("There are rows without parameters"))
  
  # No plugins
  if (any(is.na(PLUGINS_used))) cli::cli_abort(c("There are rows without plugins"))


# Loop by row (items) -----------------------------------------------------

# For each row in the csv (each item)
1:nrow(DF) |>
  purrr::map( ~ {

  # Plugin
  PLUGIN = DF$plugin[.x]
  
  # Item number [000]
  item_number = sprintf("%03d", .x)
  
  # DF for map
  DF_MAP = DF_columns_parameters[.x,] |> 
    # Remove columns with NA (e.g. if_question for items without it)
    janitor::remove_empty(which = "cols")

  
  # ADD DEFAULTS ---
  
    # Add require_movement to all sliders
    if (grepl("slider", PLUGIN) & !"require_movement" %in% names(DF_MAP)) DF_MAP = DF_MAP |> dplyr::mutate(require_movement = "true")
    # Add require to all non-sliders
    if (!grepl("slider", PLUGIN) & !"required" %in% names(DF_MAP)) DF_MAP = DF_MAP |> dplyr::mutate(required = "true")
  
   
  # Create a parameter vector with everything in the csv ---------------------
  
  # One per column
  ALL = 1:ncol(DF_MAP) |>
    purrr::map(~{
      
      BLACKLIST_parameters = c("if_question")
      NUMERIC_enumerations = c("range")
      
      # Do not process parameters in the blacklist 
      if (!names(DF_MAP[.x]) %in% BLACKLIST_parameters) {
        
        is_a_number = grepl("^[0-9]+$", DF_MAP[.x])
        is_a_logical = DF_MAP[.x] %in% c("true", "false")
        is_an_enumeration = grepl(",", DF_MAP[.x])
  
        # Format modifications depending on content and/or column
        # If it contains an enumeration (",")
        if (is_an_enumeration) {
          
          # If contains commas but it is one of the text columns
          if (names(DF_MAP[.x]) %in% TEXT_columns) {
            DF_MAP[.x] = paste0("'", DF_MAP[.x], "'")
            
          # We do not add &nbsp; to things like range
          } else if (names(DF_MAP[.x]) %in% NUMERIC_enumerations) {
            DF_MAP[.x] = paste0("[", paste(strsplit(x = DF_MAP[[.x]], split = ",") |> unlist() |> trimws(), collapse = ", "), "]")
          
          # All the other enumerations  
          } else {
            DF_MAP[.x] = paste0("['&nbsp;", paste(strsplit(x = DF_MAP[[.x]], split = ",") |> unlist() |> trimws(), collapse = "', '&nbsp;"), "']")
            
          }
          
          # If it is not logical and not a number
        } else if (!is_a_logical & !is_a_number) {
          DF_MAP[.x] = paste0("'", DF_MAP[.x], "'")
        }
        # Final string
        paste0(colnames(DF_MAP[.x]), ": ", DF_MAP[.x])
        
      }
      
    }) |> 
    unlist() |> paste(collapse = ",\n      ")



  # Create chunk [DO NOT CHANGE TABS/SPACES] --------------------------------

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
  ", ifelse("if_question" %in% names(DF_MAP), "", paste0(task_name, ".push(question", item_number, ");")), "\n") # Show only if NOT an if_question

  # We don't use the questions vector otherwise
  } else {

    ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN, "',
    ", ALL, ",
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", ifelse("if_question" %in% names(DF_MAP), "", paste0(task_name, ".push(question", item_number, ");")), "\n") # Show only if NOT an if_question
  }

  
  # PREPARE if_questions [DO NOT CHANGE TABS/SPACES] --------------------------
  
  if ("if_question" %in% names(DF_MAP)) {
    
    if_question_item = sprintf("%03d", as.numeric(gsub("([1-9]{1,99}) ([!=]{1,2}) (.*)", "\\1", DF_MAP$if_question)))
    if_question_condition_symbol = gsub("([1-9]{1,99}) ([!=]{1,2}) (.*)", "\\2", DF_MAP$if_question)
    if_question_condition = gsub("([1-9]{1,99}) ([!=]{1,2}) (.*)", "\\3", DF_MAP$if_question)
    
  if_question_ITEM_output_RAW = paste0("
    var if_question", item_number, " = {
      timeline: [question", item_number, "],
      data: {trialid: '", task_name,"_", item_number, "_if', procedure: '", task_name,"'},
      conditional_function: function(){
        try {
          let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === '", task_name,"_", if_question_item, "'))['response'])['Q0']).trim();
          
          if((data) ", if_question_condition_symbol, " '", if_question_condition, "'){
            return true;
          } else {
            return false;
          }
          
        } catch(err) {
          //alert('we dont have ", task_name,"_03')
          return false;
        }
      },
    };
  ", task_name,".push(if_question", item_number, ");
  ")
    
  } else {
    if_question_ITEM_output_RAW = NULL
  }
  

  # Clean output ------------------------------------------------------------

  # Clean empty lines leaved by empty parameters
  ITEM_output = gsub("\\n[[:space:]]{1,100}\\n", "\\\n", ITEM_output_RAW)
  
  if_question_ITEM_output_RAW = gsub("\\n[[:space:]]{1,100}\\n", "\\\n", if_question_ITEM_output_RAW)
  
  ITEM_output_final = paste0(ITEM_output, "\n\n", if_question_ITEM_output_RAW)
  # cat(ITEM_output_final)
  
  ITEM_output_final

})

}
