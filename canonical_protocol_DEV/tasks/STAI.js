/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('STAI') );
STAI = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>STAI (estado)</big></b><br />'+
    '<br> <p> A continuación, aparecerán algunas expresiones que la gente usa para describirse a sí mismos. Lea cada frase e indique como se siente ahora mismo o sea EN ESTE MOMENTO. No hay contestaciones buenas o malas. No utilice mucho tiempo en cada frase, pero trate de dar la respuesta que mejor describa SUS SENTIMIENTOS AHORA.</p>'],
    data:{trialid: 'Instructions_01', procedure: 'STAI'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. Me siento calmado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_01', procedure: 'STAI'}
};
STAI.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. Me siento seguro.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_02', procedure: 'STAI'}
};
STAI.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. Estoy tenso.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_03', procedure: 'STAI'}
};
STAI.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. Me siento disgustado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_04', procedure: 'STAI'}
};
STAI.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. Me siento a “mis anchas”.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_05', procedure: 'STAI'}
};
STAI.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. Me siento alterado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_06', procedure: 'STAI'}
};
STAI.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. En este momento estoy preocupado por algún posible problema.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_07', procedure: 'STAI'}
};
STAI.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. Me siento satisfecho.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_08', procedure: 'STAI'}
};
STAI.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. Me siento asustado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_09', procedure: 'STAI'}
};
STAI.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. Me siento cómodo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_10', procedure: 'STAI'}
};
STAI.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>11. Tengo confianza en mí mismo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_11', procedure: 'STAI'}
};
STAI.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>12. Me siento nervioso.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_12', procedure: 'STAI'}
};
STAI.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>13. Me siento agitado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_13', procedure: 'STAI'}
};
STAI.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>14. Me siento indeciso.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_14', procedure: 'STAI'}
};
STAI.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>15. Me siento tranquilo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_15', procedure: 'STAI'}
};
STAI.push(question15);

var question16 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>16. Me siento “a gusto”.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_16', procedure: 'STAI'}
};
STAI.push(question16);

var question17 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>17. Estoy preocupado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_17', procedure: 'STAI'}
};
STAI.push(question17);

var question18 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>18. Me siento aturdido.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_18', procedure: 'STAI'}
};
STAI.push(question18);

var question19 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>19. Me siento equilibrado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_19', procedure: 'STAI'}
};
STAI.push(question19);

var question20 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>20. Me siento bien.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_20', procedure: 'STAI'}
};
STAI.push(question20);

var instruction_screen_experiment_02 = {
    type: 'instructions',
    pages: ['<p><left><b><big>STAI (rasgo)</big></b><br />'+
    '<br> <p> Abajo aparecen algunas expresiones que la gente usa para describirse a sí mismos. Lea cada frase y coloque una cruz en el casillero que indique cómo se siente GENERALMENTE. No hay contestaciones buenas o malas. No utilice mucho tiempo en cada frase, pero trate de dar la respuesta que mejor describa CÓMO SE SIENTE GENERALMENTE.</p>'],
    data:{trialid: 'Instructions_02', procedure: 'STAI'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
STAI.push(instruction_screen_experiment_02);

var question21 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>21. Me siento bien.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_21', procedure: 'STAI'}
};
STAI.push(question21);

var question22 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>22. Me siento nervioso.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_22', procedure: 'STAI'}
};
STAI.push(question22);

var question23 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>23. Me siento “a gusto” conmigo mismo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_23', procedure: 'STAI'}
};
STAI.push(question23);

var question24 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>24. Quisiera ser tan feliz como otros parecen serlo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_24', procedure: 'STAI'}
};
STAI.push(question24);

var question25 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>25. Siento que fallo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_25', procedure: 'STAI'}
};
STAI.push(question25);

var question26 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>26. Me siento descansado.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_26', procedure: 'STAI'}
};
STAI.push(question26);

var question27 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>27. Soy una persona tranquila, serena y calmada.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_27', procedure: 'STAI'}
};
STAI.push(question27);

var question28 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>28. Siento que las dificultades se me amontonan y no las puedo superar.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_28', procedure: 'STAI'}
};
STAI.push(question28);

var question29 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>29. Me preocupo demasiado por cosas sin importancia.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_29', procedure: 'STAI'}
};
STAI.push(question29);

var question30 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>30. Soy feliz.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_30', procedure: 'STAI'}
};
STAI.push(question30);

var question31 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>31. Tengo malos pensamientos.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_31', procedure: 'STAI'}
};
STAI.push(question31);

var question32 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>32. Me falta confianza en mí mismo.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_32', procedure: 'STAI'}
};
STAI.push(question32);

var question33 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>33. Me siento seguro.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_33', procedure: 'STAI'}
};
STAI.push(question33);

var question34 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>34. Puedo decidirme rápidamente.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_34', procedure: 'STAI'}
};
STAI.push(question34);

var question35 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>35. Me siento “fuera de lugar”.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_35', procedure: 'STAI'}
};
STAI.push(question35);

var question36 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>36. Me siento satisfecho.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_36', procedure: 'STAI'}
};
STAI.push(question36);

var question37 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>37. Algunas ideas poco importantes ocupan mi cabeza y me molestan.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_37', procedure: 'STAI'}
};
STAI.push(question37);

var question38 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>38. Los desengaños me afectan tanto que no me los puedo sacar de la cabeza.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_38', procedure: 'STAI'}
};
STAI.push(question38);

var question39 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>39. Soy una persona estable.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_39', procedure: 'STAI'}
};
STAI.push(question39);

var question40 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>40. Cuando pienso en las cosas que tengo entre manos me pongo nervioso y tenso.</div>", options: ['NADA', 'UN POCO', 'BASTANTE', 'MUCHO'], required: true, horizontal: true}],
  data: {trialid: 'STAI_40', procedure: 'STAI'}
};
STAI.push(question40);

STAI.unshift(instruction_screen_experiment);
questions.push.apply(questions, STAI);

call_function("STAI");
