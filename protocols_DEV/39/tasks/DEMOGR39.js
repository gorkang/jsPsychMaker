/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR39') );
DEMOGR39 = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Datos demográficos</big></b><br />'+'Por favor, contesta a las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'DEBRIEF39'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

/*
var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Eres estudiante de Medicina o profesional Médico?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR39_01', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question01);
*/

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica <B>tú</B> ocupación</div>', 
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

/*
var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica <B>tú</B> ocupación</div>', options: ['&nbsp;Profesional médico', '&nbsp;Estudiante de medicina'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR39_05', procedure: 'DEMOGR39'}
};
DEMOGR39.push(question05);
*/

// https://www.mscbs.gob.es/profesionales/formacion/EspecialistasExtracomunitarios/Docs/2020EspecialidadesRecoEspanaV2.pdf
var question06 = {
  type: 'survey-html-form',
  required_message: "Elige una de las opciones disponibles.",
  preamble: `<div class="justified">Selecciona tu especialidad médica.<BR>
  <span style="font-size: 80%; color: #A9A9A9;">Si no aparece nada, borra lo que has escrito y haz click en el campo de texto. Si tu especialidad no aparece, selecciona: Otra</span></div><BR>`,
  html: `<input name="Q0" id="formEspecialidadesMedicas" list="EspecialidadesMedicas" 
  onmouseover="focus();" 
  placeholder="Haz click para ver las opciones..."

  oninvalid="this.setCustomValidity(\'Elige uno de los elementos del desplegable. Si no aparece nada, borra lo que has escrito y haz click en el campo de texto. Si tu especialidad no aparece, indica: Otra\')"
  onchange="try{setCustomValidity(\'\')}catch(e){}"
  oninput="setCustomValidity(\' \')" 

  pattern="^(Otra|Alergología|Anatomía Patológica|Anestesiología y Reanimación|Angiología y Cirugía Vascular|Aparato Digestivo|Cardiología|Cirugía Cardiovascular|Cirugía General y del Aparato Digestivo|Cirugía Oral y Maxilofacial|Cirugía Ortopédica y Traumatología|Cirugía Pediátrica|Cirugía Plástica, Estética y Reparadora|Cirugía Torácica|Dermatología Médico-Quirúrgica y Venereología|Endocrinología y Nutrición|Farmacología Clínica|Geriatría|Hematología y Hemoterapia|Inmunología|Medicina del Trabajo|Medicina Familiar y Comunitaria|Medicina Física y Rehabilitación|Medicina Intensiva|Medicina Interna|Medicina Nuclear|Medicina Preventiva y Salud Pública|Nefrología|Neumología|Neurocirugía|Neurofisiología Clínica|Neurología|Obstetricia y Ginecología|Oftalmología|Oncología Médica|Oncología Radioterápica|Otorrinolaringología|Pediatría y sus Áreas Específicas|Psiquiatría|Radiodiagnóstico|Reumatología|Urología)$" ' +
  required><datalist id="EspecialidadesMedicas"><option value="Otra"> <option value="Alergología"> <option value="Anatomía Patológica"> <option value="Anestesiología y Reanimación"> <option value="Angiología y Cirugía Vascular"> <option value="Aparato Digestivo"> <option value="Cardiología"> <option value="Cirugía Cardiovascular"> <option value="Cirugía General y del Aparato Digestivo"> <option value="Cirugía Oral y Maxilofacial"> <option value="Cirugía Ortopédica y Traumatología"> <option value="Cirugía Pediátrica"> <option value="Cirugía Plástica, Estética y Reparadora"> <option value="Cirugía Torácica"> <option value="Dermatología Médico-Quirúrgica y Venereología"> <option value="Endocrinología y Nutrición"> <option value="Farmacología Clínica"> <option value="Geriatría"> <option value="Hematología y Hemoterapia"> <option value="Inmunología"> <option value="Medicina del Trabajo"> <option value="Medicina Familiar y Comunitaria"> <option value="Medicina Física y Rehabilitación"> <option value="Medicina Intensiva"> <option value="Medicina Interna"> <option value="Medicina Nuclear"> <option value="Medicina Preventiva y Salud Pública"> <option value="Nefrología"> <option value="Neumología"> <option value="Neurocirugía"> <option value="Neurofisiología Clínica"> <option value="Neurología"> <option value="Obstetricia y Ginecología"> <option value="Oftalmología"> <option value="Oncología Médica"> <option value="Oncología Radioterápica"> <option value="Otorrinolaringología"> <option value="Pediatría y sus Áreas Específicas"> <option value="Psiquiatría"> <option value="Radiodiagnóstico"> <option value="Reumatología"> <option value="Urología"> </datalist>&nbsp;`,
  data: {trialid: 'DEMOGR39_06', procedure: 'DEMOGR39'}
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
