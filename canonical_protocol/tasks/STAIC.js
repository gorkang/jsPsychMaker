/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('STAIC') );
STAIC = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  fullscreen_mode: true,
  pages: [`<b><big>STAIC (Ansiedad Rasgo)</big></b><BR>A continuación encontrarás frases que se utilicen para decir algo de ti mismo. Lee cada frase y marca la respuesta (casi nunca, a veces, a menudo) que mejor diga <b>COMO TE SIENTES EN GENERAL</b>, no sólo en este momento.<br><br>Escoge la respuesta que mejor diga como te sientes GENERALMENTE.<BR><BR>`],
  button_label_next: 'Continuar',
  data: {trialid: 'Instructions_01', procedure: 'STAIC'},
  show_clickable_nav: true,
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me preocupa cometer errores', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_001', procedure: 'STAIC'}
};
STAIC.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Siento ganas de llorar', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_002', procedure: 'STAIC'}
};
STAIC.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me siento desgraciado(a)', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_003', procedure: 'STAIC'}
};
STAIC.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me cuesta tomar una decisión', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_004', procedure: 'STAIC'}
};
STAIC.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me cuenta enfrentarme a mis problemas', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_005', procedure: 'STAIC'}
};
STAIC.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me preocupo demasiado', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_006', procedure: 'STAIC'}
};
STAIC.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me encuentro molesto(a)', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_007', procedure: 'STAIC'}
};
STAIC.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Pensamientos sin importancia me vienen a la cabeza y me molestan', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_008', procedure: 'STAIC'}
};
STAIC.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me preocupan las cosas del colegio', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_009', procedure: 'STAIC'}
};
STAIC.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me cuesta decidirme en lo que tengo que hacer', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_010', procedure: 'STAIC'}
};
STAIC.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Noto que mi corazón late más rápido', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_011', procedure: 'STAIC'}
};
STAIC.push(question011);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Aunque no lo digo, tengo miedo', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_012', procedure: 'STAIC'}
};
STAIC.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me preocupo por cosas que puedan ocurrir', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_013', procedure: 'STAIC'}
};
STAIC.push(question013);

var question0014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me cuesta quedarme dormido por las noches', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_0014', procedure: 'STAIC'}
};
STAIC.push(question0014);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tengo sensaciones extrañas en el estómago', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_015', procedure: 'STAIC'}
};
STAIC.push(question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me preocupa lo que otros piensen de mi', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_016', procedure: 'STAIC'}
};
STAIC.push(question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me influyen tanto los problemas que no puedo olvidarlos durante un tiempo', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_017', procedure: 'STAIC'}
};
STAIC.push(question017);

var question018 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tomo las cosas demasiado en serio', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_018', procedure: 'STAIC'}
};
STAIC.push(question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Encuentro muchas dificultades en mi vida', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_019', procedure: 'STAIC'}
};
STAIC.push(question019);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me siento menos feliz que los demás', options: ['&nbsp;Casi Nunca', '&nbsp;A veces', '&nbsp;A menudo'], required: true}],
  data: {trialid: 'STAIC_020', procedure: 'STAIC'}
};
STAIC.push(question020);

// Randomize order of items
//if (debug_mode === false) STAIC = jsPsych.randomization.repeat(STAIC,1);
STAIC.unshift(instruction_screen_experiment);
STAIC.push.apply(questions, STAIC);

call_function("STAIC");