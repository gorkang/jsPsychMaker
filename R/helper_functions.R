#' list_available_tasks
#'
#' @param show_help Show information about where to get help?
#' @param jsPsych_version By default jsPsych6. Can also be 7 for jsPsych7
#'
#' @return prints a list with the available tasks
#' @export
#' @importFrom cli cli_alert_info
#' @importFrom stringr str_replace_all
#'
#' @examples
#' list_available_tasks()
list_available_tasks <- function(show_help = FALSE, jsPsych_version = 6) {
  
  if (show_help == TRUE) cli::cli_alert_info("For more info about the tasks, see {.url https://docs.google.com/spreadsheets/d/1Eo0F4GcmqWZ1cghTpQlA4aHsc8kTABss-HAeimE2IqA/edit#gid=0}")
  
  # Get tasks from "/templates/tasks.zip"
  tasks_js = list_unzip(location = "jsPsychMaker", zip_file = paste0("tasks", jsPsych_version, ".zip"), action = "list")
  tasks = tasks_js |> stringr::str_replace_all(pattern = "\\.js", replacement = "")
  
  OUTPUT = list(tasks = tasks,
                tasks_js = tasks_js)

  return(OUTPUT)
}



#' extract_tasks_from_protocol
#' 
#' Extract the list of scripts in the task folder of a protocol, and a vector 
#' with the names of the tasks
#'
#' @param folder_protocol Add folder of the protocol 
#'
#' @return A list with the tasks present in a protocol
#' @export
#' @importFrom dplyr filter mutate as_tibble group_by distinct arrange pull
#'
#' @examples
#' \dontrun{
#' extract_tasks_from_protocol(folder_protocol = "~/Downloads/MyProtocol999")
#' }

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
#' @param show_messages TRUE/FALSE
#'
#' @return Modifies the config.js file of a protocol
#' @export
#' @importFrom cli cli_alert_info cli_abort cli_h3
#'
#' @examples
#' \dontrun{
#' update_config_js(folder_protocol = "~/Downloads/MyProtocol999", 
#'                 tasks = NULL, 
#'                  block_tasks = "randomly_ordered_tasks_1", 
#'                  media = NULL, 
#'                  show_messages = TRUE)
#' }

update_config_js <- function(folder_protocol, tasks = NULL, block_tasks = "secuentially_ordered_tasks_1", media = NULL, show_messages = TRUE) {
  
  # Read config
  config_file = paste0(folder_protocol, "/config.js")
  
  # CHECK block_tasks
  allowed_blocks = c("first_tasks", "last_tasks", paste0(gsub("1$", "", "randomly_ordered_tasks_1"), 1:5), paste0(gsub("1$", "", "secuentially_ordered_tasks_1"), 1:5))
  if (!block_tasks %in% allowed_blocks) cli::cli_abort("{.var block_tasks} needs to be one of the following: {allowed_blocks}")
  
  # Tasks
  if (!is.null(tasks)) {

    if (show_messages == TRUE) cli::cli_h3("Add tasks to run")
    
    # Read config
    CONFIG = readLines(config_file)
    
    # Update tasks
    tasks_clean = tasks$tasks[!tasks$tasks %in% c("Consent", "Goodbye")]
    TASKS_vector = paste0(block_tasks, " = ['", paste(gsub("\\.js", "", tasks_clean), collapse = "', '"), "'];")
    CONFIG[which(grepl(paste0(block_tasks, " = "), CONFIG))] = TASKS_vector
    
    # Update task blocs
    TASKS_blocs_vector = paste0("tasks = ['first_tasks', '", block_tasks, "', 'last_tasks'];")
    CONFIG[which(grepl("tasks = \\['first_tasks',", CONFIG))] = TASKS_blocs_vector
    
    # Write file
    final_file = CONFIG
    cat(final_file, file = config_file, sep = "\n")
    
    if (show_messages == TRUE) cli::cli_alert_info("Replaced {block_tasks} in {config_file} with:\n - {TASKS_vector}")
  }
  
  # Media
  if (!is.null(media)) {
    
    # Contents of media are more than the default
    if (any(nchar(media$images) > 15, nchar(media$video) > 15, nchar(media$audios) > 15)) {
      
      if (show_messages == TRUE) cli::cli_h3("Add media files to preload")
    
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
      if (show_messages == TRUE) cli::cli_alert_info("Updated `{updated_names}` in {config_file}")
      
    }
  }
}



