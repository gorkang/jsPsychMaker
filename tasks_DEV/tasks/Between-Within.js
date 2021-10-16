/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// EXPERIMENTAL DESIGN ---------------------------------------------------------

// Within variables
  var within_var = {
      disease: ['Cáncer', 'Sida', 'Asma'],
      test_quality: ['low_quality', 'high_quality']
  };

  // Randomize order of Within variables
  within_selection["Between-Within"] = jsPsych.randomization.factorial(within_var, 1, false, false);

  /*
  // Between variables
    var between_var = {
        type: ['Image', 'Text']
    }

  // copia de respaldo
    var original_between_var = JSON.parse(JSON.stringify(between_var));
    
// se limpia la variable between dependiendo del estado de las condiciones (verificar para multiples variables between)
  for (var i = 0; i < actual_condition_data.length; i++) {
    position = between_var.type.indexOf(actual_condition_data[i].condition_name)
    if (position != -1) {
      if (actual_condition_data[i].blocked)
        between_var.type.splice(position, 1);
    }
  }

  if (!user_assigned) {
    if (between_var.type.length == 0) {
      experiment_blocked = true;
      console.log("Usuario bloqueado por límite en condiciones")
      // Between variables re-definition, skip errors
      between_var = original_between_var;
      // Randomly assign a Between variable
      between_selection["Between-Within"] = [jsPsych.randomization.factorial(between_var, 1)[0].type];

      // Randomize order of Within variables
      within_selection["Between-Within"] = jsPsych.randomization.factorial(within_var, 1, false, false);
    } else {
      // Randomly assign a Between variable
      between_selection["Between-Within"] = [jsPsych.randomization.factorial(between_var, 1)[0].type];

      // Randomize order of Within variables
      within_selection["Between-Within"] = jsPsych.randomization.factorial(within_var, 1, false, false);
    }
  }
*/
// DATA for experimental conditions --------------------------------------------

  // BETWEEN: data asociada al type
  data_type = {
    'Image': {text: "para el caso de una prueba con imágenes."},
    'Text': {text: "para el caso de una prueba de solo texto."}
  }

  // WITHIN: data asociada al test_quality
  data_test_quality = {
    'low_quality': {image: 'tasks/img/VPP_low.png', number_PREVALENCE: 1000, number_SENSITIVITY: 95, number_SPECIFICITY: 55, text: "una imagen de baja calidad."},
    'high_quality': {image: 'tasks/img/VPP_high.png', number_PREVALENCE: 80, number_SENSITIVITY: 90, number_SPECIFICITY: 95, text: "una imagen de alta calidad."}
  }

  // WITHIN: data asociada al disease
  data_disease = {
    "Cáncer": {disease_description: "", test_description: "un test de rayos X"},
    "Sida": {disease_description: "", test_description: "un analisis de sangre"},
    "Asma": {disease_description: "", test_description: "una prueba de respiracion"}
  }

// BEGIN EXPERIMENT -------------------------------------------------------------

  // array final
  questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

  questions.push(
    {
      timeline: [{
        type: 'fullscreen',
        message: '<p>El experimento entrará en modo pantalla completa</p>',
        button_label: 'Full screen',
        delay_after: 0,
        fullscreen_mode: true,
        data: {procedure: 'Between-Within'}
      }],
      data: {procedure: 'Between-Within'},
      conditional_function: function(){
        if(window.innerWidth != screen.width || window.innerHeight != screen.height)
          return true;
        else
          return false;
      }
    }
  );

// Start between block ---------------------------------------------------------

// first option between block --------------------------------------------------

  between_block_1 = [];

  var instructions_between_01 = {
      type: 'instructions',
      pages: ['Instrucciones ' + data_type[between_selection["Between-Within"][0]]["text"]], //se agrega el texto de la variable between seleccionada
      data: {trialid: 'Instructions',
            condition_between: between_selection["Between-Within"], procedure: 'Between-Within'},
      show_clickable_nav: true,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };

