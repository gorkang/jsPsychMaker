#' list_available_tasks
#'
#' @param show_help Show information about where to get help?
#'
#' @return
#' @export
#' @importFrom cli cli_alert_info
#' @importFrom stringr str_replace_all
#'
#' @examples
list_available_tasks <- function(show_help = FALSE) {
  
  if (show_help == TRUE) cli::cli_alert_info("For more info about the tasks, see {.url https://docs.google.com/spreadsheets/d/1Eo0F4GcmqWZ1cghTpQlA4aHsc8kTABss-HAeimE2IqA/edit#gid=0}")
  
  # Get tasks from "/templates/tasks.zip"
  packagePath <- find.package("jsPsychMaker", lib.loc = NULL, quiet = TRUE)
  tasks_zip = paste0(packagePath, "/templates/tasks.zip")
  tasks_js = unzip(tasks_zip, list=TRUE)[,1] 
  tasks = tasks_js |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
  
  OUTPUT = list(tasks = tasks,
       tasks_zip = tasks_zip)

  return(OUTPUT)
}



#' extract_tasks_from_protocol
#' 
#' Extract the list of scripts in the task folder of a protocol, and a vector 
#' with the names of the tasks
#'
#' @param folder_protocol Add folder of the protocol 
#'
#' @return
#' @export
#' @importFrom dplyr filter mutate as_tibble group_by distinct arrange pull
#'
#' @examples
extract_tasks_from_protocol <- function(folder_protocol) {
  
  # DEBUG
  # folder_protocol = "../CSCN-server/protocols/999/"
  
  ALL_js = 
    list.files(folder_protocol, recursive = TRUE, pattern = "\\.js") |> dplyr::as_tibble() |> 
    dplyr::filter(!grepl("NEW_TASKS", value)) |> # Do not look into NEW_TASKS to avoid circularity
    dplyr::filter(grepl("*tasks/.*\\.js", value)) |> 
    dplyr::mutate(task_name = basename(value)) |> 
    dplyr::mutate(mtime = file.info(paste0(folder_protocol, "/tasks/", task_name))$mtime,
                  size = file.info(paste0(folder_protocol, "/tasks/", task_name))$size)
  
  # Select newer versions of tasks
  PATHS_tasks = 
    ALL_js |> 
    # filter(task_name %in% NEW_TASKS) |> 
    dplyr::group_by(task_name) |> 
    dplyr::filter(mtime == max(mtime)) |> 
    dplyr::distinct(task_name, .keep_all = TRUE) |> 
    dplyr::arrange(task_name) |> 
    dplyr::pull(value)
  
  
  list(PATHS_tasks = PATHS_tasks,
       tasks = gsub("\\.js", "", basename(PATHS_tasks)))
  
}



#' update_config_js
#' Uses a vector of tasks to replace one of the task blocks in config.js
#'
#' @param folder_protocol Add folder of the protocol 
#' @param tasks String vector of tasks
#' @param block_tasks Where to insert the tasks randomly_ordered_tasks_1 or secuentially_ordered_tasks_1
#' @param media list with images, video and audios media to include in config
#'
#' @return
#' @export
#' @importFrom cli cli_alert_info cli_abort cli_h3
#'
#' @examples
update_config_js <- function(folder_protocol, tasks = NULL, block_tasks = "randomly_ordered_tasks_1", media = NULL) {
  
  # DEBUG
  # folder_protocol = "../jsPsychMaker/canonical_protocol/"
  # block_tasks = "randomly_ordered_tasks_1"
  # tasks = extract_tasks_from_protocol(folder_protocol)
  
  # Read config
  config_file = paste0(folder_protocol, "/config.js")
  
  # CHECK block_tasks
  allowed_blocks = c("first_tasks", "last_tasks", paste0(gsub("1$", "", "randomly_ordered_tasks_1"), 1:5), paste0(gsub("1$", "", "secuentially_ordered_tasks_1"), 1:5))
  if (!block_tasks %in% allowed_blocks) cli::cli_abort("{.var block_tasks} needs to be one of the following: {allowed_blocks}")
  
  # Tasks
  if (!is.null(tasks)) {
    
    cli::cli_h3("Add tasks to run")
    
    # Read config
    CONFIG = readLines(config_file)
    
    tasks_clean = tasks$tasks[!tasks$tasks %in% c("Consent", "Goodbye")]
    TASKS_vector = paste0(block_tasks, " = ['", paste(gsub("\\.js", "", tasks_clean), collapse = "', '"), "'];")
    
    # Update config
    CONFIG[which(grepl(paste0(block_tasks, " = "), CONFIG))] = TASKS_vector
    final_file = CONFIG
    
    # Write file
    cat(final_file, file = config_file, sep = "\n")
    
    cli::cli_alert_info("Replaced {block_tasks} in {config_file} with:\n - {TASKS_vector}")
  }
  
  # Media
  if (!is.null(media)) {
    
    # Contents of media are more than the default
    if (any(nchar(media$images) > 15, nchar(media$video) > 15, nchar(media$audios) > 15)) {
      
      cli::cli_h3("Add media files to preload")
    
      # Read config
      CONFIG = readLines(config_file)
      
      # Update config
      CONFIG[which(grepl(paste0("images = "), CONFIG))] = media$images
      CONFIG[which(grepl(paste0("video = "), CONFIG))] = media$video
      CONFIG[which(grepl(paste0("audios = "), CONFIG))] = media$audios
      final_file = CONFIG
      
      # Write file
      cat(final_file, file = config_file, sep = "\n")
      
      # Message
      updated_names = names(media[c(nchar(media$images) > 15, nchar(media$video) > 15, nchar(media$audios) > 15)])
      cli::cli_alert_info("Updated `{updated_names}` in {config_file}")
      
    }
  }
}



