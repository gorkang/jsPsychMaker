/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escala de Soledad

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('UCLA') );
UCLA = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Soledad</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'UCLA'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. ¿Con qué frecuencia sientes que te falta compañía?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_01', procedure: 'UCLA'}
};
UCLA.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. ¿Con qué frecuencia te sientes dejado fuera?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_02', procedure: 'UCLA'}
};
UCLA.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. ¿Con qué frecuencia te sientes aislado de los demás?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_03', procedure: 'UCLA'}
};
UCLA.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. ¿Con qué frecuencia te sientes solo?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_04', procedure: 'UCLA'}
};
UCLA.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>5. ¿Con qué frecuencia sientes que ya no eres cercano a nadie?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_05', procedure: 'UCLA'}
};
UCLA.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. ¿Con qué frecuencia sientes que nadie te conoce muy bien?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_06', procedure: 'UCLA'}
};
UCLA.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. ¿Con qué frecuencia sientes que la gente está a tu alrededor, pero no contigo?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_07', procedure: 'UCLA'}
};
UCLA.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>8. ¿Con qué frecuencia siente que estás "en sintonía" con las personas que te rodean?</p></div>', options: ["Nunca", "Raramente", "A veces", "Siempre"], required: true, horizontal: false}],
  data: {trialid: 'UCLA_08', procedure: 'UCLA'}
};
UCLA.push(question08);

UCLA.unshift(instruction_screen_experiment);
UCLA.push.apply(questions, UCLA);
call_function("UCLA");