#' get_media_for_protocol
#'
#' @param all_files_js vector with content of all js files
#' @param folder_protocol where is the protocol?
#' @param force_download_media download even if the file already exists
#' @param show_messages TRUE/FALSE
#'
#' @return Downloads media files and outputs a list of files
#' @export
#' @importFrom httr GET stop_for_status content
#' @importFrom stringr str_extract_all str_remove_all
#' @importFrom tibble tibble
#' @importFrom dplyr filter mutate
#' @importFrom cli cli_h3
#' @importFrom purrr compact
#'
#' @examples
#' \dontrun{
#'   get_media_for_protocol(all_files_js = readLines("canonical_protocol/tasks/INFCONS.js"),
#'                         folder_protocol = "canonical_protocol/",
#'                         force_download_media = FALSE,
#'                         show_messages = TRUE)
#' }
get_media_for_protocol <- function(all_files_js = all_files_js, folder_protocol, force_download_media = FALSE, show_messages = TRUE) {
  # DEBUG
  # all_files_js = "stimulus: 'media/images/INFCONS/Baby_respiratorios_VC.png', choices: ['He leido la información'], prompt: '<div class=\"justified\"><p></p></div>',"
  # folder_protocol = "~/Downloads/example_tasks/"

  # Get all media. Dirty, as it combines choices and other stuff in the same line.
    # .? Because we can have stimulus: 'media/images/INFCONS/Baby_lactancia_VC.png' or stimulus: ['media/videos/EmpaTom/Entrevista1.mp4']
  MEDIA_used_raw = all_files_js[which(grepl("stimulus: .?'.*?\\.[a-z0-9]{3}'", all_files_js))] |> trimws() |> unique()
  
  # Extract the specific stimulus
  MEDIA_used =  gsub(".*stimulus: .?'(.*?/.*\\.[a-z0-9]{3})'.*", "\\1", MEDIA_used_raw)
  
  
  MEDIA_hardcoded_raw = all_files_js[which(grepl("'media/.*'", all_files_js))] |> trimws() |> unique()
  MEDIA_hardcoded =  gsub(".*'(media/.*)'.*", "\\1", MEDIA_hardcoded_raw)
  
  # Make sure we only use existing media (harcoded is quite dirty)
  MEDIA_hardcoded_clean = MEDIA_hardcoded[file.exists(paste0("canonical_protocol/", MEDIA_hardcoded))]
  if (length(MEDIA_hardcoded_clean) != 0) cli::cli_alert_warning("Media paths hardcoded: {.code {MEDIA_hardcoded_clean}}")
  
  # Check if paths are wrong # REVIEW: only for MEDIA_used  
  REGEXP_strict = "^media/.*\\.[a-z0-9]{3}$"
  CHECK_media_wrong_folder = !grepl(REGEXP_strict, MEDIA_used)
  if (any(CHECK_media_wrong_folder)) cli::cli_abort(c("Issues with media paths in column `stimulus` :  {.code {MEDIA_used[CHECK_media_wrong_folder]}}\n\n", 
                                                      "",
                                                      "CHANGE paths to: ", "-Images: 'media/images' ", "-Videos: 'media/videos' ", "-Audio: 'media/audios'\n\n"))
  
  # Get all media
  images_files = stringr::str_extract_all(MEDIA_used, pattern = ".*\\.jpg|.*\\.png", simplify = FALSE) |> purrr::compact() |> unlist()
  video_files = stringr::str_extract_all(MEDIA_used, pattern = ".*\\mp4|.*\\.avi", simplify = FALSE) |> purrr::compact() |> unlist()
  audios_files = stringr::str_extract_all(MEDIA_used, pattern = ".*\\.mp3|.*\\.wav", simplify = FALSE) |> purrr::compact() |> unlist()
  
  if (!is.null(images_files)) basename_dir_images = basename(dirname(images_files))
  if (!is.null(video_files)) basename_dir_videos = basename(dirname(video_files))
  if (!is.null(audios_files)) basename_dir_audios = basename(dirname(audios_files))
  
  media_experiment = list(
    images =  ifelse (length(images_files) != 0, paste0("images = {'", basename_dir_images, "': ['", paste(basename(images_files), collapse = "', '"), "']};"), "images = {};"),
    video = ifelse (length(video_files) != 0, paste0("video = {'", basename_dir_videos, "': ['", paste(basename(video_files), collapse = "', '"), "']};"), "video = {};"),
    audios = ifelse (length(audios_files) != 0, paste0("audios = {'", basename_dir_audios, "': ['", paste(basename(audios_files), collapse = "', '"), "']};"), "audios = {};")
  )
  
  # All media found
  all_media_protocol = c(images_files, video_files, audios_files)
  # DEBUG: all_media_protocol = c(all_media_protocol, "media/images/fox2.jpg", "media/images/RMET/35.png", "media/images/RMET/32.png")
  
  # If there is media
  if (length(all_media_protocol) != 0) {
    
    # Media in folder_protocol
    all_media_folder_protocol = list.files(paste0(folder_protocol, "/media"), recursive = TRUE, full.names = TRUE)
    
    # CHECK if there is media we do not have in the folder_protocol
    media_not_in_folder_protocol = all_media_protocol[!basename(all_media_protocol) %in% basename(all_media_folder_protocol)]
    
    # If we are missing media, check Github
    if (length(media_not_in_folder_protocol) != 0) {
      
      # Get list of all media in canonical_protocol Github
      all_media_github = list_files_github(folder = "canonical_protocol/media/")
      
      # Check media in Github and media not found
      media_on_github = media_not_in_folder_protocol[basename(media_not_in_folder_protocol) %in% basename(all_media_github)]
      media_not_found =  media_not_in_folder_protocol[!basename(media_not_in_folder_protocol) %in% basename(media_on_github)]
      
      # ERROR if missing media
      if (length(media_not_found) != 0) cli::cli_abort("{.code {media_not_found}} not found")
      
      # Media to copy to folder_protocol from Github 
        # e.g. https://github.com/gorkang/jsPsychMaker/raw/main/canonical_protocol/media/images/RMET/14.png
      download_from_github = tibble::tibble(all_media_github) |> 
        dplyr::filter(all_media_github %in% paste0("canonical_protocol/", media_on_github)) |> 
        dplyr::mutate(media_on_github = gsub("canonical_protocol/", "", all_media_github))
      
      # If there are things to download...
      if (nrow(download_from_github) != 0){
        
        if (show_messages == TRUE) cli::cli_h3("Download files from Github")
        
        if (show_messages == TRUE) cli::cli_alert_info("Checking {nrow(download_from_github)} files: {.code {folder_protocol}}")
        1:nrow(download_from_github) |> 
          purrr::walk(~{
            file_to_save = paste0(folder_protocol, "/", download_from_github$media_on_github[.x])
            file_exists = file.exists(file_to_save)
            
            if (!file_exists | force_download_media == TRUE) {
              file_get = httr::GET(paste0("https://github.com/gorkang/jsPsychMaker/raw/main/", download_from_github$all_media_github[.x]))
              bin <- httr::content(file_get, "raw")
              dir.create(dirname(file_to_save), recursive = TRUE, showWarnings = FALSE)
              writeBin(bin, file_to_save)
            }
            
            if (file_exists & force_download_media == FALSE) {
              if (show_messages == TRUE) cli::cli_alert_success("File already exists: {.code {basename(file_to_save)}}")
            } else if ((file.exists(file_to_save))) {
              if (show_messages == TRUE) cli::cli_alert_success("Downloaded: {.code {basename(file_to_save)}}")
            } else {
              if (show_messages == TRUE) cli::cli_alert_danger("ERROR: {.code {basename(file_to_save)}}")
            }
            
          })
      }
      
    }
    
  }

  return(media_experiment)
}



