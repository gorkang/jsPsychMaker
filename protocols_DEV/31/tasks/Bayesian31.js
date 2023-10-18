/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


// EXPERIMENTAL DESIGN ---------------------------------------------------------

  // Between conditions
  //between_selection_task = usable_between("Bayesian31")

  // Within variables
  var disease = {disease: ['Cancer', 'Stroke']};
  var test_quality = {test_quality: ['lowQuality', 'highQuality']};

  // Randomize sex for stroke problem
  var sex = {sex: ['a man', 'a woman']};
  sex_randomized = jsPsych.randomization.factorial(sex, 1, false, false);

  // Randomize order of disease block
  disease_order = jsPsych.randomization.factorial(disease, 1, false, false);

  // Create test_quality orders for each block
  test_quality_order = [];
  test_quality_order.push(jsPsych.randomization.factorial(test_quality, 1, false, false));
  test_quality_order.push(jsPsych.randomization.factorial(test_quality, 1, false, false));

  // Create final array
  within_selection["Bayesian31"] = [];
  for (var i = 0; i < disease_order.length; i++) {
    for (var j = 0; j < disease_order.length; j++) {
      within_selection["Bayesian31"].push({ disease: disease_order[i]["disease"], test_quality: test_quality_order[i][j]["test_quality"] });
    }
  }
  //if (debug_mode === true) console.table(within_selection["Bayesian31"]);



// INSTRUCCIONES -----------------------------------------------------------------------------

// Page 1 varies per condition (one of the sentences)
function instructions_p1 (type) {

  instructions_p1_extra = {Image: "Also, an image representing the Positive or Negative Predictive value for someone like your friend will be shown.", 
                          TextPV: "Also, a textbox representing the Positive or Negative Predictive value for someone like your friend will be shown.",
                          Text: ""};

  instructions_page1 = `<H2>Instructions (1/3)</H2>In the following screens, we will ask you to give recommendations in two hypotetical scenarios:<BR><BR>
    <li> a close friend who arrives for a routine consultation, asking about breast cancer screening</li>
    <li> a close friend who arrives at the emergency room with a suspected stroke</li><BR>
    In each case you will see a brief description of the case, information about the prevalence (*) of the disease for someone like that person, and the characteristics of the test (sensitivity and specificity) that would be used to detect that disease.` + 
  instructions_p1_extra[type] +

  `<BR><BR>Please read the information carefully and respond to the best of your ability.<BR><BR>
  <HR>
  <p style = "font-size: small;">(*) We refer to the expected prevalence in the population of interest, that is, how many people similar to the case presented who undergo the test we expect to suffer from the disease.</p>
  <HR>
  <BR>`

  return(instructions_page1);

}

// Page 3
instructions_page3 = `<H2>Instrucciones (3/3)</H2>La información numérica que se presentará en los siguientes casos está basada en literatura científica. 
Hemos intentado extraer los datos de artículos de la mejor calidad posible, como revisiones sistemáticas, meta-análisis, etc. por ejemplo:<BR><BR>
<img src = "media/img/Bayesian22/intro.png"><BR><BR>Si tienes alguna duda, puedes revisar las instrucciones ahora pulsando el botón [ < Anterior ].<BR><BR>
Si presionas el botón [ Siguiente > ] empezará la tarea y no podrás volver atrás.<BR><BR>`


