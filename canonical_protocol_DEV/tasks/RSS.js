/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('RSS') );

RSS = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>RSS</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'RSS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. Siento que soy una persona digna de aprecio, al menos en igual medida que los demás.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_01', procedure: 'RSS'}
};
RSS.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. Creo que tengo un buen número de cualidades.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_02', procedure: 'RSS'}
};
RSS.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. En general, me inclino a pensar que soy un fracasado/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_03', procedure: 'RSS'}
};
RSS.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. Soy capaz de hacer las cosas tan bien como la mayoría de la gente.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_04', procedure: 'RSS'}
};
RSS.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. Siento que no tengo muchos motivos para sentirme orgulloso/a de mi.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_05', procedure: 'RSS'}
};
RSS.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. Tengo una actitud positiva hacia mí mismo/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_06', procedure: 'RSS'}
};
RSS.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. En general, estoy satisfecho conmigo mismo/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_07', procedure: 'RSS'}
};
RSS.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. Desearía valorarme más a mi mismo/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_08', procedure: 'RSS'}
};
RSS.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. A veces me siento verdaderamente inútil.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_09', procedure: 'RSS'}
};
RSS.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. A veces pienso que no soy bueno/a para nada.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'RSS_10', procedure: 'RSS'}
};
RSS.push(question10);

RSS.unshift(instruction_screen_experiment);
questions.push.apply(questions, RSS)


questions.push({
    type: 'call-function',
    data: {trialid: 'RSS_000', procedure: 'RSS'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'RSS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'RSS'}).json();
      }
      saveData(data, online, 'RSS');
    },
    procedure: 'RSS'
});
