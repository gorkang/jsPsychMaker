// Configuration file

// Main parameters -------------------------------------------------------------
pid = 999; // Protocol ID [number]
online = true; // Protocol runs online [true/false]
max_participants = 1000; // Max participants per contition [number]
random_id = false; // Assign random id to participants [true/false]
max_time = "24:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production

var_researcher_email = `[[EMAIL investigador/a]]`;


// INTRO [index.html] ----------------------------------------------------------
intro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>' +
  'Para cambiar este texto, edita la variable intro_HTML en config.js<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>';

outro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>' +
  'Para cambiar este texto, edita la variable outro_HTML en config.js<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>';

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// Create as many as needed.  The order of the tasks in the arrays starting with "random" will be randomized
randomly_ordered_tasks_1 = ['DEMOGRfondecyt2022E1', 'CIT', 'CRQ', 'CTT', 'ICvsID', 'LSNS', 'MCA', 'MDDF', 'PSC', 'RMET', 'SCGT', 'UCLA', 'CS', 'DEMOGR24', 'ESZ', 'sProQOL', 'ESV', 'PPD', 'CEL', 'DEMOGR27', 'MLQ', 'PERMA', 'CIT', 'CRQ', 'CTT', 'ICvsID', 'LSNS', 'MCA', 'MDDF', 'PSC', 'RMET', 'SCGT', 'UCLA', 'Bank', 'CEL', 'ConsentHTML', 'CS', 'DEMOGR12', 'DEMOGR24', 'DEMOGR27', 'DEMOGR3', 'ESZ', 'fauxPasEv', 'FORM4', 'FORM5', 'GBS', 'LoB', 'MDMQ', 'MLQ', 'PERMA', 'RMET', 'sProQOL'];
secuentially_ordered_tasks_1 = ['IDQ', 'REI40']; // Block of tasks in sequential order

// FINAL ARRAY of tasks [build combining the above blocks]
  // tasks SHOULD contain an array of strings. GOOD: tasks = ['my_tasks']; BAD: tasks = [my_tasks];
tasks = ['first_tasks', 'randomly_ordered_tasks_1', 'last_tasks'];



// MEDIA preloading ------------------------------------------------------------

message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

// media to preload in protocol_controller
img_folder = 'media/img/';
audio_folder = 'media/audio/';

images =  [/*img_folder + 'VPP_low.png'*/];
audios = [/*audio_folder + 'BART_inflate.mp3'*/];
video = [/*'media/vid/Entrevista1.mp4'*/];



// BETWEEN subject variables ----------------------------------------------

// If there is no between-subject task:
all_conditions = {"protocol": {"type": ["survey"]}};

// If there are between-subject tasks:
//all_conditions = {"NAMETASK": {"type": ["Condition1", "Condition2"]}};
