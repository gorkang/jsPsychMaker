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

Consent = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Consentimiento informado</big></b><br />'+
    '' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'Consent'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};



// declare the block.
var trial = {
  type:'external-html',
  url: "html/consent-placeholder.html",
  cont_btn: "start",
  data: {trialid: 'Consent_001', procedure: 'Consent', response: document.getElementById("start").id},
  procedure: 'Consent'
};
Consent.push(trial);

Consent.unshift(instruction_screen_experiment);
Consent.push.apply(questions, Consent);


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
