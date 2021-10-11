// css_loading.js -------------------------------------------------------------

// detection for touchscreen, used for css selection
var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
  } else if ('orientation' in window) {
      hasTouchScreen = true; // deprecated, but good fallback
  } else {
      // Only as a last resort, fall back to user agent sniffing
      var UA = navigator.userAgent;
      hasTouchScreen = (
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      );
  }
}
/*
// se agrega el css específico para el caso de phone o pc
window.onload = function() {
  link=document.createElement('link');
  link.rel='stylesheet';
  link.type = 'text/css';
  if (!hasTouchScreen) {
    link.href='controllers/css/style.css';
  } else {
    link.href='controllers/css/style_phone.css';
  }
  document.getElementsByTagName('head')[0].appendChild(link);
}*/




// config_controller.js -------------------------------------------------------------

onkeydown = function block_fkeys(event){
  var x = event.which || event.keyCode;
  if(x == 112 || x == 116){ //blocks f1 and f5 keys
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

// limpieza de arrays dentro de arrays
function flatten(arr) {

  let final_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('random')) {
      final_arr = final_arr.concat(jsPsych.randomization.shuffle(window[arr[i]]));
    } else {
      final_arr = final_arr.concat(window[arr[i]]);
    }
  }
  return final_arr;
}

// Parameters - Do not change ----------------------------------

let params = new URLSearchParams(location.search);
uid = -1;
uid_external = -1;

iterations_for_review = 1; // usado para bloquear el experimento en caso de que se superen todas las condiciones

between_selection = {};
within_selection = {};
completed_experiments = [];
user_assigned = false;

actual_condition_data = [];

// Create condition Array for DB
var conditions = []
Object.entries(all_conditions).forEach(([task_name, condition_dict]) => {
  Object.entries(condition_dict).forEach(([key, conditions_temp]) => {
    for(var i=0; i < conditions_temp.length; i++) { conditions.push({ id_protocol: pid, condition_key: key, condition_name: conditions_temp[i], assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: task_name, type: "between"}) }
  })
})

// obtaining final array
all_tasks = flatten(tasks);


// Create tasks Array for DB
var tasks = [];
for(var i= 0; i < all_tasks.length; i++) {
  tasks.push({ id_protocol: pid, task_name: all_tasks[i]});
}

/*
// Use IndexedDB or MySQL for offline or online protocols
if (online) {
  start_mysqldb(pid, max_participants);
  load_clean_mysql(iterations_for_review, max_participants);
} else {
  load_clean_indexeddb(iterations_for_review, max_participants);
}
*/


// save_data.js -------------------------------------------------------------

// funcion usada para almacenar la data, se usa en el call-function (último item) de cada task
function saveData(data, online, name, version = 'original') {
  // almacenamiento de la data en el caché del sistema
  completed_task_storage(jsPsych.data.get().filter({procedure: name}).csv(), name);

  if (online) {
    var xhr = new XMLHttpRequest();
    // el false es para que funcione de manera sincrónica
    xhr.open('POST', 'controllers/php/write_data.php', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({short_name: name, filedata: data, user_id: uid_external, project_code: pid, version: version}));
  } else {

    // obtención de data
    data = jsPsych.data.get().filter({procedure: name}).csv();
    // creación de uri y objetos html
    var encodedUri = encodeURI("data:text/csv;charset=utf-8," + data);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);

    // obtención de fecha, el slice es para asegurarnos que hayan 2 dígitos en cada elemento
    actual_time = (new Date().toISOString().slice(0, 19)).replaceAll(":","");

    if (uid_external != -1)
      csv_name = pid + "_" + name + "_" + version + "_" + actual_time + "_" + uid_external + ".csv";
    else
      csv_name = pid + "_" + name + "_" + version + "_" + actual_time + "_" + uid + ".csv";

    link.setAttribute("download", csv_name);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  }
}



// script_loading.js -------------------------------------------------------------

// carga de todos los scripts de un array de una carpeta específica
function script_loading(folder, array, completed_experiments = [], new_element = false, index = 0) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = false;

  if (folder != "")
    script.src = folder + "/";
  script.src += array[index] + ".js";

	document.getElementsByTagName("head")[0].appendChild(script);

	if (index < array.length - 1) {
		script.onload = script_loading(folder, array, completed_experiments, new_element, index + 1);
	} else if (index == array.length - 1 && folder == "tasks") {
		script.onload = function () {
			if (experiment_blocked)
				alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
			else {
				questions = obtain_experiments(questions, completed_experiments);
				continue_page_activation(completed_experiments, questions);
			}
		};
	}
}
