/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Multifactor Leadership Questionnaire 5S

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('MLQ') );
MLQ = [];    //temporal timeline

jobs = ["Directivo", "Profesor"];
if (debug_mode == true && typeof job === 'undefined') job = jobs[Math.floor(Math.random()*jobs.length)];

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages:function () {
      return [`<b><big>MLQ</big></b><BR><BR>` + (job == "Directivo" ? "El objetivo de este cuestionario es proporcionar una descripción de su <b>ESTILO DE LIDERAZGO</b>. <br><br> Por favor, trate de responder todos los ítems. La información proporcionada tiene una finalidad netamente académica y será utilizada en una investigación sobre el liderazgo del equipo directivo. <br><br>Agradecemos de antemano su colaboración." : "El objetivo de este cuestionario es proporcionar una descripción del <b>LIDERAZGO DE SU DIRECTOR (O DIRECTORA)</b>.<br><br>Por favor, responda todos los ítems en forma anónima. Sus respuestas son absolutamente confidenciales, pues la información será analizada de forma tal que nadie será identificado (a).<br><br>Agradecemos de antemano su colaboración.") + `<BR><BR>`, `<b><big>Instrucciones</big></b><BR><BR>Aparecen a continuación cuarenta y cinco afirmaciones. Juzgue la frecuencia en que cada situación es realizada por ` + (job == "Directivo" ? "usted" : "su director(a)") + `<BR><BR>`]
    },
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'MLQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>1. ' + (job == "Directivo" ? 'Presto ayuda a mis alumnos(as) cuando observo sus esfuerzos' : 'Me presta ayuda cuando observa mis esfuerzos') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_01', procedure: 'MLQ'}
};
MLQ.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>2. ' + (job == "Directivo" ? 'Proporciono a mis alumnos(as) nuevas formas de enfocar problemas' : 'Me proporciona nuevas formas de enfocar problemas') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_02', procedure: 'MLQ'}
};
MLQ.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>3. ' + (job == "Directivo" ? 'No intervengo hasta que los problemas se agravan' : 'No interviene hasta que los problemas se agravan') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_03', procedure: 'MLQ'}
};
MLQ.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>4. ' + (job == "Directivo" ? 'Centro mi atención principalmente en aquello que no funciona de acuerdo con lo previsto' : 'Centra su atención principalmente en aquello que no funciona de acuerdo con lo previsto') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_04', procedure: 'MLQ'}
};
MLQ.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>5. ' + (job == "Directivo" ? 'Evito involucrarme cuando surgen temas importantes' : 'Evita involucrarse cuando surgen temas importantes') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_05', procedure: 'MLQ'}
};
MLQ.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>6. ' + (job == "Directivo" ? 'Doy a conocer cuáles son mis valores y principios más importantes' : 'Da a conocer cuáles son sus valores y principios más importantes') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_06', procedure: 'MLQ'}
};
MLQ.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>7. ' + (job == "Directivo" ? 'Estoy ausente cuando se me necesita' : 'Está ausente cuando se le necesita') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_07', procedure: 'MLQ'}
};
MLQ.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>8. ' + (job == "Directivo" ? 'Considero diferentes perspectivas cuando intento solucionar los problemas' : 'Considera diferentes perspectivas cuando intenta solucionar los problemas') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_08', procedure: 'MLQ'}
};
MLQ.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>9. ' + (job == "Directivo" ? 'Hablo de forma optimista sobre el futuro' : 'Habla de forma optimista sobre el futuro') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_09', procedure: 'MLQ'}
};
MLQ.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>10. ' + (job == "Directivo" ? 'Hago sentir a los demás orgullosos de trabajar conmigo' : 'Hace sentir a los demás orgullosos de trabajar con él (ella)') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_10', procedure: 'MLQ'}
};
MLQ.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>11. ' + (job == "Directivo" ? 'Personalizo las responsabilidades cuando se fijan los objetivos' : 'Personaliza las responsabilidades cuando se fijan los objetivos') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_11', procedure: 'MLQ'}
};
MLQ.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>12. ' + (job == "Directivo" ? 'Espero que las cosas vayan mal antes de intervenir' : 'Espera que las cosas vayan mal antes de intervenir') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_12', procedure: 'MLQ'}
};
MLQ.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>13. ' + (job == "Directivo" ? 'Hablo entusiastamente acerca de qué necesidades deben ser satisfechas' : 'Habla entusiastamente acerca de qué necesidades deben ser satisfechas') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_13', procedure: 'MLQ'}
};
MLQ.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>14. ' + (job == "Directivo" ? 'Enfatizo la importancia de tener un fuerte sentido del deber' : 'Enfatiza la importancia de tener un fuerte sentido del deber') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_14', procedure: 'MLQ'}
};
MLQ.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>15. ' + (job == "Directivo" ? 'Dedico tiempo a enseñar y capacitar al equipo de profesores' : 'Dedica tiempo a enseñar y capacitar al equipo de profesores') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_15', procedure: 'MLQ'}
};
MLQ.push(question15);

