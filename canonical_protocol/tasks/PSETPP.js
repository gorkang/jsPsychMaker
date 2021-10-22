/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PSETPP') );

PSETPP = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Percepciones sobre el embarazo, trabajo de parto y parto.</big></b><br />'+'Los siguientes ítems evalúan tus actitudes y sentimientos hacia el embarazo, trabajo de parto y parto. Por favor califica qué tan de acuerdo o en desacuerdo estás con las siguientes afirmaciones.' +'</p>'],
    data: {trialid: 'Instructions_01'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Me preocupa que el dolor del parto sea demasiado intenso</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSETPP_01', procedure: 'PSETPP'}
};
PSETPP.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Tengo miedo al parto</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSETPP_02', procedure: 'PSETPP'}
};
PSETPP.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Me preocupa que el bebé pueda sufrir daño</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSETPP_03', procedure: 'PSETPP'}
};
PSETPP.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">Temo por complicaciones durante el trabajo de parto y parto</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSETPP_04', procedure: 'PSETPP'}
};
PSETPP.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">El parto es impredecible y riesgoso</div></br>', require_movement: true, slider_number: false, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"], button_label: "Next",
  data: {trialid: 'PSETPP_05', procedure: 'PSETPP'}
};
PSETPP.push(question05);

if (debug_mode == 'false') PSETPP = jsPsych.randomization.repeat(PSETPP,1);
PSETPP.unshift(instruction_screen_experiment);
PSETPP.push.apply(questions, PSETPP);

call_function("PSETPP");
