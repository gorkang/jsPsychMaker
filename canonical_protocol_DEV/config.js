// Configuration file

// Main parameters -------------------------------------------------------------

pid = 999999; // ProtocolID
online = true; // Protocol runs online? true/
max_participants = 3; // Max participants per contition
random_id = false;
max_time = "00:00:20"; // Max time to complete the protocol
accept_discarded = true; // If an user is discarded (out of time), should be allow her to continue? (given there are free slots)


// ORDER OF TASKS --------------------------------------------------------------

//first_tasks = ['DEMOGR', 'PRFBM', 'HRPVB','INFCONS','BNT']; // First tasks
// falta el caso de tareas full random
randomly_ordered_tasks = ['']; // First tasks
first_tasks = [
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
"WEBEXEC"]; // Tasks randomly ordered in between
last_tasks = ['']; // Last tasks


//tasks = [first_tasks, randomly_ordered_tasks, last_tasks]
tasks = [first_tasks]


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
