if (debug_mode === true) console.warn("helper_functions()");

// CHECKS ----------------------------------------------------------------------

  // Online mode while running locally
  URL_web = window.location.href;
  if (URL_web.startsWith("file:///") & online === true) alert("ERROR: You are running locally but online = true [see config.js]");

  // Offline mode while running on server
  URL_web = window.location.href;
  if (URL_web.startsWith("http") & online === false) alert("ERROR: You are running on a server but online = false [see config.js]");

  // Verify if .data folder exists
  file_reader();

// ----------------------------------------------------------------------------

// Parameters - Do not change ----------------------------------

let params = new URLSearchParams(location.search);
uid = -1;
uid_external = -1;

iterations_for_review = 1; // usado para bloquear el experimento en caso de que se superen todas las condiciones

between_selection = {};
within_selection = {};
task_id_container = {};
completed_experiments = [];
user_assigned = false;

actual_condition_data = [];

// Create condition Array for DB
var conditions = [];
Object.entries(all_conditions).forEach(([task_name, condition_dict]) => {
  Object.entries(condition_dict).forEach(([key, conditions_temp]) => {
    for (var i = 0; i < conditions_temp.length; i++) { conditions.push({ id_protocol: pid, condition_key: key, condition_name: conditions_temp[i], assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: task_name, type: "between" }) }
  });
});

// obtaining final array
all_tasks = flatten(tasks);

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

function file_reader(wait_for_response = false) {
  return new Promise(
    function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          response = xhr.responseText;
          if (debug_mode === true) console.warn(response);
          resolve(response);
        }
      };

      // By default perform asynchronous calls.
      if (wait_for_response === true) {
        xhr.open('POST', 'controllers/php/read_data.php', false);
      } else {
        xhr.open('POST', 'controllers/php/read_data.php');
      }

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send();
    }
  );
}


// config_controller.js -------------------------------------------------------------

onkeydown = function block_fkeys(event) {
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) { //blocks f1 and f5 keys
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
  completed_task_storage(name);

  if (online) {
    var xhr = new XMLHttpRequest();
    // el false es para que funcione de manera sincrónica
    xhr.open('POST', 'controllers/php/write_data.php', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ short_name: name, filedata: data, user_id: uid_external, project_code: pid, version: version }));
  } else {

    // obtención de data
    data = jsPsych.data.get().filter({ procedure: name }).csv();
    // creación de uri y objetos html
    var encodedUri = encodeURI("data:text/csv;charset=utf-8," + data);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);

    // obtención de fecha, el slice es para asegurarnos que hayan 2 dígitos en cada elemento
    actual_time_csv = (new Date().toISOString().slice(0, 19)).replaceAll(":", "");

    if (uid_external != -1)
      csv_name = pid + "_" + name + "_" + version + "_" + actual_time_csv + "_" + uid_external + ".csv";
    else
      csv_name = pid + "_" + name + "_" + version + "_" + actual_time_csv + "_" + uid + ".csv";

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
    // change: jumping first load of questions
    if (index == 0 && completed_experiments.length === 0) {
      continue_page_activation([], []);
    } else {
      script.onload = script_loading(folder, array, completed_experiments, new_element, index + 1);
    }
  } else if (index == array.length - 1 && folder == "tasks") {
    script.onload = function () {
      if (experiment_blocked) {
        alert(max_participants_reached);
      } else if (completed_experiments.length !== 0) {
        questions = obtain_experiments(questions, completed_experiments);
        continue_page_activation(completed_experiments, questions);
      } else {
        questions = obtain_experiments(questions, completed_experiments);
      }
    };
  }
}

// protocol_controller.js -------------------------------------------------------------

function date_to_mil(date) {
  elements = date.split(":");
  secs = 0;
  for (var i = 0; i < elements.reverse().length; i++) {
    secs += elements[i] * (60 ** i);
  }
  return secs;
}

