/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('BNT') );
BNT = [];    // temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  data: {trialid: 'Instructions', procedure: 'BNT'},
  pages: [`<p><left><p><left><b><big>Problemas numéricos</big></b><br/>En las siguientes dos pruebas evaluaremos tu habilidad numérica. Trata de contestar lo mejor que puedas <B>sin usar calculadora</B>.</p>`],
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: 'survey-text',
  data: {trialid: 'BNT_01', procedure: 'BNT'},
  questions: [{prompt: '<div class="justified">De las 1.000 personas que viven en un pequeño pueblo, 500 son miembros de un coro. De esos 500 miembros del coro, 100 son hombres. De los 500 habitantes que no pertenecen a un coro, 300 son hombres. ¿Cuál es la probabilidad de que un hombre seleccionado al azar sea miembro de un coro? Por favor, indique la probabilidad en porcentaje:</div>', type: 'number', range: [0, 100], required: true, error_text: 'Tienes que introducir un porcentaje entre 0 y 100'}],
};
BNT.push(question01);

var question02 = {
  type: 'survey-text',
  data: {trialid: 'BNT_02', procedure: 'BNT'},
  questions: [{prompt: '<div class="justified">Imagina que tiramos un dado de cinco caras 50 veces. En promedio, de estas 50 tiradas, ¿cuántas veces crees que saldría un número impar (1, 3, o 5) en este dado de cinco caras? ______ de 50 tiradas.</div>', type: 'number', range: [0, 50], required: true, error_text: 'Tienes que introducir un número entre 0 y 50'}],
};

var if_question02 = {
  timeline: [question02],
  data: {trialid: 'BNT_02_if', procedure: 'BNT'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'BNT_01'))['response'])['Q0']).trim();
    if((data) !=  '25'){
      return true;
    } else {
      return false;
    }
  },
};
BNT.push(if_question02);

var question03 = {
  type: 'survey-text',
  data: {trialid: 'BNT_03', procedure: 'BNT'},
  questions: [{prompt: '<div class="justified">Imagina que tiramos un dado trucado de seis caras. La probabilidad de que salga un 6 al tirar el dado es el doble que la probabilidad de que salga uno de los demás números. En promedio, en 70 tiradas, ¿cuántas veces crees que saldría el número 6? ______ de 70 tiradas.</div>', type: 'number', range: [0, 70], required: true, error_text: 'Tienes que introducir un número entre 0 y 70'}],
};

var if_question03 = {
  timeline: [question03],
  data: {trialid: 'BNT_03_if', procedure: 'BNT'},
  conditional_function: function(){
  let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'BNT_01'))['response'])['Q0']).trim();
  if((data) ==  '25'){
    return true;
   } else {
    return false;
   }
  },
};
BNT.push(if_question03);

var question04 = {
  type: 'survey-text',
  data: {trialid: 'BNT_04', procedure: 'BNT'},
  questions: [{prompt: '<div class="justified">En un bosque, el 20% de las setas son rojas, el 50% son marrones y el 30% son blancas. La probabilidad de que una seta roja sea venenosa es del 20%. La probabilidad de que una seta que no sea roja sea venenosa es del 5%. ¿Cuál es la probabilidad de que en el bosque una seta venenosa sea roja?</div>', type: 'number', range: [0, 100], required: true, error_text: 'Tienes que introducir un porcentaje entre 0 y 100'}],
};

var if_question04 = {
  timeline: [question04],
  data: {trialid: 'BNT_04_if', procedure: 'BNT'},
  conditional_function: function(){
    try {
      let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'BNT_03'))['response'])['Q0']).trim();

      if((data) != '20'){
        return true;
      } else {
        return false;
      }

    } catch(err) {
      //alert('we dont have BNT_03')
      return false;
    }
  },
};
BNT.push(if_question04);

BNT.unshift(instruction_screen_experiment);
BNT.push.apply(questions, BNT);
call_function("BNT");
