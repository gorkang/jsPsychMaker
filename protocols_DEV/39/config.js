// Configuration file

// Main parameters -------------------------------------------------------------
pid = 39; //old 22
online = false;
max_participants = 100000000;
random_id = true;
max_time = "24:00:00";
accept_discarded = false;
debug_mode = true; // SHOULD be false in production
language = "Spanish" // spanish or english
finish_link = "" // link at the end of the experiment example "https://app.prolific.co/submissions/complete?cc=000000"

var_researcher_email = `gorkang@gmail.com`;

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent'];
last_tasks = ['Goodbye'];
secuentially_ordered_tasks_1 = ['Bayesian39', 'DEMOGR39', 'BNT', 'DEBRIEF39'];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];

// MEDIA preloading ------------------------------------------------------------

message_str = 'El protocolo está cargando, espera un momento...';

// media to preload in protocol_controller
img_folder = 'media/img/Bayesian39/';


images =  {"Bayesian39": ['VPP_low_Cancer.png', 'VPN_high_Cancer.png',  'VPN_low_Stroke.png', 'VPP_high_Stroke.png', 'instructions1.png', 'instructions2.png', 'phone-rotation.png', 'intro.png']};
audios = {};
videos = {};

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// Conditions for experimental task
all_conditions = {"Bayesian39": {"type": ["Text", "Image", "TextPV"]}};
all_conditions = {"Bayesian39": {"type": ["Image"]}};