// IMAGE
data_type = {
    'Image': {'page1': {text: instructions_p1("Image")},
                              
              'page2': {text: `<H2>Instrucciones (2/3)</H2>Usando la prevalencia, sensibilidad y especificidad es posible calcular:<BR><BR>
                              <li><B>Valor Predictivo Positivo</B>: la probabilidad de tener la enfermedad cuando el test da positivo</li><BR>
                              <li><B>Valor Predictivo Negativo</B>: la probabilidad de NO tener la enfermedad cuando el test da negativo</li><BR><BR>
                              // ONLY in 'IMAGE'
                              Para facilitar la tarea, podrás consultar los Valores Predictivos en una imagen similar a las de abajo. <B>Haz click en la imagen para ampliarla y vuelve a hacer click en ella para reducirla</B> (hazlo para que se active el botón [ Siguiente > ] ).<BR><BR>
                              En las imágenes se ve como cambia el Valor Predictivo a partir de la prevalencia y los falsos positivos(+) o negativos(-).<BR><BR>
                              // Images
                              <img class="image_zoom" src="media/img/Bayesian22/instructions1.png" style="max-width: 40%; max-height: 40%;"> <img class="image_zoom" src="media/img/Bayesian22/instructions2.png" style="max-width: 40%; max-height: 40%;">
                              <BR><BR>`
                              },
                              
              'page3': {text: instructions_page3}
            },

    'TextPV': {'page1': {text: instructions_p1("TextPV")},
            
              'page2': {text: `<H2>Instrucciones (2/3)</H2>Usando la prevalencia, sensibilidad y especificidad es posible calcular:<BR><BR>
                          <li><B>Valor Predictivo Positivo</B>: la probabilidad de tener la enfermedad cuando el test da positivo</li><BR>
                          <li><B>Valor Predictivo Negativo</B>: la probabilidad de NO tener la enfermedad cuando el test da negativo</li><BR><BR>
                          // ONLY in 'TextPV'
                          Para facilitar la tarea, podrás consultar los Valores Predictivos en un texto a la derecha de la pantalla.<BR><BR>
                          <BR><BR>`
                          },
                          
              'page3': {text: instructions_page3}
              },    
    
    // TEXT  
    'Text': {'page1': {text: instructions_p1("Text")},
                             
              'page2': {text: `<H2>Instrucciones (2/3)</H2>Usando la prevalencia, sensibilidad y especificidad es posible calcular:<BR><BR> 
                              <li><B>Valor Predictivo Positivo</B>: la probabilidad de tener la enfermedad cuando el test da positivo</li><BR>
                              <li><B>Valor Predictivo Negativo</B>: la probabilidad de NO tener la enfermedad cuando el test da negativo</li><BR><BR>
                              // ONLY in 'TEXT'
                              Para facilitar la tarea, abajo te mostramos como se calculan:<BR><BR>
                              <li><B>Valor Predictivo Positivo</B>: Positivos verdaderos / (Positivos verdaderos + Falsos Positivos)</li><BR>
                              <li><B>Valor Predictivo Negativo</B>: Negativos verdaderos / (Negativos verdaderos + Falsos Negativos)</li><BR><BR>
                              <BR><BR>`
                              },
                              
             'page3': {text: instructions_page3}
           }
      };

