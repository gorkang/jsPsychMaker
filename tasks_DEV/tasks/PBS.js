/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PBS') );
PBS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>PBS</big></b><br />'+'Por favor indique para cada frase su nivel de acuerdo o desacuerdo con cada ítem. Para ello utilice la escala de números presentada debajo de cada pregunta. No hay respuestas correctas o incorrectas. Este cuestionario representa sus propias creencias y actitudes. Gracias.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'PBS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El alma sigue existiendo aunque el cuerpo pueda morir.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_001', procedure: 'PBS'}
};
PBS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Algunos individuos pueden levitar (levantar) objetos a través de fuerzas mentales.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_002', procedure: 'PBS'}
};
PBS.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La magia negra realmente existe.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_003', procedure: 'PBS'}
};
PBS.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Los gatos negros traen mala suerte.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_004', procedure: 'PBS'}
};
PBS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Tu mente o alma puede salir del cuerpo y viajar (proyección astral).</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_005', procedure: 'PBS'}
};
PBS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El abominable hombre de las nieves, o pie grande del Tíbet, existe.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_006', procedure: 'PBS'}
};
PBS.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La astrología es una forma precisa de predecir el futuro.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_007', procedure: 'PBS'}
};
PBS.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Existe el diablo.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_008', procedure: 'PBS'}
};
PBS.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La telekinesis, mover objetos a través de poderes psíquicos, existe.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_009', procedure: 'PBS'}
};
PBS.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Las brujas existen.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_010', procedure: 'PBS'}
};
PBS.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Si quiebras un espejo, tendrás mala suerte.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_011', procedure: 'PBS'}
};
PBS.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Durante estados alterados, como el sueño o los trances, el espíritu puede salir del cuerpo.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_012', procedure: 'PBS'}
};
PBS.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El monstruo del lago Ness en Escocia, existe.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_013', procedure: 'PBS'}
};
PBS.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El horóscopo dice el futuro de las personas de forma precisa.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_014', procedure: 'PBS'}
};
PBS.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Creo en Dios.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_015', procedure: 'PBS'}
};
PBS.push(question015);

var question016 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Los pensamientos de una persona pueden influir en el movimiento de un objeto físico.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_016', procedure: 'PBS'}
};
PBS.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">A través del uso de pócimas y conjuros, es posible lanzar hechizos sobre las personas.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_017', procedure: 'PBS'}
};
PBS.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El número “13” es de mala suerte.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_018', procedure: 'PBS'}
};
PBS.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">La reencarnación existe.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_019', procedure: 'PBS'}
};
PBS.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Hay vida en otros planetas.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_020', procedure: 'PBS'}
};
PBS.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Algunos psíquicos pueden predecir el futuro de forma precisa.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_021', procedure: 'PBS'}
};
PBS.push(question021);

var question022 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Existe un Cielo y un Infierno.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_022', procedure: 'PBS'}
};
PBS.push(question022);

var question023 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Leer la mente no es posible.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_023', procedure: 'PBS'}
};
PBS.push(question023);

var question024 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Hay casos reales de brujería.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_024', procedure: 'PBS'}
};
PBS.push(question024);

var question025 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Es posible comunicarse con los muertos.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_025', procedure: 'PBS'}
};
PBS.push(question025);

var question026 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Algunas personas tienen la inexplicable habilidad de predecir el futuro.</div>', options: ['&nbsp;1 Muy en desacuerdo', '&nbsp;2 Moderadamente en desacuerdo', '&nbsp;3 Un poco en desacuerdo', '&nbsp;4 No sé / No tengo certeza', '&nbsp;5 Un poco de acuerdo', '&nbsp;6 Moderadamente de acuerdo', '&nbsp;7 Muy de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PBS_026', procedure: 'PBS'}
};
PBS.push(question026);

PBS.unshift(instruction_screen_experiment);
questions.push.apply(questions, PBS);

questions.push({
    type: 'call-function',
    data: {trialid: 'PBS_000', procedure: 'PBS'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'PBS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'PBS'}).json();
      }
      saveData(data, online, 'PBS');
    }
});
