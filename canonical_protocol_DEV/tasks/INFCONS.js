/* CSCN - Creado MANUALMENTE */

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    } else {
        return;
    }
}

// EXPERIMENTAL DESIGN ---------------------------------------------------------

//Between variables
var between_var = {
  type: ['control', 'text', 'pictorial']
};

// copia de respaldo
var original_between_var = JSON.parse(JSON.stringify(between_var));


//var full_design = jsPsych.randomization.factorial(between_var, 1);

// se limpia la variable between dependiendo del estado de las condiciones (verificar para multiples variables between)
  for (var i = 0; i < actual_condition_data.length; i++) {
    position = between_var.type.indexOf(actual_condition_data[i].condition_name)
    if (position != -1) {
      if (actual_condition_data[i].blocked)
        between_var.type.splice(position, 1);
    }
  }

  if (!user_assigned) {
    if (between_var.type.length == 0) {
      experiment_blocked = true;
      console.log("Usuario bloqueado por límite en condiciones")
      // Between variables re-definition, skip errors
      between_var = original_between_var;
      // Randomly assign a Between variable
      between_selection["INFCONS"] = [jsPsych.randomization.factorial(between_var, 1)[0].type];

      // Randomize order of Within variables
      //within_selection["INFCONS"] = jsPsych.randomization.factorial(within_var, 1, false, false);
    } else {
      // Randomly assign a Between variable
      between_selection["INFCONS"] = [jsPsych.randomization.factorial(between_var, 1)[0].type];

      // Randomize order of Within variables
      //within_selection["INFCONS"] = jsPsych.randomization.factorial(within_var, 1, false, false);
    }
  } else {
    alert("user_assigned")
  }

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];


if (between_selection["INFCONS"][0] == 'pictorial') {

INFCONS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
    '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
    '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'INFCONS'},
    procedure: 'INFCONS',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'image-button-response',
  stimulus: 'img/Baby_respiratorios_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_01', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question01);
/*
var question02 = {
  type: 'image-button-response',
  stimulus: 'img/Baby_cerebro_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_02', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question02);

var question03 = {
  type: 'image-button-response',
  stimulus: 'img/Baby_UCI_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_03', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question03);

var question04 = {
  type: 'image-button-response',
  stimulus: 'img/Baby_lactancia_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_04', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question04);
*/
INFCONS = jsPsych.randomization.repeat(INFCONS,1);
INFCONS.unshift(instruction_screen_experiment);
INFCONS.push.apply(questions, INFCONS)


INFCONS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Riesgos para la madre</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'INFCONS'},
    procedure: 'INFCONS',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question05 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_anestesia_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_05', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question05);
/*
var question06 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_paro_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_06', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question06);

var question07 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_histerectomia_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_07', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question07);

var question08 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_infeccion_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_08', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question08);

var question09 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_lesion_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_09', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question09);

var question10 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_UCI_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_10', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question10);

var question11 = {
  type: 'image-button-response',
  stimulus: 'img/Mother_depresion_VC.png', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_11', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question11);
*/
INFCONS = jsPsych.randomization.repeat(INFCONS,1);
INFCONS.unshift(instruction_screen_experiment);
questions.push.apply(questions, INFCONS)



} else if (between_selection["INFCONS"][0] == 'text') {


INFCONS = [];    //temporal timeline

//INFCONS.push.apply(questions, INFCONS)


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
    '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
    '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'INFCONS'},
    procedure: 'INFCONS',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question12 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Problemas respiratorios del recién nacido</b></p>Se da en 115 de 1000 partos vaginales y en 120 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_12', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question12);
/*
var question13 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Lesión en el cerebro del bebe por falta de oxígeno</b></p>Se da en 2 de 1000 partos vaginales y en 2 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_13', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question13);

var question14 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Hospitalización en cuidados intensivos neonatales</b></p>Se da en 63 de 1000 partos vaginales y en 139 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_14', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question14);

var question15 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Dificultades para inicio temprano de lactancia materna</b></p>Se da en 227 de 1000 partos vaginales y en 311 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_15', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question15);
*/
INFCONS = jsPsych.randomization.repeat(INFCONS,1);
INFCONS.unshift(instruction_screen_experiment);
INFCONS.push.apply(questions, INFCONS)


INFCONS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Riesgos para la madre</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'INFCONS'},
    procedure: 'INFCONS',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question16 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Complicaciones de la anestesia</b></p>Se da en 3 de 1000 partos vaginales y en 4 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_16', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question16);
