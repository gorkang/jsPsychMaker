/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Perma Profiler

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PERMA') );
PERMA = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Perma Profiler</big></b><BR>Lee atentamente cada pregunta y selecciona la alternativa que se acerque a tu realidad personal.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'PERMA'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. En general ¿Con qué frecuencia sientes que estás progresando en alcanzar tus objetivos?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_01', procedure: 'PERMA'}
};
PERMA.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. En general, ¿Con qué frecuencia te sientes absorto(a) (con atención plena) en lo que estás haciendo?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_02', procedure: 'PERMA'}
};
PERMA.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. En general, ¿Con qué frecuencia te sientes contento(a)?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_03', procedure: 'PERMA'}
};
PERMA.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. En general, ¿Con qué frecuencia te sientes ansioso(a)?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_04', procedure: 'PERMA'}
};
PERMA.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. ¿Con qué frecuencia alcanzas las metas que te has fijado?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_05', procedure: 'PERMA'}
};
PERMA.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. En general, ¿Cómo dirías que es tu salud?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Terrible", "Excelente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_06', procedure: 'PERMA'}
};
PERMA.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. En general, ¿En qué medida sientes que llevas una vida con propósito y sentido?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_07', procedure: 'PERMA'}
};
PERMA.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. ¿En qué medida recibes ayuda y apoyo de otros cuando lo necesitas?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_08', procedure: 'PERMA'}
};
PERMA.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. En general, ¿En qué medida sientes que lo que haces en tu vida es valioso?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_09', procedure: 'PERMA'}
};
PERMA.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. En general, ¿Hasta qué punto te sientes emocionado(a) e interesado(a) por las cosas?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_10', procedure: 'PERMA'}
};
PERMA.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11. ¿Qué tan solo te sientes en tu vida diaria?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nada", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_11', procedure: 'PERMA'}
};
PERMA.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12. ¿Qué tan satisfecho(a) estás con tu estado (salud) físico actual?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_12', procedure: 'PERMA'}
};
PERMA.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13. En general, ¿Con qué frecuencia te sientes positivo(a)?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_13', procedure: 'PERMA'}
};
PERMA.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14.  En general, ¿Con qué frecuencia te sientes enojado(a)?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_14', procedure: 'PERMA'}
};
PERMA.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15. ¿Con qué frecuencia eres capaz de manejar tus responsabilidades?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_15', procedure: 'PERMA'}
};
PERMA.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16. En general, ¿Con qué frecuencia te sientes  triste?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_16', procedure: 'PERMA'}
};
PERMA.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>17. ¿Con qué frecuencia pierdes la noción del tiempo haciendo algo que disfrutas?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nunca", "Siempre"], button_label: "Siguiente",
  data: {trialid: 'PERMA_17', procedure: 'PERMA'}
};
PERMA.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>18. En comparación con otras personas de tu misma edad y sexo, ¿Cómo está tu salud?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Terrible", "Excelente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_18', procedure: 'PERMA'}
};
PERMA.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>19. ¿Hasta qué punto te sientes querido(a)?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_19', procedure: 'PERMA'}
};
PERMA.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>20. En general, ¿Hasta qué punto sientes que tienes un propósito en la vida?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_20', procedure: 'PERMA'}
};
PERMA.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>21. ¿Qué tan satisfecho(a) estás con tus relaciones personales?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_21', procedure: 'PERMA'}
};
PERMA.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>22. En general, ¿Hasta qué punto te sientes completo(a)?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["En absoluto", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_22', procedure: 'PERMA'}
};
PERMA.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>23. Tomando todas las cosas juntas, ¿Qué tan feliz dirías que eres?</div><br>", require_movement:true, required: true, min: 0, max: 10, slider_width: 500, slider_start: 4.5, step: 1, labels: ["Nada", "Completamente"], button_label: "Siguiente",
  data: {trialid: 'PERMA_23', procedure: 'PERMA'}
};
PERMA.push(question23);

PERMA.unshift(instruction_screen_experiment);
PERMA.push.apply(questions, PERMA);
call_function("PERMA");
