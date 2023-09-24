/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Probabilistic Prototype Distortion task

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PPD') );
PPD = [];    //temporal timeline

//let queryString = window.location.search;
//let urlParams = new URLSearchParams(queryString);
//let code = urlParams.get('code')

// code example s001_10M90XX107010109090 -> sxxx = user, 10 = number of repetitions, M = Manual mode, rest = percentage
if (uid_external.includes("_")) {
  console.log("uid = " + uid_external.split("_")[1].slice(-16));
  base_code = uid_external.split("_")[1];
  if (base_code.length > 17) {
    repetitions = parseInt(base_code.slice(0,-17));
  } else {
    repetitions = 10;
  }
  code = base_code.slice(-16);
} else {
  if (typeof code === 'undefined' || code === null)
    code = (Math.floor(Math.random() * 9999999999999999)).toString();
  repetitions = 10;
}

user_sucession = []
for (const j of Array(repetitions).keys()) {
  for (const i of Array(8).keys()) {
    actual_code = code.substr(i*2,2);
    if (actual_code == "XX")
      actual_code = "100";
    user_sucession.push([i, (j >= (parseInt(actual_code)*repetitions/100) ? "z" : "m")]);
  }
}

user_sucession = user_sucession.concat(user_sucession).concat(user_sucession)

