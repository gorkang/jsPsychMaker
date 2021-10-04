# Parses the JS files. 
# It does not work if the js file requires parameters or functions outside the file.


parse_js_variable <- function(script_path, variable_name) {
  # https://stackoverflow.com/questions/37515062/how-to-parse-javascript-data-list-with-r
  
  # DEBUG
  # "canonical_protocol_DEV/tasks/HRPVB.js"
  # variable_name = vars_experiment[1] # "if_question04"
  
  library(V8)
  library(rvest)
  script = readLines(script_path)
  
  # if (any(grepl("jsPsych", script))) {
  #   cat(crayon::red("Sorry, jsPsych calls inside script... can't read it :( "))
  # } else {
  ctx <- v8();
  # ctx <- v8(global = c("window", "document"))
  
  # WORKS FOR TASKS THAT USE THE RANDOMIZATION FUNCTION
  ctx <- v8(global = c("jsPsych"))
  ctx$source("R/parse_js_functions.js") # source the randomization function
  
  ctx$eval(script)
  ctx$get(variable_name)
  # }
  
}


parse_js_file <- function(script_path) {

  # ONLY WORKS WITH VERY CANONICAL FILES :(
  library(dplyr)
  library(tidyr)
  
  # DEBUG
  # FALLA # script_path = "canonical_protocol_DEV/tasks/HRPVB.js"
  # script_path = "canonical_protocol/tasks/Consent.js"
  
  script = readLines(script_path)
  
  # Get vars from js file to parse
  vars_experiment = 
    stringr::str_extract_all(script, "var [a-zA-Z_0-9]{1,20} = \\{", simplify = TRUE) %>% 
    gsub("var | = \\{", "", .) %>% .[. != ""]
  
  # Parse all variables with parse_js_variable()
  DF = 
    1:length(vars_experiment) %>% 
    purrr::map_df(~ parse_js_variable(script_path, variable_name = vars_experiment[.x]) %>% 
                    as.data.frame() %>% as_tibble()%>% janitor::clean_names())
  
  # If the js file has timeline_questions we need to do some data wrangling
  if ("timeline_questions" %in% names(DF)) {
    DF_final =
      
      # TEST IF THIS WORKS FINE. WE PROBABLY ARE LEAVING INFO OUT!
      DF %>% 
      rename(type_item = type) %>% 
      {if ("questions_range" %in% names(.)) tidyr::unnest_wider(data = ., col = questions_range, names_sep = "_") else . } %>% 
      tidyr::unnest(data = ., cols = timeline_questions, keep_empty = TRUE) %>% 
      {if ("range" %in% names(.)) tidyr::unnest_wider(data = ., range, names_sep = "_") else . } %>% 
      
      mutate(
        type = 
          if (exists('type', where = .))
            case_when(
              is.na(type) ~ questions_type,
              TRUE ~ type)
        else questions_type,
        
        required = 
          if (exists('required', where = .))
            case_when(
              is.na(required) ~ questions_required,
              TRUE ~ required)
        else NA,
        
        error_text = 
          if (exists('questions_error_text', where = .))
            case_when(
              is.na(error_text) ~ questions_error_text,
              TRUE ~ error_text)
        else NA,
        
        prompt = 
          if (exists('prompt', where = .))
            case_when(
              is.na(prompt) ~ questions_prompt,
              TRUE ~ prompt)
        else NA,
        
        type_item = 
          if (exists('type_item', where = .))
            case_when(
              is.na(type_item) ~ timeline_type,
              TRUE ~ type_item)
        else NA,
        
        range_min = 
          if (exists('range_1', where = .))
            case_when(
              is.na(range_1) ~ questions_range_1,
              TRUE ~ range_1)
        else NA,
        
        range_max = 
          if (exists('range_2', where = .))
            case_when(
              is.na(range_2) ~ questions_range_2,
              TRUE ~ range_2)
        else NA,
        timeline_trialid = timeline_data$trialid,
        timeline_procedure = timeline_data$procedure) %>%
      select(type_item, type, required, error_text, prompt, type_item, range_min, range_max)
      # select(-questions_type, -questions_required, -questions_error_text, -questions_prompt, -timeline_type, -questions_range_1, -questions_range_2, -range_1, -range_2, -timeline_data)
    
  } else {
    DF_final = DF
  }
  
  return(DF_final)
  
}

# parse_js_file(script_path = "canonical_protocol/tasks/AIM.js")
# parse_js_file(script_path = "canonical_protocol/tasks/Cov19Q.js")
# parse_js_file(script_path = "canonical_protocol_DEV/tasks/BNT.js")
# 
# file_names_raw = list.files("canonical_protocol/tasks", full.names = TRUE)
# 
# # It does not work in these tasks. Try to solve? If it fails it is because the protocol has some non-canonical elements (?)
# file_names = file_names_raw[!grepl("Consent|DEMOGR|Goodbye|HRPVB|OTRASRELIG|PVC|SASS|SDG", file_names_raw)]
# 
# 1:length(file_names) %>% 
#   purrr::map(~ {
#     cat(file_names[.x], "\n")
#     parse_js_file(script_path = file_names[.x])
#     })

