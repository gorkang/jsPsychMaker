/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('FDMQ') );
FDMQ = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>FDMQ</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'FDMQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>1. Me gusta considerar todas las alternativas.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_01', procedure: 'FDMQ'}
};
FDMQ.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>2. Intento encontrar las desventajas de cada alternativa.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_02', procedure: 'FDMQ'}
};
FDMQ.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>3. Tomo en consideración cuál sería la mejor manera de llevar adelante una decisión.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_03', procedure: 'FDMQ'}
};
FDMQ.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>4. Cuando tomo decisiones me gusta reunir mucha información.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_04', procedure: 'FDMQ'}
};
FDMQ.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>5. Intento ser claro en mis objetivos antes de elegir.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_05', procedure: 'FDMQ'}
};
FDMQ.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>6. Tomo muchas precauciones antes de elegir.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_06', procedure: 'FDMQ'}
};
FDMQ.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>7. Siempre que afronto una decisión difícil, me siento pesimista respecto a poder encontrar una buena solución.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_07', procedure: 'FDMQ'}
};
FDMQ.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>8. Me siento como si estuviera bajo una tremenda presión de tiempo cuando tomo decisiones.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_08', procedure: 'FDMQ'}
};
FDMQ.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>9. La posibilidad de que alguna cosa de poca importancia pudiera salir mal hace que cambie abruptamente mi preferencia.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_09', procedure: 'FDMQ'}
};
FDMQ.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>10. No puedo pensar correctamente si tengo que tomar decisiones apresuradas.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_10', procedure: 'FDMQ'}
};
FDMQ.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>11. Después de tomar una decisión, gasto cantidad de tiempo convenciéndome a mí mismo de que era correcta.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_11', procedure: 'FDMQ'}
};
FDMQ.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>12. Evito tomar decisiones.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_12', procedure: 'FDMQ'}
};
FDMQ.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>13. No tomo decisiones a menos que no tenga más remedio.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_13', procedure: 'FDMQ'}
};
FDMQ.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>14. Prefiero dejarles a otros tomar las decisiones.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_14', procedure: 'FDMQ'}
};
FDMQ.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>15. No me gusta asumir la responsabilidad de tomar decisiones.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_15', procedure: 'FDMQ'}
};
FDMQ.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>16. Si una decisión puede ser tomada por otra persona o por mi, dejo que la otra persona la tome.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_16', procedure: 'FDMQ'}
};
FDMQ.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>17. Prefiero que las personas que están mejor informadas decidan por mí.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_17', procedure: 'FDMQ'}
};
FDMQ.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>18. Pierdo cantidad de tiempo en cuestiones triviales de menor importancia antes de llegar a la decisión final.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_18', procedure: 'FDMQ'}
};
FDMQ.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>19. Incluso después de haber tomado una decisión, retraso ponerla en práctica.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_19', procedure: 'FDMQ'}
};
FDMQ.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>20. Cuando tengo que tomar una decisión, espero mucho tiempo antes de empezar a pensar en ello.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_20', procedure: 'FDMQ'}
};
FDMQ.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>21. Retraso tomar decisiones hasta que es demasiado tarde.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_21', procedure: 'FDMQ'}
};
FDMQ.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>22. Aplazo tomar decisiones.</div>", options: ['&nbsp;No es verdad para mi', '&nbsp;A veces es verdad', '&nbsp;Es verdad para mi'], required: true, horizontal: false}],
  data: {trialid: 'FDMQ_22', procedure: 'FDMQ'}
};
FDMQ.push(question22);

FDMQ.unshift(instruction_screen_experiment);
questions.push.apply(questions, FDMQ)

questions.push({
    type: 'call-function',
    data: {trialid: 'FDMQ_000', procedure: 'FDMQ'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'FDMQ'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'FDMQ'}).json();
      }
      saveData(data, online, 'FDMQ');
    }
});
