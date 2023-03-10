/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
    questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
    questions.push( check_fullscreen('CRTMCQ4') );
    CRTMCQ4 = [];    //temporal timeline
    
  var instruction_screen_experiment = {
    type: 'instructions',
    pages: [`<p><left><b><big>CRTMCQ4</big></b><br/>Lee con atención y contesta las siguientes preguntas.</left></p>`],
    data:{trialid: 'CRTMCQ4_000', procedure: 'CRTMCQ4'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
      }
    };
    
  var question001 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Un bate y una pelota cuestan  $1.100 en total. El bate cuesta $1.000 más que la pelota ¿Cuánto cuesta la pelota?',
      options: ['&nbsp;50 pesos', '&nbsp;100 pesos', '&nbsp;90 pesos', '&nbsp;10 pesos'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_001', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question001);



  var question002 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Si 5 máquinas se demoran 5 minutos en hacer 5 audífonos ¿Cuánto tiempo se demorarían 100 máquinas en hacer 100 audífonos?',
      options: ['&nbsp;5 minutos', '&nbsp;100 minutos', '&nbsp;20 minutos', '&nbsp;500 minutos'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_002', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question002);



  var question003 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Parte de la superficie de un lago está cubierta con hojas de lirio. Esta parte, se dobla en tamaño cada día. Si las hojas de lirio demoran 48 días en cubrir el lago completo ¿Cuántos días tardarían en cubrir la mitad del lago?',
      options: ['&nbsp;47 días', '&nbsp;24 días', '&nbsp;12 días', '&nbsp;36 días'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_003', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question003);



  var question004 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Si José puede tomar un barril de agua en 6 días y María puede tomar un barril de agua en 12 días ¿Cuánto se demorarían ambos en tomar un barril de agua juntos?',
      options: ['&nbsp;4 días', '&nbsp;9 días', '&nbsp;12 días', '&nbsp;3 días'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_004', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question004);



  var question005 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Pedro recibió la quinceava nota más alta y la quinceava nota más baja en su clase ¿Cuántos estudiantes hay en su clase?',
      options: ['&nbsp;29 estudiantes', '&nbsp;30 estudiantes', '&nbsp;1 estudiante', '&nbsp;15 estudiantes'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_005', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question005);



  var question006 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Un hombre compra un cerdo a $60.000, lo vende a $70.000, lo compra de nuevo por $80.000, y lo vuelve a vender finalmente por $90.000 ¿Cuánta plata ha ganado?',
      options: ['&nbsp;$20.000', '&nbsp;$10.000', '&nbsp;$0', '&nbsp;$30.000'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_006', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question006);



  var question007 = {
    type: 'survey-multi-choice-horizontal',
    questions: [{
      prompt: 'Simón decide invertir $8.000.000 en el mercado de acciones un día a inicios de 2008. Seis meses después de haber invertido, el 17 de julio, las acciones que había comprado bajaron 50%. Afortunadamente para Simón, desde el 17 de julio hasta el 17 de octubre, las acciones que compró subieron 75%. En este punto, Simón:',
      options: ['&nbsp;ha ganado dinero.', '&nbsp;ha perdido dinero.', '&nbsp;no ha ganado ni perdido dinero.', '&nbsp;no se puede determinar.'],
      random_options: true,
      horizontal: true,
      required: true
    }],
    data: {trialid: 'CRTMCQ4_007', procedure: 'CRTMCQ4'}
  };
  CRTMCQ4.push(question007);



    // Randomize order of items
    if (debug_mode === false) CRTMCQ4 = jsPsych.randomization.repeat(CRTMCQ4,1);
    CRTMCQ4.unshift(instruction_screen_experiment);
    questions.push.apply(questions, CRTMCQ4);
    
    call_function('CRTMCQ4');
    