// image, correct_answer
/*
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
*/

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [
      `
      <p align="justify"><b><big>Tarea de Categorización probabilística</big></b><BR><BR>
      ¡Gracias por participar!<BR><BR>
      <p align="justify">El experimento de categorización visual tiene dos fases: Entrenamiento y transferencia.</p>
      <p align="justify">Durante el entrenamiento, usted verá en la pantalla una serie de objetos esquemáticos (conocidos como símbolos ceremoniales) los cuales debe clasificar de acuerdo vaya aprendiendo.</p>
      <p align="justify">Durante la transferencia, usted tendrá que evaluar cada objeto esquemático una vez. Utilizando una escala Likert de 8 puntos de acuerdo a lo que aprendiste durante el entrenamiento.</p>
      <p align="justify">Recuerde que es importante mantener su atención durante todo el experimento.</p>
      <p align="justify">Este experimento durará aproximadamente 30 minutos.</p><BR>
      `,
      `
      <p align="justify"><b><big>Tarea de Categorización probabilística</big></b><BR><BR>
      <p align="justify">Este es un experimento interesado en cómo las personas mantienen la información en memoria.</p>
      <p align="justify">Usted verá una serie de símbolos ceremoniales con tres esferas. Cada esfera puede contener solo dos formas. Cada esfera estará siempre en la misma posición.</p>
      <p align="justify">Estos símbolos ceremoniales solamente pueden perteneces a dos categorías: La familia Z o la familia M.</p>
      <p align="justify">Al principio, usted tendrá que adivinar a qué familia cada símbolo ceremonial pertenece. Sin embargo, cada vez que usted presiona un botón, un mensaje en la pantalla le dirá si está correcto o equivocado. A pesar de que esta tarea es difícil, no hay trucos de por medio. Eventualmente, usted aprenderá a clasificar cada símbolo ceremonial.</p>
      <p align="justify">Presione la tecla del teclado Z si usted cree que el símbolo esquemático pertenece a la familia Z.</p>
      <p align="justify">Presione la tecla del teclado M si usted cree que el símbolo esquemático pertenece a la familia M.</p>
      <p align="justify">Usted tendrá 30 segundos para proveer una respuesta, de lo contrario un mensaje de Muy lento aparecerá en la pantalla.</p><BR>
      `
    ],
    button_label_next: 'Continuar',
    button_label_previous: 'Anterior',
    data: {trialid: 'Instructions_01', procedure: 'PPD'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question04 = {
    type: 'html-slider-response',
    stimulus:
    `
    <b><big>Chequeo atencional</big></b><br><br>
    Antes de comenzar con el experimento, por favor utilice la barra y seleccione el número exacto de esferas que cada símbolo ceremonial tiene, tal como leyó en las instrucciones de entrenamiento.<br><br><br>
    `,
    require_movement:true,
    required: true,
    min: 1,
    max: 4,
    slider_width: 500,
    slider_start: 2,
    step: 1,
    labels: ["1", "2", "3", "4"],
    button_label: "Siguiente",
    data: {trialid: 'PPD_001', procedure: 'PPD'},
    on_load: function () {
      document.getElementById("jspsych-html-slider-response-stimulus").style["text-align"] = "center";
    },
    on_finish: function() {
      if (document.getElementById("jspsych-html-slider-response-stimulus")) {
        document.getElementById("jspsych-html-slider-response-stimulus").style["text-align"] = "";
      }
    }
};
PPD.push(question04);

var actual_pad = 0;

for (var i = 0; i < user_sucession.length; i++) {
  actual_pad = (4+3*i);
  var question01 = {
      type: 'html-keyboard-response',
      stimulus: '<p style="font-size: 64px;">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 1500,
      data: {trialid: 'PPD_' + pad((2+3*i),3), procedure: 'PPD'},
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
      data: {trialid: 'PPD_' + pad((3+3*i),3), procedure: 'PPD'},
      on_load: function () {
        document.getElementsByClassName("jspsych-content")[0].style["text-align"] = "center";
        //document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "25%";
      },
      on_finish: function() {
        document.getElementsByClassName("jspsych-content")[0].style["text-align"] = "left";
      }
  };
  PPD.push(question02);

  var question03 = {
      type: 'html-keyboard-response',
      stimulus: function () {
        let data = (jsPsych.data.get().last().values())[0]["response"];

        //options = [{color: "red", answer: "Incorrecto"}, {color: "green", answer: "Correcto"}]
        //selected_option = options[Math.floor(Math.random() * options.length)]

        actual_question_id = (parseInt((jsPsych.data.get().last().values())[0]["trialid"].split("_")[1]) - 3)/3

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
      data: {trialid: 'PPD_' + pad((4+3*i),3), procedure: 'PPD'},
      on_load: function () {
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-left"] = "auto";
        document.getElementsByClassName("jspsych-content-wrapper")[0].style["margin-right"] = "auto";
        console.log('PPD_' + pad((4+3*i),3))
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
    pages: [
      `
      <p align="justify"><b><big>Tarea de Categorización probabilística</big></b><BR><BR>
      ¡Usted ha completado la fase de entrenamiento!<BR>
      Durante la fase de transferencia, usted tendrá que evaluar cada símbolo ceremonial una vez utilizando una escala Likert de 8 puntos.<BR>
      Usted tendrá que clasificar cada símbolo ceremonial con qué tan familiar es a la categoría Z o a la categoría M, de acuerdo a lo que usted ha aprendido durante el entrenamiento.<BR>
      Para proveer una respuesta, usted tendrá que hacer click en la barra de rating. Tan rápido usted responda, el siguiente ensayo comenzará inmediatamente.<BR>
      Recuerde, que usted puede usar valores extremos de la escala. Esto significa alta similitud con la familia Z (extremo izquierdo) o alta similitud con la familia M (extremo derecho).</p><BR>
      `
    ],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_02', procedure: 'PPD'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
PPD.push(instruction2);

for (var i = 0; i < images.length; i++) {
  var question04 = {
      type: 'html-slider-response',
      stimulus: "<img width='50%'src='" + images[i] + "' style='margin: auto; text-align: center;' /><br><br>",
      require_movement:true,
      required: true,
      min: 0,
      max: 7,
      slider_width: 500,
      slider_start: 4,
      step: 1,
      labels: ["m", "z"],
      button_label: "Siguiente",
      data: {trialid: 'PPD_' + pad((actual_pad+i+1),3), procedure: 'PPD'},
      on_load: function () {
        document.getElementById("jspsych-html-slider-response-stimulus").style["text-align"] = "center";
      },
      on_finish: function() {
        if (document.getElementById("jspsych-html-slider-response-stimulus")) {
          document.getElementById("jspsych-html-slider-response-stimulus").style["text-align"] = "";
        }
      }
  };
  PPD.push(question04);
}

var instruction3 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de PPD</big></b><BR>Cuando llegues a este punto cierra el experimento para no guardar información en el sistema.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_03', procedure: 'PPD'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
PPD.push(instruction3);

PPD.unshift(instruction_screen_experiment);
PPD.push.apply(questions, PPD);
call_function("PPD");
