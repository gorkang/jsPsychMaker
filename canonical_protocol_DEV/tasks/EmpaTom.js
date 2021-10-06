
/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('EmpaTom') );;    //final timeline

EmpaTom = [];    //temporal timeline

  // preloading videos only works when the file is running on a server
  // if you run this experiment by opening the file directly in the browser,
  // then video preloading will be disabled to prevent CORS errors
  var preload = {
    type: 'preload',
    data: {trialid: 'preload_01', procedure: 'EmpaTom'},
    auto_preload: true
  }

  var instruction_screen_experiment = {
    type: 'html-button-response',
    stimulus: '<div style="max-width:600px;"><p>Descripcion de la tarea e instrucciones. Tom tiene Alzheimer....</p></div>',
    choices: ['Continue'],
    data: {trialid: 'Instructions_01', procedure: 'EmpaTom'}
  }

  var question01 = {
    type: 'video-button-response',
    stimulus: ['media/vid/Entrevista1.mp4'],
    choices: ['He visto el video'],
    margin_vertical: '10px',
    margin_horizontal: '8px',
    prompt: '',
    width: 600,
    autoplay: true,
    rate: 1,
    response_ends_trial: true,
    response_allowed_while_playing: false,
    data: {trialid: 'EmpaTom_01', procedure: 'EmpaTom'}
  }
  EmpaTom.push(question01);

  var question02 = {
    type: 'html-slider-response',
    stimulus: "<div class='justified'>¿Cómo te sientes?</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Mal", "Neutro", "Bien"], button_label: "Siguiente",
    data: {trialid: 'EmpaTom_02', procedure: 'EmpaTom'}
  };
  EmpaTom.push(question02);

  var question03 = {
    type: 'html-slider-response',
    stimulus: "<div class='justified'>¿Cuánta compasión sentiste por Tom?</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Nada", "Mucha"], button_label: "Siguiente",
    data: {trialid: 'EmpaTom_03', procedure: 'EmpaTom'}
  };
  EmpaTom.push(question03);

  var question04 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "<div class='justified'>Tom piensa.</div>", options: ['&nbsp;que es muy probable que olvide a su esposa producto del alzheimer', '&nbsp;que lo que menos desea es olvidarse de su esposa producto del alzheimer', '&nbsp;que se dará por vencido y olvidará a su esposa producto del alzheimer'], required: true, horizontal: false}],

    data: {trialid: 'EmpaTom_04', procedure: 'EmpaTom'}
  };
  EmpaTom.push(question04);


  EmpaTom.unshift(instruction_screen_experiment);
  EmpaTom.unshift(preload);

  questions.push.apply(questions, EmpaTom)

  questions.push({
      type: 'call-function',
    data: {trialid: 'EmpaTom_000', procedure: 'EmpaTom'},
      func: function(){
        if (online) {
          var data = jsPsych.data.get().filter({procedure: 'EmpaTom'}).csv();
        } else {
          var data = jsPsych.data.get().filter({procedure: 'EmpaTom'}).json();
        }
        saveData(data, online, 'EmpaTom');
      },
      procedure: 'EmpaTom'
  });
