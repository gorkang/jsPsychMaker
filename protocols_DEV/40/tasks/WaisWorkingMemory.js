questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('WaisWorkingMemory') );
WaisWorkingMemory = [];    //temporal timeline

encrypted_codes = {
  block_1: ["5856", "5752", "545953", "575855", "56535957", "57555258", "5553565250", "5654595257", "525853555956", "575058555652", "55505658525957", "57585056555359", "5259535857505655", "5459505253575556", "535654595752505855", "565052585553545759"],
  training_2 : ["5056", "5552"],
  block_2: ["5052", "5553", "5755", "5654", "585357", "545655", "58565359", "59575855", "5255595457", "5759555450", "595055565254", "575459555356", "53575258555059", "59535758525655", "5950535756525558", "5255575450595356"],
  training_3 : ["505352", "535354"],
  block_3: ["5053", "5355", "505257", "515558", "53565958", "50555659", "5053575658", "5252545959", "505352555756", "535352555457", "53545757565659", "53525555545459", "5355545454565659", "5152555556595858", "515150505053525454", "535650555955535857"]
}

var wrongs_in_row = 0;
var audio_counter = 1;
var actual_question_size = 0;

function number_block(encripted_number, ID, type, block_name) {
  let audio_question = {
    type: 'audio-keyboard-response',
    stimulus: function() {
      return 'media/audios/WaisWorkingMemory/' + block_name + '/hombre_' + audio_counter.toString() + '.mp3'
    },
    choices: "NO_KEYS",
    prompt: "<div class='crux' id='cruz'><img src='media/images/WaisWorkingMemory/cross.png' /></div>",
    trial_ends_after_audio: true,
    data: {trialid: 'WaisWorkingMemory_' + pad(ID, 3) + '_audio', procedure: 'WaisWorkingMemory'},
    on_load: function () {
      document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
      document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
    }
  };

  let answer_question = {
    type: 'survey-numbers',
    questions: [{ prompt: ["<p>Enter the numbers in the keypad</p>"] }],
    timing_post_trial: 100,
    data: {trialid: 'WaisWorkingMemory_' + pad(ID, 3), procedure: 'WaisWorkingMemory'},
    on_load: function(){
      document.getElementsByName("#jspsych-survey-numbers-response-0")[0].style.minHeight = "28.8px";
    },
    on_finish: function(data) {
      if (data.response == '{"Q0":"' + decrypt(salt, encripted_number) + '"}' || type == "training") {
        //if answer is right
        wrongs_in_row = 0;
      } else {
        //if answer is wrong
        if (actual_question_size !== decrypt(salt, encripted_number).length) {
          wrongs_in_row = 1
          actual_question_size = decrypt(salt, encripted_number).length
        } else {
          wrongs_in_row += 1
        }
      }
      audio_counter += 1;
      document.getElementById("jspsych-content").style.removeProperty("margin-left");
      document.getElementById("jspsych-content").style.setProperty("text-align", "left");
    }
  };

  let conditional_block = {
    timeline: [audio_question, answer_question],
    conditional_function: function() {
      if (wrongs_in_row >= 2) {
        return false;
      } else {
        return true;
      }
    },
    data: {trialid: 'WaisWorkingMemory_' + pad(ID, 3), procedure: 'WaisWorkingMemory'}
  };

  WaisWorkingMemory.push(conditional_block);
}


