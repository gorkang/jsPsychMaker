/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PWb') );;    //final timeline

PWb = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>PWb</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'PWb'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1.- Cuando repaso la historia de mi vida estoy contento/a con cómo han resultado las cosas.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_01', procedure: 'PWb'}
};
PWb.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2.- A menudo me siento solo/a porque tengo pocos amigos íntimos con quien compartir mis preocupaciones.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_02', procedure: 'PWb'}
};
PWb.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3.- No tengo miedo de expresar mis opiniones, incluso cuando son opuestas a las opiniones de la mayoría de la gente.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_03', procedure: 'PWb'}
};
PWb.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4.- Me preocupa cómo otra gente evalúa las elecciones que he hecho en mi vida.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_04', procedure: 'PWb'}
};
PWb.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5.- Me resulta difícil dirigir mi vida hacia un camino que me satisfaga.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_05', procedure: 'PWb'}
};
PWb.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6.- Disfruto haciendo planes para el futuro y trabajar para hacerlos realidad.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_06', procedure: 'PWb'}
};
PWb.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7.- En general, me siento seguro/a y positivo/a conmigo mismo/a.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_07', procedure: 'PWb'}
};
PWb.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8.- No tengo muchas personas que quieran escucharme cuando necesito hablar.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_08', procedure: 'PWb'}
};
PWb.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9.- Tiendo a preocuparme sobre lo que otra gente piensa de mí.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_09', procedure: 'PWb'}
};
PWb.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10.- Me juzgo por lo que yo creo que es importante, no por los valores que otros piensan que son importantes.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_10', procedure: 'PWb'}
};
PWb.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11.- He sido capaz de construir un hogar y un modo de vida a mi gusto.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_11', procedure: 'PWb'}
};
PWb.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12.- Soy una persona activa al realizar los proyectos que propuse para mí mismo/a.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_12', procedure: 'PWb'}
};
PWb.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13.- Si tuviera oportunidad, hay muchas cosas de mi mismo/a que cambiaría.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_13', procedure: 'PWb'}
};
PWb.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14.- Siento que mis amistades me aportan muchas cosas.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_14', procedure: 'PWb'}
};
PWb.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15.- Tiendo a estar influenciado/a por la gente con fuertes convicciones.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_15', procedure: 'PWb'}
};
PWb.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16.- En general, siento que soy responsable de la situación en la que vivo.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_16', procedure: 'PWb'}
};
PWb.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>17.- Me siento bien cuando pienso en lo que he hecho en el pasado y lo que espero hacer en el futuro.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_17', procedure: 'PWb'}
};
PWb.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>18.- Mis objetivos en la vida han sido más una fuente de satisfacción que de frustración para mí.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_18', procedure: 'PWb'}
};
PWb.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>19.- Me gusta la mayor parte de los aspectos de mi personalidad.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_19', procedure: 'PWb'}
};
PWb.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>20.- Me parece que la mayoría de las personas tienen más amigos que yo.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_20', procedure: 'PWb'}
};
PWb.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>21.- Tengo confianza en mis opiniones incluso si son contrarias al consenso general.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_21', procedure: 'PWb'}
};
PWb.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>22.- Las demandas de la vida diaria a menudo me deprimen.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_22', procedure: 'PWb'}
};
PWb.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>23.- Tengo clara la dirección y el objetivo de mi vida.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_23', procedure: 'PWb'}
};
PWb.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>24.- En general, con el tiempo siento que sigo aprendiendo más sobre mí mismo/a.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_24', procedure: 'PWb'}
};
PWb.push(question24);

var question25 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>25.- En muchos aspectos, me siento decepcionado/a de mis logros en la vida.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_25', procedure: 'PWb'}
};
PWb.push(question25);

var question26 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>26.- No he experimentado muchas relaciones cercanas y de confianza.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_26', procedure: 'PWb'}
};
PWb.push(question26);

var question27 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>27.- Es difícil para mí expresar mis propias opiniones en asuntos polémicos.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_27', procedure: 'PWb'}
};
PWb.push(question27);

var question28 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>28.- Soy bastante bueno/a manejando muchas de mis responsabilidades en la vida diaria.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_28', procedure: 'PWb'}
};
PWb.push(question28);

var question29 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>29.- No tengo claro qué es lo que intento conseguir en la vida.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_29', procedure: 'PWb'}
};
PWb.push(question29);

var question30 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>30.- Hace mucho tiempo que dejé de intentar hacer grandes mejoras o cambios en mi vida.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_30', procedure: 'PWb'}
};
PWb.push(question30);

var question31 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>31.- En su mayor parte, me siento orgulloso/a de quien soy y la vida que llevo.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_31', procedure: 'PWb'}
};
PWb.push(question31);

var question32 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>32.- Sé que puedo confiar en mis amigos, y ellos saben que pueden confiar en mí.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_32', procedure: 'PWb'}
};
PWb.push(question32);

var question33 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>33.- A menudo cambio mis decisiones si mis amigos o mi familia están en desacuerdo.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_33', procedure: 'PWb'}
};
PWb.push(question33);

var question34 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>34.- No quiero intentar nuevas formas de hacer las cosas; mi vida está bien como está.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_34', procedure: 'PWb'}
};
PWb.push(question34);

var question35 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>35.- Pienso que es importante tener nuevas experiencias que desafíen lo que uno piensa sobre si mismo/a y sobre el mundo.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_35', procedure: 'PWb'}
};
PWb.push(question35);

var question36 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>36.- Cuando pienso en ello, realmente con los años no he mejorado mucho como persona.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_36', procedure: 'PWb'}
};
PWb.push(question36);

var question37 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>37.- Tengo la sensación de que con el tiempo me he desarrollado mucho como persona.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_37', procedure: 'PWb'}
};
PWb.push(question37);

var question38 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>38.- Para mí, la vida ha sido un proceso continuo de estudio, cambio y crecimiento.</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_38', procedure: 'PWb'}
};
PWb.push(question38);

var question39 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>39.- Si me sintiera infeliz con mi situación de vida daría los pasos más eficaces para cambiarla</div></br>", require_movement:true, required: true, min: 1, max: 6, slider_width: 500, slider_start: 3, step: 1, labels: ["Totalmente desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'PWb_39', procedure: 'PWb'}
};
PWb.push(question39);

PWb.unshift(instruction_screen_experiment);
questions.push.apply(questions, PWb)


questions.push({
    type: 'call-function',
    data: {trialid: 'PWb_000', procedure: 'PWb'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'PWb'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'PWb'}).json();
      }
      saveData(data, online, 'PWb');
    },
    procedure: 'PWb'
});
