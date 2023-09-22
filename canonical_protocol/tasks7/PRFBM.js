/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('PRFBM') );
PRFBM = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left>' +
  '<p><left><b><big>Preferencia modalidad de parto</big></b><br />'+'Por favor, contesta a las siguientes preguntas' +'</p>'],
  data: {trialid: 'Instructions_01', procedure: 'PRFBM'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Imagina que estas embarazada, cerca de la fecha de parto, en buen estado de salud y tu bebé se desarrolla normalmente. <BR><BR>Si pudieras elegir la modalidad de parto, preferirías que fuera:</div>', options: ['&nbsp;Parto vaginal (extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia)', '&nbsp;Parto por cesárea (extracción del bebé por medio de una cirugía con anestesia. Se realiza una incisión abdominal y una incisión para abrir el útero)'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'PRFBM_01', procedure: 'PRFBM'}
};
PRFBM.push(question01);

var question02 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: '<div class="justified">¿Cuán fuerte es tu preferencia por el parto vaginal?</div></br>', require_movement: true, slider_number: true, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Nada fuerte", "Muy fuerte"], button_label: "Next",
  data: {trialid: 'PRFBM_02', procedure: 'PRFBM'}
};

var if_question02 = {
  timeline: [question02],
  data: {trialid: 'PRFBM_02_if', procedure: 'PRFBM'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'PRFBM_01'))['response']['Q0']).toString().trim();
    if((data) ==  'Parto vaginal (extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia)'){
      return true;
    } else {
      return false;
    }
  }
}
PRFBM.push(if_question02);

var question03 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: '<div class="justified">¿Cuán fuerte es tu preferencia por el parto por cesárea?</div></br>', require_movement: true, slider_number: true, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["Nada fuerte", "Muy fuerte"], button_label: "Next",
  data: {trialid: 'PRFBM_03', procedure: 'PRFBM'}
};

var if_question03 = {
  timeline: [question03],
  data: {trialid: 'PRFBM_03_if', procedure: 'PRFBM'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'PRFBM_01'))['response']['Q0']).toString().trim();
    if((data) ==  'Parto por cesárea (extracción del bebé por medio de una cirugía con anestesia. Se realiza una incisión abdominal y una incisión para abrir el útero)'){
      return true;
    } else {
      return false;
    }
  }
}

PRFBM.push(if_question03);

PRFBM.unshift(instruction_screen_experiment);
questions.push.apply(questions, PRFBM)

PRFBM = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left>' +
  '<p><left><b><big>Motivos para tu preferencia</big></b><br />'+'Por favor, indica en que grado cada uno de estos motivos influye en tu preferencia.' +'</p>'],
  data: {trialid: 'Instructions_02', procedure: 'PRFBM'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var preference_options = ["Muy en desacuerdo", "En desacuerdo", "Parcialmente en desacuerdo", "Parcialmente de acuerdo", "De acuerdo", "Muy de acuerdo"];

var question04 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {prompt: 'Los <B><span style="color: #BB5566">daños</span> físicos</B> para la <B><U>madre</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'daño', button_label: "Next", required: true},
    {prompt: 'Los <B><span style="color: #004488">beneficios</span> físicos</B> para la <B><U>madre</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'beneficio', button_label: "Next", required: true}
  ],
  randomize_question_order: true,
  data: {trialid: 'PRFBM_04', procedure: 'PRFBM'}
};
PRFBM.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {prompt: 'Los <B><span style="color: #BB5566">daños</span> físicos</B> para el <B><U>bebé</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'daño', button_label: "Next", required: true},
    {prompt: 'Los <B><span style="color: #004488">beneficios</span> físicos</B> para el <B><U>bebé</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'beneficio', button_label: "Next", required: true}
  ],
  randomize_question_order: true,
  data: {trialid: 'PRFBM_05', procedure: 'PRFBM'}
};
PRFBM.push(question05);

var question06 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {prompt: 'Los <B><span style="color: #BB5566">daños</span> psico-afectivos</B> para la <B><U>madre</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'daño', button_label: "Next", required: true},
    {prompt: 'Los <B><span style="color: #004488">beneficios</span> psico-afectivos</B> para la <B><U>madre</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'beneficio', button_label: "Next", required: true}
  ],
  randomize_question_order: true,
  data: {trialid: 'PRFBM_06', procedure: 'PRFBM'}
};
PRFBM.push(question06);

var question07 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {prompt: 'Los <B><span style="color: #BB5566">daños</span> psico-afectivos</B> para el <B><U>bebé</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'daño', button_label: "Next", required: true},
    {prompt: 'Los <B><span style="color: #004488">beneficios</span> psico-afectivos</B> para el <B><U>bebé</U></B> son importantes para justificar mi preferencia de modalidad de parto', options: preference_options, name: 'beneficio', button_label: "Next", required: true}
  ],
  randomize_question_order: true,
  data: {trialid: 'PRFBM_07', procedure: 'PRFBM'}
};
PRFBM.push(question07);

// Randomize order of questions
if (debug_mode === false) PRFBM = jsPsych.randomization.repeat(PRFBM,1);

PRFBM.unshift(instruction_screen_experiment);
PRFBM.push.apply(questions, PRFBM);

call_function("PRFBM");
