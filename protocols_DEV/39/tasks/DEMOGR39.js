/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR39') );
DEMOGR39 = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Datos demográficos</big></b><br />'+'Por favor, contesta a las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR39'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica tú ocupación</div>', 
  options: ['&nbsp;Profesional médico', '&nbsp;Estudiante de medicina', '&nbsp;Otro tipo de profesional', '&nbsp;Otro tipo de estudiante'], 
  required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR39_01', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question01);


// CHECK if Medicine professional -----------------------------------------------------------------

var question02 = {
  type: 'html-button-response',
  stimulus: `<div><h3 class="western" align="center">Fin del experimento</h3><br/><p>Para este experimento estamos trabajando únicamente con profesionales del área de la salud. 
  Si quieres saber algo más sobre los proyectos en los que trabajamos, puedes acceder a <a href = 'https://cscn.uai.cl/', target = '_blank'>nuestra página web</a>. Muchas gracias por tu interés.</p><BR><BR></div>`,
  choices: ['Continuar'],
  prompt: "<BR><BR>",
  on_load: discard_user(),
  on_finish: function(data){
    jsPsych.endExperiment('Gracias por tu tiempo. Puedes cerrar esta ventana.');
  },
  data: {trialid: 'DEMOGR39_02', procedure: 'DEMOGR39'}
};

var if_question02 = {
  timeline: [question02],
  data: {trialid: 'DEMOGR39_02_if', procedure: 'DEMOGR39'},
  conditional_function: function(){
    let data1 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR39_01'))['response'])['Q0']).trim();
    
    if((data1) ==  'Otro tipo de profesional' | (data1) ==  'Otro tipo de estudiante') {
    //if((data1) ==  'No' | (data1) ==  '&nbsp;No') {
      return true;
    } else {
      return false;
    }
  }
};
DEMOGR39.push(if_question02);

// --------------------------------------------------------------------------------------------------- 


var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica tu edad</div>', type: 'number', range: [18, 100], required: true, error_text: 'Tienes que ser mayor de edad para poder participar'}],
  data: {trialid: 'DEMOGR39_03', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question03);


var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica tu género</div>', options: ['&nbsp;Femenino', '&nbsp;Masculino', '&nbsp;No binario'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR39_04', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question04);


// https://www.mscbs.gob.es/profesionales/formacion/EspecialistasExtracomunitarios/Docs/2020EspecialidadesRecoEspanaV2.pdf
// used for store choices globally
var DEMOGR39_question06_choice;
var question06 = {
  type: 'survey-html-form',
  required_message: "Elige una de las opciones disponibles.",
  preamble: `<div class="justified">Selecciona tu especialidad médica.<BR>
  <span style="font-size: 80%; color: #A9A9A9;">Si no aparece nada, borra lo que has escrito y haz click en el campo de texto. Si tu especialidad no aparece, selecciona: Otra</span></div><BR>`,
  html: `<select id="choices_select"><option value="">Haz click para ver las opciones...</option>
  <option>Otra</option>
  <option>Alergología</option>
  <option>Anatomía Patológica</option>
  <option>Anestesiología y Reanimación</option>
  <option>Angiología y Cirugía Vascular</option>
  <option>Aparato Digestivo</option>
  <option>Cardiología</option>
  <option>Cirugía Cardiovascular</option>
  <option>Cirugía General y del Aparato Digestivo</option>
  <option>Cirugía Oral y Maxilofacial</option>
  <option>Cirugía Ortopédica y Traumatología</option>
  <option>Cirugía Pediátrica</option>
  <option>Cirugía Plástica, Estética y Reparadora</option>
  <option>Cirugía Torácica</option>
  <option>Dermatología Médico-Quirúrgica y Venereología</option>
  <option>Endocrinología y Nutrición</option>
  <option>Farmacología Clínica</option>
  <option>Geriatría</option>
  <option>Hematología y Hemoterapia</option>
  <option>Inmunología</option>
  <option>Medicina del Trabajo</option>
  <option>Medicina Familiar y Comunitaria</option>
  <option>Medicina Física y Rehabilitación</option>
  <option>Medicina Intensiva</option>
  <option>Medicina Interna</option>
  <option>Medicina Nuclear</option>
  <option>Medicina Preventiva y Salud Pública</option>
  <option>Nefrología</option>
  <option>Neumología</option>
  <option>Neurocirugía</option>
  <option>Neurofisiología Clínica</option>
  <option>Neurología</option>
  <option>Obstetricia y Ginecología</option>
  <option>Oftalmología</option>
  <option>Oncología Médica</option>
  <option>Oncología Radioterápica</option>
  <option>Otorrinolaringología</option>
  <option>Pediatría y sus Áreas Específicas</option>
  <option>Psiquiatría</option>
  <option>Radiodiagnóstico</option>
  <option>Reumatología</option>
  <option>Urología</option></select>&nbsp;`,
  data: {trialid: 'DEMOGR39_06', procedure: 'DEMOGR39'},
  on_load: function () {
    //const example = new Choices(document.getElementById("choices_select"))
    DEMOGR39_question06_choice = new Choices(document.getElementById("choices_select"), {
      position: "top"
    })
  }, 
  on_finish: function (data) {
    data.response = JSON.stringify({Q0: DEMOGR39_question06_choice.getValue(true)})
  }
};
DEMOGR39.push(question06);


var question07 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Cual es tu especialidad médica?: </div>', type: 'text', required: true}],
  data: {trialid: 'DEMOGR39_07', procedure: 'DEMOGR39'}
};


var if_question07 = {
  timeline: [question07],
  data: {trialid: 'DEMOGR39_07_if', procedure: 'DEMOGR39'},
  conditional_function: function(){
    let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR39_06'))['response'])['Q0']).trim();
    if((data2) ==  'Otra' | (data2) ==  '&nbsp;Otra'){
      return true;
    } else {
      return false;
    }
  }
};
DEMOGR39.push(if_question07);


var question08 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">País donde has estudiado/estudias:</div>', type: 'text', required: true, error_text: 'Tienes que indicar el país donde estudias o has estudiado.'}],
  data: {trialid: 'DEMOGR39_08', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question08);


var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica los años de ejercicio profesional o de estudio (desde el inicio de tus estudios de Medicina)</div>', type: 'number', range: [0, 60], required: true, error_text: 'Tienes que indicar el número de años. Si tan solo llevas unos meses, puedes redondear hasta el entero mas cercano'}],
  data: {trialid: 'DEMOGR39_09', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question09);



DEMOGR39.unshift(instruction_screen_experiment);
DEMOGR39.push.apply(questions, DEMOGR39);
call_function("DEMOGR39");
