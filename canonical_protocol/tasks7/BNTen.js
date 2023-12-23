/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('BNTen') );
BNTen = [];    // temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  data: {trialid: 'Instructions', procedure: 'BNTen'},
  pages: [`<p><left><p><left><b><big>Adaptive Berlin Numeracy Test</big></b><br/>Please, answer the following questions.</p>`],
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Out of 1,000 people in a small town 500 are members of a choir. Out of these 500 members in a choir 100 are men. Out of the 500 inhabitants that are not in a choir 300 are men. What is the probability that a randomly drawn man is a member of the choir? Please indicate the probability as a percent.</div>', input_type: 'number', min: 0, max: 100, required: true, error_text: 'Please enter a valid number between 0 and 100', endword: ' %'}],
  data: {trialid: 'BNTen_01', procedure: 'BNTen'},
  on_load: function () {
    input_reload();
  }
};
BNTen.push(question01);

var question02 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Imagine we are throwing a five-sided die 50 times. On average, out of these 50 throws how many times would this five-sided die show an odd number (1, 3 or 5)?</div>', input_type: 'number', min: 0, max: 50, required: true, error_text: 'Please enter a valid number between 0 and 50'}],
  data: {trialid: 'BNTen_02', procedure: 'BNTen'},
  on_load: function () {
    input_reload();
  }
};

var if_question02 = {
  timeline: [question02],
  data: {trialid: 'BNTen_02_if', procedure: 'BNTen'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'BNTen_01'))['response']['Q0']).toString().trim();
    if((data) !=  '25'){
      return true;
    } else {
      return false;
    }
  },
};
BNTen.push(if_question02);

var question03 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Imagine we are throwing a loaded die (6 sides). The probability that the die shows a 6 is twice as high as the probability of each of the other numbers. On average, out of these 70 throws how many times would the die show the number 6?</div>', input_type: 'number', min: 0, max: 70, required: true, error_text: 'Please enter a valid number between 0 and 70'}],
  data: {trialid: 'BNTen_03', procedure: 'BNTen'},
  on_load: function () {
    input_reload();
  }
};

var if_question03 = {
  timeline: [question03],
  data: {trialid: 'BNTen_03_if', procedure: 'BNTen'},
  conditional_function: function(){
  let data = ((jsPsych.data.get().values().find(x => x.trialid === 'BNTen_01'))['response']['Q0']).toString().trim();
  if((data) ==  '25'){
    return true;
   } else {
    return false;
   }
  },
};
BNTen.push(if_question03);

var question04 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">In a forest, 20% of the mushrooms are red, 50% are brown, and 30% are white. A red mushroom is poisonous with a probability of 20%. A mushroom that is not red is poisonous with a probability of 5%. What is the probability that a poisonous mushroom in the forest is red? Please indicate the probability as a percent.</div>', input_type: 'number', min: 0, max: 100, required: true, error_text: 'Please enter a valid percentage between 0 and 100', endword: ' %'}],
  data: {trialid: 'BNTen_04', procedure: 'BNTen'},
  on_load: function () {
    input_reload();
  }
};

var if_question04 = {
  timeline: [question04],
  data: {trialid: 'BNTen_04_if', procedure: 'BNTen'},
  conditional_function: function(){
    try {
      let data = ((jsPsych.data.get().values().find(x => x.trialid === 'BNTen_03'))['response']['Q0']).toString().trim();
      if((data) != '20'){
        return true;
      } else {
        return false;
      }
    } catch(err) {
      //alert('we dont have BNTen_03')
      return false;
    }
  },
};
BNTen.push(if_question04);

BNTen.unshift(instruction_screen_experiment);
BNTen.push.apply(questions, BNTen);

call_function("BNTen");
