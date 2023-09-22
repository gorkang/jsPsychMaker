/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR29') );
DEMOGR29 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: [`<b><big>Demographic information</big></b><BR>Please, answer the following questions.<BR><BR>`],
  data: {trialid: 'Instructions_01', procedure: 'DEMOGR29'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">How old are you?</div>', input_type: 'number', min: 1, max: 100, required: true, error_text: 'Please enter a valid age to be able to participate in this experiment'}],
  data: {trialid: 'DEMOGR29_01', procedure: 'DEMOGR29'},
  on_load: function () {
    input_reload();
  }
};
DEMOGR29.push(question01);

var question02 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Are you currently located in USA?</div>', options: ['&nbsp;Yes', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_02', procedure: 'DEMOGR29'}
};
DEMOGR29.push(question02);

var question03 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div><h3 class="western" align="center">End of Experiment</h3><br/><p>We're sorry, but you are not eligible to participate in this experiment.</p><BR><BR></div>`,
  choices: ['Continue'],
  prompt: "<BR><BR>",
  on_finish: function(data){
    jsPsych.endExperiment('Thanks for your time. You can close this window.');
  },
  data: {trialid: 'DEMOGR29_03', procedure: 'DEMOGR29'}
};

var if_question03 = {
  timeline: [question03],
  data: {trialid: 'DEMOGR29_03_if', procedure: 'DEMOGR29'},
  conditional_function: function(){
    let data1 = ((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR29_01'))['response']['Q0']).toString().trim();
    let data2 = ((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR29_02'))['response']['Q0']).toString().trim();
    if ( (parseInt(data1) < 50 || data2 == 'No') && !debug_mode) {
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR29.push(if_question03);

var question04 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">To which gender identity do you most identify?</div>', options: ['&nbsp;Female', '&nbsp;Male', '&nbsp;Not listed'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_04', procedure: 'DEMOGR29'}
};
DEMOGR29.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Are you of Hispanic, Latino, or Spanish origin?</div>', options: ['&nbsp;Yes', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_05', procedure: 'DEMOGR29'}
};
DEMOGR29.push(question05);

var question06 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">How do you describe your ethnicity?</div>', options: ['&nbsp;Native American Indian or Alaska Native', '&nbsp;Asian', '&nbsp;Black or African American', '&nbsp;Native Hawaiian or Other Pacific Islander', '&nbsp;White', '&nbsp;Not listed'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_06', procedure: 'DEMOGR29'}
};

var if_question06 = {
  timeline: [question06],
  data: {trialid: 'DEMOGR29_06_if', procedure: 'DEMOGR29'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR29_05'))['response']['Q0']).toString().trim();
    if (data == 'No') {
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR29.push(if_question06);

var question07 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">What is the highest degree or level of education you have completed?</div>', options: ['&nbsp;Some High School', '&nbsp;High School Diploma', '&nbsp;Bachelor’s Degree', '&nbsp;Master’s Degree', '&nbsp;Ph.D. or higher'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_07', procedure: 'DEMOGR29'}
};
DEMOGR29.push(question07);

var question08 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">What was your area of study?</div>', options: ['&nbsp;Business', '&nbsp;Health professions and related programs', '&nbsp;Engineering', '&nbsp;Liberal arts and sciences, general studies, and humanities', '&nbsp;Other'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_08', procedure: 'DEMOGR29'}
};

var if_question08 = {
  timeline: [question08],
  data: {trialid: 'DEMOGR29_08_if', procedure: 'DEMOGR29'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR29_07'))['response']['Q0']).toString().trim();
    if (data == 'Bachelor’s Degree' || data == 'Master’s Degree' || data == 'Ph.D. or higher') {
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR29.push(if_question08);

var question09 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">What is your current employment status?</div>', options: ['&nbsp;Employed Full-Time', '&nbsp;Employed Part-Time', '&nbsp;Self-Employed', '&nbsp;Seeking Opportunities', '&nbsp;Retired'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_09', procedure: 'DEMOGR29'}
};
DEMOGR29.push(question09);

var question10 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">What is your annual household income?</div>', options: ['&nbsp;Under $25,000', '&nbsp;$25,000 – $49,000', '&nbsp;$50,000 – $74,000', '&nbsp;$75,000 to $99,000', '&nbsp;Over $100,000'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR29_10', procedure: 'DEMOGR29'}
};
DEMOGR29.push(question10);

DEMOGR29.unshift(instruction_screen_experiment);
DEMOGR29.push.apply(questions, DEMOGR29);

call_function("DEMOGR29");
