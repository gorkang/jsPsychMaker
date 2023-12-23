/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CMApost') );
CMApost = [];    //temporal timeline

//TODO: columns
var question01 = {
  type: jsPsychSurveyMultiSelect,
  questions: function () {
    if (typeof assigned_list === 'undefined' || (typeof assigned_list !== 'undefined' && reasigned == false) ) {
      let assigned_list = 0;
      let words_list = [['Hotel', 'River', 'Tree', 'Skin', 'Gold', 'Market', 'Paper', 'Child', 'King', 'Book'], ['Sky', 'Ocean', 'Flag', 'Dollar', 'Wife', 'Machine', 'Home', 'Earth', 'College', 'Butter'], ['Woman', 'Rock', 'Blood', 'Corner', 'Shoes', 'Letter', 'Girl', 'House', 'Valley', 'Engine'], ['Water', 'Church', 'Doctor', 'Palace', 'Fire', 'Garden', 'Sea', 'Village', 'Baby', 'Table']];
      console.warn("Variable assigned_list has not been assigned in CMApre before CMApost was released");
    } else {
      console.warn("Variable assigned_list has been assigned in CMApre before CMApost was released, assigned_list = " + assigned_list.toString());
    }
    let next_assigned = assigned_list == 0 ? 3 : assigned_list - 1;
    let actual_list = jsPsych.randomization.repeat(words_list[assigned_list].concat(words_list[next_assigned]), 1);
    return [{prompt: '<div class="justified">A little while ago, you read a list of words. Please select the words that you remember now.</div>', options: actual_list, required: true,  random_options: false, columns: 6}];
  },
  data: {trialid: 'CMApost_01', procedure: 'CMApost'}
};
CMApost.push(question01);

CMApost.push.apply(questions, CMApost);

call_function("CMApost");
