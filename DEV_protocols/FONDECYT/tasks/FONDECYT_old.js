/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// EXPERIMENTAL DESIGN ---------------------------------------------------------

  // Within variables
  var disease = {disease: ['Cancer', 'Stroke']};
  var test_quality = {test_quality: ['lowQuality', 'highQuality']};

  // Randomize sex for stroke problem
  var sex = {sex: ['un hombre', 'una mujer']};
  sex_randomized = jsPsych.randomization.factorial(sex, 1, false, false);

  // Randomize order of disease block
  disease_order = jsPsych.randomization.factorial(disease, 1, false, false);

  // Create test_quality orders for each block
  test_quality_order = [];
  test_quality_order.push(jsPsych.randomization.factorial(test_quality, 1, false, false));
  test_quality_order.push(jsPsych.randomization.factorial(test_quality, 1, false, false));

  // Create final array
  within_selection["FONDECYT"] = [];
  for (var i = 0; i < disease_order.length; i++) {
    for (var j = 0; j < disease_order.length; j++) {
      within_selection["FONDECYT"].push({ disease: disease_order[i]["disease"], test_quality: test_quality_order[i][j]["test_quality"] });
    }
  }
  if (debug_mode === true) console.table(within_selection["FONDECYT"]);

  // WITHIN conditions.
  data_disease = {
    'Cancer': {description_context1: "Imagina que acude a tu consulta preguntando por el screening para cáncer de mama ",
              description_context2: " de 40 años con peso normal y estado de salud aparentemente normal.<BR><BR>Su historia clínica no presenta antecedentes familiares de cáncer, no consume alcohol ni drogas habitualmente.",
              number_PREVALENCE_x: 1, number_PREVALENCE_y: 105, number_SENSITIVITY: 95, number_SPECIFICITY: 88, disease_description: "cáncer de mama",
              test_description: "mamografía", test1: "de screening", follow_up: "prueba diagnóstica", follow_up_name: "biopsia",
              follow_up_details: "La prueba diagnóstica recomendada cuando hay sospecha de cáncer de mama es una biopsia del tejido mamario", follow_up_risk: "infección del 1%"},
    'Stroke': {description_context1: "Imagina que acude a urgencias con sospecha de infarto cerebral ",
              description_context2: " de 40 años con peso normal, y una leve disartria (dificultad para articular palabras).<BR><BR>Su historia clínica no presenta antecedentes familiares de infarto cerebral, no consume alcohol ni drogas habitualmente.",
              number_PREVALENCE_x: 868, number_PREVALENCE_y: 1000, number_SENSITIVITY: 90, number_SPECIFICITY: 95, disease_description: "infarto cerebral",
              test_description: "resonancia Weighted Difussion Imaging", test1: "diagnóstica", follow_up: "tratamiento", follow_up_name: "trombolisis",
              follow_up_details: "El tratamiento recomendado cuando hay sospecha de infarto cerebral es la trombolisis", follow_up_risk: "hermorragia del 2%"},
  };

  // WITHIN: data asociada al test_quality
  data_test_quality = {
    'lowQuality_Cancer': {image: 'media/img/VPP_low.png', type_image: 'positivo', sex_patient: sex["sex"][1]}, // sex always woman
    'highQuality_Cancer': {image: 'media/img/VPN_high.png', type_image: 'negativo', sex_patient: sex["sex"][1]}, // sex always woman
    'lowQuality_Stroke': {image: 'media/img/VPN_low.png', type_image: 'negativo', sex_patient: sex_randomized[0]["sex"]},
    'highQuality_Stroke': {image: 'media/img/VPP_high.png', type_image: 'positivo', sex_patient: sex_randomized[1]["sex"]}
  };

  data_type = {
    'Image': {text: "A continuación verás 4 casos de personas que llegan a una consulta o a urgencias. Por favor, lee con atencion los casos y responde lo mejor que puedas. <BR>Veras imágenes... estas representan el PPV o NPV..."},
    'Text': {text: "A continuación verás 4 casos de personas que llegan a una consulta o a urgencias. Por favor, lee con atencion los casos y responde lo mejor que puedas."}
  };

  // contador para secciones
  num = 0;



// BEGIN EXPERIMENT -------------------------------------------------------------

  // array final
  questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
  questions.push( check_fullscreen("FONDECYT") );
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



// Instructions -----------------------------------------------------------------------------

  var instructions_between_01 = {
      type: 'instructions',
      pages: ['<h1>Instrucciones</h1><BR>' + data_type[between_selection["FONDECYT"][0]]["text"]], // REVIEW: se agrega el texto de la variable between seleccionada
      data: {trialid: 'Instructions_001',
            condition_between: between_selection["FONDECYT"][0],
            procedure: 'FONDECYT'},
      show_clickable_nav: true,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };

  console.log(within_selection["FONDECYT"]);