#  #' copy_canonical_clean
#  #'
#  #' @param destination_folder Where to copy canonical_protocol_clean
#  #'
#  #' @return
#  #' @export
#  #' @importFrom purrr walk
#  #' @importFrom utils unzip
#  #'
#  #' @examples
#  copy_canonical_clean <- function(destination_folder) {
#    
#    # if (!grepl("/$", destination_folder)) destination_folder = paste0(destination_folder, "/")
#    
#    # Unzip canonical_protocol_clean
#    list_unzip(location = "jsPsychMaker", zip_file = "canonical_protocol_clean.zip",
#      action = "unzip", destination_folder = destination_folder, silent = TRUE)
#    
#  }




#' list_files_zip
#' 
#' Unzips or lists files inside a zip file that can be in a package or the user filesystem
#'
#' @param location either a package name or a folder path
#' @param action unzip/list
#' @param zip_file name of zip file
#' @param destination_folder where to unzip
#' @param files_to_unzip files inside zip to unzip
#' @param silent show cli messages?
#'
#' @return Unzips or lists files inside a zip
#' @export
#' @importFrom cli cli_abort cli_alert_warning cli_alert_info
#' @importFrom utils unzip
#'
#' @examples
#' \dontrun{
#' 
#' list_unzip(
#'   location = "jsPsychMaker",
#'   zip_file = "?",
#'   action = "list",
#'   destination_folder = NULL,
#'   files_to_unzip = NULL,
#'   silent = TRUE
#' )
#' 
#' list_unzip(
#'   location = "jsPsychMaker",
#'   zip_file = "canonical_clean_6.zip",
#'   action = "unzip",
#'   destination_folder = tempdir(),
#'   files_to_unzip = NULL,
#'   silent = FALSE
#' )
#' }
#' 
list_unzip <- function(location = "jsPsychMaker", zip_file = "?", action = "list", destination_folder = NULL, files_to_unzip = NULL, silent = TRUE) {
  
  
    
  # DEBUG
  # location = "jsPsychMaker"
  # location = "protocols_DEV/OLD_TESTS/"
  # action = "unzip"
  # zip_file = "canonical_protocol_clean.zip"
  # destination_folder = "~/Downloads/XXX"
  
  # Path to package or to folder
  if (grepl("/", location)) {
    path = location
  } else {
    # path <- find.package(location, lib.loc = NULL, quiet = TRUE)  
    path <- callr::r(func = find.package, args =  list(package = location, lib.loc = NULL, quiet = TRUE))
    
  }
  
  # Find all zip files in that folder
  all_zips = list.files(path, recursive = TRUE, pattern = "zip", full.names = TRUE)
  
  # If zip_file is ?, list. Else, proceed
  if (zip_file == "?") {
    
    if (silent == FALSE) cli::cli_alert_info('`zip_file == "?"`, listing all zip files in {.code {path}}')
    all_zips
    
  } else {
    
    # Get zip_file in all_zips
    file_zip_found = all_zips[basename(all_zips) %in% zip_file]
    
    if (length(file_zip_found) == 0) cli::cli_abort(c("{zip_file} not found in {path}", "We found the following files:", "{.code {all_zips}}"))
    
    if (action == "list") {
      
      if (silent == FALSE) cli::cli_alert_info('`action == "{action}"`, listing all zip files in {.code {path}}')
      files_inside_zip = unzip(file_zip_found, list = TRUE)[,1]
      files_inside_zip
      
    } else if (action == "unzip") {
      
      if (is.null(destination_folder)) cli::cli_abort("`destination_folder` is empty. Set `destination_folder` to a local folder to unzip {.code {basename(file_zip_found)}}")
      
      # Unzip full zip
      if (is.null(files_to_unzip)) {
        
        if (silent == FALSE ) cli::cli_alert_info('`action == "{action}"`, UNZIPing {.code {file_zip_found}} to {.code {destination_folder}}')
        utils::unzip(zipfile = file_zip_found, exdir = destination_folder, overwrite = TRUE)
        if (silent == FALSE ) cli::cli_alert_success('UNZIPed {.code {basename(file_zip_found)}} to {.code {destination_folder}}')
        
      # Unzip specific files
      } else {
        
        # CHECK files to unzip exist inside zip
        files_inside_zip = unzip(file_zip_found, list = TRUE)[,1]
        files_exist_in_zip = files_to_unzip %in% files_inside_zip
        if (any(!files_exist_in_zip)) cli::cli_abort("{.code {files_to_unzip[!files_exist_in_zip]}} does not exist inside {.code {file_zip_found}}")
        
        if (silent == FALSE ) cli::cli_alert_info('`action == "{action}"`, UNZIPing  {.code {length(files_to_unzip)}} files from {.code {file_zip_found}} to {.code {destination_folder}}')
        utils::unzip(zipfile = file_zip_found, files = files_to_unzip, exdir = destination_folder, overwrite = TRUE)
        if (silent == FALSE ) cli::cli_alert_success('UNZIPed {.code {length(files_to_unzip)}} files from {.code {basename(file_zip_found)}} to {.code {destination_folder}}')
        
        
      }
      
    } else {
      
      cli::cli_alert_warning("`action` needs to be either `list` or `unzip`")
      
    }
    
  }
  
}


