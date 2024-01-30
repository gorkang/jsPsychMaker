/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

// Translations --------------------------------------------------------------

switch (language) {

  case "Spanish":

    button_label_next = "Siguiente";

    ConsentAudio_000_1 = ['<p><left><b><big>Consentimiento informado</big></b><br /></p>'];
    ConsentAudio_001_choices = ['acepto participar', 'rechazo participar'];
    ConsentAudio_001_end = 'Gracias por tu tiempo. Puedes cerrar esta página.';

    ConsentAudio_000_2 = [`<b><big>Test de sonido</big></b><BR>
    Este protocolo incluye una tarea que requiere auriculares/altavoces.<BR><BR>
    Por favor, ponte los auriculares ahora o enciende el altavoz.<BR><BR>
    Se reproducirá un sonido en la siguiente pantalla. Ajusta el volumen para que puedas escucharlo claramente`]
    ConsentAudio_002_prompt = "<div class='crux' id='cruz'><BR>¿Puedes oír el sonido?<BR></div>"
    ConsentAudio_002_choices = ["¡Sí!", "No, pero debería funcionar ahora. Repita el sonido para comprobarlo", "No, y no hay nada que pueda hacer para solucionarlo"]
    ConsentAudio_002_endExperiment = 'Sin sonido no podrás completar este protocolo. Gracias por tu interés.'
    ConsentAudio_000_3 = [`<p><center>Prueba de sonido finalizada.<BR><BR>
    Si <B>NO escuchaste el sonido</B>, por favor, sal del protocolo, ya que no podrás completar algunas de las tareas.<BR><BR>
    De lo contrario, haz clic en [Siguiente>] para continuar.<br /><br />`]
    break;


  case "English":

    button_label_next = "Next";

    ConsentAudio_000_1 = ['<p><left><b><big>Informed consent</big></b><br /></p>'];
    ConsentAudio_001_choices = ['I agree to participate', 'I reject to participate'];
    ConsentAudio_001_end = 'Thanks for your time. You can close this page.';

    ConsentAudio_000_2 = [`<b><big>Sound Check</big></b><BR>
    This protocol includes a task that requires working headphones/speaker.<BR><BR>
    Please, put on the headphones now or turn on the speaker.<BR><BR>
    A sound will play in the next screen. Adjust the volume so you can hear it clearly`]
    ConsentAudio_002_prompt = "<div class='crux' id='cruz'><BR>Can you hear the sound?<BR></div>"
    ConsentAudio_002_choices = ["Yes!", "No, but should work now. Repeat the sound to check", "No, and there is nothing I can do to fix it"]
    ConsentAudio_002_endExperiment = 'Without sound you will not be able to complete this protocol. Thanks for your interest.'
    ConsentAudio_000_3 = [`<p><center>Sound check finished.<BR><BR>
    If you <B>Did NOT hear the sound</B>, please exit the protocol, as you will not be able to complete some of the tasks.<BR><BR>
    Otherwise, click [Next>] to continue.<br /><br />`]
    break;

}



// Task -----------------------------------------------------------------------

questions_consent = ( typeof questions_consent != 'undefined' && questions_consent instanceof Array ) ? questions_consent : [];
questions_consent.push( check_fullscreen('ConsentAudio') );
ConsentAudio = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ConsentAudio_000_1,
    button_label_next: button_label_next,
    data: {trialid: 'ConsentAudio_000_1', procedure: 'ConsentAudio'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


// Reads consent from media/consent/consent-placeholder.js
var question01 = {
  type: 'html-button-response',
  stimulus: intro_CONSENT,
  choices: ConsentAudio_001_choices,
  prompt: "<BR><BR>",
  // If 'I reject to participate' is pressed, end experiment
  on_finish: function(data){
    if(jsPsych.data.get().values().find(x => x.trialid === 'ConsentAudio_001').button_pressed == 1){
      jsPsych.endExperiment(ConsentAudio_001_end);
    }
  },
    data: {
    trialid: 'ConsentAudio_001',
    procedure: 'ConsentAudio'
   }


};
ConsentAudio.push(question01);




// Audio check ---------------------------------------------


var instruction_SoundCheck = {
  type: 'instructions',
  pages: ConsentAudio_000_2,
  button_label_next: button_label_next,
  data: {trialid: 'ConsentAudio_000_2', procedure: 'ConsentAudio'},
  show_clickable_nav: true,
  on_trial_start: function(){
      bloquear_enter = 0;
  }
};
ConsentAudio.push(instruction_SoundCheck);

var sound_question = {
  type: 'audio-button-response',
  stimulus: 'media/audios/ConsentAudio/ConsentAudio.mp3',
  prompt: ConsentAudio_002_prompt,
  choices: ConsentAudio_002_choices,
  trial_ends_after_audio: false,
  on_finish: function(data){
      if(jsPsych.data.get().values()[jsPsych.data.get().values().length -1]["response"] == 2){
          jsPsych.endExperiment(ConsentAudio_002_endExperiment);
      }
    },
  data: {trialid: 'ConsentAudio_002', procedure: 'ConsentAudio'}
  };


var loop_node = {
  timeline: [sound_question],
  loop_function: function(data){

      if(jsPsych.data.get().values()[jsPsych.data.get().values().length -1]["response"] == 1){
          return true;
      } else {
          return false;
      }
  },
  data: {trialid: 'ConsentAudio_003', procedure: 'ConsentAudio'}

}

ConsentAudio.push(loop_node);


var instructions_END = {
  type: "instructions",
  pages: ConsentAudio_000_3,  
  show_clickable_nav: true,
  button_label_next: button_label_next,
  data: {trialid: 'ConsentAudio_000_3', procedure: 'ConsentAudio'},
  on_load: function () {
      document.getElementById("jspsych-content").style.removeProperty("margin-left");
      document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};

ConsentAudio.push(instructions_END);


// Do not use call_function because it uses "questions" array
ConsentAudio.push({
  type: 'call-function',
  data: {trialid: "ConsentAudio" + '_003', procedure: "ConsentAudio"},
  func: function(){
    if (online) {
      var data = jsPsych.data.get().filter({procedure: "ConsentAudio"}).csv();
    } else {
      var data = jsPsych.data.get().filter({procedure: "ConsentAudio"}).json();
    }
    saveData(data, online, "ConsentAudio");
  }
});



ConsentAudio.unshift(instruction_screen_experiment);
ConsentAudio.push.apply(questions_consent, ConsentAudio);
//call_function("ConsentAudio");
