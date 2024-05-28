/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escala de autoestima de Rosenberg: EAR

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('EAR') );
EAR = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>EAR</big></b><br />'+
  'Indique su nivel de acuerdo con las siguientes frases.' +'</p>'],
  data: {trialid: 'Instructions_01', procedure: 'EAR'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Siento que soy una persona digna de aprecio, al menos en igual medida que los demás.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_001', procedure: 'EAR'}
};
EAR.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Creo que tengo un buen número de cualidades.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_002', procedure: 'EAR'}
};
EAR.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En general, me inclino a pensar que soy un/a fracasado/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_003', procedure: 'EAR'}
};
EAR.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Soy capaz de hacer las cosas tan bien como la mayoría de la gente.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_004', procedure: 'EAR'}
};
EAR.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Siento que no tengo muchos motivos para sentirme orgulloso/a de mi.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_005', procedure: 'EAR'}
};
EAR.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tengo una actitud positiva hacia mí mismo/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_006', procedure: 'EAR'}
};
EAR.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En general, estoy satisfecho conmigo mismo/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_007', procedure: 'EAR'}
};
EAR.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Desearía valorarme más a mi mismo/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_008', procedure: 'EAR'}
};
EAR.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">A veces me siento verdaderamente inútil.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_009', procedure: 'EAR'}
};
EAR.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">A veces pienso que no soy bueno/a para nada.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_010', procedure: 'EAR'}
};
EAR.push(question010);

EAR.unshift(instruction_screen_experiment);
questions.push.apply(questions, EAR);

call_function("EAR");