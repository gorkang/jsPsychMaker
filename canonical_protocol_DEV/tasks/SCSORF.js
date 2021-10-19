/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SCSORF') );
SCSORF = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big></big></b><br />'+
    'Indique su nivel de acuerdo con las siguientes frases.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'SCSORF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. Mi fe religiosa es extremadamente importante para mí.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_01', procedure: 'SCSORF'}
};
SCSORF.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. Rezo a diario.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_02', procedure: 'SCSORF'}
};
SCSORF.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Considero mi fe una fuente de inspiración</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_03', procedure: 'SCSORF'}
};
SCSORF.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. Considero que mi fe le otorga significado y propósito a mi vida.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_04', procedure: 'SCSORF'}
};
SCSORF.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. Me considero activo/a en mi fe o iglesia.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_05', procedure: 'SCSORF'}
};
SCSORF.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. Mi fe es una parte importante de quien soy como persona.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_06', procedure: 'SCSORF'}
};
SCSORF.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. Mi relación con Dios es extremadamente importante para mí.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_07', procedure: 'SCSORF'}
};
SCSORF.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. Disfruto estando alrededor de otras personas que comparten mi fe.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_08', procedure: 'SCSORF'}
};
SCSORF.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. Veo mi fe como una fuente de comodidad.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_09', procedure: 'SCSORF'}
};
SCSORF.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. Mi fe impacta muchas de mis decisiones.</div>', options: ['&nbsp;Fuertemente en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;De acuerdo', '&nbsp;Fuertemente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'SCSORF_10', procedure: 'SCSORF'}
};
SCSORF.push(question10);

SCSORF.unshift(instruction_screen_experiment);
questions.push.apply(questions, SCSORF);

call_function("SCSORF");
