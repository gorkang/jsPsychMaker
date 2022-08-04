/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// The compassion scale

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CS') );
CS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de CS</big></b><BR>Las siguientes preguntas hacen referencia a cómo actúa generalmente hacia los demás. Indique cuán frecuentemente se siente o se comporta de la manera descrita. Por favor responda de acuerdo a lo que realmente refleja su experiencia más que el cómo debería ser su experiencia.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'CS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Presto mucha atención cuando otras personas me cuentan sus problemas.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_01', procedure: 'CS'}
};
CS.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Si veo que alguien está pasando por un momento difícil, trato de ser amable con esa persona.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_02', procedure: 'CS'}
};
CS.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. No me preocupo por los problemas de los demás.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_03', procedure: 'CS'}
};
CS.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Todo el mundo se siente mal de vez en cuando, es parte de la vida.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_04', procedure: 'CS'}
};
CS.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Me doy cuenta cuando las personas están molestas, incluso si no dicen nada.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_05', procedure: 'CS'}
};
CS.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Me gusta estar presente para los otros en momentos de dificultad.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_06', procedure: 'CS'}
};
CS.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. No pienso mucho en las preocupaciones de los demás.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_07', procedure: 'CS'}
};
CS.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Es importante reconocer que todas las personas tenemos debilidades y que nadie es perfecto.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_08', procedure: 'CS'}
};
CS.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Suelo escuchar con paciencia cuando la gente me cuenta sus problemas.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_09', procedure: 'CS'}
};
CS.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Mi corazón se dirige hacia las personas que no son felices.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_10', procedure: 'CS'}
};
CS.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11. Trato de evitar a las personas cuando están experimentando mucho dolor.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_11', procedure: 'CS'}
};
CS.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12. El sufrimiento es simplemente parte de nuestra experiencia humana.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_12', procedure: 'CS'}
};
CS.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13. Cuando los demás me cuentan sus problemas, trato de mantener una perspectiva equilibrada sobre la situación.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_13', procedure: 'CS'}
};
CS.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14. Cuando las personas están tristes, trato de consolarlas.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_14', procedure: 'CS'}
};
CS.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15. No me siento emocionalmente conectado con las personas que están sufriendo.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_15', procedure: 'CS'}
};
CS.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16. Pese a mis diferencias con los demás, sé que al igual que yo, todos tienen sus dolores.</div>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Casi Nunca", "Casi siempre"], button_label: "Siguiente",
  data: {trialid: 'CS_16', procedure: 'CS'}
};
CS.push(question16);

CS.unshift(instruction_screen_experiment);
CS.push.apply(questions, CS);
call_function("CS");
