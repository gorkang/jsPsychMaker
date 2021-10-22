/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PSS') );
PSS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>PSS</big></b><br />'+'Las preguntas en esta escala hacen referencia a sus sentimientos y pensamientos durante el último mes. En cada caso, por favor indique cómo usted se ha sentido o ha pensado en cada situación.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'PSS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_001', procedure: 'PSS'}
};
PSS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_002', procedure: 'PSS'}
};
PSS.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_003', procedure: 'PSS'}
};
PSS.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_004', procedure: 'PSS'}
};
PSS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los cambios importantes que han estado ocurriendo en su vida?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_005', procedure: 'PSS'}
};
PSS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_006', procedure: 'PSS'}
};
PSS.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_007', procedure: 'PSS'}
};
PSS.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_008', procedure: 'PSS'}
};
PSS.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_009', procedure: 'PSS'}
};
PSS.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia se ha sentido al control de todo?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_010', procedure: 'PSS'}
};
PSS.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha estado enfadado porque las cosas que le han ocurrido estaban fuera de su control?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_011', procedure: 'PSS'}
};
PSS.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha pensado sobre las cosas que le quedan por lograr?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_012', procedure: 'PSS'}
};
PSS.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha podido controlar la forma de pasar el tiempo?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_013', procedure: 'PSS'}
};
PSS.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?</div>', options: ['&nbsp;0 Nunca', '&nbsp;1 Casi nunca', '&nbsp;2 De vez en cuando', '&nbsp;3 A menudo', '&nbsp;4 Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_014', procedure: 'PSS'}
};
PSS.push(question014);

PSS.unshift(instruction_screen_experiment);
questions.push.apply(questions, PSS);

call_function("PSS");
