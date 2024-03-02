// First element blank so the position starts from 1
var encrypted_array = ["", "53", "50", "51", "55", "53", "52", "52", "55", "51", "51", "50", "55", "55", "53", "50", "51", "52", "55", "50", "53", "51", "51", "52", "50", "53", "52"];


/* ********************************* VARIABLES GENERALES ********************************* */

questions = (typeof questions != 'undefined' && questions instanceof Array) ? questions : [];
questions.push(check_fullscreen('WaisMatrices'));
WaisMatrices = [];    //temporal timeline

var max_response_seconds = 120;
// alert text when you have x seconds left
var seconds_text = {
  60: '¿Tienes alguna respuesta?',
  30: 'Saltaremos al siguiente item en 30 segundos'
};

var condition1 = false; //indicates if the answer given by the subject in example is correct
var wrongs_in_row = 0; //indicates if subjects has 3 wrongs in a row

/*indicates if subject got question 4 wrong and if the subject manages to get 2 rights in a row*/
var rights_in_row = 0;
var first_repeat = false;
var second_repeat = false;
var repeat = [];
var actual_sec = 0;

// countdown timer
function time_counter(stimulus) {
  var now = new Date().getTime();
  var end_time = now + max_response_seconds * 1000;
  var x = setInterval(function () {
    now = new Date().getTime();
    // difference in milliseconds between final time and now
    var distance = end_time - now;
    //var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var seconds = Math.floor(distance/1000);
    if (actual_sec !== seconds) {
      actual_sec = seconds

      if (seconds in seconds_text) {
        text = document.getElementById('text_timer');
        console.log(seconds_text[seconds])
        if (text)
          text.innerHTML = seconds_text[seconds];
      }

      /*if (seconds <= 30 && div_check === 0) {
        div_check = 1;
        text = document.getElementById('text_timer');
        console.log(seconds_text[30])
        if (text)
          text.innerHTML = seconds_text[30];
      }
      else if (seconds <= 10 && div_check === 1) {
        div_check = 2;
        text = document.getElementById('text_timer');
        console.log(seconds_text[10])
        if (text)
          text.innerHTML = seconds_text[10];
      } */
      if (seconds <= 0) {
        clearInterval(x);
        console.log("se salta al siguiente item");
        let data = {
          button_pressed: -1,
          response: 0,
          rt: max_response_seconds * 1000,
          stimulus: stimulus
        };
        //this.jsPsych.finishTrial(data);
      }
    }
  })
  return x
}

function resize_buttons() {
  buttons = document.getElementsByClassName("jspsych-html-button-response-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.height = "17.5%";
  }

  buttons_group = document.getElementById("jspsych-html-button-response-btngroup")
  
  buttons_group.style["display"] = "flex";
  buttons_group.style["justify-content"] = "center";
  buttons_group.style["margin-top"] = "3%";

  img = document.getElementsByTagName("img")[0];

  if (img.naturalHeight < 200)
    img.style.height = "79%";
}

function verify_question(data, correct_answer, selected_repeat = 0) {
  if (data.button_pressed == correct_answer) {
    data.response = 1;
    //if the answer is right
    wrongs_in_row = 0; //wrongs in a row
    if (selected_repeat.length == 1)
      rights_in_row += 1; //rights in a row
  } else {
    data.response = 0;
    wrongs_in_row = wrongs_in_row + 1;
    if (selected_repeat != 0)
      repeat.push(selected_repeat)
    if (selected_repeat.length == 1)
      rights_in_row = 0;
  }
}


