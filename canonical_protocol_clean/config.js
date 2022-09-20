// Configuration file

// Main parameters -------------------------------------------------------------
pid = 999; // Protocol ID [number]
online = false; // Protocol runs online [true/false]
max_participants = 1000; // Max participants per contition [number]
random_id = false; // Assign random id to participants [true/false]
max_time = "24:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production

var_researcher_email = `[[EMAIL investigador/a]]`;


// INTRO [index.html] ----------------------------------------------------------
// Screen where uid is entered
intro_HTML = `<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>Para cambiar este texto, edita la variable intro_HTML en config.js<BR><BR>Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>`;

// Screen after uid is entered (if random_id = true, this is the first screen)
outro_HTML = `<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>Para cambiar este texto, edita la variable outro_HTML en config.js<BR><BR>Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>`;

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

message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

// media to preload in protocol_controller
images =  [/*'media/img/VPP_low.png'*/];
video = [/*'media/vid/Entrevista1.mp4'*/];
audios = [/*'media/audio/BART_inflate.mp3'*/];


// BETWEEN subject variables ----------------------------------------------

// If there is no between-subject task:
all_conditions = {"protocol": {"type": ["survey"]}};

// If there are between-subject tasks:
//all_conditions = {"NAMETASK": {"type": ["Condition1", "Condition2"]}};
