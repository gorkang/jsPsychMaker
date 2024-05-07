/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('GASP') );
GASP = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Escala de propensión a la culpa y a la vergüenza:</big></b><br/>A continuación, se encuentra una serie de enunciados. Por favor indique cuán a menudo dichos enunciados se aplican a usted en su vida cotidiana.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'GASP'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Después de darte cuenta de que te han devuelto demasiado cambio tras una compra, decides quedártelo porque el dependiente no se ha dado cuenta. ¿Cuál es la probabilidad de que te sintieses incómodo/a al quedarte el dinero?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_001', procedure: 'GASP'}
};
GASP.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Te informan en privado de que eres el/la único/a a quien no han otorgado la entrada a la sociedad de honor de la escuela porque te has saltado demasiados días de clases. ¿Cuál es la probabilidad de que este hecho te llevase a ser más responsable con la asistencia a las clases?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_002', procedure: 'GASP'}
};
GASP.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Arrancas un artículo de una revista en una librería y te lo llevas contigo. Tu profesor lo descubre y se lo cuenta al librero y a todos tus compañeros de clase. ¿Cuál es la probabilidad de que esto te hiciese sentir como una mala persona?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_003', procedure: 'GASP'}
};
GASP.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Después de cometer un grave error en un importante proyecto de trabajo en el que la gente dependía de ti, tu jefe te critica delante de todos tus compañeros. ¿Cuál es la probabilidad de que fingieses estar enfermo y dejases el trabajo?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_004', procedure: 'GASP'}
};
GASP.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Revelas el secreto de un amigo, aunque este no se entera. ¿Cuál es la probabilidad de que tu fallo al guardar el secreto te llevase a esforzarte más en mantener los secretos en el futuro?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_005', procedure: 'GASP'}
};
GASP.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Haces una mala presentación en el trabajo. Después tu jefe les dice a tus compañeros de trabajo que fue culpa tuya perder el contrato con esa empresa. ¿Cuál es la probabilidad de que te sintieses incompetente?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_006', procedure: 'GASP'}
};
GASP.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Un amigo te dice que presumes demasiado. ¿Cuál es la probabilidad de que dejases de pasar tiempo con ese amigo?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_007', procedure: 'GASP'}
};
GASP.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tu casa está muy desordenada e invitados inesperados llaman a tu puerta y les invitas a pasar. ¿Cuál es la probabilidad de que evitases a los invitados hasta que se fuesen?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_008', procedure: 'GASP'}
};
GASP.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En secreto cometes un delito grave. ¿Cuál es la probabilidad de que sintieras arrepentimiento por haber roto la ley?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_009', procedure: 'GASP'}
};
GASP.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En una demanda exageras exitosamente los daños que sufriste. Meses más tarde, tu mentira se descubre y eres acusado de perjuicio. ¿Cuál es la probabilidad de que sintieras que eres un ser humano despreciable?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_010', procedure: 'GASP'}
};
GASP.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Defiendes firmemente un punto de vista en una discusión, y aunque nadie lo nota, te das cuenta de que estabas equivocado. ¿Cuál es la probabilidad de que esta situación te hiciese pensar más detenidamente antes de hablar?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_011', procedure: 'GASP'}
};
GASP.push(question011);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Te llevas a casa material de oficina para uso personal y tu jefe te descubre. ¿Cuál es la probabilidad de que esta situación te llevase a dimitir de tu empleo?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_012', procedure: 'GASP'}
};
GASP.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cometes un error en el trabajo y descubres que han culpado a un compañero tuyo por ese error. Después, tu compañero se enfrenta a ti debido al error. ¿Cuál es la probabilidad de que te sintieras como un cobarde?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_013', procedure: 'GASP'}
};
GASP.push(question013);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En la fiesta de inauguración de la casa de un compañero derramas vino tinto sobre su nueva alfombra de color crema. Cubres la mancha con una silla para que nadie más se dé cuenta del desastre. ¿Cuál es la probabilidad de que sintieras que la forma en la que actuaste fue patética?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_014', procedure: 'GASP'}
};
GASP.push(question014);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mientras discutes un tema importante con tus amigos, te das cuenta de que les estas gritando, aunque nadie más lo nota. ¿Cuál es la probabilidad de que intentases actuar de una manera más considerada hacia tus amigos?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_015', procedure: 'GASP'}
};
GASP.push(question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mientes a gente que nunca se entera de ello. ¿Cuál es la probabilidad de que te sintieras terrible acerca de las mentiras que les has dicho?', options: ['&nbsp;Muy improbable', '&nbsp;Improbable', '&nbsp;Ligeramente probable', '&nbsp;Cerca del 50% de probabilidades', '&nbsp;Ligeramente probable', '&nbsp;Probable', '&nbsp;Muy probable'], required: true}],
  data: {trialid: 'GASP_016', procedure: 'GASP'}
};
GASP.push(question016);

// Randomize order of items
//if (debug_mode === false) GASP = jsPsych.randomization.repeat(GASP,1);
GASP.unshift(instruction_screen_experiment);
questions.push.apply(questions, GASP);

call_function('GASP');