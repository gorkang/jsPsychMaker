// Configuration file

// Main parameters -------------------------------------------------------------
pid = 999999; // Protocol ID [number]
online = false; // Protocol runs online [true/false]
max_participants = 30; // Max participants per contition [number]
random_id = false; // Assign random id to participants [true/false]
max_time = "24:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]


// ORDER OF TASKS --------------------------------------------------------------
/*
first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// Create as many as needed
randomly_ordered_tasks_1 = ['FONDECYT']; // Block of tasks in random order
secuentially_ordered_tasks_1 = ['']; // Block of tasks in sequential order

// Final array of tasks [build combining the above blocks]
  // The order of the tasks in the arrays starting with "random" will be randomized
tasks = ['first_tasks', 'randomly_ordered_tasks_1', 'last_tasks']
*/

ALL_tasks = [
"Consent",
"AIM",
//"BART",
"BNT",
"bRCOPE",
"CAS",
"Cov19Q",
"COVIDCONTROL",
"CRS",
"CRT7",
"CRTMCQ4",
"CRTv",
"DASS21",
"DEBRIEF",
"DEMOGR",
"EAR",
"EmpaTom",
"ERQ",
"ESM",
"FDMQ",
"GHQ12",
"Goodbye",
"HRPVB",
"HRPVBpost",
"IDQ",
"IEC",
"INFCONS",
"IRI",
"IRS",
"MIS",
"OBJNUM",
"OTRASRELIG",
"PBS",
"PRFBM",
"PRFBMpost",
"PSETPP",
"PSPPC",
"PSS",
"PVC",
"PWb",
"REI40",
"Report",
"RSS",
"RTS",
"SASS",
"SBS",
"SCSORF",
"SDG",
"SRA",
"SRBQP",
"SRSav",
"SWBQ",
"WEBEXEC"];


tasks = ['ALL_tasks'];

// MEDIA preloading ------------------------------------------------------------
message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

// media to preload in protocol_controller
img_folder = 'media/img/';
images = [img_folder + 'VPP_low.png',  img_folder + 'VPP_high.png', img_folder + 'VPN_low.png',  img_folder + 'VPN_high.png', ];
audio = [];
video = ['media/vid/Entrevista1.mp4'];



// BETWEEN participants variables ----------------------------------------------
all_conditions = {
  "FONDECYT": {"type": ["Text", "Image"]}
  };

// INTRO [index.html] ----------------------------------------------------------
intro = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="media/img/logo-trans-UAI.png" name="UAI" align="bottom" width="185" height="47" border="0"/></p></div>' +
  'LA INTRO DEBERIA SER TAMBIEN UNA VARIABLE DEL config.js?<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: CORREO<BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="media/img/compatible_chrome.gif" name="Chrome" align="bottom" border="0"/></a> para continuar.';
