/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escala de Regulación Emocional: ERQ

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ERQ') );
ERQ = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>ERQ</big></b><br />'+
  'Nos gustaría hacerle algunas preguntas sobre su vida emocional, en particular, <br> cómo usted controla (es decir, regula y maneja) sus emociones. Las siguientes <br> preguntas involucran dos aspectos distintos de su vida emocional. Una es su <br> experiencia emocional, o lo que sientes dentro. El otro es su expresión <br> emocional, o cómo usted demuestra sus emociones en la manera que usted <br> habla, o se comporta. Aunque algunas de las siguientes preguntas <br> pueden parecer similares entre sí, difieren de maneras importantes.' +'</p>'],
  data:{trialid: 'Instructions_01', procedure: 'ERQ'},
  show_clickable_nav: true
};

var question001 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Cuando quiero sentir una emoción más positiva (como la alegría o la diversión), cambio lo que estoy pensando.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_001', procedure: 'ERQ'}
};
ERQ.push(question001);

var question002 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Mantengo mis emociones para mí mismo.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_002', procedure: 'ERQ'}
};
ERQ.push(question002);

var question003 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Cuando quiero sentir una emoción menos negativa (como tristeza o enojo), cambio lo que estoy pensando.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_003', procedure: 'ERQ'}
};
ERQ.push(question003);

var question004 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Cuando siento emociones positivas, tengo cuidado de no expresarlas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_004', procedure: 'ERQ'}
};
ERQ.push(question004);

var question005 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Cuando me enfrento a una situación estresante, me hago pensar en ello de una manera que me ayuda a mantener la calma.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_005', procedure: 'ERQ'}
};
ERQ.push(question005);

var question006 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Controlo mis emociones al no expresarlas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_006', procedure: 'ERQ'}
};
ERQ.push(question006);

var question007 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Cuando quiero sentir una emoción más positiva, cambio la forma en que estoy pensando en la situación.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_007', procedure: 'ERQ'}
};
ERQ.push(question007);

var question008 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Controlo mis emociones cambiando la forma en que pienso acerca de la situación en la que estoy.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_008', procedure: 'ERQ'}
};
ERQ.push(question008);

var question009 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Cuando estoy sintiendo emociones negativas, me aseguro de no expresarlas.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_009', procedure: 'ERQ'}
};
ERQ.push(question009);

var question010 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Si quiero sentir una emoción menos negativa, cambio la forma en que pienso en la situación.</div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'ERQ_010', procedure: 'ERQ'}
};
ERQ.push(question010);

ERQ.unshift(instruction_screen_experiment);
questions.push.apply(questions, ERQ);

call_function("ERQ");