/**
 * CSCN lab
/**
This document was made with test_maker
*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

Goodbye = [];    //temporal timeline

unique_code = jsPsych.randomization.randomID(20);

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Gracias por tu participación</big></b><br/><br/>'+ 'Tu código anónimo de participación es: <B>'+ unique_code + '</B><br/><br/>Este código será registrado en nuestro sistema separado de las respuestas que has dado a la encuesta. Enviaselo por correo a estudioparto@uai.cl para verificar tu participación<br/><br/>Muchas gracias por formar parte de este estudio. Si tienes alguna duda o comentario, nos puedes escribir a email.investigador/a@uai.cl' +'</p>Presiona el botón FINALIZAR ESTUDIO para registrar tus respuestas.'],
    button_label_next: 'FINALIZAR ESTUDIO',
    data: {trialid: 'Goodbye_01', procedure: 'Goodbye', stimulus: '', response: unique_code},
    procedure: 'Goodbye',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

Goodbye.unshift(instruction_screen_experiment);
Goodbye.push.apply(questions, Goodbye)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Goodbye'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Goodbye'}).json();
      }
      saveData(data, online, 'Goodbye');
    },
    procedure: 'Goodbye'
});