#' list_files_github
#' 
#' List files inside a Github repo. By default, the canonical_protocol folder inside jsPsychMaker
#'
#' @param URL api url of Github project 
#' @param folder folder inside Github project
#'
#' @return Prints a vector of files
#' @export
#' @importFrom httr GET stop_for_status content
#'
#' @examples
#' \dontrun{
#' list_files_github(
#'   URL = "https://api.github.com/repos/gorkang/jsPsychMaker/git/trees/main?recursive=1", 
#'   folder = "canonical_protocol")
#' }
list_files_github <- function(
    URL = "https://api.github.com/repos/gorkang/jsPsychMaker/git/trees/main?recursive=1", 
    folder = "canonical_protocol") {
  # Get list of all media in canonical_protocol Github
  req <- httr::GET(URL)
  httr::stop_for_status(req)
  filelist_github <- unlist(lapply(httr::content(req)$tree, "[", "path"), use.names = FALSE)
  all_media_github =  grep(folder, filelist_github, value = TRUE, fixed = TRUE) 
  return(all_media_github)
}


#' check_NEW_tasks_Github
#' 
#' Check if we have new tasks in jsPsychMaker/canonical_protocol/tasks Github compared to the jsPsychMaker package (jsPsychMaker/inst/tamplates/tasks.zip)
#'
#' @return Prints a CLI message
#' @export
#' @importFrom cli cli_alert_info cli_alert_success
#' @importFrom stringr str_remove_all
#'
#' @examples check_NEW_tasks_Github()
check_NEW_tasks_Github <- function() {
  
  tasks_in_package = list_available_tasks()
  all_TASKS_github = list_files_github(folder = "canonical_protocol/tasks/") |> stringr::str_remove_all("canonical_protocol/tasks/|\\.js")
  
  NEW_tasks_github = all_TASKS_github[!all_TASKS_github %in% tasks_in_package$tasks]
  
  if (length(NEW_tasks_github) != 0) {
    
    cli::cli_alert_info("New tasks on Github: {NEW_tasks_github}")
    cli::cli_alert_info('Get new version of package with {.code  remotes::install_github("gorkang/jsPsychMaker")}')
    
  } else {
    
    cli::cli_alert_success("No new tasks available")
    
  }
  
}
