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
}

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];;    //final timeline

ESM = [];    //temporal timeline

  // preloading videos only works when the file is running on a server
  // if you run this experiment by opening the file directly in the browser,
  // then video preloading will be disabled to prevent CORS errors

  var instruction_screen_experiment = {
    type: 'html-button-response',
    stimulus: '<div style="max-width:600px;"><p>Descripcion de la tarea e instrucciones. ....</p></div>',
    choices: ['Continue'],
    data: {trialid: 'Instructions_01', procedure: 'ESM'}
  }

  var question01 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Cómo está su memoria en comparación a como estaba 10 años atrás?", options: ['Mejor', 'Igual', 'Peor'], required: true, horizontal: false}],
    data: {trialid: 'ESM_01', procedure: 'ESM'}
  };
  ESM.push(question01);

  var question02 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Siente que le cuesta más recordar las cosas de lo que le costaba hace un año atrás?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_02', procedure: 'ESM'}
  };
  ESM.push(question02);

  var question03 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Cómo está su capacidad para recordar los nombres de personas cercanas o familiares?", options: ['Muy Buena', 'Buena', 'Mala', 'Muy Mala'], required: true, horizontal: false}],
    data: {trialid: 'ESM_03', procedure: 'ESM'}
  };
  ESM.push(question03);

  var question04 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Siente usted que su memoria está peor que antes?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_04', procedure: 'ESM'}
  };
  ESM.push(question04);

  var question05 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Siente que se está olvidando donde deja las cosas?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_05', procedure: 'ESM'}
  };
  ESM.push(question05);

  var question06 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Tiene más dificultades que antes de encontrar las palabras necesarias para tener una conversación?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_06', procedure: 'ESM'}
  };
  ESM.push(question06);

  var question07 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Cómo está su capacidad para recordar compromisos importantes?", options: ['Muy Buena', 'Buena', 'Mala', 'Muy Mala'], required: true, horizontal: false}],
    data: {trialid: 'ESM_07', procedure: 'ESM'}
  };
  ESM.push(question07);

  var question08 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Tiene dificultades para recordar cosas que han pasado recientemente?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_08', procedure: 'ESM'}
  };
  ESM.push(question08);

  var question09 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Tiende a olvidar las cosas que le dijeron ayer o hace pocos días atrás?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_09', procedure: 'ESM'}
  };
  ESM.push(question09);

  var question10 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Le ha pasado que comienza a hacer algo pero se le olvida lo que estaba haciendo?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_10', procedure: 'ESM'}
  };
  ESM.push(question10);

  var question11 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: "¿Le ha pasado que entra a una pieza a buscar o hacer algo y se le olvida lo que era?", options: ['Si', 'No', 'No se'], required: true, horizontal: false}],
    data: {trialid: 'ESM_11', procedure: 'ESM'}
  };
  ESM.push(question11);




  ESM.unshift(instruction_screen_experiment);

  questions.push.apply(questions, ESM)

  questions.push({
      type: 'call-function',
      func: function(){
        if (online) {
          var data = jsPsych.data.get().filter({procedure: 'ESM'}).csv();
        } else {
          var data = jsPsych.data.get().filter({procedure: 'ESM'}).json();
        }
        saveData(data, online, 'ESM');
      },
      procedure: 'ESM'
  });
