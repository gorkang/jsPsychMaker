/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PSPPC') );
PSPPC = [];    //temporal timeline

/*var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Percepciones sobre el parto.</big></b><br />'+'Las siguientes preguntas evalúan tus actitudes sobre el parto. Por favor califica qué tan de acuerdo o en desacuerdo estás con las siguientes afirmaciones.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'PSPPC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};*/

var question01 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Yo preferiría un parto por cesárea para evitar el dolor del parto</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSPPC_01', procedure: 'PSPPC'}
};
PSPPC.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Creo que la mujer tiene derecho a elegir una cesárea aunque no hayan indicaciones médicas para hacerla</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSPPC_02', procedure: 'PSPPC'}
};
PSPPC.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">El procedimiento quirúrgico involucrado en un parto por cesárea no me preocupa</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSPPC_03', procedure: 'PSPPC'}
};
PSPPC.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Tener bebés por cesárea es menos vergonzoso que tenerlos por vía vaginal</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSPPC_04', procedure: 'PSPPC'}
};
PSPPC.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Considero que el parto vaginal es un método obsoleto de parto</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSPPC_05', procedure: 'PSPPC'}
};
PSPPC.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">El parto requiere de atención o asistencia médica incluso en embarazos sin complicaciones</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSPPC_06', procedure: 'PSPPC'}
};
PSPPC.push(question06);

if (debug_mode == 'false') PSPPC = jsPsych.randomization.repeat(PSPPC,1);
//PSPPC.unshift(instruction_screen_experiment);
PSPPC.push.apply(questions, PSPPC);


questions.push({
    type: 'call-function',
    data: {trialid: 'PSPPC_000', procedure: 'PSPPC'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'PSPPC'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'PSPPC'}).json();
      }
      saveData(data, online, 'PSPPC');
    }
});
