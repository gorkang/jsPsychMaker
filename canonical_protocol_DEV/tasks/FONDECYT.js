/* CSCN - Creado MANUALMENTE */

// EXPERIMENTAL DESIGN ---------------------------------------------------------

// Within variables
  var within_var = {
    //disease: ['Cancer', 'Stroke'],
    test_quality: ['lowQuality', 'highQuality']
  };

  // Randomize order of Within variables
  within_selection["FONDECYT"] = {
    timeline_01: jsPsych.randomization.factorial(within_var, 1, false, false),
    timeline_02: jsPsych.randomization.factorial(within_var, 1, false, false)
  };

  // WITHIN conditions.
  data_disease = {
    'Cancer': {number_PREVALENCE_x: 1, number_PREVALENCE_y: 105, number_SENSITIVITY: 95, number_SPECIFICITY: 88, disease_description: "cáncer de mama", test_description: "una mamografía"},
    'Stroke': {number_PREVALENCE_x: 868, number_PREVALENCE_y: 1000, number_SENSITIVITY: 90, number_SPECIFICITY: 95, disease_description: "infarto cerebral", test_description: "una resonancia Weighted Difussion Imaging"},
  };

  // WITHIN: data asociada al test_quality
  data_test_quality = {
    'lowQuality_Cancer': {image: 'media/img/VPP_low.png', type_image: 'positivo'},
    'highQuality_Cancer': {image: 'media/img/VPN_high.png', type_image: 'negativo'},
    'lowQuality_Stroke': {image: 'media/img/VPN_low.png', type_image: 'negativo'},
    'highQuality_Stroke': {image: 'media/img/VPP_high.png', type_image: 'positivo'}
  };

  data_type = {
    'Image': {text: "para el caso de una prueba con imágenes."},
    'Text': {text: "para el caso de una prueba de solo texto."}
  };

  // contador para secciones
  num = 0;

// BEGIN EXPERIMENT -------------------------------------------------------------

  // array final
  questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

  questions.push( check_fullscreen("FONDECYT") );

// Start between block ---------------------------------------------------------

