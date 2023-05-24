// Configuration file

// Main parameters -------------------------------------------------------------
pid = 31;
online = true;
max_participants = 100000000;
random_id = true;
max_time = "24:00:00";
accept_discarded = false;
debug_mode = true; // SHOULD be false in production

var_researcher_email = `gorkang@gmail.com`;

// INTRO [index.html] ----------------------------------------------------------
intro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="media/html/logo-UAI.png" name="UAI" align="bottom" width="200" height="60" border="0"/></p></div>' +
  'Wellcome,<BR><BR>' +
  'The duration of this protocol is around 60 minutes. Incluye unas pocas preguntas demográficas y 4 casos hipotéticos donde te pedimos que realices recomendaciones.<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::' + var_researcher_email + '>' + var_researcher_email + '</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>';

outro_HTML = '<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="controllers/media/logo.png" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>' +
  'Para cambiar este texto, edita la variable outro_HTML en config.js<BR><BR>' +
  'Si tienes alguna duda, puedes escribirnos a: <mailto::CORREO@CORREO.COM>CORREO@CORREO.COM</mailto><BR><BR>' +
  'Te recomendamos usar <a href = "https://www.google.com/chrome/">Google Chrome <img src="controllers/media/compatible_chrome.png" name="Chrome" align="bottom" border="0", height="24", width="24"/></a>';

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent', 'Bayesian31'];
last_tasks = ['Goodbye'];
secuentially_ordered_tasks_1 = ['DEMOGR31', 'Bayesian31', 'BNT', 'DEBRIEF31'];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];

// helper messages ------------------------------------------------------------
outro_ending = "<br><br>Presiona el siguiente botón para comenzar."; // Text to show at the end of the outro
message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media
fullscreen_text = 'El experimento entrará en modo pantalla completa.'; // Text to show when fullscreen mode is activated
fullscreen_label = 'Pantalla completa'; // Label of the fullscreen button
max_participants_reached = 'Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.'; // Message when max participants is reached
discarded_time_message = ["<B>Tu cupo caducará en ", " horas ["," minutos].</B>"] // Message when time is running out
discarded_time_message_2 = "Este participante fue descartado del protocolo por superar el tiempo asignado." // Message when time is out
tasks_completed_message = "Ya has completado todas las tareas de este protocolo." // Message when all tasks are completed
tasks_count_message = ["Ya has completado ", " de ", " tareas. <br><br> Para continuar con las ", " últimas tareas, presiona el botón. "] // Message when a number of tasks are completed
exit_fullscreen_message = "Si sales de pantalla completa pueden perderse datos. Por favor, pulsa F11 para volver al experimento." // Message when exiting fullscreen mode
progress_bar_message = 'Porcentaje completado' // Message to show in the progress bar
loading_resources_message = 'Cargando recursos...' // Message to show when loading resources

// mysql controller messages
out_of_slots_message = 'No hay cupos disponibles. <BR>Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>' // Message when there are no more slots available
new_participant_message = 'Nuevo participante. Iniciando experimento... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>' // Message when a new participant is created
status_loading_message = 'Participante encontrado. Cargando estado... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>' // Message when a participant is found
discarded_user_message = 'Tiempo excedido. Recuperando datos de participante... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>' // Message when a participant is discarded
discarded_user_no_time_message = 'El participante ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>' // Message when a participant is discarded because time is out
completed_user_message = 'El participante ya completó el protocolo. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>' // Message when a participant has already completed the protocol
user_not_found_message = "Participante no encontrado" // Message when a participant is not found

//message_str = 'The protocol is loading, it will take a few seconds...';

// media to preload in protocol_controller
img_folder = 'media/images/';

images =  {"Bayesian31": ['VPP_low_Cancer.png', 'VPN_high_Cancer.png',  'VPN_low_Stroke.png', 'VPP_high_Stroke.png',
          'instructions1.png', 'instructions2.png', 'iphone-rotation-475102.png']};
audios = [];
videos = [];

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// Conditions for experimental task
all_conditions = {"Bayesian31": {"type": ["Text", "Image"], "recommendation": ["should", "should not"]}};
