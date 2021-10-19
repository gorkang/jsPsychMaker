/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('bRCOPE') );

bRCOPE = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>bRCOPE</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'bRCOPE'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. Supongo que mi Iglesia por momentos me abandona.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_01', procedure: 'bRCOPE'}
};
bRCOPE.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. Trato de comprender que Dios me fortalece a través de ciertas situaciones.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_02', procedure: 'bRCOPE'}
};
bRCOPE.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. Pongo en entredicho el poder de Dios.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_03', procedure: 'bRCOPE'}
};
bRCOPE.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. Junto con Dios, intento llevar a cabo mis planes.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_04', procedure: 'bRCOPE'}
};
bRCOPE.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. Busco la ayuda de Dios, para olvidar mi enojo.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_05', procedure: 'bRCOPE'}
};
bRCOPE.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. Busco el amor y el cuidado de Dios.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_06', procedure: 'bRCOPE'}
};
bRCOPE.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. Pido perdón por mis pecados.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_07', procedure: 'bRCOPE'}
};
bRCOPE.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. Me siento castigado por Dios por mi falta de devoción.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_08', procedure: 'bRCOPE'}
};
bRCOPE.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. Pongo en duda el amor que Dios siente por mí.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_09', procedure: 'bRCOPE'}
};
bRCOPE.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. Me enfoco en mi religión para dejar de preocuparme por mis problemas.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_10', procedure: 'bRCOPE'}
};
bRCOPE.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>11. Me pregunto qué pude haber hecho para que Dios me castigue de esa manera.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_11', procedure: 'bRCOPE'}
};
bRCOPE.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>12. Me he preguntado si Dios me ha abandonado.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_12', procedure: 'bRCOPE'}
};
bRCOPE.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>13. Me siento convencido que el demonio hace que las cosas pasen.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_13', procedure: 'bRCOPE'}
};
bRCOPE.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>14. Busco la cercanía de Dios.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_14', procedure: 'bRCOPE'}
};
bRCOPE.push(question14);

bRCOPE.unshift(instruction_screen_experiment);
bRCOPE.push.apply(questions, bRCOPE);

call_function("bRCOPE");
