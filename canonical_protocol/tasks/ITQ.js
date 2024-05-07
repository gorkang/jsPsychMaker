/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ITQ') );
ITQ = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: [`<p><left><b><big>Cuestionario internacional sobre estrés postraumático (ITQ)</big></b><br/>Por favor responda las siguientes preguntas.<br/><br/></p>`],
  data:{trialid: 'Instructions_001', procedure: 'ITQ'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Por favor, indique de las siguientes alternativas, en cual se ubicaría la experiencia traumática que más le perturba y responda a las siguientes preguntas relacionadas con dicha experiencia.', options: ['&nbsp;Violencia de pareja', '&nbsp;Abuso (sexual, físico, emocional) en la infancia', '&nbsp;Accidente de tránsito/desastre natural', '&nbsp;Robo/hurto', '&nbsp;Otro', '&nbsp;No he sido víctima de trauma'], required: true}],
  data: {trialid: 'ITQ_001', procedure: 'ITQ'}
};
ITQ.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Cuándo ocurrió la experiencia de violencia más impactante?', options: ['&nbsp;Hace menos de 6 meses', '&nbsp;Entre 6 y 12 meses', '&nbsp;Entre 1 y 5 años', '&nbsp;Entre 5 y 10 años', '&nbsp;Entre 10 y 20 años', '&nbsp;Hace más de 20 años'], required: true}],
  data: {trialid: 'ITQ_002', procedure: 'ITQ'}
};

