// Configuration file

// Main parameters -------------------------------------------------------------
pid = 9997; // Protocol ID [number]
online = false; // Protocol runs online [true/false]
max_participants = 100000; // Max participants per contition [number]
random_id = true; // Assign random id to participants [true/false]
max_time = "02:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = false; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production
language = "Spanish" // Spanish or English
finish_link = "" // link at the end of the experiment example "https://app.prolific.co/submissions/complete?cc=000000"
store_URL = true; // For Prolific, Connect, etc. Stores URL in Consent


// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// Create as many as needed.  The order of the tasks in the arrays starting with "random" will be randomized
randomly_ordered_tasks_1 = ['SHORNAMETASKslider', 'SHORNAMETASKmultichoice']; // Block of tasks in random order
secuentially_ordered_tasks_1 = []; // Block of tasks in sequential order

// FINAL ARRAY of tasks [build combining the above blocks]
  // tasks SHOULD contain an array of strings. GOOD: tasks = ['my_tasks']; BAD: tasks = [my_tasks];
tasks = ['first_tasks', 'randomly_ordered_tasks_1', 'last_tasks'];



// MEDIA preloading ------------------------------------------------------------

// media to preload in protocol_controller
images =  {/*"Bayesian31": ['VPP_low_Cancer.png', 'VPN_high_Cancer.png',  'VPN_low_Stroke.png', 'VPP_high_Stroke.png', 'instructions1.png', 'instructions2.png', 'iphone-rotation-475102.png'], "WaisWorkingMemory": ['cross.png']*/};
audios = {};
videos = {};

// Optional parameters ---------------------------------------------------------

// Used in WaisWorkingMemory to encrypt correct responses
salt = ">P/9k9YR&h?Q7pBe";

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN participants variables ----------------------------------------------
all_conditions = {'FKEA': {'Treatment': ['treatment1','treatment2','treatment3']}};
/* all_conditions = {
  "FONDECYT": {"type": ["Text", "Image"]}
  };
  */
