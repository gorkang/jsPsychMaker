/** CSCN lab**/

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
DEMOGR = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'fullscreen',
    data: {trialid: 'Instructions', procedure: 'DEMOGR'},
    fullscreen_mode: true,
    message: [`<b><big>Información demográfica</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label: 'Iniciar el estudio a pantalla completa',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica tu edad</div>', type: 'number', range: [18, 100], required: true, error_text: 'Tienes que ser mayor de edad para poder participar'}],
  data: {trialid: 'DEMOGR_01', procedure: 'DEMOGR'},
};
DEMOGR.push(question01);

var question19 = {
  type: 'survey-multi-select',
  questions: [{prompt: '<div class="justified">Indica si alguna de las siguientes personas o grupos ha tenido una cesarea (puedes marcar más de una opción):</div>', options: ['&nbsp;Madre', '&nbsp;Hermanas', '&nbsp;Amigas cercanas'], required: false, name: 'Q0', randomize_question_order: false, horizontal: true}],
  data: {trialid: 'DEMOGR_19', procedure: 'DEMOGR'},
};
DEMOGR.push(question19);

DEMOGR.unshift(instruction_screen_experiment);
DEMOGR.push.apply(questions, DEMOGR)


questions.push({
    type: 'call-function',
    data: {trialid: 'DEMOGR_00', procedure: 'DEMOGR'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR'}).json();
      }
      saveData(data, online, 'DEMOGR');
    },
    //procedure: 'DEMOGR'
});
