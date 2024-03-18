/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

unique_code = jsPsych.randomization.randomID(20);
redirect_message = ".<BR><BR>";

// Translations --------------------------------------------------------------

switch (language) {

    case "Spanish":
  
      button_label_next = 'Finalizar estudio';
      if (finish_link !== '') {
        redirect_message = " y ser redirigida/o a " + finish_link.split('/')[2] + " para confirmar tu participación.<BR><BR>";
        button_label_next = "Finalizar estudio y confirmar participación en " + finish_link.split('/')[2];
        }

      Goodbye_001_pages = [`<p><left><b><big>Gracias por tu participación</big></b><br/><br/>
      Tu código de participación es: <B>` + unique_code + `</B>. ` +
      //`Si la verificación automática de la siguiente pantalla falla, nos puedes enviar un correo con este código.<br/><br/>` +
      `Si tienes alguna duda o comentario, nos puedes escribir a ` + var_researcher_email + `</p>
      Presiona el botón para registrar tus respuestas` +
      redirect_message];
      break;
  
  
    case "English":
  
      button_label_next = 'End Study';
      if (finish_link !== '') {
        redirect_message = " and be redirected to " + finish_link.split('/')[2] + " to confirm your submission.<BR><BR>";
        button_label_next = "End Study and confirm submission in " + finish_link.split('/')[2];
      }
  
      Goodbye_001_pages = [`<p><left><b><big>Thanks for your participation</big></b><br/><br/>
      Your participation code is: <B>` + unique_code + `</B>. ` + 
      //`If the automatic verification in the next screen fails, you can email us this code.<br/><br/>` +
      `If you have any further queries or observations arising from this study, please feel free to write to ` + var_researcher_email + `</p>
      Press the button to record your answers` +
      redirect_message];
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
