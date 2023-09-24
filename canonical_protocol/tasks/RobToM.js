questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('RobToM') );
RobToM = []; //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>RobToM</big></b><br />'+
    '<br> Las siguientes preguntas se refieren a sus creencias respecto de las capacidades de un robot o inteligencia artificial. Por favor señale que tan de acuerdo usted está con las siguientes frases. Recuerde que no existen respuestas buenas o malas.</p>'],
    data:{trialid: 'Instructions_01', procedure: 'RobToM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Un robot o inteligencia artificial, es capaz de pensar por sí mismo.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RobToM_001', procedure: 'RobToM'}
};
RobToM.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Un robot o inteligencia artificial, puede experimentar emociones.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RobToM_002', procedure: 'RobToM'}
};
RobToM.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Un robot o inteligencia artificial, puede tomar decisiones de manera autónoma.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RobToM_003', procedure: 'RobToM'}
};
RobToM.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Un robot o inteligencia artificial, tiene libre albedrío.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RobToM_004', procedure: 'RobToM'}
};
RobToM.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Un robot o inteligencia artificial, es consciente de sí mismo, sabe lo que es.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RobToM_005', procedure: 'RobToM'}
};
RobToM.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: 'Un robot o inteligencia artificial, hace las cosas con un propósito en mente.', options: ['&nbsp;Profundamente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Neutral', '&nbsp;De acuerdo', '&nbsp;Profundamente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RobToM_006', procedure: 'RobToM'}
};
RobToM.push(question006);

RobToM.unshift(instruction_screen_experiment);
questions.push.apply(questions, RobToM)

call_function("RobToM");
