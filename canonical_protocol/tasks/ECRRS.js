/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ECRRS') );
ECRRS = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  fullscreen_mode: true,
  pages: [`<b><big>Escala de Apego: experiencias en relaciones cercanas</big></b><BR>Por favor conteste las siguientes preguntas sobre su MADRE o la persona que es su figura materna.<BR><BR>`],
  button_label_next: 'Continuar',
  data: {trialid: 'Instructions_01', procedure: 'ECRRS'},
  show_clickable_nav: true,
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me ayuda acudir a esta persona en momentos de adversidad.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_001', procedure: 'ECRRS'}
};
ECRRS.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Suelo conversar de mis problemas y preocupaciones con esta persona.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_002', procedure: 'ECRRS'}
};
ECRRS.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Hablo más de mis cosas con esta persona.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_003', procedure: 'ECRRS'}
};
ECRRS.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me resulta fácil depender emocionalmente de esta persona.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_004', procedure: 'ECRRS'}
};
ECRRS.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me siento incómodo(a) abriéndome con esta persona.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_005', procedure: 'ECRRS'}
};
ECRRS.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Prefiero no mostrarle a esta persona como en el fondo me siento.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_006', procedure: 'ECRRS'}
};
ECRRS.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Habitualmente me preocupa que yo no le importe realmente a esta persona.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_007', procedure: 'ECRRS'}
};
ECRRS.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Temo que esta persona pueda abandonarme.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_008', procedure: 'ECRRS'}
};
ECRRS.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me preocupa que esta persona no se preocupe tanto por mí como yo me preocupo por ella.', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No aplica'], required: true}],
  data: {trialid: 'ECRRS_009', procedure: 'ECRRS'}
};
ECRRS.push(question009);

// Randomize order of items
//if (debug_mode === false) ECRRS = jsPsych.randomization.repeat(ECRRS,1);
ECRRS.unshift(instruction_screen_experiment);
ECRRS.push.apply(questions, ECRRS);

call_function("ECRRS");