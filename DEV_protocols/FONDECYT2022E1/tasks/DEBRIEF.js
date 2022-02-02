/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEBRIEF') );
DEBRIEF = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Última tarea</big></b><br />'+'Por favor, contesta a las siguientes preguntas sobre el estudio' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'DEBRIEF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Por último, es vital para nuestro estudio que solo incluyamos respuestas de personas que dedicaron toda su atención a este estudio. De lo contrario, se podría perder el esfuerzo de los investigadores y de otros participantes.<BR><BR>Recibirás el pago por este estudio pase lo que pase, dinos cuánto esfuerzo puso en este estudio. <BR><BR>Puse _____ esfuerzo en este estudio</div>', options: ['&nbsp;casi nada', '&nbsp;muy poco', '&nbsp;algo', '&nbsp;bastante'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEBRIEF_01', procedure: 'DEBRIEF'}
};
DEBRIEF.push(question01);


var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¡Gracias por su tiempo y esfuerzo!<BR><BR>En la siguiente pantalla te daremos tu código anónimo de participación.<BR><BR>Por favor, haznos saber si tienes algún comentario o sugerencia con respecto al estudio que acabas de terminar.</div>', type: 'text', required: true}],
  data: {trialid: 'DEBRIEF_02', procedure: 'DEBRIEF'}
};
DEBRIEF.push(question02);

DEBRIEF.unshift(instruction_screen_experiment);
DEBRIEF.push.apply(questions, DEBRIEF)


call_function("DEBRIEF");
