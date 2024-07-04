/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escala de Soledad: UCLA

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('UCLA') );
UCLA = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  fullscreen_mode: true,
  pages: [`<b><big>Escala de Soledad</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
  button_label_next: 'Continuar',
  data: {trialid: 'Instructions_01', procedure: 'UCLA'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. ¿Con qué frecuencia sientes que te falta compañía?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_001', procedure: 'UCLA'}
};
UCLA.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. ¿Con qué frecuencia te sientes dejado fuera?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_002', procedure: 'UCLA'}
};
UCLA.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. ¿Con qué frecuencia te sientes aislado de los demás?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_003', procedure: 'UCLA'}
};
UCLA.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. ¿Con qué frecuencia te sientes solo?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_004', procedure: 'UCLA'}
};
UCLA.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>5. ¿Con qué frecuencia sientes que ya no eres cercano a nadie?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_005', procedure: 'UCLA'}
};
UCLA.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. ¿Con qué frecuencia sientes que nadie te conoce muy bien?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_006', procedure: 'UCLA'}
};
UCLA.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. ¿Con qué frecuencia sientes que la gente está a tu alrededor, pero no contigo?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_007', procedure: 'UCLA'}
};
UCLA.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>8. ¿Con qué frecuencia siente que estás "en sintonía" con las personas que te rodean?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_008', procedure: 'UCLA'}
};
UCLA.push(question008);

UCLA.unshift(instruction_screen_experiment);
UCLA.push.apply(questions, UCLA);

call_function("UCLA");