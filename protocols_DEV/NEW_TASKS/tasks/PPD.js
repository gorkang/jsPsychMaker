/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Probabilistic Prototype Distortion task

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PPD') );
PPD = [];    //temporal timeline

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let code = urlParams.get('code')
console.log(code);

// image, correct_answer
user_sucession = [
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"],
  [0, "m"],
  [1, "z"],
  [2, "m"],
  [3, "z"],
  [4, "m"],
  [5, "z"],
  [6, "m"],
  [7, "z"]
]

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de PPD</big></b><BR>Por favor, responda las siguientes preguntas sobre la interacción que acaba de tener con la persona con PPD.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'PPD'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

for (var i = 0; i < user_sucession.length; i++) {
  var question01 = {
      type: 'html-keyboard-response',
      stimulus: '<p style="font-size: 64px;">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1500,
      data: {trialid: 'PPD_' + pad((1+3*i),3), procedure: 'PPD'},
      on_load: function () {
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-left"] = "auto";
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "auto";
      },
      on_finish: function() {
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-left"] = "25%";
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "25%";
      }
  };
  PPD.push(question01);

  var question02 = {
      type: 'html-keyboard-response',
      stimulus: "<img width='65%'src='" + images[user_sucession[i][0]] + "' style='text-align: center;' />",
      choices: ['z', 'm'],
      trial_duration: 30000,
      data: {trialid: 'PPD_' + pad((2+3*i),3), procedure: 'PPD'},
      on_load: function () {
        document.getElementsByClassName("jspsych-content")[0].style["text-align"] = "center";
        //document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "25%";
      },
      on_finish: function() {
        document.getElementsByClassName("jspsych-content")[0].style["text-align"] = "left";
      }
      //prompt: "<p>Is this activity healthy or unhealthy?</p><p>Press 'e' for healthy and 'i' for unhealthy.</p>"
  };
  PPD.push(question02);

  var question03 = {
      type: 'html-keyboard-response',
      stimulus: function () {
        let data = (jsPsych.data.get().last().values())[0]["response"];

        //options = [{color: "red", answer: "Incorrecto"}, {color: "green", answer: "Correcto"}]
        //selected_option = options[Math.floor(Math.random() * options.length)]

        actual_question_id = (parseInt((jsPsych.data.get().last().values())[0]["trialid"].split("_")[1]) - 2)/3

        if (data == null) {
          selected_option = {color: "blue", answer: "Too slow"};
        } else if (data == user_sucession[actual_question_id][1]) {
          selected_option = {color: "green", answer: "Correct"};
        } else {
          selected_option = {color: "red", answer: "Incorrect"};
        }
        paragraph = '<p style="font-size: 64px; color:' + selected_option.color + ';">' + selected_option.answer + '</p>';
        return (paragraph);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1500,
      data: {trialid: 'PPD_' + pad((3+3*i),3), procedure: 'PPD'},
      on_load: function () {
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-left"] = "auto";
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "auto";
      },
      on_finish: function() {
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-left"] = "25%";
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "25%";
      }
  };
  PPD.push(question03);
}

var instruction2 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de PPD</big></b><BR>Cuando llegues a este punto cierra el experimento para no guardar información en el sistema.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_02', procedure: 'PPD'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
PPD.push(instruction2);

PPD.unshift(instruction_screen_experiment);
PPD.push.apply(questions, PPD);
call_function("PPD");
