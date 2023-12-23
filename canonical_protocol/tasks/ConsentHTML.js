/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// Translations --------------------------------------------------------------
switch (language) {

  case "Spanish":

    Consent_000 = ['<p><left><b><big>Consentimiento informado</big></b><br /></p>'];

    Consent_001_choices = ['acepto participar', 'rechazo participar'];
    Consent_001_end = 'Gracias por tu tiempo. Puedes cerrar esta página.';
    Consent_001_response = 'Aceptado';

    Consent_002_pages = ["<p><center>Gracias por aceptar el consentimiento. <br><br> Presione el siguiente botón para poder empezar con el protocolo.<br /><br /></center></p>"];
 
    break;


  case "English":

    Consent_000 = ['<p><left><b><big>Informed consent</big></b><br /></p>'];
    Consent_001_choices = ['I agree to participate', 'I refuse to participate'];
    Consent_001_end = 'Thanks for your time. You can close this page.';
    Consent_001_response = 'Accepted';

    Consent_002_pages = ["<p><center>Thanks for accepting the consent. <br><br> Press the next button to start the protocol.<br /><br /></center></p>"];

    break;
}

// Task -----------------------------------------------------------------------
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ConsentHTML') );
ConsentHTML = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: Consent_000,
    button_label_next: continue_button,
    data: {trialid: 'ConsentHTML_000', procedure: 'ConsentHTML'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// declare the block.
var question01 = {
  type:'external-html',
  url: "media/html/consent-placeholder.html",
  cont_btn: "start",
  data: {
    trialid: 'ConsentHTML_001',
    procedure: 'ConsentHTML',
    stimulus: 'html/consent-placeholder.html',
    response: Consent_001_choices[0]
  }
};
ConsentHTML.push(question01);

var accepted_consent = {
  type: "instructions",
  pages: Consent_002_pages,
  show_clickable_nav: true,
  data: {trialid: 'Consent_002', procedure: 'Consent'},
  on_load: function () {
    document.getElementById('jspsych-instructions-next').disabled = true;
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
