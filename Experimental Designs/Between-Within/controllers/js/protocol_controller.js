// lanzado en el body y en el botón "comenzar" (index) para verificar el estado del id
function check_id_status(event) {
  if ((params.has("uid") || document.getElementById('input_uid').reportValidity())) {
    if (params.has("uid")) {
      uid = params.get('uid');
    } else {
      uid = document.getElementById("input_uid").value;
    }
    if (uid != "") {
      if (localStorage[uid]) {
        questions = obtain_experiments(questions);
        continue_page_activation(uid, questions);
      } else {
        start_protocol(questions);
      }
    }
  }
}

// En caso que haya data almacenada esta funcion se preocupa de manejar lo que muestra el index y cuando iniciar el protocolo
function continue_page_activation(uid){
  user_data = JSON.parse(localStorage[uid]);
  completed_experiments = completed_experiments.split(",").length;
  input_uid = document.getElementById('input_uid');
  check = document.getElementById('check');
  start = document.getElementById('start');
  // se selecciona el texto a mostrar y si es que se muestra o no el botón para continuar con el protocolo en el punto en el que quedó
  if (questions.length != 0) {
    text_input_uid.innerHTML = "Usted ha completado " + completed_experiments.toString() + " tareas de este protocolo. <br> Para continuar donde quedó presione el siguiente botón:";
    start.hidden = false;
  } else {
    text_input_uid.innerHTML = "Usted ya ha completado todas las tareas de este protocolo."
  }
  input_uid.hidden = true;
  check.hidden = true;
}

// filtrador de elementos por questions["procedure"]
function obtain_experiments(questions){
  user_data = JSON.parse(localStorage[uid]);
  completed_experiments = user_data.completed_experiments

  // se filtran los experimentos completados para obtener los faltantes
  acceptedValues = all_experiments.filter( function( element ) {
    return !completed_experiments.includes( element );
  } );

  // se crea el array con los elementos no completados
  var questions = Object.keys(questions).reduce(function(r, e) {
    if (acceptedValues.includes(questions[e]["procedure"])) {
      r[e] = questions[e]
    }
    return r;
  }, [])

  // se limpia el array de los elementos vacios
  var questions = questions.filter(function (el) {
    return el != null;
  });

  return questions
}

//Saves a csv to local storage whit variable name experiment to uid set by global variable
function local_storage_save(csv, experiment) {
  if (localStorage[uid]) {
    user_data = JSON.parse(localStorage[uid])
    user_data.completed_experiments += "," + experiment;
    //user_data[experiment] = csv;
    user_data[experiment + '_date'] = Date();
    localStorage[uid] = JSON.stringify(user_data);
  } else {
    user_data = {
      completed_experiments: experiment
    }
    //user_data[experiment] = csv;
    user_data[experiment + '_date'] = Date();
    localStorage.setItem(uid, JSON.stringify(user_data));
  }
}

// funcion de jspysch para lanzar un experimento (recibe la lista completa de questions)
function start_protocol(questions){
  // con el arreglo de questions finalizado se pueden agregar restricciones extras, como el precargado de imágenes (son definidas en index):
  var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'El protocolo está cargando, espere un momento...',
    images: images,
    audio: audio,
    video: video
  }
  questions.unshift({type: 'preload', images: images});

  jsPsych.init({
    timeline: questions,
    override_safe_mode: true,
    fullscreen: true,
    on_interaction_data_update: function(data){
      if (data.event == 'fullscreenexit'){
        alert("Si sales de pantalla completa pueden perderse datos. Por favor, pulsa F11 para volver al experimento.")
      }}//,
    //on_finish: function(data) {
    // download("log.txt", consoleText);
    //  saveData(data, online, name)
    //}
  })
}
