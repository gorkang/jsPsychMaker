/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CTS2') );
CTS2 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Escala de Tácticas de Conflicto 2</big></b><br/>Por favor, marca cuántas veces, durante  el último año has experimentado lo que se menciona.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'CTS2'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me demuestra que le importo aunque estemos en desacuerdo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_001', procedure: 'CTS2'}
};
CTS2.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me explica sus puntos de desacuerdo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_002', procedure: 'CTS2'}
};
CTS2.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha insultado.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_003', procedure: 'CTS2'}
};
CTS2.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me lanzó algo para hacerme daño.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_004', procedure: 'CTS2'}
};
CTS2.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me torció el brazo o tiró del pelo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_005', procedure: 'CTS2'}
};
CTS2.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tuve un esguince, hematoma, o pequeño corte a causa de una pelea con mi pareja.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_006', procedure: 'CTS2'}
};
CTS2.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja mostró respeto por mis sentimientos acerca de un problema.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_007', procedure: 'CTS2'}
};
CTS2.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me hizo tener sexo sin condón.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_008', procedure: 'CTS2'}
};
CTS2.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me apartó o empujó.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_009', procedure: 'CTS2'}
};
CTS2.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me forzó (o golpeó, sujetó o usó un arma) para obligarme a tener sexo oral o anal.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_010', procedure: 'CTS2'}
};
CTS2.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja ha usado un cuchillo o un arma para hacerme daño.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_011', procedure: 'CTS2'}
};
CTS2.push(question011);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me desmayé al ser golpeada en la cabeza por mi pareja en una pelea.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_012', procedure: 'CTS2'}
};
CTS2.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha dicho, fea o gorda.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_013', procedure: 'CTS2'}
};
CTS2.push(question013);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha pegado un puñetazo o con algo que podría hacerme daño.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_014', procedure: 'CTS2'}
};
CTS2.push(question014);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha destruido algo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_015', procedure: 'CTS2'}
};
CTS2.push(question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Fui al doctor a causa de una pelea con mi pareja.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_016', procedure: 'CTS2'}
};
CTS2.push(question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha estrangulado.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_017', procedure: 'CTS2'}
};
CTS2.push(question017);

var question018 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha gritado.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_018', procedure: 'CTS2'}
};
CTS2.push(question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha golpeado contra la pared.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_019', procedure: 'CTS2'}
};
CTS2.push(question019);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja estaba segura que podríamos resolver un problema.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_020', procedure: 'CTS2'}
};
CTS2.push(question020);

var question021 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'He necesitado ver a un doctor a causa de una pelea con mi pareja, pero no lo he hecho.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_021', procedure: 'CTS2'}
};
CTS2.push(question021);

var question022 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha dado una paliza.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_022', procedure: 'CTS2'}
};
CTS2.push(question022);

var question023 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha jaloneado, o agarrado con fuerza a mi pareja.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_023', procedure: 'CTS2'}
};
CTS2.push(question023);

var question024 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja ha usado la fuerza (como golpear, sujetar, o usar un arma) para hacer que yo tenga sexo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_024', procedure: 'CTS2'}
};
CTS2.push(question024);

var question025 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja ha salido furioso de la habitación o la casa durante una pelea.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_025', procedure: 'CTS2'}
};
CTS2.push(question025);

var question026 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja ha insistido en tener sexo aun cuando yo no quería (pero sin usar fuerza física).', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_026', procedure: 'CTS2'}
};
CTS2.push(question026);

var question027 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me he roto un hueso durante una pelea con mi pareja.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_027', procedure: 'CTS2'}
};
CTS2.push(question027);

var question028 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja ha usado amenazas para hacer que yo tenga sexo oral o anal con él.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_028', procedure: 'CTS2'}
};
CTS2.push(question028);

var question029 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja sugirió un arreglo frente a un desacuerdo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_029', procedure: 'CTS2'}
};
CTS2.push(question029);

var question030 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me quemó a propósito.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_030', procedure: 'CTS2'}
};
CTS2.push(question030);

var question031 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha insistido para tener sexo oral o anal (pero no ha usado fuerza física).', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_031', procedure: 'CTS2'}
};
CTS2.push(question031);

var question032 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha dicho que soy una pésima amante.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_032', procedure: 'CTS2'}
};
CTS2.push(question032);

var question033 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja hizo algo solo para fastidiarme.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_033', procedure: 'CTS2'}
};
CTS2.push(question033);

var question034 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja amenazó con golpearme o tirarme algo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_034', procedure: 'CTS2'}
};
CTS2.push(question034);

var question035 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Sentí un dolor físico que duró hasta el día siguiente a causa de una pelea con mi pareja.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_035', procedure: 'CTS2'}
};
CTS2.push(question035);

var question036 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja me ha dado patadas.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_036', procedure: 'CTS2'}
};
CTS2.push(question036);

var question037 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi pareja ha usado amenazas para tener sexo conmigo.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_037', procedure: 'CTS2'}
};
CTS2.push(question037);

var question038 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Accedí a probar una solución que sugirió mi pareja frente a un problema.', options: ['&nbsp;Esto nunca ha ocurrido', '&nbsp;Una vez en el último año', '&nbsp;Dos veces en el último año', '&nbsp;3 a 5 veces en el último año', '&nbsp;6 a 10 veces en el último año', '&nbsp;11 a 20 veces en el último año', '&nbsp;Más de 20 veces en el último año', '&nbsp;No en el último año, pero si ha ocurrido antes'], required: true}],
  data: {trialid: 'CTS2_038', procedure: 'CTS2'}
};
CTS2.push(question038);

// Randomize order of items
//if (debug_mode === false) CTS2 = jsPsych.randomization.repeat(CTS2,1);
CTS2.unshift(instruction_screen_experiment);
questions.push.apply(questions, CTS2);

call_function('CTS2');