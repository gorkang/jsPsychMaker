/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('LOT') );
LOT = []; //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>LOT</big></b><br />'+
    '<br> Por favor responda las siguientes preguntas marcando la opción de respuesta que más lo/a representa. </p>'],
    data:{trialid: 'Instructions_01', procedure: 'LOT'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '1. En tiempos difíciles, suelo esperar lo mejor' , options: ['&nbsp;Nunca', '&nbsp;Raramente', '&nbsp;A veces', '&nbsp;A menudo', '&nbsp;Siempre'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LOT_001', procedure: 'LOT'}
};
LOT.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '2. Si algo malo me tiene que pasar, estoy seguro que me pasara' , options: ['&nbsp;Nunca', '&nbsp;Raramente', '&nbsp;A veces', '&nbsp;A menudo', '&nbsp;Siempre'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LOT_002', procedure: 'LOT'}
};
LOT.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '3. Siempre soy optimista en cuanto al futuro' , options: ['&nbsp;Nunca', '&nbsp;Raramente', '&nbsp;A veces', '&nbsp;A menudo', '&nbsp;Siempre'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LOT_003', procedure: 'LOT'}
};
LOT.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '4. Rara vez espero que las cosas salgan a mi manera' , options: ['&nbsp;Nunca', '&nbsp;Raramente', '&nbsp;A veces', '&nbsp;A menudo', '&nbsp;Siempre'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LOT_004', procedure: 'LOT'}
};
LOT.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '5. Casi nunca espero que me sucedan cosas buenas' , options: ['&nbsp;Nunca', '&nbsp;Raramente', '&nbsp;A veces', '&nbsp;A menudo', '&nbsp;Siempre'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LOT_005', procedure: 'LOT'}
};
LOT.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '6. En general, espero que me ocurran más cosas buenas que malas' , options: ['&nbsp;Nunca', '&nbsp;Raramente', '&nbsp;A veces', '&nbsp;A menudo', '&nbsp;Siempre'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'LOT_006', procedure: 'LOT'}
};
LOT.push(question006);

LOT.unshift(instruction_screen_experiment);
questions.push.apply(questions, LOT)

call_function("LOT");
