/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('LoB') );
LoB = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>LoB</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'LoB'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cree en Dios?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'LoB_001', procedure: 'LoB'}
};
LoB.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Desde cuándo cree en Dios?</div>', options: ['&nbsp;Hace 1 a 5 años', '&nbsp;Hace 6 a 10 años', '&nbsp;Hace 11 a 15 años', '&nbsp;Hace 16 a 20 años', '&nbsp;Más de 20 años'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LoB_002', procedure: 'LoB'}
};

var if_question002 = {
    timeline: [question002],
    data: {trialid: 'LoB_002_if', procedure: 'LoB'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'LoB_001'))["response"])["Q0"]).trim();
        if(data == "Si"){
            return true;
        } else {
            return false;
        }
    }
}
LoB.push(if_question002);

LoB.unshift(instruction_screen_experiment);
questions.push.apply(questions, LoB)

call_function("LoB");
