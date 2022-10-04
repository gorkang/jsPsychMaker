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
  
  INITIAL = tibble::tibble(path_to_file = list.files(FOLDER, recursive = TRUE, full.names = TRUE),
                           file_short = paste0("docs/", basename(dirname(path_to_file)), "/", basename(path_to_file)))

  OUTPUT_folder_files = list.files("docs", recursive = TRUE, full.names = TRUE)  
  FINAL_FILES_input = INITIAL$path_to_file[!INITIAL$file_short %in% OUTPUT_folder_files]
  
  
  1:length(FINAL_FILES_input) |> 
    purrr::walk(~{
      # .x = 2
      IN_file = FINAL_FILES_input[.x]
      OUT_file = gsub(".*(docs\\/.*)$", "\\1", IN_file)
      
      # Check if folder exists
      DIR_out = gsub("^\\/(.*)$", "\\1", dirname(OUT_file))
      if (!dir.exists(DIR_out)) dir.create(DIR_out)
      
      cli::cli_alert_info("{gsub('/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/', '', IN_file)} --> {OUT_file}")
      
      if (tools::file_ext(FINAL_FILES_input[.x]) %in% c("pdf", "PDF")) {
        # /ebook
        COMMAND = paste0("gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -sOutputFile='", OUT_file, "' '", IN_file, "'")
        # processx::run(command = "gs", args = c("-dNOPAUSE", "-dBATCH", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.4", "-dPDFSETTINGS=/ebook", paste0("-sOutputFile=", OUT_file), paste0(" ", IN_file)))
        GS_output = system(COMMAND, intern = TRUE)
        
      } else {
        file.copy(from = IN_file, to = OUT_file, overwrite = TRUE)
      }
      
    })

}