// Start within block ----------------------------------------------------------

  temporal_questions = []

  // hay que revisar toda la data, para este caso, test_quality y disease
  for (const [key, value] of Object.entries(data_test_quality)) {
    if ('image' in data_test_quality[key]) {
      // acá se realiza el ajuste de tamaño del bloque creado para el texto, el cual en este caso es definido manualmente pero la idea es que sea del tamaño de la imagen
      height = (window.screen.height) / 4;
      width = (window.screen.width) / 2;
      //console.log(data_test_quality[Object.keys(data_test_quality)[0]]['image']);
      break; // como nos basta sólo 1 no es necesario hacer todo el loop en caso de que exista una imagen en la variable actual
    }
  }

  // en caso de que no se entregue un tamaño definido, aún no funcional TODO
  // var img = new Image();
  // img.src = data_test_quality[Object.keys(data_test_quality)[0]]['image'] //aca se asume que todas las imagenes asociadas a 'image' de 'test_quality' tienen el mismo tamaño por lo que se obtiene el primero (Object.keys(data_test_quality)[0])
  // img.load;
  // console.log(img);
  // console.log(img.height);

  var within_timeline_01 = {
    timeline: [

      // SCREEN 1: Item index --------------------------------------------------

        // Incluir aqui una pantalla inicial para cada item, del estilo: "Item 1 de 6"

      // SCREEN 2: Disease and test description --------------------------------
      {
        type: 'survey-html-form',
        html: function() {
          // parte comun para ambas partes del between
          var html = '<div class="row" style="display: flex; align-items: center">';
          // para este caso son 2 columnas, de todas formas esto es definido por la persona que crea el instrumento
          html += '<div class="column" style="float: left; width: 50%">' + "Para detectar " + jsPsych.timelineVariable('disease', true) + "" + data_disease[jsPsych.timelineVariable('disease', true)]["disease_description"] + ", se realiza  " + data_disease[jsPsych.timelineVariable('disease', true)]["test_description"] + ".<BR><BR> La enfermedad tiene una prevalencia de 1 de cada " + data_test_quality[jsPsych.timelineVariable('test_quality', true)]["number_PREVALENCE"] + ". La sensibilidad de la prueba es de " + data_test_quality[jsPsych.timelineVariable('test_quality', true)]["number_SENSITIVITY"] + "%. La especificidad de la prueba es de " + data_test_quality[jsPsych.timelineVariable('test_quality', true)]["number_SPECIFICITY"] + "%. <BR><BR> ¿Cual es la probabilidad de tener la enfermedad si el resultado es positivo?, todo esto está asociado a " + data_test_quality[jsPsych.timelineVariable('test_quality', true)]["text"] + '</div>';
          // parte que no es comun para ambas versiones del between (segunda columna) donde esta la imagen:
          if (between_selection["Between-Within"][0] == 'Image') {
            html += '<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;">' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true)]["image"] + '" style="max-width: 100%; max-height: 100%;">' + '</div>';
          } else if (between_selection["Between-Within"][0] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO
            html += '<div class="block" style="height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;"> <div class="alignitems"> ' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true)]["image"] + '" style="max-width: 0%; max-height: 0%;">' + ' </div> </div> '
          }
          html += '</div><style>#column img {vertical-align: middle}</style>';
          html += '<p><input name ="Q0" type="number" required min=0 max=100 value autofocus> %</p>'
          return html;
        },
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'within_01',
            condition_within: [
              jsPsych.timelineVariable('disease', true),
              jsPsych.timelineVariable('test_quality', true)
            ],
            condition_between: between_selection["Between-Within"],
            procedure: 'Between-Within'
          };
          return element;
        }
      },
/*
      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          // respuestas de la pregunta within_01:
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_01'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_01'})).select('response').values.length - 1] ) );
          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en within_01 se puede obtener con answers[0]
              prompt: '<div class="justified">Has dicho que la probabilidad es del ' + answers[0] + '% ¿Recomendarias esta prueba para detectar la ' + jsPsych.timelineVariable('disease', true) + ' a tu paciente?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ]
        },
        data: function () {
          var element = {
            trialid: 'within_02',
            condition_within: [
              jsPsych.timelineVariable('disease', true),
              jsPsych.timelineVariable('test_quality', true)
            ],
            condition_between: between_selection,
            procedure: 'Between-Within'
          };
          return element;
        }
      },

      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_02'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_01'})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías la prueba para la enfermedad " + jsPsych.timelineVariable('disease', true) + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías la prueba para la enfermedad " + jsPsych.timelineVariable('disease', true) + "?</div></br>";
          }
        },
        stimulus_duration: 10000000000,
        require_movement:true,
        required: true,
        min: 0,
        max: 100,
        slider_width: 500,
        start: 50,
        step: 1,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Siguiente",
        data: function () {
          var element = {
            trialid: 'within_03',
            condition_within: [
              jsPsych.timelineVariable('disease', true),
              jsPsych.timelineVariable('test_quality', true)
            ],
            condition_between: between_selection,
            procedure: 'Between-Within'
          };
          return element;
        }
      }
*/
      // SCREEN 5: Follow up description ---------------------------------------

      // SCREEN 6: Recommendation 2 --------------------------------------------

      // SCREEN 7: Confidence in Recommendation 2 ------------------------------

    ],
    data: {procedure: 'Between-Within'},
    timeline_variables: within_selection["Between-Within"],
    randomize_order: true, //random order
  };
  temporal_questions.push(within_timeline_01);

// within block finished

  if (debug_mode == 'false') temporal_questions = jsPsych.randomization.repeat(temporal_questions,1);
  temporal_questions.unshift(instructions_between_01);
  questions.push.apply(questions, temporal_questions);

// between block finished ------------------------------------------------------

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Between-Within'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Between-Within'}).json();
      }
      let first_experiment = true;
      let last_experiment = false;
      saveData(data, online, 'Between-Within', version = 'original', first_experiment, last_experiment);
    },
    data: {procedure: 'Between-Within'}
});