var if_question002 = {
  timeline: [question002],
  data: {trialid: 'ITQ_002_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
}
ITQ.push(if_question002);

var instructions_002 = {
  type: 'instructions',
  pages: [`<p>A continuación se presenta una serie de problemas que las personas a veces informan en respuesta a eventos traumáticos o estresantes de la vida. Por favor, lea atentamente cada pregunta, después marque una de las opciones para indicar cuánto le ha molestado ese problema durante el pasado mes.<br/><br/></p>`],
  data: {trialid: 'instructions_002', procedure: 'ITQ'},
  show_clickable_nav: true
};

var if_instructions_002 = {
  timeline: [instructions_002],
  data: {trialid: 'ITQ_instructions_002_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_instructions_002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tener sueños perturbadores que reproducen parte de la experiencia o están claramente relacionados con la experiencia?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_003', procedure: 'ITQ'}
};

var if_question003 = {
  timeline: [question003],
  data: {trialid: 'ITQ_003_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tener imágenes o recuerdos intensos que a veces vienen a su mente, en los cuales siente que la experiencia está ocurriendo de nuevo aquí y ahora?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_004', procedure: 'ITQ'}
};

var if_question004 = {
  timeline: [question004],
  data: {trialid: 'ITQ_004_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Evitar pensamientos, sentimientos, sensaciones físicas u otros estímulos internos que le recuerden la experiencia?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_005', procedure: 'ITQ'}
};

var if_question005 = {
  timeline: [question005],
  data: {trialid: 'ITQ_005_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Evitar personas, lugares, conversaciones, objetos, actividades, situaciones u otros estímulos externos que le recuerden la experiencia?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_006', procedure: 'ITQ'}
};

var if_question006 = {
  timeline: [question006],
  data: {trialid: 'ITQ_006_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Estar "súper alerta," vigilante o en guardia?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_007', procedure: 'ITQ'}
};

var if_question007 = {
  timeline: [question007],
  data: {trialid: 'ITQ_007_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Sentirse sobresaltado/a o asustarse fácilmente?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_008', procedure: 'ITQ'}
};

var if_question008 = {
  timeline: [question008],
  data: {trialid: 'ITQ_008_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>En el último mes, si ha tenido alguno de los problemas anteriormente mencionados, indique cómo le han afectado</b>', prompt: '¿Han afectado a sus relaciones o a su vida social?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_009', procedure: 'ITQ'}
};

var if_question009 = {
  timeline: [question009],
  data: {trialid: 'ITQ_009_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>En el último mes, si ha tenido alguno de los problemas anteriormente mencionados, indique cómo le han afectado</b>', prompt: '¿Han afectado a su trabajo o su capacidad para trabajar?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_010', procedure: 'ITQ'}
};

var if_question010 = {
  timeline: [question010],
  data: {trialid: 'ITQ_010_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>En el último mes, si ha tenido alguno de los problemas anteriormente mencionados, indique cómo le han afectado</b>', prompt: '¿Han afectado a alguna otra área importante de su vida, como la crianza de sus hijos o hijas, el trabajo en la escuela o en la universidad, u otras actividades importantes?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_011', procedure: 'ITQ'}
};

var if_question011 = {
  timeline: [question011],
  data: {trialid: 'ITQ_011_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question011);

var instructions_003 = {
  type: 'instructions',
  pages: [`<p>A continuación se presentan problemas que a veces experimentan las personas que han sufrido eventos estresantes o traumáticos. Las preguntas se refieren a la forma en que usted normalmente se siente, a la manera habitual en que piensa acerca de sí mismo y el modo en que normalmente se relaciona con los demás. Conteste cada una de las siguientes preguntas pensando en cómo de cierto es cada ítem para usted.<br/><br/></p>`],
  data: {trialid: 'instructions_003', procedure: 'ITQ'},
  show_clickable_nav: true
};

var if_instructions_003 = {
  timeline: [instructions_003],
  data: {trialid: 'ITQ_instructions_003_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_instructions_003);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>¿Cómo de cierto es para usted?</b>', prompt: 'Cuando estoy molesto/a, tardo bastante tiempo en calmarme.', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_012', procedure: 'ITQ'}
};

var if_question012 = {
  timeline: [question012],
  data: {trialid: 'ITQ_012_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>¿Cómo de cierto es para usted?</b>', prompt: 'Me siento aletargado /a o emocionalmente apagado/a.', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_013', procedure: 'ITQ'}
};

var if_question013 = {
  timeline: [question013],
  data: {trialid: 'ITQ_013_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question013);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>¿Cómo de cierto es para usted?</b>', prompt: 'Me siento fracasado/a.', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_014', procedure: 'ITQ'}
};

var if_question014 = {
  timeline: [question014],
  data: {trialid: 'ITQ_014_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question014);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>¿Cómo de cierto es para usted?</b>', prompt: 'Me siento inútil.', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_015', procedure: 'ITQ'}
};

var if_question015 = {
  timeline: [question015],
  data: {trialid: 'ITQ_015_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>¿Cómo de cierto es para usted?</b>', prompt: 'Me siento distante o aislado/a de la gente.', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_016', procedure: 'ITQ'}
};

var if_question016 = {
  timeline: [question016],
  data: {trialid: 'ITQ_016_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>¿Cómo de cierto es para usted?</b>', prompt: 'Me resulta difícil estar emocionalmente cercano/a a la gente.', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_017', procedure: 'ITQ'}
};

var if_question017 = {
  timeline: [question017],
  data: {trialid: 'ITQ_017_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question017);

var question018 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>En el mes pasado, si ha tenido alguno de los problemas emocionales, con uno mismo o con los demás anteriormente mencionados, indique cómo le han afectado:</b>', prompt: '¿Han creado preocupación o angustia sobre sus relaciones o su vida social?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_018', procedure: 'ITQ'}
};

var if_question018 = {
  timeline: [question018],
  data: {trialid: 'ITQ_018_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>En el mes pasado, si ha tenido alguno de los problemas emocionales, con uno mismo o con los demás anteriormente mencionados, indique cómo le han afectado:</b>', prompt: '¿Han afectado a su trabajo o a su capacidad para trabajar?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_019', procedure: 'ITQ'}
};

var if_question019 = {
  timeline: [question019],
  data: {trialid: 'ITQ_019_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question019);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{preamble: '<b>En el mes pasado, si ha tenido alguno de los problemas emocionales, con uno mismo o con los demás anteriormente mencionados, indique cómo le han afectado:</b>', prompt: '¿Han afectado a otras áreas importantes de su vida, como la crianza de sus hijos o hijas, el trabajo en la escuela o en la universidad, u otras actividades importantes?', options: ['&nbsp;Nada', '&nbsp;Poco', '&nbsp;Moderadamente', '&nbsp;Bastante', '&nbsp;Extremadamente'], required: true}],
  data: {trialid: 'ITQ_020', procedure: 'ITQ'}
};

var if_question020 = {
  timeline: [question020],
  data: {trialid: 'ITQ_020_if', procedure: 'ITQ'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'ITQ_001'))["response"])["Q0"]).trim();
    if(data != 'No he sido víctima de trauma'){
      return true;
    } else {
      return false;
    }
  }
};
ITQ.push(if_question020);

// Randomize order of items
//if (debug_mode === false) ITQ = jsPsych.randomization.repeat(ITQ,1);
ITQ.unshift(instruction_screen_experiment);
questions.push.apply(questions, ITQ);

call_function('ITQ');