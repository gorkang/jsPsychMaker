/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SBS') );
SBS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>SBS</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'SBS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Existe un Dios todopoderoso, omnisciente y amoroso.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_01', procedure: 'SBS'}
};
SBS.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Existe un ser espiritual espiritual maligno, a quien podríamos llamar el Diablo.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_02', procedure: 'SBS'}
};
SBS.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Existen buenos seres espirituales personales, a quienes podríamos llamar ángeles.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_03', procedure: 'SBS'}
};
SBS.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Existen seres espirituales personales malvados, a quienes podríamos llamar demonios.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_04', procedure: 'SBS'}
};
SBS.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Los seres humanos tienen almas inmateriales e inmortales.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_05', procedure: 'SBS'}
};
SBS.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Hay un reino espiritual además del físico.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_06', procedure: 'SBS'}
};
SBS.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Algunas personas irán al cielo cuando mueran.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_07', procedure: 'SBS'}
};
SBS.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Algunas personas irán al infierno cuando mueran.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_08', procedure: 'SBS'}
};
SBS.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Los milagros, eventos divinamente causados que no tienen una explicación natural, pueden suceder y lo hacen.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_09', procedure: 'SBS'}
};
SBS.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Hay individuos que son mensajeros de Dios y / o pueden prever el futuro.</div></br>", required: true, min: -4, max: 4, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'SBS_10', procedure: 'SBS'}
};
SBS.push(question10);

SBS.unshift(instruction_screen_experiment);
questions.push.apply(questions, SBS)


call_function("SBS");