// ------------------------------------------------------------------------------------------------



  // WITHIN conditions.
  data_disease = {
    'Cancer': {description_context1: "Imagine a very close friend is offered to participate in a routine <B>breast cancer screening</B> at no cost. Everyone in her age range is offered the screening test, regardless of health status. Your friend is ",
              // una mujer
              description_context2: `, 40 years old, with good health and without any relevant personal or familiar medical history.<BR><BR>`,
              brief_context: /*mujer*/", 40 years old, with good health and without any relevant personal or familiar medical history is offered to participate in a routine <B>breast cancer screening</B> at no cost.<BR>",
              number_PREVALENCE_x: 1, number_PREVALENCE_y: 105, number_SENSITIVITY: 95, number_SPECIFICITY: 88, disease_description: "breast cancer",
              test_description: "digital mammogram", test1: "screening", follow_up: "diagnostic test", follow_up_name: "biopsy",
              follow_up_details: "The recommended diagnostic test when there is suspicion of breast cancer is a biopsy of the breast tissue", 
              follow_up_risk: 'overdiagnosis of up to 10%, which can lead to unnecessary chemotherapy, radiotherapy or mastectomies.'
    },

    'Stroke': {description_context1: "Imagine a very close friend goes to the Emergency room with <B>symptoms compatible with a Stroke</B>. Your friend is ",
              // un hombre / una mujer
              description_context2: `, 40 years old, with good health and without any relevant personal or familiar medical history.<BR><BR>`,
              brief_context: /*Una mujer/Un hombre*/", 40 years old, with good health and without any relevant personal or familiar medical history goes to the Emergency room with <B>symptoms compatible with a Stroke</B>.<BR>",
              number_PREVALENCE_x: 868, number_PREVALENCE_y: 1000, number_SENSITIVITY: 90, number_SPECIFICITY: 95, disease_description: "Stroke",
              test_description: "Difusion Magnetic Resonance", test1: "diagnostic", follow_up: "treatment", follow_up_name: "trombolysis",
              follow_up_details: "The recommended treatment when there is suspicion of cerebral infarction is thrombolysis", 
              follow_up_risk: "intracranial hemorrhage of 2%, which can end in death or severe disability."
    },
    
  };

  // WITHIN: data related to test_quality
  data_test_quality = {
    'lowQuality_Cancer': {image: 'media/images/Bayesian31/VPP_low_Cancer.png', type_image: 'positive', SINO: '', sex_patient: sex["sex"][1]}, // sex always woman
    'highQuality_Cancer': {image: 'media/images/Bayesian31/VPN_high_Cancer.png', type_image: 'negative', SINO: 'NO', sex_patient: sex["sex"][1]}, // sex always woman
    'lowQuality_Stroke': {image: 'media/images/Bayesian31/VPN_low_Stroke.png', type_image: 'negative', SINO: 'NO', sex_patient: sex_randomized[0]["sex"]},
    'highQuality_Stroke': {image: 'media/images/Bayesian31/VPP_high_Stroke.png', type_image: 'positive', SINO: '', sex_patient: sex_randomized[1]["sex"]}
  };

  // The label we use depends on the disease
  prevalence_incidence = {
    'Cancer': {label: 'prevalence'},
    'Stroke': {label: 'prevalence'}
  };


  // Counter for sections
  num = 0;

