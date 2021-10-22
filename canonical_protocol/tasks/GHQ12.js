/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('GHQ12') );
GHQ12 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>GHQ12</big></b><br />'+
    '<br> Nos gustaría saber si tiene algún problema médico y cómo ha estado de salud, en general, durante las últimas semanas. Recuerde que sólo debe responder sobre los problemas recientes y los que tiene ahora, NO sobre las que tuvo en el pasado. <br><br> Muchas gracias por su colaboración.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'GHQ12'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha podido concentrarse bien en lo que hacía?</div>', options: ['&nbsp;Mejor que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_01', procedure: 'GHQ12'}
};
GHQ12.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Sus preocupaciones le han hecho perder mucho sueño?</div>', options: ['&nbsp;No, en lo absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_02', procedure: 'GHQ12'}
};
GHQ12.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha sentido que está desempeñando un papel útil en la vida?</div>', options: ['&nbsp;Más útil que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos útil que lo habitual', '&nbsp;Mucho menos útil que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_03', procedure: 'GHQ12'}
};
GHQ12.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se ha sentido capaz de tomar decisiones?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_04', procedure: 'GHQ12'}
};
GHQ12.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se ha notado constantemente agobiado y en tensión?</div>', options: ['&nbsp;No, en lo absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_05', procedure: 'GHQ12'}
};
GHQ12.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha tenido la sensación de que no puede superar sus dificultades?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_06', procedure: 'GHQ12'}
};
GHQ12.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha sido capaz de disfrutar de sus actividades normales de cada día?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_07', procedure: 'GHQ12'}
};
GHQ12.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha sido capaz de hacer frente adecuadamente a sus problemas?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_08', procedure: 'GHQ12'}
};
GHQ12.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se ha sentido poco feliz o deprimido?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_09', procedure: 'GHQ12'}
};
GHQ12.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha perdido confianza en sí mismo?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_10', procedure: 'GHQ12'}
};
GHQ12.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Ha pensado que usted es una persona que no vale para nada?</div>', options: ['&nbsp;No, en absoluto', '&nbsp;No más que lo habitual', '&nbsp;Algo más que lo habitual', '&nbsp;Mucho más que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_11', procedure: 'GHQ12'}
};
GHQ12.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"> Últimamente, ¿Se siente razonablemente feliz considerando todas las circunstancias?</div>', options: ['&nbsp;Más que lo habitual', '&nbsp;Igual que lo habitual', '&nbsp;Menos que lo habitual', '&nbsp;Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'GHQ12_12', procedure: 'GHQ12'}
};
GHQ12.push(question12);

GHQ12.unshift(instruction_screen_experiment);
questions.push.apply(questions, GHQ12)

call_function("GHQ12");
