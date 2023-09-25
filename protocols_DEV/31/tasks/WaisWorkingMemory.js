questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('WaisWorkingMemory') );
WaisWorkingMemory = [];    //temporal timeline

encrypted_codes = {
    training_1 : ["5856"],
    block_1: ["5752", "545953", "575855", "56535957", "57555258", "5553565250", "5654595257", "525853555956", "575058555652", "55505658525957", "57585056555359", "5259535857505655", "5459505253575556", "535654595752505855", "565052585553545759"],
    training_2 : ["5056", "5552"],
    block_2: ["5052", "5553", "5755", "5654", "585357", "545655", "58565359", "59575855", "5255595457", "5759555450", "595055565254", "575459555356", "53575258555059", "59535758525655", "5950535756525558", "5255575450595356"],
    training_3 : ["505352", "535354"],
    block_3: ["5053", "5355", "505257", "515558", "53565958", "50555659", "5053575658", "5252545959", "505352555756", "535352555457", "53545757565659", "53525555545459", "5355545454565659", "5152555556595858", "515150505053525454", "535650555955535857"]
}

var wrongs_in_row = 0;
var audio_counter = 1;

function number_block(encripted_number, ID, type, block_name) {
    let audio_question = {
        type: 'audio-keyboard-response',
        stimulus: function() {
            return 'media/audios/WaisWorkingMemory/' + block_name + '/hombre_' + audio_counter.toString() + '.mp3'
        },
        choices: "NO_KEYS",
        prompt: "<div class='crux' id='cruz'><img src='media/images/WaisWorkingMemory/cross.png' /></div>",
        trial_ends_after_audio: true,
        data: {trialid: 'WaisWorkingMemory_' + pad(ID, 3), procedure: 'WaisWorkingMemory'},
        on_load: function () {
            console.log("Encrypted number: " + encripted_number)
            console.log("Decripted number: " + decrypt(salt, encripted_number));
            document.getElementById("jspsych-content").style.setProperty("margin-left", "auto", "important");
            document.getElementById("jspsych-content").style.setProperty("text-align", "center", "important");
        }
    };

    let answer_question = {
        type: 'survey-numbers',
        questions: [{ prompt: ["<p>Escribe a continuación, los números que escuchaste</p>"] }],
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
                wrongs_in_row += 1
            }
            console.log("Response: " + data.response);
            console.log("Audio Counter: " + audio_counter.toString());
            console.log("Wrongs: " + wrongs_in_row.toString())
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
    pages: [`<b><big>Retencion de dígitos</big></b><BR>Lee atentamente las siguientes instrucciones<BR><BR>`],
    button_label: 'Siguiente',
    data: {trialid: 'Instructions_00', procedure: 'WaisWorkingMemory'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var instructions_01 = {
    type: "instructions",
    pages: [
        "<div class = centerbox><p class = center-block-text>Ahora escuchar&aacute;s algunos n&uacute;meros. Escucha atentamente ya que no ser&aacute;n repetidos.<br />Despu&eacute;s de escucharlos tendr&aacute;s que repetir los n&uacute;meros en el mismo orden que fueron presentados.<br /><br />Haz click en el siguiente bot&oacute;n para comenzar.<br /></p></div>"
    ],
    show_clickable_nav: true,
    data: {trialid: 'Instructions_01', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
number_block(encrypted_codes["training_1"][0], 1, "training", "Directo")

for (let i = 0; i < encrypted_codes["block_1"].length; i++) {
    number_block(encrypted_codes["block_1"][i], 2+i, "trial", "Directo")    
}

var instructions_02 = {
    type: "instructions",
    pages: ["<div class = centerbox><p class = center-block-text>Ahora escuchar&aacute;s otros n&uacute;meros, pero esta vez tendr&aacute;s que repetirlos en orden inverso.<br /><br />Haz click en el siguiente bot&oacute;n para comenzar.<br /></p></div>"],
    show_clickable_nav: true,
    data: {trialid: 'Instructions_02', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
            (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_017' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "17" ) ? "Respuesta correcta." : "Eso no es correcto. Los n&uacute;meros eran 71, por lo que en orden inverso la respuesta correcta era 17.") + 
            "<br /></p>"])
    },
    button_label_next: "Continuar",
    show_clickable_nav: true,
    data: {trialid: 'Instructions_03', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
            (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_018' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "43" ) ? "Respuesta correcta." : "Eso no es correcto. Los n&uacute;meros eran 34, por lo que en orden inverso la respuesta correcta era 43.") + 
            "<br /></p>"])
    },
    button_label_next: "Continuar",
    show_clickable_nav: true,
    data: {trialid: 'Instructions_04', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
        "<div class = centerbox><p class = center-block-text>Ahora escuchar&aacute;s otros n&uacute;meros. Despu&eacute;s de escucharlos tendr&aacute;s que repetirlos en orden,<br />comenzando por el n&uacute;mero menor.<br /><br />Haz click en el siguiente bot&oacute;n para comenzar.<br /></p></div>"
    ],
    show_clickable_nav: true,
    data: {trialid: 'Instructions_05', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
            (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_035' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "123" ) ? "Respuesta correcta." : "Eso no es correcto. Los n&uacute;meros eran 321, por lo que en orden inverso la respuesta correcta era 123.") + 
            "<br /></p>"])
    },
    button_label_next: "Continuar",
    show_clickable_nav: true,
    data: {trialid: 'Instructions_06', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
            (((JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'WaisWorkingMemory_036' && x.trial_type === "survey-numbers"))['response'])['Q0']) == "225" ) ? "Respuesta correcta." : "Eso no es correcto. Los n&uacute;meros eran 522, por lo que en orden inverso la respuesta correcta era 225.") + 
            "<br /></p>"])
    },
    button_label_next: "Continuar",
    show_clickable_nav: true,
    data: {trialid: 'Instructions_07', procedure: 'WaisWorkingMemory'},
    on_trial_start: function() {
        bloquear_enter = 1;
    },
    on_finish: function() {
        wrongs_in_row = 0;
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
    pages: ["<p><center>Hemos terminado, excelente trabajo.<br /><br />Muchas gracias por su colaboraci&oacute;n.<br /><br />Por favor, llame al examinador."],
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