# jsPsychMaker 0.0.1.9999

Major updates  

* jsPsych 6.3
* All configuration out of index.html and to config.js
* MySQL and IndexedDB working
  * Fixed corner case where sometimes the completed_task was not loading in time
* Reorganized controllers: 
  + Separate mysql_controller from indexedDB_controller
  + Rest of functions in helper_function.js
* Clean up tasks:
  + fullscreen function
  + key lock outside tasks
  + procedure in data
* Media reorganization
  * Task-related media moved to media/ folder
  * Essential media (e.g. loading.gif) now in controllers/media
* Informative messages while loading protocol
* Added debug_mode
