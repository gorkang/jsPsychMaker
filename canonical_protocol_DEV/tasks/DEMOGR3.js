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

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

questions.push(
  {
    timeline: [{
      type: 'fullscreen',
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'DEMOGR3'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'DEMOGR3'
  }
);

DEMOGR3 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Preguntas demográficas</big></b><br />'+
    'Por favor, contesta a las siguientes preguntas' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR3'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'DEMOGR3'
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica tu edad</div>', type: 'number', range: [1, 120], required: true}],
  data: {trialid: 'DEMOGR3_01', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica tu sexo</div>', options: ['&nbsp;Mujer', '&nbsp;Hombre', '&nbsp;Otro'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_02', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted nació en Chile?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_03', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted vive hace más de 10 años en Chile?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_04', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál es el nivel educacional alcanzado (último año aprobado) por usted?</div>', options: ['&nbsp;Educación básica incompleta o inferior.', '&nbsp;Básica completa.', '&nbsp;Media incompleta.', '&nbsp;Media completa / Técnica incompleta.', '&nbsp;Universitaria incompleta / Técnica completa', '&nbsp;Universitaria completa.', '&nbsp;Postgrado (Master, Doctor o equivalente).'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_05', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Durante los últimos 12 meses ¿Ha sido diagnosticado/a y/o tratado/a por algún problema Psicológico o Psiquiátrico?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_06', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Usted tiene actualmente alguno de los siguientes diagnósticos: Esquizofrenia, Depresión Mayor, Epilepsia grave, Traumatismo encefalocraneano?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_07', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Tiene algún problema visual o auditivo que le impida responder esta encuesta sin ayuda?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR3_08', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question08);


var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Introduce tu número de celular (912345678)<p style="font-size: 13px;">(sólo lo usaremos para contactar contigo en caso de que ganes el sorteo.)</p></div>', type: 'number', range: [9e+08, 9999999999], required: true, error_text: 'Tienes que introducir un celular valido (ej. 9 1234 5678 sin los espacios)'}],
  data: {trialid: 'DEMOGR3_09', procedure: 'DEMOGR3'},
  procedure: 'DEMOGR3'
};
DEMOGR3.push(question09);


DEMOGR3.unshift(instruction_screen_experiment);
questions.push.apply(questions, DEMOGR3);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR3'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR3'}).json();
      }
      saveData(data, online, 'DEMOGR3');
    },
    procedure: 'DEMOGR3'
});
