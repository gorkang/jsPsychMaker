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
      data: {procedure: 'IRS'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'IRS'
  }
);

IRS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Importancia de la racionalidad</big></b><br />'+'Por favor, conteste a las siguientes preguntas' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'IRS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }, 
    procedure: 'IRS'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Es importante para mí personalmente ser escéptico sobre las afirmaciones que no están respaldadas por evidencia.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'IRS_001', procedure: 'IRS'},
  procedure: 'IRS'
};
IRS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Es importante para mí personalmente ser racional y sensato incluso en discusiones acaloradas.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'IRS_002', procedure: 'IRS'},
  procedure: 'IRS'
};
IRS.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Para mí es importante examinar personalmente las creencias tradicionales utilizando la lógica y la evidencia.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'IRS_003', procedure: 'IRS'},
  procedure: 'IRS'
};
IRS.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Es importante para mí personalmente que pueda justificar mis creencias utilizando argumentos y pruebas racionales.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'IRS_004', procedure: 'IRS'},
  procedure: 'IRS'
};
IRS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Es importante para mí personalmente examinar críticamente mis creencias arraigadas.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'IRS_005', procedure: 'IRS'},
  procedure: 'IRS'
};
IRS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Para mí es importante ser una persona racional.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'IRS_006', procedure: 'IRS'},
  procedure: 'IRS'
};
IRS.push(question006);

IRS.unshift(instruction_screen_experiment);
questions.push.apply(questions, IRS);

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
