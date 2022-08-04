/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// MORAL DISGUST DUMBFOUNDING

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('MDDF') );
MDDF = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Disgusto moral Dumbfounding</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'MDDF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. A un hombre joven le gusta escuchar a sus vecinos ancianos teniendo relaciones sexuales.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_01', procedure: 'MDDF'}
};
MDDF.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. A un hombre joven le gusta escuchar a sus vecinos ancianos teniendo relaciones sexuales.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_02', procedure: 'MDDF'}
};
MDDF.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. A un hombre joven le gusta escuchar a sus vecinos ancianos teniendo relaciones sexuales.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_03', procedure: 'MDDF'}
};

var if_question03 = {
  timeline: [question03],
  data: {trialid: 'MDDF_03_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_02'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Una pareja de hermanos están de acuerdo en tener sexo protegido.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_04', procedure: 'MDDF'}
};
MDDF.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Una pareja de hermanos están de acuerdo en tener sexo protegido.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_05', procedure: 'MDDF'}
};
MDDF.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Una pareja de hermanos están de acuerdo en tener sexo protegido.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_06', procedure: 'MDDF'}
};

var if_question06 = {
  timeline: [question06],
  data: {trialid: 'MDDF_06_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_05'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question06);

var instruction_screen_experiment_1 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Disgusto moral sin Dumbfounding</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_02', procedure: 'MDDF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
MDDF.push(instruction_screen_experiment_1);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Una mujer va deliberadamente a trabajar cuando tiene gripe/influenza.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_07', procedure: 'MDDF'}
};
MDDF.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Una mujer va deliberadamente a trabajar cuando tiene gripe/influenza.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_08', procedure: 'MDDF'}
};
MDDF.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Una mujer va deliberadamente a trabajar cuando tiene gripe/influenza.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_09', procedure: 'MDDF'}
};

var if_question09 = {
  timeline: [question09],
  data: {trialid: 'MDDF_09_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_08'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. El dueño de un hotel no fumigará las camas infestadas de insectos porque es muy caro.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_10', procedure: 'MDDF'}
};
MDDF.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. El dueño de un hotel no fumigará las camas infestadas de insectos porque es muy caro.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_11', procedure: 'MDDF'}
};
MDDF.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. El dueño de un hotel no fumigará las camas infestadas de insectos porque es muy caro.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_12', procedure: 'MDDF'}
};

var if_question12 = {
  timeline: [question12],
  data: {trialid: 'MDDF_12_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_11'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question12);

/*
var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Un hombre no se molesta en lavarse las manos antes de preparar el biberón de su bebé.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_13', procedure: 'MDDF'}
};
MDDF.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Un hombre no se molesta en lavarse las manos antes de preparar el biberón de su bebé.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_14', procedure: 'MDDF'}
};
MDDF.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Un hombre no se molesta en lavarse las manos antes de preparar el biberón de su bebé.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_15', procedure: 'MDDF'}
};

var if_question15 = {
  timeline: [question15],
  data: {trialid: 'MDDF_15_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_14'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question15);
*/

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Un hombre orina intencionalmente en el piso del baño.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_16', procedure: 'MDDF'}
};
MDDF.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Un hombre orina intencionalmente en el piso del baño.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_17', procedure: 'MDDF'}
};
MDDF.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Un hombre orina intencionalmente en el piso del baño.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_18', procedure: 'MDDF'}
};

var if_question18 = {
  timeline: [question18],
  data: {trialid: 'MDDF_18_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_17'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Alguien deja una rata muerta en la cocina de su vecino.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_19', procedure: 'MDDF'}
};
MDDF.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Alguien deja una rata muerta en la cocina de su vecino.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_20', procedure: 'MDDF'}
};
MDDF.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Alguien deja una rata muerta en la cocina de su vecino.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_21', procedure: 'MDDF'}
};

