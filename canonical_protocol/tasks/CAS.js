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
      data: {procedure: 'CAS'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'CAS'
  }
);

CAS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>CAS</big></b><br />'+'¿En qué medida cada ítem reflejó su comportamiento en los últimos días? Por favor, indíquelo utilizando la escala del 0 al 3. ' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'CAS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'CAS'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me siento mal cuando pienso en COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_001', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Siento que se me acelera el corazón cuando leo sobre COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_002', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me siento ansioso con respecto a COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_003', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me siento incómodo cuando leo noticias sobre COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_004', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Me cuesta relajarme cuando pienso en COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_005', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Siento que puedo entrar en pánico cuando me pongo al día sobre COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_006', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tengo miedo de infectarme con COVID-19.</div>', options: ['&nbsp;0 No me sucede', '&nbsp;1 Casi nunca me sucede', '&nbsp;2 A veces me sucede', '&nbsp;3 Me sucede mucho'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'CAS_007', procedure: 'CAS'},
  procedure: 'CAS'
};
CAS.push(question007);

CAS.unshift(instruction_screen_experiment);
questions.push.apply(questions, CAS);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'CAS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'CAS'}).json();
      }
      saveData(data, online, 'CAS');
    },
    procedure: 'CAS'
});