var question16 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>16. ' + (job == "Directivo" ? 'Establezco incentivos relacionados con el logro de objetivos' : 'Establece incentivos relacionados con el logro de objetivos') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_16', procedure: 'MLQ'}
};
MLQ.push(question16);

var question17 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>17. ' + (job == "Directivo" ? 'Muestro que soy partidario de “si yo no lo he roto, no lo arreglo”' : 'Muestra que es partidario de “si yo no le he roto, no lo arreglo”') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_17', procedure: 'MLQ'}
};
MLQ.push(question17);

var question18 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>18. ' + (job == "Directivo" ? 'Voy más allá de mi propio interés por el bien del grupo' : 'Va más allá de mi propio interés por el bien del grupo') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_18', procedure: 'MLQ'}
};
MLQ.push(question18);

var question19 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>19. ' + (job == "Directivo" ? 'Trato a los demás como individuos más que como miembros de un grupo' : 'Trata a los demás como individuos más que como miembros de un grupo') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_19', procedure: 'MLQ'}
};
MLQ.push(question19);

var question20 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>20. ' + (job == "Directivo" ? 'Demuestro que los problemas deben llegar a ser crónicos antes de actuar' : 'Demuestra que los problemas deben llegar a ser crónicos antes de actuar') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_20', procedure: 'MLQ'}
};
MLQ.push(question20);

var question21 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>21. ' + (job == "Directivo" ? 'Me he ganado el respeto del profesorado' : 'Se ha ganado el respeto del profesorado') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_21', procedure: 'MLQ'}
};
MLQ.push(question21);

var question22 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>22. ' + (job == "Directivo" ? 'Concentro toda mi atención cuando resuelvo problemas, errores o quejas' : 'Concentra toda su atención cuando resuelve problemas, errores o quejas') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_22', procedure: 'MLQ'}
};
MLQ.push(question22);

var question23 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>23. ' + (job == "Directivo" ? 'Considero los aspectos morales y éticos en las decisiones que tomo' : 'Considera los aspectos morales y éticos en las decisiones que toma') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_23', procedure: 'MLQ'}
};
MLQ.push(question23);

var question24 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>24. ' + (job == "Directivo" ? 'Hago un seguimiento de los errores detectados' : 'Hace un seguimiento de los errores detectados') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_24', procedure: 'MLQ'}
};
MLQ.push(question24);

var question25 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>25. ' + (job == "Directivo" ? 'Demuestro un sentido de autoridad y confianza' : 'Demuestra un sentido de autoridad y confianza') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_25', procedure: 'MLQ'}
};
MLQ.push(question25);

var question26 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>26. ' + (job == "Directivo" ? 'Presento una convincente visión de futuro' : 'Presenta una convincente visión de futuro') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_26', procedure: 'MLQ'}
};
MLQ.push(question26);

var question27 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>27. ' + (job == "Directivo" ? 'Comunico regularmente los fracasos con el fin de superarlos' : 'Comunica regularmente los fracasos con el fin de superarlos') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_27', procedure: 'MLQ'}
};
MLQ.push(question27);

var question28 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>28. ' + (job == "Directivo" ? 'Evito tomar decisiones' : 'Evita tomar decisiones') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_28', procedure: 'MLQ'}
};
MLQ.push(question28);

var question29 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>29. ' + (job == "Directivo" ? 'Considero que cada persona tiene necesidades y habilidades diferentes' : 'Considera que cada persona tiene necesidades y habilidades diferentes') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_29', procedure: 'MLQ'}
};
MLQ.push(question29);

var question30 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>30. ' + (job == "Directivo" ? 'Hago ver al resto los problemas desde muy distintos ángulos' : 'Hace ver al resto los problemas desde muy distintos ángulos') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_30', procedure: 'MLQ'}
};
MLQ.push(question30);

