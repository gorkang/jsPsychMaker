/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('MAIA') );
MAIA = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Escala de Interocepción: MAIA</big></b><br/>A continuación, se encuentra una serie de enunciados. Por favor indique cuán a menudo dichos enunciados se aplican a usted en su vida cotidiana.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'MAIA'},
  show_clickable_nav: true
};

var question001 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy tenso(a) noto dónde se ubica la tensión en mi cuerpo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_001', procedure: 'MAIA'}
};
MAIA.push(question001);

var question002 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Me doy cuenta cuando me siento incómodo(a) en mi cuerpo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_002', procedure: 'MAIA'}
};
MAIA.push(question002);

var question003 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy cómodo(a) lo noto en partes específicas de mi cuerpo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_003', procedure: 'MAIA'}
};
MAIA.push(question003);

var question004 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Noto cambios en mi respiración, tales como cuando se hace más lenta o más rápida.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_004', procedure: 'MAIA'}
};
MAIA.push(question004);

var question005 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Noto la tensión física o el malestar solamente cuando se vuelve muy severo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_005', procedure: 'MAIA'}
};
MAIA.push(question005);

var question006 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>No me doy cuenta de las sensaciones de malestar.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_006', procedure: 'MAIA'}
};
MAIA.push(question006);

var question007 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando siento dolor o malestar intento ignorarlo y continuar con lo que estaba haciendo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_007', procedure: 'MAIA'}
};
MAIA.push(question007);

var question008 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando siento dolor físico me enojo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_008', procedure: 'MAIA'}
};
MAIA.push(question008);

var question009 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Si siento algún malestar me empieza a preocupar que algo no ande bien.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_009', procedure: 'MAIA'}
};
MAIA.push(question009);

var question010 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo sentir alguna sensación física desagradable sin preocuparme por ella.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_010', procedure: 'MAIA'}
};
MAIA.push(question010);

var question011 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo prestar atención a mi respiración sin ser distraído (a) por lo que pasa a mi alrededor.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_011', procedure: 'MAIA'}
};
MAIA.push(question011);

var question012 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo tener conciencia de mis sensaciones corporales internas aun cuando hay muchas cosas sucediendo a mi alrededor.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_012', procedure: 'MAIA'}
};
MAIA.push(question012);

var question013 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy conversando con alguien puedo prestarle atención a mi postura.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_013', procedure: 'MAIA'}
};
MAIA.push(question013);

var question014 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo volver a concentrarme en mi cuerpo si estoy distraído(a).</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_014', procedure: 'MAIA'}
};
MAIA.push(question014);

var question015 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo redirigir mi atención desde mis pensamientos a mis sensaciones corporales.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_015', procedure: 'MAIA'}
};
MAIA.push(question015);

var question016 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo prestar atención a todo mi cuerpo incluso cuando una parte de mi siente dolor o malestar.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_016', procedure: 'MAIA'}
};
MAIA.push(question016);

var question017 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Soy capaz de concentrarme conscientemente en mi cuerpo de manera global.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_017', procedure: 'MAIA'}
};
MAIA.push(question017);

var question018 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Noto cómo mi cuerpo cambia cuando estoy enojado(a).</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_018', procedure: 'MAIA'}
};
MAIA.push(question018);

var question019 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando algo anda mal en mi vida puedo sentirlo en mi cuerpo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_019', procedure: 'MAIA'}
};
MAIA.push(question019);

var question020 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Noto que mi cuerpo se siente diferente después de una experiencia apacible.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_020', procedure: 'MAIA'}
};
MAIA.push(question020);

var question021 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Noto que puedo respirar libre y fácilmente cuando me siento cómodo(a).</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_021', procedure: 'MAIA'}
};
MAIA.push(question021);

var question022 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Noto cómo mi cuerpo cambia cuando me siento contento(a) / feliz.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_022', procedure: 'MAIA'}
};
MAIA.push(question022);

var question023 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando me siento sobrepasado(a) puedo encontrar un lugar tranquilo dentro de mi.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_023', procedure: 'MAIA'}
};
MAIA.push(question023);

var question024 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando dirijo la atención hacia mi cuerpo siento calma.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_024', procedure: 'MAIA'}
};
MAIA.push(question024);

var question025 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo utilizar mi respiración para reducir la tensión.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_025', procedure: 'MAIA'}
};
MAIA.push(question025);

var question026 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy atrapado(a) en mis pensamientos puedo calmar mi mente concentrándome en mi cuerpo/respiración.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_026', procedure: 'MAIA'}
};
MAIA.push(question026);

var question027 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Estoy a la escucha de la información que envía mi cuerpo sobre mi estado emocional.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_027', procedure: 'MAIA'}
};
MAIA.push(question027);

var question028 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy alterado(a), me tomo el tiempo      para explorar cómo se siente mi cuerpo.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_028', procedure: 'MAIA'}
};
MAIA.push(question028);

var question029 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Escucho a mi cuerpo para saber qué hacer.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_029', procedure: 'MAIA'}
};
MAIA.push(question029);

var question030 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>En mi cuerpo, estoy en casa.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_030', procedure: 'MAIA'}
};
MAIA.push(question030);

var question031 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Siento que mi cuerpo es un lugar seguro.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_031', procedure: 'MAIA'}
};
MAIA.push(question031);

var question032 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Confío en mis sensaciones corporales.</div>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIA_032', procedure: 'MAIA'}
};
MAIA.push(question032);

// Randomize order of items
//if (debug_mode === false) MAIA = jsPsych.randomization.repeat(MAIA,1);
MAIA.unshift(instruction_screen_experiment);
questions.push.apply(questions, MAIA);

call_function('MAIA');