/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SWBQ') );
SWBQ = [];    //final timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>SWBQ</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'SWBQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Siento amor por otras personas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_01', procedure: 'SWBQ'}
};
SWBQ.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Siento una relación personal con lo Divino / Dios.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_02', procedure: 'SWBQ'}
};
SWBQ.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Siento lástima hacia los demás.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_03', procedure: 'SWBQ'}
};
SWBQ.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Siento una conexión con la naturaleza.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_04', procedure: 'SWBQ'}
};
SWBQ.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Tengo un sentido de identidad.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_05', procedure: 'SWBQ'}
};
SWBQ.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Adoro al Divino / Creador.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_06', procedure: 'SWBQ'}
};
SWBQ.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Siento asombro por una vista impresionante.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_07', procedure: 'SWBQ'}
};
SWBQ.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Me siento confiado entre las personas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_08', procedure: 'SWBQ'}
};
SWBQ.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Siento autoconciencia.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_09', procedure: 'SWBQ'}
};
SWBQ.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Siento unidad con la naturaleza.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_10', procedure: 'SWBQ'}
};
SWBQ.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11. Siento unidad con lo Divino / Dios.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_11', procedure: 'SWBQ'}
};
SWBQ.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12. Siento armonía con el medio ambiente.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_12', procedure: 'SWBQ'}
};
SWBQ.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13. Siento paz con lo Divino / Dios.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_13', procedure: 'SWBQ'}
};
SWBQ.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14. Siento alegría en la vida.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_14', procedure: 'SWBQ'}
};
SWBQ.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15. Siento que la oración enriquece mi vida.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_15', procedure: 'SWBQ'}
};
SWBQ.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16. Siento paz interior.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_16', procedure: 'SWBQ'}
};
SWBQ.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>17. Siento respeto por los demás.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_17', procedure: 'SWBQ'}
};
SWBQ.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>18. Siento que la vida tiene sentido.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_18', procedure: 'SWBQ'}
};
SWBQ.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>19. Siento amabilidad hacia otras personas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_19', procedure: 'SWBQ'}
};
SWBQ.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>20. Siento 'magia' en el medio ambiente.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_20', procedure: 'SWBQ'}
};
SWBQ.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>21. Siento una conexión entre mí y los demás.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_21', procedure: 'SWBQ'}
};
SWBQ.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>22. Siento asombro hacia naturaleza.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_22', procedure: 'SWBQ'}
};
SWBQ.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>23. Siento que vivo en armonía con los demás.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_23', procedure: 'SWBQ'}
};
SWBQ.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>24. Me siento en armonía con la naturaleza.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_24', procedure: 'SWBQ'}
};
SWBQ.push(question24);

var question25 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>25. Siento fuerza interior.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_25', procedure: 'SWBQ'}
};
SWBQ.push(question25);

var question26 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>26. Siento que confío en las personas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'SWBQ_26', procedure: 'SWBQ'}
};
SWBQ.push(question26);

SWBQ.unshift(instruction_screen_experiment);
SWBQ.push.apply(questions, SWBQ)



questions.push({
    type: 'call-function',
    data: {trialid: 'SWBQ_000', procedure: 'SWBQ'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'SWBQ'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'SWBQ', procedure: 'SWBQ'}).json();
      }
      saveData(data, online, 'SWBQ');
    }
});
