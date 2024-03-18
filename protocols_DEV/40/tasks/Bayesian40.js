/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


// EXPERIMENTAL DESIGN ---------------------------------------------------------

  // Between conditions
  //between_selection_task = usable_between("Bayesian40")

  // Within variables
  var disease = {disease: ['Cancer', 'Stroke']};
  var test_quality = {test_quality: ['lowQuality', 'highQuality']};

  // Randomize sex for stroke problem
  var sex = {sex: ['a man', 'a woman']};
  sex_randomized = jsPsych.randomization.factorial(sex, 1, false, false);

  // Randomize sex of doctor
  var sex2 = {sex: ['he', 'she', 'he', 'she']};
  sex_doctor_randomized = jsPsych.randomization.factorial(sex2, 1, false, false);


  // Randomize order of disease block
  disease_order = jsPsych.randomization.factorial(disease, 1, false, false);

  // Create test_quality orders for each block
  test_quality_order = [];
  test_quality_order.push(jsPsych.randomization.factorial(test_quality, 1, false, false));
  test_quality_order.push(jsPsych.randomization.factorial(test_quality, 1, false, false));

  // Create final array
  within_selection["Bayesian40"] = [];
  for (var i = 0; i < disease_order.length; i++) {
    for (var j = 0; j < disease_order.length; j++) {
      within_selection["Bayesian40"].push({ disease: disease_order[i]["disease"], test_quality: test_quality_order[i][j]["test_quality"] });
    }
  }
  //if (debug_mode === true) console.table(within_selection["Bayesian40"]);

  // Timeline fix ------------------------------------------------------------------------------

  var count_timeline = 0, base_current_trial_global = 0, new_fraction = 0, screen_count = 24;

  var progress_for_fraction = 0;

  function updateProgressBar(count_timeline, new_fraction, actual_progress) {
    count_timeline = count_timeline + (new_fraction * actual_progress)
    jsPsych.setProgressBar(count_timeline)
  }



// INSTRUCCIONES -----------------------------------------------------------------------------

// Page 1 varies per condition (one of the sentences)
function instructions_p1 (type) {

  instructions_p1_extra = {Image: "Also, an image representing the Positive or Negative Predictive Value for someone like your friend will be shown.<BR><BR>", 
                          TextPV: "Also, a textbox representing the Positive or Negative Predictive Value for someone like your friend will be shown.<BR><BR>",
                          Text: ""};

  instructions_page1 = `<H2>Instructions (1/4)</H2>In the following screens, we will ask you to give recommendations in two hypotetical scenarios:
  <ul>
    <li> a close friend who arrives for a routine consultation, asking about breast cancer screening</li>
    <li> a close friend who arrives at the emergency room with a suspected stroke</li>
  </ul>
    In each scenario, you will see a brief description, information about the prevalence of the disease for someone like your friend (*), and the characteristics of the test (sensitivity and specificity) that would be used to detect the disease.<BR><BR>` + 
  instructions_p1_extra[type] +
  `Please read the information carefully.<BR><BR>
  <HR>
  <p style = "font-size: small;">(*) The expected prevalence in the population of interest. In other words, how many people similar to your friend who undergo the test, we expect to have the disease.</p>
  <HR><BR>`

  return(instructions_page1);

}

// Page 2
instructions_page2 = `<H2>Instructions (2/4)</H2>
For each of the scenarios we will ask you to do the following:
<ul>
<li> estimate how much you can trust a positive or negative result in the test</li>
<li> would you recommend the test to your friend?</li>
<li> would you recommmend a follow up test or treatment after a positive or negative result in the initial test?
</ul>

Take the time you need and try to respond to the questions to the best of your ability.<BR><BR>`


// Page 3
function instructions_p3 (type) {

  instructions_p3_extra = {
    Image: `To make the task easier, you will be able to check the Predictive Values in an image similar to the ones below. <B>Click on the image to zoom in and out</B> (do it to activate the [ Next > ] button).<BR><BR>
    The images show how the Predictive Value changes depending on the age of the person taking the test or the time since the symptoms started.<BR><BR>
    <img class="image_zoom" src="media/images/Bayesian40/Example_PPV.png" style="max-width: 40%; max-height: 40%;"> <img class="image_zoom" src="media/images/Bayesian40/Example_NPV.png" style="max-width: 40%; max-height: 40%;"><BR><BR>`,
    TextPV: `To make the task easier, you will be able to check the Predictive Values in a text on the right of the screen.<BR><BR>`,
    Text: "<BR><BR>"};

  instructions_page3 = `<H2>Instructions (3/4)</H2>
  For the first task we will ask you to estimate how much you can trust a positive or negative result in the test. This can be done using the prevalence of the disease, and the sensitivity and specificity of the test.
  
  A more formal definition would be:
  <ul>
  <li><B>Positive Predictive Value</B>: the probability of having the disease when the test is positive</li><BR>
  <li><B>Negative Predictive Value</B>: the probability of NOT having the disease when the test is negative</li>
  </ul><BR>
  You will have all the necessary information in the screen. ` +
  instructions_p3_extra[type]

  return(instructions_page3);

}

