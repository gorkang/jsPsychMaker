// Configuration file

// Main parameters -------------------------------------------------------------

pid = 999; // Protocol ID [number]
online = false; // Protocol runs online [true/false]
max_participants = 1000; // Max participants per contition [number]
random_id = false; // Assign random id to participants [true/false]
max_time = "24:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production
disable_button_interaction = false; // Monkeys control, should be false in production
language = "Spanish" // Spanish or English
finish_link = "" // link at the end of the experiment example "https://app.prolific.co/submissions/complete?cc=000000"
store_URL = false; // For Prolific, Connect, etc. Stores URL in Consent

var_researcher_email = ``;

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// Block of tasks in sequential order
secuentially_ordered_tasks_1 = ['AIM', 'AntiBots', 'Bank', 'BART', 'BDI', 'BNT', 'bRCOPE', 'CAS', 'CEL', 'CIT', 'CMApost', 'CMApre', 'ConsentHTML', 'Cov19Q', 'COVIDCONTROL', 'CRQ', 'CRS', 'CRT7', 'CRTMCQ4', 'CRTv', 'CS', 'DASS21', 'DEBRIEF', 'DEMOGR', 'EAR', 'EmpaTom', 'EQ', 'ERQ', 'ESM', 'ESV', 'ESZ', 'fauxPasEv', 'FDMQ', 'GBS', 'GHQ12', 'Goodbye', 'HRPVB', 'HRPVBpost', 'IBT', 'ICvsID', 'IDQ', 'IEC', 'IRI', 'IRS', 'LoB', 'LOT', 'LSNS', 'MCQ30', 'MDDF', 'MDMQ', 'MIS', 'NARS', 'OBJNUM', 'OTRASRELIG', 'PBSr', 'PERMA', 'PPD', 'PRFBM', 'PRFBMpost', 'PSC', 'PSETPP', 'PSPPC', 'PSS', 'PVC', 'PWb', 'REI40', 'Report', 'RMET', 'RobToM', 'RSS', 'RTS', 'SASS', 'SBS', 'SCSORF', 'SDG', 'SILS', 'sProQOL', 'SRA', 'SRBQP', 'SRSav', 'STAI', 'SWBQ', 'UCLA', 'WaisMatricesES', 'WaisWorkingMemoryES', 'WEBEXEC'];

// The order of the tasks in the arrays starting with "random" will be randomized
randomly_ordered_tasks_1 = []; 

// Create as many as needed of secuentially_ordered_tasks_n and randomly_ordered_tasks_n

// FINAL ARRAY of tasks [build combining the above blocks]
  // tasks SHOULD contain an array of strings. GOOD: tasks = ['my_tasks']; BAD: tasks = [my_tasks];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];

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

// BETWEEN subject variables ---------------------------------------------------

// If there is no between-subject task:
all_conditions = {"protocol": {"type": ["survey"]}};

// If there are between-subject tasks:
//all_conditions = {"NAMETASK": {"type": ["Condition1", "Condition2"]}};
