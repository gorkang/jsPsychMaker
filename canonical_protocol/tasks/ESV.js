/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Empathy Stimulus Validation

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ESV') );
ESV = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Evaluación de la interacción con un otro</big></b><BR>Por favor, responda las siguientes preguntas sobre la interacción que acaba de tener con la persona con Alzheimer.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'ESV'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>¿Cuál fue la intensidad de la interacción con la persona con Alzheimer?</div>", require_movement:true, required: true, min: 0, max: 9, slider_width: 500, slider_start: 4, step: 1, labels: ["No intenso", "Muy intenso"], button_label: "Siguiente",
  data: {trialid: 'ESV_01', procedure: 'ESV'}
};
ESV.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>¿Cuál fue la emoción que sentió durante la interacción con la persona con Alzheimer?</div>", require_movement:true, required: true, min: 0, max: 9, slider_width: 500, slider_start: 4, step: 1, labels: ["No placentero", "Placentero"], button_label: "Siguiente",
  data: {trialid: 'ESV_02', procedure: 'ESV'}
};
ESV.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Considerando la compasión como la sensación de cariño, apertura y calidez hacia la otra persona.<br>Durante la interacción, ¿sentí compasión?</div>", require_movement:true, required: true, min: 0, max: 9, slider_width: 500, slider_start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ESV_03', procedure: 'ESV'}
};
ESV.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Considerando la angustia como la sensación de incomodidad o sufrimiento propio al interactuar con el otro.<br> Durante la interacción, ¿sentí angustia?</div>", require_movement:true, required: true, min: 0, max: 9, slider_width: 500, slider_start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ESV_04', procedure: 'ESV'}
};
ESV.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Durante la interacción, ¿sentí frío/distancia con el otro?</div>", require_movement:true, required: true, min: 0, max: 9, slider_width: 500, slider_start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ESV_05', procedure: 'ESV'}
};
ESV.push(question05);

ESV.unshift(instruction_screen_experiment);
ESV.push.apply(questions, ESV);
call_function("ESV");
