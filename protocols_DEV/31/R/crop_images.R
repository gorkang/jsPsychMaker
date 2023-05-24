FILES = list.files("/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMonkeys/outputs/screenshots/22/1051/", full.names = TRUE)

1:length(FILES) |> 
  purrr::walk(~
    {
      cli::cli_alert_info(basename(FILES[.x]))
      # .x = 5
      output_folder = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS-Code/jsPsychR/jsPsychMonkeys/outputs/screenshots/22/1051_cropped/"
      COMMAND = paste0("convert ", FILES[.x], " -crop 900x650+210+190 " , output_folder, basename(FILES[.x]), "") #-trim
      if (.x %in% c(15, 16)) COMMAND = paste0("convert ", FILES[.x], " -crop 900x800+210+130 " , output_folder, basename(FILES[.x]), "") #-trim
      system(COMMAND)
    }
  )

# Create pdf with all the png's with gscan2pdf
# Print 4 images per page
# Landscape
# Scale 120
# Shrink to printable area
