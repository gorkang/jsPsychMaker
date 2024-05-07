/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CAMIR') );
CAMIR = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<left><b><big>Cuestionario de apego CaMir-R</big></b><br/>Este cuestionario es sobre las ideas y sentimientos que tienes de tus relaciones personales y familiares. Tanto del presente, como de tu infancia.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'CAMIR'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Las amenazas de separación, de traslado a otro lugar, o de ruptura de los lazos familiares son parte de mis recuerdos infantiles.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_001', procedure: 'CAMIR'}
};
CAMIR.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mis padres eran incapaces de tener autoridad cuando era necesario.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_002', procedure: 'CAMIR'}
};
CAMIR.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En caso de necesidad, estoy seguro(a) de que puedo contar con mis seres queridos para encontrar consuelo.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_003', procedure: 'CAMIR'}
};
CAMIR.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Desearía que mis hijos fueran más autónomos de lo que yo lo he sido.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_004', procedure: 'CAMIR'}
};
CAMIR.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En la vida de familia, el respeto a los padres es muy importante.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_005', procedure: 'CAMIR'}
};
CAMIR.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), sabía que siempre encontraría consuelo en mis seres queridos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_006', procedure: 'CAMIR'}
};
CAMIR.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Las relaciones con mis seres queridos durante mi niñez, me parecen, en general, positivas.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_007', procedure: 'CAMIR'}
};
CAMIR.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Detesto el sentimiento de depender de los demás.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_008', procedure: 'CAMIR'}
};
CAMIR.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Sólo cuento conmigo mismo para resolver mis problemas.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_009', procedure: 'CAMIR'}
};
CAMIR.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), a menudo, mis seres queridos se mostraban impacientes e irritables.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_010', procedure: 'CAMIR'}
};
CAMIR.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mis seres queridos siempre me han dado lo mejor de sí mismos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_011', procedure: 'CAMIR'}
};
CAMIR.push(question011);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No puedo concentrarme sobre otra cosa, sabiendo que alguno de mis seres queridos tiene problemas.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_012', procedure: 'CAMIR'}
};
CAMIR.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), encontré suficiente cariño en mis seres queridos como para no buscarlo en otra parte.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_013', procedure: 'CAMIR'}
};
CAMIR.push(question013);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Siempre estoy preocupado(a) por la pena que puedo causar a mis seres queridos al dejarlos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_014', procedure: 'CAMIR'}
};
CAMIR.push(question014);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando era niño(a), tenían una actitud de dejarme hacer.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_015', procedure: 'CAMIR'}
};
CAMIR.push(question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'De adolescente, nadie de mi entorno entendía del todo mis preocupaciones.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_016', procedure: 'CAMIR'}
};
CAMIR.push(question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), teníamos mucha dificultad para tomar decisiones en familia.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_017', procedure: 'CAMIR'}
};
CAMIR.push(question017);

var question018 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tengo la sensación de que nunca superaría la muerte de uno de mis seres queridos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_018', procedure: 'CAMIR'}
};
CAMIR.push(question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los niños deben sentir que existe una autoridad respetada dentro de la familia.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_019', procedure: 'CAMIR'}
};
CAMIR.push(question019);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mis padres no se han dado cuenta que un niño(a) cuando crece tiene necesidad de tener vida propia.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_020', procedure: 'CAMIR'}
};
CAMIR.push(question020);

var question021 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Siento confianza en mis seres queridos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_021', procedure: 'CAMIR'}
};
CAMIR.push(question021);

var question022 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mis padres me han dado demasiada libertad para hacer todo lo que yo quería.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_022', procedure: 'CAMIR'}
};
CAMIR.push(question022);

var question023 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), tuve que enfrentarme a la violencia de uno de mis seres queridos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_023', procedure: 'CAMIR'}
};
CAMIR.push(question023);

var question024 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'A partir de mi experiencia de niño(a), he comprendido que nunca somos suficientemente buenos para los padres.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_024', procedure: 'CAMIR'}
};
CAMIR.push(question024);

var question025 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), se preocuparon tanto por mi salud y mi seguridad, que me sentía aprisionado(a).', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_025', procedure: 'CAMIR'}
};
CAMIR.push(question025);

var question026 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando me alejo de mis seres queridos, no me siento bien conmigo mismo.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_026', procedure: 'CAMIR'}
};
CAMIR.push(question026);

var question027 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mis padres no podían evitar controlarlo todo: mi apariencia, mis resultados escolares e incluso mis amigos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_027', procedure: 'CAMIR'}
};
CAMIR.push(question027);

var question028 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando era niño(a), había peleas insoportables en casa.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_028', procedure: 'CAMIR'}
};
CAMIR.push(question028);

var question029 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Es importante que el niño aprenda a obedecer.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_029', procedure: 'CAMIR'}
};
CAMIR.push(question029);

var question030 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando yo era niño(a), mis seres queridos me hacían sentir que les gustaba compartir su tiempo conmigo.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_030', procedure: 'CAMIR'}
};
CAMIR.push(question030);

var question031 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La idea de una separación momentánea con uno de mis seres queridos, me deja una sensación de inquietud.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_031', procedure: 'CAMIR'}
};
CAMIR.push(question031);

var question032 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'A menudo, me siento preocupado(a), sin razón, por la salud de mis seres queridos.', options: ['&nbsp;Muy falso', '&nbsp;Falso', '&nbsp;Ni verdadero ni falso', '&nbsp;Verdadero', '&nbsp;Muy verdadero'], required: true, horizontal: true}],
  data: {trialid: 'CAMIR_032', procedure: 'CAMIR'}
};
CAMIR.push(question032);

// Randomize order of items
//if (debug_mode === false) CAMIR = jsPsych.randomization.repeat(CAMIR,1);
CAMIR.unshift(instruction_screen_experiment);
questions.push.apply(questions, CAMIR);

call_function('CAMIR');