var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<b><big>WAIS Matrices</big></b><BR>Read the following instructions carefully<BR><BR>`],
  button_label: 'Siguiente',
  data: { trialid: 'Instructions_00', procedure: 'WaisMatrices' },
  show_clickable_nav: true,
};


/* ********************************* INSTRUCCIONS ********************************* */

var instructions_01 = {
  type: "instructions",
  pages: [
    `<div>
      We will present you with a series of figures, where each one shows a logical pattern.<BR><BR>You will have to choose between 5 alternatives to complete each pattern.
    </div>`
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: { trialid: 'Instructions_01', procedure: 'WaisMatrices' }
};
WaisMatrices.push(instructions_01);

/* ************************************************************************************************************ */


/* PRACTICE BLOCK ******************************************************************************************** */

var question01 = {
  type: "html-button-response",
  stimulus:
    `<div><div>
    Look at this picture. You will choose which one of the options below goes in the box with a question mark.<BR><BR>
    The right answer will work going across (left to right) and going down (top to bottom).<BR>You should <i>only</i> look across and down to find the answer. Do <i>not</i> look diagonally.<BR><BR>
    Which of the options below goes in the box with a question mark?
    <div id='text_timer' style='color: red; text-align: center; margin-top: 1%; margin-bottom: 2%;'></div>
    </div></div>
    <div style='text-align: center;'><img src='media/images/WaisMatrices/AA.png' style='height: 30%;' /></div>`,
  choices: [
    "<img src='media/images/WaisMatrices/AB_1.png' style='height: 80%'/>",
    "<img src='media/images/WaisMatrices/AB_2.png' style='height: 80%'/>",
    "<img src='media/images/WaisMatrices/AB_3.png' style='height: 80%'/>",
    "<img src='media/images/WaisMatrices/AB_4.png' style='height: 80%'/>",
    "<img src='media/images/WaisMatrices/AB_5.png' style='height: 80%' />"
  ],
  button_html: '<button class="jspsych-matrix-button">%choice%</button>',
  data: { trialid: 'WaisMatrices_A', procedure: 'WaisMatrices' },
  margin_horizontal: "1%",
  on_load: function () { x = time_counter(jsPsych.currentTrial().stimulus); resize_buttons() },
  on_finish: function (data) {
    //CHECKs WICH SCREEN SHOW NEXT
    if (data.button_pressed == 4) {
      condition1 = true;
    } else {
      condition1 = false;
    }
    // stops x counter from time_counter function
    clearInterval(x);
  }
};
WaisMatrices.push(question01);

var instructions_02 = {
  type: "instructions",
  pages: function () {
    return [
      `<div><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/AA.png' style='width: 25%;' /></div><br /><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/AB.png' style='width: 60%;' </img></div><br />
      <div><h2>That is ` + (condition1 == false ? `not ` : ``) + `correct!</h2> <br />` +
      (condition1 == false ? `In the top row you can see how the blue star changes to a yellow circle. <br />
      When you go from left to right in the bottom row, the blue star should also change to a yellow circle.<br /><br />
      The leftmost column boxes have the same shape and the same color: blue stars.<br />
      When you go from top to bottom in the right column, the boxes should also have the same shape and the same color: yellow circle.
      <br /><br />
      You get the same answer going from left to right and top to bottom: <B>yellow circle</B></div><br>` : ``)
    ]
  },
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: { trialid: 'Instructions_02', procedure: 'WaisMatrices' }
};
WaisMatrices.push(instructions_02);

var question02 = {
  type: "html-button-response",
  stimulus:
    `<div><div>
    This is another type of problem. The pictures only go from left to right. The correct answer will follow the same order that you see in the boxes. <BR>
    Which of the options below goes in the box with a question mark?
    <div id='text_timer' style='color: red; text-align: center; margin-top: 1%; margin-bottom: 2%;'></div>
    </div></div>
    <div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/BA.png' style='height: 84%;' /></div><br>`,
  choices: [
    "<img src='media/images/WaisMatrices/BB_1.png' style='height: 82%' />",
    "<img src='media/images/WaisMatrices/BB_2.png' style='height: 82%' />",
    "<img src='media/images/WaisMatrices/BB_3.png' style='height: 82%' />",
    "<img src='media/images/WaisMatrices/BB_4.png' style='height: 82%' />",
    "<img src='media/images/WaisMatrices/BB_5.png' style='height: 82%' />"
  ],
  button_html: '<button class="jspsych-matrix-button">%choice%</button>',
  data: { trialid: 'WaisMatrices_B', procedure: 'WaisMatrices' },
  margin_horizontal: "1%",
  on_load: function () { x = time_counter(jsPsych.currentTrial().stimulus); resize_buttons() },
  on_finish: function (data) {
    //CHECKs WICH SCREEN SHOW NEXT
    if (data.button_pressed == 3) {
      condition1 = true;
    } else {
      condition1 = false;
    }
    // stops x counter from time_counter function
    clearInterval(x);
  }
};
WaisMatrices.push(question02);

var instructions_03 = {
  type: "instructions",
  pages: function () {
    return [
      `<div><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/BA.png' style='width: 60%;' /></div><br /><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/BB.png' style='width: 60%;' </img></div><br /><br />
      <div><h2>That is ` + (condition1 == false ? `not ` : ``) + `correct!</h2><br />` +
      (condition1 == false ? `When you look at the boxes from left to right, you can see that they follow this order:<br />
      big circle, small circle, big circle, small circle, big circle. <br /><br />
      The <B>small circle</B> goes in the box with a question mark because it is what follows the previous pattern.<br /><br />
      </div>` : ``)
    ]
  },
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: { trialid: 'Instructions_03', procedure: 'WaisMatrices' }
};
WaisMatrices.push(instructions_03);

