/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Prosociality

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PSC') );
PSC = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: ['<b><big>Prosocialidad</big></b><BR><BR>Suponga que se le entrega el valor en dinero correspondiente a un (1) salario mínimo de su país. Usted podría quedarse con la cantidad de dinero que desee y también podría donar la cantidad que quiera a instituciones que ayudan al cuidado y tratamiento de personas con coronavirus. <p>Por esto le pedimos que nos diga con respecto al dinero que podría recibir: a) con cuánto dinero piensa que se quedaría usted mismo, b) cuánto dinero piensa que donaría a la Cruz Roja de su país o la organización encargada de dar soporte médico a la población de su país, y c) cuánto piensa que donaría a la Cruz Roja Internacional o a la organización encargada de dar soporte médico a las personas quienes lo necesiten alrededor del mundo.</p><p>No se preocupe, nadie sabrá cuánto decide quedarse y cuánto decide donar.</p> <p>Al final de la encuesta se seleccionarán 5 participantes. Si usted es uno de estos participantes, usted, la Cruz Roja de su país y la Cruz Roja Internacional podrán recibir la cantidad de dinero correspondiente a su decisión.</p><BR>'],
    button_label_previous: 'Atrás',
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'PSC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Valor de 1 salario mínimo en su país (escríbalo en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true},
  {prompt: '<div class="justified">Cantidad de dinero que piensa que se quedaría para usted mismo (escrita en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true},
  {prompt: '<div class="justified">Cantidad de dinero que piensa que donaría a la Cruz Roja <b>DE SU PAÍS</b> (escrita en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true},
  {prompt: '<div class="justified">Cantidad de dinero que piensa que donaría a la Cruz Roja <b>INTERNACIONAL</b> (escrita en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true}
  ],
  data: {trialid: 'PSC_01', procedure: 'PSC'}
};
PSC.push(question01);

//let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'PSC_00'))["response"])["Q0"]).trim();
/*
var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Cantidad de dinero que piensa que se quedaría para usted mismo (escrita en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true}],
  data: {trialid: 'PSC_02', procedure: 'PSC'}
};
PSC.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Cantidad de dinero que piensa que donaría a la Cruz Roja <b>DE SU PAÍS</b> (escrita en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true}],
  data: {trialid: 'PSC_03', procedure: 'PSC'}
};
PSC.push(question03);

var question04 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Cantidad de dinero que piensa que donaría a la Cruz Roja <b>INTERNACIONAL</b> (escrita en la moneda de su país):</div>', type: 'number', range: [0, Infinity], required: true}],
  data: {trialid: 'PSC_04', procedure: 'PSC'}
};
PSC.push(question04);*/

PSC.unshift(instruction_screen_experiment);
PSC.push.apply(questions, PSC);
call_function("PSC");
