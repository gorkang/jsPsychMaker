/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escala abreviada de Sobrecarga del Cuidador de Zarit

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ESZ') );
ESZ = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Zarit</big></b><BR>A continuación presentamos una lista de afirmaciones, en las que se refleja los sentimientos del cuidador. Realice las preguntas y valore su situación como cuidadora.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'ESZ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. ¿Piensa que debido al tiempo que dedica a su familiar no tiene suficiente tiempo para usted?</p></div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'ESZ_01', procedure: 'ESZ'}
};
ESZ.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Se siente agobiado por intentar compatibilizar el cuidado de su familiar con otras responsabilidades (trabajo, familia)?</p></div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'ESZ_02', procedure: 'ESZ'}
};
ESZ.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. ¿Piensa que el cuidar de su familiar afecta negativamente la relación que Ud. tiene con otros miembros de su familia?</p></div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'ESZ_03', procedure: 'ESZ'}
};
ESZ.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. ¿Piensa que su salud ha empeorado debido a tener que cuidar a su familiar?</p></div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'ESZ_04', procedure: 'ESZ'}
};
ESZ.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>5. ¿Se siente tenso cuando está cerca de su familiar?</p></div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'ESZ_05', procedure: 'ESZ'}
};
ESZ.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. ¿Siente que ha perdido el control de su vida desde que comenzó la enfermedad de su familiar?</p></div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'ESZ_06', procedure: 'ESZ'}
};
ESZ.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified"><p>7. Globalmente ¿Qué grado de “carga” experimenta por el hecho de cuidar a su familiar?</p></div>',
  require_movement: true, slider_number: true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Bajo", "Máximo"], button_label: "Siguiente",
  data: {trialid: 'ESZ_07', procedure: 'ESZ'}
};
ESZ.push(question07);

ESZ.unshift(instruction_screen_experiment);
ESZ.push.apply(questions, ESZ);
call_function("ESZ");
