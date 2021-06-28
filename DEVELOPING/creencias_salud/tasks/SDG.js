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
      data: {procedure: 'SDG'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'SDG'
  }
);

SDG = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Preguntas de autorregulación y creencias</big></b><br />'+'Por favor, conteste a las siguientes afirmaciones.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'SDG'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'SDG'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Mis creencias me han ayudado a sobrellevar el estrés ocasionado por la pandemia.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SDG_001', procedure: 'SDG'},
  procedure: 'SDG'
};
SDG.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Mis creencias me han ayudado a sobrellevar momentos de ansiedad durante la pandemia.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SDG_002', procedure: 'SDG'},
  procedure: 'SDG'
};
SDG.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Mis creencias me han ayudado a sobrellevar momentos de tristeza y depresiòn durante la pandemia.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SDG_003', procedure: 'SDG'},
  procedure: 'SDG'
};
SDG.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Mis creencias se hicieron más fuertes durante la pandemia.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SDG_004', procedure: 'SDG'},
  procedure: 'SDG'
};
SDG.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En general, me considero una persona sin creencias.</div>', options: ['&nbsp;Completamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;En alguna medida en desacuerdo', '&nbsp;No acuerdo ni desacuerdo', '&nbsp;En alguna medida acuerdo', '&nbsp;De acuerdo', '&nbsp;Completamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SDG_005', procedure: 'SDG'},
  procedure: 'SDG'
};
SDG.push(question005);

SDG.unshift(instruction_screen_experiment);
questions.push.apply(questions, SDG);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'SDG'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'SDG'}).json();
      }
      saveData(data, online, 'SDG');
    },
    procedure: 'SDG'
});
