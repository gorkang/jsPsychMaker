questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('GBS') );
GBS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>GLOBAL BELIEFS SCREENING</big></b><br/><br/>'+
    'Señale a continuación con qué polo más se identifica. Responda marcando un número del -5 a +5 , donde el mayor valor absoluto significa más intensidad hacia el polo que escoja, donde “0” es un punto intermedio entre ambos conceptos.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'GBS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1.- En general, considerando creencias religiosas, yo me considero más bien</div></br>",
  require_movement:true,
  required: true,
  min: -5,
  max: 5,
  slider_width: 500,
  slider_start: 0,
  step: 1,
  labels: ["Creyente", "No creyente o ateo"],
  button_label: "Siguiente",
  data: {trialid: 'GBS_01', procedure: 'GBS'}
};
GBS.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2.- En general, considerando eventos paranormales, extrasensoriales, extraños, mágicos o espirituales, yo creo:</div></br>",
  require_movement:true,
  required: true,
  min: -5,
  max: 5,
  slider_width: 500,
  slider_start: 0,
  step: 1,
  labels: ["Que existen", "No existen o pueden ser explicados desde la ciencia (no son mágicos)"],
  button_label: "Siguiente",
  data: {trialid: 'GBS_02', procedure: 'GBS'}
};
GBS.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3.- En general, considerando las supersticiones, yo me considero más bien</div></br>",
  require_movement:true,
  required: true,
  min: -5,
  max: 5,
  slider_width: 500,
  slider_start: 0,
  step: 1,
  labels: ["Supersticioso", "Escéptico/realista/no supersticioso"],
  button_label: "Siguiente",
  data: {trialid: 'GBS_03', procedure: 'GBS'}
};
GBS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4.- Finalmente, si usted tuviese que clasificarse en una sola categoría que le definiera en términos de sus creencias/no creencias, ¿cuál escogería? (quizás considere que hay más de una, pero solo escoja la que más le represente).</div>', options: ['&nbsp;Creyente cristiano', '&nbsp;Creyente no cristiano (alguna otra religión como por ejemplo judaísmo, hinduismo, bahaísmo, islam, taoísmo, sintoísmo, budismo, sijismo, brahmanismo, jainismo, etc.)', '&nbsp; Creyente no religioso (de un ente, ser o esencia con algún propósito, asociado al universo, la naturaleza, la energía, ser espiritual o trascendente).', '&nbsp;No creyente (no creo en ninguna religión, ni deidad, ni ser superior ni ente o esencia)', '&nbsp;Ateo (no creo en ninguna religión y afirmo que Dios no existe)', '&nbsp;Agnóstico (no puedo afirmar la existencia o inexistencia de Dios o alguna deidad, esencia o ser superior; la verdad, no lo sé)'], required: true, horizontal: false}],
  data: {trialid: 'GBS_04', procedure: 'GBS'}
};
GBS.push(question04);

GBS.unshift(instruction_screen_experiment);
questions.push.apply(questions, GBS);
call_function("GBS");
