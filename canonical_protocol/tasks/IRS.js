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

IRS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>IRS</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions', procedure: 'IRS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question1 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Es importante para mí personalmente ser escéptico sobre las afirmaciones que no están respaldadas por evidencia.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'IRS_01', procedure: 'IRS'}
};
IRS.push(question1);

var question2 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Es importante para mí personalmente ser racional y sensato incluso en discusiones acaloradas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'IRS_02', procedure: 'IRS'}
};
IRS.push(question2);

var question3 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Para mí es importante examinar personalmente las creencias tradicionales utilizando la lógica y la evidencia.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'IRS_03', procedure: 'IRS'}
};
IRS.push(question3);

var question4 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Es importante para mí personalmente que pueda justificar mis creencias utilizando argumentos y pruebas racionales.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'IRS_04', procedure: 'IRS'}
};
IRS.push(question4);

var question5 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Es importante para mí personalmente examinar críticamente mis creencias arraigadas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'IRS_05', procedure: 'IRS'}
};
IRS.push(question5);

var question6 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Para mí es importante ser una persona racional.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'IRS_06', procedure: 'IRS'}
};
IRS.push(question6);

IRS.unshift(instruction_screen_experiment);
IRS.push.apply(questions, IRS)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'IRS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'IRS'}).json();
      }
      saveData(data, online, 'IRS');
    },
    procedure: 'IRS'
});
