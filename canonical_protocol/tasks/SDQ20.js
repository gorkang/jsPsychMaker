/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
    
questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SDQ20') );
SDQ20 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>CUESTIONARIO SOBRE DISOCIACIONES</big></b><br/>Esta preguntas o afirmaciones sirven para averiguar sobre síntomas o experiencias físicas que usted puede haber tenido o tener actualmente en diferentes partes de su cuerpo, momentáneamente o por largo tiempo. <br><br> Por favor indique con qué frecuencia le han ocurrido estas experiencias durante el último año. <br><br> Si tiene o ha tenido un síntoma, experiencia o sensación, por favor indique si un médico lo ha relacionado con una enfermedad física.<br><br> Si ha seleccionado SI, por favor escriba la causa física (si la sabe).<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'SDQ20'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tengo problemas al orinar.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_001', procedure: 'SDQ20'}
};
SDQ20.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_002', procedure: 'SDQ20'}
};

var if_question002 = {
  timeline: [question002],
  data: {trialid: 'SDQ20_002_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_001'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question002);

var question003 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_003', procedure: 'SDQ20'}
};

var if_question003 = {
  timeline: [question003],
  data: {trialid: 'SDQ20_003_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_001'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_002'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me desagradan sabores que habitualmente me gustan (mujeres, en momentos que NO SEAN EMBARAZO O MENSTRUACIÓN).', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_004', procedure: 'SDQ20'}
};
SDQ20.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_005', procedure: 'SDQ20'}
};

var if_question005 = {
  timeline: [question005],
  data: {trialid: 'SDQ20_005_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_004'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question005);

var question006 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_006', procedure: 'SDQ20'}
};

var if_question006 = {
  timeline: [question006],
  data: {trialid: 'SDQ20_006_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_004'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_005'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Oigo los sonidos cercanos como si vinieran de lejos.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_007', procedure: 'SDQ20'}
};
SDQ20.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_008', procedure: 'SDQ20'}
};

var if_question008 = {
  timeline: [question008],
  data: {trialid: 'SDQ20_008_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_007'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question008);

var question009 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_009', procedure: 'SDQ20'}
};

var if_question009 = {
  timeline: [question009],
  data: {trialid: 'SDQ20_009_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_007'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_008'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tengo dolor al orinar.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_010', procedure: 'SDQ20'}
};
SDQ20.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_011', procedure: 'SDQ20'}
};

var if_question011 = {
  timeline: [question011],
  data: {trialid: 'SDQ20_011_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_010'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question011);

var question012 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_012', procedure: 'SDQ20'}
};

var if_question012 = {
  timeline: [question012],
  data: {trialid: 'SDQ20_012_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_010'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_011'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Siento mi cuerpo o parte de él entumecido.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_013', procedure: 'SDQ20'}
};
SDQ20.push(question013);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_014', procedure: 'SDQ20'}
};

var if_question014 = {
  timeline: [question014],
  data: {trialid: 'SDQ20_014_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_013'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question014);

var question015 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_015', procedure: 'SDQ20'}
};

var if_question015 = {
  timeline: [question015],
  data: {trialid: 'SDQ20_015_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_013'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_014'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Veo a las personas o cosas más grandes de lo habitual.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_016', procedure: 'SDQ20'}
};
SDQ20.push(question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_017', procedure: 'SDQ20'}
};

var if_question017 = {
  timeline: [question017],
  data: {trialid: 'SDQ20_017_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_016'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question017);

var question018 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_018', procedure: 'SDQ20'}
};

var if_question018 = {
  timeline: [question018],
  data: {trialid: 'SDQ20_018_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_016'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_017'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Tengo ataques que parecen convulsiones epilépticas.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_019', procedure: 'SDQ20'}
};
SDQ20.push(question019);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_020', procedure: 'SDQ20'}
};

var if_question020 = {
  timeline: [question020],
  data: {trialid: 'SDQ20_020_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_019'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question020);

var question021 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_021', procedure: 'SDQ20'}
};