#' get_media_for_protocol
#'
#' @param all_files_js vector with content of all js files
#' @param folder_protocol where is the protocol?
#'
#' @return
#' @export
#' @importFrom httr GET stop_for_status content
#' @importFrom stringr str_extract_all str_remove_all
#' @importFrom tibble tibble
#' @importFrom dplyr filter mutate
#' @importFrom cli cli_h3
#' @importFrom purrr compact
#'
#' @examples
get_media_for_protocol <- function(all_files_js = all_files_js, folder_protocol) {
  
  # DEBUG
  # all_files_js = ""
  # folder_protocol = "~/Downloads/example_tasks/"
  # all_files_js |> tibble::as_tibble() |> View()
  
  # Get all media. Dirty, as it combines choices and other stuff in the same line
  MEDIA_used_raw = all_files_js[which(grepl("stimulus: '.*?\\.[a-z0-9]{3}'", all_files_js))] |> trimws() |> unique()
  
  # Extract the specific stimulus
  MEDIA_used =  gsub(".*stimulus: '(.*?/.*\\.[a-z0-9]{3})'.*", "\\1", MEDIA_used_raw)
  
  # Check if paths are wrong  
  REGEXP_strict = "^media/.*\\.[a-z0-9]{3}$"
  CHECK_media_wrong_folder = !grepl(REGEXP_strict, MEDIA_used)
  if (any(CHECK_media_wrong_folder)) cli::cli_abort(c("Issues with media paths in column `stimulus` :  {.code {MEDIA_used[CHECK_media_wrong_folder]}}\n\n", 
                                                      "",
                                                      "CHANGE paths to: ", "-Images: 'media/img' ", "-Videos: 'media/vid' ", "-Audio: 'media/audio'\n\n"))
  
  # Get all media
  images_files = stringr::str_extract_all(MEDIA_used, pattern = ".*\\.jpg|.*\\.png", simplify = FALSE) |> purrr::compact() |> unlist()
  video_files = stringr::str_extract_all(MEDIA_used, pattern = ".*\\mp4|.*\\.avi", simplify = FALSE) |> purrr::compact() |> unlist()
  audios_files = stringr::str_extract_all(MEDIA_used, pattern = ".*\\.mp3|.*\\.wav", simplify = FALSE) |> purrr::compact() |> unlist()
  
  media_experiment = list(
    images =  ifelse (length(images_files) != 0, paste0("images = ['", paste(images_files, collapse = "', '"), "'];"), "images = [];"),
    video = ifelse (length(video_files) != 0, paste0("video = ['", paste(video_files, collapse = "', '"), "'];"), "video = [];"),
    audios = ifelse (length(audios_files) != 0, paste0("audios = ['", paste(audios_files, collapse = "', '"), "'];"), "audios = [];")
  )
  
  # All media found
  all_media_protocol = c(images_files, video_files, audios_files)
  # DEBUG: all_media_protocol = c(all_media_protocol, "media/img/fox2.jpg", "media/img/RMET/35.png", "media/img/RMET/32.png")
  
  # If there is media
  if (length(all_media_protocol) != 0) {
    
    # Media in folder_protocol
    all_media_folder_protocol = list.files(paste0(folder_protocol, "/media"), recursive = TRUE, full.names = TRUE)
    
    # CHECK if there is media we do not have in the folder_protocol
    media_not_in_folder_protocol = all_media_protocol[!basename(all_media_protocol) %in% basename(all_media_folder_protocol)]
    
    # If we are missing media, check Github
    if (length(media_not_in_folder_protocol) != 0) {
      
      # Get list of all media in canonical_protocol Github
      req <- httr::GET("https://api.github.com/repos/gorkang/jsPsychMaker/git/trees/main?recursive=1")
      httr::stop_for_status(req)
      filelist_github <- unlist(lapply(httr::content(req)$tree, "[", "path"), use.names = FALSE)
      all_media_github =  grep("canonical_protocol/media/", filelist_github, value = TRUE, fixed = TRUE) 
      
      # Check media in Github and media not found
      media_in_canonical = media_not_in_folder_protocol[basename(media_not_in_folder_protocol) %in% basename(all_media_github)]
      media_not_found =  media_not_in_folder_protocol[!basename(media_not_in_folder_protocol) %in% basename(media_in_canonical)]
      
      # ERROR if missing media
      if (length(media_not_found) != 0) cli::cli_abort("{.code {media_not_found}} not found")
      
      # Media to copy to folder_protocol from Github 
        # e.g. https://github.com/gorkang/jsPsychMaker/raw/main/canonical_protocol/media/img/RMET/14.png
      download_from_github = tibble::tibble(filelist_github) |> 
        dplyr::filter(filelist_github %in% paste0("canonical_protocol/", media_in_canonical)) |> 
        dplyr::mutate(media_in_canonical = gsub("canonical_protocol/", "", filelist_github))
      
      # If there are things to download...
      if (nrow(download_from_github) != 0){
        
        cli::cli_h3("Download files from Github")
        
        cli::cli_alert_info("Copying {nrow(download_from_github)} files to {.code {folder_protocol}}")
        1:nrow(download_from_github) |> 
          purrr::walk(~{
            # .x = 1
            file_get = httr::GET(paste0("https://github.com/gorkang/jsPsychMaker/raw/main/", download_from_github$filelist_github[.x]))
            bin <- httr::content(file_get, "raw")
            file_to_save = paste0(folder_protocol, "/", download_from_github$media_in_canonical[.x])
            dir.create(dirname(file_to_save), recursive = TRUE, showWarnings = FALSE)
            writeBin(bin, file_to_save)
            cli::cli_alert_success("{.code {file_to_save}}")
          })
      }
      
    }
    
  }

  return(media_experiment)
}