// BLOCK 1: Start within block ---------------------------------------------------------
// --------------------------------------------------------------------------------------

  var within_timeline_01 = {
    timeline: [

      // SCREEN 1: Item index --------------------------------------------------
      {
        timeline: [
          {
            type: 'instructions',
            pages: function() {
              num += 1;
              return (["<h2>Caso " + ( (num-1)/2 + 1).toString() + " de 2</h1><BR>" +
              data_disease[jsPsych.timelineVariable('disease', true)].description_context1 +
              data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient +
              data_disease[jsPsych.timelineVariable('disease', true)].description_context2 +
              "<BR>"
            ]);
            },
            data: function () {
              element = {
                trialid: 'FONDECYT_01_' + (parseInt(num) + 1).toString(),
                condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true),
                condition_between: between_selection["FONDECYT"][0],
                procedure: 'FONDECYT'
              };
              return element;
            },
            show_clickable_nav: true
          }
        ],
        conditional_function: function(){
          // get the data from the previous trial,
          // and check which key was pressed
          if(num == 0 || num == 2){
            return true;
          } else {
            num += 1;
            return false;
          }
        }
      },

      // SCREEN 2: Disease and test description --------------------------------
      {
        type: 'survey-html-form',
        html: function() {
          // parte comun para ambas partes del between
          var html = '<div class="row" style="display: flex; align-items: center">';
          // para este caso son 2 columnas, de todas formas esto es definido por la persona que crea el instrumento
          html += '<div class="column" style="float: left; width: 50%">' + "Para detectar " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description +
          ", se realiza una " + data_disease[jsPsych.timelineVariable('disease', true)].test_description +
          ".<BR><BR> El " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " tiene una prevalencia del " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_x + " de cada " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_y +
          ".<BR><BR> La " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " tiene una sensibilidad del " + data_disease[jsPsych.timelineVariable('disease', true)].number_SENSITIVITY + "% y una especificidad del " + data_disease[jsPsych.timelineVariable('disease', true)].number_SPECIFICITY +
          "%. <BR><BR> ¿Cual es la probabilidad de tener un " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " si el resultado de la " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " es <B>" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + "</B>?" + '</div>';
          /*+ ", todo esto está asociado a " + data_disease[jsPsych.timelineVariable('disease')]["test_description"]*/

          // BETWEEN variable [picture / no picture]:
          if (between_selection["FONDECYT"][0] == 'Image') {
            html += '<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;">' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].image + '" style="max-width: 100%; max-height: 100%;">' + '</div>';
          } else if (between_selection["FONDECYT"][0] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO
            html += '<div class="block" style="height:' + height + 'px; width:' + width + 'px; float: left; width: 50%;"> <div class="alignitems"> ' + '<img src="' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].image + '" style="max-width: 0%; max-height: 0%;">' + ' </div> </div> ';
          }
          html += '</div><style>#column img {vertical-align: middle}</style>';
          html += '<p><input name ="Q0" type="number" required min=0 max=100 value autofocus> %</p>';
          return html;
        },
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'FONDECYT_02_' + num,
            //condition_within: within_selection["FONDECYT"]["timeline_01"],
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true),
            condition_between: between_selection["FONDECYT"][0],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },


      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'FONDECYT_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'FONDECYT_02_' + num})).select('response').values.length - 1] ) );
          return [
            {// para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en FONDECYT_01 se puede obtener con answers[0]
              prompt: '<div class="justified">Has dicho que la probabilidad es del ' + answers[0] +
              '%<BR><BR>¿Recomendarias la ' + data_disease[jsPsych.timelineVariable('disease', true)].test_description + ' como prueba <u>' + data_disease[jsPsych.timelineVariable('disease', true)].test1 +
              '</u> para detectar ' + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ' a tu paciente?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        data: function () {
          var element = {
            trialid: 'FONDECYT_03_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true),
            condition_between: between_selection["FONDECYT"][0],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },


      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'FONDECYT_03_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'FONDECYT_03_' + num})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías la " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " como prueba <u>" + data_disease[jsPsych.timelineVariable('disease', true)].test1 + "</u> para el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías la " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " como prueba <u>" + data_disease[jsPsych.timelineVariable('disease', true)].test1 + "</u> para el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + "?</div></br>";
          }
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Siguiente",
        data: function () {
          var element = {
            trialid: 'FONDECYT_04_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true),
            condition_between: between_selection["FONDECYT"][0],
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
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en FONDECYT_01 se puede obtener con answers[0]
              prompt: '<div class="justified">' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_details +
              '.Cuando se aplica, existe una probabilidad de ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_risk +
              '.<br><br>Imagina que el resultado de prueba es <b>'+ data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image.toUpperCase() +
              '</b>.<br><br> Recomendarías la ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + " como "  + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + '?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        data: function () {
          var element = {
            trialid: 'FONDECYT_05_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true),
            condition_between: between_selection["FONDECYT"][0],
            procedure: 'FONDECYT'
          };
          return element;
        }
      },


      // SCREEN 6: Confidence in Recommendation 2 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'FONDECYT_05_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'FONDECYT_05_' + num})).select('response').values.length - 1] ) );
          if (answers[0].trim() == 'Si') {
            return "<div class='justified'>¿Con qué seguridad recomendarías la " + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + " como "  + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + " para el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + "?</div></br>";
          } else if (answers[0].trim() == 'No') {
            return "<div class='justified'>¿Con qué seguridad NO recomendarías la " + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + " como "  + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + " para el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + "?</div></br>";
          }
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Siguiente",
        data: function () {
          var element = {
            trialid: 'FONDECYT_06_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true),
            condition_between: between_selection["FONDECYT"][0],
            procedure: 'FONDECYT'
          };
          return element;
        }
      }

    ],
    data: {procedure: 'FONDECYT'},
    timeline_variables: within_selection["FONDECYT"],
    randomize_order: false, //random order
    sample: {
        type: 'custom',
        fn: function(t){
            return t; // show the trials in the reverse order
        }
    }
  };
  FONDECYT.push(within_timeline_01);

  // within block finished

  FONDECYT.unshift(instructions_between_01);
  questions.push.apply(questions, FONDECYT);

  //if (debug_mode == 'true') console.table(within_timeline_01.timeline_variables)

// between block finished ------------------------------------------------------


call_function("FONDECYT");
