/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ACE') );
ACE = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Cuestionario para personas adultas de Experiencias Adversas en la Infancia</big></b><br/>Marque cada experiencia que experimentó antes de cumplir 18 años.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'ACE'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Sintió que no tenía suficiente para comer, tenía que usar ropa sucia o no tenía nadie que lo protegiera o lo cuidara?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_001', procedure: 'ACE'}
};
ACE.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Perdió a uno de sus padres a causa de divorcio, abandono, muerte u otra razón?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_002', procedure: 'ACE'}
};
ACE.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Vivió con alguien que estaba deprimido, enfermo mental o intentó suicidarse?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_003', procedure: 'ACE'}
};
ACE.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Vivió con alguien que tuvo problemas de alcohol y/o drogas, incluyendo medicamentos recetados?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_004', procedure: 'ACE'}
};
ACE.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Sus padres o algún adulto en su casa alguna vez se golpearon o amenazaron con lastimarse?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_005', procedure: 'ACE'}
};
ACE.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Vivió con alguien que fue a la cárcel o prisión?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_006', procedure: 'ACE'}
};
ACE.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Alguna vez uno de sus padres o algún adulto en su casa le ha insultado o menospreciado?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_007', procedure: 'ACE'}
};
ACE.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Alguno de sus padres o algún adulto en su hogar alguna vez lo golpeó, pateó o lastimó físicamente de alguna manera?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_008', procedure: 'ACE'}
};
ACE.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Sintió que nadie en su familia lo quería o pensaba que era especial?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_009', procedure: 'ACE'}
};
ACE.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Experimentó contacto sexual no deseado (como manosear / penetración oral / anal / vaginal)?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'ACE_010', procedure: 'ACE'}
};
ACE.push(question010);

// Randomize order of items
//if (debug_mode === false) ACE = jsPsych.randomization.repeat(ACE,1);
ACE.unshift(instruction_screen_experiment);
questions.push.apply(questions, ACE);

call_function('ACE');