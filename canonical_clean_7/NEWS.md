# jsPsychMaker 0.2.9

Major updates  

* Protocols now balance correctly multiple between variables
* Big review to mysql and indexeddb controllers

Minor updates

* Cleaning up - WIP


# jsPsychMaker 0.2.8

Major updates  

* Now we can create jsPsych 7.3 tasks and protocols using `jsPsych_version`

Minor updates

* Fixed small issue with survey-multi-choice (was not capturing stimulus and response was son stringified)
* Update image_zoom()
* Fix creation of if_questions for multi-choice
* Almost all index content is now translatable


# jsPsychMaker 0.2.7

Minor updates

* Tests run from tempdir() 
* Added examples to more functions
* New TASKS: CS, EQ

# jsPsychMaker 0.2.6

Major updates  

* Update canonical_protocol_clean:
  + New media paths
  + Parametrize config_messages
  + Add spanish and english versions to config_messages

Minor updates

* Update tests
* Remove check_progress_pid
* Add tests
* Improve some error messages
* Read html files when added in stimulus
* Default separator is ; now
* Reduce images size


# jsPsychMaker 0.2.5

Major updates  

* jsPsychMaker is now an R package  

* NEW create_protocol() function to create full protocols 
  + Using already existing tasks
  + Using csv files with the task definition
  + Can deal with most/all plugins
  + Can deal with if_questions 
  
* Added docs/ with original papers of tasks

* Shiny app can work with local config.js files!
  + Fixed multiple issues.   

Minor updates

* Working with ~60 tasks


# jsPsychMaker 0.2.0

Major updates  

* Working with ~50 tasks
* jsPsych 6.3
* All configuration out of index.html and to config.js
* MySQL and IndexedDB working
  * Fixed corner case where sometimes the completed_task array was not loading in time
* Reorganized controllers: 
  + Separate mysql_controller from indexedDB_controller
  + Rest of functions in helper_function.js
* Clean up tasks:
  + key lock outside tasks
  + procedure in data
* Media reorganization
  * Task-related media moved to media/ folder
  * Essential media (e.g. loading.gif) now in controllers/media


Minor updates

* Added check and informative message for online/offline
* Informative messages while loading protocol
* Added debug_mode
* Avoid some SQL calls inside loops 


* Tasks
  + Consent changed so the input is a js variable instead of an html file (to avoid CORS issues)
  + Final call_function() to standardize it
  + check Fullscreen function
