/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('COVIDCONTROL') );
COVIDCONTROL = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left><b><big></big></b><br />'+
  'A continuación, por favor conteste unas breves preguntas que buscan conocer sobre los cambios que han ocurrido en su vida desde la aparición del COVID-19.' +'</p>'],
  data: {trialid: 'Instructions_01', procedure: 'COVIDCONTROL'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyMultiSelect,
  questions: [{prompt: '<div class="justified">Quién más vive en su casa además de usted actualmente? (puede marcar más de una alternativa)</div>', options: ['&nbsp;Hijo/a(s)', '&nbsp;Hermano/a(s)/otro familiar menor de 60 años', '&nbsp;Compañero(a) de vivienda menor de 60 años', '&nbsp;Personas mayores a 60 años', '&nbsp;Mascota(s)', '&nbsp;Vivo solo(a)', '&nbsp;Esposo(a)/Pareja'], required: true, name: 'Q0', randomize_question_order: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_01', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question01);

var question02 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Si tuviera que elegir aquella situación que más lo(a) representa durante la pandemia del COVID-19, ¿cuál sería?</div>', options: ['&nbsp;Estoy en cuarentena/distanciamiento social obligatorio (decretado por el Gobierno y/o el sistema público de salud)', '&nbsp;Estoy en cuarentena/distanciamiento social voluntario. Si trabajo y/o estudio, lo hago desde el lugar donde vivo', '&nbsp;Hago mis quehaceres de forma normal (trabajo, colegio, etc), pero no voy a restaurantes, cines, etc', '&nbsp;Hago mis quehaceres de forma normal (trabajo, colegio, etc), y también voy a restaurantes, cines, etc', '&nbsp;Mi trabajo requiere que me traslade a otros sitios (médicos, delivery, transporte público, etc), mientras otros deben quedarse en casa de forma obligaroria/voluntaria.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_02', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question02);

var question03 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">De forma general, ¿cómo describiría su estado de salud en este último tiempo? Usted diría que es:</div>', options: ['&nbsp;Bastante bueno', '&nbsp;Bueno', '&nbsp;Ni bueno ni malo', '&nbsp;Malo', '&nbsp;Muy malo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_03', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question03);

var question04 = {
  type: jsPsychSurveyMultiSelect,
  questions: [{prompt: '<div class="justified">A su alrededor, ¿ha habido diagnósticos de COVID-19? (Marque todas las alternativas que se ajusten a su realidad)</div>', options: ['&nbsp;No', '&nbsp;En mi país', '&nbsp;En mi provincia o región', '&nbsp;En mi ciudad', '&nbsp;En mi trabajo, o en el colegio o jardín infantil donde asisten los niños que viven en mi casa', '&nbsp;Dentro de mis conocidos', '&nbsp;Dentro de mis amigos cercanos', '&nbsp;Dentro de mi familia', '&nbsp;En mi hogar', '&nbsp;Yo tengo/tuve COVID-19'], required: true, name: 'Q0', randomize_question_order: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_04', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Qué tan en riesgo cree que se encuentra de: <B>Infectarse con COVID-19</B></div>', options: ['&nbsp;Muy bajo riesgo', '&nbsp;Bajo riesgo', '&nbsp;Ni bajo ni alto riesgo', '&nbsp;Alto riesgo', '&nbsp;Muy alto riesgo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_05', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question05);

var question06 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Qué tan en riesgo cree que se encuentra de: <B>Experimentar una versión severa de la infección COVID-19</B></div>', options: ['&nbsp;Muy bajo riesgo', '&nbsp;Bajo riesgo', '&nbsp;Ni bajo ni alto riesgo', '&nbsp;Alto riesgo', '&nbsp;Muy alto riesgo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_06', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question06);

var question07 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Qué tan en riesgo cree que se encuentra de: <B>Morir de COVID-19</B></div>', options: ['&nbsp;Muy bajo riesgo', '&nbsp;Bajo riesgo', '&nbsp;Ni bajo ni alto riesgo', '&nbsp;Alto riesgo', '&nbsp;Muy alto riesgo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_07', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question07);

var question08 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Qué tan en riesgo cree que se encuentran su familiares o amigos cercanos de: <B>Infectarse con COVID-19</B></div>', options: ['&nbsp;Muy bajo riesgo', '&nbsp;Bajo riesgo', '&nbsp;Ni bajo ni alto riesgo', '&nbsp;Alto riesgo', '&nbsp;Muy alto riesgo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_08', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question08);

var question09 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Qué tan en riesgo cree que se encuentran su familiares o amigos cercanos de: <B>Experimentar una versión severa de la infección COVID-19</B></div>', options: ['&nbsp;Muy bajo riesgo', '&nbsp;Bajo riesgo', '&nbsp;Ni bajo ni alto riesgo', '&nbsp;Alto riesgo', '&nbsp;Muy alto riesgo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_09', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question09);

var question10 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Qué tan en riesgo cree que se encuentran su familiares o amigos cercanos de: <B>Morir de COVID-19</B></div>', options: ['&nbsp;Muy bajo riesgo', '&nbsp;Bajo riesgo', '&nbsp;Ni bajo ni alto riesgo', '&nbsp;Alto riesgo', '&nbsp;Muy alto riesgo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_10', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question10);

var question11 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Cuando compara la situación financiera de su hogar antes y después de la pandemia por COVID-19, ¿considera que ahora es mejor, peor o que se ha mantenido igual que antes?</div>', options: ['&nbsp;Mejor', '&nbsp;Igual', '&nbsp;Peor', '&nbsp;No lo sé / Prefiero no responder'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_11', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question11);

var question12 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Cuál de las siguientes frases describe mejor su situación laboral durante la pandemia por COVID-19?</div>', options: ['&nbsp;Perdí mi trabajo de forma permanente', '&nbsp;Perdí mi trabajo temporalmente (congelamiento de contrato o similar)', '&nbsp;Perdí mi trabajo de forma permanente, pero obtuve otro', '&nbsp;Tengo el mismo trabajo', '&nbsp;No lo sé / Prefiero no responder'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'COVIDCONTROL_12', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question12);

var question13 = {
  type: jsPsychHtmlSliderResponse,
  //stimulus: '<div class="justified">¿En qué medida considera que las consecuencias de la pandemia han afectado su calidad de vida?</div></br>', require_movement: true, slider_number: true, required: true, stimulus_duration: 10000000000, min: 1, max: 10, slider_width: 500, slider_start: 5, step: 1, labels: ["Mi calidad de vida ha disminuido", "Mi calidad de vida ha mejorado"], button_label: "Next",
  stimulus: '<div class="justified">¿En qué medida considera que las consecuencias de la pandemia han afectado su calidad de vida?</div></br>', require_movement: true, slider_number: true, required: true, stimulus_duration: 10000000000, min: 1, max: 10, slider_width: 200, slider_start: 5, step: 1, labels: ["Mi calidad de vida<BR>ha disminuido", "Mi calidad de vida ha<BR>mejorado"], button_label: "Next",
  data: {trialid: 'COVIDCONTROL_13', procedure: 'COVIDCONTROL'}
};
COVIDCONTROL.push(question13);

COVIDCONTROL.unshift(instruction_screen_experiment);
questions.push.apply(questions, COVIDCONTROL);

call_function("COVIDCONTROL");