function check_fullscreen(task_name) {
  return ({
    timeline: [{
      type: 'fullscreen',
      message: '<p>' + fullscreen_text + '</p>',
      button_label: fullscreen_label,
      delay_after: 0,
      fullscreen_mode: true,
      data: { procedure: task_name }
    }],
    data: { procedure: task_name },
    conditional_function: function () {
      let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || !(Math.abs(screen.width - window.innerWidth) > 40 || Math.abs(screen.height - window.innerHeight) > 40);
      if (!fullscreenElement)
        return true;
      else
        return false;
    }
  });
}

function call_function(task_name) {
  questions.push({
    type: 'call-function',
    data: { trialid: task_name + '_000', procedure: task_name },
    func: function () {
      if (online) {
        var data = jsPsych.data.get().filter({ procedure: task_name }).csv();
      } else {
        var data = jsPsych.data.get().filter({ procedure: task_name }).json();
      }
      saveData(data, online, task_name);
    }
  });
}

// En caso que haya data almacenada esta funcion se preocupa de manejar lo que muestra el index y cuando iniciar el protocolo
function continue_page_activation(completed_experiments, questions, completed = false, discarded = false) {

  if (debug_mode === true) console.warn("continue_page_activation()");

  input_uid = document.getElementById('input_uid');
  check = document.getElementById('check');
  start = document.getElementById('start');

  // Time variables
  actual_time = new Date().toISOString().slice(0, 19);
  max_sec = date_to_mil(max_time);
  if (typeof user_start_date == 'undefined') user_start_date = ""
  DBtime = user_start_date.replace(" ", "T");
  seconds_since_start = (new Date(actual_time) - new Date(DBtime)) / 1000;
  hours_until_discarded = Math.round(((max_sec - seconds_since_start) / 3600 + Number.EPSILON) * 100) / 100;
  minutes_until_discarded = Math.round(((max_sec - seconds_since_start) / 60 + Number.EPSILON));
  discard_time_message = discarded_time_message[0] + hours_until_discarded + discarded_time_message[1] + minutes_until_discarded + discarded_time_message[2];

  // se selecciona el texto a mostrar y si es que se muestra o no el botón para continuar con el protocolo en el punto en el que quedó
  if (completed_experiments.length !== 0 && questions.length !== 0) {
    text_input_uid.innerHTML = tasks_count_message[0] + (completed_experiments.length).toString() + tasks_count_message[1] + (all_tasks.length).toString() + tasks_count_message[2] + (all_tasks.length - completed_experiments.length).toString() + tasks_count_message[3] + discard_time_message;
    start.hidden = false;
    start.removeAttribute("style");
  } else if ((completed_experiments.length == all_tasks.length) || completed) {
    text_input_uid.innerHTML = tasks_completed_message;
  } else if (discarded && !accept_discarded) {
    text_input_uid.innerHTML = discarded_time_message_2;
  } else { // New participant
    text_input_uid.innerHTML = (outro_HTML).concat(outro_ending);
    start.hidden = false;
    start.removeAttribute("style");
  }
}

