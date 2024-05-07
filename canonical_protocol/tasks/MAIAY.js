/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('MAIAY') );
MAIAY = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Escala de Interocepción: MAIAY</big></b><br/><br/>Para cada anunciado escoge el puntaje que sea el más verdadero para ti. Con qué frecuencia haces lo que indica la frase. Escoge un número entre 0 y 5 que muestre con qué frecuencia sucede lo que dice en la frase.<br><br>
  <table style="border: 1px solid black; border-collapse: collapse; width:100%;">
    <tr>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse; width:16.67%;">NUNCA</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse; width:16.67%;">RARA VEZ</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse; width:16.67%;">POCAS VECES</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse; width:16.67%;">ALGUNAS VECES</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse; width:16.67%;">MUCHAS VECES</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse; width:16.67%;">SIEMPRE</th>
    </tr>
    <tr>
      <td style="font-size: smaller; text-align: center; border: 1px solid black; border-collapse: collapse;">0% del tiempo</td>
      <td style="font-size: smaller; text-align: center; border: 1px solid black; border-collapse: collapse;">Menos del 10% del tiempo</td>
      <td style="font-size: smaller; text-align: center; border: 1px solid black; border-collapse: collapse;">30% del tiempo</td>
      <td style="font-size: smaller; text-align: center; border: 1px solid black; border-collapse: collapse;">50% del tiempo (la mitad de las veces)</td>
      <td style="font-size: smaller; text-align: center; border: 1px solid black; border-collapse: collapse;">Cerca del 70% del tiempo</td>
      <td style="font-size: smaller; text-align: center; border: 1px solid black; border-collapse: collapse;">100% del tiempo</td>
    </tr>
    <tr>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse;">0</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse;">1</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse;">2</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse;">3</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse;">4</th>
      <th style="text-align: center; border: 1px solid black; border-collapse: collapse;">5</th>
    </tr>
  </table>
  <br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'MAIAY'},
  show_clickable_nav: true
};

var question001 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy nervioso(a), puedo notar de donde provienen las sensaciones de mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_001', procedure: 'MAIAY'}
};
MAIAY.push(question001);

var question002 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo notar cuando estoy incómodo(a) en mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_002', procedure: 'MAIAY'}
};
MAIAY.push(question002);

var question003 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo notar donde me siento cómodo(a) en mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_003', procedure: 'MAIAY'}
};
MAIAY.push(question003);

var question004 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo notar cuando cambia mi respiración, como cuando se hace más lenta o más rápida.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_004', procedure: 'MAIAY'}
};
MAIAY.push(question004);

var question005 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Ignoro sensaciones de malestar en mi cuerpo hasta que se vuelven muy fuertes.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_005', procedure: 'MAIAY'}
};
MAIAY.push(question005);

var question006 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Intento distraerme cuando me siento incómodo(a) o siento dolor.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_006', procedure: 'MAIAY'}
};
MAIAY.push(question006);

var question007 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando me siento incómodo(a) o siento dolor, trato de superarlo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_007', procedure: 'MAIAY'}
};
MAIAY.push(question007);

var question008 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando siento dolor en mi cuerpo, me enojo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_008', procedure: 'MAIAY'}
};
MAIAY.push(question008);

var question009 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Me preocupo si siento dolor o me siento incómodo(a).</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_009', procedure: 'MAIAY'}
};
MAIAY.push(question009);

var question010 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo notar si tengo algún malestar en mi cuerpo, pero no me preocupa.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_010', procedure: 'MAIAY'}
};
MAIAY.push(question010);

var question011 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo enfocarme en cómo respiro sin pensar en nada más.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_011', procedure: 'MAIAY'}
};
MAIAY.push(question011);

var question012 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo enfocarme en las sensaciones de mi cuerpo, aún cuando hay mucho pasando a mi alrededor.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_012', procedure: 'MAIAY'}
};
MAIAY.push(question012);

var question013 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy hablando con alguien, puedo enfocarme en cómo estoy parado(a) o sentado(a).</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_013', procedure: 'MAIAY'}
};
MAIAY.push(question013);

var question014 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Aún cuando estoy distraído(a) puedo volver a pensar en cómo se siente mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_014', procedure: 'MAIAY'}
};
MAIAY.push(question014);

var question015 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo volver mi atención de estar pensando en otras cosas a sentir mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_015', procedure: 'MAIAY'}
};
MAIAY.push(question015);

var question016 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo prestarle atención a todo mi cuerpo incluso cuando siento dolor en alguna parte.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_016', procedure: 'MAIAY'}
};
MAIAY.push(question016);

var question017 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo enfocarme en todo mi cuerpo cuando lo intento.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_017', procedure: 'MAIAY'}
};
MAIAY.push(question017);

var question018 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo sentir cómo cambia mi cuerpo cuando estoy enojado(a).</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_018', procedure: 'MAIAY'}
};
MAIAY.push(question018);

var question019 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando algo anda mal en mi vida puedo sentirlo en mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_019', procedure: 'MAIAY'}
};
MAIAY.push(question019);

var question020 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Después de un momento de calma, noto que mi cuerpo se siente diferente.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_020', procedure: 'MAIAY'}
};
MAIAY.push(question020);

var question021 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Siento cómo mi respiración se vuelve fácil y libre cuando estoy cómodo(a).</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_021', procedure: 'MAIAY'}
};
MAIAY.push(question021);

var question022 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Siento cómo mi cuerpo cambia cuando me siento feliz.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_022', procedure: 'MAIAY'}
};
MAIAY.push(question022);

var question023 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo sentir calma aún cuando hay muchas cosas pasando a mi alrededor.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_023', procedure: 'MAIAY'}
};
MAIAY.push(question023);

var question024 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando me enfoco en cómo se siente mi cuerpo, me calmo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_024', procedure: 'MAIAY'}
};
MAIAY.push(question024);

var question025 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Puedo usar mi respiración para ayudar a calmarme y relajarme.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_025', procedure: 'MAIAY'}
};
MAIAY.push(question025);

var question026 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy pensando demasiado, puedo calmar mi mente al enfocarme en mi cuerpo/respiración.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_026', procedure: 'MAIAY'}
};
MAIAY.push(question026);

var question027 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Busco señales en mi cuerpo acerca de mis emociones.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_027', procedure: 'MAIAY'}
};
MAIAY.push(question027);

var question028 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Cuando estoy enojado(a), me tomo el tiempo de revisar cómo se siente mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_028', procedure: 'MAIAY'}
};
MAIAY.push(question028);

var question029 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Escucho a mi cuerpo para ayudarme a elegir qué hacer.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_029', procedure: 'MAIAY'}
};
MAIAY.push(question029);

var question030 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Me siento bien en mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_030', procedure: 'MAIAY'}
};
MAIAY.push(question030);

var question031 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Siento que mi cuerpo es un lugar seguro.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_031', procedure: 'MAIAY'}
};
MAIAY.push(question031);

var question032 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Confío en cómo se siente mi cuerpo.</div><br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 2, step: 1, labels: ["0<br>Nunca","1","2","3","4", "5<br>Siempre"], button_label: "Siguiente",
  data: {trialid: 'MAIAY_032', procedure: 'MAIAY'}
};
MAIAY.push(question032);

// Randomize order of items
//if (debug_mode === false) MAIAY = jsPsych.randomization.repeat(MAIAY,1);
MAIAY.unshift(instruction_screen_experiment);
questions.push.apply(questions, MAIAY);

call_function('MAIAY');