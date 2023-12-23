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
  within_selection["Bayesian22"] = [];
  for (var i = 0; i < disease_order.length; i++) {
    for (var j = 0; j < disease_order.length; j++) {
      within_selection["Bayesian22"].push({ disease: disease_order[i]["disease"], test_quality: test_quality_order[i][j]["test_quality"] });
    }
  }
  //if (debug_mode === true) console.table(within_selection["Bayesian22"]);



// INSTRUCCIONES -----------------------------------------------------------------------------

// Page 1 varies per condition (one of the sentences)
function instructions_p1 (type) {

  instructions_p1_extra = {Image: "Además, se mostrará una imágen representando el Valor Predictivo Positivo o Negativo para alguien como esa persona.", 
                          TextPV: "Además, se mostrará una texto con el Valor Predictivo Positivo o Negativo para alguien como esa persona.",
                          Text: ""};

  instructions_page1 = `<H2>Instrucciones (1/3)</H2>A continuación te pediremos que des recomendaciones sobre dos tipos de situaciones hipotéticas:<BR><BR>
    <li> personas que llegan a una consulta rutinaria, preguntando por un cribado para Cáncer de mama</li>
    <li> personas que llegan a urgencias con sospecha de infarto cerebral</li><BR>
  En cada caso verás la descripción breve del caso clínico, información sobre la prevalencia de la enfermedad para alguien como esa persona (*), y las características del test (sensibilidad y especificidad) que se usaría para detectar esa enfermedad. ` + 
  instructions_p1_extra[type] +

  `<BR><BR>Por favor, lee con atencion la información y responde lo mejor que puedas.<BR><BR>
  <HR>
  <p style = "font-size: small;">(*) Para simplificar la presentación y el cálculo, hablaremos siempre de <B>prevalencia</B>, aunque en algunos casos sería técnicamente más apropiado hablar de indicencia o Case Detection Rate (CDR). 
  Nos referimos a la prevalencia esperada en la población de interés, es decir, cuántas personas similares a la del caso presentado que se someten a la prueba esperamos que padezcan la enfermedad.</p>
  <HR>
  <BR>`

  return(instructions_page1);

}

function instructions_p2 (type) {

  instructions_p2_extra = {
    Image: `Para facilitar la tarea, podrás consultar los Valores Predictivos en una imagen similar a las de abajo. <B>Haz click en la imagen para ampliarla y vuelve a hacer click en ella para reducirla</B> (hazlo para que se active el botón [ Siguiente > ] ).<BR><BR>
    En las imágenes se ve como cambia el Valor Predictivo a partir de la prevalencia y los falsos positivos(+) o negativos(-).<BR><BR>
    <img class="image_zoom" src="media/images/Bayesian31/instructions1.png" style="max-width: 40%; max-height: 40%;"> <img class="image_zoom" src="media/images/Bayesian31/instructions2.png" style="max-width: 40%; max-height: 40%;"><BR><BR>`, 
    TextPV: `Para facilitar la tarea, podrás consultar los Valores Predictivos en un texto a la derecha de la pantalla.<BR><BR><BR><BR>`,
    Text: ""};

  instructions_page2 = `<H2>Instructiones (2/3)</H2>Usando la prevalencia, sensibilidad y especificidad es posible calcular:<BR><BR>
  <li><B>Valor Predictivo Positivo</B>: la probabilidad de tener la enfermedad cuando el test da positivo</li><BR>
  <li><B>Valor Predictivo Negativo</B>: la probabilidad de NO tener la enfermedad cuando el test da negativo</li><BR><BR>` +
  instructions_p2_extra[type]

  return(instructions_page2);

}

// Page 3
instructions_page3 = `<H2>Instrucciones (3/3)</H2>La información numérica que se presentará en los siguientes casos está basada en literatura científica. 
Hemos intentado extraer los datos de artículos de la mejor calidad posible, como revisiones sistemáticas, meta-análisis, etc. por ejemplo:<BR><BR>
<img src = "media/images/Bayesian22/intro.png"><BR><BR>Si tienes alguna duda, puedes revisar las instrucciones ahora pulsando el botón [ < Anterior ].<BR><BR>
Si presionas el botón [ Siguiente > ] empezará la tarea y no podrás volver atrás.<BR><BR>`


