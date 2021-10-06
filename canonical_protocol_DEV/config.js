// Configuration file

// Main parameters -------------------------------------------------------------

pid = 999999; // ProtocolID
online = true; // Protocol runs online? true/
max_participants = 3; // Max participants per contition
random_id = false;
max_time = "00:00:20"; // Max time to complete the protocol
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots)


// ORDER OF TASKS --------------------------------------------------------------

// REVIEW: puse Consent hardcoded en el index.html
//first_tasks = ['DEMOGR', 'PRFBM', 'HRPVB','INFCONS','BNT']; // First tasks
// falta el caso de tareas full random
first_tasks = ['Consent']; // First tasks
randomly_ordered_tasks = []; // Tasks randomly ordered in between
last_tasks = ['Goodbye']; // Last tasks


tasks = ['FONDECYT', first_tasks, 'FONDECYT', last_tasks]

// MEDIA preloading ------------------------------------------------------------

message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media

img_folder = 'media/img/'; // media to preload in protocol_controller
images = [img_folder + 'VPP_low.png',  img_folder + 'VPP_high.png', img_folder + 'VPN_low.png',  img_folder + 'VPN_high.png', ];
audio = [];
video = [];

all_conditions = {
  "FONDECYT": {"type": ["Text", "Image"]}
  //"INFCONS": ["control", "text", "pictorial"]
};


// BETWEEN PARTICIPANTS tasks parameters --------------------------------------
/*
const conditions = [
  { id_protocol: pid, condition_name: "control", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"},
  { id_protocol: pid, condition_name: "text", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"},
  { id_protocol: pid, condition_name: "pictorial", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"}
]*/

// REVIEW: He movido a index.html y automatizado la creacion de tasks.
