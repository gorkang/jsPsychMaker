/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Counterfactual inference test

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CIT') );
CIT = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Test de inferencia contrafactual</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'CIT'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
CIT.push(instruction_screen_experiment);

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. Juana es atacada por un ladrón a solo 10 pasos de su casa. Susana es atacada por un ladrón a un kilómetro de su casa ¿Quién está más molesta por el atraco?</div>', options: ['Juana', 'Susana', 'Ambas están igualmente molestas', 'No lo sé'], required: true, horizontal: false}],
  data: {trialid: 'CIT_01', procedure: 'CIT'}
};
CIT.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. Ana se enferma después de comer en un restaurante que visita con frecuencia. Sara se enferma después de comer en un restaurante que nunca antes había visitado ¿Quién se arrepiente más de haber elegido este restaurante?</div>', options: ['Ana', 'Sara', 'Ambas están igualmente molestas', 'No lo sé'], required: true, horizontal: false}],
  data: {trialid: 'CIT_02', procedure: 'CIT'}
};
CIT.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Juan pierde su tren por 5 minutos. Eduardo pierde su tren por más de una hora. ¿Quién pasa más tiempo pensando en el tren perdido?</div>', options: ['Eduardo', 'Juan', 'Ambas están igualmente molestas', 'No lo sé'], required: true, horizontal: false}],
  data: {trialid: 'CIT_03', procedure: 'CIT'}
};
CIT.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. Pedro sufre un accidente automovilístico mientras manejaba en su camino habitual a casa. Carlos sufre un accidente automovilístico mientras prueba un nuevo camino a casa. ¿Quién piensa más en cómo se podría haber evitado su accidente?</div>', options: ['Carlos', 'Pedro', 'Ambas están igualmente molestas', 'No lo sé'], required: true, horizontal: false}],
  data: {trialid: 'CIT_04', procedure: 'CIT'}
};
CIT.push(question04);

CIT.unshift(instruction_screen_experiment);
CIT.push.apply(questions, CIT);
call_function("CIT");
