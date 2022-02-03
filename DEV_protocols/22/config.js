// Configuration file

// Main parameters -------------------------------------------------------------
pid = 22; // Protocol ID [number]
online = true; // Protocol runs online [true/false]
max_participants = 100000000; // Max participants per contition [number]
random_id = true; // Assign random id to participants [true/false]
max_time = "24:00:00"; // Max time to complete the protocol [HH:MM:SS]
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots) [true/false]
debug_mode = true; // SHOULD be false in production

var_researcher_email = `gorkang@edu.uai.cl`;

// INTRO [index.html] ----------------------------------------------------------
intro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="media/html/logo-UAI.png" name="UAI" align="bottom" width="200" height="60" border="0"/></p></div>' +
  'Bienvenida/o,<BR><BR>' +
  'La duración de este protocolo es de unos 5 minutos. Incluye unas pocas preguntas demográficas y 4 casos hipotéticos donde te pedimos que realices recomendaciones.<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::gorkang@edu.uai.cl>gorkang@edu.uai.cl</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>';

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent']; // First tasks (in sequential order)
last_tasks = ['Goodbye']; // Last tasks (in sequential order)

// Create as many as needed.  The order of the tasks in the arrays starting with "random" will be randomized
//randomly_ordered_tasks_1 = ['']; // Block of tasks in random order
secuentially_ordered_tasks_1 = ['FONDECYT2022E1', 'DEMOGRfondecyt2022E1', 'BNT']; // Block of tasks in sequential order

// FINAL ARRAY of tasks [build combining the above blocks]
  // tasks SHOULD contain an array of strings. GOOD: tasks = ['my_tasks']; BAD: tasks = [my_tasks];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];

// MEDIA preloading ------------------------------------------------------------

message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

// media to preload in protocol_controller
img_folder = 'media/img/';

images =  [img_folder + 'VPP_low_Cancer.png', img_folder + 'VPN_high_Cancer.png',  img_folder + 'VPN_low_Stroke.png', img_folder + 'VPP_high_Stroke.png',
          img_folder + 'instructions1.png', img_folder + 'instructions2.png', img_folder + 'iphone-rotation-475102.png'];
audios = [];
video = [];

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// If there is no between-subject task:
//all_conditions = {"protocol": {"type": ["survey"]}};

// If there are between-subject tasks:
all_conditions = {"FONDECYT2022E1": {"type": ["Text", "Image"]}};