// BEGIN EXPERIMENT -------------------------------------------------------------

  // Final array
  questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
  questions.push(check_fullscreen("Bayesian31"));
  Bayesian31 = [];

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
      pages: ['To be able to continue, the screen needs to be positioned horizontally (in landscape). <BR> <img src="media/images/Bayesian31/iphone-rotation-475102.png" style="max-width: 30%; max-height: 30%;"><BR>If the screen is vertical (in portrait) the, [Next >] button will be inactive.'],
      button_label_next: 'Next',
      data: {trialid: 'Instructions_000',
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'},
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
      condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
      procedure: 'Bayesian31'
    }
  };

  var instructions_between_01 = {
      type: 'instructions',
      pages: function() {
        return ([data_type[between_selection["Bayesian31"]["type"]]["page1"]["text"],
                 data_type[between_selection["Bayesian31"]["type"]]["page2"]["text"],
                 data_type[between_selection["Bayesian31"]["type"]]["page3"]["text"]])
      },
      button_label_next: 'Next',
      button_label_previous: 'Anterior',
      data: {trialid: 'Instructions_001',
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'},
      show_clickable_nav: true,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };

  //console.log(within_selection["Bayesian31"]);

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
                if(window.innerWidth != screen.width || window.innerHeight != screen.height) alert("Please, press F11 to return to full screen")
              };
            },
            data: function () {
              element = {
                trialid: 'Bayesian31_01_' + (parseInt(num) + 1).toString(),
                condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
                condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
                procedure: 'Bayesian31'
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
          '<B>Estimation of the <U>' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + '</U> predictive value</B><BR><BR>' +

          // Brief version of case
          '<HR><div style="color:#424949; font-size:15px;">' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient[0].toUpperCase() + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient.slice(1) + data_disease[jsPsych.timelineVariable('disease', true)].brief_context + '</div><HR><BR>' +

          //"Para detectar " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ", se realiza una " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + '.<BR><BR> ' +
          "The test " + data_disease[jsPsych.timelineVariable('disease', true)].test1 + " commonly used to detect " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " is " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + '.<BR><BR> ' +
          "In a person like your friend, the " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " has a <B>" + prevalence_incidence[jsPsych.timelineVariable('disease', true)].label +" of " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_x + " out of " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_y + '</B>.<BR><BR> ' +
          "The " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " has a <B>sensitivity of " + data_disease[jsPsych.timelineVariable('disease', true)].number_SENSITIVITY + "%</B> and a <B>specificity of " + data_disease[jsPsych.timelineVariable('disease', true)].number_SPECIFICITY + '%</B>. <BR><BR>'+

          '<HR><div style="color:#424949; font-size:15px;">' +
          "The physician recomments that your friend <B>" + between_selection["Bayesian31"]["recommendation"] + "</B> take the test, but it is ultimately your call" + '.<BR> ' +
          '</div><HR><BR>' +

          "What is the probability of " + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + " having a " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " if the " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " result is <B>" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + "</B>?" + '</div>';
          /*+ ", todo esto está asociado a " + data_disease[jsPsych.timelineVariable('disease')]["test_description"]*/

          // BETWEEN variable [Picture / TextPV / Text]:
          if (between_selection["Bayesian31"]["type"] == 'Image') {
            
            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">
            <div style="font-size:14px; text-align: justify;">In the plot you can see how the <b>Predictive Value ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].type_image + `</b> changes depening of the prevalence, sensitivity and specificity: <br><br></div>
            <img class="image_zoom" src="` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].image + `" style="max-width: 100%; max-height: 100%;" onclick = document.querySelector('[id$=next]').disabled = true> 
            <div style="font-size:11px; text-align: center">Click on the image to zoom in/out.<BR></div>
            <br>
            <div style="font-size:16px; text-align: center; border: dashed 1px; border-radius: 8px; padding: 5px;">` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].textPV + `</div>
            
            </div>`;

          } else if (between_selection["Bayesian31"]["type"] == 'TextPV') { // que pasa si las imagenes tienen distintos tamaños? #TODO

            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">
            <div style="font-size:14px; text-align: justify;">In the box you can see the <b>Predictive Value ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].type_image + `</b> calculated from the prevalence, sensitivity and specificity: <br><br></div>
            <div style="font-size:16px; text-align: center; border: dashed 1px; border-radius: 8px; padding: 5px;">` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].textPV + `</div></div>`;
            
          } else if (between_selection["Bayesian31"]["type"] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO

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
        button_label: 'Next',
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'Bayesian31_02_' + num,
            //condition_within: within_selection["Bayesian31"]["timeline_01"],
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'
          };
          return element;
        },
        on_load: function() {

          // Only in the Image condition as it deactivates button
          //name_first_image = document.querySelectorAll('img')[0].currentSrc.split('/').reverse()[0];
          //console.log(document.querySelectorAll('img')[0].currentSrc.split('/').reverse()[0])
          if (between_selection["Bayesian31"]["type"] == 'Image') image_zoom();

        }
      },

      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values.length - 1] ) );
          return [
            {// para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en Bayesian31_01 se puede obtener con answers[0]
              prompt: `<div class="justified"><HR><div style="color:#424949; font-size:15px;">
              You said the probability of ` + 
              data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the result of the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + `_` + jsPsych.timelineVariable("disease", true)].type_image + `</B>` + ` is ` + answers[0] + `%.</div><HR><BR>

              Would you recommend the ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + ` as a <u>` + data_disease[jsPsych.timelineVariable('disease', true)].test1 + ` test ` +
              `</u> to detect ` + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ` to your friend?</div>`,
              options: ['&nbsp;Yes', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        button_label: 'Next',
        data: function () {
          var element = {
            trialid: 'Bayesian31_03_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'
          };
          return element;
        }
      },

      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = [Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values.length - 1] ) ),
                    Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian31_03_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian31_03_' + num})).select('response').values.length - 1] ) )];
          return `<div class='justified'><HR><div style="color:#424949; font-size:15px;">
          You said the probability of ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having a ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` result is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + `</B>` + ` is ` + answers[0][0] + `%.</div><HR><BR>
          How sure are you about ` + answers[1][0].trim().toUpperCase() + ` recommending the ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + ` as <u>` + data_disease[jsPsych.timelineVariable('disease', true)].test1 + `</u> test for ` + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ` to your friend?</div></br>`;
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Next",
        data: function () {
          var element = {
            trialid: 'Bayesian31_04_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'
          };
          return element;
        }
      },

      // SCREEN 5: Recommendation 2  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {

          // Fetch % response
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values.length - 1] ) );

          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en Bayesian31_01 se puede obtener con answers[0]
              prompt: `<div class="justified">
              Imagine that, regardless of your recommendation, your friend takes the ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + `. The result is <b>` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image.toUpperCase() + `</b>.<BR><BR>
              <HR><div style="color:#424949; font-size:15px;">You estimated the probability of ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having a ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` result is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + `</B> is ` + answers[0] + `%.</div><HR><BR>` +
              data_disease[jsPsych.timelineVariable('disease', true)].follow_up_details + `. <BR><BR>` +
              //'Cuando se aplica, existe una probabilidad de ' + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_risk +
              `<B>Harms</B>: The ` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + ` has associated a probability of ` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_risk +
              `<br><br>Would you recomend the ` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + ` as `  + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + ` to your friend?</div>`,
              options: ['&nbsp;Yes', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        button_label: 'Next',
        data: function () {
          var element = {
            trialid: 'Bayesian31_05_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'
          };
          return element;
        }
      },

      // SCREEN 6: Confidence in Recommendation 2 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          answers = [Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian31_05_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian31_05_' + num})).select('response').values.length - 1] ) ),
                    Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian31_02_' + num})).select('response').values.length - 1] ) )];
          return `<div class='justified'><HR><div style="color:#424949; font-size:15px;">
          You said the probability of ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having a ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` result is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + `</B>` + ` is ` + answers[0][0] + `%.</div><HR><BR>
          Your friend received a <B>` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + `</B> result in the  ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + `.</div><HR><BR>
          How sure are you about ` + answers[0][0].trim().toUpperCase() + ` recommending the ` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + ` as <u>` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + `</u> test for ` + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ` to your friend?</div></br>`;
        },



        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['Poca', 'Mucha'],
        button_label: "Next",
        data: function () {
          var element = {
            trialid: 'Bayesian31_06_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient,
            condition_between: between_selection["Bayesian31"]["type"] + "_" + between_selection["Bayesian31"]["recommendation"],
            procedure: 'Bayesian31'
          };
          return element;
        }
      }
    ],
    data: {procedure: 'Bayesian31'},
    timeline_variables: within_selection["Bayesian31"],
    randomize_order: false, //random order
    sample: {
        type: 'custom',
        fn: function(t){
            return t; // show the trials in the reverse order
        }
    }
  };
  Bayesian31.push(within_timeline_01);

  Bayesian31.push({
      type: 'call-function',
      data: {trialid: Bayesian31 + '_giro_check_ending', procedure: Bayesian31},
      func: function(){
        giro_check = false;
      }
  });

  // within block finished
  Bayesian31.unshift(instructions_between_01);
  Bayesian31.unshift(if_instructions_000);
  questions.push.apply(questions, Bayesian31);

  //if (debug_mode == 'true') console.table(within_timeline_01.timeline_variables)

// between block finished ------------------------------------------------------

call_function("Bayesian31");