// first option between block --------------------------------------------------

  var instructions_between_01 = {
      type: 'instructions',
      pages: ['Instrucciones ' + data_type[between_selection["FONDECYT"][0]]["text"]], //se agrega el texto de la variable between seleccionada
      data: {trialid: 'Instructions',
            condition_between: between_selection["FONDECYT"], procedure: 'FONDECYT'},
      show_clickable_nav: true,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };

  FONDECYT = [];

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

  // blocks => Screening or Diagnostic

  // Start within block ----------------------------------------------------------

  var within_timeline_01 = {
    timeline: [

      // SCREEN 1: Item index --------------------------------------------------
      {
          type: 'instructions',
          pages: function() {
            num += 1;
            return (["Ensayo " + num + " de 4"]);
          },
          data: {
            trialid: 'within_01',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          },
          show_clickable_nav: true
      },

      // SCREEN 2: Disease and test description --------------------------------
      {
        type: 'survey-html-form',
        html: function() {
          // parte comun para ambas partes del between
          var html = '<div class="row" style="display: flex; align-items: center">';
          // para este caso son 2 columnas, de todas formas esto es definido por la persona que crea el instrumento
          html += '<div class="column" style="float: left; width: 50%">' + "Para detectar " + data_disease["Cancer"]["disease_description"] + ", se realiza  " + data_disease["Cancer"]["test_description"] + ".<BR><BR> La enfermedad tiene una prevalencia de " + data_disease["Cancer"]["number_PREVALENCE_x"] + " de cada " + data_disease["Cancer"]["number_PREVALENCE_y"] + ". La sensibilidad de la prueba es de " + data_disease["Cancer"]["number_SENSITIVITY"] + "%. La especificidad de la prueba es de " + data_disease["Cancer"]["number_SPECIFICITY"] + "%. <BR><BR> ¿Cual es la probabilidad de tener la enfermedad si el resultado es " + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + "Cancer"].type_image + "?" /*+ ", todo esto está asociado a " + data_disease[jsPsych.timelineVariable('disease')]["test_description"]*/ + '</div>';
          // parte que no es comun para ambas versiones del between (segunda columna) donde esta la imagen:
          if (between_selection["FONDECYT"][0] == 'Image') {
            html += '<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;">' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + "Cancer"]["image"] + '" style="max-width: 100%; max-height: 100%;">' + '</div>';
          } else if (between_selection["FONDECYT"][0] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO
            html += '<div class="block" style="height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;"> <div class="alignitems"> ' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + "Cancer"]["image"] + '" style="max-width: 0%; max-height: 0%;">' + ' </div> </div> ';
          }
          html += '</div><style>#column img {vertical-align: middle}</style>';
          html += '<p><input name ="Q0" type="number" required min=0 max=100 value autofocus> %</p>'
          return html;
        },
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'within_02',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_02'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_02'})).select('response').values.length - 1] ) );
          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en within_01 se puede obtener con answers[0]
              prompt: '<div class="justified">Has dicho que la probabilidad es del ' + answers[0] + '% ¿Recomendarias esta prueba de <u>screening</u> para detectar ' + "cáncer" + ' a tu paciente?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ]
        },
        data: function () {
          var element = {
            trialid: 'within_03',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_03'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_03'})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías la prueba de <u>screening</u> para la enfermedad " + "cáncer" + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías la prueba de <u>screening</u> para la enfermedad " + "cáncer" + "?</div></br>";
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
            trialid: 'within_04',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 5: Recommendation 2  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en within_01 se puede obtener con answers[0]
              prompt: '<div class="justified">Prueba diagnóstica es biopsia. <br> Probabilidad de infección 1%.<br><br> Resultado de prueba es <b>' + ((jsPsych.timelineVariable('test_quality', true)  == "lowQuality") ? ("POSITIVO") : ("NEGATIVO")) + '</b>. <br> Recomendarías prueba diagnostica ?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        data: function () {
          var element = {
            trialid: 'within_05',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 6: Confidence in Recommendation 2 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_05'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_05'})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías la prueba diagnóstica para la enfermedad " + "cáncer" + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías la prueba diagnóstica para la enfermedad " + "cáncer" + "?</div></br>";
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
            trialid: 'within_06',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      }

    ],
    data: {procedure: 'FONDECYT', testing: "1"},
    timeline_variables: within_selection["FONDECYT"]["timeline_01"],
    randomize_order: true, //random order
  };
  FONDECYT.push(within_timeline_01);

  // within block finished

  // Start within block ----------------------------------------------------------

  var within_timeline_02 = {
    timeline: [

      // SCREEN 1: Item index --------------------------------------------------
      {
          type: 'instructions',
          pages: function() {
            num += 1;
            return (["Ensayo " + num + " de 4"]);
          },
          data: {
            trialid: 'within_07',
            condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          },
          show_clickable_nav: true
      },

      // SCREEN 2: Disease and test description --------------------------------
      {
        type: 'survey-html-form',
        html: function() {
          // parte comun para ambas partes del between
          var html = '<div class="row" style="display: flex; align-items: center">';
          // para este caso son 2 columnas, de todas formas esto es definido por la persona que crea el instrumento
          html += '<div class="column" style="float: left; width: 50%">' + "Para detectar " + data_disease["Stroke"]["disease_description"] + ", se realiza  " + data_disease["Stroke"]["test_description"] + ".<BR><BR> La enfermedad tiene una prevalencia de " + data_disease["Stroke"]["number_PREVALENCE_x"] + " de cada " + data_disease["Stroke"]["number_PREVALENCE_y"] + ". La sensibilidad de la prueba es de " + data_disease["Stroke"]["number_SENSITIVITY"] + "%. La especificidad de la prueba es de " + data_disease["Stroke"]["number_SPECIFICITY"] + "%. <BR><BR> ¿Cual es la probabilidad de tener la enfermedad si el resultado es " + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + "Stroke"].type_image + "?" /*+ ", todo esto está asociado a " + data_disease[jsPsych.timelineVariable('disease')]["test_description"]*/ + '</div>';
          // parte que no es comun para ambas versiones del between (segunda columna) donde esta la imagen:
          if (between_selection["FONDECYT"][0] == 'Image') {
            html += '<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;">' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + "Stroke"]["image"] + '" style="max-width: 100%; max-height: 100%;">' + '</div>';
          } else if (between_selection["FONDECYT"][0] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO
            html += '<div class="block" style="height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;"> <div class="alignitems"> ' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + "Stroke"]["image"] + '" style="max-width: 0%; max-height: 0%;">' + ' </div> </div> '
          }
          html += '</div><style>#column img {vertical-align: middle}</style>';
          html += '<p><input name ="Q0" type="number" required min=0 max=100 value autofocus> %</p>'
          return html;
        },
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'within_08',
            condition_within: within_selection["FONDECYT"]["timeline_02"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_08'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_08'})).select('response').values.length - 1] ) );
          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en within_01 se puede obtener con answers[0]
              prompt: '<div class="justified">Has dicho que la probabilidad es del ' + answers[0] + '% ¿Recomendarias esta prueba para detectar ' + "WDI" + ' a tu paciente?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ]
        },
        data: function () {
          var element = {
            trialid: 'within_09',
            condition_within: within_selection["FONDECYT"]["timeline_02"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_09'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_09'})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías la prueba <u>diagnóstica</u> para la enfermedad " + "WDI" + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías la prueba <u>diagnóstica</u> para la enfermedad " + "WDI" + "?</div></br>";
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
            trialid: 'within_10',
            condition_within: within_selection["FONDECYT"]["timeline_02"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 5: Recommendation 2  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en within_01 se puede obtener con answers[0]
              prompt: '<div class="justified">El tratamiento es Trombolisis. <br> Probabilidad de hemorragia 2%.<br><br> Resultado de prueba es <b>' + ((jsPsych.timelineVariable('test_quality', true)  == "lowQuality") ? ("NEGATIVO") : ("POSITIVO")) + '</b>. <br> ¿Recomendarías el tratamiento?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ]
        },
        data: function () {
          var element = {
            trialid: 'within_11',
            condition_within: within_selection["FONDECYT"]["timeline_02"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },

      // SCREEN 6: Confidence in Recommendation 2 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'within_11'})).select('response').values[(jsPsych.data.get().filter({trialid: 'within_11'})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías el tratamiento para la enfermedad " + "WDI" + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías el tratamiento para la enfermedad " + "WDI" + "?</div></br>";
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
            trialid: 'within_12',
            condition_within: within_selection["FONDECYT"]["timeline_02"],
            condition_between: between_selection["FONDECYT"],
            procedure: 'FONDECYT'
          };
          return element;
        }
      }

    ],
    data: {procedure: 'FONDECYT', testing: "2"},
    timeline_variables: within_selection["FONDECYT"]["timeline_02"],
    randomize_order: true, //random order
  };
  FONDECYT.push(within_timeline_02);

  // within block finished

  if (debug_mode == 'false') FONDECYT = jsPsych.randomization.repeat(FONDECYT,1);
  console.log(FONDECYT);
  FONDECYT.unshift(instructions_between_01);
  questions.push.apply(questions, FONDECYT);

// between block finished ------------------------------------------------------

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'FONDECYT'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'FONDECYT'}).json();
      }
      let first_experiment = true;
      let last_experiment = false;
      saveData(data, online, 'FONDECYT', version = 'original', first_experiment, last_experiment);
    },
    data: {procedure: 'FONDECYT'}
});
