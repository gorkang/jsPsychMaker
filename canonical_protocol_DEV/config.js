// Configuration file

// Main parameters -------------------------------------------------------------
pid = 999; // Protocol ID [number]
online = true; // Protocol runs online [true/false]
max_participants = 3; // Max participants per contition [number]
random_id = false; // Assign random id to participants [true/false]
max_time = "00:13:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production

var_researcher_email = `[[EMAIL investigador/a]]`;


// INTRO [index.html] ----------------------------------------------------------
intro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>' +
  'Para cambiar este texto, edita la variable intro_HTML en config.js<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.gif" name="Chrome" align="bottom" border="0"/></a>';


// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// All the tasks where the order of items is sequential in debug_mode
secuentially_ordered_tasks_1 = ["AIM", "BNT", "STAI", "SWBQ", "WEBEXEC"];

// Between tasks [random order unavoidable]
//secuentially_ordered_tasks_2 = ["FONDECYT", "INFCONS"];

// More randomness
// secuentially_ordered_tasks_3 = ["EmpaTom", "BART"];

// FINAL ARRAY
tasks = ['first_tasks', 'secuentially_ordered_tasks_1',  'last_tasks'];




// MEDIA preloading ------------------------------------------------------------
message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

// media to preload in protocol_controller
img_folder = 'media/img/';
audio_folder = 'media/audio/';

images =  [img_folder + 'VPP_low.png',  img_folder + 'VPP_high.png', img_folder + 'VPN_low.png',  img_folder + 'VPN_high.png', 
          img_folder + 'BART_redBalloon.png',
          img_folder + 'Baby_cerebro_VC.png', img_folder + 'Baby_lactancia_VC.png', img_folder + 'Baby_respiratorios_VC.png', img_folder + 'Baby_UCI_VC.png', img_folder + 'Mother_anestesia_VC.png', img_folder + 'Mother_depresion_VC.png', img_folder + 'Mother_histerectomia_VC.png', img_folder + 'Mother_infeccion_VC.png', img_folder + 'Mother_lesion_VC.png', img_folder + 'Mother_paro_VC.png', img_folder + 'Mother_UCI_VC.png'
          ];
audios = [audio_folder + 'BART_inflate.mp3', audio_folder + 'BART_explode.mp3', audio_folder + 'BART_collect.mp3', audio_folder + 'silence.mp3'];
video = ['media/vid/Entrevista1.mp4'];



// BETWEEN participants variables ----------------------------------------------
all_conditions = {"protocol": {"type": ["survey"]}};
/* all_conditions = {
  "FONDECYT": {"type": ["Text", "Image"]}
  };
  */