/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CMApre') );
CMApre = [];    //temporal timeline

var words_list = [['Hotel', 'River', 'Tree', 'Skin', 'Gold', 'Market', 'Paper', 'Child', 'King', 'Book'], ['Sky', 'Ocean', 'Flag', 'Dollar', 'Wife', 'Machine', 'Home', 'Earth', 'College', 'Butter'], ['Woman', 'Rock', 'Blood', 'Corner', 'Shoes', 'Letter', 'Girl', 'House', 'Valley', 'Engine'], ['Water', 'Church', 'Doctor', 'Palace', 'Fire', 'Garden', 'Sea', 'Village', 'Baby', 'Table']];
var assigned_list = 0;
var reasigned = false;

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: [`<b><big>Cognitive and memory assessment</big></b><BR>Part of this study is concerned with people's memory, and ability to think about things. Please, answer the following questions.<BR><BR>`],
  data: {trialid: 'Instructions_01', procedure: 'CMApre'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">First, how would you rate your memory at the present time?</div>', options: ['&nbsp;Excellent', '&nbsp;Very good', '&nbsp;Good', '&nbsp;Fair', '&nbsp;Poor'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'CMApre_01', procedure: 'CMApre'}
};
CMApre.push(question01);

var question02 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Compared to two years ago, would you say your memory is better now, about the same, or worse now than it was then?</div>', options: ['&nbsp;Better', '&nbsp;Same', '&nbsp;Worse'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'CMApre_02', procedure: 'CMApre'}
};
CMApre.push(question02);

var question03 = {
  type: jsPsychInstructions,
  pages: [`You'll read a set of 10 words and we will ask you to recall as many as you can. We have purposely made the list long so that it will be difficult for anyone to recall all the words -- most people recall just a few. Please read carefully, in a few more screens we will ask you to recall as many of the words as you can. <br><br>
  To ensure the integrity of the experiment, we kindly ask that you refrain from taking screenshots or writing down the questions. Please be aware that the number of words you recall will not impact the payment you receive upon completing this experiment. Our primary focus is to understand your genuine memory capacity.<br><br>`],
  data: {trialid: 'CMApre_03', procedure: 'CMApre'},
  show_clickable_nav: true
};
CMApre.push(question03);

var question04 = {
  type: jsPsychInstructions,
  pages: function () {
    reasigned = true;
    assigned_list = Math.floor(Math.random() * 4);
    return [`Read carefully the following words before proceeding:<br>` +
       //words_list[assigned_list].join(" ")
       `
       <div class="row" style="margin-left: 3%">
         <div class="column" style="float: left; width: 33.33%;">
           <p>` + words_list[assigned_list][0] + `</p>
           <p>` + words_list[assigned_list][1] + `</p>
           <p>` + words_list[assigned_list][2] + `</p>
           <p>` + words_list[assigned_list][3] + `</p>
         </div>
         <div class="column" style="float: left; width: 33.33%;">
           <p>` + words_list[assigned_list][4] + `</p>
           <p>` + words_list[assigned_list][5] + `</p>
           <p>` + words_list[assigned_list][6] + `</p>
         </div>
         <div class="column" style="float: left; width: 33.33%;">
           <p>` + words_list[assigned_list][7] + `</p>
           <p>` + words_list[assigned_list][8] + `</p>
           <p>` + words_list[assigned_list][9] + `</p>
         </div>
       </div>
       <div style="content: ''; display: table; clear: both;"></div>
       `
     ];
  },
  data: {trialid: 'CMApre_04', procedure: 'CMApre'},
  on_load: function () {
    document.addEventListener('contextmenu', prevent_right_click);
  },
  on_finish: function(data){
    data.stimulus = words_list[assigned_list]
    document.removeEventListener('contextmenu', prevent_right_click);
  },
  show_clickable_nav: true
};
CMApre.push(question04);

CMApre.unshift(instruction_screen_experiment);
CMApre.push.apply(questions, CMApre);
call_function("CMApre");
