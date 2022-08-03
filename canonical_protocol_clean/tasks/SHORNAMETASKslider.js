/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SHORNAMETASKslider') );
SHORNAMETASKslider = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<p><left><b><big>NAME TASK</big></b><br/><br> Instrucciones detalladas de tarea con slider<br><br> Muchas gracias por tu colaboración.</p>`,
    `<p>Pagina 2 de instrucciones. <BR><BR>Dale a siguiente para empezar la tarea</p>`],
    data:{trialid: 'SHORNAMETASKslider_000', procedure: 'SHORNAMETASKslider'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Una pregunta</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'SHORNAMETASKslider_001', procedure: 'SHORNAMETASKslider'}
};
SHORNAMETASKslider.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>Otra pregunta</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'SHORNAMETASKslider_002', procedure: 'SHORNAMETASKslider'}
};
SHORNAMETASKslider.push(question02);

// Randomize order of items
if (debug_mode == 'false') SHORNAMETASKslider = jsPsych.randomization.repeat(SHORNAMETASKslider,1);
SHORNAMETASKslider.unshift(instruction_screen_experiment);
questions.push.apply(questions, SHORNAMETASKslider)


call_function("SHORNAMETASKslider");
