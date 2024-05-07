/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CDRISC10') );
CDRISC10 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Escala de Resilencia</big></b><br/>Seleccione una respuesta para cada enunciado. No hay respuestas correctas o incorrectas.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'CDRISC10'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Soy capaz de adaptarme a los cambios.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_001', procedure: 'CDRISC10'}
};
CDRISC10.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Puedo manejar lo que se presente.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_002', procedure: 'CDRISC10'}
};
CDRISC10.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Trato de ver el lado positivo de los problemas.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_003', procedure: 'CDRISC10'}
};
CDRISC10.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Enfrentar el estrés puede fortalecerme.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_004', procedure: 'CDRISC10'}
};
CDRISC10.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tiendo a recuperarme rápidamente después de la enfermedad o las dificultades.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_005', procedure: 'CDRISC10'}
};
CDRISC10.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Puedo alcanzar mis metas a pesar de los obstáculos.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_006', procedure: 'CDRISC10'}
};
CDRISC10.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Puedo mantener la concentración bajo presión.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_007', procedure: 'CDRISC10'}
};
CDRISC10.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Difícilmente el fracaso me desanima.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_008', procedure: 'CDRISC10'}
};
CDRISC10.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me considero una persona fuerte.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_009', procedure: 'CDRISC10'}
};
CDRISC10.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Puedo manejar los sentimientos desagradables.', options: ['&nbsp;Nunca', '&nbsp;Casi nunca', '&nbsp;A veces', '&nbsp;Frecuentemente', '&nbsp;Casi siempre', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'CDRISC10_010', procedure: 'CDRISC10'}
};
CDRISC10.push(question010);

// Randomize order of items
//if (debug_mode === false) CDRISC10 = jsPsych.randomization.repeat(CDRISC10,1);
CDRISC10.unshift(instruction_screen_experiment);
questions.push.apply(questions, CDRISC10);

call_function('CDRISC10');