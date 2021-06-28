/**
 * CSCN lab
/**
This document was made with test_maker
*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
};

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

BNT = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<p><left><p><left><b><big>Conocimiento sobre probabilidades 1/2</big></b><br/>En las siguientes dos pruebas evaluaremos tu habilidad numérica para ver como se relaciona con tu capacidad para comprender consentimientos informados. Trata de contestar lo mejor que puedas <B>sin usar calculadora</B>.</p>`],
    //pages: [`<p><left><p><left><b><big>BNT</big></b><br/>A continuación verás un par de preguntas en las que tu tarea será estimar probabilidades. <BR> Trata de resolverlas lo mejor que puedas <B>sin usar calculadora.</B></p>`],
    data: {trialid: 'Instructions', procedure: 'BNT'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">De las 1.000 personas que viven en un pequeño pueblo, 500 son miembros de un coro. De esos 500 miembros del coro, 100 son hombres. De los 500 habitantes que no pertenecen a un coro, 300 son hombres. ¿Cuál es la probabilidad de que un hombre seleccionado al azar sea miembro de un coro? Por favor, indique la probabilidad en porcentaje:</div>', type: 'number', range: [0, 100], required: true, error_text: 'Tienes que introducir un porcentaje entre 0 y 100'}],
  data: {trialid: 'BNT_01', procedure: 'BNT'}
};
BNT.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Imagina que tiramos un dado de cinco caras 50 veces. En promedio, de estas 50 tiradas, ¿cuántas veces crees que saldría un número impar (1, 3, o 5) en este dado de cinco caras? ______ de 50 tiradas.</div>', type: 'number', range: [0, 50], required: true, error_text: 'Tienes que introducir un número entre 0 y 50'}],
  data: {trialid: 'BNT_02', procedure: 'BNT'}
};

var if_question02 = {
timeline: [question02],
conditional_function: function(){
  let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'BNT_01'))['response'])['Q0']).trim();
 if((data) !=  '25'){
   return true;
   } else {
   return false;
  }
}
};

BNT.push(if_question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Imagina que tiramos un dado trucado de seis caras. La probabilidad de que salga un 6 al tirar el dado es el doble que la probabilidad de que salga uno de los demás números. En promedio, en 70 tiradas, ¿cuántas veces crees que saldría el número 6? ______ de 70 tiradas.</div>', type: 'number', range: [0, 70], required: true, error_text: 'Tienes que introducir un número entre 0 y 70'}],
  data: {trialid: 'BNT_03', procedure: 'BNT'}
};

var if_question03 = {
timeline: [question03],
conditional_function: function(){
  let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'BNT_01'))['response'])['Q0']).trim();
 if((data) ==  '25'){
   return true;
   } else {
   return false;
  }
}
};

BNT.push(if_question03);

var question04 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">En un bosque, el 20% de las setas son rojas, el 50% son marrones y el 30% son blancas. La probabilidad de que una seta roja sea venenosa es del 20%. La probabilidad de que una seta que no sea roja sea venenosa es del 5%. ¿Cuál es la probabilidad de que en el bosque una seta venenosa sea roja?</div>', type: 'number', range: [0, 100], required: true, error_text: 'Tienes que introducir un porcentaje entre 0 y 100'}],
  data: {trialid: 'BNT_04', procedure: 'BNT'}
};

var if_question04 = {
timeline: [question04],
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
}
};

BNT.push(if_question04);

BNT.unshift(instruction_screen_experiment);
BNT.push.apply(questions, BNT);


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'BNT'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'BNT'}).json();
      }
      saveData(data, online, 'BNT');
    },
    procedure: 'BNT'
});
