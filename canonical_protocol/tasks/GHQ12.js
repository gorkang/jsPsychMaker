/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Cuestionario de Saludo General de Goldberg

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('GHQ12') );
GHQ12 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>GHQ12</big></b><br />'+
  '<br> Nos gustaría saber si tiene algún problema médico y cómo ha estado de salud, en general, durante las últimas semanas. Recuerde que sólo debe responder sobre los problemas recientes y los que tiene ahora, NO sobre las que tuvo en el pasado. <br><br> Muchas gracias por su colaboración.' +'</p>'],
  data:{trialid: 'Instructions_01', procedure: 'GHQ12'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha podido concentrarse bien en lo que hacía?</div>', options: ['&nbsp;Mejor que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_001', procedure: 'GHQ12'}
};
GHQ12.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Sus preocupaciones le han hecho perder mucho sueño?</div>', options: ['&nbsp;No, en lo absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_002', procedure: 'GHQ12'}
};
GHQ12.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha sentido que está desempeñando un papel útil en la vida?</div>', options: ['&nbsp;Más útil que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos útil que lo habitual', '&nbsp;Mucho menos útil que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_003', procedure: 'GHQ12'}
};
GHQ12.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se ha sentido capaz de tomar decisiones?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_004', procedure: 'GHQ12'}
};
GHQ12.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se ha notado constantemente agobiado y en tensión?</div>', options: ['&nbsp;No, en lo absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_005', procedure: 'GHQ12'}
};
GHQ12.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha tenido la sensación de que no puede superar sus dificultades?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_006', procedure: 'GHQ12'}
};
GHQ12.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha sido capaz de disfrutar de sus actividades normales de cada día?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_007', procedure: 'GHQ12'}
};
GHQ12.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha sido capaz de hacer frente adecuadamente a sus problemas?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_008', procedure: 'GHQ12'}
};
GHQ12.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se ha sentido poco feliz o deprimido?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_009', procedure: 'GHQ12'}
};
GHQ12.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha perdido confianza en sí mismo?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_010', procedure: 'GHQ12'}
};
GHQ12.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha pensado que usted es una persona que no vale para nada?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_011', procedure: 'GHQ12'}
};
GHQ12.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se siente razonablemente feliz considerando todas las circunstancias?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_012', procedure: 'GHQ12'}
};
GHQ12.push(question012);

GHQ12.unshift(instruction_screen_experiment);
questions.push.apply(questions, GHQ12)

call_function("GHQ12");