// IMAGE
data_type = {
    'Image': {'page1': {text: instructions_p1("Image")},                              
              'page2': {text: instructions_p2("Image")},                              
              'page3': {text: instructions_page3}
            },

    'TextPV': {'page1': {text: instructions_p1("TextPV")},            
               'page2': {text: instructions_p2("TextPV")},                          
               'page3': {text: instructions_page3}
              },    
    
    // TEXT  
    'Text': {'page1': {text: instructions_p1("Text")},                             
             'page2': {text: instructions_p2("Text")},                              
             'page3': {text: instructions_page3}
           }
      };

// ------------------------------------------------------------------------------------------------



  // WITHIN conditions.
  data_disease = {
    'Cancer': {description_context1: "Imagina que acude a tu consulta preguntando por el <B>screening para cáncer de mama</B> ",
              // una mujer
              description_context2: " de 40 años de raza caucásica e IMC normal. " +
                                    "Su estado de salud es aparentemente normal.<BR><BR>" +
                                    "No tiene antecedentes personales o familiares de relevancia, no consume alcohol ni drogas.<BR>",
              brief_context: /*mujer*/" de 40 años sin antecedentes personales o familiares de relevancia acude a consulta preguntando por el <B>screening para cáncer de mama</B>.<BR>",
              number_PREVALENCE_x: 1, number_PREVALENCE_y: 105, number_SENSITIVITY: 95, number_SPECIFICITY: 88, disease_description: "cáncer de mama",
              test_description: "mamografía digital", test1: "de screening", follow_up: "prueba diagnóstica", follow_up_name: "biopsia",
              follow_up_details: "La prueba diagnóstica recomendada cuando hay sospecha de cáncer de mama es una biopsia del tejido mamario", 
              follow_up_risk: 'sobrediagnóstico de hasta un 10%, que puede acabar en quimioterapia, radioterapia o mastectomías innecesarias.'
    },

    'Stroke': {description_context1: "Imagina que acude a urgencias con <B>sospecha de infarto cerebral</B> ",
              // un hombre / una mujer
              description_context2: " de 40 años de raza caucásica e IMC normal. " +
                                    "Presenta hipostesia derecha y evidente disatria (NIHSS de 3 puntos) que iniciaron hace 1 hora.<BR><BR>" + 
                                    "No tiene antecedentes personales o familiares de relevancia, no consume alcohol ni drogas.<BR>",
              brief_context: /*Una mujer/Un hombre*/" de 40 años sin antecedentes personales o familiares de relevancia acude a urgencias con hispostesia y disartria (NIHSS de 3 puntos): <B>sospecha de infarto cerebral</B>.<BR>",
              number_PREVALENCE_x: 868, number_PREVALENCE_y: 1000, number_SENSITIVITY: 90, number_SPECIFICITY: 95, disease_description: "infarto cerebral",
              test_description: "Resonancia Magnética de Difusión", test1: "diagnóstica", follow_up: "tratamiento", follow_up_name: "trombolisis",
              follow_up_details: "El tratamiento recomendado cuando hay sospecha de infarto cerebral es la trombolisis", 
              follow_up_risk: "hermorragia intracraneal del 2%, que puede acabar en muerte o incapacidad severa."
    },
    
  };

  // WITHIN: data related to test_quality
  data_test_quality = {
    'lowQuality_Cancer': {image: 'media/images/Bayesian22/VPP_low_Cancer.png', textPV: '<B>Valor Predictivo Positivo</B>: 5%<br>(muy bajo) <span style = "font-size: small;"><BR>5 de cada 100 positivos son verdaderos positivos<BR></span>', type_image: 'positivo', SINO: '', sex_patient: sex["sex"][1]}, // sex always woman
    'highQuality_Cancer': {image: 'media/images/Bayesian22/VPN_high_Cancer.png', textPV: '<B>Valor Predictivo Negativo</B>: 100%<br>(muy alto) <span style = "font-size: small;"><BR>100 de cada 100 negativos son verdaderos negativos<BR></span>', type_image: 'negativo', SINO: 'NO', sex_patient: sex["sex"][1]}, // sex always woman
    'lowQuality_Stroke': {image: 'media/images/Bayesian22/VPN_low_Stroke.png', textPV: '<B>Valor Predictivo Negativo</B>: 51%<br>(intermedio) <span style = "font-size: small;"><BR>51 de cada 100 negativos son verdaderos negativos<BR></span>', type_image: 'negativo', SINO: 'NO', sex_patient: sex_randomized[0]["sex"]},
    'highQuality_Stroke': {image: 'media/images/Bayesian22/VPP_high_Stroke.png', textPV: '<B>Valor Predictivo Positivo</B>: 100%<br>(muy alto) <span style = "font-size: small;"><BR>100 de cada 100 positivos son verdaderos positivos<BR></span>', type_image: 'positivo', SINO: '', sex_patient: sex_randomized[1]["sex"]}
  };

  // The label we use depends on the disease
  prevalence_incidence = {
    'Cancer': {label: 'prevalencia'},
    'Stroke': {label: 'prevalencia'}
  };


  // Counter for sections
  num = 0;

