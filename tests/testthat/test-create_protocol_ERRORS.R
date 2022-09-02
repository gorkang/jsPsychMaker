testthat::test_that('create_protocol_ERRORS', {
  
  # Copy example tasks to local folder
  destination_folder = "~/Downloads/TEST_testthat/"
  unlink(destination_folder, recursive = TRUE)
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, file_zip = "tasks_errors.zip", show_messages = FALSE)
  
  # Create quiet version
  create_protocol_quiet <- purrr::quietly(jsPsychMaker::create_protocol)
  
  # List all tasks
  FOLDERS = list.dirs(paste0(destination_folder, "/tasks_errors"), recursive = FALSE) |> basename()
  
  1:length(FOLDERS) |> 
  purrr::walk(~{
    # DEBUG
    # cli::cli_alert_info(paste0(.x, ": ", FOLDERS[.x]))
    # .x = 4
    folder_task = paste0(destination_folder, "/tasks_errors/", FOLDERS[.x], "/")
    output_folder = paste0("~/Downloads/TEST_testthat/", FOLDERS[.x], "/")
    ERROR = readLines(paste0(folder_task, "/ERROR_expected"))
    
    testthat::expect_error(
      regexp = ERROR,
      create_protocol_quiet(folder_tasks = folder_task,
                            folder_output = output_folder)
      
      
    )
    unlink(output_folder, recursive = TRUE)
  })
  
  
  # NON Existing canonical_task
  output_folder = paste0("~/Downloads/TEST_testthat/NON-EXISTENT/")
  testthat::expect_error(
    regexp = "Task/s not found: `NON-EXISTENT`",
    create_protocol_quiet(canonical_tasks = "NON-EXISTENT",
                                  folder_output = output_folder,
                                  show_messages = FALSE)
  )
  unlink(output_folder, recursive = TRUE)
  
  
  # NON Existing canonical_task
  output_folder = paste0("~/Downloads/TEST_testthat/wrong_block/")
  testthat::expect_error(
    regexp = "`block_tasks` needs to be one of the following",
    create_protocol_quiet(canonical_tasks = "AIM",
                          folder_output = output_folder,
                          show_messages = FALSE,
                          block_tasks = "something-wrong")
  )
  unlink(output_folder, recursive = TRUE)
  
  
  
  # Final cleanup -----------------------------------------------------------

  # Delete destination_folder created in first step
  unlink(destination_folder, recursive = TRUE)
  
})