var if_question21 = {
  timeline: [question21],
  data: {trialid: 'MDDF_21_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_20'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question21);

var instruction_screen_experiment_2 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Disgusto no moral</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_03', procedure: 'MDDF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
MDDF.push(instruction_screen_experiment_2);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Alguien toma un vaso de leche mientras se da cuenta que huele rancia.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_22', procedure: 'MDDF'}
};
MDDF.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Alguien toma un vaso de leche mientras se da cuenta que huele rancia.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_23', procedure: 'MDDF'}
};
MDDF.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Alguien toma un vaso de leche mientras se da cuenta que huele rancia.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_24', procedure: 'MDDF'}
};

var if_question24 = {
  timeline: [question24],
  data: {trialid: 'MDDF_24_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_23'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Alguien toca accidentalmente un cadáver.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_25', procedure: 'MDDF'}
};
MDDF.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Alguien toca accidentalmente un cadáver.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_26', procedure: 'MDDF'}
};
MDDF.push(question26);

var question27 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Alguien toca accidentalmente un cadáver.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_27', procedure: 'MDDF'}
};

var if_question27 = {
  timeline: [question27],
  data: {trialid: 'MDDF_27_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_26'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Un hombre camina descalzo por el césped y pisa caca de perro fresca.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_28', procedure: 'MDDF'}
};
MDDF.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Un hombre camina descalzo por el césped y pisa caca de perro fresca.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_29', procedure: 'MDDF'}
};
MDDF.push(question29);

var question30 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Un hombre camina descalzo por el césped y pisa caca de perro fresca.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_30', procedure: 'MDDF'}
};

var if_question30 = {
  timeline: [question30],
  data: {trialid: 'MDDF_30_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_29'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question30);
/*
var question31 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. La mano de una persona está cubierta de sangre luego de cortarse un dedo accidentalmente.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_31', procedure: 'MDDF'}
};
MDDF.push(question31);

var question32 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. La mano de una persona está cubierta de sangre luego de cortarse un dedo accidentalmente.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_32', procedure: 'MDDF'}
};
MDDF.push(question32);

var question33 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. La mano de una persona está cubierta de sangre luego de cortarse un dedo accidentalmente.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_33', procedure: 'MDDF'}
};

var if_question33 = {
  timeline: [question33],
  data: {trialid: 'MDDF_33_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_32'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question33);
*/

var question34 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Una mujer bebió un vaso de agua que contenía la saliva de otra persona.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_34', procedure: 'MDDF'}
};
MDDF.push(question34);

var question34 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Una mujer bebió un vaso de agua que contenía la saliva de otra persona.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_35', procedure: 'MDDF'}
};
MDDF.push(question34);

var question35 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Una mujer bebió un vaso de agua que contenía la saliva de otra persona.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_36', procedure: 'MDDF'}
};

var if_question35 = {
  timeline: [question35],
  data: {trialid: 'MDDF_36_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_35'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question35);
/*
var question36 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. Una persona accidentalmente estornuda sobre otros pasajeros del tren.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_36', procedure: 'MDDF'}
};
MDDF.push(question36);

var question37 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. Una persona accidentalmente estornuda sobre otros pasajeros del tren.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_37', procedure: 'MDDF'}
};
MDDF.push(question37);

var question38 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Una persona accidentalmente estornuda sobre otros pasajeros del tren.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_38', procedure: 'MDDF'}
};

var if_question38 = {
  timeline: [question38],
  data: {trialid: 'MDDF_38_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_37'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question38);

var question39 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. Una mujer no lava sus manos después de usar el baño.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_39', procedure: 'MDDF'}
};
MDDF.push(question39);

var question40 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. Una mujer no lava sus manos después de usar el baño.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_40', procedure: 'MDDF'}
};
MDDF.push(question40);

var question41 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Una mujer no lava sus manos después de usar el baño.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_41', procedure: 'MDDF'}
};

var if_question41 = {
  timeline: [question41],
  data: {trialid: 'MDDF_41_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_40'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question41);
*/

var instruction_screen_experiment_3 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Situaciones Control</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_04', procedure: 'MDDF'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
MDDF.push(instruction_screen_experiment_3);
/*
var question42 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Un hombre toma el tren para ir al trabajo.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_42', procedure: 'MDDF'}
};
MDDF.push(question42);

var question43 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Un hombre toma el tren para ir al trabajo.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_43', procedure: 'MDDF'}
};
MDDF.push(question43);

var question44 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Un hombre toma el tren para ir al trabajo.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_44', procedure: 'MDDF'}
};

var if_question44 = {
  timeline: [question44],
  data: {trialid: 'MDDF_44_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_43'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question44);
*/
var question45 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Una mujer va a un restaurante a cenar.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_45', procedure: 'MDDF'}
};
MDDF.push(question45);

