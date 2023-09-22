/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('FKEA') );
FKEA = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: [`<b><big>Financial knowledge, experience and attitudes</big></b><BR><BR>Next we would like to ask you some questions which assess how much people know about financial issues, how they make financial decisions in everyday life, and people's attituds towards credits and savings.<BR><BR>`],
  data: {trialid: 'Instructions_01', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var instruction_screen_experiment_02 = {
  type: jsPsychInstructions,
  pages: [`<b><big>Financial knowledge, experience and attitudes</big></b><BR><BR>Think about the credit card that you use the most. If you do not have one, think about a credit card you can apply for and most likely obtain.<BR><BR>`],
  data: {trialid: 'Instructions_02', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(instruction_screen_experiment_02);

var question01 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Do you know how much is the annual percentage rate (APR) on your credit card or a credit card you can apply for and most likely obtain?</div>', options: ['&nbsp;Yes', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_01', procedure: 'FKEA'}
};
FKEA.push(question01);

var question02 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>How much is the annual interest rate (APR) on your credit card or a credit card you can apply for and most likely obtain? If you do not know, please give as your best guess.</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_02', procedure: 'FKEA'}
};
FKEA.push(question02);

var question03 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Do you know how much is the monthly minimum payment of your credit card or a credit card you can apply for and most likely obtain? If you do not know, please give as your best guess.</div>', options: ['&nbsp;Yes', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_03', procedure: 'FKEA'}
};
FKEA.push(question03);

var question04 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>How much is the monthly minimum payment of your credit? If you do not know, please give as your best guess.</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_04', procedure: 'FKEA'}
};
FKEA.push(question04);

var question05 = {
  type: jsPsychInstructions,
  pages: [`The next section of the questionnaire is more like a quiz. The questions are not designed to catch you out, so if you think you have the right answer, you probably do.<BR><BR>`],
  data: {trialid: 'FKEA_05', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(question05);

var question06 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Suppose you had $100 in a savings account and the interest rate was 2% per year. After 5 years, how much do you think you would have in the account if you left the money to grow?</div>', options: ['&nbsp;More than $102', '&nbsp;Exactly $102', '&nbsp;Less than $102'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_06', procedure: 'FKEA'}
};
FKEA.push(question06);

var question07 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Imagine that the interest rate on your savings account was 1% per year and inflation was 2% per year. After 1 year, with the money in this account, would you be able to buy…</div>', options: ['&nbsp;More than today', '&nbsp;Exactly the same as today', '&nbsp;Less than today'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_07', procedure: 'FKEA'}
};
FKEA.push(question07);

var question08 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Do you think the following statement is true or false? Buying a single company stock usually provides a safer return than a stock mutual fund.</div>', options: ['&nbsp;True', '&nbsp;False'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_08', procedure: 'FKEA'}
};
FKEA.push(question08);

var question09 = {
  type: jsPsychInstructions,
  pages: [`We would now like to ask you questions about a hypothetical situation that involves financial decision making.<BR><BR>`],
  data: {trialid: 'FKEA_09', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(question09);

var question10 = {
  type: jsPsychInstructions,
  pages: [`Imagine you want to make a discretionary spending of USD 1,000, such as buying a gift for a close friend or relative, taking a weekend trip, or buying a new TV set. You can only pay for this with a credit card that has 24% annual interest rate (APR). Would you...<BR><BR>`],
  data: {trialid: 'FKEA_10', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(question10);

var question11 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Make the spending today with the credit card or try to save and buy when you have the money?</div>', options: ['&nbsp;Buy today with credit card', '&nbsp;Save and buy when I have the money'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_11', procedure: 'FKEA'}
};
FKEA.push(question11);

var question12 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>How confident are you of behaving like this in real life?</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_12', procedure: 'FKEA'}
};
FKEA.push(question12);

var question13 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>Let's say you made the discretionary spending of USD 1,000 with your credit card. How likely it is that you will miss a payment before extinguishing this debt?</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_13', procedure: 'FKEA'}
};
FKEA.push(question13);

var question14 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>Let's say you try to save the USD 1,000. How likely it is that you will attain this saving goal?</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_14', procedure: 'FKEA'}
};
FKEA.push(question14);

var question15 = {
  type: jsPsychInstructions,
  pages: [`Please read carefully the following information on financial instruments.<BR><BR>`],
  data: {trialid: 'FKEA_15', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(question15);

var question16 = {
  type: jsPsychInstructions,
  pages: function () {
    treatment1 = `<p align="justify">Currently, credit cards' average annual interest rate (APR) offered by popular US Banks are 24%.</p><p align="justify">If you decide to make the discretionary spending of USD 1,000 by credit card, and then make only the monthly minimum payment each month, you will pay off your credit in 39 months at a total cost of USD 1,371*.</p>`;
    treatment2 = treatment1 + `<p align="justify">According to the Federal Reserve, approximately 5 out of 100 loans held by people of your age missed two or more consecutive payments.</p><p align="justify">Missing the minimum payment can lead to increases in the interest rate (APR), and/or damage your credit score.</p>`;
    treatment3 = treatment2 + `<p align="justify">Instead of using your credict card, you can save the ammount necesary to afford the discretionary spending.</p><p align="justify">Currently, savings accounts average annual interest rate (APR) offered by popular US Banks is 3%.</p><p align="justify">If you choose to save each month an amount equivalent to the minimum payment of a USD 1,000 credit card purchase, it will take you 25 months to save the USD 1,000.</p>`;

    foot_note = `<h6>(*)The APR is a compound interest that is applied to the initial amount of a loan and to each subsequent accumulation of interest going forward. With each period, interest is applied on top of the initial amount of the loan plus the interest accrued thus far on the initial amount.</h6>`;

    if ("FKEA" in between_selection) {
      return [window[between_selection["FKEA"][0]] + foot_note];
    } else {
      console.warn("between_selection doesn't contain the key FKEA, variable treatment has been selected automatically");
      return [window["treatment" + (Math.floor(Math.random() * 3) + 1).toString()] + foot_note];
    }
  },
  data: {trialid: 'FKEA_16', condition_between: between_selection["FKEA"][0], procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(question16);

var question17 = {
  type: jsPsychInstructions,
  pages: [`Now that you have read the information on financial instruments, please answer once again the questions on the hypothetical situation of making a USD 1,000 discretionary spending. Would you...<BR><BR>`],
  data: {trialid: 'FKEA_17', procedure: 'FKEA'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
FKEA.push(question17);

var question18 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Make the spending today with the credit card or try to save and buy when you have the money?</div>', options: ['&nbsp;Buy today with credit card', '&nbsp;Save and buy when I have the money'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FKEA_18', procedure: 'FKEA'}
};
FKEA.push(question18);

var question19 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>How confident are you of behaving like this in real life?</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_19', procedure: 'FKEA'}
};
FKEA.push(question19);

var question20 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>Let's say you made the discretionary spending of USD 1,000 with your credit card. How likely it is that you will miss a payment before extinguishing this debt?</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_20', procedure: 'FKEA'}
};
FKEA.push(question20);

var question21 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>Let's say you try to save the USD 1,000. How likely it is that you will attain this saving goal?</div></br>", require_movement:true, required: true, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 1, labels: ["0", "100"], slider_number: true, button_label: "Next",
  data: {trialid: 'FKEA_21', procedure: 'FKEA'}
};
FKEA.push(question21);

FKEA.unshift(instruction_screen_experiment);
FKEA.push.apply(questions, FKEA);

call_function("FKEA");
