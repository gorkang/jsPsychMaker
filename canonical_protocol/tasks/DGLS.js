/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// ESCALA DE RED SOCIAL DE LUBBEN – REVISADA (DGLS-R)

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DGLS') );
DGLS = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  fullscreen_mode: true,
  pages: [`<b><big>Escala de Soledad de Jong Gierveld</big></b><BR>Por favor indica para cada una de las siguientes 11 afirmaciones el grado en que se aplican en ti de acuerdo a tu situación actual y respecto a lo que sientes ahora.<BR><BR>`],
  button_label_next: 'Continuar',
  data: {trialid: 'Instructions_01', procedure: 'DGLS'},
  show_clickable_nav: true,
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Siempre hay alguien con quien puedo hablar de mis problemas diarios.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_001', procedure: 'DGLS'}
};
DGLS.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Echo de menos tener un buen amigo de verdad.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_002', procedure: 'DGLS'}
};
DGLS.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Siento una sensación de vacío a mi alrededor.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_003', procedure: 'DGLS'}
};
DGLS.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Hay suficientes personas a las que puedo recurrir en caso de necesidad.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_004', procedure: 'DGLS'}
};
DGLS.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Echo de menos la compañía de otras personas.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_005', procedure: 'DGLS'}
};
DGLS.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Pienso que mi círculo de amistad es demasiado limitado.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_006', procedure: 'DGLS'}
};
DGLS.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tengo mucha gente en la que confiar completamente.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_007', procedure: 'DGLS'}
};
DGLS.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Hay suficientes personas con las que tengo una amistad muy cercana.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_008', procedure: 'DGLS'}
};
DGLS.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Echo de menos tener gente a mi alrededor.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_009', procedure: 'DGLS'}
};
DGLS.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me siente abandonado a menudo.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_010', procedure: 'DGLS'}
};
DGLS.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Puede contar con mis amigos siempre que lo necesito.', options: ['&nbsp;No', '&nbsp;Más o menos', '&nbsp;Si'], required: true}],
  data: {trialid: 'DGLS_011', procedure: 'DGLS'}
};
DGLS.push(question011);

DGLS.unshift(instruction_screen_experiment);
DGLS.push.apply(questions, DGLS);
call_function("DGLS");