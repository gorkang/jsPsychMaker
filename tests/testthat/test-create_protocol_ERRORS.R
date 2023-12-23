testthat::test_that('create_protocol_ERRORS', {
  
  # Outputs folder
  destination_folder_outputs = paste0(tempdir(), "/TEST_testthat/ERRORS_outputs/")
  
  
  # Copy example tasks to local folder
  destination_folder = paste0(tempdir(), "/TEST_testthat/ERRORS/")
  unlink(destination_folder, recursive = TRUE)
  jsPsychMaker::copy_example_tasks(destination_folder = destination_folder, file_zip = "example_tasks_errors.zip", show_messages = FALSE)
  
  # Create quiet version
  create_protocol_quiet <- purrr::quietly(jsPsychMaker::create_protocol)

  # List all tasks
  FOLDERS = list.dirs(paste0(destination_folder), recursive = FALSE) |> basename()
  
  # Run all tests
  1:length(FOLDERS) |> 
    purrr::walk(~{
      # .x = 1
      # cli::cli_alert_info(paste0(.x, ": ", FOLDERS[.x]))
      folder_task = paste0(destination_folder, FOLDERS[.x], "/")
      output_folder = paste0(destination_folder_outputs, "/", FOLDERS[.x])
      ERROR = readLines(paste0(folder_task, "/ERROR_expected"))
      
      # If there is no error, gives an error
      testthat::expect_error(
        regexp = ERROR,
        create_protocol_quiet(folder_tasks = folder_task,
                              folder_output = output_folder)
      )
      unlink(output_folder, recursive = TRUE)
      unlink(destination_folder_outputs, recursive = TRUE)
    })
  
  
  # Not a number
  output_folder = paste0(destination_folder_outputs, "/folder_without_number/")
  testthat::expect_error(
    regexp = "number. We need a number to extract the pid",
    create_protocol_quiet(canonical_tasks = "AIM",
                          folder_output = output_folder,
                          show_messages = FALSE)
  )
  unlink(output_folder, recursive = TRUE)
  unlink(destination_folder_outputs, recursive = TRUE)
  
  
  
  # NON Existing canonical_task
  output_folder = paste0(destination_folder_outputs, "/NON-EXISTENT-999/")
  testthat::expect_error(
    regexp = "Task/s not found: `NON-EXISTENT`",
    create_protocol_quiet(canonical_tasks = "NON-EXISTENT",
                                  folder_output = output_folder,
                                  show_messages = FALSE)
  )
  unlink(output_folder, recursive = TRUE)
  unlink(destination_folder_outputs, recursive = TRUE)
  
  
  # NON Existing canonical_task
  output_folder = paste0(destination_folder_outputs, "/wrong_block-999/")
  testthat::expect_error(
    regexp = "`block_tasks` needs to be one of the following",
    create_protocol_quiet(canonical_tasks = "AIM",
                          folder_output = output_folder,
                          show_messages = FALSE,
                          block_tasks = "something-wrong")
  )
  unlink(output_folder, recursive = TRUE)
  unlink(destination_folder_outputs, recursive = TRUE)
  
  
  
  # Final cleanup -----------------------------------------------------------

  # Delete destination_folder created in first step
  unlink(destination_folder, recursive = TRUE)
  unlink(destination_folder_outputs, recursive = TRUE)
  
})
