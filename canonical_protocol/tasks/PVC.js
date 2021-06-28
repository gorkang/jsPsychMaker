/**
 * CSCN lab
/**
This document was made with test_maker
*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

questions.push(
  {
    timeline: [{
      type: 'fullscreen',
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'PVC'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'PVC'
  }
);

PVC = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>DASS-21</big></b><br />'+'Por favor lea las siguientes afirmaciones e indique (0, 1, 2, 3) cuánto esta afirmación le aplicó a usted durante la semana pasada. No hay respuestas correctas o incorrectas. No tome demasiado tiempo para contestar.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'PVC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'PVC'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted se ha vacunado contra el coronavirus / covid-19?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PVC_001', procedure: 'PVC'},
  procedure: 'PVC'
};
PVC.push(question001);

var question001_1 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted se va a vacunar contra el coronavirus covid-19?</div>', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No estoy seguro'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PVC_001_1', procedure: 'PVC'},
  procedure: 'PVC'
};

var if_question001_1 = {
  timeline: [question001_1],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'PVC_001'))['response'])['Q0']).trim();
    if((data) ==  'No'){
      return true;
    } else {
      return false;
    }
  },
  procedure: 'PVC'
};
PVC.push(if_question001_1);

//PVC.unshift(instruction_screen_experiment);
questions.push.apply(questions, PVC);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'PVC'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'PVC'}).json();
      }
      saveData(data, online, 'PVC');
    },
    procedure: 'PVC'
});
