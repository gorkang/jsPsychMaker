/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

max_height = 609 * 0.8559;
max_width = 555 * 0.8559;

var repetition_count = 0;

//base = 555x609 -> 540x960
//max = 128;

height = max_height*0.2159;
width = max_width*0.2159;

// 0.8559 max 119x131
// 0.2159 min
// + 0.50

actual_money = 0;
actual_rounds = 0;
total_money = 0;

// numbers for probabilities
numbers = [1, 5, 10, 14, 18, 23, 27, 31, 36, 40, 44, 49, 53, 57, 62, 66, 70, 75, 79, 83, 88, 92, 96, 101, 105, 109, 114, 118, 122, 128];
if (debug_mode == 'false') numbers = jsPsych.randomization.repeat(numbers, 1);

balloon_img = 'media/img/BART_redBalloon.png';
audio_inflate = 'media/audio/BART_inflate.mp3';
audio_explode = 'media/audio/BART_explode.mp3';
audio_collect = 'media/audio/BART_collect.mp3';
audio_silence = 'media/audio/silence.mp3';


actual_status = "safe";

// Retorna un entero aleatorio entre min (incluido) y max (incluido)
// ¡Usando Math.round() dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function inflate(actual_number) {
  balloon = document.getElementById("BART_redBalloon");
  actual_rounds = parseInt(balloon.getAttribute("status")) + 1;
  balloon.setAttribute("status", actual_rounds);
  balloon.width = width + max_width * (0.005 * actual_rounds);
  balloon.height = height + max_height * (0.005 * actual_rounds);
  actual_money = actual_money + 50;
  document.getElementById("prompt").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;Actualmente acumulado: ' + actual_money + ' <br> &nbsp;&nbsp;&nbsp;&nbsp;Número de infladas: ' + actual_rounds + ' <br> &nbsp;&nbsp;&nbsp;&nbsp;Total Acumulado: ' + total_money;

  //actual_number = numbers[Math.floor(Math.random()*numbers.length)];

  console.log(actual_number);

  explode = (actual_rounds >= actual_number);

  actual_audio = explode ? audio_explode : audio_inflate;

  // audio:
  var context = jsPsych.pluginAPI.audioContext();
  var audio;

  jsPsych.pluginAPI.getAudioBuffer(actual_audio)
    .then(function (buffer) {
      if (context !== null) {
        audio = context.createBufferSource();
        audio.buffer = buffer;
        audio.connect(context.destination);
      } else {
        audio = buffer;
        audio.pause();
        audio.currentTime = 0;
      }
      setupTrial();
    })
    .catch(function (err) {
      console.error(err);
    });

  function setupTrial() {
    if (context !== null) {
      startTime = context.currentTime;
      audio.start(startTime);
    } else {
      audio.play();
    }
  }

  document.getElementById("inflate_button").setAttribute("disabled", true);
  document.getElementById("collect_button").setAttribute("disabled", true);
  if (explode) {
    actual_money = 0;
    balloon.width = 0;
    balloon.height = 0;
    actual_status = "explode";
    setTimeout(() => {  jsPsych.finishTrial(); }, 500);
  } else {
    setTimeout(() => {  document.getElementById("inflate_button").removeAttribute("disabled"); document.getElementById("collect_button").removeAttribute("disabled"); }, 500);
  }
}

function collect() {
  // audio:
  var context = jsPsych.pluginAPI.audioContext();
  var audio;

  jsPsych.pluginAPI.getAudioBuffer(audio_collect)
    .then(function (buffer) {
      if (context !== null) {
        audio = context.createBufferSource();
        audio.buffer = buffer;
        audio.connect(context.destination);
      } else {
        audio = buffer;
        audio.currentTime = 0;
      }
      setupTrial();
    })
    .catch(function (err) {
      console.error(err);
    });

  function setupTrial() {
    if (context !== null) {
      startTime = context.currentTime;
      audio.start(startTime);
    } else {
      audio.play();
    }
  }

  document.getElementById("inflate_button").setAttribute("disabled", true);
  document.getElementById("collect_button").setAttribute("disabled", true);
  balloon = document.getElementById("BART_redBalloon");
  balloon.width = 0;
  balloon.height = 0;
  setTimeout(() => {  jsPsych.finishTrial(); }, 500);
}

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('BART') );
BART = [];

for (var i = 0; i < 30; i++) {
  explode_rounds = numbers.pop();
  var question = {
    type: 'audio-button-response',
    stimulus: audio_silence,
    choices: balloon_img,
    block_size: [max_height, max_width],
    size: [width, height],
    button_html: ['<button class="jspsych-btn" id="inflate_button" onclick="inflate(' + explode_rounds + ')">INFLAR GLOBO</button>', '<button onclick="collect()" id="collect_button" class="jspsych-btn">$ RECAUDAR $</button>'],
    prompt: function () {
      return '<p id="prompt">&nbsp;&nbsp;&nbsp;&nbsp;Actualmente acumulado: ' + actual_money + ' <br> &nbsp;&nbsp;&nbsp;&nbsp;Número de infladas: ' + actual_rounds + ' <br> &nbsp;&nbsp;&nbsp;&nbsp;Total Acumulado: ' + total_money + '</p>';
    },
    data: {trialid: 'BART_' + pad(i + 1, 2), procedure: 'BART', rt: '',stimulus: {explodeRounds: explode_rounds}, response: {status: "safe", rounds: actual_rounds, roundMoney: actual_money, totalMoney: total_money} },
    on_finish: function (data) {
      total_money += actual_money;
      data.response.roundMoney = actual_money;
      data.response.rounds = actual_rounds;
      data.response.totalMoney = total_money;
      data.response.status = actual_status;
      actual_rounds = 0;
      actual_money = 0;
      actual_status = "safe";
    }
  }

  BART.push(question);
}

questions.push.apply(questions, BART);

call_function("BART");
