/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ConsentHTML') );

ConsentHTML = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Consentimiento informado</big></b><br />'+
    '' +'</p>'],
    data: {trialid: 'Instructions_001', procedure: 'ConsentHTML'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};



// declare the block.
var trial = {
  type:'external-html',
  url: "media/html/consent-placeholder.html",
  cont_btn: "start",
  data: {
    trialid: 'ConsentHTML_001',
    procedure: 'ConsentHTML',
     stimulus: 'html/consent-nieves.html',
     response: document.getElementById("start").id
   }
};
ConsentHTML.push(trial);

ConsentHTML.unshift(instruction_screen_experiment);
ConsentHTML.push.apply(questions, ConsentHTML);
call_function("ConsentHTML");
