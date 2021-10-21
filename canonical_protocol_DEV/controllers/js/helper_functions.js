
if (debug_mode === true) console.warn("helper_functions()");

// CHECKS ----------------------------------------------------------------------

  // Online mode while running locally
   URL_web = window.location.href;
   if (URL_web.startsWith("file:///") & online === true) alert("ERROR: You are running locally but online = true [see config.js]");

   // Offline mode while running on server
   URL_web = window.location.href;
   if (URL_web.startsWith("http") & online === false) alert("ERROR: You are running on a server but online = false [see config.js]");

// ----------------------------------------------------------------------------



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
var conditions = [];
Object.entries(all_conditions).forEach(([task_name, condition_dict]) => {
  Object.entries(condition_dict).forEach(([key, conditions_temp]) => {
    for(var i=0; i < conditions_temp.length; i++) { conditions.push({ id_protocol: pid, condition_key: key, condition_name: conditions_temp[i], assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: task_name, type: "between"}) }
  });
});

// obtaining final array
all_tasks = flatten(tasks);


// Create tasks Array for DB
var tasks = [];
for(var i= 0; i < all_tasks.length; i++) {
  tasks.push({ id_protocol: pid, task_name: all_tasks[i]});
}




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
};

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



// save_data.js -------------------------------------------------------------

// funcion usada para almacenar la data, se usa en el call-function (último item) de cada task
function saveData(data, online, name, version = 'original') {

  if (debug_mode === true) console.warn("saveData()");

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

// Load all experiments in a folder included in an array
// REVIEW: Explicar que hace 'new_element' e 'index'
function script_loading(folder, array, completed_experiments = [], new_element = false, index = 0) {

  // if (debug_mode === true) console.warn("script_loading()");

	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = false;

  if (folder !== "")
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


// protocol_controller.js -------------------------------------------------------------

function date_to_mil(date) {
  elements = date.split(":");
  secs = 0;
  for (var i = 0; i < elements.reverse().length; i++) {
    secs += elements[i]*(60**i);
  }
  return secs;
}

function check_fullscreen(task_name) {
  return ({
    timeline: [{
      type: 'fullscreen',
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: task_name}
    }],
    data: {procedure: task_name},
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    }
  });
}



function call_function(task_name) {

  questions.push({
      type: 'call-function',
      data: {trialid: task_name + '_000', procedure: task_name},
      func: function(){
        if (online) {
          var data = jsPsych.data.get().filter({procedure: task_name}).csv();
        } else {
          var data = jsPsych.data.get().filter({procedure: task_name}).json();
        }
        saveData(data, online, task_name);
      }
  });

}


// En caso que haya data almacenada esta funcion se preocupa de manejar lo que muestra el index y cuando iniciar el protocolo
function continue_page_activation(completed_experiments, questions, completed = false, discarded = false){

  if (debug_mode === true) console.warn("continue_page_activation()");

  input_uid = document.getElementById('input_uid');
  check = document.getElementById('check');
  start = document.getElementById('start');

  // Time variables
  actual_time = new Date().toISOString().slice(0, 19);
  max_sec = date_to_mil(max_time);
  if (typeof user_start_date == 'undefined') user_start_date = ""
  DBtime = user_start_date;
  seconds_since_start = (new Date(actual_time) - new Date(DBtime))/1000;
  hours_until_discarded = Math.round(((max_sec - seconds_since_start)/3600  + Number.EPSILON) * 100) / 100;
  minutes_until_discarded = Math.round(((max_sec - seconds_since_start)/60  + Number.EPSILON));
  discard_time_message = " <B>Tu cupo caducará en " + hours_until_discarded + " horas [" + minutes_until_discarded + " minutos].</B>";


  // se selecciona el texto a mostrar y si es que se muestra o no el botón para continuar con el protocolo en el punto en el que quedó
  if (completed_experiments.length !== 0 && questions.length !== 0) {
    text_input_uid.innerHTML = "Ya has completado " + (completed_experiments.length).toString() + " de " + (all_tasks.length).toString() + " tareas. <br><br> Para continuar con las " + (all_tasks.length - completed_experiments.length).toString() + " últimas tareas, presiona el botón. " + discard_time_message;
    start.hidden = false;
    start.removeAttribute("style");
  } else if ((completed_experiments.length == all_tasks.length) || completed) {
    text_input_uid.innerHTML = "Ya has completado todas las tareas de este protocolo.";
  } else if (discarded && !accept_discarded) {
    text_input_uid.innerHTML = "Este participante fue descartado del protocolo por superar el tiempo asignado.";
  } else { // New participant
    text_input_uid.innerHTML = (intro_HTML).concat("<br><br>Presiona el siguiente botón para comenzar.");
    start.hidden = false;
    start.removeAttribute("style");
  }
}

