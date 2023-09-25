/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Spontaneous Counterfactual Generation Test

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SCGT') );
SCGT = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Test de generación contrafactual espontánea</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'SCGT'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Por favor intente recordar un evento negativo de su vida personal y cuénteme sobre él</div>', type: 'textarea', rows: 10, columns: 100, range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'SCGT_01', procedure: 'SCGT'}
};
SCGT.push(question01);

var question02 = {
  type: 'html-button-response',
  stimulus: '<p>Ahora por favor trate de analizarlo en detalle y piense en cómo ocurrió este evento. Le voy a dar unos minutos para que lo haga:</p> <br> <span style="font-size: 250%; display: table; margin: 0 auto" id="clock">2:00</span> <br><br>',
  choices: ['Continue'],
  on_load: function(){
    var wait_time = 2 * 60 * 1000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = true;
    var interval = setInterval(function(){
      var time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
      }
    }, 250)
  },
  data: {trialid: 'SCGT_02', procedure: 'SCGT'}
};
SCGT.push(question02)

var question03 = {
  type: 'survey-html-form',
  preamble: '<h2 class="title">Grabación de audio</h2>',
  html: `
    <div class="audio-recording-container">
      <div class="justified">Ahora dígame si al momento de recordar y analizar este evento tuvo pensamientos sobre si las cosas pudieron ser diferentes</div>
      <br>
      <div class="justified"><em>Nota: La tecla continuar se activará luego de que grabe, para esto, presione grabar y al finalizar su grabación presione detener.</em></div>
      <br>

      <div class="recording-control-buttons-container hide">

        <div class="jspsych-btn start-recording-button" onclick="startAudioRecording()" style="cursor: pointer; display: inline-block; margin:0px 8px" id="jspsych-audio-button-response-button-0">Grabar</div>
        <div class="jspsych-btn stop-recording-button" onclick="stopAudioRecording()" style="cursor: pointer; display: inline-block; margin:0px 8px" id="jspsych-audio-button-response-button-0">Detener</div>

        <div>
          <p class="elapsed-time"></p>
        </div>

      </div>
    </div>

    <audio hidden controls class="audio-element">
    </audio>`,
  data: {trialid: 'SCGT_03', procedure: 'SCGT'},
  on_load: function() {
    continue_button = document.getElementById("jspsych-survey-html-form-next");
    continue_button.disabled = true;
  }
};
SCGT.push(question03);

SCGT.unshift(instruction_screen_experiment);
SCGT.push.apply(questions, SCGT);
call_function("SCGT");
