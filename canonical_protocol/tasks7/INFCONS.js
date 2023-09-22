/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('INFCONS') );
INFCONS = [];    //temporal timeline

var factors = {condition: ['control', 'text', 'pictorial']};
var full_design = jsPsych.randomization.factorial(factors, 1);

if (full_design[0].condition == 'pictorial') {
  var instruction_screen_experiment = {
    type: jsPsychInstructions,
    pages: ['<p><left>' +
    '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
    '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
    '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'INFCONS'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
    }
  };

  var question01 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Baby_respiratorios_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_01', procedure: 'INFCONS'}
  };
  INFCONS.push(question01);

  var question02 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Baby_cerebro_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_02', procedure: 'INFCONS'}
  };
  INFCONS.push(question02);

  var question03 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Baby_UCI_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_03', procedure: 'INFCONS'}
  };
  INFCONS.push(question03);

  var question04 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Baby_lactancia_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_04', procedure: 'INFCONS'}
  };
  INFCONS.push(question04);

  if (debug_mode === false) INFCONS = jsPsych.randomization.repeat(INFCONS,1);

  INFCONS.unshift(instruction_screen_experiment);
  INFCONS.push.apply(questions, INFCONS);

  INFCONS = [];    //temporal timeline

  var instruction_screen_experiment = {
    type: jsPsychInstructions,
    pages: ['<p><left>' +
    '<p><left><b><big>Riesgos para la madre</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions_02', procedure: 'INFCONS'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
    }
  };

  var question05 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_anestesia_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_05', procedure: 'INFCONS'}
  };
  INFCONS.push(question05);

  var question06 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_paro_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_06', procedure: 'INFCONS'}
  };
  INFCONS.push(question06);

  var question07 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_histerectomia_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_07', procedure: 'INFCONS'}
  };
  INFCONS.push(question07);

  var question08 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_infeccion_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_08', procedure: 'INFCONS'}
  };
  INFCONS.push(question08);

  var question09 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_lesion_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_09', procedure: 'INFCONS'}
  };
  INFCONS.push(question09);

  var question10 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_UCI_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_10', procedure: 'INFCONS'}
  };
  INFCONS.push(question10);

  var question11 = {
    type: jsPsychImageButtonResponse,
    stimulus: 'media/img/INFCONS/Mother_depresion_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_11', procedure: 'INFCONS'}
  };
  INFCONS.push(question11);

  if (debug_mode === false) INFCONS = jsPsych.randomization.repeat(INFCONS,1);

  INFCONS.unshift(instruction_screen_experiment);
  questions.push.apply(questions, INFCONS);
  
} else if (full_design[0].condition == 'text') {
  INFCONS = [];    //temporal timeline

  var instruction_screen_experiment = {
    type: jsPsychInstructions,
    pages: ['<p><left>' +
    '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto.. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
    '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
    '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions_03', procedure: 'INFCONS'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
    }
  };

  var question12 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Problemas respiratorios del recién nacido</b></p>Se da en 115 de 1000 partos vaginales y en 120 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_12', procedure: 'INFCONS'}
  };
  INFCONS.push(question12);

  var question13 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Lesión en el cerebro del bebe por falta de oxígeno</b></p>Se da en 2 de 1000 partos vaginales y en 2 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_13', procedure: 'INFCONS'}
  };
  INFCONS.push(question13);

  var question14 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Hospitalización en cuidados intensivos neonatales</b></p>Se da en 63 de 1000 partos vaginales y en 139 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_14', procedure: 'INFCONS'}
  };
  INFCONS.push(question14);

  var question15 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Dificultades para inicio temprano de lactancia materna</b></p>Se da en 227 de 1000 partos vaginales y en 311 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_15', procedure: 'INFCONS'}
  };
  INFCONS.push(question15);

  if (debug_mode === false) INFCONS = jsPsych.randomization.repeat(INFCONS,1);

  INFCONS.unshift(instruction_screen_experiment);
  INFCONS.push.apply(questions, INFCONS);

  INFCONS = [];    //temporal timeline

  var instruction_screen_experiment = {
    type: jsPsychInstructions,
    pages: ['<p><left>' +
    '<p><left><b><big>Riesgos para la madre</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions_04', procedure: 'INFCONS'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
    }
  };

  var question16 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Complicaciones de la anestesia</b></p>Se da en 3 de 1000 partos vaginales y en 4 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_16', procedure: 'INFCONS'}
  };
  INFCONS.push(question16);

  var question17 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Paro cardíaco</b></p>Se da en 0.3 de 1000 partos vaginales y en 1.9 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_17', procedure: 'INFCONS'}
  };
  INFCONS.push(question17);

  var question18 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Histerectomía (extracción del útero)</b></p>Se da en 0.2 de 1000 partos vaginales y en 0.6 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_18', procedure: 'INFCONS'}
  };
  INFCONS.push(question18);

  var question19 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Infección de la herida</b></p>Se da en 9 de 1000 partos vaginales y en 15 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_19', procedure: 'INFCONS'}
  };
  INFCONS.push(question19);

  var question20 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Lesión de la vagina</b></p>Se da en 5.6 de 1000 partos vaginales y en 0 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_20', procedure: 'INFCONS'}
  };
  INFCONS.push(question20);

  var question21 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Hospitalización de la madre en cuidados intensivos</b></p>Se da en 12 de 1000 partos vaginales y en 44 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_21', procedure: 'INFCONS'}
  };
  INFCONS.push(question21);

  var question22 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Depresión post parto</b></p>Se da en 176 de 1000 partos vaginales y en 230 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_22', procedure: 'INFCONS'}
  };
  INFCONS.push(question22);

  if (debug_mode === false) INFCONS = jsPsych.randomization.repeat(INFCONS,1);

  INFCONS.unshift(instruction_screen_experiment);
  INFCONS.push.apply(questions, INFCONS);

} else if (full_design[0].condition == 'control') {

  INFCONS = [];    //temporal timeline

  //questions.push.apply(questions, INFCONS)

  var instruction_screen_experiment = {
    type: jsPsychInstructions,
    pages: ['<p><left>' +
    '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto.. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
    '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
    '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions_05', procedure: 'INFCONS'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
    }
  };

  var question23 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Problemas respiratorios del recién nacido</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_23', procedure: 'INFCONS'}
  };
  INFCONS.push(question23);

  var question24 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Lesión en el cerebro del bebe por falta de oxígeno</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_24', procedure: 'INFCONS'}
  };
  INFCONS.push(question24);

  var question25 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Hospitalización en cuidados intensivos neonatales</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_25', procedure: 'INFCONS'}
  };
  INFCONS.push(question25);

  var question26 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Dificultades para inicio temprano de lactancia materna</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_26', procedure: 'INFCONS'}
  };
  INFCONS.push(question26);

  if (debug_mode === false) INFCONS = jsPsych.randomization.repeat(INFCONS,1);

  INFCONS.unshift(instruction_screen_experiment);
  INFCONS.push.apply(questions, INFCONS);

  INFCONS = [];    //temporal timeline

  var instruction_screen_experiment = {
    type: jsPsychInstructions,
    pages: ['<p><left>' +
    '<p><left><b><big>Riesgos para la madre</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions_06', procedure: 'INFCONS'},
    show_clickable_nav: true,
    on_trial_start: function(){
      bloquear_enter = 0;
    }
  };

  var question27 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Complicaciones de la anestesia</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_27', procedure: 'INFCONS'}
  };
  INFCONS.push(question27);

  var question28 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Paro cardíaco</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_28', procedure: 'INFCONS'}
  };
  INFCONS.push(question28);

  var question29 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Histerectomía (extracción del útero)</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_29', procedure: 'INFCONS'}
  };
  INFCONS.push(question29);

  var question30 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Infección de la herida</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_30', procedure: 'INFCONS'}
  };
  INFCONS.push(question30);

  var question31 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Lesión de la vagina</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_31', procedure: 'INFCONS'}
  };
  INFCONS.push(question31);

  var question32 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Hospitalización de la madre en cuidados intensivos</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_32', procedure: 'INFCONS'}
  };
  INFCONS.push(question32);

  var question33 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Depresión post parto</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
    data: {trialid: 'INFCONS_33', procedure: 'INFCONS'}
  };
  INFCONS.push(question33);

  if (debug_mode === false) INFCONS = jsPsych.randomization.repeat(INFCONS,1);

  INFCONS.unshift(instruction_screen_experiment);
  INFCONS.push.apply(questions, INFCONS);
}

call_function("INFCONS");
