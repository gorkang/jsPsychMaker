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
Report = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Preguntas Demográficas</big></b><br />'+'Por favor, conteste a las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'Report'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'Report'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Desea Ud. Recibir un breve informe acerca de sus respuestas en esta investigación?</div>', options: ['&nbsp;Si, deseo recibir el informe', '&nbsp;No deseo recibir el informe'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'Report_001', procedure: 'Report'},
  procedure: 'Report'
};
Report.push(question001);

var question001_1 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indique nombre o alias que desee que aparezca personalizado en el informe.</div>', type: 'text', range: [3, 200], required: true}],
  data: {trialid: 'Report_001_1', procedure: 'Report'},
  procedure: 'Report'
};

var if_question001_1 = {
  timeline: [question001_1],
  data: {trialid: 'Report_001_1_if', procedure: 'Report'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'Report_001'))['response'])['Q0']).trim();
    if((data) ==  'Si, deseo recibir el informe'){
      return true;
    } else {
      return false;
    }
  },
  procedure: 'Report'
};
Report.push(if_question001_1);

var question001_2 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Indique el correo donde se enviará el informe.</br></div>', html: '</br><input name ="Q0" type="email" required="true" oninvalid="this.setCustomValidity(\'Necesitamos un email válido para poder contactar contigo en caso de que seas seleccionada\')" oninput="setCustomValidity(\'\')"></input> </br></br>',
  data: {trialid: 'Report_001_2', procedure: 'Report'},
  procedure: 'Report'
};

var if_question001_2 = {
  timeline: [question001_2],
  data: {trialid: 'Report_001_2_if', procedure: 'Report'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'Report_001'))['response'])['Q0']).trim();
    if((data) ==  'Si, deseo recibir el informe'){
      return true;
    } else {
      return false;
    }
  },
  procedure: 'Report'
};
Report.push(if_question001_2);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Está de acuerdo con que guardemos sus datos de contacto, nombre, edad y mail, para que podamos contactarlo en el futuro para otras investigaciones? Esto no afectará su participación en el presente estudio.</div>', options: ['&nbsp;Si, acepto ser contactado en el futuro', '&nbsp;No, no acepto que mis datos sean reutilizados'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'Report_002', procedure: 'Report'},
  procedure: 'Report'
};
Report.push(question002);

//Report.unshift(instruction_screen_experiment);
questions.push.apply(questions, Report);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Report'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Report'}).json();
      }
      saveData(data, online, 'Report');
    },
    procedure: 'Report'
});
