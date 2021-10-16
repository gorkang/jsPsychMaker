/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

// Conditions
var factors = {condition: ['text', 'pictorial']}

// Randomly choose one of the conditions
var full_design = jsPsych.randomization.factorial(factors, 1);


// ----------------------------------------------------------------------

if (full_design[0].condition == 'pictorial') {

    INFCONS = [];    //temporal timeline

    var instruction_screen_experiment = {
        type: 'instructions',
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
      type: 'image-button-response',
      stimulus: 'img/Baby_respiratorios_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
      data: {trialid: 'INFCONSjoined_01', procedure: 'INFCONS'}
    };
    INFCONS.push(question01);

    var question02 = {
      type: 'image-button-response',
      stimulus: 'img/Baby_cerebro_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
      data: {trialid: 'INFCONSjoined_02', procedure: 'INFCONS'}
    };
    INFCONS.push(question02);

    // Randomize order of items
    INFCONS = jsPsych.randomization.repeat(INFCONS,1);
    //Insert instructions as the first item
    INFCONS.unshift(instruction_screen_experiment);
    // Present items!
    INFCONS.push.apply(questions, INFCONS)


} else if (full_design[0].condition == 'text') {


    INFCONS = [];    //temporal timeline

    var instruction_screen_experiment = {
        type: 'instructions',
        pages: ['<p><left>' +
        '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto.. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
        '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
        '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
        data: {trialid: 'Instructions_02', procedure: 'INFCONS'},
        show_clickable_nav: true,
        on_trial_start: function(){
            bloquear_enter = 0;
        }
    };

    var question12 = {
      type: 'html-button-response',
      stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Problemas respiratorios del recién nacido</b></p>Se da en 115 de 1000 partos vaginales y en 120 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
      data: {trialid: 'INFCONSjoined_12', procedure: 'INFCONS'}
    };
    INFCONS.push(question12);

    var question13 = {
      type: 'html-button-response',
      stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Lesión en el cerebro del bebe por falta de oxígeno</b></p>Se da en 2 de 1000 partos vaginales y en 2 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
      data: {trialid: 'INFCONSjoined_13', procedure: 'INFCONS'}
    };
    INFCONS.push(question13);


    // Randomize order of items
    INFCONS = jsPsych.randomization.repeat(INFCONS,1);
    //Insert instructions as the first item
    INFCONS.unshift(instruction_screen_experiment);
    // Present items!
    INFCONS.push.apply(questions, INFCONS)

}



questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'INFCONS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'INFCONS'}).json();
      }
      saveData(data, online, 'INFCONS');
    }
});