/*
var question17 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Paro cardíaco</b></p>Se da en 0.3 de 1000 partos vaginales y en 1.9 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_17', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question17);

var question18 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Histerectomía (extracción del útero)</b></p>Se da en 0.2 de 1000 partos vaginales y en 0.6 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_18', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question18);

var question19 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Infección de la herida</b></p>Se da en 9 de 1000 partos vaginales y en 15 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_19', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question19);

var question20 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Lesión de la vagina</b></p>Se da en 5.6 de 1000 partos vaginales y en 0 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_20', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question20);

var question21 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Hospitalización de la madre en cuidados intensivos</b></p>Se da en 12 de 1000 partos vaginales y en 44 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_21', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question21);

var question22 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Depresión post parto</b></p>Se da en 176 de 1000 partos vaginales y en 230 de 1000 partos por cesarea<BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_22', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question22);
*/
INFCONS = jsPsych.randomization.repeat(INFCONS,1);
INFCONS.unshift(instruction_screen_experiment);
INFCONS.push.apply(questions, INFCONS)


} else if (between_selection["INFCONS"][0] == 'control') {


INFCONS = [];    //temporal timeline

//questions.push.apply(questions, INFCONS)


var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Consentimiento informado</big></b><br />'+'Lee el siguiente consentimiento informado detenidamente.<BR><BR>Imagina un embarazo sano (sin enfermedades o complicaciones preexistentes). Ha llegado el momento del parto. Tu te encuentras en buen estado de salud y tu bebé se ha desarrollado normalmente. <BR>En este momento, en el establecimiento de salud te dan un consentimiento informado. Te pedimos que lo leas con atención.' +'</p>',
    '<p><left><b><big></big></b><br />'+'<p align="center"><b>INFORMACIÓN GENERAL</b></p><p align="center" ><b>ASISTENCIA DEL PARTO</b></p><p><u><b>Objetivo</b></u></p><p>Asistir el nacimiento de su bebe en forma espontánea o a través de procedimientos quirúrgicos (cesárea), dependiendo de las condiciones maternas o médicas.&nbsp;</p><p><u><b>En qué consiste la asistencia del parto</b></u></p><p>La <b>atención o asistencia del parto</b> consiste en la extracción de su bebé, pudiendo ser este a través de un parto vaginal o una operación cesárea.</p><ul><li><b>Parto vaginal: </b>Extracción del bebé por el canal vaginal en forma espontánea, con o sin intervenciones como anestesia<li><b>Cesárea: </b> Extracción del bebé por medio de una cirugía. Se realiza una incisión abdominal y una incisión para abrir el útero. A continuación se extrae el bebe y la placenta y finalmente se cierran las incisiones del útero y piel.</ul><p><u><b>Complicaciones y/o potenciales riesgos&nbsp;</b></u></p><p>Si bien el parto es un hecho biológico que puede transcurrir sin dificultades, a veces se presentan complicaciones tanto maternas como fetales, de forma inesperada e imprevisible, que exigen la puesta en marcha de tratamientos y/o procedimientos para resolver la anomalía detectada.</p><p>A continuación te informamos sobre las complicaciones más importantes.</p>' +'</p>',
    '<p><left><b><big>Riesgos para el bebé</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'INFCONS'},
    procedure: 'INFCONS',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question12 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Problemas respiratorios del recién nacido</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_12', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question12);
/*
var question13 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Lesión en el cerebro del bebe por falta de oxígeno</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_13', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question13);

var question14 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Hospitalización en cuidados intensivos neonatales</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_14', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question14);

var question15 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para el <B>bebé</B></u></p><BR></u></p><p><b>Dificultades para inicio temprano de lactancia materna</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_15', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question15);
*/
INFCONS = jsPsych.randomization.repeat(INFCONS,1);
INFCONS.unshift(instruction_screen_experiment);
INFCONS.push.apply(questions, INFCONS)


INFCONS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Riesgos para la madre</big></b><br />'+'' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'INFCONS'},
    procedure: 'INFCONS',
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question16 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Complicaciones de la anestesia</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_16', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question16);
/*
var question17 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Paro cardíaco</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_17', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question17);

var question18 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Histerectomía (extracción del útero)</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_18', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question18);

var question19 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Infección de la herida</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_19', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question19);

var question20 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Lesión de la vagina</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_20', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question20);

var question21 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Hospitalización de la madre en cuidados intensivos</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_21', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question21);

var question22 = {
  type: 'html-button-response',
  stimulus: '<p><u><p><u>Riesgos para la <B>madre</B></u></p><BR></u></p><p><b>Depresión post parto</b></p><BR><BR>', choices: ['He leido la información'], prompt: '<div class="justified"><p></p></div>',
  data: {trialid: 'INFCONS_22', procedure: 'INFCONS'},
  procedure: 'INFCONS'
};
INFCONS.push(question22);
*/
INFCONS = jsPsych.randomization.repeat(INFCONS,1);
INFCONS.unshift(instruction_screen_experiment);
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
    },
    procedure: 'INFCONS'
});
