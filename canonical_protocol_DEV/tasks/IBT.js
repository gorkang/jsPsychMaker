/**
 * CSCN lab
/**
This document was made with test_maker
*/


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('IBT') );
IBT = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>IBT</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions', procedure: 'IBT'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>A menudo compro cosas de manera espontánea.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_01', procedure: 'IBT'}
};
IBT.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>“Ya mismo” describe la forma en que compro las cosas.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_02', procedure: 'IBT'}
};
IBT.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>A menudo compro cosas sin pensar.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_03', procedure: 'IBT'}
};
IBT.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Si veo algo que quiero, lo compro.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_04', procedure: 'IBT'}
};
IBT.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>“Compro primero y pienso después” me describe bien.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_05', procedure: 'IBT'}
};
IBT.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Algunas veces soy un poco insensato (irracional, ilógico) comprando.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_06', procedure: 'IBT'}
};
IBT.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Compro cosas según cómo me siento en el momento.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_07', procedure: 'IBT'}
};
IBT.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Planifico cuidadosamente la mayoría de las compras.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_08', procedure: 'IBT'}
};
IBT.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Algunas veces soy un poco imprudente con lo que compro.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'IBT_09', procedure: 'IBT'}
};
IBT.push(question09);

IBT.unshift(instruction_screen_experiment);
questions.push.apply(questions, IBT);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'IBT'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'IBT'}).json();
      }
      saveData(data, online, 'IBT');
    }
});
