/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('OBJNUM') );
OBJNUM = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<p><left><p><left><b><big>Conocimiento sobre probabilidades</big></b><br/>Trata de contestar las siguientes preguntas lo mejor que puedas <B>sin usar calculadora</B>.</p>`],
      //'<p><left>' + '<p><left><b><big>Conocimiento sobre probabilidades</big></b><br />'+'A continuación te pedimos que intentes contestar una serie de preguntas sobre probabilidades.' +'</p>'
    data: {trialid: 'Instructions_01', procedure: 'OBJNUM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Imagina que lanzamos una moneda no trucada en 1.000 ocasiones. <BR><BR>Haz una estimación: ¿Cuántas veces saldrá cara en los 1.000 intentos?</div>', type: 'number', range: [0, 1000], required: true, error_text: 'Tienes que introducir un número entre 0 y 1000'}],
  data: {trialid: 'OBJNUM_01', procedure: 'OBJNUM'}
};
OBJNUM.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">La probabilidad de ganar un premio de $10.000 en la lotería es del 1%. <BR><BR>Haz una estimación: Si 1.000 personas compran un boleto de lotería, ¿cuántas ganarán el premio de $10.000?</div>', type: 'number', range: [0, 1000], required: true, error_text: 'Tienes que introducir un número entre 0 y 1000'}],
  data: {trialid: 'OBJNUM_02', procedure: 'OBJNUM'}
};
OBJNUM.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">En un concurso de un periódico local la probabilidad de ganar un coche es de 1 entre 1.000. <BR><BR>¿Qué porcentaje de participaciones en dicho concurso ganaría el coche?</div>', type: 'number', range: [0, 100], required: true, error_text: 'Tienes que introducir un porcentaje entre 0 y 100'}],
  data: {trialid: 'OBJNUM_03', procedure: 'OBJNUM'}
};
OBJNUM.push(question03);

var question04 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Imagina que lanzamos un dado no trucado en 1.000 ocasiones. <BR><BR>¿En cuántas de estas 1.000 ocasiones crees que saldrá un número par (2, 4, 6)?</div>', type: 'number', range: [0, 1000], required: true, error_text: 'Tienes que introducir un número entre 0 y 1000'}],
  data: {trialid: 'OBJNUM_04', procedure: 'OBJNUM'}
};
OBJNUM.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál de las siguientes cantidades representa un riesgo mayor de contraer una enfermedad?</div>', options: ['&nbsp;1 de 100', '&nbsp;1 de 1000', '&nbsp;1 de 10'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OBJNUM_05', procedure: 'OBJNUM'}
};
OBJNUM.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál de las siguientes cantidades representa un riesgo mayor de contraer una enfermedad?</div>', options: ['&nbsp;1%', '&nbsp;10%', '&nbsp;5%'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'OBJNUM_06', procedure: 'OBJNUM'}
};
OBJNUM.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Si la probabilidad de contraer una enfermedad es del 10 %, ¿cuántas personas esperas que contraigan la enfermedad en un grupo de 1,000?</div>', type: 'number', range: [0, 1000], required: true, error_text: 'Tienes que introducir un número entre 0 y 1000'}],
  data: {trialid: 'OBJNUM_07', procedure: 'OBJNUM'}
};
OBJNUM.push(question07);

var question08 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Si la probabilidad de contraer una enfermedad es de 20 en 100, esto implicaría que hay una probabilidad del _______ % de contraer la enfermedad</div>', type: 'number', range: [0, 100], required: true, error_text: 'Tienes que introducir un porcentaje entre 0 y 100'}],
  data: {trialid: 'OBJNUM_08', procedure: 'OBJNUM'}
};
OBJNUM.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Si el riesgo de que una persona llamada A contraiga una enfermedad es de 1 entre 100 en diez años, y el riesgo de que la contraiga una persona llamada B es el doble que A, ¿cuál es el riesgo de que la contraiga B? (____ entre 100)</div>', type: 'number', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'OBJNUM_09', procedure: 'OBJNUM'}
};
OBJNUM.push(question09);

if (debug_mode === false) OBJNUM = jsPsych.randomization.repeat(OBJNUM,1);
OBJNUM.unshift(instruction_screen_experiment);
questions.push.apply(questions, OBJNUM);


call_function("OBJNUM");
