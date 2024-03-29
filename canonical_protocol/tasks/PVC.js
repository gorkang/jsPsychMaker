/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PVC') );
PVC = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>DASS-21</big></b><br />'+'Por favor lea las siguientes afirmaciones e indique (0, 1, 2, 3) cuánto esta afirmación le aplicó a usted durante la semana pasada. No hay respuestas correctas o incorrectas. No tome demasiado tiempo para contestar.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'PVC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted se ha vacunado contra el coronavirus / covid-19?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PVC_001', procedure: 'PVC'}
};
PVC.push(question001);

var question001_1 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted se va a vacunar contra el coronavirus covid-19?</div>', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No estoy seguro'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PVC_001_1', procedure: 'PVC'}
};

var if_question001_1 = {
  timeline: [question001_1],
  data: {trialid: 'PVC_001_1_if', procedure: 'PVC'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'PVC_001'))['response'])['Q0']).trim();
    if((data) ==  'No'){
      return true;
    } else {
      return false;
    }
  }
};
PVC.push(if_question001_1);

//PVC.unshift(instruction_screen_experiment);
questions.push.apply(questions, PVC);

call_function("PVC");
