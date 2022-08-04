/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR24') );
DEMOGR24 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`Bienvenida al estudio sobre Experiencias de Cuidado en Cuidadoras de personas con Alzheimer. A continuación, le realizaremos una serie de preguntas que evaluarán su comportamiento, respuestas emocionales y empáticas en su vida diaria y en el cuidado de otro.<BR><BR>`, `El tiempo total estimado es de aproximadamente 15 minutos. Por favor, llegue hasta el final de la encuesta ya que tus respuestas no se guardarán si no se envía el formulario completo.<BR><BR>`, `El tiempo y la rigurosidad en completar la encuesta es muy importante para que podamos avanzar en la comprensión de las cuidadoras de personas con Alzheimer y en un futuro diseñar evaluaciones e intervenciones. Su participación hace la diferencia!.<BR><BR>`, `<b><big>Información demográfica</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR24'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Nombre de pila (opcional)</div>', type: 'text', range: [-Infinity, Infinity], required: false}],
  data: {trialid: 'DEMOGR24_01', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Fecha de nacimiento</div>', type: 'date', required: true, error_text: 'Tienes que ser mayor de edad para poder participar'}],
  data: {trialid: 'DEMOGR24_02', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Lugar de residencia (Comuna)</div>', type: 'text', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'DEMOGR24_03', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tipo de relación con la persona cuidada</div>', options: ["&nbsp;Esposa", "&nbsp;Hija", "&nbsp;Otra familiar", "&nbsp;Amiga o vecina"], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR24_04', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Actualmente, ¿Vive con el familiar que usted cuida?</div>', options: ["&nbsp;Si", "&nbsp;No"], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR24_05', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuántos días a la semana está encargada del cuidado?</div>', options: ["&nbsp;1", "&nbsp;2", "&nbsp;3", "&nbsp;4", "&nbsp;5", "&nbsp;6", "&nbsp;7"], required: true, horizontal: true}],
  data: {trialid: 'DEMOGR24_06', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Cuántas horas al día realiza tareas de cuidado?</div>', type: 'number', endword: ' horas', range: [1, 24], required: true, error_text: 'La respuesta debe estar entre 1 y 24 horas'}],
  data: {trialid: 'DEMOGR24_07', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question07);

var question08 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Aproximadamente, ¿Desde cuando está encargada del cuidado?</div>', type: 'date', required: true}],
  data: {trialid: 'DEMOGR24_08', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Aproximadamente, ¿Cuál fue la fecha del diagnóstico de Alzheimer de su familiar?</div>', type: 'date', required: true}],
  data: {trialid: 'DEMOGR24_09', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Recibe ayuda de otra persona/fundación/institución/centro de salud en el cuidado?</div>', options: ["&nbsp;Si", "&nbsp;No"], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR24_10', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted tiene alguna enfermedad diagnosticada?</div>', options: ["&nbsp;Si", "&nbsp;No"], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR24_11', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question11);

var question12 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Que enfermedad le fue diagnosticada?</div>', type: 'text', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'DEMOGR24_12', procedure: 'DEMOGR24'}
};

var if_question12 = {
  timeline: [question12],
  data: {trialid: 'DEMOGR24_12_if', procedure: 'DEMOGR24'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR24_11'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR24.push(if_question12);



var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Consume usted algún medicamento para tratamiento de estrés, depresión, ansiedad u otro?</div>', options: ["&nbsp;Si", "&nbsp;No"], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR24_13', procedure: 'DEMOGR24'}
};
DEMOGR24.push(question13);

var question14 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Que medicamento consume?</div>', type: 'text', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'DEMOGR24_14', procedure: 'DEMOGR24'}
};

var if_question14 = {
  timeline: [question14],
  data: {trialid: 'DEMOGR24_14_if', procedure: 'DEMOGR24'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR24_13'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR24.push(if_question14);

DEMOGR24.unshift(instruction_screen_experiment);
DEMOGR24.push.apply(questions, DEMOGR24);
call_function("DEMOGR24");