var question46 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Una mujer va a un restaurante a cenar.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_46', procedure: 'MDDF'}
};
MDDF.push(question46);

var question47 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Una mujer va a un restaurante a cenar.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_47', procedure: 'MDDF'}
};

var if_question47 = {
  timeline: [question47],
  data: {trialid: 'MDDF_47_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_46'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question47);
/*
var question48 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Una persona va a la tienda a comprar comestibles.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_48', procedure: 'MDDF'}
};
MDDF.push(question48);

var question49 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Una persona va a la tienda a comprar comestibles.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_49', procedure: 'MDDF'}
};
MDDF.push(question49);

var question50 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Una persona va a la tienda a comprar comestibles.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_50', procedure: 'MDDF'}
};

var if_question50 = {
  timeline: [question50],
  data: {trialid: 'MDDF_50_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_49'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question50);
*/
var question51 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Una persona toma el bus hacia la ciudad el fin de semana.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_51', procedure: 'MDDF'}
};
MDDF.push(question51);

var question52 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Una persona toma el bus hacia la ciudad el fin de semana.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_52', procedure: 'MDDF'}
};
MDDF.push(question52);

var question53 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Una persona toma el bus hacia la ciudad el fin de semana.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_53', procedure: 'MDDF'}
};

var if_question53 = {
  timeline: [question53],
  data: {trialid: 'MDDF_53_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_52'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question53);

var question54 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Una persona tiende su cama en la mañana.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_54', procedure: 'MDDF'}
};
MDDF.push(question54);

var question55 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Una persona tiende su cama en la mañana.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_55', procedure: 'MDDF'}
};
MDDF.push(question55);

var question56 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Una persona tiende su cama en la mañana.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_56', procedure: 'MDDF'}
};

var if_question56 = {
  timeline: [question56],
  data: {trialid: 'MDDF_56_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_55'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question56);

var question57 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Una persona toma el ascensor para ir al último piso de un edificio.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_57', procedure: 'MDDF'}
};
MDDF.push(question57);

var question58 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Una persona toma el ascensor para ir al último piso de un edificio.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_58', procedure: 'MDDF'}
};
MDDF.push(question58);

var question59 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Una persona toma el ascensor para ir al último piso de un edificio.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_59', procedure: 'MDDF'}
};

var if_question59 = {
  timeline: [question59],
  data: {trialid: 'MDDF_59_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_58'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question59);
/*
var question60 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. Una persona come una manzana al desayuno.</p><p>¿En qué medida esto le parece inadecuado o adecuado?</p></div>', options: ['Muy inadecuado', 'Medianamente inadecuado', 'Poco inadecuado', 'Sin opinion', 'Un poco adecuado', 'Medianamente adecuado', 'Altamente adecuado'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_60', procedure: 'MDDF'}
};
MDDF.push(question60);

var question61 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. Una persona come una manzana al desayuno.</p><p>¿Usted considera que en esta situación alguien ha sufrido un daño?</p></div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'MDDF_61', procedure: 'MDDF'}
};
MDDF.push(question61);

var question62 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Una persona come una manzana al desayuno.</p><p>Si usted considera que alguien sufrió un daño en esta situación, ¿Que tanto daño cree usted que sufrió? </p></div></br>", require_movement:true, required: true, min: 1, max: 7, slider_width: 500, slider_start: 4, step: 1, labels: ["Poco daño", "Mucho daño"], button_label: "Siguiente",
  data: {trialid: 'MDDF_62', procedure: 'MDDF'}
};

var if_question62 = {
  timeline: [question62],
  data: {trialid: 'MDDF_62_if', procedure: 'MDDF'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'MDDF_61'))["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  }
}
MDDF.push(if_question62);
*/
MDDF.unshift(instruction_screen_experiment);
MDDF.push.apply(questions, MDDF);
call_function("MDDF");
