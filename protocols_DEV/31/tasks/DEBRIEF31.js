/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEBRIEF31') );
DEBRIEF31 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Última tarea</big></b><br />'+'Por favor, contesta a las siguientes dos preguntas sobre el estudio' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'DEBRIEF31'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question00 = {
  type: 'survey-multi-select',
  questions: [{prompt: '<div class="justified">Esta tarea es muy sencilla, y su única finalidad es excluir robots del estudio. <BR><BR>Por favor, selecciona únicamente el número once (menos uno) del siguiente listado</div>', options: ["1", "5", "10", "11", "25", "80"], horizontal: true, required: true}],
  data: {trialid: 'DEBRIEF31_01', procedure: 'DEBRIEF31'}
}; 
  
DEBRIEF31.push(question00);


var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Por último, es vital para nuestro estudio que solo incluyamos respuestas de personas que dedicaron toda su atención. De lo contrario, se podría perder el esfuerzo de los investigadores y de otros participantes.<BR><BR>Indica cuánto esfuerzo pusiste en este estudio. <BR><BR>Puse _____ esfuerzo en este estudio</div>', options: ['&nbsp;casi nada', '&nbsp;muy poco', '&nbsp;algo', '&nbsp;bastante'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEBRIEF31_02', procedure: 'DEBRIEF31'}
};
DEBRIEF31.push(question01);


var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¡Gracias por tu tiempo y esfuerzo!<BR><BR>Si tienes algún comentario o sugerencia con respecto al estudio que acabas de terminar, puedes escribirlo aquí.</div>', type: 'text', required: false}],
  data: {trialid: 'DEBRIEF31_03', procedure: 'DEBRIEF31'}
};
DEBRIEF31.push(question02);

DEBRIEF31.unshift(instruction_screen_experiment);
DEBRIEF31.push.apply(questions, DEBRIEF31)


call_function("DEBRIEF31");
