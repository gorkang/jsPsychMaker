/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Translations --------------------------------------------------------------
switch (language) {

  case "Spanish":

    Consent_000 = ['<p><left><b><big>Consentimiento informado</big></b><br /></p>'];

    Consent_001_choices = ['acepto participar', 'rechazo participar'];
    Consent_001_end = 'Gracias por tu tiempo. Puedes cerrar esta página.';

 
    break;


  case "English":

    Consent_000 = ['<p><left><b><big>Informed consent</big></b><br /></p>'];
    Consent_001_choices = ['I agree to participate', 'I reject to participate'];
    Consent_001_end = 'Thanks for your time. You can close this page.';
    break;

}



// Task -----------------------------------------------------------------------
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Consent') );
Consent = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: Consent_000,
    data: {trialid: 'Consent_000', procedure: 'Consent'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


// Reads consent from media/consent/consent-placeholder.js
var question01 = {
  type: 'html-button-response',
  stimulus: intro_CONSENT,
  choices: Consent_001_choices,
  prompt: "<BR><BR>",
  // If 'rechazo participar' is pressed, end experiment
  on_finish: function(data){
    if(jsPsych.data.get().values().find(x => x.trialid === 'Consent_001').button_pressed == 1){
      jsPsych.endExperiment(Consent_001_end);
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
