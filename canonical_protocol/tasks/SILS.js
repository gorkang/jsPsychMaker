/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Multifactor Leadership Questionnaire 5S

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SILS') );
SILS = [];    //temporal timeline

//jobs = ["Directivo", "Profesor"];
//if (debug_mode == true && typeof job === 'undefined') job = jobs[Math.floor(Math.random()*jobs.length)];

var question00 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indique su cargo actual</div>', options: ['&nbsp;Profesor', '&nbsp;Directivo'], required: true, horizontal: false}],
  data: {trialid: 'SILS_00', procedure: 'SILS'},
  on_finish: function (data) {
    job = (JSON.parse(data.response))["Q0"].trim();
  }
};

var if_question00 = {
    timeline: [question00],
    data: {trialid: 'SILS_00_if', procedure: 'SILS'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        if (typeof job === 'undefined'){
            return true;
        } else {
            return false;
        }
    }
};

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages:function () {
      return [`<b><big>SILS</big></b><BR><BR>` + (job == "Directivo" ? "El objetivo de este cuestionario es proporcionar una descripción de su liderazgo.<br><br>Por favor, responda todos los ítems en forma anónima. Sus respuestas son absolutamente confidenciales, pues la información será analizada de forma tal que nadie será identificado (a).<br><br>Agradecemos de antemano su colaboración." : "El objetivo de este cuestionario es proporcionar una descripción del liderazgo de su equipo directivo.<br><br>Por favor, responda todos los ítems en forma anónima. Sus respuestas son absolutamente confidenciales, pues la información será analizada de forma tal que nadie será identificado (a).<br><br>Agradecemos de antemano su colaboración.") + `<BR><BR>`, `<b><big>Instrucciones</big></b><BR><BR>Aparecen a continuación 21 afirmaciones. Juzgue la frecuencia en que cada situación es realizada por ` + (job == "Directivo" ? "usted" : "su equipo directivo") + `.<BR><BR>`]
    },
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'SILS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>1. ' + (job == "Directivo" ? 'Desarrollo un plan para fortalecer la convivencia al interior del establecimiento.' : 'Desarrolla un plan para fortalecer la convivencia al interior del establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_01', procedure: 'SILS'}
};
SILS.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>2. ' + (job == "Directivo" ? 'Atiendo los conflictos de convivencia entre estamentos del establecimiento.' : 'Atiende los conflictos de convivencia entre estamentos del establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_02', procedure: 'SILS'}
};
SILS.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>3. ' + (job == "Directivo" ? 'Establezco estándares escolares y expectativas claras para el equipo del establecimiento.' : 'Establece estándares escolares y expectativas claras para el equipo del establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_03', procedure: 'SILS'}
};
SILS.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>4. ' + (job == "Directivo" ? 'Soy experto/a acerca del liderazgo educativo.' : 'Es experto/a acerca del liderazgo educativo.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_04', procedure: 'SILS'}
};
SILS.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>5. ' + (job == "Directivo" ? 'Soy capaz de responder preguntas acerca del establecimiento.' : 'Es capaz de responder preguntas acerca del establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_05', procedure: 'SILS'}
};
SILS.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>6. ' + (job == "Directivo" ? 'Sé de lo que hablo cuando me refiero a temáticas educativas.' : 'Sabe de lo que habla cuando se refiere a temáticas educativas.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_06', procedure: 'SILS'}
};
SILS.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>7. ' + (job == "Directivo" ? 'Reconozco y aprecio los esfuerzos del personal del colegio/profesores/as en búsqueda de mejoras en sus prácticas.' : 'Reconoce y aprecia los esfuerzos del personal del colegio/profesores/as en búsqueda de mejoras en sus prácticas.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_07', procedure: 'SILS'}
};
SILS.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>8. ' + (job == "Directivo" ? 'Reconozco y aprecio los esfuerzos del personal del colegio/profesores/as con relación a sus necesidades y habilidades individuales.' : 'Reconoce y aprecia los esfuerzos del personal del colegio/profesores/as con relación a sus necesidades y habilidades individuales.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_08', procedure: 'SILS'}
};
SILS.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>9. ' + (job == "Directivo" ? 'Reconozco y aprecio los esfuerzos del personal del colegio/profesores/as de trabajar colaborativamente.' : 'Reconoce y aprecia los esfuerzos del personal del colegio/profesores/as de trabajar colaborativamente.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_09', procedure: 'SILS'}
};
SILS.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>10. ' + (job == "Directivo" ? 'Persevero frente a los desafíos que se presenten en el establecimiento.' : 'Persevera frente a los desafíos que se presenten en el establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_10', procedure: 'SILS'}
};
SILS.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>11. ' + (job == "Directivo" ? 'Reconozco y actúo de manera efectiva frente a desafíos.' : 'Reconoce y actúa de manera efectiva frente a desafíos.') + '.</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_11', procedure: 'SILS'}
};
SILS.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>12. ' + (job == "Directivo" ? 'Apoyo la implementación de buenas prácticas incluso frente a dificultades.' : 'Apoya la implementación de buenas prácticas incluso frente a dificultades.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_12', procedure: 'SILS'}
};
SILS.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>13. ' + (job == "Directivo" ? 'Establezco sistemas de comunicación claros entre estamentos del establecimiento.' : 'Establece sistemas de comunicación claros entre estamentos del establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_13', procedure: 'SILS'}
};
SILS.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>14. ' + (job == "Directivo" ? 'Comunico regularmente los fracasos con el fin de superarlos.' : 'Comunica regularmente los fracasos con el fin de superarlos.') + '.</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_14', procedure: 'SILS'}
};
SILS.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>15. ' + (job == "Directivo" ? 'Promuevo la comunicación asertiva y el respeto en el establecimiento.' : 'Promueve la comunicación asertiva y el respeto en el establecimiento.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_15', procedure: 'SILS'}
};
SILS.push(question15);

