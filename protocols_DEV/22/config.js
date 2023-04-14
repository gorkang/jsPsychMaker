// Configuration file

// Main parameters -------------------------------------------------------------
pid = 22;
online = true;
max_participants = 100000000;
random_id = true;
max_time = "24:00:00";
accept_discarded = false;
debug_mode = true; // SHOULD be false in production

var_researcher_email = `gorkang@gmail.com`;

// INTRO [index.html] ----------------------------------------------------------
intro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="media/html/logo-UAI.png" name="UAI" align="bottom" width="200" height="60" border="0"/></p></div>' +
  'Bienvenida/o,<BR><BR>' +
  'La duración de este protocolo es de entre 5 y 10 minutos. Incluye unas pocas preguntas demográficas y 4 casos hipotéticos donde te pedimos que realices recomendaciones.<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::' + var_researcher_email + '>' + var_researcher_email + '</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>';

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent'];
last_tasks = ['Goodbye'];
secuentially_ordered_tasks_1 = ['DEMOGR22', 'Bayesian22', 'BNT', 'DEBRIEF22'];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];

// MEDIA preloading ------------------------------------------------------------

message_str = 'El protocolo está cargando, espera un momento...';

// media to preload in protocol_controller
img_folder = 'media/img/';

images =  [img_folder + 'VPP_low_Cancer.png', img_folder + 'VPN_high_Cancer.png',  img_folder + 'VPN_low_Stroke.png', img_folder + 'VPP_high_Stroke.png',
          img_folder + 'instructions1.png', img_folder + 'instructions2.png', img_folder + 'iphone-rotation-475102.png'];
audios = [];
video = [];

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// Conditions for experimental task
all_conditions = {"Bayesian22": {"type": ["Text", "Image"]}};

