/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('EAR') );
EAR = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big></big></b><br />'+
    'Indique su nivel de acuerdo con las siguientes frases.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'EAR'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Siento que soy una persona digna de aprecio, al menos en igual medida que los demás.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_01', procedure: 'EAR'}
};
EAR.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Creo que tengo un buen número de cualidades.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_02', procedure: 'EAR'}
};
EAR.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En general, me inclino a pensar que soy un/a fracasado/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_03', procedure: 'EAR'}
};
EAR.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Soy capaz de hacer las cosas tan bien como la mayoría de la gente.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_04', procedure: 'EAR'}
};
EAR.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Siento que no tengo muchos motivos para sentirme orgulloso/a de mi.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_05', procedure: 'EAR'}
};
EAR.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tengo una actitud positiva hacia mí mismo/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_06', procedure: 'EAR'}
};
EAR.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En general, estoy satisfecho conmigo mismo/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_07', procedure: 'EAR'}
};
EAR.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Desearía valorarme más a mi mismo/a.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_08', procedure: 'EAR'}
};
EAR.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">A veces me siento verdaderamente inútil.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_09', procedure: 'EAR'}
};
EAR.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">A veces pienso que no soy bueno/a para nada.</div>', options: ['&nbsp;Muy de acuerdo', '&nbsp;De acuerdo', '&nbsp;En desacuerdo', '&nbsp;Muy en desacuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'EAR_10', procedure: 'EAR'}
};
EAR.push(question10);

EAR.unshift(instruction_screen_experiment);
questions.push.apply(questions, EAR);

questions.push({
    type: 'call-function',
    data: {trialid: 'EAR_000', procedure: 'EAR'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'EAR'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'EAR'}).json();
      }
      saveData(data, online, 'EAR');
    }
});