#' copy_canonical_clean
#'
#' @param destination_folder Where to copy canonical_protocol_clean
#'
#' @return
#' @export
#' @importFrom purrr walk
#' @importFrom utils unzip
#'
#' @examples
copy_canonical_clean <- function(destination_folder) {
  
  if (!grepl("/$", destination_folder)) destination_folder = paste0(destination_folder, "/")
  
  # canonical_protocol_clean files
  
  # canonical_protocol_clean inside jsPsychMaker package
  packagePath <- find.package("jsPsychMaker", lib.loc=NULL, quiet = TRUE)
  canonical_zip = paste0(packagePath, "/templates/canonical_protocol_clean.zip")
  # canonical_folder = "canonical_protocol_clean/"
  # canonical_files = list.files(canonical_folder, full.names = TRUE, recursive = TRUE)
  utils::unzip(zipfile = canonical_zip, exdir = destination_folder, overwrite = TRUE)
    
  # Copy canonical_protocol_clean files to NEW_TASKS
  # folders_to_create = unique(paste0(destination_folder, dirname(canonical_files)))
  # purrr::walk(folders_to_create, dir.create, recursive = TRUE, showWarnings = FALSE)
  # file.copy(paste0(canonical_folder, canonical_files), paste0(destination_folder, canonical_files), overwrite = TRUE)
  
}