var question31 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>31. ' + (job == "Directivo" ? 'Ayudo a los demás a mejorar sus capacidades' : 'Ayuda a los demás a mejorar sus capacidades') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_31', procedure: 'MLQ'}
};
MLQ.push(question31);

var question32 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>32. ' + (job == "Directivo" ? 'Sugiero buscar nuevas formas de completar los trabajos' : 'Sugiere buscar nuevas formas de completar los trabajos') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_32', procedure: 'MLQ'}
};
MLQ.push(question32);

var question33 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>33. ' + (job == "Directivo" ? 'Me demoro en responder los temas urgentes' : 'Se demora en responder los temas urgentes') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_33', procedure: 'MLQ'}
};
MLQ.push(question33);

var question34 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>34. ' + (job == "Directivo" ? 'Enfatizo la importancia de tener una misión común' : 'Enfatiza la importancia de tener una misión común') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_34', procedure: 'MLQ'}
};
MLQ.push(question34);

var question35 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>35. ' + (job == "Directivo" ? 'Expreso mi satisfacción cuando otros cumplen las expectativas' : 'Expresa su satisfacción cuando otros cumplen las expectativas') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_35', procedure: 'MLQ'}
};
MLQ.push(question35);

var question36 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>36. ' + (job == "Directivo" ? 'Expreso confianza en que las metas serán cumplidas' : 'Expresa confianza en que las metas serán cumplidas') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_36', procedure: 'MLQ'}
};
MLQ.push(question36);

var question37 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>37. ' + (job == "Directivo" ? 'Soy efectivo en satisfacer las necesidades de trabajo con los otros' : 'Es efectivo en satisfacer las necesidades de trabajo de otros') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_37', procedure: 'MLQ'}
};
MLQ.push(question37);

var question38 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>38. ' + (job == "Directivo" ? 'Utilizo formas de liderazgo que son satisfactorias' : 'Utiliza formas de liderazgo que son satisfactorias') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_38', procedure: 'MLQ'}
};
MLQ.push(question38);

var question39 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>39. ' + (job == "Directivo" ? 'Incito a los demás a hacer más de lo que tenían previsto' : 'Incita a los demás a hacer más de lo que tenían previsto') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_39', procedure: 'MLQ'}
};
MLQ.push(question39);

var question40 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>40. ' + (job == "Directivo" ? 'Soy efectivo en representar mayor autoridad ante los demás' : 'Es efectivo en representar mayor autoridad ante los demás') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_40', procedure: 'MLQ'}
};
MLQ.push(question40);

var question41 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>41. ' + (job == "Directivo" ? 'Trabajo con el resto de una forma satisfactoria' : 'Trabaja con el resto de una forma satisfactoria') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_41', procedure: 'MLQ'}
};
MLQ.push(question41);

var question42 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>42. ' + (job == "Directivo" ? 'Aumento en los demás sus deseos de tener éxito' : 'Aumenta en los demás sus deseos de tener éxito') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_42', procedure: 'MLQ'}
};
MLQ.push(question42);

var question43 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>43. ' + (job == "Directivo" ? 'Consigo que la organización sea eficaz' : 'Consigue que la organización sea eficaz') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_43', procedure: 'MLQ'}
};
MLQ.push(question43);

var question44 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>44. ' + (job == "Directivo" ? 'Incremento en los demás sus esfuerzos y su motivación' : 'Incrementa en los demás sus esfuerzos y su motivación') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_44', procedure: 'MLQ'}
};
MLQ.push(question44);

var question45 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: function () {
  	let actual_prompt = '<div class="justified"><b> ' + (job == "Directivo" ? "Yo, como" : "Mi") + ' director(a) </b> <br> <br>45. ' + (job == "Directivo" ? 'Lidero un grupo que es efectivo' : 'Lidera un grupo que es efectivo') + '.</div>';
  	return actual_prompt;
  }, options: ['Nunca', 'Raras<br>veces', 'Algunas<br>&nbsp;&nbsp;veces', '&nbsp;Bastante<br>a menudo', '&nbsp;Siempre'], required: true, horizontal: true}],
  data: {trialid: 'MLQ_45', procedure: 'MLQ'}
};
MLQ.push(question45);

MLQ.unshift(instruction_screen_experiment);
MLQ.push.apply(questions, MLQ);
call_function("MLQ");
