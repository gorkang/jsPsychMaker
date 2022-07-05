#' check_trialids
#'
#'Checks that trialid's of an experiment in a folder follow the stantard expected rules
#' @param local_folder_tasks 
#'
#' @return
#' @export
#'
#' @examples
check_trialids <- function(local_folder_protocol) {
  
  # DEBUG
  # local_folder_protocol = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/CSCN-server/protocols/999"
  
  suppressMessages(suppressWarnings(library(dplyr)))
  suppressMessages(suppressWarnings(library(purrr)))
  suppressMessages(suppressWarnings(library(readr)))
  
  cli::cli_h1("Checking /{basename(local_folder_protocol)}")
  
  scripts = dir(path = paste0(local_folder_protocol, "/tasks"), pattern = ".js", recursive = TRUE, full.names = TRUE)
  if (length(scripts) == 0) {
    
    cli::cli_alert_danger("Can't find anything in {local_folder_protocol}")
    
  } else {

    find_trialids <- function(file_name) {
      
      # DEBUG
      # file_name = scripts[51]
      
      script = read_file(file_name) 
      # expres = ".*?trialid: '(.*?)'.*?"
      # trialid = gsub(expres, "\\1; \n", script) %>% gsub("^(.*; \n).*", "\\1", .) %>% gsub(";", "", .) %>% gsub(" number \n", "", .)
      expres = ".*?trialid: (.*?),.*?"
      trialid = 
        gsub(expres, "\\1; \n", script) %>% 
        gsub("^(.*; \n).*", "\\1", .) %>% 
        gsub(";", "", .) %>% 
        gsub(" number \n", "", .) %>% 
        gsub("'", "", .) %>% # Get rid of '
        gsub('"', '', .) %>% # Get rid of " 
        gsub("  ", " ", .) # Get rid of "  "
      
      if (grepl("This document was made with test_maker", trialid)) trialid = ""
      strsplit(trialid, " \n")[[1]] %>% as_tibble() %>% 
        mutate(file = file_name) %>% 
        rename(trialid = value) %>% 
        filter(!grepl("^Instructions|^Instructions_[0-9]{2}|^Fullscreen|jsPsych.timelineVariable", trialid))
      
    }
    
    
    DF_all_trialids = map_df(scripts, find_trialids)
    
    rule_check_trialids = "^[a-zA-Z0-9]{1,100}_[0-9]{2,3}$|^[a-zA-Z0-9]{1,100}_[0-9]{2,3}_[0-9]{1,3}$|^[a-zA-Z0-9]{1,100}_[0-9]{2,3}_if$|^[a-zA-Z0-9]{1,100}_[0-9]{2,3}_[0-9]{1,3}_if$" # NAME_001, NAMEexperiment_001_1
    # rule_check_trialids = "NAMEtest_01\NAMEtest_01_1\NAMEtest_01_if|NAMEtest_01_1_if" 
    
    # DF_problematic_trialids = 
    #   DF_all_trialids %>% 
    #   filter(!grepl(rule_check_trialids, trialid)) %>% 
    #   mutate(experiment = basename(file)) %>% 
    #   select(-file)
    
    DF_problematic_trialids =
      DF_all_trialids %>% 
      separate(trialid, into = c("task", "num", "subnum"), sep = "_", extra = "merge", fill = "right", remove = FALSE) %>% 
      mutate(experiment = gsub(".js", "", basename(file))) %>% 
        filter(
          !(
            # shortname_itemNumber_otherStuff
            task == experiment & # Task name == experiment
            (grepl("[0-9]{2,3}", num) | grepl("\\+ pad|\\+ String", num)) & # itemNumber hardcoded or automatically generated 
            (is.na(subnum) | subnum == "if" | grepl("[0-9]{1}", subnum) | grepl("if_[0-9]{1}", subnum) | grepl("\\+ num", subnum))
            )
        ) %>% 
      
      # filter(!grepl(rule_check_trialids, trialid)) %>% 
      # mutate(experiment = basename(file)) %>% 
      select(-file)
    
    if (nrow(DF_problematic_trialids) > 0) {
      
      cat(crayon::red(nrow(DF_problematic_trialids), "ISSUES:\n"), 
                  "- experiment:", paste(DF_problematic_trialids %>% pull(experiment) %>% unique(.), collapse = ", "), "\n",
                  "- trialid:   ", paste(DF_problematic_trialids %>% pull(trialid) %>% unique(.), collapse = ", "), "\n")
  
    } else {
      cat(crayon::green("All trialid's look great!\n"))
    }
    
  }
}

