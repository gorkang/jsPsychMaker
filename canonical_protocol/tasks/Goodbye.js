/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

unique_code = jsPsych.randomization.randomID(20);

// Translations --------------------------------------------------------------

switch (language) {

    case "Spanish":
  
      button_label_next = 'End Study';

      Goodbye_001_pages = [`<p><left><b><big>Gracias por tu participación</big></b><br/><br/>
      Tu código anónimo de participación es: <B>` + unique_code + `</B><br/><br/>
      Si tienes alguna duda o comentario, nos puedes escribir a ` + var_researcher_email + `</p>
      Presiona el botón ` + button_label_next + ` para registrar tus respuestas.<BR><BR>`];
      break;
  
  
    case "English":
  
      button_label_next = 'End Study';
  
      Goodbye_001_pages = [`<p><left><b><big>Thanks for your participation</big></b><br/><br/>
      Your anonymous participation code is: <B>` + unique_code + `</B><br/><br/>
      If you have any further queries or observations arising from this study, please feel free to write to ` + var_researcher_email + `</p>
      Press the ` + button_label_next + ` button to record your answers.<BR><BR>`];
      break;
  
  }
  
  
  
// Task -----------------------------------------------------------------------
  
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Goodbye') );
Goodbye = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: Goodbye_001_pages,
    button_label_next: button_label_next,
    data: {trialid: 'Goodbye_001', procedure: 'Goodbye', stimulus: '', response: unique_code},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

Goodbye.unshift(instruction_screen_experiment);
Goodbye.push.apply(questions, Goodbye);
call_function("Goodbye");
