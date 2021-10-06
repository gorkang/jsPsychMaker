/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ERQ') );

ERQ = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>ERQ</big></b><br />'+
    'Nos gustaría hacerle algunas preguntas sobre su vida emocional, en particular, <br> cómo usted controla (es decir, regula y maneja) sus emociones. Las siguientes <br> preguntas involucran dos aspectos distintos de su vida emocional. Una es su <br> experiencia emocional, o lo que sientes dentro. El otro es su expresión <br> emocional, o cómo usted demuestra sus emociones en la manera que usted <br> habla, o se comporta. Aunque algunas de las siguientes preguntas <br> pueden parecer similares entre sí, difieren de maneras importantes.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'ERQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Cuando quiero sentir una emoción más positiva (como la alegría o la diversión), cambio lo que estoy pensando.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_01', procedure: 'ERQ'}
};
ERQ.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Mantengo mis emociones para mí mismo.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_02', procedure: 'ERQ'}
};
ERQ.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Cuando quiero sentir una emoción menos negativa (como tristeza o enojo), cambio lo que estoy pensando.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_03', procedure: 'ERQ'}
};
ERQ.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Cuando siento emociones positivas, tengo cuidado de no expresarlas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_04', procedure: 'ERQ'}
};
ERQ.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Cuando me enfrento a una situación estresante, me hago pensar en ello de una manera que me ayuda a mantener la calma.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_05', procedure: 'ERQ'}
};
ERQ.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Controlo mis emociones al no expresarlas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_06', procedure: 'ERQ'}
};
ERQ.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Cuando quiero sentir una emoción más positiva, cambio la forma en que estoy pensando en la situación.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_07', procedure: 'ERQ'}
};
ERQ.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Controlo mis emociones cambiando la forma en que pienso acerca de la situación en la que estoy.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_08', procedure: 'ERQ'}
};
ERQ.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Cuando estoy sintiendo emociones negativas, me aseguro de no expresarlas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_09', procedure: 'ERQ'}
};
ERQ.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Si quiero sentir una emoción menos negativa, cambio la forma en que pienso en la situación.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_10', procedure: 'ERQ'}
};
ERQ.push(question10);

ERQ.unshift(instruction_screen_experiment);
questions.push.apply(questions, ERQ)


questions.push({
    type: 'call-function',
    data: {trialid: 'ERQ_000', procedure: 'ERQ'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'ERQ'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'ERQ'}).json();
      }
      saveData(data, online, 'ERQ');
    },
    procedure: 'ERQ'
});
