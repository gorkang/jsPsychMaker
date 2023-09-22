/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('AIM') );
AIM = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left><b><big>Grupos socioeconómicos AIM</big></b><br />'+
  'Por favor, responda las siguientes preguntas.' +'</p>'],
  data:{trialid: 'Instructions_01', procedure: 'AIM'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '¿Cuál es el nivel educacional alcanzado (último año aprobado) por el principal sostenedor del hogar?', options: ['&nbsp;Sin estudios formales.', '&nbsp;Básica incompleta; primaria o preparatoria incompleta.', '&nbsp;Básica completa; primaria o preparatoria completa.', '&nbsp;Media científico humanista o media técnico profesional incompleta; humanidades incompletas.', '&nbsp;Media científico humanista o media técnico profesional completa; humanidades completas.', '&nbsp;Instituto técnico (CFT) o instituto profesional incompleto (carreras de 1 a 3 años).', '&nbsp;Instituto técnico (CFT) o instituto profesional completo (carreras de 1 a 3 años); hasta suboficial de FFAA y Carabineros.', '&nbsp;Universitaria incompleta (carreras de 4 o más años).', '&nbsp;Universitaria completa (carreras de 4 o más años); oficial de FFAA y Carabineros.', '&nbsp;Postgrado (postítulo, master, magíster, doctor).'], required: true, horizontal: false}],
  data: {trialid: 'AIM_01', procedure: 'AIM'}
};
AIM.push(question01);

var question02 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '¿Cuál de las siguientes ocupaciones corresponde al trabajo del principal sostenedor del hogar? [Si el principal sostenedor del hogar está cesante o es jubilado, debe ser la última ocupación remunerada que tuvo. Si el principal sostenedor tiene más de 1 trabajo, debe registrarse el de mayor ingreso.]', options: ['&nbsp;Trabajadores no calificados en ventas y servicios, peones agropecuarios, forestales, construcción, etc.', '&nbsp;Obreros, operarios y artesanos de artes mecánicas y de otros oficios.', '&nbsp;Trabajadores de los servicios y vendedores de comercio y mercados.', '&nbsp;Agricultores y trabajadores calificados agropecuarios y pesqueros.', '&nbsp;Operadores de instalaciones y máquinas y montadores / conductores de vehículos.', '&nbsp;Empleados de oficina públicos y privados.', '&nbsp;Técnicos y profesionales de nivel medio (incluye hasta suboficiales FFAA y Carabineros).', '&nbsp;Profesionales, científicos e intelectuales.', '&nbsp;Alto ejecutivo (gerente general o gerente de área o sector) de empresa privadas o pública- Director o dueño de grandes empresa- Alto directivo del poder ejecutivo, de los cuerpos legislativos y la administración pública (incluye oficiales de FFAA y Carabineros).', '&nbsp;Otros grupos no identificados (incluye rentistas, personas en situación de discapacidad, etc.)'], required: true, horizontal: false}],
  data: {trialid: 'AIM_02', procedure: 'AIM'}
};
AIM.push(question02);

var question03 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Ahora, hablando de su hogar:<br> <br>Incluyéndose usted, ¿cuántas personas viven en su hogar en la actualidad? No considere el servicio doméstico, aunque sea puertas adentro.</div>', input_type: 'number', min: 1, max: 30, required: true, name: 'Q0'}],
  data: {trialid: 'AIM_03', procedure: 'AIM'},
  on_load: function () {
    input_reload();
  }
};
AIM.push(question03);

var question04 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 120 mil', '&nbsp;120 mil – 207 mil', '&nbsp;208 mil – 361 mil', '&nbsp;362 mil – 630 mil', '&nbsp;631 mil – 1.099.000', '&nbsp;1.100.000 – 1.916.000', '&nbsp;Más de 1.916.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_04', procedure: 'AIM'}
};

var if_question04 = {
  timeline: [question04],
  data: {trialid: 'AIM_04_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) == 1){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 194 mil', '&nbsp;194 mil – 336 mil', '&nbsp;337 mil – 586 mil', '&nbsp;587 mil – 1.023.000', '&nbsp;1.024.000 – 1.785.000', '&nbsp;1.786.000 – 3.113.000', '&nbsp;Más de 3.113.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_05', procedure: 'AIM'}
};

var if_question05 = {
  timeline: [question05],
  data: {trialid: 'AIM_05_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) == 2){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question05);

var question06 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 257 mil', '&nbsp;257 mil – 446 mil', '&nbsp;447 mil – 779 mil', '&nbsp;780 mil – 1.359.000', '&nbsp;1.360.000 – 2.370.000', '&nbsp;2.371.000 – 4.135.000', '&nbsp;Más de 4.135.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_06', procedure: 'AIM'}
};

var if_question06 = {
  timeline: [question06],
  data: {trialid: 'AIM_06_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) == 3){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question06);

var question07 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 314 mil', '&nbsp;314 mil – 546 mil', '&nbsp;547 mil – 953 mil', '&nbsp;954 mil – 1.662.000', '&nbsp;1.663.000 – 2.899.000', '&nbsp;2.900.000 – 5.057.000', '&nbsp;Más de 5.057.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_07', procedure: 'AIM'}
};

var if_question07 = {
  timeline: [question07],
  data: {trialid: 'AIM_07_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) == 4){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question07);

var question08 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 367 mil', '&nbsp;367 mil – 638 mil', '&nbsp;639 mil – 1.114.000 mil', '&nbsp;1.115.000 mil – 1.943.000', '&nbsp;1.944.000 – 3.389.000', '&nbsp;3.3980.000 – 5.912.000', '&nbsp;Más de 5.912.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_08', procedure: 'AIM'}
};

var if_question08 = {
  timeline: [question08],
  data: {trialid: 'AIM_08_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) == 5){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question08);

var question09 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 417 mil', '&nbsp;417 mil – 725 mil', '&nbsp;726 mil – 1.265.000 mil', '&nbsp;1.266.000 mil – 2.207.000', '&nbsp;2.208.000 – 3.850.000', '&nbsp;3.851.000 – 6.717.000', '&nbsp;Más de 6.717.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_09', procedure: 'AIM'}
};

var if_question09 = {
  timeline: [question09],
  data: {trialid: 'AIM_09_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) == 6){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question09);

var question10 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: 'Por favor, piense en ingreso total de su hogar en un mes promedio, considerando el aporte de todos sus miembros y otros ingresos adicionales como rentas de propiedades, jubilaciones o pensiones. ¿en cuál de estos tramos está el ingreso total mensual de su hogar?', options: ['&nbsp;Menos de 464 mil', '&nbsp;464 mil – 808 mil', '&nbsp;809 mil – 1.409.000 mil', '&nbsp;1.410.000 mil – 2.459.000', '&nbsp;2.460.000 – 4.289.000', '&nbsp;4.290.000 – 7.482.000', '&nbsp;Más de 7.482.000', '&nbsp;NS/NR'], required: true, horizontal: false}],
  data: {trialid: 'AIM_10', procedure: 'AIM'}
};

var if_question10 = {
  timeline: [question10],
  data: {trialid: 'AIM_10_if', procedure: 'AIM'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'AIM_03'))["response"]["Q0"]).toString().trim();
    if(parseInt(data) >= 7){
      return true;
    } else {
      return false;
    }
  }
}
AIM.push(if_question10);

AIM.unshift(instruction_screen_experiment);
questions.push.apply(questions, AIM);

call_function("AIM");
