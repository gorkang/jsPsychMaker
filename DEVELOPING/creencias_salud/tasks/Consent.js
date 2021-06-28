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
      data: {procedure: 'Consent'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'Consent'
  }
);

Consent = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Consentimiento informado</big></b><br />'+
    'Lee el siguiente consentimiento informado antes de iniciar el experimento.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'Consent'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'Consent'
};

// declare the block.
var trial = {
  type:'external-html',
  url: "html/consent.html",
  cont_btn: "start",
  data: {trialid: 'Consent_01' ,procedure: 'Consent'},
  procedure: 'Consent'
};
Consent.push(trial);

Consent.unshift(instruction_screen_experiment);
questions.push.apply(questions, Consent);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Consent'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Consent'}).json();
      }
      saveData(data, online, 'Consent');
    },
    procedure: 'Consent'
});
