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
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'PSS'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'PSS'
  }
);

PSS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big></big></b><br />'+
    'Las preguntas en esta escala hacen referencia a sus sentimientos y pensamientos durante el último mes. En cada caso por favor indique cómo usted se ha sentido o ha pensado en cada situación.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'PSS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'PSS'
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. En el último mes, ¿con qué frecuencia ha estado afectado/a por algo que ha ocurrido inesperadamente?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_01', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_02', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. En el último mes, ¿con qué frecuencia se ha sentido nervioso/a o estresado/a?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_03', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. En el último mes, ¿con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_04', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los cambios importantes que han estado ocurriendo en su vida?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_05', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. En el último mes, ¿con qué frecuencia ha estado seguro/a sobre su capacidad para manejar sus problemas personales?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_06', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_07', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_08', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_09', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. En el último mes, ¿con qué frecuencia se ha sentido al control de todo?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_10', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. En el último mes, ¿con qué frecuencia ha estado enfadado/a porque las cosas que le han ocurrido estaban fuera de su control?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_11', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. En el último mes, ¿con qué frecuencia ha pensado sobre las cosas que le quedan por lograr?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_12', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. En el último mes, ¿con qué frecuencia ha podido controlar la forma de pasar el tiempo?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_13', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?</div>', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;De vez en cuando', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PSS_14', procedure: 'PSS'},
  procedure: 'PSS'
};
PSS.push(question14);

PSS.unshift(instruction_screen_experiment);
questions.push.apply(questions, PSS);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'PSS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'PSS'}).json();
      }
      saveData(data, online, 'PSS');
    },
    procedure: 'PSS'
});
