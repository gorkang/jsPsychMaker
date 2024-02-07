/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR40') );
DEMOGR40 = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'fullscreen',
    fullscreen_mode: true,
    message: [`<b><big>Demographic information</big></b><BR>Please, answer the following questions<BR><BR>`],
    button_label: 'Start full screen',
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR40'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">How old are you?</div>', type: 'number', range: [18, 100], required: true, error_text: 'Please enter a valid age to be able to participate in this experiment'}],
  data: {trialid: 'DEMOGR40_01', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Gender identity</div>', options: ['&nbsp;Female', '&nbsp;Male', '&nbsp;Not listed'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_02', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">What is the highest degree or level of education you have completed?</div>', options: ['&nbsp;Some High School', '&nbsp;High School Diploma', '&nbsp;Bachelor’s Degree', '&nbsp;Master’s Degree', '&nbsp;Ph.D. or higher'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_03', procedure: 'DEMOGR40'}
};
DEMOGR40.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">What was your area of study?</div>', options: ['&nbsp;Business', '&nbsp;Health professions and related programs', '&nbsp;Engineering', '&nbsp;Liberal arts and sciences, general studies, and humanities', '&nbsp;Other'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR40_04', procedure: 'DEMOGR40'}
};

var if_question04 = {
  timeline: [question04],
  data: {trialid: 'DEMOGR40_04_if', procedure: 'DEMOGR40'},
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR40_03'))['response'])['Q0']).trim();
    if (data == 'Bachelor’s Degree' || data == 'Master’s Degree' || data == 'Ph.D. or higher') {
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR40.push(if_question04);



DEMOGR40.unshift(instruction_screen_experiment);
DEMOGR40.push.apply(questions, DEMOGR40);
call_function("DEMOGR40");
