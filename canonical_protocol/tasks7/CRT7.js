/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = (typeof questions != 'undefined' && questions instanceof Array) ? questions : [];
questions.push(check_fullscreen('CRT7'));

CRT7 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left><b><big>CRT7</big></b><br />' +
    'En las siguientes páginas verá varios ítems que difieren en dificultad. Responda todos los que pueda.' + '</p>'],
  data: { trialid: 'Instructions_01', procedure: 'CRT7'},
  show_clickable_nav: true,
  on_trial_start: function () {
    bloquear_enter = 0;
  }
};

var question1 = {
  type: jsPsychSurveyText,
  questions: [{ prompt: "<div class='justified'>1. Un bate y una pelota cuestan  $1100 en total. El bate cuesta $1000 más que la pelota ¿Cuánto cuesta la pelota?</div>", input_type: 'number', required: true }],
  data: { trialid: 'CRT7_01', procedure: 'CRT7'},
  on_load: function () {
    input_reload();
  }
};
CRT7.push(question1);

var question2 = {
  type: jsPsychSurveyText,
  questions: [{ prompt: "<div class='justified'>2. Si 5 máquinas se demoran 5 minutos en hacer 5 audífonos ¿Cuántos minutos se demorarían 100 máquinas en hacer 100 audífonos?</div>", input_type: 'number', required: true }],
  data: { trialid: 'CRT7_02', procedure: 'CRT7'},
  on_load: function () {
    input_reload();
  }
};
CRT7.push(question2);

var question3 = {
  type: jsPsychSurveyText,
  questions: [{ prompt: "<div class='justified'>3. Parte de la superficie de un lago está cubierta de hojas de lirio. Esta parte, se dobla en tamaño cada día. Si las hojas de lirio demoran 48 días en cubrir el lago completo ¿Cuántos días tardarían en cubrir la mitad del lago?</div>", input_type: 'number', required: true }],
  data: { trialid: 'CRT7_03', procedure: 'CRT7'},
  on_load: function () {
    input_reload();
  }
};
CRT7.push(question3);

var question4 = {
  type: jsPsychSurveyText,
  questions: [{ prompt: "<div class='justified'>4. Si José puede tomar un litro de agua en 6 días y María puede tomar un litro de agua en 12 días ¿Cuánto se demorarían ambos en tomar un litro de agua juntos?</div>", input_type: 'number', required: true }],
  data: { trialid: 'CRT7_04', procedure: 'CRT7'},
  on_load: function () {
    input_reload();
  }
};
CRT7.push(question4);

var question5 = {
  type: jsPsychSurveyText,
  questions: [{ prompt: "<div class='justified'>5. Pedro recibió la quinceava nota más alta y la quinceava nota más baja en su clase ¿Cuántos estudiantes hay en su clase?</div>", input_type: 'number', required: true }],
  data: { trialid: 'CRT7_05', procedure: 'CRT7'},
  on_load: function () {
    input_reload();
  }
};
CRT7.push(question5);

var question6 = {
  type: jsPsychSurveyText,
  questions: [{ prompt: "<div class='justified'>6. Un hombre compra un cerdo a $60000, lo vende a $70.000, lo compra de nuevo por $80000, y lo vuelve a vender finalmente por $90000 ¿Cuánta plata ha ganado?</div>", input_type: 'number', required: true }],
  data: { trialid: 'CRT7_06', procedure: 'CRT7'},
  on_load: function () {
    input_reload();
  }
};
CRT7.push(question6);

var question7 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{ prompt: "<div class='justified'>7. Simón decide invertir $8000000 en el mercado de acciones un día a inicios de 2008. Seis meses después de haber invertido, el 17 de julio, las acciones que había comprado bajaron 50%. Afortunadamente para Simón, desde el 17 de julio hasta el 17 de octubre, las acciones que compró subieron 75%. En este punto, Simón ha:</div>", options: ['No ha ganado ni perdido dinero', 'Ha ganado dinero', 'Ha perdido dinero'], required: true, horizontal: true }],
  data: { trialid: 'CRT7_07', procedure: 'CRT7'}
};
CRT7.push(question7);

CRT7.unshift(instruction_screen_experiment);
questions.push.apply(questions, CRT7);

call_function("CRT7");
