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
      data: {procedure: 'DEMOGR'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'DEMOGR'
  }
);

DEMOGR = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Preguntas Demográficas</big></b><br />'+'Por favor, conteste a las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'DEMOGR'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'DEMOGR'
};

var question001 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique su nombre completo (opcional)</div>', type: 'text', range: [10, 200], required: false}],
  data: {trialid: 'DEMOGR_001', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question001);

var question002 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Indica tu correo electrónico personal (opcional)</br></div>', html: '</br><input name ="Q0" type="email" oninvalid="this.setCustomValidity(\'Necesitamos un email válido para poder contactar contigo en caso de que seas seleccionada\')" oninput="setCustomValidity(\'\')"></input> </br></br>',
  data: {trialid: 'DEMOGR_002', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question002);

var question003 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique su fecha de nacimiento</div>', type: 'date', required: true}],
  data: {trialid: 'DEMOGR_003', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica tu género</div>', options: ['&nbsp;Femenino', '&nbsp;Masculino', '&nbsp;No binario'], required: true,  random_options: true, horizontal: false}],
  data: {trialid: 'DEMOGR_004', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question004);

var question005 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique su Nacionalidad (país de nacimiento)</div>', type: 'text', range: [2, 200], required: true}],
  data: {trialid: 'DEMOGR_005', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question005);

var question006 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique su país de residencia actual</div>', type: 'text', range: [2, 200], required: true}],
  data: {trialid: 'DEMOGR_006', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question006)

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?</div>', options: ['&nbsp;Menos de 120 mil', '&nbsp;120 mil – 207 mil', '&nbsp;208 mil – 361 mil', '&nbsp;362 mil – 630 mil', '&nbsp;631 mil – 1.099.000', '&nbsp;1.100.000 – 1.916.000', '&nbsp;Más de 1.916.000'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR_007', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question007);

var question008 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Incluyéndose usted, ¿cuántas personas viven en su hogar en la actualidad? No considere el servicio doméstico, aunque sea puertas adentro.</div>', type: 'number', required: true}],
  data: {trialid: 'DEMOGR_008', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question008);

// version con opciones
var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Nivel educacional en años de estudio (Considere hasta el año realizado. Por ejemplo, si terminó 4to medio y no realizó nada más, poner 12 años. Si realizo dos años de formación técnica después de terminar 4to medio, poner 14 años. Si llegó solo hasta 3er medio, poner 10 ya que terminó 2do medio. etc.)</div>', options: ['&nbsp;Menos de 5 años', '&nbsp;Entre 5 y 7 años', '&nbsp;Entre 7 y 9 años', '&nbsp;Entre 9 y 11 años', '&nbsp;Más de 11 años'], required: true,  random_options: true, horizontal: false}],
  data: {trialid: 'DEMOGR_009', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};

// version actual, sin opciones
var question009 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Nivel educacional en años de estudio (Considere hasta el año realizado. Por ejemplo, si terminó 4to medio y no realizó nada más, poner 12 años. Si realizo dos años de formación técnica después de terminar 4to medio, poner 14 años. Si llegó solo hasta 3er medio, poner 10 ya que terminó 2do medio. etc.)</div>', type: 'number', required: true}],
  data: {trialid: 'DEMOGR_009', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Está actualmente en confinamiento (aislamiento social)?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR_010', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question010);

var question010_1 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique el tiempo (en semanas) que lleva confinado:</div>', type: 'number', required: true}],
  data: {trialid: 'DEMOGR_010_1', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};

var if_question010_1 = {
  timeline: [question010_1],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR_010'))['response'])['Q0']).trim();
    if((data) ==  'Si'){
      return true;
    } else {
      return false;
    }
  },
  procedure: 'DEMOGR'
};
DEMOGR.push(if_question010_1);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Estuvo confinado anteriormente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR_011', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question011);

var question011_1 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique el tiempo (en semanas) que lleva confinado:</div>', type: 'number', required: true}],
  data: {trialid: 'DEMOGR_011_1', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};

var if_question011_1 = {
  timeline: [question011_1],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR_011'))['response'])['Q0']).trim();
    if((data) ==  'Si'){
      return true;
    } else {
      return false;
    }
  },
  procedure: 'DEMOGR'
};
DEMOGR.push(if_question011_1);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Tuvo que trabajar presencialmente durante el estado de confinamiento de su ciudad?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR_012', procedure: 'DEMOGR'},
  procedure: 'DEMOGR'
};
DEMOGR.push(question012);

DEMOGR.unshift(instruction_screen_experiment);
questions.push.apply(questions, DEMOGR);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR'}).json();
      }
      saveData(data, online, 'DEMOGR');
    },
    procedure: 'DEMOGR'
});
