#' process_docs
#' Make a copy of the docs after downgrading the resolution of the pdfs to "screen"
#'
#' @param FOLDER 
#'
#' @return
#' @export
#'
#' @examples
process_docs <- function(FOLDER = "~/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/SHARED-docs/docs") {

  library(dplyr)
  library(purrr)
  
  
  # Some files can´t be optimized (e.g. Fig. 1 in PRFBM_en-US.pdf becomes unreadable)
  BLACKLIST = c("PRFBM_en-US.pdf")
  
  # Initial files in jsPsychR/SHARED-docs/docs"
    # Duplicated with jsPsychAdmin::tasks_missing_docs()
  INITIAL = tibble::tibble(path_to_file = list.files(FOLDER, recursive = TRUE, full.names = TRUE),
                           file_short = paste0("docs/", basename(dirname(path_to_file)), "/", basename(path_to_file))) 
  
  # Output in docs/
  OUTPUT_folder_files = list.files("docs", recursive = TRUE, full.names = TRUE)  
  
  # Only process the new files
  FINAL_FILES_input = INITIAL$path_to_file[!INITIAL$file_short %in% OUTPUT_folder_files]
  
  # Loop
  1:length(FINAL_FILES_input) |> 
    purrr::walk(~{
      # .x = 2
      
      IN_file = FINAL_FILES_input[.x]
      OUT_file = gsub(".*(docs\\/.*)$", "\\1", IN_file)
      
      # Check if folder exists
      DIR_out = gsub("^\\/(.*)$", "\\1", dirname(OUT_file))
      if (!dir.exists(DIR_out)) dir.create(DIR_out)
      
      cli::cli_alert_info("{gsub('/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/', '', IN_file)} --> {OUT_file}")
      
      # If it's a PDF and it is NOT in the BLACKLIST 
      if (tools::file_ext(FINAL_FILES_input[.x]) %in% c("pdf", "PDF") & !basename(FINAL_FILES_input[.x]) %in% BLACKLIST) {
        # For higher quality: /ebook
        COMMAND = paste0("gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -sOutputFile='", OUT_file, "' '", IN_file, "'")
        GS_output = system(COMMAND, intern = TRUE)
        
      } else {
        file.copy(from = IN_file, to = OUT_file, overwrite = TRUE)
      }
      
    })


  # CHECK missing docs ------------------------------------------------------

  MISSING = jsPsychAdmin::tasks_missing_docs()
  
  return(MISSING)
  
}

