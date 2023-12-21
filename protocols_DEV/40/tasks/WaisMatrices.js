/* ********************************* VARIABLES GENERALES ********************************* */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('WaisMatrices') );
WaisMatrices = [];    //temporal timeline

var condition1 = false; //indicates if the answer given by the subject in example is correct

var wrongs_in_row = 0; //indicates if subjects has 3 wrongs in a row
/*indicates if subject got question 4 wrong and if the subject manages to get 2 rights in a row*/
var rights_in_row = 0;

var first_repeat = false;
var second_repeat = false;

function resize_buttons() {
    buttons = document.getElementsByClassName("jspsych-html-button-response-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.width="17.5%";  
    }
}


var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<b><big>WAIS Matrices</big></b><BR>Read the following instructions carefully<BR><BR>`],
    button_label: 'Siguiente',
    data: {trialid: 'Instructions_00', procedure: 'WaisMatrices'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


/* ********************************* INSTRUCCIONES ********************************* */

/* Texto Inicial */

var instructions_01 = {
    type: "instructions",
    pages: [
        `<div class = centerbox>
            <p class = center-block-text>
            We will present you with a series of figures, where each one shows a logical pattern.<BR><BR>You will have to choose between 5 alternatives to complete each pattern.
            </p></div>`
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {trialid: 'Instructions_01', procedure: 'WaisMatrices'}
};
WaisMatrices.push(instructions_01);

/* ************************************************************************************************************ */


/* INICIO BLOQUES DE PRACTICA ********************************************************************************* */

var question01 = {
    type: "html-button-response",
    stimulus:
        `<div class = centerbox><p class = justified>
        Look at this picture. You will choose which one of the options below goes in the box with a question mark.<BR><BR>
        The right answer will work going across (left to right) and going down (top to bottom).<BR>You should <i>only</i> look across and down to find the answer. Do <i>not</i> look diagonally.<BR><BR>
        Which of the options below goes in the box with a question mark?
        </p><br /></div>
        <div style='text-align: center;'><img src='media/images/WaisMatrices/1A.png' style='width: 30%; margin-left: -4%' /></div><div style='text-align: center;'><br />`,
    choices: [
        "<img src='media/images/WaisMatrices/1B_1.png' style='width: 80%'/>",
        "<img src='media/images/WaisMatrices/1B_2.png' style='width: 80%'/>",
        "<img src='media/images/WaisMatrices/1B_3.png' style='width: 80%'/>",
        "<img src='media/images/WaisMatrices/1B_4.png' style='width: 80%'/>",
        "<img src='media/images/WaisMatrices/1B_5.png' style='width: 80%' />"
    ],
    button_html: '<button class="jspsych-matrix-button">%choice%</button>',
    data: {trialid: 'WaisMatrices_01', procedure: 'WaisMatrices'},
    margin_horizontal: "1%",
    on_load: function () {resize_buttons()},
    on_finish: function(data) {
        //CHECKs WICH SCREEN SHOW NEXT
        if (data.button_pressed == 4) {
            condition1 = true;
        } else {
            condition1 = false;
        }
    }
};
WaisMatrices.push(question01);

var instructions_02 = {
    type: "instructions",
    pages: function () {
        return [
            `<div class = matrizlimit><div style='text-align: center;'><img src='media/images/WaisMatrices/1A.png' style='width: 25%; margin-left: -4%' /></div><br /><br /><div style='text-align: center;'><img src='media/images/WaisMatrices/1B.png' style='width: 60%; margin-left: -4%' </img></div><br />
            <div class='matrizfeedback'><h2>That is ` + (condition1 == false ? `not ` : ``) + `correct!</h2> <br />` + 
            (condition1 == false ? `In the top row you can see how the blue star changes to a yellow circle. <br />
            When you go from left to right in the bottom row, the blue star should also change to a yellow circle.<br /><br />
            The leftmost column boxes have the same shape and the same color: blue stars.<br />
            When you go from top to bottom in the right column, the boxes should also have the same shape and the same color: yellow circle.<br /><br />
            You get the same answer going from left to right and top to bottom: <B>yellow circle</B></div><br>` : ``)
        ]
    },
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {trialid: 'Instructions_02', procedure: 'WaisMatrices'}
};
WaisMatrices.push(instructions_02);

var question02 = {
    type: "html-button-response",
    stimulus:
        `<div class = centerbox>
        <p class = justified>
        This is another type of problem. The pictures only go from left to right. The correct answer will follow the same order that you see in the boxes. <BR>
        Which of the options below goes in the box with a question mark?
        </p><br /></div>
        <div style='text-align: center;'><img src='media/images/WaisMatrices/2A.png' style='width: 84%; margin-left: -4%' /></div><br>`,
    choices: [
        "<img src='media/images/WaisMatrices/2B_1.png' style='width: 82%' />",
        "<img src='media/images/WaisMatrices/2B_2.png' style='width: 82%' />",
        "<img src='media/images/WaisMatrices/2B_3.png' style='width: 82%' />",
        "<img src='media/images/WaisMatrices/2B_4.png' style='width: 82%' />",
        "<img src='media/images/WaisMatrices/2B_5.png' style='width: 82%' />"
    ],
    button_html: '<button class="jspsych-matrix-button">%choice%</button>',
    data: {trialid: 'WaisMatrices_02', procedure: 'WaisMatrices'},
    margin_horizontal: "1%",
    on_load: function () {resize_buttons()},
    on_finish: function(data) {
        //CHECKs WICH SCREEN SHOW NEXT
        if (data.button_pressed == 3) {
            condition1 = true;
        } else {
            condition1 = false;
        }
    }
};
WaisMatrices.push(question02);

var instructions_03 = {
    type: "instructions",
    pages: function () {
        return [
            `<div class = matrizlimit><div style='text-align: center;'><img src='media/images/WaisMatrices/2A.png' style='width: 60%; margin-left: -4%' /></div><br /><br /><div style='text-align: center;'><img src='media/images/WaisMatrices/2B.png' style='width: 60%; margin-left: -4%' </img></div><br /><br />
            <div class='matrizfeedback'><h2>That is ` + (condition1 == false ? `not ` : ``) + `correct!</h2><br />` + 
            (condition1 == false ? `When you look at the boxes from left to right, you can see that they follow this order:<br />
            big circle, small circle, big circle, small circle, big circle. <br /><br />
            The <B>small circle</B> goes in the box with a question mark because it is what follows the previous pattern.<br /><br />
            </div>` : ``)
        ]
    },
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {trialid: 'Instructions_03', procedure: 'WaisMatrices'}
};
WaisMatrices.push(instructions_03);

var instructions_04 = {
    type: "instructions",
    pages: [
        `<div class = centerbox>
            <p class = center-block-text>
            From this point forward, you will not receive feedback indicating <br />
            whether your answer is correct or incorrect.<br /><br />
            </p></div>`
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {trialid: 'Instructions_04', procedure: 'WaisMatrices'}
};
WaisMatrices.push(instructions_04);

/* FIN BLOQUES DE PRACTICA */
/* ************************************************************************************************ */

/* ITEMS 3 to 5 *********************************************************************************** */

correct_answers_3_to_5 = [2,1,0]
repeated_array = []
for (let i = 3; i < 6; i++) { // 3, 4, 5
    var if_question_loop = {
        timeline: [{
            type: "html-button-response",
            stimulus:
                "<div style='text-align: center;'><img src='media/images/WaisMatrices/" + i.toString() + "A.png' style='width: 30%; margin-left: -4%' /></div>",
            choices: [
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_1.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_2.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_3.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_4.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_5.png' style='width: 82%'/>"
            ],
            button_html: '<button class="jspsych-matrix-button">%choice%</button>',
            data: {trialid: 'WaisMatrices_00' + i.toString(), procedure: 'WaisMatrices'},
            margin_horizontal: "1%",
            on_load: function () {resize_buttons()},
            on_finish: function(data) {
                if (first_repeat == true || second_repeat == true) {
                    if (data.button_pressed == correct_answers_3_to_5[i-3]) {
                        //if the answer is right
                        wrongs_in_row = 0; //wrongs in a row
                        rights_in_row += 1; //rights in a row
                    } else {
                        wrongs_in_row = wrongs_in_row + 1;
                        rights_in_row = 0;
                    }
                }   
            }
        }],
        conditional_function: function() {
            // if wrongs_in_row == 3 the experiment ends
            if (wrongs_in_row >= 3) {
                return false;
            } else {
                // if is the first time of this questions there isn't a problem, so it pass, then, when you have the question 6 or 7 
                // you have active the "first_repeat" or the "second_repeat", in which case the loops ends if you have 2 correct questions in row
                // if you never have 2 corrects questions in row or 3 wrongs this loop is infinite
                if (first_repeat == false && second_repeat == false || ((first_repeat == true || second_repeat == true) && rights_in_row < 2)) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        data: {trialid: 'if_question_loop', procedure: 'WaisMatrices'}
    };
    WaisMatrices.push(if_question_loop);

    repeated_array.push(if_question_loop);
}
repeated_array.reverse();

/* ITEM 6 *********************************************************************************** */

var if_question06 = {
    timeline: [{
        type: "html-button-response",
        stimulus:
            "<div style='text-align: center;'><img src='media/images/WaisMatrices/6A.png' style='width: 30%; margin-left: -4%' /></div>",
        choices: [
            "<img src='media/images/WaisMatrices/6B_1.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/6B_2.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/6B_3.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/6B_4.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/6B_5.png' style='width: 82%'/>"
        ],
        button_html: '<button class="jspsych-matrix-button">%choice%</button>',
        data: {trialid: 'WaisMatrices_006', procedure: 'WaisMatrices'},
        margin_horizontal: "1%",
        on_load: function () {resize_buttons()},
        on_finish: function(data) {
            if (data.button_pressed == 4 && (first_repeat == true || second_repeat == true)) {
                //if the answer is right
                wrongs_in_row = 0; //wrongs in a row
                rights_in_row += 1; //rights in a row
            } else if (data.button_pressed == 4) {
                wrongs_in_row = 0; //wrongs in a row
            } else {
                wrongs_in_row = wrongs_in_row + 1;
                rights_in_row = 0;
            }
            // activation of loop repeat
            if (data.button_pressed != 4 && first_repeat == false) {
                first_repeat = true
            }
        }
    }],
    conditional_function: function() {
        // same explanation as in the previous loop
        if (wrongs_in_row >= 3) {
            return false;
        } else {
            if ((first_repeat == false && second_repeat == false) || ((first_repeat == true || second_repeat == true) && rights_in_row < 2)) {
                return true;
            } else {
                return false
            }
        }
    },
    data: {trialid: 'if_question06', procedure: 'WaisMatrices'}
};
WaisMatrices.push(if_question06);

var if_WaisMatrices_06 = {
    timeline: repeated_array,
    conditional_function: function(){
        if (first_repeat == true) {
            return true;
        } else {
            return false;
        }
    },
    loop_function: function() {
        if (rights_in_row < 2 && wrongs_in_row < 3) {
            return true;
        } else {
            return false;
        }
    },
    on_finish: function() {
        first_repeat = false;
        rights_in_row = 0;
        wrongs_in_row = 0;
    },
    data: {trialid: 'if_WaisMatrices_06', procedure: 'WaisMatrices'}
};
WaisMatrices.push(if_WaisMatrices_06);

/* ******************************************************************************************* */


/* ITEM 7 *********************************************************************************** */

var if_question07 = {
    timeline: [{
        type: "html-button-response",
        stimulus:
            "<div style='text-align: center;'><img src='media/images/WaisMatrices/7A.png' style='width: 79%; margin-left: -4%' /></div></div>",
        choices: [
            "<img src='media/images/WaisMatrices/7B_1.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/7B_2.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/7B_3.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/7B_4.png' style='width: 82%'/>",
            "<img src='media/images/WaisMatrices/7B_5.png' style='width: 82%'/>"
        ],
        data: {trialid: 'WaisMatrices_007', procedure: 'WaisMatrices'},
        margin_horizontal: "1%",
        on_load: function () {resize_buttons()},
        on_finish: function(data) {
            if (data.button_pressed == 2) {
                wrongs_in_row = 0;
            } else if (data.button_pressed != 2) {
                wrongs_in_row = wrongs_in_row + 1;
                rights_in_row = 0;
            }
            // activation of loop repeat
            if (data.button_pressed != 2 && second_repeat == false) {
                second_repeat = true;
            }
        }
    }],
    conditional_function: function() {
        if (wrongs_in_row >= 3) {
            return false;
        } else {
            return true;
        }
    },
    data: {trialid: 'if_question07', procedure: 'WaisMatrices'}
};
WaisMatrices.push(if_question07);

// CHECK criteria to repeat last 4 items
var if_WaisMatrices_07 = {
    timeline: [if_question06].concat(repeated_array),
    conditional_function: function(){
        if (second_repeat == true) {
            return true;
        } else {
            return false;
        }
    },
    loop_function: function() {
        if (rights_in_row < 2 && wrongs_in_row < 3) {
            return true;
        } else {
            return false;
        }
    },
    on_finish: function() {
        rights_in_row = 0;
        wrongs_in_row = 0;
    },
    data: {trialid: 'if_WaisMatrices_07', procedure: 'WaisMatrices'}
};
WaisMatrices.push(if_WaisMatrices_07);

/* ******************************************************************************************* */


/* ITEMS 8 to 28 ***************************************************************************** */

correct_answers_8_to_28 = [3, 3, 4, 0, 0, 1, 4, 4, 2, 1, 0, 3, 4, 1, 2, 0, 0, 3, 1, 2, 3]

long_images = [9, 12, 14, 18, 19, 20, 21, 24, 28]

for (let i = 8; i < 29; i++) { // 8-28
    var if_question_loop = {
        timeline: [{
            type: "html-button-response",
            stimulus:
                "<div style='text-align: center;'><img src='media/images/WaisMatrices/" + i.toString() + "A.png' style='width: " + (long_images.includes(i) ? "79%" : "30%") + "; margin-left: -4%' /></div>", // if you have a long image (not a square image) the image size is 79%, else is 30%
            choices: [
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_1.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_2.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_3.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_4.png' style='width: 82%'/>",
                "<img src='media/images/WaisMatrices/" + i.toString() + "B_5.png' style='width: 82%'/>"
            ],
            button_html: '<button class="jspsych-matrix-button">%choice%</button>',
            data: {trialid: 'WaisMatrices_' + pad(i, 3), procedure: 'WaisMatrices'},
            margin_horizontal: "1%",
            on_load: function () {resize_buttons()},
            on_finish: function(data) {
                if (data.button_pressed == correct_answers_8_to_28[i-8]) {
                    //if the answer is right
                    wrongs_in_row = 0; //wrongs in a row
                } else {
                    wrongs_in_row = wrongs_in_row + 1;
                }
            }
        }],
        conditional_function: function() {
            if (wrongs_in_row >= 3) {
                return false;
            } else {
                return true;
            }
        },
        data: {trialid: 'if_question_loop', procedure: 'WaisMatrices'}
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
    data: {trialid: 'instructions_05', procedure: 'WaisMatrices'}
};
WaisMatrices.push(instructions_05);

WaisMatrices.unshift(instruction_screen_experiment);
WaisMatrices.push.apply(questions, WaisMatrices)

call_function("WaisMatrices");