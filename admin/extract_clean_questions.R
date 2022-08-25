
extract_clean_questions <- function(FILE, label = "stimulus", separator = "'", get_options = FALSE) {

  # DEBUG
  # label = "options"
  
  suppressPackageStartupMessages(library(dplyr))
  suppressPackageStartupMessages(library(stringr))
  
  # Clean HTML tags
  cleanFun <- function(htmlString) {
    return(gsub("<.*?>", "", htmlString))
  }
  
  DF = readLines(FILE)
  DF_clean = DF[!grepl("^[ \t\\#]{1,100}\\#", DF)] # Get rid of comments
  
  questions_N = which(grepl(paste0(label,":"), DF_clean))
  
  if (length(questions_N) == 0) cli::cli_abort("label = {.code {label}}  not found. Try with `prompt` or `preamble`")
  
  pattern_separation = paste0("\\w+: ", separator, ".*?", separator)
  
  # Separate in columns
  QUESTIONS_temp = gsub("questions:", "", DF_clean[questions_N]) |> trimws() |>
    stringr::str_extract_all(pattern = pattern_separation,
                             # "\\w+: '.*?'", 
                             simplify = TRUE) |> # OLD "\\w+:.*?[,}]"
    as_tibble()
  
  
  OPTIONS = gsub(".*options: \\['(.*)'\\].*", "\\1", DF_clean[questions_N]) |> 
    as_tibble() |> 
    mutate(value = gsub("'", "", value),
           value = gsub("&nbsp;", "", value)) |> 
    rename(options = value)
  
  
  
  QUESTIONS_temp %>%
    mutate(across(everything(),~ gsub("\\}|,$","", .))) |> 
    # select(V1) |> 
    mutate(V1 = gsub("&aacute;", "á", V1),
           V1 = gsub("&eacute;", "é", V1),
           V1 = gsub("&iacute;", "í", V1),
           V1 = gsub("&oacute;", "ó", V1),
           V1 = gsub("&uacute;", "ú", V1),
           V1 = gsub("&ntilde;", "ñ", V1)
           ) |> 
    mutate(V1 = cleanFun(V1), # Clean HTML tags
           # V1 = gsub("prompt: \"", "", V1),
           # V1 = gsub("stimulus: \"", "", V1),
           V1 = gsub("\"", "", V1),
           V1 = gsub("'", "", V1),
           V1 = gsub(paste0("\\w+: (.*?)"), "\\1", V1)) |> 
    bind_cols(OPTIONS)

  }

CLEANQ = extract_clean_questions(FILE = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMaker/canonical_protocol/tasks/CRTMCQ4.js", 
                                 label = "prompt", 
                                 separator = "'",
                                 get_options = TRUE)
write_csv(CLEANQ, "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMaker/DEV/WIP_KEY_ITEMS/CLEANQ.csv")