var if_question021 = {
  timeline: [question021],
  data: {trialid: 'SDQ20_021_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_019'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_020'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question021);

var question022 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mi cuerpo o parte de él es insensible al dolor.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_022', procedure: 'SDQ20'}
};
SDQ20.push(question022);

var question023 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_023', procedure: 'SDQ20'}
};

var if_question023 = {
  timeline: [question023],
  data: {trialid: 'SDQ20_023_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_022'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question023);

var question024 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_024', procedure: 'SDQ20'}
};

var if_question024 = {
  timeline: [question024],
  data: {trialid: 'SDQ20_024_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_022'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_023'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question024);

var question025 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me desagradan olores que habitualmente me agradan.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_025', procedure: 'SDQ20'}
};
SDQ20.push(question025);

var question026 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_026', procedure: 'SDQ20'}
};

var if_question026 = {
  timeline: [question026],
  data: {trialid: 'SDQ20_026_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_025'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question026);

var question027 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_027', procedure: 'SDQ20'}
};

var if_question027 = {
  timeline: [question027],
  data: {trialid: 'SDQ20_027_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_025'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_026'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question027);

var question028 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me duelen los genitales (en otros momentos que no sea el coito).', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_028', procedure: 'SDQ20'}
};
SDQ20.push(question028);

var question029 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_029', procedure: 'SDQ20'}
};

var if_question029 = {
  timeline: [question029],
  data: {trialid: 'SDQ20_029_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_028'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question029);

var question030 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_030', procedure: 'SDQ20'}
};

var if_question030 = {
  timeline: [question030],
  data: {trialid: 'SDQ20_030_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_028'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_029'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question030);

var question031 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No puedo oír por momentos (como si estuviera sordo).', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_031', procedure: 'SDQ20'}
};
SDQ20.push(question031);

var question032 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_032', procedure: 'SDQ20'}
};

var if_question032 = {
  timeline: [question032],
  data: {trialid: 'SDQ20_032_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_031'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question032);

var question033 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_033', procedure: 'SDQ20'}
};

var if_question033 = {
  timeline: [question033],
  data: {trialid: 'SDQ20_033_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_031'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_032'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question033);

var question034 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No puedo ver por momentos (como si estuviera ciego).', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_034', procedure: 'SDQ20'}
};
SDQ20.push(question034);

var question035 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_035', procedure: 'SDQ20'}
};

var if_question035 = {
  timeline: [question035],
  data: {trialid: 'SDQ20_035_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_034'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question035);

var question036 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_036', procedure: 'SDQ20'}
};

var if_question036 = {
  timeline: [question036],
  data: {trialid: 'SDQ20_036_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_034'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_035'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question036);

var question037 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Veo las cosas alrededor de mi diferentes de lo habitual (por ejemplo: como viéndolas por un túnel o viendo solo parte de un objeto).', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_037', procedure: 'SDQ20'}
};
SDQ20.push(question037);

var question038 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_038', procedure: 'SDQ20'}
};

var if_question038 = {
  timeline: [question038],
  data: {trialid: 'SDQ20_038_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_037'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question038);

var question039 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_039', procedure: 'SDQ20'}
};

var if_question039 = {
  timeline: [question039],
  data: {trialid: 'SDQ20_039_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_037'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_038'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question039);

var question040 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Puedo oler mucho MEJOR o PEOR que habitualmente (aunque no tenga catarro).', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_040', procedure: 'SDQ20'}
};
SDQ20.push(question040);

var question041 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_041', procedure: 'SDQ20'}
};

var if_question041 = {
  timeline: [question041],
  data: {trialid: 'SDQ20_041_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_040'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question041);

var question042 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_042', procedure: 'SDQ20'}
};

var if_question042 = {
  timeline: [question042],
  data: {trialid: 'SDQ20_042_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_040'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_041'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question042);

var question043 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Es como si mi cuerpo, o parte de él, hubiera desaparecido.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_043', procedure: 'SDQ20'}
};
SDQ20.push(question043);

var question044 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_044', procedure: 'SDQ20'}
};