var instructions_04 = {
  type: "instructions",
  pages: [
    `<div>
      From this point forward, you will not receive feedback indicating <br />
      whether your answer is correct or incorrect.<br /><br />
    </div>`
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: { trialid: 'Instructions_04', procedure: 'WaisMatrices' }
};
WaisMatrices.push(instructions_04);

/* END PRACTICE */
/* ************************************************************************************************ */

/* ITEMS 1 to 3 *********************************************************************************** */
// Only presented, in reverse order, if 4 or 5 failed

correct_answers_1_to_3 = encrypted_array.slice(1, 4); // end not included in slice

repeated_array = [];
for (let i = 1; i <= 3; i++) { // 1, 2, 3
  var if_question_loop = {
    timeline: [{
      type: "html-button-response",
      stimulus:
        "<div id='text_timer' style='color: red; text-align: center; margin-bottom: 2%;'></div><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/" + i.toString() + "A.png' style='height: 30%;' /></div>",
      choices: [
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_1.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_2.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_3.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_4.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_5.png' style='height: 82%'/>"
      ],
      button_html: '<button class="jspsych-matrix-button">%choice%</button>',
      data: { trialid: 'WaisMatrices_00' + i.toString(), procedure: 'WaisMatrices' },
      margin_horizontal: "1%",
      on_load: function () { x = time_counter(jsPsych.currentTrial().stimulus); resize_buttons() },
      on_finish: function (data) {
        if (data.button_pressed == decrypt(salt, correct_answers_1_to_3[i - 1])) {

          //if the answer is right
          data.response = 1;
          wrongs_in_row = 0; //wrongs in a row
          rights_in_row += 1; //rights in a row
        } else {
          data.response = 0;
          wrongs_in_row = wrongs_in_row + 1;
          rights_in_row = 0;
        }
        // stops x counter from time_counter function
        clearInterval(x);
      }
    }],
    conditional_function: function () {
      // if wrongs_in_row == 3 the experiment ends // REDUNDANT?
      if (wrongs_in_row >= 3) {
        return false;
      } else {

        // Exit loop if 2 rights in a row
        if (rights_in_row < 2) {
          return true;
        } else {
          return false;
        }
      }
    },
    data: { trialid: 'if_question_loop', procedure: 'WaisMatrices' }
  };

  repeated_array.push(if_question_loop);
}
repeated_array.reverse();

/* ITEM 4 *********************************************************************************** */

var if_question04 = {
  timeline: [{
    type: "html-button-response",
    stimulus:
      "<div id='text_timer' style='color: red; text-align: center; margin-bottom: 2%;'></div><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/4A.png' style='height: 30%;' /></div>",
    choices: [
      "<img src='media/images/WaisMatrices/4B_1.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/4B_2.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/4B_3.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/4B_4.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/4B_5.png' style='height: 82%'/>"
    ],
    button_html: '<button class="jspsych-matrix-button">%choice%</button>',
    data: { trialid: 'WaisMatrices_004', procedure: 'WaisMatrices' },
    margin_horizontal: "1%",
    on_load: function () { x = time_counter(jsPsych.currentTrial().stimulus); resize_buttons() },
    on_finish: function (data) {
      verify_question(data, decrypt(salt, encrypted_array.slice(4, 5).toString()), 1);
      // stops x counter from time_counter function
      clearInterval(x);
    }
  }],
  conditional_function: function () {
    if (wrongs_in_row >= 3) {
      return false;
    } else {
      return true;
    }
  },
  data: { trialid: 'if_question04', procedure: 'WaisMatrices' }
};
WaisMatrices.push(if_question04);

var if_WaisMatrices_04 = {
  timeline: repeated_array,
  conditional_function: function () {
    if (repeat.length == 1 && repeat[0] == 1) {
      return true;
    } else {
      return false;
    }
  },
  on_finish: function () {
    wrongs_in_row = 0;
  },
  data: { trialid: 'if_WaisMatrices_04', procedure: 'WaisMatrices' }
};
WaisMatrices.push(if_WaisMatrices_04);

/* ******************************************************************************************* */


/* ITEM 5 *********************************************************************************** */

var if_question05 = {
  timeline: [{
    type: "html-button-response",
    stimulus:
      "<div id='text_timer' style='color: red; text-align: center; margin-bottom: 2%;'></div><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/5A.png' style='height: 79%;' /></div></div>",
    choices: [
      "<img src='media/images/WaisMatrices/5B_1.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/5B_2.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/5B_3.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/5B_4.png' style='height: 82%'/>",
      "<img src='media/images/WaisMatrices/5B_5.png' style='height: 82%'/>"
    ],
    data: { trialid: 'WaisMatrices_005', procedure: 'WaisMatrices' },
    margin_horizontal: "1%",
    on_load: function () { x = time_counter(jsPsych.currentTrial().stimulus); resize_buttons() },
    on_finish: function (data) {
      verify_question(data, decrypt(salt, encrypted_array.slice(5, 6).toString()), 2);
      // stops x counter from time_counter function
      clearInterval(x);
    }
  }],
  conditional_function: function () {
    // if question 4th is wrong and doesn't have 2 corrects in a row (ex. if he fails on second question from 3-2-1 loop), then this questions doesn't show
    if ((wrongs_in_row >= 3) || ((jsPsych.data.get().values().filter(x => x.trialid == "WaisMatrices_004")[0].button_pressed != decrypt(salt, encrypted_array.slice(4, 5).toString())) && rights_in_row < 2)) {
      return false;
    } else {
      return true;
    }
  },
  data: { trialid: 'if_question05', procedure: 'WaisMatrices' }
};
WaisMatrices.push(if_question05);

// CHECK criteria to repeat items 3-2-1
var if_WaisMatrices_05 = {
  timeline: repeated_array,
  conditional_function: function () {
    // this only shows if participant have the 4th question correct and 5th wrong
    if (repeat.length == 1 && repeat[0] == 2 && (jsPsych.data.get().values().filter(x => x.trialid == "WaisMatrices_004")[0].button_pressed == decrypt(salt, encrypted_array.slice(4, 5).toString()))) {
      return true;
    } else {
      return false;
    }
  },
  on_finish: function () {
    wrongs_in_row = 0;
  },
  data: { trialid: 'if_WaisMatrices_05', procedure: 'WaisMatrices' }
};
WaisMatrices.push(if_WaisMatrices_05);

/* ******************************************************************************************* */


/* ITEMS 6 to 26 ***************************************************************************** */

correct_answers_6_to_26 = encrypted_array.slice(6, 27);// end not included in slice
//long_images = [7, 10, 12, 16, 17, 18, 19, 22, 26]

for (let i = 6; i <= 26; i++) { // 6-26
  var if_question_loop = {
    timeline: [{
      type: "html-button-response",
      stimulus:
        "<div id='text_timer' style='color: red; text-align: center; margin-bottom: 2%;'></div><div style='display: flex; justify-content: center;'><img src='media/images/WaisMatrices/" + i.toString() + "A.png' style='height: 30%;' /></div>", // if you have a long image (not a square image) the image size is 79%, else is 30%
      choices: [
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_1.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_2.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_3.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_4.png' style='height: 82%'/>",
        "<img src='media/images/WaisMatrices/" + i.toString() + "B_5.png' style='height: 82%'/>"
      ],
      button_html: '<button class="jspsych-matrix-button">%choice%</button>',
      data: { trialid: 'WaisMatrices_' + pad(i, 3), procedure: 'WaisMatrices' },
      margin_horizontal: "1%",
      on_load: function () { x = time_counter(jsPsych.currentTrial().stimulus); resize_buttons() },
      on_finish: function (data) {
        verify_question(data, decrypt(salt, correct_answers_6_to_26[i - 6]))
        // stops x counter from time_counter function
        clearInterval(x);
      }
    }],
    conditional_function: function () {
      if (
        // if 3 wrongs in row the experiment ends
        wrongs_in_row >= 3 ||
        // if the user fails on 4th or 5th question and he doesn't have at least 2 corrects (3-2-1) in row the experiment ends
        (repeat.length > 0 && rights_in_row < 2)
      ) {
        return false;
      } else {
        return true;
      }
    },
    data: { trialid: 'if_question_loop', procedure: 'WaisMatrices' }
  };
  WaisMatrices.push(if_question_loop);
}

/* ******************************************************************************************* */

var instructions_05 = {
  type: "instructions",
  pages: [
    `<p><center>You finished the task. Click [Next>] to continue.<br /><br />`
  ],
  show_clickable_nav: true,
  data: { trialid: 'instructions_05', procedure: 'WaisMatrices' }
};
WaisMatrices.push(instructions_05);

WaisMatrices.unshift(instruction_screen_experiment);
WaisMatrices.push.apply(questions, WaisMatrices)

call_function("WaisMatrices");
