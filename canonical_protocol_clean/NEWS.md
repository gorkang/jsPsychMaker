# jsPsychMaker 0.2.0

Major updates  

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