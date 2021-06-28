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

questions.push(
  {
    timeline: [{
      type: 'fullscreen',
      message: '<p>¡Gracias por participar!</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'Welcome'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'Welcome'
  }
);

Welcome = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Gracias por tu participación</big></b><br />'+
    'Muchas gracias por formar parte de este estudio. Si tienes alguna duda o comentario, nos puedes escribir a CORREO@CORREO.cl' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'Welcome'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'Welcome'
};

Welcome.unshift(instruction_screen_experiment);
questions.push.apply(questions, Welcome);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Welcome'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Welcome'}).json();
      }
      let first_experiment = true;
      let last_experiment = false;
      saveData(data, online, 'Welcome', version = 'original', first_experiment, last_experiment);
    },
    procedure: 'Welcome'
});