var question16 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>16. ' + (job == "Directivo" ? 'Hablo de forma optimista sobre el futuro, observando problemáticas desde distintos ángulos.' : 'Habla de forma optimista sobre el futuro, observando problemáticas desde distintos ángulos.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_16', procedure: 'SILS'}
};
SILS.push(question16);

var question17 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>17. ' + (job == "Directivo" ? 'Demuestro confianza en que las metas serán cumplidas.' : 'Demuestra confianza en que las metas serán cumplidas.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_17', procedure: 'SILS'}
};
SILS.push(question17);

var question18 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>18. ' + (job == "Directivo" ? 'Enfatizo la importancia de tener una misión común.' : 'Enfatiza la importancia de tener una misión común.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_18', procedure: 'SILS'}
};
SILS.push(question18);

var question19 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>19. ' + (job == "Directivo" ? 'Estoy disponible en caso de que necesiten mi ayuda.' : 'Está disponible en caso de necesitar su ayuda.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_19', procedure: 'SILS'}
};
SILS.push(question19);

var question20 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>20. ' + (job == "Directivo" ? 'Concentro toda mi atención cuando resuelvo problemas, errores o quejas.' : 'Concentra toda su atención cuando resuelve problemas, errores o quejas.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_20', procedure: 'SILS'}
};
SILS.push(question20);

var question21 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
    let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como parte del" : "Mi") + ' equipo directivo: </b> <br> <br>21. ' + (job == "Directivo" ? 'Soy efectivo/a en satisfacer las necesidades de trabajo con otros/as.' : 'Es efectivo/a en satisfacer las necesidades de trabajo con otros/as.') + '</div>';
    return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'SILS_21', procedure: 'SILS'}
};
SILS.push(question21);

SILS.unshift(instruction_screen_experiment);
SILS.unshift(if_question00);

SILS.push.apply(questions, SILS);
call_function("SILS");
