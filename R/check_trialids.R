#' check_trialids
#'
#'Checks that trialid's of an experiment in a folder follow the standard expected rules
#'
#' @param folder_protocol Folder where the protocol is
#' @param show_all_messages TRUE/FALSE
#'
#' @return
#' @export
#' @importFrom dplyr mutate filter rename as_tibble
#' @importFrom purrr map_df
#' @importFrom tidyr separate
#' @importFrom cli cli_h1 cli_h2 cli_alert_danger cli_alert_success
#'
#' @examples
check_trialids <- function(folder_protocol, show_all_messages = FALSE) {
  
  # folder_protocol = "/home/emrys/Downloads/TEST/new_protocol3"
  
  scripts = dir(path = paste0(folder_protocol, "/tasks"), pattern = ".js", recursive = TRUE, full.names = TRUE)
  
  # If no files found
  if (length(scripts) == 0) {
    
    if (show_all_messages == TRUE) {
      cli::cli_h2("Checking /{basename(folder_protocol)}")
      cli::cli_alert_danger("Can't find anything in {.code {folder_protocol}}")
    }
    
    
  } else {
    
    find_trialids <- function(file_name) {
      
      # DEBUG
      # file_name = scripts[1]
      
      script = readLines(file_name) 
      LINES = grepl(".*?trialid: '(.*?)',.*", script)
      trialid = gsub(".*?trialid: '(.*?)',.*", "\\1", script[LINES])
      
      # if (grepl("This document was made with test_maker", trialid)) trialid = ""
      # strsplit(trialid, " \n")[[1]] |> 
        
        trialid |> dplyr::as_tibble() |> 
        dplyr::mutate(file = file_name) |> 
        dplyr::rename(trialid = value) |> 
        dplyr::filter(!grepl("^Instructions|^Instructions_[0-9]{2}|^Fullscreen|jsPsych.timelineVariable", trialid))
      
    }
    
    
    DF_all_trialids = purrr::map_df(scripts, find_trialids)
    
    rule_check_trialids = "^[a-zA-Z0-9]{1,100}_[0-9]{2,3}$|^[a-zA-Z0-9]{1,100}_[0-9]{2,3}_[0-9]{1,3}$|^[a-zA-Z0-9]{1,100}_[0-9]{2,3}_if$|^[a-zA-Z0-9]{1,100}_[0-9]{2,3}_[0-9]{1,3}_if$" # NAME_001, NAMEexperiment_001_1
    # rule_check_trialids = "NAMEtest_01\NAMEtest_01_1\NAMEtest_01_if|NAMEtest_01_1_if" 
    
    # DF_problematic_trialids = 
    #   DF_all_trialids |> 
    #   filter(!grepl(rule_check_trialids, trialid)) |> 
    #   mutate(experiment = basename(file)) |> 
    #   select(-file)
    
    DF_problematic_trialids =
      DF_all_trialids |> 
      tidyr::separate(trialid, into = c("task", "num", "subnum"), sep = "_", extra = "merge", fill = "right", remove = FALSE) |> 
      dplyr::mutate(experiment = gsub(".js", "", basename(file))) |> 
      dplyr::filter(
        !(
          # shortname_itemNumber_otherStuff
          task == experiment & # Task name == experiment
            (grepl("[0-9]{2,3}", num) | grepl("\\+ pad|\\+ String", num)) & # itemNumber hardcoded or automatically generated 
            (is.na(subnum) | subnum == "if" | grepl("[0-9]{1}", subnum) | grepl("if_[0-9]{1}", subnum) | grepl("\\+ num", subnum))
        )
      )  |>  
      
      # filter(!grepl(rule_check_trialids, trialid)) |> 
      # mutate(experiment = basename(file)) |> 
      dplyr::select(-file)
    
    if (nrow(DF_problematic_trialids) > 0) {
      
      cli::cli_h1("Checking /{basename(folder_protocol)}")
      cat(cli::col_red(nrow(DF_problematic_trialids), " ISSUES:\n"), 
          "- experiment:", paste(DF_problematic_trialids |> dplyr::pull(experiment) |> unique(), collapse = ", "), "\n",
          "- trialid:   ", paste(DF_problematic_trialids |> dplyr::pull(trialid) |> unique(), collapse = ", "), "\n")
      
    } else {
      
      if (show_all_messages == TRUE) {
        cli::cli_h1("Checking /{basename(folder_protocol)}")
        cli::cli_alert_success("All trialid's look great!\n")
      }
      
    }
    
  }
}
