/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('AntiBots') );
AntiBots = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: [`<b><big>Last Task</big></b><BR>Please, answer the following general questions and questions about our study.<BR><BR>`],
  data: {trialid: 'Instructions_01', procedure: 'AntiBots'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">In the past 2 years, have you ever traveled to, or done any business with entities in Osgiliath?</div>', options: ['&nbsp;No, never', '&nbsp;Yes, but not within the past 2 years', '&nbsp;Yes, I have done so within the past 2 years'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'AntiBots_01', procedure: 'AntiBots'}
};
AntiBots.push(question01);

var question02 = {
  type: jsPsychSurveyMultiSelect,
  questions: [{prompt: '<div class="justified">Research has suggested that a person’s favorite care brand can tell us a lot about the way that they make financial decisions. In this case, however, we would like you to ignore this question entirely. Instead, please choose all of the response options provided. In other words, regardless of your actual favorite car brand, click all of the answers</div>', options: ['&nbsp;Toyota', '&nbsp;Honda', '&nbsp;Chevrolet', '&nbsp;Ford', '&nbsp;Mercedes-Benz'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'AntiBots_02', procedure: 'AntiBots'}
};
AntiBots.push(question02);

var question03 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Lastly, it is vital to our study that we only include responses from people that devoted their full attention to this study. Otherwise, years of effort (the researchers and the time of other participants) could be wasted. You will receive credit for this study no matter what. Please, tell aus how much effort you put towards this study. "I put forth _______ effort towards this study"</div>', options: ['&nbsp;Almost no', '&nbsp;Very little', '&nbsp;Some', '&nbsp;Quite a bit', '&nbsp;A lot of'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'AntiBots_03', procedure: 'AntiBots'}
};
AntiBots.push(question03);

var question04 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">In your honest opinion, should we use your data in our analysis in this study?</div>', options: ['&nbsp;Yes', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'AntiBots_04', procedure: 'AntiBots'}
};
AntiBots.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">And just out of curiosity, did you use any kind of calculator during this study?</div>', options: ['&nbsp;Yes', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'AntiBots_05', procedure: 'AntiBots'}
};
AntiBots.push(question05);

AntiBots.unshift(instruction_screen_experiment);
AntiBots.push.apply(questions, AntiBots);

call_function("AntiBots");