var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<b><big>Digit retention</big></b><BR>Please read the following instructions carefully<BR><BR>`],
  button_label: 'Siguiente',
  data: {trialid: 'Instructions_00', procedure: 'WaisWorkingMemory'},
  show_clickable_nav: true,
};

var instructions_01 = {
  type: "instructions",
  pages: [
    `<div class = centerbox><p class = center-block-text>
    <b><big>(1/3) Same order</big></b><BR><BR>
    Now you will hear some numbers. Listen carefully as <B>they will not be repeated</B>.<br />
    After listening to them you will have to enter the numbers on a keypad in the same order that they were presented.<br /><br />
    Please, <B>DO NOT write down the numbers</B> while you are listening to them.<br /><br />
    Click on the following button to begin.<br /></p></div>`
  ],
  show_clickable_nav: true,
  data: {trialid: 'Instructions_01', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_01);

//WM Directo
//number_block(encrypted_codes["training_1"][0], 1, "training", "Directo")

for (let i = 0; i < encrypted_codes["block_1"].length; i++) {
  number_block(encrypted_codes["block_1"][i], i+1, "trial", "Directo")    
}

var instructions_02 = {
  type: "instructions",
  pages: [
    `<div class = centerbox><p class = center-block-text>
    <b><big>(2/3) Reverse order</big></b><BR><BR>
    Now you must <B>enter the numbers in reverse order</B>.<br /><br />
    Please, <B>DO NOT write down the numbers</B> while you are listening to them.<br /><br />
    Click on the following button to start.<br />
    </p></div>`
  ],
  show_clickable_nav: true,
  data: {trialid: 'Instructions_02', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    audio_counter = 1;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_02);

//WM Inverso
number_block(encrypted_codes["training_2"][0], 17, "training", "Inverso")


var instructions_03 = {
  type: "instructions",
  pages: function() {
    return (["<p>" + 
      (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_017' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "17" ) ? "Correct!" : 
      "That is not correct.<BR>The numbers where 71, so the correct response in <B>reverse order</B> was 17.") +
      "<br /></p>"])
  },
  button_label_next: "Continue",
  show_clickable_nav: true,
  data: {trialid: 'Instructions_03', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_03);

number_block(encrypted_codes["training_2"][1], 18, "training", "Inverso")

var instructions_04 = {
  type: "instructions",
  pages: function() {
    return (["<p>" + 
      (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_018' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "43" ) ? "Correct!" :  
      "That is not correct.<BR>The numbers where 34, so the correct response in <B>reverse order</B> was 43.") +
      "<br /></p>"])
  },
  button_label_next: "Continue",
  show_clickable_nav: true,
  data: {trialid: 'Instructions_04', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_04);

for (let i = 0; i < encrypted_codes["block_2"].length; i++) {
  number_block(encrypted_codes["block_2"][i], 19+i, "trial", "Inverso")    
}

var instructions_05 = {
  type: "instructions",
  pages: [
    `<div class = centerbox><p class = center-block-text>
    <b><big>(3/3) Sequential order</big></b><BR><BR>
    Now you must <B>enter the numbers in sequential order</B>, starting from the smaller number.<br /><br />
    Please, <B>DO NOT write down the numbers</B> while you are listening to them.<br /><br />
    Click on the following button to start.<br />
    </p></div>`
  ],
  show_clickable_nav: true,
  data: {trialid: 'Instructions_05', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    audio_counter = 1;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_05);

//WM Secuencial
number_block(encrypted_codes["training_3"][0], 35, "training", "Secuencial")

var instructions_06 = {
  type: "instructions",
  pages: function() {
    return (["<p>" + 
      (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_035' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "123" ) ? "Correct!" : 
      "That is not correct.<BR>The numbers where 321, so the correct response in <B>sequential orden</B> was 123.") +
      "<br /></p>"])
  },
  button_label_next: "Continue",
  show_clickable_nav: true,
  data: {trialid: 'Instructions_06', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_06);

number_block(encrypted_codes["training_3"][1], 36, "training", "Secuencial")

var instructions_07 = {
  type: "instructions",
  pages: function() {
    return (["<p>" + 
      (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_036' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "225" ) ? "Correct!" : 
      "That is not correct.<BR>The numbers where 522, so the correct response in <B>sequential orden</B> was 225.") +
      "<br /></p>"])
  },
  button_label_next: "Continue",
  show_clickable_nav: true,
  data: {trialid: 'Instructions_07', procedure: 'WaisWorkingMemory'},
  on_finish: function() {
    wrongs_in_row = 0;
    actual_question_size = 0;
    document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
    document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
  },
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_07);

for (let i = 0; i < encrypted_codes["block_3"].length; i++) {
  number_block(encrypted_codes["block_3"][i], 37+i, "trial", "Secuencial")    
}

var instructions_08 = {
  type: "instructions",
  pages: [`<p><center>You finished the task. Click [Next>] to continue.<br /><br />`],
  show_clickable_nav: true,
  data: {trialid: 'instructions_08', procedure: 'WaisWorkingMemory'},
  on_load: function () {
    document.getElementById("jspsych-content").style.removeProperty("margin-left");
    document.getElementById("jspsych-content").style.setProperty("text-align", "left");
  }
};
WaisWorkingMemory.push(instructions_08);

WaisWorkingMemory.unshift(instruction_screen_experiment);
WaisWorkingMemory.push.apply(questions, WaisWorkingMemory)

call_function("WaisWorkingMemory");