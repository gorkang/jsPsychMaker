/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SDG') );
SDG = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left><b><big>Información Sociodemográfica</big></b><br />'+
  'Las preguntas que se le realizarán a continuación son de carácter general. Le recuerdo que toda la información que usted entregue es confidencial y sólo será utilizada con fines académicos.' +'</p>'],
  data:{trialid: 'Instructions_01', procedure: 'SDG'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Rut Completo (sin puntos ni guión y con dígito verificador, en caso que termine en k, reemplace por un 0):</div>', input_type: 'number', min: 100000000, max: 300000000, required: true}],
  data: {trialid: 'SDG_01', procedure: 'SDG'},
  on_load: function () {
    input_reload();
  }
};
SDG.push(question01);

var question02 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Sexo:</div>', options: ['&nbsp;Hombre', '&nbsp;Mujer'], required: true, horizontal: false}],
  data: {trialid: 'SDG_02', procedure: 'SDG'}
};
SDG.push(question02);

var question03 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Fecha de Nacimiento:</div>', input_type: 'date', required: true}],
  data: {trialid: 'SDG_03', procedure: 'SDG'},
  on_load: function () {
    input_reload();
  }
};
SDG.push(question03);

var question04 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Edad:</div>', input_type: 'number', required: true}],
  data: {trialid: 'SDG_04', procedure: 'SDG'},
  on_load: function () {
    input_reload();
  }
};
SDG.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Cuál es su actual situación de pareja?</div>', options: ['&nbsp;Casado (a)', '&nbsp;Conviviente', '&nbsp;Viudo (a)', '&nbsp;Divorciado/anulado (a)', '&nbsp;Separado (a)', '&nbsp;Soltero/sin pareja', '&nbsp;Soltero/con pareja'], required: true, horizontal: false}],
  data: {trialid: 'SDG_05', procedure: 'SDG'}
};
SDG.push(question05);

var question06 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Cuál es el grado más alto de educación que usted ha completado?</div>', options: ['&nbsp;Sin Estudios', '&nbsp;Básica Incompleta', '&nbsp;Básica Completa', '&nbsp;Media Incompleta', '&nbsp;Media Completa', '&nbsp;Técnica Incompleta', '&nbsp;Técnica Completa', '&nbsp;Universitaria Incompleta', '&nbsp;Universitaria Completa o más', '&nbsp;No sabe o no aplica'], required: true, horizontal: false}],
  data: {trialid: 'SDG_06', procedure: 'SDG'}
};
SDG.push(question06);

var question07 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Años de estudio (considerando educación básica, media y cualquier estudio posterior):</div>', input_type: 'number', required: true}],
  data: {trialid: 'SDG_07', procedure: 'SDG'},
  on_load: function () {
    input_reload();
  }
};
SDG.push(question07);

var question08 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Comuna de Residencia:</div>', required: true}],
  data: {trialid: 'SDG_08', procedure: 'SDG'}
};
SDG.push(question08);

var question09 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Durante los últimos 12 meses ¿Ha sido diagnosticado y/o tratado por algún problema Psicológico o Psiquiátrico?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'SDG_09', procedure: 'SDG'}
};
SDG.push(question09);

var question10 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">¿De cuál problema fue diagnosticado y/o tratado?</div>', required: true}],
  data: {trialid: 'SDG_10', procedure: 'SDG'}
};

var if_question10 = {
  timeline: [question10],
  data: {trialid: 'SDG_10_if', procedure: 'SDG'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'SDG_09'))["response"]["Q0"]).toString().trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
SDG.push(if_question10);

var question11 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Tiene Nº de registro social de hogares? (Si no sabe puede consultar aquí: <a href="http://www.registrosocial.gob.cl/" target="_blank">http://www.registrosocial.gob.cl/</a>. Luego ingrese a "ir a mi registro" e ingrese los datos que le solicitan. En caso que tenga, recuerde el porcentaje al cual corresponde, en caso contrario indique la opción "No tengo registro").</div>', options: ['&nbsp;Si tengo registro.', '&nbsp;No tengo registro.'], required: true, horizontal: false}],
  data: {trialid: 'SDG_11', procedure: 'SDG'}
};
SDG.push(question11);

