
extract_clean_questions <- function(FILE, label = "stimulus") {

  suppressPackageStartupMessages(library(tidyverse))
  
  # Clean HTML tags
  cleanFun <- function(htmlString) {
    return(gsub("<.*?>", "", htmlString))
  }
  
  DF = readLines(FILE)
  DF_clean = DF[!grepl("^[ \t\\#]{1,100}\\#", DF)] # Get rid of comments
  
  questions_N = which(grepl(paste0(label,":"), DF_clean))
  
  
  # Separate in columns
  QUESTIONS_temp = gsub("questions:", "", DF_clean[questions_N]) |> trimws() |>
    stringr::str_extract_all(pattern = "\\w+:.*?[,}]", simplify = TRUE) |>
    as_tibble()
  QUESTIONS_temp %>%
    mutate(across(everything(),~ gsub("\\}|,$","", .))) |> select(V1) |> 
    mutate(V1 = gsub("&aacute;", "á", V1),
           V1 = gsub("&eacute;", "é", V1),
           V1 = gsub("&iacute;", "í", V1),
           V1 = gsub("&oacute;", "ó", V1),
           V1 = gsub("&uacute;", "ú", V1),
           V1 = gsub("&ntilde;", "ñ", V1)
           ) |> 
    # rowwise() |> 
    mutate(V1 = cleanFun(V1),
           V1 = gsub("prompt: \"", "", V1),
           V1 = gsub("stimulus: \"", "", V1),
           V1 = gsub("\"", "", V1))
}

# XXX = extract_clean_questions(FILE = "../DEV/CSCN_practica_2018/pruebas_individuales/ansiedad_matematica/experiment.js")
# write_csv(XXX, "admin/tasks_new_protocol/ANSMAT.cv")
