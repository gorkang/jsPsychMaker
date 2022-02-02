/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Consent') );
Consent = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Consentimiento informado</big></b><br /></p>'],
    button_label_next: 'Siguiente',
    data: {trialid: 'Instructions_001', procedure: 'Consent'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


// Reads consent from media/consent/consent-placeholder.js
var question01 = {
  type: 'html-button-response',
  stimulus: intro_CONSENT,
  choices: ['acepto participar', 'rechazo participar'],
  prompt: "<BR><BR>",
  // If 'rechazo participar' is pressed, end experiment
  on_finish: function(data){
    if(jsPsych.data.get().values().find(x => x.trialid === 'Consent_001').button_pressed == 1){
      jsPsych.endExperiment('Gracias por tu tiempo. Puedes cerrar esta pestaña.');
    }
  },
    data: {
    trialid: 'Consent_001',
    procedure: 'Consent'
   }


};
Consent.push(question01);


Consent.unshift(instruction_screen_experiment);
Consent.push.apply(questions, Consent);
call_function("Consent");

/*
call_function("Consent");
*/
