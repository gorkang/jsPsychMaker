/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// ESCALA DE RED SOCIAL DE LUBBEN – REVISADA (LSNS-R)

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('LSNS') );
LSNS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>ESCALA DE RED SOCIAL DE LUBBEN</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'MDDF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var instruction_screen_experiment_01 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>FAMILIARES:</big></b><BR>Teniendo en cuenta a las personas con las que tú estás relacionado ya sea por nacimiento, casamiento, adopción, etc...<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'LSNS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
LSNS.push(instruction_screen_experiment_01);

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. ¿Con cuántos parientes te encuentras o tiene noticias de ellos, por lo menos, una vez por mes?</p></div>', options: ["ninguno", "uno", "dos", "tres o cuatro", "de cinco a ocho", "nueve o más"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_01', procedure: 'LSNS'}
};
LSNS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. ¿Con qué frecuencia te encuentras o tiene noticias del pariente con el que tiene más contacto?</p></div>', options: ["menos de una vez por mes", "mensualmente", "algunas veces al mes", "semanalmente", "algunas veces por semana", "diariamente"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_02', procedure: 'LSNS'}
};
LSNS.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. ¿Con cuántos parientes te sientes lo suficientemente cómodo como para conversar sobre tus asuntos personales?</p></div>', options: ["ninguno", "uno", "dos", "tres o cuatro", "de cinco a ocho", "nueve o más"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_03', procedure: 'LSNS'}
};
LSNS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. ¿A cuántos parientes sientes lo suficientemente cercano como para llamarlos cuando necesitas ayuda?</p></div>', options: ["ninguno", "uno", "dos", "tres o cuatro", "de cinco a ocho", "nueve o más"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_04', procedure: 'LSNS'}
};
LSNS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>5. Cuando uno de tus parientes tiene que tomar una decisión importante, ¿con qué frecuencia te lo comenta a tí?</p></div>', options: ["nunca", "rara vez", "a veces", "con frecuencia", "con mucha frecuencia", "siempre"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_05', procedure: 'LSNS'}
};
LSNS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. ¿Con qué frecuencia uno de tus parientes está disponible para hablar cuando tú tienes que tomar una decisión importante?</p></div>', options: ["nunca", "rara vez", "a veces", "con frecuencia", "con mucha frecuencia", "siempre"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_06', procedure: 'LSNS'}
};
LSNS.push(question06);

var instruction_screen_experiment_02 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>AMISTADES:</big></b><BR>Teniendo en cuenta a todos tus amigos, inclusive a aquellos que viven en tu vecindario, establecimiento educacional, trabajo, etc.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'LSNS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
LSNS.push(instruction_screen_experiment_02);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. ¿Con cuántos amigos te encuentras o tienes noticias de ellos, por lo menos, una vez por mes?</p></div>', options: ["ninguno", "uno", "dos", "tres o cuatro", "de cinco a ocho", "nueve o más"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_07', procedure: 'LSNS'}
};
LSNS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>8. ¿Con qué frecuencia te encuentras o tienes noticias del amigo con el que tiene más contacto?</p></div>', options: ["menos de una vez por mes", "mensual", "algunas veces al mes", "semanalmente", "algunas veces por semana", "diariamente"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_08', procedure: 'LSNS'}
};
LSNS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>9. ¿Con cuántos amigos te sientes lo suficientemente cómodo como para conversar sobre tus asuntos personales?</p></div>', options: ["ninguno", "uno", "dos", "tres o cuatro", "de cinco a ocho", "nueve o más"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_09', procedure: 'LSNS'}
};
LSNS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>10. ¿A cuántos amigos sientes lo suficientemente cercano como para llamarlos cuando necesitas ayuda?</p></div>', options: ["ninguno", "uno", "dos", "tres o cuatro", "de cinco a ocho", "nueve o má"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_10', procedure: 'LSNS'}
};
LSNS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>11. Cuando uno de tus amigos tiene que tomar una decisión importante, ¿con qué frecuencia te lo comenta a tí?</p></div>', options: ["nunca", "rara vez", "a veces", "con frecuencia", "con mucha frecuencia", "siempre"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_11', procedure: 'LSNS'}
};
LSNS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>12. ¿Con qué frecuencia uno de tus amigos está disponible para hablar cuando tú tienes que tomar una decisión importante?</p></div>', options: ["nunca", "rara vez", "a veces", "con frecuencia", "con mucha frecuencia", "siempre"], required: true, horizontal: false}],
  data: {trialid: 'LSNS_12', procedure: 'LSNS'}
};
LSNS.push(question12);

LSNS.unshift(instruction_screen_experiment);
LSNS.push.apply(questions, LSNS);
call_function("LSNS");
