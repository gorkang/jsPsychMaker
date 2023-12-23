/**
 * CSCN lab
/**
This document was made with test_maker
*/

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('NARS') );
NARS = []; //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>NARS</big></b><br />'+
    '<br> Las siguientes preguntas se refieren a sus creencias, actitudes, sensaciones y/o emociones respecto de un robot o inteligencia artificial. Por favor señale que tan de acuerdo está usted con las siguientes frases. Recuerde que no existen respuestas buenas o malas. </p>'],
    data:{trialid: 'Instructions_01', procedure: 'NARS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me sentiría intranquilo si los robots tuvieran emociones.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_001', procedure: 'NARS'}
};
NARS.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Si los robots se desarrollaran como seres vivientes, algo malo pasaría.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_002', procedure: 'NARS'}
};
NARS.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me sentiría relajada/o hablando con robots.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_003', procedure: 'NARS'}
};
NARS.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Si me dieran un trabajo donde tuviera que usar robots, me sentiría intranquilo/a.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_004', procedure: 'NARS'}
};
NARS.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Si los robots tuvieran emociones, sería capaz de hacerme amigo/a de ellos.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_005', procedure: 'NARS'}
};
NARS.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me siento consolado/a al estar con robots que tienen emociones.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_006', procedure: 'NARS'}
};
NARS.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'La palabra “robot” no significa nada para mi.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_007', procedure: 'NARS'}
};
NARS.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me sentiria nervioso/a operando un robot frente a otras personas.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_008', procedure: 'NARS'}
};
NARS.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Odiaría la idea de que robots o inteligencia artificial juzgaran cosas.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_009', procedure: 'NARS'}
};
NARS.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me sentiría muy nervioso/a simplemente estando parado/a frente a un robot.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_010', procedure: 'NARS'}
};
NARS.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Siento que si dependo demasiado de los robots, algo malo pasaría.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_011', procedure: 'NARS'}
};
NARS.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me sentiría paranoico/a hablando con un robot.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_012', procedure: 'NARS'}
};
NARS.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Me preocupa que los robots serían una mala influencia para los niños.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_013', procedure: 'NARS'}
};
NARS.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Siento que en el futuro, la sociedad estará dominada por los robots.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'NARS_014', procedure: 'NARS'}
};
NARS.push(question014);

NARS.unshift(instruction_screen_experiment);
questions.push.apply(questions, NARS)

call_function("NARS");
