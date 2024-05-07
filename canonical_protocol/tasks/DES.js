/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DES') );
DES = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Escala de experiencias disociativas</big></b><br/><br/>Este cuestionario consiste de veintiocho preguntas sobre experiencias que UD. puede tener en su vida diaria: Nos interesa cuán a menudo UD. tiene estas experiencias. Es importante, sin embargo, que sus respuestas muestren con qué frecuencia estas experiencias le suceden cuando UD. no está bajo la influencia del alcohol o drogas.<br><br>
  Para responder las preguntas, por favor determine en qué grado la experiencia descrita en la pregunta se aplica a UD. y marque el número que muestre qué porcentaje del tiempo UD tiene la experiencia.</p>`],
  data:{trialid: 'Instructions_001', procedure: 'DES'},
  show_clickable_nav: true
};

var question001 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de manejar un automóvil y derrepente percatarse de que no recuerdan qué ha pasado durante todo o parte del viaje. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_001', procedure: 'DES'}
};
DES.push(question001);

var question002 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que a veces estan escuchando a alguien hablar y de repente se percatan que no estaban escuchando parte o todo de lo que se estaba diciendo. Seleccione un número que muestre qué porcentaje del tiempo le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_002', procedure: 'DES'}
};
DES.push(question002);

var question003 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de encontrarse a sí mismos en un lugar y no tener idea de cómo llegaron allí. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_003', procedure: 'DES'}
};
DES.push(question003);

var question004 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de encontrase a sí mismos vestidos con ropas que no recuerdan habérsela puesto. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_004', procedure: 'DES'}
};
DES.push(question004);

var question005 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de encontrar nuevas cosas entre sus pertenencias que no recuerdan haber comprado. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_005', procedure: 'DES'}
};
DES.push(question005);

var question006 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas en ocasiones encuentran que son abordados por personas que no conocen quien lo llama por otro nombre o insiste en que se han conocido antes. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_006', procedure: 'DES'}
};
DES.push(question006);

var question007 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas a veces tienen la experiencia de sentirse como si estuvieran cerca de ellos o viéndose a si mismo y en realidad se ven a si mismo como si estuvieran mirando a otra persona. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_007', procedure: 'DES'}
};
DES.push(question007);

var question008 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>A algunas personas se les ha dicho que en ocasiones no reconocen amigos o miembros de su familia. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_008', procedure: 'DES'}
};
DES.push(question008);

var question009 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que no tienen recuerdos de algunos eventos importantes de su vida (por ejemplo, una boda o graduación). Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_009', procedure: 'DES'}
};
DES.push(question009);

var question010 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de haber sido acusados de mentir cuando ellos no creen haber mentido. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_010', procedure: 'DES'}
};
DES.push(question010);

var question011 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de mirarse en el espejo y no reconocerse a sí mismos. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_011', procedure: 'DES'}
};
DES.push(question011);

var question012 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de sentir que otras personas, objetos y el mundo alrededor de ellos no es real. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_012', procedure: 'DES'}
};
DES.push(question012);

var question013 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia que sus cuerpos no les pertenecen a ellos. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_013', procedure: 'DES'}
};
DES.push(question013);

var question014 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de que en ocasiones estan recordando un evento pasado tan vividamente que sienten como si estuvieran re-viviendo ese evento. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_014', procedure: 'DES'}
};
DES.push(question014);

var question015 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de no estar seguros de si las cosas que ellos recuerdan sucedieron realmente o si solo lo soñaron. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_015', procedure: 'DES'}
};
DES.push(question015);

var question016 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas tienen la experiencia de estar en un sitio familiar pero encontrarlo como extraño o desconocido. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_016', procedure: 'DES'}
};
DES.push(question016);

var question017 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que cuando estan viendo televisión o una película estan tan absortos en la historia que no se dan cuenta de otros eventos que suceden a su alrededor. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_017', procedure: 'DES'}
};
DES.push(question017);

var question018 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que se involucran tanto en una fantasía que sienten como si realmente les estuviera sucediendo a ellos. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_018', procedure: 'DES'}
};
DES.push(question018);

var question019 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que en ocasiones son capaces de ignorar el dolor. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_019', procedure: 'DES'}
};
DES.push(question019);

var question020 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que en ocasiones estan mirando fijamente al espacio, sin pensar en nada, y no se percatan del paso del tiempo. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_020', procedure: 'DES'}
};
DES.push(question020);

var question021 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas en ocasiones encuentran que cuando estan solos hablan en voz alta a si mismos. . Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_021', procedure: 'DES'}
};
DES.push(question021);

var question022 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran que en una situación ellos pueden actuar tan diferente comparado con otra situación que sienten casi como si fueran dos personas diferentes. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_022', procedure: 'DES'}
};
DES.push(question022);

var question023 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas en ocasiones encuentran que en ciertas situaciones son capaces de hacer cosas con tal facilidad y espontaneidad que usualmente serían difíciles para ellos (por ejemplo, deportes, trabajo, situaciones sociales, etc.). Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_023', procedure: 'DES'}
};
DES.push(question023);

var question024 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas en ocasiones encuentran que no pueden recordar si han hecho algo o que solo pensaron en hacerlo (por ejemplo, no saber si han enviado una carta o solo haber pensado en enviarla). Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_024', procedure: 'DES'}
};
DES.push(question024);

var question025 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas encuentran evidencias de haber hecho cosas que no recuerdan haber hecho. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_025', procedure: 'DES'}
};
DES.push(question025);

var question026 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas persona encuentran escritos, dibujos o notas entre sus pertenencias que ellos deben haber hecho pero no pueden recordar haberlas hecho. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_026', procedure: 'DES'}
};
DES.push(question026);

var question027 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas a veces encuentran que escuchan voces dentro de su cabeza que les dice que hagan cosas o comentarios sobre cosas que ellos están haciendo. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_027', procedure: 'DES'}
};
DES.push(question027);

var question028 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Algunas personas a veces sienten como si estuvieran mirando al mundo a través de una niebla de manera que las personas y objetos parecen alejados o borrosos. Seleccione un número que muestre qué porcentaje del tiempo esto le sucede a UD.</div><br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 10, labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"], button_label: "Siguiente",
  data: {trialid: 'DES_028', procedure: 'DES'}
};
DES.push(question028);

// Randomize order of items
//if (debug_mode === false) DES = jsPsych.randomization.repeat(DES,1);
DES.unshift(instruction_screen_experiment);
questions.push.apply(questions, DES);

call_function('DES');