/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('REI40') );
REI40 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>REI40</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'REI40'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No soy tan bueno/a resolviendo problemas complicados.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_01', procedure: 'REI40'}
};
REI40.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Si me basara en mis corazonadas, me equivocaría seguido.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_02', procedure: 'REI40'}
};
REI40.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Prefiero los problemas complejos antes que los simples.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_03', procedure: 'REI40'}
};
REI40.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Generalmente, no dependo de mis sentimientos para tomar decisiones.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_04', procedure: 'REI40'}
};
REI40.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No tengo problema en pensar las cosas con claridad.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_05', procedure: 'REI40'}
};
REI40.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando se trata de confiar en la gente, usualmente me baso en mis corazonadas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_06', procedure: 'REI40'}
};
REI40.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Pensar no es para mi una actividad agradable.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_07', procedure: 'REI40'}
};
REI40.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Me gusta confiar en mis primeras impresiones.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_08', procedure: 'REI40'}
};
REI40.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No soy una persona que piense de manera muy analítica.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_09', procedure: 'REI40'}
};
REI40.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Yo confío en mis corazonadas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_10', procedure: 'REI40'}
};
REI40.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Disfruto resolviendo problemas que requieren pensar mucho.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_11', procedure: 'REI40'}
};
REI40.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Creo que es una tontería tomar decisiones basadas en los sentimientos.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_12', procedure: 'REI40'}
};
REI40.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Sospecho que mis corazonadas a veces son inadecuadas y otras veces adecuadas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_13', procedure: 'REI40'}
};
REI40.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Usualmente tengo razones claras y explicables para mis decisiones.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_14', procedure: 'REI40'}
};
REI40.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Para mí es suficiente conocer la respuesta sin tener que entender el razonamiento detrás.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_15', procedure: 'REI40'}
};
REI40.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No quisiera depender de alguien que se describa a sí mismo como intuitivo.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_16', procedure: 'REI40'}
};
REI40.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>generalmente usar la lógica me sirve para resolver mis problemas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_17', procedure: 'REI40'}
};
REI40.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Disfruto de los desafíos intelectuales.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_18', procedure: 'REI40'}
};
REI40.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Generalmente, puedo sentir cuando una persona está equivocada o no a pesar de no poder explicar cómo lo sé.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_19', procedure: 'REI40'}
};
REI40.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Frecuentemente sigo mi instinto cuando decido qué hacer.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_20', procedure: 'REI40'}
};
REI40.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Probablemente, mis juicios apresurados no son tan buenos como los de la mayoría de la gente.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_21', procedure: 'REI40'}
};
REI40.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Razonar las cosas cuidadosamente, no es uno de mis puntos fuertes.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_22', procedure: 'REI40'}
};
REI40.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No me gustan las situaciones en las cuales tengo que confiar en mi intuición.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_23', procedure: 'REI40'}
};
REI40.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Trato de evitar situaciones que requieren pensar en profundidad sobre algo.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_24', procedure: 'REI40'}
};
REI40.push(question24);

var question25 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Confío en mis sentimientos iniciales sobre la gente.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_25', procedure: 'REI40'}
};
REI40.push(question25);

var question26 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Pienso de manera lógica.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_26', procedure: 'REI40'}
};
REI40.push(question26);

var question27 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Pienso que no es una buena idea confiar en las propias intuiciones para tomar decisiones importantes.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_27', procedure: 'REI40'}
};
REI40.push(question27);

var question28 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No me gusta tener que pensar mucho.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_28', procedure: 'REI40'}
};
REI40.push(question28);

var question29 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No tengo muy buena intuición.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_29', procedure: 'REI40'}
};
REI40.push(question29);

var question30 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No soy muy bueno resolviendo problemas que requieren un análisis lógico minucioso.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_30', procedure: 'REI40'}
};
REI40.push(question30);

var question31 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Creo que hay veces en que uno debería confiar en su intuición.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_31', procedure: 'REI40'}
};
REI40.push(question31);

var question32 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Disfruto pensando en términos abstractos.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_32', procedure: 'REI40'}
};
REI40.push(question32);

var question33 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Generalmente mis intuiciones me sirven para resolver mis problemas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_33', procedure: 'REI40'}
};
REI40.push(question33);

var question34 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No razono bajo presión.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_34', procedure: 'REI40'}
};
REI40.push(question34);

var question35 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Tiendo a usar mi corazón como guía para mis acciones.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_35', procedure: 'REI40'}
};
REI40.push(question35);

var question36 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Pensar mucho y por un tiempo prolongado sobre algo me da poca satisfacción.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_36', procedure: 'REI40'}
};
REI40.push(question36);

var question37 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Casi nunca me equivoco cuando escucho mis sentimientos más profundos para encontrar una respuesta.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_37', procedure: 'REI40'}
};
REI40.push(question37);

var question38 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Soy mucho mejor que la mayoría de la gente para resolver las cosas de forma lógica.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_38', procedure: 'REI40'}
};
REI40.push(question38);

var question39 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>La intuición puede ser una forma útil para resolver problemas.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_39', procedure: 'REI40'}
};
REI40.push(question39);

var question40 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Me gustaría mucho aprender nuevas formas de pensar.</div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'REI40_40', procedure: 'REI40'}
};
REI40.push(question40);

if (debug_mode == 'false') REI40 = jsPsych.randomization.repeat(REI40,1);

REI40.unshift(instruction_screen_experiment);
questions.push.apply(questions, REI40);

call_function("REI40");
