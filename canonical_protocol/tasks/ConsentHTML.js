/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// Store URL ---------------------------------------------------------------
URL_web = "";
if (typeof URL_web !== 'undefined')
	if (store_URL === true) URL_web = window.location.href;

// Translations --------------------------------------------------------------
switch (language) {

  case "Spanish":
    button_label_next = "Siguiente";

    Consent_000 = ['<p><left><b><big>Consentimiento informado</big></b><br /></p>'];

    Consent_001_choices = ['acepto participar', 'rechazo participar'];
    Consent_001_end = 'Gracias por tu tiempo. Puedes cerrar esta página.';
    Consent_001_response = 'Aceptado';

    Consent_002_pages = ["<p><center>Gracias por aceptar el consentimiento. <br><br> Presione el siguiente botón para poder empezar con el protocolo.<br /><br /></center></p>"];
 
    break;


  case "English":
    button_label_next = "Next";

    Consent_000 = ['<p><left><b><big>Informed consent</big></b><br /></p>'];
    Consent_001_choices = ['I agree to participate', 'I refuse to participate'];
    Consent_001_end = 'Thanks for your time. You can close this page.';
    Consent_001_response = 'Accepted';

    Consent_002_pages = ["<p><center>Thanks for accepting the consent. <br><br> Press the next button to start the protocol.<br /><br /></center></p>"];

    break;
}

// Task -----------------------------------------------------------------------
questions_consent = ( typeof questions_consent != 'undefined' && questions_consent instanceof Array ) ? questions_consent : [];
questions_consent.push( check_fullscreen('ConsentHTML') );
ConsentHTML = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: Consent_000,
  button_label_next: continue_button,
  data: {trialid: 'ConsentHTML_000', procedure: 'ConsentHTML'},
  show_clickable_nav: true,
};

function consent_user_answer(actual_user_answer) {
  user_answer = actual_user_answer;
  jsPsych.finishTrial();
};

// declare the block.
var question01 = {
  type: 'external-html',
  url: "media/html/consent-placeholder.html",
  on_load: function () {
    user_answer = null;
  },
  // If 'rechazo participar' is pressed, end experiment
  on_finish: function(data){
    if(user_answer === 0){
      data.response = Consent_001_choices[0];
      data.stimulus = 'html/consent-placeholder.html';
      consent_script_selector();
    } else {
      jsPsych.endExperiment(Consent_001_end);
    }
  },
  data: {
    trialid: 'ConsentHTML_001',
    procedure: 'ConsentHTML'
  }
};
ConsentHTML.push(question01);

var accepted_consent = {
  type: "instructions",
  pages: Consent_002_pages,
  show_clickable_nav: true,
  button_label_next: button_label_next,
  data: {trialid: 'Consent_002', procedure: 'Consent'},
  on_load: function () {
    document.getElementById("jspsych-content").style["margin-left"] = "auto";
    document.getElementById('jspsych-instructions-next').disabled = true;
  },
  on_finish: function () {
    document.getElementById("jspsych-content").style["margin-left"] = "0";
    document.getElementById("jsPsych-content")
  }
};
ConsentHTML.push(accepted_consent);

// Do not use call_function because it uses "questions" array
ConsentHTML.push({
  type: 'call-function',
  data: {trialid: "ConsentHTML" + '_003', procedure: "ConsentHTML"},
  func: function(){
    if (online) {
      var data = jsPsych.data.get().filter({procedure: "ConsentHTML"}).csv();
    } else {
      var data = jsPsych.data.get().filter({procedure: "ConsentHTML"}).json();
    }
    saveData(data, online, "ConsentHTML");
  }
});

ConsentHTML.unshift(instruction_screen_experiment);
ConsentHTML.push.apply(questions_consent, ConsentHTML);
