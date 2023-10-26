#' create_items_from_file
#'
#' @param file_name CSV/XLS file with info about the task
#' @param folder_output Where do we have the canonical_protocol_clean
#' @param options_separator different options are by default separated by ;
#' @param show_messages TRUE/FALSE
#' @param jsPsych_version By default jsPsych6. Can also be 7 for jsPsych7
#'
#' @return A char vector with the items from a file
# #' @export
#' @importFrom purrr map
#' @importFrom cli cli_alert_info cli_abort cli_alert_danger cli_alert
#' @importFrom janitor remove_empty
#' @importFrom readr read_csv cols col_character
#' @importFrom readxl read_excel
#' @importFrom stringr str_replace_all str_count

create_items_from_file <- function(file_name, folder_output = NULL, options_separator = ";", show_messages = FALSE, jsPsych_version = 6) {
  
  # TODO
  # At some point we changed the wat conditional questions trialid's are build, so they 
  # do not increase item, they add _1 to the question they depend: e.g. PVC_001_1
    # See PVC or Report. 
    #  PROBLEM: HOW would be apply that to the BNT??? 1, 1_1, 1_2, 1_1_1???
  
  # DEBUG
  # file_name = "admin/example_ALL/ALL/ALL.csv"
  # folder_output = "admin/OUTPUT/NEW"
  # options_separator = ";"
  # show_messages = FALSE

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
  
  
  # CHECK have essential columns
  essential_columns = c("ID", "plugin")
  essential_missing = !essential_columns %in% names(DF)
  if (any(essential_missing)) cli::cli_abort("Missing the following essential column: `{essential_columns[essential_missing]}` in `{basename(file_name)}`")
  

  # Only parameters DF
  DF_columns_parameters = DF |> dplyr::select(-ID, -plugin)
  
  task_name = gsub("(.*)\\..*", "\\1", basename(file_name))

  PLUGINS_used = DF |> dplyr::distinct(plugin) |> dplyr::pull(plugin)

  
  # Adapt PLUGIN strings to v7 ----------------------------------------------

  if (jsPsych_version == 7) {
    # PLUGIN   = "survey-multi-choice"
    string_plugin = "plugin"
    # PLUGIN = gsub("^([a-z])", "\\U\\1", PLUGIN, perl = TRUE) %>%
      # gsub("-([a-z])", "\\U\\1", ., perl = TRUE)
  } else {
    string_plugin = "jspsych"
  }


  
  # CHECK lines without plugins
  if (any(is.na(PLUGINS_used))) cli::cli_abort(c("There are rows without plugins"))
  
  # CHECK we have all the used plugins
  canonical_zip_files = list_unzip(location = "jsPsychMaker", zip_file = paste0("canonical_clean_", jsPsych_version, ".zip"), action = "list")
  ALL_available_plugins = canonical_zip_files[grepl(pattern = paste0("plugins/", string_plugin, "-"), canonical_zip_files)] |> basename() |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
  
  CHECK_ALL_available_plugins = !paste0(string_plugin, "-", PLUGINS_used) %in% ALL_available_plugins
  if (any(CHECK_ALL_available_plugins)) cli::cli_abort(c("Plugin/s {.code {PLUGINS_used[CHECK_ALL_available_plugins]}} NOT found in {.code {paste0(folder_output, '/jsPsych-', jsPsych_version, '/plugins/')}}", 
                                                       " - Correct the issue in {.code {file_name}}"))

  # Show help message  
  WEBS_help = paste0("https://www.jspsych.org/", jsPsych_version, ".3/plugins/jspsych-", PLUGINS_used, "/")
  
  # Avoid listing all websites when > 2 plugins in the task
  if (length(PLUGINS_used) > 2) WEBS_help = paste0("https://www.jspsych.org/", jsPsych_version, ".3/plugins/")
  if (show_messages == TRUE) cli::cli_alert_info("Parameters: {.code {names(DF_columns_parameters)}}")
  if (show_messages == TRUE) cli::cli_alert_info("Plugins: {.code {PLUGINS_used}}. Help: {.url {WEBS_help}}")
  
  
# CHECKS ------------------------------------------------------------------

  # To be able to clean up weird chars latter
  TEXT_response_columns = c("choices", "options")
  
  # The options_separator used is adequate?
  TEXT_existing_columns = TEXT_response_columns[TEXT_response_columns %in% names(DF)]
  if (length(TEXT_existing_columns) > 0) {
    
    TEXT_response_columns_data = DF |> tidyr::pivot_longer(dplyr::all_of(TEXT_existing_columns)) |> dplyr::pull(value)
    number_options_separator = stringr::str_count(str = TEXT_response_columns_data, pattern = options_separator) |> sum(na.rm = TRUE)
    number_commas = stringr::str_count(str = TEXT_response_columns_data, pattern = ",") |> sum(na.rm = TRUE)
    number_semicolons = stringr::str_count(str = TEXT_response_columns_data, pattern = ";") |> sum(na.rm = TRUE)
    if (any(number_options_separator < c(number_commas, number_semicolons))) {
      cli::cli_alert_danger("We have {number_commas} ',' and {number_semicolons} ';' but you selected the `options_separator = \"{options_separator}\"`\n Maybe you want to change the value in the `options_separator` parameter?")
      Sys.sleep(5)
    }
  }
  
  # Have text output columns # TODO: add missing cols
  TEXT_columns = c("preamble", "prompt", "stimulus") # stimuli in same-different plugin. SHOULD only contain HTML or images
  text_columns_present = any(TEXT_columns %in% colnames(DF_columns_parameters))
  if (!text_columns_present) cli::cli_abort("Missing an output text column. Usually should have one of: {.code {TEXT_columns}}")

  # IDs
  if (any(is.na(DF$ID))) cli::cli_abort(c("Some of the ID's are empty"))
  if (!all(DF$ID == 1:nrow(DF))) cli::cli_abort(c("ID's need to be correlative.", "- You have:    {DF$ID}", "- Expected: {1:nrow(DF)}"))
  
  # There is ID and/or plugin, but no parameters
  if (nrow(janitor::remove_empty(DF_columns_parameters, which = "rows")) != nrow(DF_columns_parameters)) cli::cli_abort(c("There are rows without parameters"))
  


# Loop by row (items) [DO NOT CHANGE TABS/SPACES] ---------------------------

  
  # TODO: CHECK essential columns for certain plugins
  # e.g. "survey-multi-choice-horizontal" needs "options", not "choices"
  # e.g. "image-button-response" "choices", not "options"
  
  
  
# For each row in the csv/xls (each item)
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

    # Add horizontal to multi-choice-horizontal
    if (grepl("multi-choice-horizontal", PLUGIN) & !"horizontal" %in% names(DF_MAP)) DF_MAP = DF_MAP |> dplyr::mutate(horizontal = "true")
  
   
  # Create a parameter vector with everything in the csv/xls -----------------
  
  # One per column
  ALL = 1:ncol(DF_MAP) |>
    purrr::map(~{
      # .x=1
      BLACKLIST_parameters = c("if_question")
      NUMERIC_enumerations = c("range")
      DO_NOT_CHANGE_text = c("html")
      
      # If it is one of the TEXT_columns or the TEXT_response_columns
      if (names(DF_MAP[.x]) %in% TEXT_columns | names(DF_MAP[.x]) %in% TEXT_response_columns) {
        
        # change 'it's' for 'it’s' to avoid issues
        DF_MAP[.x] =  gsub("'", "’", DF_MAP[.x])
        
        # Forbidden chars: # makes the csv data collection STOP
        forbidden_chars = c("#")
        if (grepl(forbidden_chars, DF_MAP[.x])) cli::cli_alert_danger("DF_MAP[.x] contains forbidden_chars: {forbidden_chars}. \n Will delete them so they don't cause issues")
        DF_MAP[.x] =  gsub(forbidden_chars, "", DF_MAP[.x])
        
      }
      
      
      # Do not process parameters in the blacklist 
      if (!names(DF_MAP[.x]) %in% BLACKLIST_parameters) {
        
        is_a_number = grepl("^[0-9]+$", DF_MAP[.x])
        is_a_logical = DF_MAP[.x] %in% c("true", "false")
        is_an_enumeration = grepl(options_separator, DF_MAP[.x])
        is_text = names(DF_MAP[.x]) %in% DO_NOT_CHANGE_text
        is_video_stimulus = grepl("video", PLUGIN) & names(DF_MAP[.x]) %in% "stimulus"
        is_same_different_stimuli = grepl("same-different", PLUGIN) & names(DF_MAP[.x]) %in% "stimuli"
        is_html_stimulus = grepl("html", PLUGIN) & names(DF_MAP[.x]) %in% "stimulus"
        is_html_stimuli = grepl("html", PLUGIN) & names(DF_MAP[.x]) %in% "stimuli"
        is_html_file = grepl("\\.html$", DF_MAP[.x])
        

        # CHECKS
        if (names(DF_MAP[.x]) %in% NUMERIC_enumerations & is_an_enumeration == FALSE) {
          cli::cli_abort("We expected to find elements separated by {.code {options_separator}} in the {names(DF_MAP[.x])} column but we found:\n
                         {DF_MAP[.x][[1]]}")
        }
        
        # Format modifications depending on content and/or column
        # If it contains an enumeration (";") and is NOT in the DO_NOT_CHANGE_text list
        if (is_an_enumeration & !is_text & !is_html_stimuli) {
          
          # If contains commas but it is one of the text columns
          if (names(DF_MAP[.x]) %in% TEXT_columns) {
            DF_MAP[.x] = paste0("'", DF_MAP[.x], "'")
            
          # We do not add &nbsp; to things like range
          } else if (names(DF_MAP[.x]) %in% NUMERIC_enumerations) {
            DF_MAP[.x] = paste0("[", paste(strsplit(x = DF_MAP[[.x]], split = options_separator) |> unlist() |> trimws(), collapse = ", "), "]")
          
          # keyboard-responses need choices to match actual keys!
          } else if (grepl("keyboard", PLUGIN) & names(DF_MAP[.x]) == "choices") {
            choices = strsplit(x = DF_MAP[[.x]], split = options_separator) |> unlist() |> trimws()
            if (any(nchar(choices) > 1)) cli::cli_abort("choices ({choices}) in html-keyboard-response are longer than one character ({nchar(choices)})")
            DF_MAP[.x] = paste0("['", paste(choices, collapse = "', '"), "']")
            
          # same-different plugins have enumeration of stimuli
          } else if (is_same_different_stimuli) {
            choices = strsplit(x = DF_MAP[[.x]], split = options_separator) |> unlist() |> trimws()
            DF_MAP[.x] = paste0("['", paste(choices, collapse = "', '"), "']")

            
          # All the other enumerations  
          } else {
            DF_MAP[.x] = paste0("['&nbsp;", paste(strsplit(x = DF_MAP[[.x]], split = options_separator) |> unlist() |> trimws(), collapse = "', '&nbsp;"), "']")
            
          }
          
        } else if (is_video_stimulus) {
          # With video plugins we need: stimulus: ['video/fish.mp4'],
          DF_MAP[.x] = paste0("['", DF_MAP[.x], "']")
          
          
        } else if (is_html_stimulus == TRUE & is_html_file == TRUE) {  
          
          file_to_read = paste0(dirname(file_name), "/", DF_MAP[.x]$stimulus)
          cli::cli_alert_info("Reading html file: {file_to_read}")
          RAW_html = readLines(file_to_read)
          DF_MAP[.x] = paste0("`", paste(RAW_html, collapse = "\n"), "`")
          
        } else if (is_html_stimuli == TRUE & is_html_file == TRUE) {  
          
          HTMLS = strsplit(x = DF_MAP[.x]$stimuli, split = options_separator) |> unlist() |> trimws()
          
          files_to_read = paste0(dirname(file_name), "/", HTMLS)
          # cli::cli_alert_info("Reading html file: {files_to_read}")
          RAW_html = map(files_to_read, readLines)
          
          XYZ =  1:length(RAW_html) |> 
            purrr::map(~
                         {
                           paste0("`", paste(RAW_html[[.x]], collapse = "\n"), "`")
                         })
          
          DF_MAP[.x] = paste0("[", paste(XYZ, collapse = ", "), "]")
          
        # If it is not logical and not a number
        } else if (!is_a_logical & !is_a_number) {
          
          DF_MAP[.x] = paste0("'", DF_MAP[.x], "'")
          
        } else {
          # Logical, numbers... do not change anything
          # cli::cli_alert_info("ELSE")
        }
        # Final string
        paste0(colnames(DF_MAP[.x]), ": ", DF_MAP[.x])
        
      }
      
    }) |> 
    unlist() |> paste(collapse = ",\n      ")



  

  # Create chunk [DO NOT CHANGE TABS/SPACES] --------------------------------

  if (jsPsych_version == 7) { 
    # survey-multi-choice -> jsPsychSurveyMultiChoice
    PLUGIN_type = paste0("jsPsych", gsub("^([a-z])", "\\U\\1", PLUGIN, perl = TRUE) %>% gsub("-([a-z])", "\\U\\1", ., perl = TRUE))
  } else {
    PLUGIN_type = PLUGIN
  }

  
  # We insert the parameters inside questions (if it's a survey plugin)
  # except in survey-html-form
  if (grepl("survey", PLUGIN) & !grepl("survey-html-form", PLUGIN)) {

    ITEM_output_RAW = paste0("
  var question", item_number, " = {
    type: '", PLUGIN_type, "',
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
    type: '", PLUGIN_type, "',
    ", ALL, ",
    data: {trialid: '", task_name, "_", item_number, "', procedure: '", task_name,"'}
  };
  ", ifelse("if_question" %in% names(DF_MAP), "", paste0(task_name, ".push(question", item_number, ");")), "\n") # Show only if NOT an if_question
  }

  # Get rid of the '' so:  type: 'SurveyMultiChoice' -> type: SurveyMultiChoice
  if (jsPsych_version == 7) ITEM_output_RAW = gsub("(type: )'([a-zA-Z]*)'(,)" , "\\1\\2\\3", ITEM_output_RAW)  
  
  # PREPARE if_questions [DO NOT CHANGE TABS/SPACES] --------------------------
  
  if ("if_question" %in% names(DF_MAP)) {
    # browser()
    
    if_question_item = sprintf("%03d", as.numeric(gsub("([1-9]{1,99}) ([!=]{1,2}) (.*)", "\\1", DF_MAP$if_question)))
    if_question_condition_symbol = gsub("([1-9]{1,99}) ([!=]{1,2}) (.*)", "\\2", DF_MAP$if_question)
    if_question_condition = gsub("([1-9]{1,99}) ([!=]{1,2}) (.*)", "\\3", DF_MAP$if_question)
    if_question_plugin = DF |> filter(ID == gsub("[0]{1,3}(.*)", "\\1", if_question_item)) |> pull(plugin)
    
    condition_modifier = ifelse(if_question_condition_symbol == "!=", "!", "")
    
    # The way to capture the question response changes depending on the plugin
    if (if_question_plugin == "survey-multi-select") {
      
      code_to_capture_response = paste0("
      let data = JSON.parse(jsPsych.data.get().values().find(x => x.trialid === '", task_name,"_", if_question_item, "')['response']).Q0;
       if(", condition_modifier, "data.some(index => index.includes('", if_question_condition, "'))){
       
            return true;
          } else {
            return false;
          }
      
      ")
    } else {
      code_to_capture_response = paste0("
      let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === '", task_name,"_", if_question_item, "'))['response'])['Q0']).trim();
       if((data) ", if_question_condition_symbol, " '", if_question_condition, "'){
            return true;
          } else {
            return false;
          }
      ")
    }
    
    
    
  if_question_ITEM_output_RAW = paste0("
    var if_question", item_number, " = {
      timeline: [question", item_number, "],
      data: {trialid: '", task_name,"_", item_number, "_if', procedure: '", task_name,"'},
      conditional_function: function(){
        try {
            ", 
             code_to_capture_response,
             "
          
        } catch(err) {
          //alert('Error in if_question ", task_name,"_", item_number, "')
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
