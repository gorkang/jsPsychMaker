/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SHORNAMETASKmultichoice') );
SHORNAMETASKmultichoice = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
        pages: [`<p><left><b><big>NAME TASK</big></b><br/><br> Instrucciones detalladas de tarea con multi choice<br><br> Muchas gracias por tu colaboración.</p>`,
    `<p>Pagina 2 de instrucciones. <BR><BR>Dale a siguiente para empezar la tarea</p>`],
    data:{trialid: 'SHORNAMETASKmultichoice_000', procedure: 'SHORNAMETASKmultichoice'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Una pregunta</div>', options: ['Mejor que lo habitual', 'Igual que lo habitual', 'Menos que lo habitual', 'Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'SHORNAMETASKmultichoice_001', procedure: 'SHORNAMETASKmultichoice'}
};
SHORNAMETASKmultichoice.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Otra pregunta</div>', options: ['Mejor que lo habitual', 'Igual que lo habitual', 'Menos que lo habitual', 'Mucho menos que lo habitual'], required: true, horizontal: false}],
  data: {trialid: 'SHORNAMETASKmultichoice_002', procedure: 'SHORNAMETASKmultichoice'}
};
SHORNAMETASKmultichoice.push(question02);

// Randomize order of items
if (debug_mode === false) SHORNAMETASKmultichoice = jsPsych.randomization.repeat(SHORNAMETASKmultichoice,1);
SHORNAMETASKmultichoice.unshift(instruction_screen_experiment);
questions.push.apply(questions, SHORNAMETASKmultichoice)

call_function("SHORNAMETASKmultichoice");
