/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('WEBEXEC') );
WEBEXEC = [];    //final timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>WEBEXEC</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'WEBEXEC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question1 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. ¿Tienes dificultades para mantener tu atención en una tarea?</div>', options: ['&nbsp;No he tenido problemas', '&nbsp;He tenido algunos problemas', '&nbsp;He tenido bastantes problemas', '&nbsp;He tenido muchos problemas'], required: true, horizontal: false}],
  data: {trialid: 'WEBEXEC_01', procedure: 'WEBEXEC'}
};
WEBEXEC.push(question1);

var question2 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Tienes problemas para concentrarte en una tarea?</div>', options: ['&nbsp;No he tenido problemas', '&nbsp;He tenido algunos problemas', '&nbsp;He tenido bastantes problemas', '&nbsp;He tenido muchos problemas'], required: true, horizontal: false}],
  data: {trialid: 'WEBEXEC_02', procedure: 'WEBEXEC'}
};
WEBEXEC.push(question2);

var question3 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. ¿Tienes problemas para hacer más de una tarea al mismo tiempo?</div>', options: ['&nbsp;No he tenido problemas', '&nbsp;He tenido algunos problemas', '&nbsp;He tenido bastantes problemas', '&nbsp;He tenido muchos problemas'], required: true, horizontal: false}],
  data: {trialid: 'WEBEXEC_03', procedure: 'WEBEXEC'}
};
WEBEXEC.push(question3);

var question4 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. ¿Tiendes a perder tu cadena de pensamientos?</div>', options: ['&nbsp;No he tenido problemas', '&nbsp;He tenido algunos problemas', '&nbsp;He tenido bastantes problemas', '&nbsp;He tenido muchos problemas'], required: true, horizontal: false}],
  data: {trialid: 'WEBEXEC_04', procedure: 'WEBEXEC'}
};
WEBEXEC.push(question4);

var question5 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. ¿Tienes problemas para continuar las cosas que has empezado?</div>', options: ['&nbsp;No he tenido problemas', '&nbsp;He tenido algunos problemas', '&nbsp;He tenido bastantes problemas', '&nbsp;He tenido muchos problemas'], required: true, horizontal: false}],
  data: {trialid: 'WEBEXEC_05', procedure: 'WEBEXEC'}
};
WEBEXEC.push(question5);

var question6 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. ¿Actúas por impulso?</div>', options: ['&nbsp;No he tenido problemas', '&nbsp;He tenido algunos problemas', '&nbsp;He tenido bastantes problemas', '&nbsp;He tenido muchos problemas'], required: true, horizontal: false}],
  data: {trialid: 'WEBEXEC_06', procedure: 'WEBEXEC'}
};
WEBEXEC.push(question6);

WEBEXEC.unshift(instruction_screen_experiment);
WEBEXEC.push.apply(questions, WEBEXEC)


call_function("WEBEXEC");
