/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Goodbye') );
Goodbye = [];    //temporal timeline

unique_code = jsPsych.randomization.randomID(20);

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Thank you very much for taking part in our study.</big></b><br/><br/>'+ 'If you have any further queries or observations arising from this study, please feel free to write to Prof. Nieves Valdés (nieves.valdes@uai.cl) </p>Press the END STUDY button to record your answers.'],
  button_label_next: 'End Study',
  data: {trialid: 'Goodbye_01', procedure: 'Goodbye', stimulus: '', response: unique_code},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

Goodbye.unshift(instruction_screen_experiment);
Goodbye.push.apply(questions, Goodbye);

call_function("Goodbye");
