/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SASS') );
SASS = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big></big></b><br />'+
  'Por favor responda las siguientes preguntas marcando la opción de respuesta que más lo/a representa.' +'</p>'],
  data: {trialid: 'Instructions_01', procedure: 'SASS'},
  show_clickable_nav: true,
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. ¿Tiene usted algún trabajo?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_001', procedure: 'SASS'}
};
SASS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Qué tan interesado/a está en su trabajo?</div>', options: ['&nbsp;Mucho', '&nbsp;Medianamente', '&nbsp;Poco', '&nbsp;Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_002', procedure: 'SASS'}
};

var if_question002 = {
  timeline: [question002],
  data: {trialid: 'SASS_002_if', procedure: 'SASS'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SASS_001'))['response'])['Q0']).trim();
   if((data) ==  'Si'){
     return true;
     } else {
     return false;
    }
  }
}

SASS.push(if_question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Qué tan interesado/a está en actividades relacionadas a su hogar?</div>', options: ['&nbsp;Mucho', '&nbsp;Medianamente', '&nbsp;Poco', '&nbsp;Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_003', procedure: 'SASS'}
};

var if_question003 = {
  timeline: [question003],
  data: {trialid: 'SASS_003_if', procedure: 'SASS'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SASS_001'))['response'])['Q0']).trim();
   if((data) ==  'No'){
     return true;
     } else {
     return false;
    }
  }
}
SASS.push(if_question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Realiza estas actividades, con: </div>', options: ['&nbsp;Mucho gozo', '&nbsp;Algo de gozo', '&nbsp;Poco de gozo', '&nbsp;Nada de gozo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_004', procedure: 'SASS'}
};
SASS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. ¿Está interesado/a en pasatiempos/ocio?</div>', options: ['&nbsp;Mucho', '&nbsp;Medianamente', '&nbsp;Poco', '&nbsp;Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_005', procedure: 'SASS'}
};
SASS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. La calidad de tu tiempo libre es:</div>', options: ['&nbsp;Muy buena', '&nbsp;Buena', '&nbsp;Justa', '&nbsp;Insatisfactoria'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_006', procedure: 'SASS'}
};
SASS.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. ¿Con qué frecuencia usted busca contacto con los miembros de su familia? (Cónyuges, Hijos, Padres, etc.)</div>', options: ['&nbsp;Muy frecuente', '&nbsp;Frecuentemente', '&nbsp;Raramente', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_007', procedure: 'SASS'}
};
SASS.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. El estado de relaciones de su familia es:</div>', options: ['&nbsp;Muy bueno', '&nbsp;Bueno', '&nbsp;Justo', '&nbsp;Insatisfactorio'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_008', procedure: 'SASS'}
};
SASS.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8- Fuera de su familia, ¿tiene relaciones con:</div>', options: ['&nbsp;Muchas personas?', '&nbsp;Algunas personas?', '&nbsp;Pocas personas?', '&nbsp;Nadie?'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_009', procedure: 'SASS'}
};
SASS.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. ¿Intenta formar relaciones con otras personas:</div>', options: ['&nbsp;Muy activamente?', '&nbsp;Activamente?', '&nbsp;Moderadamente?', '&nbsp;Pasivamente?'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_010', procedure: 'SASS'}
};
SASS.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. ¿En general, cómo valora sus relaciones con otras personas?</div>', options: ['&nbsp;Muy buena', '&nbsp;Buena', '&nbsp;Justa', '&nbsp;Insatisfactoria'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_011', procedure: 'SASS'}
};
SASS.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. ¿Qué valor le otorga a sus relaciones con otras personas?</div>', options: ['&nbsp;Gran valor', '&nbsp;Algún valor', '&nbsp;Poco valor', '&nbsp;Ningún valor'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_012', procedure: 'SASS'}
};
SASS.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. ¿Qué tan a menudo las personas en su círculo social buscan tomar contacto con usted?</div>', options: ['&nbsp;Muy a menudo', '&nbsp;A menudo', '&nbsp;Raramente', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_013', procedure: 'SASS'}
};
SASS.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. ¿Se preocupa de las normas sociales, las buenas maneras, la cortesía, etc.?</div>', options: ['&nbsp;Siempre', '&nbsp;La mayor parte del tiempo', '&nbsp;Raramente', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_014', procedure: 'SASS'}
};
SASS.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. ¿Hasta qué punto está usted involucrado/a en la vida comunitaria (Club, etc.)</div>', options: ['&nbsp;Completamente', '&nbsp;Moderadamente', '&nbsp;Levemente', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_015', procedure: 'SASS'}
};
SASS.push(question015);

var question016 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. ¿Le gusta buscar información acerca de cosas, situaciones, y personas para mejorar su comprensión de ellos?</div>', options: ['&nbsp;Mucho', '&nbsp;Moderadamente', '&nbsp;No mucho', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_016', procedure: 'SASS'}
};
SASS.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. ¿Está interesado/a en información científica, técnica o cultural?</div>', options: ['&nbsp;Mucho', '&nbsp;Moderadamente', '&nbsp;Levemente', '&nbsp;Para Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_017', procedure: 'SASS'}
};
SASS.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. ¿Con qué frecuencia encuentra dificultad para expresar su opinión a las personas?</div>', options: ['&nbsp;Siempre', '&nbsp;A menudo', '&nbsp;A veces', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_018', procedure: 'SASS'}
};
SASS.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. ¿Con qué frecuencia se siente rechazado/a o excluido/a de su círculo?</div>', options: ['&nbsp;Siempre', '&nbsp;A menudo', '&nbsp;A veces', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_019', procedure: 'SASS'}
};
SASS.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. ¿Qué tan importante considera su apariencia física?</div>', options: ['&nbsp;Mucho', '&nbsp;Moderadamente', '&nbsp;No mucho', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_020', procedure: 'SASS'}
};
SASS.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. ¿En qué grado tiene dificultades para manejar sus recursos e ingresos económicos?</div>', options: ['&nbsp;Siempre', '&nbsp;A menudo', '&nbsp;A veces', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_021', procedure: 'SASS'}
};
SASS.push(question021);

var question022 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">21. ¿Se siente capaz de organizar su entorno de acuerdo a sus deseos y necesidades?</div>', options: ['&nbsp;Muchísimo', '&nbsp;Moderadamente', '&nbsp;No mucho', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_022', procedure: 'SASS'}
};
SASS.push(question022);

SASS.unshift(instruction_screen_experiment);
questions.push.apply(questions, SASS);

call_function("SASS");
