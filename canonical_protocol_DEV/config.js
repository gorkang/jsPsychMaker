// Configuration file

// Main parameters -------------------------------------------------------------
pid = 999; // Protocol ID [number]
online = true; // Protocol runs online [true/false]
max_participants = 30; // Max participants per contition [number]
random_id = false; // Assign random id to participants [true/false]
max_time = "24:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production


// INTRO [index.html] ----------------------------------------------------------
intro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>' +
  'Para cambiar este texto, edita la variable intro_HTML en config.js<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.gif" name="Chrome" align="bottom" border="0"/></a>';


// ORDER OF TASKS --------------------------------------------------------------
/*
first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// Create as many as needed. The name should start with 'random_' when you want to randomize the order of tasks in the block
randomly_ordered_tasks_1 = ['TASK1', 'TASK2']; // Block of tasks in random order
secuentially_ordered_tasks_1 = ['']; // Block of tasks in sequential order

// FINAL ARRAY of tasks [build combining the above blocks]
  // The order of the tasks in the arrays starting with "random" will be randomized
  // tasks SHOULD contain an array of strings. GOOD: tasks = ['my_tasks']; BAD: tasks = [my_tasks];
tasks = ['first_tasks', 'randomly_ordered_tasks_1', 'last_tasks']
*/


/* // TESTING FONDECYT
ALL_tasks = ["Consent", "FONDECYT", "Goodbye"]
tasks = ['ALL_tasks'];
*/


// CANONICAL_PROTOCOL TESTING ---
  // Contains all the available tasks

first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// All the tasks where the order of items is sequential in debug_mode
secuentially_ordered_tasks_1 = ["AIM", "BNT", "bRCOPE", "CAS", "Cov19Q", "COVIDCONTROL", "CRS", "CRT7", "CRTMCQ4", "CRTv", "DASS21", "DEBRIEF", "DEMOGR", "EAR", "ERQ", "ESM", "FDMQ", "GHQ12", "IBT", "IDQ", "IEC", "IRI", "IRS", "MIS", "OBJNUM", "OTRASRELIG", "PBS", "PSETPP", "PSPPC", "PSS", "PVC", "PWb", "REI40", "Report", "RSS", "RTS", "SASS", "SBS", "SCSORF", "SDG", "SRA", "SRBQP", "SRSav", "STAI", "SWBQ", "WEBEXEC"];

// Between tasks [random order unavoidable]
secuentially_ordered_tasks_2 = ["HRPVB", "HRPVBpost", "PRFBM", "PRFBMpost", "FONDECYT", "INFCONS"];

// More randomness
secuentially_ordered_tasks_3 = ["EmpaTom", "BART"];

// FINAL ARRAY
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'secuentially_ordered_tasks_2', 'secuentially_ordered_tasks_3','last_tasks'];




// MEDIA preloading ------------------------------------------------------------
message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

// media to preload in protocol_controller
img_folder = 'media/img/';
audio_folder = 'media/audio/';

images = [img_folder + 'VPP_low.png',  img_folder + 'VPP_high.png', img_folder + 'VPN_low.png',  img_folder + 'VPN_high.png', img_folder + 'BART_redBalloon.png'];
audios = [audio_folder + 'BART_inflate.mp3', audio_folder + 'BART_explode.mp3', audio_folder + 'BART_collect.mp3', audio_folder + 'silence.mp3'];
video = ['media/vid/Entrevista1.mp4'];



// BETWEEN participants variables ----------------------------------------------
all_conditions = {
  "FONDECYT": {"type": ["Text", "Image"]}
  };
