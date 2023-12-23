# Creates a CSV and then a protocol with all the available plugins!

# Add new plugins and rebuild everything to test them!


library(jsPsychMaker)

TASKS_NOT_WORKING = c("external-html", "html-slider-response-CSCN", "survey-multi-choice-CSCN-RMET", "audio-button-response-CSCN-BART")


packagePath <- find.package("jsPsychMaker", lib.loc = NULL, quiet = TRUE)
canonical_zip = paste0(packagePath, "/templates/canonical_clean_6.zip")
canonical_zip_files = unzip(canonical_zip, list = TRUE)[,1]

# we have all the used plugins
ALL_available_plugins_RAW = canonical_zip_files[grepl(pattern = "plugins/jspsych-", canonical_zip_files)] |> basename() |> stringr::str_replace_all(pattern = "jspsych-|\\.js", replacement = "")

ALL_available_plugins = ALL_available_plugins_RAW[!ALL_available_plugins_RAW %in% c(TASKS_NOT_WORKING, "call-function", "preload", "fullscreen", "instructions", "external-html")]
ALL_available_plugins


TASK_all_plugins = tibble::tibble(ID = 1:length(ALL_available_plugins),
       plugin = ALL_available_plugins,
       stimulus = "",
       choices = "1, 2",
       preamble = "preamble"
       ) |> 
  dplyr::mutate(stimulus = 
                  dplyr::case_when(
                    grepl("image", plugin) ~ "media/images/fox.jpg",
                    grepl("audio", plugin) ~ "media/audios/BART_explode.mp3",
                    grepl("video", plugin) ~ "media/videos/Entrevista1.mp4",
                    grepl("html", plugin) ~ "media/html/consent-placeholder.html",
                    TRUE ~ "")) |> 
  
  dplyr::mutate(stimuli = 
                  dplyr::case_when(
                    grepl("same-different-html", plugin) ~ "media/html/consent-placeholder.html, media/html/consent-placeholder.html",
                    grepl("same-different-image", plugin) ~ "media/images/fox.jpg, media/images/fox.jpg",
                    TRUE ~ "")) |> 

  # Needs to be a letter, not a number!
  # SHOULD SHOW THIS
  dplyr::mutate(answer = 
                  dplyr::case_when(
                    grepl("same-different-html", plugin) ~ "a",
                    grepl("same-different-image", plugin) ~ "b",
                    TRUE ~ "")) |> 
  
  dplyr::mutate(same_key = 
                  dplyr::case_when(
                    grepl("same-different-html", plugin) ~ "a",
                    grepl("same-different-image", plugin) ~ "b",
                    TRUE ~ "")) |> 
  
  dplyr::mutate(different_key = 
                  dplyr::case_when(
                    grepl("same-different-html", plugin) ~ "a",
                    grepl("same-different-image", plugin) ~ "b",
                    TRUE ~ "")) |> 
  # multi-choice needs this: survey-multi-choice-CSCN-RMET, survey-multi-choice-horizontal, survey-multi-choice-vertical
  dplyr::mutate(options = 
                  dplyr::case_when(
                    grepl("multi-choice", plugin) ~ "one, two",
                    grepl("multi-select", plugin) ~ "one, two",
                    TRUE ~ "")) |> 
  dplyr::mutate(html = 
                  dplyr::case_when(
                    grepl("survey-html-form", plugin) ~ '<p> I am feeling <input name="first" type="text" />, <input name="second" type="text" />, and <input name="third" type="text" />.</p>',
                    TRUE ~ "")) |> 
  dplyr::mutate(length = 
                  dplyr::case_when(
                    grepl("survey-multi-select", plugin) ~ 2,
                    TRUE ~ NA_real_
                  )) |> 
  dplyr::mutate(prompt = paste0("PLUGIN: ", ALL_available_plugins, "| CHOICES: ", choices, " | answer: ", answer))





readr::write_csv(TASK_all_plugins, "admin/example_ALL/ALL/ALL.csv")



# Create protocol
jsPsychMaker::create_protocol(folder_tasks = "admin/example_ALL/",
                              folder_output = "~/Downloads/TEST/ALL/", 
                              launch_browser = TRUE)


# file:///home/emrys/Downloads/TEST/ALL/admin/example_tasks_new_protocol/Entrevista1.mp4 net::ERR_FILE_NOT_FOUND
