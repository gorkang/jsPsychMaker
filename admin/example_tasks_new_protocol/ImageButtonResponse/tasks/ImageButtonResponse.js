/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
    questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
    questions.push( check_fullscreen('ImageButtonResponse') );
    ImageButtonResponse = [];    //temporal timeline
    
  var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<p><left><b><big>ImageButtonResponse</big></b><br/>Lee con atención y contesta las siguientes preguntas.</left></p>`],
    data:{trialid: 'ImageButtonResponse_000', procedure: 'ImageButtonResponse'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
      }
    };
    
  var question001 = {
    type: 'image-button-response',
    stimulus: 'media/images/fox.jpg',
      choices: ['&nbsp;yes', '&nbsp;no'],
      prompt: 'Do you like the image?',
      required: true,
    data: {trialid: 'ImageButtonResponse_001', procedure: 'ImageButtonResponse'}
  };
  ImageButtonResponse.push(question001);



    // Randomize order of items
    if (debug_mode === false) ImageButtonResponse = jsPsych.randomization.repeat(ImageButtonResponse,1);
    ImageButtonResponse.unshift(instruction_screen_experiment);
    questions.push.apply(questions, ImageButtonResponse);
    
    call_function('ImageButtonResponse');
    
