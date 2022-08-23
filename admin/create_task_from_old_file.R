# Script para convertir las tareas antiguas (../DEV/CSCN_practica_2018/pruebas_individuales/) al sistema nuevo.
# Funciona bien con tareas sencillas. Falla si tienen varias instrucciones, imagenes, componentes experimentales, etc.


create_task_from_old_file <- function(name_of_task, FILE) {
  
  # TODO
  # Tareas con varias instrucciones
  # Tareas con imagenes
  # etc.
  

  
  # DEBUG
  # .x = 1
  # FILE = DF_all$value[.x]
  # name_of_task = DF_all$name_of_task[.x]

 library(tidyverse)
  
  # name_of_task = "AnsNum"  
  # FILE = "../DEV/CSCN_practica_2018/pruebas_individuales/ansiedad_matematica/experiment.js"
  
  DF = readLines(FILE)
  DF_clean = DF[!grepl("^[ \t\\#]{1,100}\\#", DF)] # Get rid of comments

  
  instructions_N = which(grepl("pages", DF_clean))
  INSTRUCTIONS_raw = DF_clean[instructions_N]
  
  preamble_N = which(grepl("preamble:", DF_clean))
  questions_N = which(grepl("questions:", DF_clean))
  
  
  if (length(instructions_N) > 1) cli::cli_alert_warning("{name_of_task}: multiple instructions")
  
  instructions_N2 = which(grepl('trialid: "Screen', DF_clean))
  if(!all(is.na(preamble_N))) {
    INSTRUCTIONS_pages = DF_clean[instructions_N:(instructions_N2 - 1)]
  } else{
    INSTRUCTIONS_pages = "pages: [''],"
  }
    
    

  
  
  if(!all(is.na(preamble_N))) {
  PREAMBLE_raw =  1:length(preamble_N) |> map(~ DF_clean[preamble_N[.x]:(questions_N[.x]-1)])
  } else {
    PREAMBLE_raw = NULL
  }
  
  QUESTIONS_raw = DF_clean[questions_N]
  
  # Separate in columns
  # QUESTIONS_temp = gsub("questions:", "", DF_clean[questions_N]) |> trimws() |> 
  #   stringr::str_extract_all(pattern = "\\w+:.*?[,}]", simplify = TRUE) |> 
  #   as_tibble()
  # QUESTIONS = QUESTIONS_temp %>% 
  #   mutate(across(everything(),~ gsub("\\}|,$","", .)))
  # 
  
  type_N = which(grepl("type:", DF_clean))
  TYPE = DF_clean[type_N]   |> trimws()

  
  likert_N = which(grepl("var likert_scale", DF_clean))
  LIKERT = DF_clean[likert_N]
  
  
    
  INTRO = paste0("
  /* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
      
      questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
    questions.push( check_fullscreen('", name_of_task,"') );
    ", name_of_task," = [];    //temporal timeline
  ")
    
  OUTRO = paste0("
    // Randomize order of items
    if (debug_mode === false) ", name_of_task," = jsPsych.randomization.repeat(", name_of_task,",1);
    ", name_of_task, ".unshift(instruction_screen_experiment);
    questions.push.apply(questions, ", name_of_task,");
    
    call_function('", name_of_task,"');
    
  ")
  
  INSTRUCTIONS = paste0("
                          var instruction_screen_experiment = {
      type: 'instructions',",
      
      paste(INSTRUCTIONS_pages, collapse = ""), "\n",
      # pages: [`<p><left><b><big>NAME TASK</big></b><br/><br> Instrucciones detalladas de tarea con multi choice<br><br> Muchas gracias por tu colaboración.</p>`,
      #         `<p>Pagina 2 de instrucciones. <BR><BR>Dale a siguiente para empezar la tarea</p>`],
      
      "data:{trialid: '", name_of_task,"_000', procedure: '", name_of_task,"'},
      show_clickable_nav: true,
      on_trial_start: function(){
        bloquear_enter = 0;
      }
    };
    
  ")

  create_item <- function(name_of_task, item_n, type_item, question, preamble) {
    
    # DEBUG
    # name_of_task = "AnsNum"
    # item_n = 1
    # type_item = TYPE[2]
    # question = QUESTIONS_raw[1]
  
    item_number = sprintf("%03d", item_n)
    type_item_clean = gsub("[0-9]", "", type_item)
    
    # type: "survey-multi-selectmr",
    
    
    
    QUESTION_template = paste0("
        var question", item_number, " = {",
        type_item_clean,
        paste(preamble, collapse = ""), "\n",
        question,
        # type: 'survey-multi-choice-vertical',
        # "questions: [{prompt: '<div class=\"justified\">Una pregunta</div>', options: ['Mejor que lo habitual', 'Igual que lo habitual', 'Menos que lo habitual', 'Mucho menos que lo habitual'], required: true, horizontal: false}],
        
        "data: {trialid: '", name_of_task,"_", item_number, "', procedure: '", name_of_task,"'}
      };
      ", name_of_task,".push(question", item_number, ");
    
                             ")
  return(QUESTION_template)
  }


  ALL_ITEMS = 
    1:length(QUESTIONS_raw) |> 
    map(~
          create_item(
            name_of_task = name_of_task,
            item_n = .x,
            type_item = TYPE[.x + 1],
            preamble = unlist(PREAMBLE_raw[.x]),
            question = QUESTIONS_raw[.x]
          )
    ) 
  
  
  
  # Join all pieces
  FINAL_TASK = paste0(INTRO, INSTRUCTIONS, LIKERT, paste(ALL_ITEMS, collapse = ""), OUTRO)
  
  # Write to file
  name_output = paste0("DEV/NEW_TASKS/canonical_protocol_clean/tasks/", name_of_task, ".js")
  cat(FINAL_TASK, file = name_output, sep="\n", append = FALSE)
  cli::cli_alert_success("File created: {name_output}")

}

# create_task_from_old_file(
#   FILE = "../DEV/CSCN_practica_2018/pruebas_individuales/DSS_decision_styles_scale//experiment.js",
#   name_of_task = "AnsNum")



# RUN SCRIPT CREATION IN ALL TASKS ----------------------------------------

# Do not prepare these tasks
BLACK_LIST = list.files("DEV/NEW_TASKS/canonical_protocol_clean/NOT_WORKING/", pattern = "\\.js")

# All OLD tasks available
ALL_FILES = list.files("../DEV/CSCN_practica_2018/pruebas_individuales/", pattern = "experiment\\.js", full.names = TRUE, recursive = TRUE)

# Prepare DF creating task_name and filtering out BLACK_LIST
DF_all = ALL_FILES |> as_tibble() |> 
  mutate(name_of_task = janitor::make_clean_names(basename(gsub("/experiment.js", "", dirname(value))), case = "big_camel")) |> 
  filter(paste0(name_of_task, ".js") %in% BLACK_LIST)

# CREATE ALL TASKS
1:nrow(DF_all) |> 
  walk(~
        {
          cli::cli_alert_info("{.x}: {DF_all$name_of_task[.x]}")
          create_task_from_old_file(
            FILE = DF_all$value[.x],
            name_of_task = DF_all$name_of_task[.x])
        })

# .x = 6



# CREATE CONFIG.JS --------------------------------------------------------


source("../jsPsychHelpeR/admin/helper-scripts-admin.R")

tasks_canonical = extract_tasks_from_protocol(folder_protocol = "DEV/NEW_TASKS/canonical_protocol_clean/")

replace_tasks_config_js(folder_protocol = "DEV/NEW_TASKS/canonical_protocol_clean/",
                        tasks = tasks_canonical, 
                        block_tasks = "randomly_ordered_tasks_1") 

