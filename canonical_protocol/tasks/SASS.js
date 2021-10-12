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
SASS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big></big></b><br />'+
    'Por favor responda las siguientes preguntas marcando la opción de respuesta que más lo/a representa.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'SASS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'SASS'
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. ¿Tiene usted algún trabajo?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_01', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Qué tan interesado/a está en su trabajo?</div>', options: ['&nbsp;Mucho', '&nbsp;Medianamente', '&nbsp;Poco', '&nbsp;Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_02', procedure: 'SASS'},
  procedure: 'SASS'
};

var if_question02 = {
  timeline: [question02],
  data: {trialid: 'SASS_02_if', procedure: 'SASS'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SASS_01'))['response'])['Q0']).trim();
   if((data) ==  'Si'){
     return true;
     } else {
     return false;
    }
  },
  procedure: 'SASS'
}

SASS.push(if_question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Qué tan interesado/a está en actividades relacionadas a su hogar?</div>', options: ['&nbsp;Mucho', '&nbsp;Medianamente', '&nbsp;Poco', '&nbsp;Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_03', procedure: 'SASS'},
  procedure: 'SASS'
};

var if_question03 = {
  timeline: [question03],
  data: {trialid: 'SASS_03_if', procedure: 'SASS'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SASS_01'))['response'])['Q0']).trim();
   if((data) ==  'No'){
     return true;
     } else {
     return false;
    }
  },
  procedure: 'SASS'
}

SASS.push(if_question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Realiza estas actividades, con: </div>', options: ['&nbsp;Mucho gozo', '&nbsp;Algo de gozo', '&nbsp;Poco de gozo', '&nbsp;Nada de gozo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_04', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. ¿Está interesado/a en pasatiempos/ocio?</div>', options: ['&nbsp;Mucho', '&nbsp;Medianamente', '&nbsp;Poco', '&nbsp;Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_05', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. La calidad de tu tiempo libre es:</div>', options: ['&nbsp;Muy buena', '&nbsp;Buena', '&nbsp;Justa', '&nbsp;Insatisfactoria'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_06', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. ¿Con qué frecuencia usted busca contacto con los miembros de su familia? (Cónyuges, Hijos, Padres, etc.)</div>', options: ['&nbsp;Muy frecuente', '&nbsp;Frecuentemente', '&nbsp;Raramente', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_07', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. El estado de relaciones de su familia es:</div>', options: ['&nbsp;Muy bueno', '&nbsp;Bueno', '&nbsp;Justo', '&nbsp;Insatisfactorio'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_08', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8- Fuera de su familia, ¿tiene relaciones con:</div>', options: ['&nbsp;Muchas personas?', '&nbsp;Algunas personas?', '&nbsp;Pocas personas?', '&nbsp;Nadie?'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_09', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. ¿Intenta formar relaciones con otras personas:</div>', options: ['&nbsp;Muy activamente?', '&nbsp;Activamente?', '&nbsp;Moderadamente?', '&nbsp;Pasivamente?'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_10', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. ¿En general, cómo valora sus relaciones con otras personas?</div>', options: ['&nbsp;Muy buena', '&nbsp;Buena', '&nbsp;Justa', '&nbsp;Insatisfactoria'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_11', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. ¿Qué valor le otorga a sus relaciones con otras personas?</div>', options: ['&nbsp;Gran valor', '&nbsp;Algún valor', '&nbsp;Poco valor', '&nbsp;Ningún valor'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_12', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. ¿Qué tan a menudo las personas en su círculo social buscan tomar contacto con usted?</div>', options: ['&nbsp;Muy a menudo', '&nbsp;A menudo', '&nbsp;Raramente', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_13', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. ¿Se preocupa de las normas sociales, las buenas maneras, la cortesía, etc.?</div>', options: ['&nbsp;Siempre', '&nbsp;La mayor parte del tiempo', '&nbsp;Raramente', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_14', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. ¿Hasta qué punto está usted involucrado/a en la vida comunitaria (Club, etc.)</div>', options: ['&nbsp;Completamente', '&nbsp;Moderadamente', '&nbsp;Levemente', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_15', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. ¿Le gusta buscar información acerca de cosas, situaciones, y personas para mejorar su comprensión de ellos?</div>', options: ['&nbsp;Mucho', '&nbsp;Moderadamente', '&nbsp;No mucho', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_16', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. ¿Está interesado/a en información científica, técnica o cultural?</div>', options: ['&nbsp;Mucho', '&nbsp;Moderadamente', '&nbsp;Levemente', '&nbsp;Para Nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_17', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. ¿Con qué frecuencia encuentra dificultad para expresar su opinión a las personas?</div>', options: ['&nbsp;Siempre', '&nbsp;A menudo', '&nbsp;A veces', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_18', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. ¿Con qué frecuencia se siente rechazado/a o excluido/a de su círculo?</div>', options: ['&nbsp;Siempre', '&nbsp;A menudo', '&nbsp;A veces', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_19', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. ¿Qué tan importante considera su apariencia física?</div>', options: ['&nbsp;Mucho', '&nbsp;Moderadamente', '&nbsp;No mucho', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_20', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. ¿En qué grado tiene dificultades para manejar sus recursos e ingresos económicos?</div>', options: ['&nbsp;Siempre', '&nbsp;A menudo', '&nbsp;A veces', '&nbsp;Nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_21', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">21. ¿Se siente capaz de organizar su entorno de acuerdo a sus deseos y necesidades?</div>', options: ['&nbsp;Muchísimo', '&nbsp;Moderadamente', '&nbsp;No mucho', '&nbsp;Para nada'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SASS_22', procedure: 'SASS'},
  procedure: 'SASS'
};
SASS.push(question22);

SASS.unshift(instruction_screen_experiment);
questions.push.apply(questions, SASS);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'SASS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'SASS'}).json();
      }
      saveData(data, online, 'SASS');
    },
    procedure: 'SASS'
});