var question12 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Ingrese el porcentaje al que corresponde en el registro social de hogares:</div>', input_type: 'number', min: 0, max: 100, required: true}],
  data: {trialid: 'SDG_12', procedure: 'SDG'},
  on_load: function () {
    input_reload();
  }
};

var if_question12 = {
  timeline: [question12],
  data: {trialid: 'SDG_12_if', procedure: 'SDG'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'SDG_11'))["response"]["Q0"]).toString().trim();
    if(data == "Si tengo registro."){
      return true;
    } else {
      return false;
    }
  }
}
SDG.push(if_question12);

var question13 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Cuál es su situación ocupacional actual?</div>', options: ['&nbsp;Trabaja a tiempo completo', '&nbsp;Trabaja a tiempo parcial', '&nbsp;Trabaja esporádicamente', '&nbsp;Está desempleado(a), pero busca trabajo', '&nbsp;Es estudiante', '&nbsp;No trabaja, ni busca trabajo', '&nbsp;Es ama de casa', '&nbsp;Está jubilado o pensionado', '&nbsp;Es rentista', '&nbsp;No sabe/No responde'], required: true, horizontal: false}],
  data: {trialid: 'SDG_13', procedure: 'SDG'}
};
SDG.push(question13);

var question14 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Qué tipo de trabajo hace usted?</div>', options: ['&nbsp;Profesionales', '&nbsp;Ejecutivos, administrativos, gerentes', '&nbsp;Comerciantes, vendedores y cajeros', '&nbsp;Trabajos de apoyo administrativo, incluyendo trabajos eclesiásticos administrativos', '&nbsp;Trabajo con productos de precisión o artesanías. Técnicos en reparación.', '&nbsp;Operador de máquinas, instalador, inspectores', '&nbsp;Ocupaciones de transporte y manejo de carga', '&nbsp;Obreros, limpiadores de equipos, ayudantes y peones', '&nbsp;Ocupaciones de servicio, excepto empleados de casa particular', '&nbsp;Agricultor/ gerente de agricultura', '&nbsp;Campesino', '&nbsp;Fuerzas Armadas', '&nbsp;Empleados casa particular', '&nbsp;Otro'], required: true, horizontal: false}],
  data: {trialid: 'SDG_14', procedure: 'SDG'}
};

var if_question14 = {
  timeline: [question14],
  data: {trialid: 'SDG_14_if', procedure: 'SDG'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'SDG_13'))["response"]["Q0"]).toString().trim();
    if(data == "Trabaja a tiempo completo" || data == "Trabaja a tiempo parcial" || data == "Trabaja esporádicamente" ){
      return true;
    } else {
      return false;
    }
  }
}
SDG.push(if_question14);

var question15 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Especifique el tipo de trabajo que realiza:</div>', required: true}],
  data: {trialid: 'SDG_15', procedure: 'SDG'}
};

var if_question15 = {
  timeline: [question15],
  data: {trialid: 'SDG_15_if', procedure: 'SDG'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data1 = ((jsPsych.data.get().values().find(x => x.trialid === 'SDG_13'))["response"]["Q0"]).toString().trim();
    if(data1 == "Trabaja a tiempo completo" || data1 == "Trabaja a tiempo parcial" || data1 == "Trabaja esporádicamente" ){
      let data2 = ((jsPsych.data.get().values().find(x => x.trialid === 'SDG_14'))["response"]["Q0"]).toString().trim();
      if(data2 == "Otro"){
        return true;
      }
    }
    return false;
  }
}
SDG.push(if_question15);

SDG.unshift(instruction_screen_experiment);
questions.push.apply(questions, SDG)

call_function("SDG");
