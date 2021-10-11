/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Consent') );

Consent = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Consentimiento informado</big></b><br />'+
    '' +'</p>'],
    data: {trialid: 'Instructions_001', procedure: 'Consent'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};



// declare the block.
var trial = {
  type:'external-html',
  url: "media/html/consent-placeholder.html",
  cont_btn: "start",
  data: {
    trialid: 'Consent_001',
    procedure: 'Consent',
     stimulus: 'html/consent-nieves.html',
     response: document.getElementById("start").id
   },
  procedure: 'Consent'
};
Consent.push(trial);

Consent.unshift(instruction_screen_experiment);
Consent.push.apply(questions, Consent);


questions.push({
    type: 'call-function',
    data: {trialid: 'Consent_000', procedure: 'Consent'},
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
