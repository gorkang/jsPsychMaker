/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR40') );
DEMOGR40 = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'fullscreen',
    fullscreen_mode: true,
    message: [`<b><big>Información demográfica</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label: 'Iniciar el estudio a pantalla completa',
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR40'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica tu edad</div>', type: 'number', range: [18, 100], required: true, error_text: 'Tienes que ser mayor de edad para poder participar'}],
  data: {trialid: 'DEMOGR40_01', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica tu género</div>', options: ['&nbsp;Femenino', '&nbsp;Masculino', '&nbsp;No binario'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_02', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question02);

/*
var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Tienes algún tipo de daltonismo?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_03', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question03);
*/

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica <B>tú</B> ocupación</div>', options: ['&nbsp;Profesional', '&nbsp;Estudiante'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_04', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question04);


var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica <B>tú</B> carrera</div>', options: ['&nbsp;Medicina', '&nbsp;Enfermería', '&nbsp;Administración', '&nbsp;Bioquímica', '&nbsp;Carrera Técnica', '&nbsp;Farmacia', '&nbsp;Fonoaudiología', '&nbsp;Kinesiología', '&nbsp;Nutrición', '&nbsp;Odontología', '&nbsp;Psicología', '&nbsp;Otra'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_05', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question05);



//https://www.mscbs.gob.es/profesionales/formacion/EspecialistasExtracomunitarios/Docs/2020EspecialidadesRecoEspanaV2.pdf
var question06 = {
  type: 'survey-html-form',
  required_message: "Elige una de las opciones disponibles.",
  preamble: '<div class="justified">Elige del desplegable tu especialidad médica.</div><BR>',
  html: '<input name="Q0" id="formEspecialidadesMedicas" list="EspecialidadesMedicas" ' +

  'oninvalid="this.setCustomValidity(\'Elige uno de los elementos del desplegable. Si no aparece nada, borra lo que has escrito y haz click en el campo de texto. Si tu especialidad no aparece, indica: Otra\')" ' +
  'onchange="try{setCustomValidity(\'\')}catch(e){}" ' +
  'oninput="setCustomValidity(\' \')" ' +
  //'oninvalid="setCustomValidity(\'Minimum length is 6 characters\')" oninput="setCustomValidity(\'\')' +

  'pattern="^(Otra|Alergología|Anatomía Patológica|Anestesiología y Reanimación|Angiología y Cirugía Vascular|Aparato Digestivo|Cardiología|Cirugía Cardiovascular|Cirugía General y del Aparato Digestivo|Cirugía Oral y Maxilofacial|Cirugía Ortopédica y Traumatología|Cirugía Pediátrica|Cirugía Plástica, Estética y Reparadora|Cirugía Torácica|Dermatología Médico-Quirúrgica y Venereología|Endocrinología y Nutrición|Farmacología Clínica|Geriatría|Hematología y Hemoterapia|Inmunología|Medicina del Trabajo|Medicina Familiar y Comunitaria|Medicina Física y Rehabilitación|Medicina Intensiva|Medicina Interna|Medicina Nuclear|Medicina Preventiva y Salud Pública|Nefrología|Neumología|Neurocirugía|Neurofisiología Clínica|Neurología|Obstetricia y Ginecología|Oftalmología|Oncología Médica|Oncología Radioterápica|Otorrinolaringología|Pediatría y sus Áreas Específicas|Psiquiatría|Radiodiagnóstico|Reumatología|Urología)$" ' +
  'required><datalist id="EspecialidadesMedicas"><option value="Otra"> <option value="Alergología"> <option value="Anatomía Patológica"> <option value="Anestesiología y Reanimación"> <option value="Angiología y Cirugía Vascular"> <option value="Aparato Digestivo"> <option value="Cardiología"> <option value="Cirugía Cardiovascular"> <option value="Cirugía General y del Aparato Digestivo"> <option value="Cirugía Oral y Maxilofacial"> <option value="Cirugía Ortopédica y Traumatología"> <option value="Cirugía Pediátrica"> <option value="Cirugía Plástica, Estética y Reparadora"> <option value="Cirugía Torácica"> <option value="Dermatología Médico-Quirúrgica y Venereología"> <option value="Endocrinología y Nutrición"> <option value="Farmacología Clínica"> <option value="Geriatría"> <option value="Hematología y Hemoterapia"> <option value="Inmunología"> <option value="Medicina del Trabajo"> <option value="Medicina Familiar y Comunitaria"> <option value="Medicina Física y Rehabilitación"> <option value="Medicina Intensiva"> <option value="Medicina Interna"> <option value="Medicina Nuclear"> <option value="Medicina Preventiva y Salud Pública"> <option value="Nefrología"> <option value="Neumología"> <option value="Neurocirugía"> <option value="Neurofisiología Clínica"> <option value="Neurología"> <option value="Obstetricia y Ginecología"> <option value="Oftalmología"> <option value="Oncología Médica"> <option value="Oncología Radioterápica"> <option value="Otorrinolaringología"> <option value="Pediatría y sus Áreas Específicas"> <option value="Psiquiatría"> <option value="Radiodiagnóstico"> <option value="Reumatología"> <option value="Urología"> </datalist>&nbsp;',
  data: {trialid: 'DEMOGR40_06', procedure: 'DEMOGR40'}
};

var if_question06 = {
timeline: [question06],
data: {trialid: 'DEMOGR40_06_if', procedure: 'DEMOGR40'},
conditional_function: function(){
  let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR40_05'))['response'])['Q0']).trim();
 if((data) ==  'Medicina' | (data) ==  '&nbsp;Medicina'){
   return true;
   } else {
   return false;
  }
}
};

DEMOGR40.push(if_question06);

/*
var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica <B>tú</B> jerarquía en el ámbito médico</div>', options: ['&nbsp;Médico tratante', '&nbsp;Médico residente', '&nbsp;Asistente médico', '&nbsp;Enfermera/o', '&nbsp;Enfermera en prácticas', '&nbsp;Otra dentro del ámbito médico', '&nbsp;Otra fuera del ámbito médico'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_07', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question07);



var question08 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica los años de estudio (desde el inicio de tus estúdios superiores) o de ejercicio profesional</div>', type: 'number', range: [0, 60], required: true, error_text: 'Tienes que indicar el número de años. Si tan solo llevas unos meses, puedes redondear hasta el entero mas cercano'}],
  data: {trialid: 'DEMOGR40_08', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question08);
*/


DEMOGR40.unshift(instruction_screen_experiment);
DEMOGR40.push.apply(questions, DEMOGR40);
call_function("DEMOGR40");