// filtrador de elementos por questions["procedure"]
function obtain_experiments(questions, completed_experiments) {

  if (debug_mode === true) console.warn("obtain_experiments() [[ completed_experiments: " + completed_experiments.length + " || questions_before: " + questions.length + " ]]");

  // se filtran los experimentos completados para obtener los faltantes
  acceptedValues = all_tasks.filter(function (element) {
    return !completed_experiments.includes(element);
  });

  if (online) {
    load_tasks_ids(acceptedValues);
  }

  if (debug_mode === true) console.warn("obtain_experiments(): [[ " + acceptedValues.length + " ]]");

  // se crea el array con los elementos no completados
  // REVIEW: ADD CHECK WITH AN INFORMATIVE MESSAGE FOR WHEN PROCEDURE IS NOT PRESENT
  //Uncaught TypeError: Cannot read properties of undefined (reading 'procedure') LINE acceptedValues.includes(questions[e].data.procedure)
  var questions = Object.keys(questions).reduce(function (r, e) {
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

  // change: completed participant, at the end of experiment
  questions.push({
    type: 'call-function',
    func: function () {
      if (online === false) {
        start_indexeddb().then(function (db) {
          updateIndexed("user", uid, "status", "completed", db);

          findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function (user_conditions) {
            for (var i = 0; i < user_conditions.length; i++) {
              updateIndexed("experimental_condition", user_conditions[i].id_condition, "completed_protocol", "+", db);
            }
          }, function () { console.log("final update user_condition table not found"); });
        }, function () {
          console.log("db not loaded");
        });
      } else if (online === true) {
        XMLcall("updateTable", "user", { id: { "id_user": uid }, data: { "status": "completed" } });
        XMLcall("findAll", "user_condition", { keys: ["id_user"], values: [uid] }).then(function (user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", { id: { "id_condition": user_conditions[i].id_condition }, data: { "completed_protocol": "completed_protocol + 1" } });
          }
          if (debug_mode === true) console.warn('start_protocol() | UPDATE | status: completed, completed_protocol + 1 | call-funcion END of protocol');

        }, function () { console.log("final update user_condition table not found"); });
      }
    }, data: {
      procedure: "Goodbye"
    }
  });

  questions.push({
    type: 'fullscreen',
    fullscreen_mode: false,
    data: {
      procedure: 'Goodbye',
    }
  });

  if (completed_experiments.length == 0) {
    // questions at the end of consent
    for (actual_question of questions) {
      jsPsych.addNodeToEndOfTimeline({
        timeline: [actual_question]
      })
    }
    document.getElementById('jspsych-instructions-next').disabled = false;
  } else {
    // otherwise, we add the questions repleacing the actual array
    questions_consent = questions
  }

  const hasDuplicates = array => new Set(array).size < array.length;

  if (hasDuplicates(questions)) console.warn("Este array de questions tiene tareas repetidas")

  return questions;
}

// combination selector and script loader for all the tasks after consent
function consent_script_selector() {
  // fixes when feasible_combinations isn't defined
  if (typeof feasible_combinations === 'undefined') feasible_combinations = combinations_from_dict(all_conditions);
  
  // if more than 1 condition
  if (!(Object.keys(all_conditions).length == 1 && Object.keys(all_conditions[Object.keys(all_conditions)[0]]).length == 1)) {
    select_combination(feasible_combinations).then(
      function (actual_combination) {
        for (actual_task_name in all_conditions) {
          for (actual_condition_key in all_conditions[actual_task_name]) {
            for (actual_condition_name of all_conditions[actual_task_name][actual_condition_key]) {
              if (actual_combination.includes(actual_condition_name)) {
                between_selection[actual_task_name][actual_condition_key] = actual_condition_name;
              }
            }
          }
        }
        // starting from index 1 (after consent) with the new conditions, we send index == 1, so we don't use continue_page_activation
        script_loading("tasks", all_tasks, completed_experiments, false, 1);
      }
    )
  } else {
    script_loading("tasks", all_tasks, completed_experiments, false, 1);
  }
}

function object_to_array(selected_object) {

  temp_dict = window[selected_object];

  let final_array = Object.keys(temp_dict).map(function (key) {
    temp_array = []
    for (element of temp_dict[key]) temp_array.push('media/' + selected_object + "/" + key + "/" + element)
    return temp_array
  }).flat(1);

  return final_array
}

// funcion de jspysch para lanzar un experimento (recibe la lista completa de questions)
function start_protocol() {

  if (debug_mode === true) console.warn("start_protocol()");

  // se mapea object de imagenes a array
  images_array = object_to_array("images");
  audios_array = object_to_array("audios");
  videos_array = object_to_array("videos");

  // jsPsych.init ---------------------------------------

  jsPsych.init({
    timeline: questions_consent,
    override_safe_mode: true,
    show_progress_bar: true,
    message_progress_bar: progress_bar_message,
    fullscreen: true,
    exclusions: {
      // change to true if is necessary
      audio: false
    },
    on_interaction_data_update: function (data) {
      if (data.event == 'fullscreenexit' & !hasTouchScreen && !(jsPsych.currentTrial().data.procedure == "Goodbye")) {
        alert(exit_fullscreen_message);
      }
    },
    on_finish: function (data) {
      if (typeof finish_link !== "undefined")
        if (finish_link != "" && data.values().filter(x => x.procedure === "Goodbye").length > 0)
          window.location = finish_link
    },
  });

}

