/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Goodbye') );
Goodbye = [];    //temporal timeline

unique_code = jsPsych.randomization.randomID(20);

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Gracias por tu participación</big></b><br/><br/>'+ 'Tu código anónimo de participación es: <B>'+ unique_code + '</B><br/><br/>Este código será registrado en nuestro sistema separado de las respuestas que has dado a la encuesta. <br/><br/>Muchas gracias por formar parte de este estudio. Si tienes alguna duda o comentario, nos puedes escribir a ' + var_researcher_email + '</p>Presiona el botón FINALIZAR ESTUDIO para registrar tus respuestas.'],
    button_label_next: 'FINALIZAR ESTUDIO',
    data: {trialid: 'Goodbye_01', procedure: 'Goodbye', stimulus: '', response: unique_code},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

Goodbye.unshift(instruction_screen_experiment);
Goodbye.push.apply(questions, Goodbye);
call_function("Goodbye");
