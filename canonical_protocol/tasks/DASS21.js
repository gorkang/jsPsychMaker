/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escalas de Depresión, Ansiedad y Estrés: DASS-21

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DASS21') );
DASS21 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>DASS-21</big></b><br />'+'Por favor lea las siguientes afirmaciones e indique (0, 1, 2, 3) cuánto esta afirmación le aplicó a usted durante la semana pasada. No hay respuestas correctas o incorrectas. No tome demasiado tiempo para contestar.' +'</p>'],
  data: {trialid: 'Instructions_01', procedure: 'DASS21'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me costó mucho relajarme.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_001', procedure: 'DASS21'}
};
DASS21.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me di cuenta que tenia la boca seca.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_002', procedure: 'DASS21'}
};
DASS21.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">No podía sentir ningún sentimiento positivo.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_003', procedure: 'DASS21'}
};
DASS21.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Se me hizo difícil respirar.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_004', procedure: 'DASS21'}
};
DASS21.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Se me hizo difícil tomar la iniciativa para hacer cosas.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_005', procedure: 'DASS21'}
};
DASS21.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Reaccioné exageradamente en ciertas situaciones.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_006', procedure: 'DASS21'}
};
DASS21.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que mis manos temblaban.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_007', procedure: 'DASS21'}
};
DASS21.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que tenía muchos nervios.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_008', procedure: 'DASS21'}
};
DASS21.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_009', procedure: 'DASS21'}
};
DASS21.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que no tenia nada por que vivir.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_010', procedure: 'DASS21'}
};
DASS21.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Noté que me agitaba.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_011', procedure: 'DASS21'}
};
DASS21.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Se me hizo difícil relajarme.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_012', procedure: 'DASS21'}
};
DASS21.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me sentí triste y deprimido.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_013', procedure: 'DASS21'}
};
DASS21.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">No toleré nada que no me permitiera continuar con lo que estaba haciendo.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_014', procedure: 'DASS21'}
};
DASS21.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que estaba cerca de caer en pánico.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_015', procedure: 'DASS21'}
};
DASS21.push(question015);

var question016 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">No me pude entusiasmar por nada.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_016', procedure: 'DASS21'}
};
DASS21.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que valía muy poco como persona.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_017', procedure: 'DASS21'}
};
DASS21.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que estaba muy irritable.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_018', procedure: 'DASS21'}
};
DASS21.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_019', procedure: 'DASS21'}
};
DASS21.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tuve miedo sin razón.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_020', procedure: 'DASS21'}
};
DASS21.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sentí que la vida no tenía ningún sentido.</div>', options: ['&nbsp;0 No me aplicó', '&nbsp;1 Me aplicó un poco, o durante parte del tiempo', '&nbsp;2 Me aplicó bastante, o durante una buena parte del tiempo', '&nbsp;3 Me aplicó mucho, o la mayor parte del tiempo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DASS21_021', procedure: 'DASS21'}
};
DASS21.push(question021);

DASS21.unshift(instruction_screen_experiment);
questions.push.apply(questions, DASS21);

call_function("DASS21");