// filtrador de elementos por questions["procedure"]
function obtain_experiments(questions, completed_experiments){

  if (debug_mode === true) console.warn("obtain_experiments() [[ completed_experiments: " + completed_experiments.length + " || questions_before: " + questions.length + " ]]");

    // se filtran los experimentos completados para obtener los faltantes
  acceptedValues = all_tasks.filter( function( element ) {
    return !completed_experiments.includes( element );
  } );

  if (debug_mode === true) console.warn("obtain_experiments(): [[ " + acceptedValues.length + " ]]");

  // se crea el array con los elementos no completados
    // REVIEW: ADD CHECK WITH AN INFORMATIVE MESSAGE FOR WHEN PROCEDURE IS NOT PRESENT
    //Uncaught TypeError: Cannot read properties of undefined (reading 'procedure') LINE acceptedValues.includes(questions[e].data.procedure)
  var questions = Object.keys(questions).reduce(function(r, e) {
    if (acceptedValues.includes(questions[e].data.procedure)) {
      r[e] = questions[e];
    }
    return r;
  }, []);

  // se limpia el array de los elementos vacios
  var questions = questions.filter(function (el) {
    return el !== null;
  });

  if (debug_mode === true) console.warn("obtain_experiments() [[ questions_after: " + questions.length + " ]]");

  return questions;
}


// funcion de jspysch para lanzar un experimento (recibe la lista completa de questions)
function start_protocol(questions){

  if (debug_mode === true) console.warn("start_protocol()");

  // Preload ----------------------------------------------------
  // con el arreglo de questions finalizado se pueden agregar restricciones extras, como el precargado de imágenes (son definidas en index):
  var preload = {
    type: 'preload',
    show_progress_bar: true,
    auto_preload: true, // Does not work
    message: 'Cargando imágenes...',
    images: images,
    audios: audios,
    video: video
  };
  //questions.unshift({type: 'preload', images: images, audios: audios, video: video});
  questions.unshift(preload);


  // REVIEW: This is called when the experiment ends (?)
  // Store data in database (csv) ----------------------------------
  questions.push({
    type: 'call-function',
    func: function () {
      if (online === false) {
        start_indexeddb().then(function(db) {
          updateIndexed("user", uid, "status", "completed", db);

          findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(user_conditions) {
            for (var i = 0; i < user_conditions.length; i++) {
              updateIndexed("condition", user_conditions[i].id_condition, "completed_protocol", "+", db);
            }
          }, function() {console.log("final update user_condition table not found");});
        }, function() {
          console.log("db not loaded");
        });
      } else if (online === true) {
        XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "completed"}});
        XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"completed_protocol": "completed_protocol + 1"}});
          }
      console.warn('start_protocol() | UPDATE | status: completed, completed_protocol + 1 | call-funcion END of protocol');

        }, function() {console.log("final update user_condition table not found");});
      }
    }
  });

  questions.push({
    type: 'fullscreen',
    fullscreen_mode: false
  });

// jsPsych.init ---------------------------------------

  jsPsych.init({
    timeline: questions,
    override_safe_mode: true,
    show_progress_bar: true,
    message_progress_bar: 'Porcentaje completado',
    fullscreen: true,
    on_interaction_data_update: function(data){
      if (data.event == 'fullscreenexit'){
        alert("Si sales de pantalla completa pueden perderse datos. Por favor, pulsa F11 para volver al experimento.");
      }}
  });

}


// flattenObject -------------------------------------------------------------

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }

    return toReturn;
    //JSON.stringify(flattenObject());
}