// prevent right click on certains questions
function prevent_right_click(e) {
  e.preventDefault();
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

// image_zoom controller ------------------------------------------------------

function image_zoom() {
  button_change = false;
  let imgs = document.querySelectorAll('img');

  for (var i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    if (img) {
      if (img.classList.contains("image_zoom")) {

        // Por defecto, el boton Siguiente esta deshabilitado hasta que no se haga click en imagen
        if (!button_change) {

          // While testing, do not disable. Monkeys are not ready yet
          disable_button = true
          if (debug_mode == true) disable_button = disable_button_interaction
          if (debug_mode == false && disable_button_interaction == true) console.warn('disable_button_interaction only works when debug_mode == true')

          document.querySelector("[id$=next]").disabled = disable_button;
          document.querySelector("[id$=next]").title = text_error_zoom;
          button_change = true;

          fail_message_div = document.createElement('div')
          fail_message_div.className="fail-message"
          fail_message_div.innerHTML= '<span style="color: red; padding-left: 8px; font-size: 16px" class="required">' + text_error_zoom + '</span>'

          document.querySelector("[id$=next]").parentNode.appendChild(fail_message_div);
        }

        if (zoom_type == 'Intense') {
          Intense(img);
        } else if (zoom_type == 'fullPage') {
          if (!(document.querySelector('#fullpage'))) {
            // Crear el contenedor principal
            const mainContainer = document.createElement("div");
            mainContainer.id = "fullpage";
            mainContainer.style.display = "none"; // Inicialmente oculto
            mainContainer.style.position = "fixed";
            mainContainer.style.top = "0";
            mainContainer.style.left = "0";
            mainContainer.style.width = "100%";
            mainContainer.style.height = "100%";
            mainContainer.style.backgroundColor = "black";
            mainContainer.style.zIndex = "999";
            mainContainer.style.alignItems = "center";
            mainContainer.style.justifyContent = "center";
            mainContainer.style.flexDirection = "column";
            mainContainer.setAttribute("onclick", "this.style.display='none';");

            // Crear el div de la imagen con fondo
            const imageDiv = document.createElement("div");
            imageDiv.style.flex = "1";
            imageDiv.style.display = "flex";
            imageDiv.style.alignItems = "center";
            imageDiv.style.justifyContent = "center";
            imageDiv.style.backgroundSize = "contain";
            imageDiv.style.backgroundRepeat = "no-repeat";
            imageDiv.style.backgroundPosition = "center"; // Centrar la imagen en el div
            imageDiv.style.width = "inherit";

            // Crear el div del texto con fondo negro
            const textDiv = document.createElement("div");
            textDiv.style.backgroundColor = "black"; // Fondo negro
            textDiv.style.color = "white"; // Texto en blanco
            textDiv.style.padding = "20px"; // Espaciado interno
            textDiv.style.textAlign = "center";
            textDiv.style.width = "100%"; // Cubrir todo el ancho de la pantalla

            mainContainer.appendChild(imageDiv);
            
            if (!hasTouchScreen) {
            	mainContainer.appendChild(textDiv);

            	const paragraph = document.createElement("p");
            	paragraph.textContent = zoom_in_out_message; // Texto a mostrar
            	textDiv.appendChild(paragraph);
		        }
		
            // Agrega el contenedor al content
            let parent = document.querySelector('#jspsych-content');
            parent.appendChild(mainContainer);
          }

          let mainContainer = document.querySelector('#fullpage');
          let imageDiv = document.querySelector('#fullpage > div:nth-child(1)');

          img.addEventListener('click', function () {
            // reestablecimiento del container y selección de imagen
            mainContainer.style.display = "flex";
            imageDiv.style.backgroundImage = 'url(' + img.src + ')';

            // If they are in the Image condition, they need to click the image to continue.
            // CHECK with giro_check
            document.querySelector("[id$=next]").disabled = false;
            document.querySelector("[id$=next]").title = ""
            document.getElementsByClassName("fail-message")[0].children[0].style.visibility = 'hidden'
          });
        }
      }
    }
  }
}

// direccion pantalla para celulares ------------------------------------------

var giro_check = false;

function check_orientation() {
  if (hasTouchScreen) {
    return (window.orientation);
  } else {
    return (0);
  }
};

function rectify_orientation() {
  if (giro_check) {
    // funcionará para todos los casos normales con un botón continuar con id que termine en "next"
    if (document.querySelector("[id$=next]") || document.querySelector("[id$=back]")) {
      if (check_orientation() == 0) {
        document.querySelector("[id$=next]").disabled = true;
        document.querySelector("[id$=back]").disabled = true;

        if (!(document.querySelector('#fail-message'))) {
          var elemDiv = document.createElement('div');
          elemDiv.id = "fail-message";
          elemDiv.innerHTML = '<span style="color: red;" class="required">' + "Porfavor gire su teléfono." + '</span>';

          let parent = document.querySelector('#jspsych-content');
          parent.appendChild(elemDiv);
        } else {
          document.querySelector('#fail-message').innerHTML = '<span style="color: red;" class="required">' + "Porfavor gire su teléfono." + '</span>';
        }

      } else {
        document.querySelector("[id$=next]").disabled = false;
        document.querySelector("[id$=back]").disabled = false;

        if ((document.querySelector('#fail-message'))) {
          document.querySelector('#fail-message').innerHTML = ""
        }

      }
    }
  }
}

window.addEventListener("resize", rectify_orientation, false);
window.addEventListener("orientationchange", rectify_orientation, false);

// Encryption and Decryption codes
const crypt = (salt, text) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

const decrypt = (salt, encoded) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

// Encrypt full array (used offline to create the encrypted arrays)
const encrypt_array = (salt, array) => {
    var encrypted_array = [];
    for (var i = 0; i <= array.length - 1; i++) {
        encrypted_number = crypt(salt, array[i])
        encrypted_array.push(encrypted_number);
    }
    //console.log(JSON.stringify(encrypted_array)) 
    return encrypted_array
}

// BD controllers functions

// function to separate array into groups
function groupBy(arr, property) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

function isNormalInteger(str) {
  str = str.trim();
  if (!str) {
    return false;
  }
  str = str.replace(/^0+/, "") || "0";
  var n = Math.floor(Number(str));
  return String(n) === str && n >= 0;
}

function json_can_parsed(data) {
  if (/^[\],:{}\s]*$/.test(data.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    //the json is ok
    return true;
  } else {
    //the json is not ok
    return false;
  }
}

function combinations_from_dict(conditions_dict) {
  combinations = []
  tasks = Object.keys(conditions_dict)
  tasks.sort()
  for (actual_task of tasks) {
    condition_keys = Object.keys(conditions_dict[actual_task])
    condition_keys.sort()
    for (actual_key of condition_keys) {
      combinations.push(conditions_dict[actual_task][actual_key])
    }
  }

  // outside if for the last r.map
  var r = []

  if (combinations.length > 1) {
    var max = combinations.length - 1;
    function helper(arr, i) {
      for (var j = 0, l = combinations[i].length; j < l; j++) {
        var a = arr.slice(0); // clone arr
        a.push(combinations[i][j]);
        if (i == max)
          r.push(a);
        else
          helper(a, i + 1);
      }
    }
    helper([], 0);
  }

  r = r.map(function (x) { return x.join('|'); });

  return r;
}
