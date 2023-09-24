/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Short PROFESSIONAL QUALITY OF LIFE (caregiver version)

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('sProQOL') );
sProQOL = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de sProQOL</big></b><BR>A continuación presentamos una lista de afirmaciones, en las que se refleja los sentimientos del cuidador. Realice las preguntas y valore su situación como cuidadora.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'sProQOL'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. Creo que he sido afectado negativamente por las experiencias traumáticas de aquellos a quienes he ayudado.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_01', procedure: 'sProQOL'}
};
sProQOL.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. Me siento “atrapado” por mi trabajo.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_02', procedure: 'sProQOL'}
};
sProQOL.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Me gusta trabajar ayudando a la gente.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_03', procedure: 'sProQOL'}
};
sProQOL.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. Me siento deprimido como resultado de mi trabajo</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_04', procedure: 'sProQOL'}
};
sProQOL.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. Mi trabajo me hace sentirme satisfecho.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_05', procedure: 'sProQOL'}
};
sProQOL.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. Por causa de mi trabajo me siento agotado.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_06', procedure: 'sProQOL'}
};
sProQOL.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. Me siento abrumado por la cantidad y tipo de trabajo que tengo que afrontar.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_07', procedure: 'sProQOL'}
};
sProQOL.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. Como resultado de mi trabajo, tengo pensamientos molestos, repentinos, indeseados.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_08', procedure: 'sProQOL'}
};
sProQOL.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. Estoy feliz por haber elegido hacer este trabajo.</div>', options: ["&nbsp;Nunca", "&nbsp;Rara Vez", "&nbsp;Algunas veces", "&nbsp;Con alguna frecuencia", "&nbsp;Casi siempre", "&nbsp;Siempre"], required: true, horizontal: false}],
  data: {trialid: 'sProQOL_09', procedure: 'sProQOL'}
};
sProQOL.push(question09);

sProQOL.unshift(instruction_screen_experiment);
sProQOL.push.apply(questions, sProQOL);
call_function("sProQOL");
