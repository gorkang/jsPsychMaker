/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// Store URL ---------------------------------------------------------------
URL_web = "";
if (typeof URL_web !== 'undefined')
	if (store_URL === true) URL_web = window.location.href;
  
// Translations --------------------------------------------------------------
switch (language) {

  case "Spanish":

    Consent_000 = ['<p><left><b><big>Consentimiento informado</big></b><br /></p>'];

    Consent_001_choices = ['acepto participar', 'rechazo participar'];
    Consent_001_end = 'Gracias por tu tiempo. Puedes cerrar esta página.';

    Consent_002_pages = ["<p><center>Gracias por aceptar el consentimiento. <br><br> Presione el siguiente botón para poder empezar con el protocolo.<br /><br /></center></p>"];
 
    break;


  case "English":

    Consent_000 = ['<p><left><b><big>Informed consent</big></b><br /></p>'];
    Consent_001_choices = ['I agree to participate', 'I refuse to participate'];
    Consent_001_end = 'Thanks for your time. You can close this page.';

    Consent_002_pages = ["<p><center>Thanks for accepting the consent. <br><br> Press the next button to start the protocol.<br /><br /></center></p>"];

    break;
}

// Task -----------------------------------------------------------------------
questions_consent = ( typeof questions_consent != 'undefined' && questions_consent instanceof Array ) ? questions_consent : [];
questions_consent.push( check_fullscreen('Consent') );
Consent = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: Consent_000,
  button_label_next: continue_button,
  data: {trialid: 'Consent_000', procedure: 'Consent'},
  show_clickable_nav: true
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
    } else {
			data.response = Consent_001_choices[0];
      consent_script_selector();
    }
  },
  data: {
    trialid: 'Consent_001',
    procedure: 'Consent'
  }
};
Consent.push(question01);

var accepted_consent = {
  type: "instructions",
  pages: Consent_002_pages,
  show_clickable_nav: true,
  data: {trialid: 'Consent_002', procedure: 'Consent'},
  on_load: function () {
    document.getElementById('jspsych-instructions-next').disabled = true;
  }
};
Consent.push(accepted_consent);

// Do not use call_function because it uses "questions" array
Consent.push({
  type: 'call-function',
  data: {trialid: "Consent" + '_003', procedure: "Consent"},
  func: function(){
    if (online) {
      var data = jsPsych.data.get().filter({procedure: "Consent"}).csv();
    } else {
      var data = jsPsych.data.get().filter({procedure: "Consent"}).json();
    }
    saveData(data, online, "Consent");
  }
});

Consent.unshift(instruction_screen_experiment);
Consent.push.apply(questions_consent, Consent);
