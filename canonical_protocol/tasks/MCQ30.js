/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('MCQ30') );
MCQ30 = []; //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>MCQ-30</big></b><br />'+
    '<br> A continuación, lea cada enunciado respondiendo con la frecuencia en que usted se siente representado con esa frase. Por ejemplo, si el enunciado es “Me gustan las manzanas”, y le gustan mucho, entonces seleccione la casilla que corresponde a “Totalmente de acuerdo”. </p>'],
    data:{trialid: 'Instructions_01', procedure: 'MCQ30'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '1. Estar preocupado me ayuda a organizar mi mente', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_001', procedure: 'MCQ30'}
};
MCQ30.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '2. Estar preocupado me ayuda a afrontar las cosas', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_002', procedure: 'MCQ30'}
};
MCQ30.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '3. Necesito preocuparme para funcionar bien', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_003', procedure: 'MCQ30'}
};
MCQ30.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '4. Estar preocupado me ayuda a solucionar los problemas', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_004', procedure: 'MCQ30'}
};
MCQ30.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '5. Necesito preocuparme para seguir organizado', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_005', procedure: 'MCQ30'}
};
MCQ30.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '6. Estar preocupado me ayuda a evitar problemas en el futuro', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_006', procedure: 'MCQ30'}
};
MCQ30.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '7. Mis pensamientos preocupantes persisten, independientemente de cómo intente detenerlos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_007', procedure: 'MCQ30'}
};
MCQ30.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '8. Cuando empiezo a preocuparme no puedo parar', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_008', procedure: 'MCQ30'}
};
MCQ30.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '9. Podría llegar a enfermar de preocupación', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_009', procedure: 'MCQ30'}
};
MCQ30.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '10. No puedo ignorar los pensamientos que me preocupan', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_010', procedure: 'MCQ30'}
};
MCQ30.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '11. Mi preocupación podría volverme loco', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_011', procedure: 'MCQ30'}
};
MCQ30.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '12. Considero que preocuparme es peligroso para mi', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_012', procedure: 'MCQ30'}
};
MCQ30.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '13. No confió en mi memoria', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_013', procedure: 'MCQ30'}
};
MCQ30.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '14. Tengo mala memoria', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_014', procedure: 'MCQ30'}
};
MCQ30.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '15. Tengo poca confianza en mi memoria sobre hechos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_015', procedure: 'MCQ30'}
};
MCQ30.push(question015);

var question016 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '16. Tengo poca confianza en mi memoria sobre lugares', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_016', procedure: 'MCQ30'}
};
MCQ30.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '17. Tengo poca confianza en mi memoria sobre palabras y nombres', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_017', procedure: 'MCQ30'}
};
MCQ30.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '18. Mi memoria me puede engañar a veces', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_018', procedure: 'MCQ30'}
};
MCQ30.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '19. Si no pudiera controlar mis pensamientos, yo no podría funcionar', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_019', procedure: 'MCQ30'}
};
MCQ30.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '20. No poder controlar mis pensamientos es una señal de debilidad', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_020', procedure: 'MCQ30'}
};
MCQ30.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '21. Debería controlar mis pensamientos todo el tiempo', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_021', procedure: 'MCQ30'}
};
MCQ30.push(question021);

var question022 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '22. Es malo tener ciertos pensamientos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_022', procedure: 'MCQ30'}
};
MCQ30.push(question022);

var question023 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '23. Si yo no controlara un pensamiento preocupante y luego ocurriese, sería por mi culpa', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_023', procedure: 'MCQ30'}
};
MCQ30.push(question023);

var question024 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '24. Recibiré un castigo por no controlar ciertos pensamientos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_024', procedure: 'MCQ30'}
};
MCQ30.push(question024);

var question025 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '25. Soy consciente constantemente de lo que pienso', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_025', procedure: 'MCQ30'}
};
MCQ30.push(question025);

var question026 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '26. Presto mucha atención a la manera en que mi mente funciona', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_026', procedure: 'MCQ30'}
};
MCQ30.push(question026);

var question027 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '27. Pienso mucho acerca de mis pensamientos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_027', procedure: 'MCQ30'}
};
MCQ30.push(question027);

var question028 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '28. Examino constantemente mis pensamientos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_028', procedure: 'MCQ30'}
};
MCQ30.push(question028);

var question029 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '29. Monitorizo mis pensamientos', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_029', procedure: 'MCQ30'}
};
MCQ30.push(question029);

var question030 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '30. Me doy cuenta de cómo funciona mi mente mientras pienso en cómo solucionar un problema', options: ['&nbsp;Totalmente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;Un poco de acuerdo', '&nbsp;Totalmente de acuerdo'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'MCQ30_030', procedure: 'MCQ30'}
};
MCQ30.push(question030);

MCQ30.unshift(instruction_screen_experiment);
questions.push.apply(questions, MCQ30)

call_function("MCQ30");
