// Configuration file

// Main parameters -------------------------------------------------------------

pid = 999; // ProtocolID
online = false; // Protocol runs online? true/
max_participants = 100; // Max participants per contition

max_time = "10:10:00"; // Max time to complete the protocol
accept_discarded = false; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots)


// ORDER OF TASKS --------------------------------------------------------------

// REVIEW: puse Consent hardcoded en el index.html
//first_tasks = ['DEMOGR', 'PRFBM', 'HRPVB','INFCONS','BNT']; // First tasks
first_tasks = ['HRPVB', 'DEMOGR', 'BNT']; // First tasks
randomly_ordered_tasks = []; // Tasks randomly ordered in between
last_tasks = ['Goodbye']; // Last tasks


// MEDIA preloading ------------------------------------------------------------

message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

img_folder = 'media/img/'; // media to preload in protocol_controller
images = [img_folder + 'Baby_cerebro_VC.png',  img_folder + 'Baby_lactancia_VC.png',  img_folder + 'Baby_respiratorios_VC.png',  img_folder + 'Baby_UCI_VC.png',  img_folder + 'Mother_anestesia_VC.png',  img_folder + 'Mother_depresion_VC.png',  img_folder + 'Mother_histerectomia_VC.png',  img_folder + 'Mother_infeccion_VC.png',  img_folder + 'Mother_lesion_VC.png',  img_folder + 'Mother_paro_VC.png',  img_folder + 'Mother_UCI_VC.png'];
audio = [];
video = [];


// BETWEEN PARTICIPANTS tasks parameters --------------------------------------

const conditions = [
  { id_protocol: pid, condition_name: "control", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"},
  { id_protocol: pid, condition_name: "text", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"},
  { id_protocol: pid, condition_name: "pictorial", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"}
]

// REVIEW: He movido a index.html y automatizado la creacion de tasks.