// Page 4
instructions_page4 = `<H2>Instructions (4/4)</H2>The numerical information that will be presented is based on the scientific literature.<BR><BR>
<img src = "media/images/Bayesian40/intro.png"><BR><BR>If you have any doubts, you can review the instructions now by pressing the [ < Previous ] button.<BR><BR>
If you press the [ Next > ] button the task will begin and you will not be able to go back.<BR><BR>`


// IMAGE
data_type = {
    'Image': {'page1': {text: instructions_p1("Image")},
              'page2': {text: instructions_page2},
              'page3': {text: instructions_p3("Image")},
              'page4': {text: instructions_page4}
            },

    'TextPV': {'page1': {text: instructions_p1("TextPV")},
               'page2': {text: instructions_page2},
               'page3': {text: instructions_p3("TextPV")},
               'page4': {text: instructions_page4}
              },    
     
    'Text': {'page1': {text: instructions_p1("Text")},
             'page2': {text: instructions_page2},
             'page3': {text: instructions_p3("Text")},
             'page4': {text: instructions_page4}
           }
      };

// ------------------------------------------------------------------------------------------------



  // WITHIN conditions.
  data_disease = {
    'Cancer': {description_context1: "Imagine a very close friend is offered to participate in a routine <B>breast cancer screening</B> at no cost. Everyone in her age range is offered the screening test, regardless of health status. Your friend is ",
              // una mujer
              description_context2: `, 40 years old, without any relevant personal or familiar medical history, that does not consume alcohol or drugs.<BR><BR>
              Breast cancer is a very serious condition that can lead to death if not treated in time. But sometimes, breasts can have small lumps that can be confused with breast cancer although do not need to be treated.<BR><BR>`,
              brief_context: /*woman*/", 40 years old, without any relevant personal or familiar medical history, that does not consume alcohol or drugs, is offered to participate in a routine <B>breast cancer screening</B> at no cost.<BR>",
              number_PREVALENCE_x: 1, number_PREVALENCE_y: 105, number_SENSITIVITY: 95, number_SPECIFICITY: 88, disease_description: "breast cancer",
              test_description: "digital mammogram", test1: "screening", follow_up: "diagnostic test", follow_up_name: "biopsy",
              follow_up_details: "The recommended diagnostic test when there is suspicion of breast cancer is a biopsy of the breast tissue", 
              follow_up_risk: 'overdiagnosis of up to 10%, which can lead to unnecessary chemotherapy, radiotherapy or mastectomies.'
    },

    'Stroke': {description_context1: "Imagine a very close friend goes to the Emergency room with <B>symptoms compatible with a stroke that started 1 hour ago</B>. Your friend is ",
              // a man / a woman
              description_context2: `, 40 years old, without any relevant personal or familiar medical history, that does not consume alcohol or drugs.<BR><BR>
              Stroke is a very serious condition that can lead to death or permanent damage in the brain if not treated in time. But sometimes, other conditions can cause symptoms that can be confused with a stroke although they do not need to be treated.<BR><BR>`,
              brief_context: /*A woman/A man*/", 40 years old, without any relevant personal or familiar medical history, that does not consume alcohol or drugs, goes to the Emergency room with <B>symptoms compatible with a stroke that started 1 hour ago</B>.<BR>",
              number_PREVALENCE_x: 868, number_PREVALENCE_y: 1000, number_SENSITIVITY: 90, number_SPECIFICITY: 95, disease_description: "Stroke",
              test_description: "Difusion Magnetic Resonance", test1: "diagnostic", follow_up: "treatment", follow_up_name: "trombolysis",
              follow_up_details: "The recommended treatment when there is suspicion of cerebral infarction is thrombolysis", 
              follow_up_risk: "intracranial hemorrhage of 2%, which can end in death or severe disability."
    },
    
  };


  // WITHIN: data related to test_quality
  data_test_quality = {
    'lowQuality_Cancer': {image: 'media/images/Bayesian40/VPP_low_Cancer.png', textPV: '<B>Positive Predictive Value</B>: 30%<br>(very low) <span style = "font-size: small;"><BR>30 out of 100 positives are true positives<BR></span>', type_image: 'Positive', SINO: '', sex_patient: sex["sex"][1], sex_doctor: sex_doctor_randomized[0]["sex"]}, // sex always woman
    'highQuality_Cancer': {image: 'media/images/Bayesian40/VPN_high_Cancer.png', textPV: '<B>Negative Predictive Value</B>: 100%<br>(very high) <span style = "font-size: small;"><BR>100 out of 100 negatives are true negatives<BR></span>', type_image: 'Negative', SINO: 'NOT', sex_patient: sex["sex"][1], sex_doctor: sex_doctor_randomized[1]["sex"]}, // sex always woman
    'lowQuality_Stroke': {image: 'media/images/Bayesian40/VPN_low_Stroke.png', textPV: '<B>Negative Predictive Value</B>: 21%<br>(intermediate) <span style = "font-size: small;"><BR>21 out of 100 negatives are true negatives<BR></span>', type_image: 'Negative', SINO: 'NOT', sex_patient: sex_randomized[0]["sex"], sex_doctor: sex_doctor_randomized[2]["sex"]},
    'highQuality_Stroke': {image: 'media/images/Bayesian40/VPP_high_Stroke.png', textPV: '<B>Positive Predictive Value</B>: 100%<br>(very high) <span style = "font-size: small;"><BR>100 out of 100 positives are true positives<BR></span>', type_image: 'Positive', SINO: '', sex_patient: sex_randomized[1]["sex"], sex_doctor: sex_doctor_randomized[3]["sex"]}
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
  questions.push(check_fullscreen("Bayesian40"));
  Bayesian40 = [];

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
    pages: ['To be able to continue, the screen needs to be positioned horizontally (in landscape). <BR> <img src="media/images/Bayesian40/phone-rotation.png" style="max-width: 30%; max-height: 30%;"><BR>If the screen is vertical (in portrait) the, [Next >] button will be inactive.'],
    button_label_next: 'Next',
    data: {
      trialid: 'Instructions_000',
      condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
      procedure: 'Bayesian40'
    },
    show_clickable_nav: true,
    on_load: function() {
      giro_check = true;
      rectify_orientation();
    }, 
    on_finish: function (data) {
      data.condition_between = between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"];
    }
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
      procedure: 'Bayesian40'
    }
  };


    var instructions_PRE = {
      type: 'instructions',
      pages: ["<H2>Medical consents</H2>Please, read carefully the following instructions.<BR><BR>"],
      button_label_next: 'Loading task...',
      data: {
          trialid: 'Instructions_PRE',
          condition_between: between_selection["Bayesian40"]["type"],
          procedure: 'Bayesian40'
      },
      show_clickable_nav: true,
      on_load: function(){
      document.getElementById('jspsych-instructions-next').disabled = true;
      // Forced timeout to make sure between_selection is final
      setTimeout(function(){
      document.getElementById('jspsych-instructions-next').disabled = false;
      document.getElementById('jspsych-instructions-next').textContent = "Start";
      }, 1000);
     
    }
  };
  
  var instructions_between_01 = {
    type: 'instructions',
    pages: function() {
      return ([data_type[between_selection["Bayesian40"]["type"]]["page1"]["text"],
                data_type[between_selection["Bayesian40"]["type"]]["page2"]["text"],
                data_type[between_selection["Bayesian40"]["type"]]["page3"]["text"],
                data_type[between_selection["Bayesian40"]["type"]]["page4"]["text"]])
    },
    button_label_next: 'Next',
    button_label_previous: 'Previous',
    data: {
      trialid: 'Instructions_001',
      condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
      procedure: 'Bayesian40'
    },
    show_clickable_nav: true,
    on_load: function(){
      // we gonna use this on the next timeline
      progress_for_fraction = jsPsych.getProgressBarCompleted();
    }, 
    on_finish: function (data) {
      data.condition_between = between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"];
    }
  };

  //console.log(within_selection["Bayesian40"]);

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
              return (["<h2>Scenario " + (num).toString() + " out of 4</h1><BR>" + //(num-1)/2
              data_disease[jsPsych.timelineVariable('disease', true)].description_context1 +
              data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient +
              data_disease[jsPsych.timelineVariable('disease', true)].description_context2 +
              "<BR>"
            ]);
            },
            button_label_next: 'Start scenario',
            on_load: function(){
              if (count_timeline === 0){
                // Progress for one question/case (a timeline of 6 screens) for the progressbar
                progress_for_fraction = jsPsych.getProgressBarCompleted() - progress_for_fraction;

                // initial progress bar status
                count_timeline = jsPsych.getProgressBarCompleted()
                
                // initial trial
                base_current_trial_global = jsPsych.progress().current_trial_global;
                
                // new fraction is the size of 1 screen 
                // we have 4 timelines, and 6 questions on each timeline
                new_fraction = progress_for_fraction/(within_timeline_01.timeline.length)
              }
              updateProgressBar(count_timeline, new_fraction, jsPsych.progress().current_trial_global - base_current_trial_global)
              
              // Check Fullscreen and ask for it if not
              if (!hasTouchScreen) {
                let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || !(Math.abs(screen.width - window.innerWidth) > 40 || Math.abs(screen.height - window.innerHeight) > 40);
                if (!fullscreenElement) alert("Please, press F11 to return to Full Screen")
              };
            },
            data: function () {
              element = {
                trialid: 'Bayesian40_01_' + (parseInt(num) + 1).toString(),
                condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor,
                condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
                procedure: 'Bayesian40'
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
          
          if (jsPsych.timelineVariable('disease', true) == "Stroke") {
            plot_for = "times since the symptoms started"
          } else {
            plot_for = "ages"
          }

          var pct_width_left = "75%";
          var pct_width_right = "25%";
          
          // parte comun para ambas partes del between
          var html = '<div class="row" style="display: flex; align-items: center">';

          // 2 columns
          html += '<div class="column" style="float: left; width: ' + pct_width_left + '">' +
          '<B>Estimation of the <U>' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + '</U> Predictive Value</B><BR><BR>' +

          // Brief version of case
          '<HR><div style="color:#424949; font-size:15px;">Your friend, ' + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient[0] + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient.slice(1) + data_disease[jsPsych.timelineVariable('disease', true)].brief_context + '</div><HR><BR>' +

          "The " + data_disease[jsPsych.timelineVariable('disease', true)].test1 + " test commonly used to detect " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " is a " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + '.<BR><BR> ' +

          "In a person like your friend, " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " has a <B>" + prevalence_incidence[jsPsych.timelineVariable('disease', true)].label +" of " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_x + " out of " + data_disease[jsPsych.timelineVariable('disease', true)].number_PREVALENCE_y + '</B>.<BR><BR> ' +

          "The " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " has a <B>sensitivity of " + data_disease[jsPsych.timelineVariable('disease', true)].number_SENSITIVITY + "%</B> and a <B>specificity of " + data_disease[jsPsych.timelineVariable('disease', true)].number_SPECIFICITY + '%</B>. <BR><BR>'+

          "What is the probability of <B>" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + " having</B> a " + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + " if the " + data_disease[jsPsych.timelineVariable('disease', true)].test_description + " result is <B>" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + "</B>?" + '</div>';
          /*+ ", todo esto está asociado a " + data_disease[jsPsych.timelineVariable('disease')]["test_description"]*/

          // BETWEEN variable [Picture / TextPV / Text]:
          if (between_selection["Bayesian40"]["type"] == 'Image') {
            
            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">
            <div style="font-size:14px; text-align: justify;">The plot shows the <b>` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].type_image + ` Predictive Value</b> calculated from prevalence, sensitivity and specificity for different ` + plot_for + `: <br><br></div>
            <img class="image_zoom" src="` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].image + `" style="max-width: 100%; max-height: 100%;" onclick = document.querySelector('[id$=next]').disabled = true> 
            <div style="font-size:11px; text-align: center">Click on the image to zoom in/out.</div>
            <BR><BR>
            <div style="font-size:11px; text-align: center">&nbsp;</div>
            <div style="font-size:16px; text-align: center; border: dashed 1px; border-radius: 8px; padding: 5px;">` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].textPV + `</div>
            
            </div>`;

          } else if (between_selection["Bayesian40"]["type"] == 'TextPV') { // que pasa si las imagenes tienen distintos tamaños? #TODO

            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">
            <div style="font-size:14px; text-align: justify;">In the box you can see the <b>Predictive Value ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].type_image + `</b> calculated from the prevalence, sensitivity and specificity: <br><br></div>
            <div style="font-size:16px; text-align: center; border: dashed 1px; border-radius: 8px; padding: 5px;">` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + `_` + jsPsych.timelineVariable('disease', true)].textPV + `</div></div>`;
            
          } else if (between_selection["Bayesian40"]["type"] == 'Text') { // que pasa si las imagenes tienen distintos tamaños? #TODO

            html += 
            `<div class="column" style="display: flex; flex-direction: column; justify-content: center; height:` + height + `px; width:` + width + `px; float: left; width: ` + pct_width_right + `; margin-left: 25px">&nbsp;` +
            `</div> </div> `;

          }
          html += '</div><style>#column images {vertical-align: middle}</style>';
          html += '<p><input name ="Q0" type="number" required min=0 max=100 value autofocus> %</p>';
          // image_zoom
          //html += '<div id="fullpage_image" onclick="this.style.display=' + "'none'" + ';"></div>';
          return html;
        },
        button_label: 'Next',
        data: function () {
          // hay que conversar sobre lo que quedará guardado en stimulus del survey-html-form, esto incluye la modificacion del plugin
          var element = {
            trialid: 'Bayesian40_02_' + num,
            //condition_within: within_selection["Bayesian40"]["timeline_01"],
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor,
            condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
            procedure: 'Bayesian40'
          };
          return element;
        },
        on_load: function() {

          updateProgressBar(count_timeline, new_fraction, jsPsych.progress().current_trial_global - base_current_trial_global)

          // Only in the Image condition as it deactivates button
          //name_first_image = document.querySelectorAll('images')[0].currentSrc.split('/').reverse()[0];
          //console.log(document.querySelectorAll('images')[0].currentSrc.split('/').reverse()[0])
          if (between_selection["Bayesian40"]["type"] == 'Image') image_zoom();

        }
      },

      // SCREEN 3: Recommendation 1  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values.length - 1] ) );
          return [
            {// para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en Bayesian40_01 se puede obtener con answers[0]
              prompt: `<div class="justified"><HR><div style="color:#424949; font-size:15px;">
              You said the probability of ` + 
              data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the result of the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + `_` + jsPsych.timelineVariable("disease", true)].type_image + `</B>` + ` is ` + answers[0] + `%.</div><HR><BR>
    
              The physician arrives, ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor + ` recommends to <B>` + between_selection["Bayesian40"]["recommendation"] + `</B> the test. Your friend is unsure and insists on listening to your opinion.<BR><BR>

              Would you recommend the ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + ` as a <u>` + data_disease[jsPsych.timelineVariable('disease', true)].test1 + ` test ` +
              `</u> to detect ` + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ` to your friend?<BR></div>`,

              options: ['&nbsp;Yes', '&nbsp;No'],
              required: true,
              horizontal: false
            }
          ];
        },
        button_label: 'Next',
        on_load: function() {
          updateProgressBar(count_timeline, new_fraction, jsPsych.progress().current_trial_global - base_current_trial_global)
        },
        data: function () {
          var element = {
            trialid: 'Bayesian40_03_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor,
            condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
            procedure: 'Bayesian40'
          };
          return element;
        }
      },

      // SCREEN 4: Confidence in Recommendation 1 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {
          
          answers = [Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values.length - 1] ) ),
                    Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian40_03_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian40_03_' + num})).select('response').values.length - 1] ) )];

          if (answers[1][0].trim() == "Yes") {
            Yes_No = ""
          } else {
            Yes_No = "NOT"
          }

          return `<div class='justified'>
          <HR><div style="color:#424949; font-size:15px;">
          You said the probability of ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having a ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` result is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + `</B>` + ` is ` + answers[0][0] + `%.<BR>
          </div><HR><BR>
          How sure are you about ` + Yes_No + ` recommending the ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + ` as <u>` + data_disease[jsPsych.timelineVariable('disease', true)].test1 + `</u> test for ` + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ` to your friend?</div></br>`;
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['A little', 'A lot'],
        button_label: "Next",
        on_load: function() {
          updateProgressBar(count_timeline, new_fraction, jsPsych.progress().current_trial_global - base_current_trial_global)
        },
        data: function () {
          var element = {
            trialid: 'Bayesian40_04_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor,
            condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
            procedure: 'Bayesian40'
          };
          return element;
        }
      },

      // SCREEN 5: Recommendation 2  -------------------------------------------
      {
        type: 'survey-multi-choice-vertical',
        questions: function() {

          // Fetch % response
          answers = Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values.length - 1] ) );

          return [
            {
              // para el caso de que queramos obtener la primera respuesta de la lista de respuestas obtenidas en Bayesian40_01 se puede obtener con answers[0]
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
        on_load: function() {
          updateProgressBar(count_timeline, new_fraction, jsPsych.progress().current_trial_global - base_current_trial_global)
        },
        data: function () {
          var element = {
            trialid: 'Bayesian40_05_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor,
            condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
            procedure: 'Bayesian40'
          };
          return element;
        }
      },

      // SCREEN 6: Confidence in Recommendation 2 ------------------------------
      {
        type: 'html-slider-response',
        stimulus: function () {

          answers = [Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian40_02_' + num})).select('response').values.length - 1] ) ),
                    Object.values( JSON.parse( (jsPsych.data.get().filter({trialid: 'Bayesian40_05_' + num})).select('response').values[(jsPsych.data.get().filter({trialid: 'Bayesian40_05_' + num})).select('response').values.length - 1] ) )];

          if (answers[1][0].trim() == "Yes") {
            Yes_No = ""
          } else {
            Yes_No = "NOT"
          }

          return `<div class='justified'>
          <div style="color:#424949; font-size:15px;"><HR>
          You said the probability of ` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].SINO + ` having a ` + data_disease[jsPsych.timelineVariable("disease", true)].disease_description + ` if the ` + data_disease[jsPsych.timelineVariable("disease", true)].test_description + ` result is <B>` + data_test_quality[jsPsych.timelineVariable("test_quality", true) + '_' + jsPsych.timelineVariable("disease", true)].type_image + `</B>` + ` is ` + answers[0][0] + `%.<BR><BR>
          Your friend received a <B>` + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].type_image + `</B> result in the  ` + data_disease[jsPsych.timelineVariable('disease', true)].test_description + `.<HR></div><BR>
          How sure are you about ` + Yes_No + ` recommending the ` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up_name + ` as <u>` + data_disease[jsPsych.timelineVariable('disease', true)].follow_up + `</u> test for ` + data_disease[jsPsych.timelineVariable('disease', true)].disease_description + ` to your friend?</div></br>`;
        },
        require_movement:true,
        min: 0, max: 100, start: 50, step: 1,
        slider_width: 500,
        slider_number: true,
        labels: ['A little', 'A lot'],
        button_label: "Next",
        on_load: function() {
          updateProgressBar(count_timeline, new_fraction, jsPsych.progress().current_trial_global - base_current_trial_global)
        },
        data: function () {
          var element = {
            trialid: 'Bayesian40_06_' + num,
            condition_within: jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true) + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_patient + "_" + data_test_quality[jsPsych.timelineVariable('test_quality', true) + "_" + jsPsych.timelineVariable('disease', true)].sex_doctor,
            condition_between: between_selection["Bayesian40"]["type"] + "_" + between_selection["Bayesian40"]["recommendation"],
            procedure: 'Bayesian40'
          };
          return element;
        }
      }
    ],
    data: {procedure: 'Bayesian40'},
    timeline_variables: within_selection["Bayesian40"],
    randomize_order: false, //random order
    sample: {
      type: 'custom',
      fn: function(t){
        return t; // show the trials in the reverse order
      }
    }
  };
  Bayesian40.push(within_timeline_01);

  Bayesian40.push({
    type: 'call-function',
    data: { trialid: 'Instructions_000_giro_check_ending', procedure: 'Bayesian40' },
    func: function(){
      giro_check = false;
    }
  });

  // within block finished
  Bayesian40.unshift(instructions_between_01);
  Bayesian40.unshift(if_instructions_000);
  Bayesian40.unshift(instructions_PRE);
  
  var question_feedback = {
  type: 'survey-text',
  data: {trialid: 'Bayesian40_07', procedure: 'Bayesian40'},
  questions: [{prompt: "Could you briefly describe how you responded to the estimation and recommendation questions?", rows: 5, columns: 80, type: 'textarea', required: true, error_text: "Please enter text here."}],
};
Bayesian40.push(question_feedback);
  
  questions.push.apply(questions, Bayesian40);



  //if (debug_mode == 'true') console.table(within_timeline_01.timeline_variables)

// between block finished ------------------------------------------------------

call_function("Bayesian40");
