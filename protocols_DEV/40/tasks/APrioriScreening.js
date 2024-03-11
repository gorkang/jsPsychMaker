/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
    questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
    questions.push( check_fullscreen('APrioriScreening') );
    APrioriScreening = [];    //temporal timeline
    
  var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<p><left><b><big>Screening beliefs</big></b><br />Indicate how much you agree or disagree with the following statements about medical screenings.<BR><BR>
    A screening test is done to detect potential diseases in people who do not have any symptoms of disease.</p>`],
    data:{trialid: 'APrioriScreening_000', procedure: 'APrioriScreening'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
      }
    };
    
  var question001 = {
    type: 'html-slider-response',
    stimulus: 'Participating in screening always has more advantages than disadvantages.',
      labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
      require_movement: true,
      slider_number: true,
      min: 0,
      max: 100,
      slider_width: 500,
      slider_start: 50,
      step: 1,
      button_label: 'Next',
    data: {trialid: 'APrioriScreening_001', procedure: 'APrioriScreening'}
  };
  APrioriScreening.push(question001);



  var question002 = {
    type: 'html-slider-response',
    stimulus: 'Participating in screening cannot hurt anyone.',
      labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
      require_movement: true,
      slider_number: true,
      min: 0,
      max: 100,
      slider_width: 500,
      slider_start: 50,
      step: 1,
      button_label: 'Next',
    data: {trialid: 'APrioriScreening_002', procedure: 'APrioriScreening'}
  };
  APrioriScreening.push(question002);



  var question003 = {
    type: 'html-slider-response',
    stimulus: 'In my opinion, it is always better to get screened.',
      labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
      require_movement: true,
      slider_number: true,
      min: 0,
      max: 100,
      slider_width: 500,
      slider_start: 50,
      step: 1,
      button_label: 'Next',
    data: {trialid: 'APrioriScreening_003', procedure: 'APrioriScreening'}
  };
  APrioriScreening.push(question003);



  var question004 = {
    type: 'html-slider-response',
    stimulus: 'If one has the opportunity, one should always participate in screening.',
      labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
      require_movement: true,
      slider_number: true,
      min: 0,
      max: 100,
      slider_width: 500,
      slider_start: 50,
      step: 1,
      button_label: 'Next',
    data: {trialid: 'APrioriScreening_004', procedure: 'APrioriScreening'}
  };
  APrioriScreening.push(question004);



  var question005 = {
    type: 'html-slider-response',
    stimulus: 'Foregoing screening is irresponsible.',
      labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
      require_movement: true,
      slider_number: true,
      min: 0,
      max: 100,
      slider_width: 500,
      slider_start: 50,
      step: 1,
      button_label: 'Next',
    data: {trialid: 'APrioriScreening_005', procedure: 'APrioriScreening'}
  };
  APrioriScreening.push(question005);



    // Randomize order of items
    if (debug_mode === false) APrioriScreening = jsPsych.randomization.repeat(APrioriScreening,1);
    APrioriScreening.unshift(instruction_screen_experiment);
    questions.push.apply(questions, APrioriScreening);
    
    call_function('APrioriScreening');
    
