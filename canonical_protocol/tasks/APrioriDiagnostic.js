/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('APrioriDiagnostic') );
APrioriDiagnostic = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Diagnostic beliefs</big></b><br />Indicate how much you agree or disagree with the following statements about medical diagnostic tests.<BR><BR>
  A diagnostic test is done to detect potential diseases in people who have a positive screening test result or symptoms of disease.</p>`],
  data:{trialid: 'APrioriDiagnostic_000', procedure: 'APrioriDiagnostic'},
  show_clickable_nav: true,
};

var question001 = {
  type: 'html-slider-response',
  stimulus: 'Going through diagnostic tests always has more advantages than disadvantages.',
  labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
  require_movement: true,
  slider_number: true,
  min: 0,
  max: 100,
  slider_width: 500,
  slider_start: 50,
  step: 1,
  button_label: 'Next',
  data: {trialid: 'APrioriDiagnostic_001', procedure: 'APrioriDiagnostic'}
};
APrioriDiagnostic.push(question001);

var question002 = {
  type: 'html-slider-response',
  stimulus: 'Going through diagnostic tests cannot hurt anyone.',
  labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
  require_movement: true,
  slider_number: true,
  min: 0,
  max: 100,
  slider_width: 500,
  slider_start: 50,
  step: 1,
  button_label: 'Next',
  data: {trialid: 'APrioriDiagnostic_002', procedure: 'APrioriDiagnostic'}
};
APrioriDiagnostic.push(question002);

var question003 = {
  type: 'html-slider-response',
  stimulus: 'In my opinion, it is always better to get diagnostic tests.',
  labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
  require_movement: true,
  slider_number: true,
  min: 0,
  max: 100,
  slider_width: 500,
  slider_start: 50,
  step: 1,
  button_label: 'Next',
  data: {trialid: 'APrioriDiagnostic_003', procedure: 'APrioriDiagnostic'}
};
APrioriDiagnostic.push(question003);

var question004 = {
  type: 'html-slider-response',
  stimulus: 'If one has the opportunity, one should always go through diagnostic tests.',
  labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
  require_movement: true,
  slider_number: true,
  min: 0,
  max: 100,
  slider_width: 500,
  slider_start: 50,
  step: 1,
  button_label: 'Next',
  data: {trialid: 'APrioriDiagnostic_004', procedure: 'APrioriDiagnostic'}
};
APrioriDiagnostic.push(question004);

var question005 = {
  type: 'html-slider-response',
  stimulus: 'Foregoing diagnostic tests is irresponsible.',
  labels: ['&nbsp;I completely disagree', '&nbsp;I completely agree'],
  require_movement: true,
  slider_number: true,
  min: 0,
  max: 100,
  slider_width: 500,
  slider_start: 50,
  step: 1,
  button_label: 'Next',
  data: {trialid: 'APrioriDiagnostic_005', procedure: 'APrioriDiagnostic'}
};
APrioriDiagnostic.push(question005);

// Randomize order of items
if (debug_mode === false) APrioriDiagnostic = jsPsych.randomization.repeat(APrioriDiagnostic,1);
APrioriDiagnostic.unshift(instruction_screen_experiment);
questions.push.apply(questions, APrioriDiagnostic);

call_function('APrioriDiagnostic');
