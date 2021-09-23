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

questions.push(
  {
    timeline: [{
      type: 'fullscreen',
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'OTRASRELIG'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'OTRASRELIG'
  }
);

OTRASRELIG = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big></big></b><br />'+
    'Las siguientes preguntas apuntan a conocer un poco más sobre sus creencias religiosas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'OTRASRELIG'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'OTRASRELIG'
};

var question01 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">¿Qué tan importante considera que es Dios en su vida? </div></br>', require_movement: true, slider_number: true, required: true, stimulus_duration: 10000000000, min: 1, max: 10, slider_width: 200, start: 3, step: 1, labels: ["Para nada importante", "Muy importante"], button_label: "Next",
  data: {trialid: 'OTRASRELIG_01', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cree usted en Dios?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_02', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cree usted en la vida después de la muerte?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_03', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cree usted en el Infierno?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_04', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cree usted en el Cielo?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_05', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Fui criado(a)</div>', options: ['&nbsp;Religioso(a), Católico(a)', '&nbsp;Religioso(a), Protestante (evangélico(a))', '&nbsp;Religioso(a), Judío(a)', '&nbsp;Religioso(a), de otra afiliación.', '&nbsp;No religioso(a)'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_06', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Cuál es su religión?</div>', type: 'text', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'OTRASRELIG_07', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};

var if_question07 = {
  timeline: [question07],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'OTRASRELIG_06'))['response'])['Q0']).trim();
   if((data) ==  'Religioso(a), de otra afiliación.'){
     return true;
     } else {
     return false;
    }
  },
  procedure: 'OTRASRELIG'
}

OTRASRELIG.push(if_question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál de los siguientes corresponde a su preferencia y/o afiliación religiosa?</div>', options: ['&nbsp;Protestante (evangélico(a))', '&nbsp;Católico(a)', '&nbsp;Judío(a)', '&nbsp;Otro', '&nbsp;No tengo una preferencia y/o afiliación religiosa'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_08', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Cuál es su preferencia y/o afiliación religiosa?</div>', type: 'text', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'OTRASRELIG_09', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};

var if_question09 = {
  timeline: [question09],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'OTRASRELIG_08'))['response'])['Q0']).trim();
   if((data) ==  'Otro'){
     return true;
     } else {
     return false;
    }
  },
  procedure: 'OTRASRELIG'
}

OTRASRELIG.push(if_question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Su familia y/o amigos pertenecen a su mismo grupo religioso?</div>', options: ['&nbsp;La gran mayoría', '&nbsp;Hartos', '&nbsp;Algunos sí, otros no (aproximadamente mitad sí y mitad no)', '&nbsp;Solo algunos', '&nbsp;Casi nadie o nadie'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_10', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sin considerar matrimonios y funerales, y sin considerar el periodo de pandemia, ¿qué tan seguido asiste a servicios religiosos?</div>', options: ['&nbsp;Más de una vez a la semana', '&nbsp;Una vez a la semana', '&nbsp;Una vez al mes', '&nbsp;Solo para los festivos', '&nbsp;Una vez al año', '&nbsp;Menos de una vez al año', '&nbsp;Nunca, o practicamente nunca'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OTRASRELIG_11', procedure: 'OTRASRELIG'},
  procedure: 'OTRASRELIG'
};
OTRASRELIG.push(question11);

OTRASRELIG.unshift(instruction_screen_experiment);
questions.push.apply(questions, OTRASRELIG);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'OTRASRELIG'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'OTRASRELIG'}).json();
      }
      saveData(data, online, 'OTRASRELIG');
    },
    procedure: 'OTRASRELIG'
});
