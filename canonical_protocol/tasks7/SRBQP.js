/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SRBQP') );
SRBQP = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left>' +
  '<p><left><b><big>SRBQP</big></b><br />'+'Por favor, conteste a las siguientes afirmaciones según la escala del 1 al 7.' +'</p>'],
  data: {trialid: 'Instructions_01', procedure: 'SRBQP'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question001 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Mis creencias me han ayudado a sobrellevar el estrés ocasionado por la pandemia.</div>', options: ['&nbsp;1 Completamente en desacuerdo', '&nbsp;2 En desacuerdo', '&nbsp;3 En alguna medida en desacuerdo', '&nbsp;4 Ni acuerdo ni desacuerdo', '&nbsp;5 En alguna medida acuerdo', '&nbsp;6 De acuerdo', '&nbsp;7 Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SRBQP_001', procedure: 'SRBQP'}
};
SRBQP.push(question001);

var question002 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Mis creencias me han ayudado a sobrellevar momentos de ansiedad durante la pandemia.</div>', options: ['&nbsp;1 Completamente en desacuerdo', '&nbsp;2 En desacuerdo', '&nbsp;3 En alguna medida en desacuerdo', '&nbsp;4 Ni acuerdo ni desacuerdo', '&nbsp;5 En alguna medida acuerdo', '&nbsp;6 De acuerdo', '&nbsp;7 Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SRBQP_002', procedure: 'SRBQP'}
};
SRBQP.push(question002);

var question003 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Mis creencias me han ayudado a sobrellevar momentos de tristeza y depresión durante la pandemia.</div>', options: ['&nbsp;1 Completamente en desacuerdo', '&nbsp;2 En desacuerdo', '&nbsp;3 En alguna medida en desacuerdo', '&nbsp;4 Ni acuerdo ni desacuerdo', '&nbsp;5 En alguna medida acuerdo', '&nbsp;6 De acuerdo', '&nbsp;7 Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SRBQP_003', procedure: 'SRBQP'}
};
SRBQP.push(question003);

var question004 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Mis creencias se hicieron más fuertes durante la pandemia.</div>', options: ['&nbsp;1 Completamente en desacuerdo', '&nbsp;2 En desacuerdo', '&nbsp;3 En alguna medida en desacuerdo', '&nbsp;4 Ni acuerdo ni desacuerdo', '&nbsp;5 En alguna medida acuerdo', '&nbsp;6 De acuerdo', '&nbsp;7 Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SRBQP_004', procedure: 'SRBQP'}
};
SRBQP.push(question004);

var question005 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">En general, me considero una persona sin creencias.</div>', options: ['&nbsp;1 Completamente en desacuerdo', '&nbsp;2 En desacuerdo', '&nbsp;3 En alguna medida en desacuerdo', '&nbsp;4 Ni acuerdo ni desacuerdo', '&nbsp;5 En alguna medida acuerdo', '&nbsp;6 De acuerdo', '&nbsp;7 Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SRBQP_005', procedure: 'SRBQP'}
};
SRBQP.push(question005);

SRBQP.unshift(instruction_screen_experiment);
questions.push.apply(questions, SRBQP);

call_function("SRBQP");
