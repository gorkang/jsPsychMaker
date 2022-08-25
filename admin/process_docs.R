process_docs <- function(FOLDER = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS/2021 - FONDECYT Regular/AYUDANTE/SHARED-FONDECYT-Faridy/jsPsychR/docs/") {

  library(dplyr)
  library(purrr)
  
  INITIAL = list.files(FOLDER, recursive = TRUE, pattern = "pdf", full.names = TRUE)
  INITIAL_INFO = file.info(INITIAL) |> tibble::as_tibble()
  INITIAL_INFO |> summarize(SIZE = sum(size)/1024)
  
  1:length(INITIAL) |> 
    purrr::walk(~{
      IN_file = INITIAL[.x]
      OUT_file = paste0("docs/", basename(dirname(INITIAL[.x])), "/", basename(IN_file))
      cli::cli_alert_info("{IN_file} --> {OUT_file}")
      # /ebook
      COMMAND = paste0("gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -sOutputFile='", OUT_file, "' '", IN_file, "'")
      system(COMMAND)
      # processx::run(command = "gs", args = c("-dNOPAUSE", "-dBATCH", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.4", "-dPDFSETTINGS=/ebook", paste0("-sOutputFile=", OUT_file), paste0(" ", IN_file)))
    })

}
