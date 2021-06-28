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
      data: {procedure: 'rPBS'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'rPBS'
  }
);

rPBS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Revised Paranormal Belief Scale</big></b><br />'+'Por favor indique para cada frase su nivel de acuerdo o desacuerdo con cada ítem. No hay respuestas correctas o incorrectas. Este cuestionario representa sus propias creencias y actitudes. Gracias.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'rPBS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'rPBS'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El alma sigue existiendo aunque el cuerpo pueda morir.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_001', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Algunos individuos pueden levitar (levantar) objetos a través de fuerzas mentales.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_002', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La magia negra realmente existe.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_003', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Los gatos negros traen mala suerte.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_004', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tu mente o alma puede salir del cuerpo y viajar (proyección astral).</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_005', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El abominable hombre de las nieves, o pie grande del Tíbet, existe.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_006', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La astrología es una forma precisa de predecir el futuro.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_007', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Existe el diablo.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_008', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La telekinesis, mover objetos a través de poderes psíquicos, existe.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_009', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Las brujas existen.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_010', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Si quiebras un espejo, tendrás mala suerte.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_011', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Durante estados alterados, como el sueño o los trances, el espíritu puede salir del cuerpo.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_012', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El monstruo del lago Ness en Escocia, existe.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_013', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El horóscopo dice el futuro de las personas de forma precisa.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_014', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Creo en Dios.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_015', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question015);

var question016 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Los pensamientos de una persona pueden influir en el movimiento de un objeto físico.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_016', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">A través del uso de pócimas y conjuros, es posible lanzar hechizos sobre las personas.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_017', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El número “13” es de mala suerte.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_018', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La reencarnación existe.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_019', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Hay vida en otros planetas.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_020', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Algunos psíquicos pueden predecir el futuro de forma precisa.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_021', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question021);

var question022 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Existe un Cielo y un Infierno.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_022', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question022);

var question023 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Leer la mente no es posible.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_023', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question023);

var question024 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Hay casos reales de brujería.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_024', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question024);

var question025 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Es posible comunicarse con los muertos.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_025', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question025);

var question026 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Algunas personas tienen la inexplicable habilidad de predecir el futuro.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'rPBS_026', procedure: 'rPBS'},
  procedure: 'rPBS'
};
rPBS.push(question026);

rPBS.unshift(instruction_screen_experiment);
questions.push.apply(questions, rPBS);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'rPBS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'rPBS'}).json();
      }
      saveData(data, online, 'rPBS');
    },
    procedure: 'rPBS'
});