var if_question044 = {
  timeline: [question044],
  data: {trialid: 'SDQ20_044_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_043'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question044);

var question045 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_045', procedure: 'SDQ20'}
};

var if_question045 = {
  timeline: [question045],
  data: {trialid: 'SDQ20_045_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_043'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_044'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question045);

var question046 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No puedo tragar o trago con gran esfuerzo.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_046', procedure: 'SDQ20'}
};
SDQ20.push(question046);

var question047 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_047', procedure: 'SDQ20'}
};

var if_question047 = {
  timeline: [question047],
  data: {trialid: 'SDQ20_047_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_046'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question047);

var question048 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_048', procedure: 'SDQ20'}
};

var if_question048 = {
  timeline: [question048],
  data: {trialid: 'SDQ20_048_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_046'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_047'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question048);

var question049 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No puedo dormir a lo largo de la noche y estoy activo al día siguiente.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_049', procedure: 'SDQ20'}
};
SDQ20.push(question049);

var question050 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_050', procedure: 'SDQ20'}
};

var if_question050 = {
  timeline: [question050],
  data: {trialid: 'SDQ20_050_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_049'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question050);

var question051 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_051', procedure: 'SDQ20'}
};

var if_question051 = {
  timeline: [question051],
  data: {trialid: 'SDQ20_051_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_049'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_050'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question051);

var question052 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No puedo hablar (o solo con gran esfuerzo), o solo puedo susurrar.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_052', procedure: 'SDQ20'}
};
SDQ20.push(question052);

var question053 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_053', procedure: 'SDQ20'}
};

var if_question053 = {
  timeline: [question053],
  data: {trialid: 'SDQ20_053_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_052'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question053);

var question054 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_054', procedure: 'SDQ20'}
};

var if_question054 = {
  timeline: [question054],
  data: {trialid: 'SDQ20_054_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_052'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_053'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question054);

var question055 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me quedo paralizado por momentos.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_055', procedure: 'SDQ20'}
};
SDQ20.push(question055);

var question056 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_056', procedure: 'SDQ20'}
};

var if_question056 = {
  timeline: [question056],
  data: {trialid: 'SDQ20_056_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_055'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question056);

var question057 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_057', procedure: 'SDQ20'}
};

var if_question057 = {
  timeline: [question057],
  data: {trialid: 'SDQ20_057_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_055'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_056'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question057);

var question058 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me quedo rígida por momentos.', options: ['&nbsp;Nunca', '&nbsp;Pocas veces', '&nbsp;De vez en cuando', '&nbsp;Frecuentemente', '&nbsp;Casi todo o todo el tiempo'], required: true}],
  data: {trialid: 'SDQ20_058', procedure: 'SDQ20'}
};
SDQ20.push(question058);

var question059 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Se conoce la causa física?', options: ['&nbsp;Si', '&nbsp;No'], required: true}],
  data: {trialid: 'SDQ20_059', procedure: 'SDQ20'}
};

var if_question059 = {
  timeline: [question059],
  data: {trialid: 'SDQ20_059_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_058'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      return true;
    } else {
      return false;
    }
  }
};
SDQ20.push(if_question059);

var question060 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Sobre todo por:</div>", type: 'text', required: true}],
  data: {trialid: 'SDQ20_060', procedure: 'SDQ20'}
};

var if_question060 = {
  timeline: [question060],
  data: {trialid: 'SDQ20_060_if', procedure: 'SDQ20'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_058'))["response"])["Q0"]).trim();
    if(data != 'Nunca'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDQ20_059'))["response"])["Q0"]).trim();
      if (data2 == 'Si') {
        return true;
      }
    }
    return false;
  }
};
SDQ20.push(if_question060);

// Randomize order of items
//if (debug_mode === false) SDQ20 = jsPsych.randomization.repeat(SDQ20,1);
SDQ20.unshift(instruction_screen_experiment);
questions.push.apply(questions, SDQ20);

call_function('SDQ20');