// BEGIN EXPERIMENT -------------------------------------------------------------

  // Final array
  questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
  questions.push(check_fullscreen("Bayesian22"));
  Bayesian22 = [];

  // If image, get height and width for text block
  for (const [key, value] of Object.entries(data_test_quality)) {
    if ('image' in data_test_quality[key]) {
      height = (window.screen.height) / 4;
      width = (window.screen.width) / 2;
      //console.log(data_test_quality[Object.keys(data_test_quality)[0]]['image']);
      break; // We only need to do it once
    }
  }


// Instructions -----------------------------------------------------------------------------

  // giro de pantalla
  var instructions_000 = {
      type: 'instructions',
      pages: ['Para poder continuar la pantalla debe estar girada de manera horizontal. <BR> <img src="media/images/Bayesian22/phone-rotation.png" style="max-width: 30%; max-height: 30%;"><BR>Si la pantalla está vertical, el botón [Siguiente >] estará inactivo.'],
      button_label_next: 'Siguiente',
      data: {trialid: 'Instructions_000',
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'},
      show_clickable_nav: true,
      on_trial_start: function(){
          bloquear_enter = 0;
      },
      on_load: function() {
        giro_check = true;
        rectify_orientation();
      }/*,
      on_finish: function(data) {
        giro_check = false;
        data.orientation = check_orientation();
      }*/
  };

  var if_instructions_000 = {
    timeline: [instructions_000],
    conditional_function: function(){
      if (hasTouchScreen) {
        return true;
      } else {
        return false;
      }
    },
    data: {
      trialid: 'if_instructions_000',
      condition_between: between_selection["Bayesian22"]["type"],
      procedure: 'Bayesian22'
    }
  };

  var instructions_between_01 = {
      type: 'instructions',
      pages: function() {
        return ([data_type[between_selection["Bayesian22"]["type"]]["page1"]["text"],
                 data_type[between_selection["Bayesian22"]["type"]]["page2"]["text"],
                 data_type[between_selection["Bayesian22"]["type"]]["page3"]["text"]])
      },
      button_label_next: 'Siguiente',
      button_label_previous: 'Anterior',
      data: {trialid: 'Instructions_001',
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'},
      show_clickable_nav: true,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };

  //console.log(within_selection["Bayesian22"]);

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
              return (["<h2>Caso " + (num).toString() + " de 4</h1><BR>" + //(num-1)/2
              data_disease[jsPsych.timelineVariable('disease', true)].description_context1 +
              data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient +
              data_disease[jsPsych.timelineVariable('disease', true)].description_context2 +
              "<BR>"
            ]);
            },
            button_label_next: 'Empezar caso',
            on_load: function(){
              // Check Fullscreen and ask for it if not
              if (!hasTouchScreen) {
                if(window.innerWidth != screen.width || window.innerHeight != screen.height) alert("Por favor, pulsa F11 para volver a pantalla completa")
              };
            },
            data: function () {
              element = {
                trialid: 'Bayesian22_01_' + (parseInt(num) + 1).toString(),
                condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
                condition_between: between_selection["Bayesian22"]["type"],
                procedure: 'Bayesian22'
              };
              return element;
            },
            show_clickable_nav: true
          }
        ],

        // -----------------------
      },

      // SCREEN 2: Disease and test description --------------------------------
      {
        type: 'survey-html-form',
        html: function() {
          
          var pct_width_left = "75%";
          var pct_width_right = "25%";
          
          // parte comun para ambas partes del between
          var html = '<div class="row" style="display: flex; align-items: center">';

          // 2 columns
          html += '<div class="column" style="float: left; width: ' + pct_width_left + '">' +
          '<B>Cálculo del valor predictivo <U>' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + '</U></B><BR><BR>' +

          // Brief version of case
          '<HR><div style="color:#424949; font-size:15px;">' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient[0].toUpperCase() + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient.slice(1) + data_disease[jsPsych.timelineVariable('disease', true)].brief_context + '</div><HR><BR>' +
          "La prueba " + data_disease[jsPsych.timelineVariable('disease', true)].test1 + " usada habitualmente para detectar " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " es la " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + '.<BR><BR> ' +
          "En una persona como la descrita, el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " tiene una <B>" + prevalence_incidence[jsPsych.timelineVariable('disease', true)].label +" de " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_x + " de cada " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_y + '</B>.<BR><BR> ' +
          "La " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " tiene una <B>sensibilidad del " + data_disease[jsPsych.timelineVariable('disease', true)].number_SENSITIVITY + "%</B> y una <B>especificidad del " + data_disease[jsPsych.timelineVariable('disease', true)].number_SPECIFICITY + '%</B>. <BR><BR>'+
          "¿Cual es la probabilidad de " + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + " tener un " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " si el resultado de la " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " es <B>" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + "</B>?" + '</div>';
          /*+ ", todo esto está asociado a " + data_disease[jsPsych.timelineVariable('disease')]["test_description"]*/

          // BETWEEN variable [Picture / TextPV / Text]:
          if (between_selection["Bayesian22"]["type"] == 'Image') {
            
            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">
            <div style="font-size:14px; text-align: justify;">En la gráfica se muestra como el <b>Valor predictivo ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].type_image + `</b> cambia a partir de la prevalencia, sensibilidad y especificidad: <br><br></div>
            <img class="image_zoom" src="` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].image + `" style="max-width: 100%; max-height: 100%;" onclick = document.querySelector('[id$=next]').disabled = true> 
            <div style="font-size:11px; text-align: center">Haz click sobre la imagen para ampliarla/minimizarla.<BR></div>
            <br>
            <div style="font-size:16px; text-align: center; border: dashed 1px; border-radius: 8px; padding: 5px;">` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].textPV + `</div>
            
            </div>`;

          } else if (between_selection["Bayesian22"]["type"] == 'TextPV') { // que pasa si las imagenes tienen distintos tamaños? #TODO

            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">
            <div style="font-size:14px; text-align: justify;">En el recuadro se muestra el <b>Valor predictivo ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].type_image + `</b> calculado a partir de la prevalencia, sensibilidad y especificidad: <br><br></div>
            <div style="font-size:16px; text-align: center; border: dashed 1px; border-radius: 8px; padding: 5px;">` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].textPV + `</div></div>`;
            
          } else if (between_selection["Bayesian22"]["type"] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO

            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">&nbsp;` +
            `</div> </div> `;

          }
          html += '</div><style>#column img {vertical-align: middle}</style>';
          html += '<p><input name ="Q0" type="number" required min=0 max=100 value autofocus> %</p>';
          // image_zoom
          //html += '<div id="fullpage_image" onclick="this.style.display=' + "'none'" + ';"></div>';
          return html;
        },
        button_label: 'Siguiente',
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'Bayesian22_02_' + num,
            //condition_within: within_selection["Bayesian22"]["timeline_01"],
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'
          };
          return element;
        },
        on_load: function() {

          // Only in the Image condition as it deactivates button
          //name_first_image = document.querySelectorAll('img')[0].currentSrc.split('/').reverse()[0];
          //console.log(document.querySelectorAll('img')[0].currentSrc.split('/').reverse()[0])
          if (between_selection["Bayesian22"]["type"] == 'Image') image_zoom();

        }
      },

      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values.length - 1] ) );
          return [
            {// para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en Bayesian22_01 se puede obtener con answers[0]
              prompt: '<div class="justified">' +
              '<HR><div style="color:#424949; font-size:15px;">Has dicho que la probabilidad de ' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ' tener un ' + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ' si el resultado de la ' + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ' es <B>' + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + '</B>' + ' es del ' + answers[0] + '%.</div><HR><BR>' +

              '¿Le recomendarias a tu paciente la ' + data_disease[jsPsych.timelineVariable('disease', true)].test_description + ' como prueba <u>' + data_disease[jsPsych.timelineVariable('disease', true)].test1 +
              '</u> para detectar ' + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + '?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        button_label: 'Siguiente',
        data: function () {
          var element = {
            trialid: 'Bayesian22_03_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'
          };
          return element;
        }
      },

      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = [Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values.length - 1] ) ),
                    Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian22_03_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian22_03_' + num})).select('response').values.length - 1] ) )];
          return "<div class='justified'>" +
          '<HR><div style="color:#424949; font-size:15px;">Has dicho que la probabilidad de ' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ' tener un ' + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ' si el resultado de la ' + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ' es <B>' + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + '</B>' + ' es del ' + answers[0][0] + '%.</div><HR><BR>' +
           "¿Con qué seguridad " + answers[1][0].trim().toUpperCase() + " recomendarías a tu paciente la " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " como prueba <u>" + data_disease[jsPsych.timelineVariable('disease', true)].test1 + "</u> para el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + "?</div></br>";
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Siguiente",
        data: function () {
          var element = {
            trialid: 'Bayesian22_04_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'
          };
          return element;
        }
      },

      // SCREEN 5: Recommendation 2  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {

          // Fetch % response
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values.length - 1] ) );

          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en Bayesian22_01 se puede obtener con answers[0]
              prompt: '<div class="justified">' +
              'Imagina que, independientemente de tu recomendación, tu paciente se realiza la ' + data_disease[jsPsych.timelineVariable('disease', true)].test_description + '. El resultado  es <b>'+ data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image.toUpperCase() + '</b>.<BR><BR>' +

              '<HR><div style="color:#424949; font-size:15px;">Estimaste que la probabilidad de ' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ' tener un ' + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ' si el resultado de la ' + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ' es <B>' + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + '</B>' + ' es del ' + answers[0] + '%.</div><HR><BR>' +

              data_disease[jsPsych.timelineVariable('disease', true)].follow_up_details + '. <BR><BR>' +
              //'Cuando se aplica, existe una probabilidad de ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_risk +
              '<B>Daños</B>: La ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + ' tiene asociada una probabilidad de ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_risk +
              '<br><br>¿Le recomendarías la ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + ' como '  + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + ' a tu paciente?</div>',
              options: ['&nbsp;Si', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        button_label: 'Siguiente',
        data: function () {
          var element = {
            trialid: 'Bayesian22_05_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'
          };
          return element;
        }
      },

      // SCREEN 6: Confidence in Recommendation 2 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = [Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian22_05_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian22_05_' + num})).select('response').values.length - 1] ) ),
                    Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian22_02_' + num})).select('response').values.length - 1] ) )];
          return "<div class='justified'>"+
            '<HR><div style="color:#424949; font-size:15px;">Has dicho que la probabilidad de ' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ' tener un ' + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ' si el resultado de la ' + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ' es <B>' + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + '</B>' + ' es del ' + answers[1] + '%.<BR><BR>' +
            'Tu paciente recibió un resultado <B>' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + '</B> en la ' + data_disease[jsPsych.timelineVariable('disease', true)].test_description + '.</div><HR><BR>' +
            "¿Con qué seguridad " + answers[0][0].trim().toUpperCase() + " le recomendarías la " + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + " como "  + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + " para el " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + "?</div></br>";
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Siguiente",
        data: function () {
          var element = {
            trialid: 'Bayesian22_06_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian22"]["type"],
            procedure: 'Bayesian22'
          };
          return element;
        }
      }
    ],
    data: {procedure: 'Bayesian22'},
    timeline_variables: within_selection["Bayesian22"],
    randomize_order: false, //random order
    sample: {
        type: 'custom',
        fn: function(t){
            return t; // show the trials in the reverse order
        }
    }
  };
  Bayesian22.push(within_timeline_01);

  Bayesian22.push({
      type: 'call-function',
      data: {trialid: Bayesian22 + '_giro_check_ending', procedure: Bayesian22},
      func: function(){
        giro_check = false;
      }
  });

  // within block finished
  Bayesian22.unshift(instructions_between_01);
  Bayesian22.unshift(if_instructions_000);
  questions.push.apply(questions, Bayesian22);

  //if (debug_mode == 'true') console.table(within_timeline_01.timeline_variables)

// between block finished ------------------------------------------------------

call_function("Bayesian22");

