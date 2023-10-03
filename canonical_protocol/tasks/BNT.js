/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// Translations --------------------------------------------------------------
switch (language) {

  case "Spanish":

    BNT_00 = [`<p><left><p><left><b><big>Problemas numéricos</big></b><br/>En las siguientes dos pruebas evaluaremos tu habilidad numérica. Trata de contestar lo mejor que puedas <B>sin usar calculadora</B>.</p>`];

    BNT_01_prompt = '<div class="justified">De las 1.000 personas que viven en un pequeño pueblo, 500 son miembros de un coro. De esos 500 miembros del coro, 100 son hombres. De los 500 habitantes que no pertenecen a un coro, 300 son hombres. ¿Cuál es la probabilidad de que un hombre seleccionado al azar sea miembro de un coro? Por favor, indique la probabilidad en porcentaje:</div>';
    BNT_01_error_text = 'Tienes que introducir un porcentaje entre 0 y 100';

    BNT_02_prompt = '<div class="justified">Imagina que tiramos un dado de cinco caras 50 veces. En promedio, de estas 50 tiradas, ¿cuántas veces crees que saldría un número impar (1, 3, o 5) en este dado de cinco caras? ______ de 50 tiradas.</div>';
    BNT_02_error_text = 'Tienes que introducir un número entre 0 y 50';

    BNT_03_prompt = '<div class="justified">Imagina que tiramos un dado trucado de seis caras. La probabilidad de que salga un 6 al tirar el dado es el doble que la probabilidad de que salga uno de los demás números. En promedio, en 70 tiradas, ¿cuántas veces crees que saldría el número 6? ______ de 70 tiradas.</div>';
    BNT_03_error_text = 'Tienes que introducir un número entre 0 y 70';

    BNT_04_prompt = '<div class="justified">En un bosque, el 20% de las setas son rojas, el 50% son marrones y el 30% son blancas. La probabilidad de que una seta roja sea venenosa es del 20%. La probabilidad de que una seta que no sea roja sea venenosa es del 5%. ¿Cuál es la probabilidad de que en el bosque una seta venenosa sea roja?</div>';
    BNT_04_error_text = 'Tienes que introducir un porcentaje entre 0 y 100';
    break;


  case "English":

    BNT_00 = [`<p><left><p><left><b><big>Adaptive Berlin Numeracy Test</big></b><br/>Please, answer the following questions.</p>`];

    BNT_01_prompt = '<div class="justified">Out of 1,000 people in a small town 500 are members of a choir. Out of these 500 members in a choir 100 are men. Out of the 500 inhabitants that are not in a choir 300 are men. What is the probability that a randomly drawn man is a member of the choir? Please indicate the probability as a percent.</div>';
    BNT_01_error_text = 'Please enter a valid number between 0 and 100';

    BNT_02_prompt = '<div class="justified">Imagine we are throwing a five-sided die 50 times. On average, out of these 50 throws how many times would this five-sided die show an odd number (1, 3 or 5)?</div>';
    BNT_02_error_text = 'Please enter a valid number between 0 and 50';
    
    BNT_03_prompt = '<div class="justified">Imagine we are throwing a loaded die (6 sides). The probability that the die shows a 6 is twice as high as the probability of each of the other numbers. On average, out of these 70 throws how many times would the die show the number 6?</div>';
    BNT_03_error_text = 'Please enter a valid number between 0 and 70';

    BNT_04_prompt = '<div class="justified">In a forest, 20% of the mushrooms are red, 50% are brown, and 30% are white. A red mushroom is poisonous with a probability of 20%. A mushroom that is not red is poisonous with a probability of 5%. What is the probability that a poisonous mushroom in the forest is red? Please indicate the probability as a percent.</div>';
    BNT_04_error_text = 'Please enter a valid percentage between 0 and 100';
    break;

}



// Task -----------------------------------------------------------------------

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('BNT') );
BNT = [];    // temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  data: {trialid: 'BNT_00', procedure: 'BNT'},
  pages: BNT_00,
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: 'survey-text',
  data: {trialid: 'BNT_01', procedure: 'BNT'},
  questions: [{prompt: BNT_01_prompt, type: 'number', range: [0, 100], required: true, error_text: BNT_01_error_text}],
};
BNT.push(question01);

var question02 = {
  type: 'survey-text',
  data: {trialid: 'BNT_02', procedure: 'BNT'},
  questions: [{prompt: BNT_02_prompt, type: 'number', range: [0, 50], required: true, error_text: BNT_02_error_text}],
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
  questions: [{prompt: BNT_03_prompt, type: 'number', range: [0, 70], required: true, error_text: BNT_03_error_text}],
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
  questions: [{prompt: BNT_04_prompt, type: 'number', range: [0, 100], required: true, error_text: BNT_04_error_text}],
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
