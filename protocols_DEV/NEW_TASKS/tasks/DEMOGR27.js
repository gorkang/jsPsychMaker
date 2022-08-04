/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR27') );
DEMOGR27 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Cuestionario de identificación</big></b><BR><BR>En este cuestionario no se recopila información personal, sólo algunos ítems sociodemográficos y profesionales.<br><br>Por favor complete la información solicitada<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR27'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indique su sexo</div>', options: ['&nbsp;Hombre', '&nbsp;Mujer'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR27_01', procedure: 'DEMOGR27'}
};
DEMOGR27.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique su edad</div>', type: 'number', range: [18, 100], required: true, error_text: 'Tienes que ser mayor de edad para poder participar', endword: ' Años'}],
  data: {trialid: 'DEMOGR27_02', procedure: 'DEMOGR27'}
};
DEMOGR27.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indique su grado académico alcanzado</div>', options: ['&nbsp;Pregrado', '&nbsp;Postgrado'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR27_03', procedure: 'DEMOGR27'}
};
DEMOGR27.push(question03);

var question04 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique sus años de estudio (sumándole 12 años correspondiente a la etapa escolar)</div>', type: 'number', range: [0, 100], required: true}],
  data: {trialid: 'DEMOGR27_04', procedure: 'DEMOGR27'}
};
DEMOGR27.push(question04);

var question05 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique sus años de ejercicio laboral</div>', type: 'number', range: [0, 100], required: true}],
  data: {trialid: 'DEMOGR27_05', procedure: 'DEMOGR27'}
};
DEMOGR27.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indique su cargo actual</div>', options: ['&nbsp;Profesor', '&nbsp;Directivo'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR27_06', procedure: 'DEMOGR27'},
  on_finish: function (data) {
    job = (JSON.parse(data.response))["Q0"].trim();
  }
};
DEMOGR27.push(question06);

DEMOGR27.unshift(instruction_screen_experiment);
DEMOGR27.push.apply(questions, DEMOGR27);
call_function("DEMOGR27");
