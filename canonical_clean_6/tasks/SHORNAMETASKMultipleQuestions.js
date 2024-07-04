/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SHORNAMETASKMultipleQuestions') );
SHORNAMETASKMultipleQuestions = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>NAME TASK</big></b><br/><br> Instrucciones detalladas de tarea con multiples preguntas<br><br> Muchas gracias por tu colaboración.</p>`,
  `<p>Pagina 2 de instrucciones. <BR><BR>Dale a siguiente para empezar la tarea</p>`],
  data:{trialid: 'SHORNAMETASKMultipleQuestions_000', procedure: 'SHORNAMETASKMultipleQuestions'},
  show_clickable_nav: true,
};

var question01 = {
  type: 'survey-multi-choice',
  questions: [
      {prompt: '<div class="justified">Una pregunta</div>', options: ['Opción 1', 'Opción 2', 'Opción 3'], required: true, horizontal: false},
      {prompt: '<div class="justified">Otra pregunta</div>', options: ['Opción A', 'Opción B', 'Opción C'], required: true, horizontal: false},
      {prompt: '<div class="justified">Otra pregunta más</div>', options: ['Opción X', 'Opción Y', 'Opción Z'], required: true, horizontal: false}
    ],
  data: {trialid: 'SHORNAMETASKMultipleQuestions_001', procedure: 'SHORNAMETASKMultipleQuestions'}
};
SHORNAMETASKMultipleQuestions.push(question01);

var question02 = {
  type: 'survey-multi-select',
  questions: [
      {prompt: '<div class="justified">Una pregunta</div>', options: ['Opción 1', 'Opción 2', 'Opción 3'], required: true, horizontal: false},
      {prompt: '<div class="justified">Otra pregunta</div>', options: ['Opción A', 'Opción B', 'Opción C'], required: true, horizontal: false},
      {prompt: '<div class="justified">Otra pregunta más</div>', options: ['Opción X', 'Opción Y', 'Opción Z'], required: true, horizontal: false}
    ],
  data: {trialid: 'SHORNAMETASKMultipleQuestions_002', procedure: 'SHORNAMETASKMultipleQuestions'}
};
SHORNAMETASKMultipleQuestions.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [
    {prompt: 'What is your date of birth?', placeholder: 'mm/dd/yyyy', type: "date", required: true},
    {prompt: 'What country do you currently live in?', type: "text"},
    {prompt: 'Select a number between 0 and 100', type: "number", range: [0, 100]}
  ],
  data: {trialid: 'SHORNAMETASKMultipleQuestions_003', procedure: 'SHORNAMETASKMultipleQuestions'}
};
SHORNAMETASKMultipleQuestions.push(question03);

var question04 = {
  type: 'survey-likert',
  preamble: 'Preamble para la pregunta de likert',
  questions: [
    {prompt: 'Primera pregunta de likert', labels: ['Muy malo', 'Malo', 'Regular', 'Bueno', 'Muy bueno'], required: true},
    {prompt: 'Segunda pregunta de likert', labels: ['Muy malo', 'Malo', 'Regular', 'Bueno', 'Muy bueno'], required: true},
    {prompt: 'Tercera pregunta de likert', labels: ['Muy malo', 'Regular', 'Muy bueno'], required: true}
  ],
  autocomplete: true,
  data: {trialid: 'SHORNAMETASKMultipleQuestions_004', procedure: 'SHORNAMETASKMultipleQuestions'},
  on_load: function() {
    document.getElementById("jspsych-survey-likert-css").parentElement.style["width"] = '-webkit-fill-available';
  }
};
SHORNAMETASKMultipleQuestions.push(question04);

var instruction_001 = {
  type: 'instructions',
  pages: [`<p>Muchas gracias por tu colaboración.</p>`],
  data:{trialid: 'SHORNAMETASKMultipleQuestions_instruction_001', procedure: 'SHORNAMETASKMultipleQuestions'},
  show_clickable_nav: true,
};
SHORNAMETASKMultipleQuestions.push(instruction_001);

// Randomize order of items
if (debug_mode === false) SHORNAMETASKMultipleQuestions = jsPsych.randomization.repeat(SHORNAMETASKMultipleQuestions,1);
SHORNAMETASKMultipleQuestions.unshift(instruction_screen_experiment);
questions.push.apply(questions, SHORNAMETASKMultipleQuestions)

call_function("SHORNAMETASKMultipleQuestions");
