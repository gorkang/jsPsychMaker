/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('EQ') );
EQ = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'fullscreen',
    fullscreen_mode: true,
    message: [`<b><big>Coeficiente de Empatía</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label: 'Pantalla Completa',
    data: {trialid: 'Instructions_01', procedure: 'EQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. Me doy cuenta con facilidad cuando alguien quiere entrar en una conversación.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_01', procedure: 'EQ'}
};
EQ.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. Prefiero los animales antes que a las personas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_02', procedure: 'EQ'}
};
EQ.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Intento seguir la moda y las nuevas tendencias.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_03', procedure: 'EQ'}
};
EQ.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. Me resulta complicado explicar a otras personas cosas que yo comprendo con facilidad, cuando ellos no son capaces de entenderlas a la primera.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_04', procedure: 'EQ'}
};
EQ.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. Sueño casi todas las noches.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_05', procedure: 'EQ'}
};
EQ.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. Realmente me gusta cuidar de las otras personas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_06', procedure: 'EQ'}
};
EQ.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. Intento solucionar mis propios problemas más que tratar discutirlos con los demás.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_07', procedure: 'EQ'}
};
EQ.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. Me resulta difícil saber que es lo que tengo que hacer en situaciones sociales.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_08', procedure: 'EQ'}
};
EQ.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. Mi rendimiento es mejor por las mañanas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_09', procedure: 'EQ'}
};
EQ.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. La gente suele decir que voy muy lejos cuando intento defender mi punto de vista en una discusión.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_10', procedure: 'EQ'}
};
EQ.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. No me molesta mucho llegar tarde cuando quedo con un amigo.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_11', procedure: 'EQ'}
};
EQ.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. Las relaciones de amistad y de pareja son muy complicadas, por lo que intento no preocuparme mucho de ellas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_12', procedure: 'EQ'}
};
EQ.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. Por muy pequeña que sea, nunca rompería una norma.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_13', procedure: 'EQ'}
};
EQ.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. Normalmente me resulta difícil saber si algo ha sido correcto o maleducado.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_14', procedure: 'EQ'}
};
EQ.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. En una conversación suelo centrarme en mis propios pensamientos más que en lo que la otra persona podría estar pensando.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_15', procedure: 'EQ'}
};
EQ.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. Prefiero las chistes prácticos antes que el humor basado en juegos de palabras.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_16', procedure: 'EQ'}
};
EQ.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. Vivo el presente, no el futuro.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_17', procedure: 'EQ'}
};
EQ.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. Cuando era pequeño me divertía cortando lombrices para averiguar que les pasaba después.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_18', procedure: 'EQ'}
};
EQ.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. Detecto rápidamente cuando alguien dice una cosa pero en realidad quiere decir otra.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_19', procedure: 'EQ'}
};
EQ.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. Suelo tener opiniones muy arraigadas acerca de la moralidad.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_20', procedure: 'EQ'}
};
EQ.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">21. Me cuesta comprender porqué algunas cosas molestan tanto a la gente.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_21', procedure: 'EQ'}
};
EQ.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">22. Me resulta fácil ponerme en el punto de vista de otra persona.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_22', procedure: 'EQ'}
};
EQ.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">23. Creo que los buenos modales es la cosa más importante que un padre puede enseñarle a su hijo.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_23', procedure: 'EQ'}
};
EQ.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">24. Me gusta hacer cosas de improviso.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_24', procedure: 'EQ'}
};
EQ.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">25. Suelo predecir bastante los sentimientos que tendrá otra persona.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_25', procedure: 'EQ'}
};
EQ.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">26. Me suelo dar cuenta con bastante facilidad cuando en un grupo una persona se siente a disgusto o incómodo.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_26', procedure: 'EQ'}
};
EQ.push(question26);

var question27 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">27. Si digo algo que ofende a otra persona, pienso que es su problema, no el mío.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_27', procedure: 'EQ'}
};
EQ.push(question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">28. Si alguien me pregunta que si me gusta su corte de pelo, contesto la verdad aunque no me guste.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_28', procedure: 'EQ'}
};
EQ.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">29. No siempre comprendo porque alguien se siente ofendido con un comentario.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_29', procedure: 'EQ'}
};
EQ.push(question29);

var question30 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">30. Con frecuencia la gente me dice que soy muy imprevisible.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_30', procedure: 'EQ'}
};
EQ.push(question30);

var question31 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">31. Me gusta ser el centro de atención en las reuniones sociales.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_31', procedure: 'EQ'}
};
EQ.push(question31);

var question32 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">32. No me molesta ver a gente llorar.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_32', procedure: 'EQ'}
};
EQ.push(question32);

var question33 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">33. Me divierte tener discusiones sobre política.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_33', procedure: 'EQ'}
};
EQ.push(question33);

var question34 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">34. Soy muy directo y algunas personas interpretan eso como maleducado incluso cuando no lo hago de manera intencional.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_34', procedure: 'EQ'}
};
EQ.push(question34);

var question35 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">35. Las situaciones sociales no me resultan complicadas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_35', procedure: 'EQ'}
};
EQ.push(question35);

var question36 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">36. La gente me dice que comprendo bien como se sienten y cómo piensan.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_36', procedure: 'EQ'}
};
EQ.push(question36);

var question37 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">37. Cuando hablo con otras personas, me gusta más conversar sobre sus experiencias que sobre las mías propias.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_37', procedure: 'EQ'}
};
EQ.push(question37);

var question38 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">38. Me molesta ver un animal sufriendo.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_38', procedure: 'EQ'}
};
EQ.push(question38);

var question39 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">39. Soy capaz de tomar mis propias decisiones sin dejarme influir por los sentimientos de los demás.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_39', procedure: 'EQ'}
};
EQ.push(question39);

var question40 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">40. No me puedo relajar hasta que no he terminado todo lo que me había propuesto hacer durante el día.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_40', procedure: 'EQ'}
};
EQ.push(question40);

var question41 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">41. Me doy cuenta con facilidad si la persona con la que hablo se está aburriendo o está interesado en lo que le estoy contando.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_41', procedure: 'EQ'}
};
EQ.push(question41);

var question42 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">42. Me afecta mucho ver en los telediarios a gente.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_42', procedure: 'EQ'}
};
EQ.push(question42);

var question43 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">43. Mis amigos me suelen contar sus problemas porque me consideran una persona muy comprensiva.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_43', procedure: 'EQ'}
};
EQ.push(question43);

var question44 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">44. Puedo notar cuando me estoy entrometiendo en los asuntos de otra persona aunque ésta no me lo diga.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_44', procedure: 'EQ'}
};
EQ.push(question44);

var question45 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">45. Suelo probar aficiones nuevas pero me aburro rápido e intento otras cosas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_45', procedure: 'EQ'}
};
EQ.push(question45);

var question46 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">46. A veces la gente me dice que me paso con mis bromas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_46', procedure: 'EQ'}
};
EQ.push(question46);

var question47 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">47. Me pondría muy nervioso subir en una montaña-rusa grande.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_47', procedure: 'EQ'}
};
EQ.push(question47);

var question48 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">48. La gente me suele decir que soy insensible, aunque yo no comprendo porque me lo dicen.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_48', procedure: 'EQ'}
};
EQ.push(question48);

var question49 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">49. Cuando veo a un extraño en un grupo, normalmente pienso que debe hacer un esfuerzo por integrase en él.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_49', procedure: 'EQ'}
};
EQ.push(question49);

var question50 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">50. Normalmente las películas no me afectan emocionalmente.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_50', procedure: 'EQ'}
};
EQ.push(question50);

var question51 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">51. En el día a día me gusta se organizado y suelo hacerme listas de las tareas que tengo que hacer.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_51', procedure: 'EQ'}
};
EQ.push(question51);

var question52 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">52. Puedo “sintonizarme” rápidamente y de manera intuitiva con los sentimientos de otras personas.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_52', procedure: 'EQ'}
};
EQ.push(question52);

var question53 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">53. No me gusta correr riesgos.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_53', procedure: 'EQ'}
};
EQ.push(question53);

var question54 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">54. Me doy cuenta con facilidad de lo que otra persona quiere hablar.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_54', procedure: 'EQ'}
};
EQ.push(question54);

var question55 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">55. Detecto cuando alguien está ocultando sus verdaderos sentimientos.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_55', procedure: 'EQ'}
};
EQ.push(question55);

var question56 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">56. Antes de tomar una decisión, siempre valoro los pros y los contras.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_56', procedure: 'EQ'}
};
EQ.push(question56);

var question57 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">57. Nunca reflexiono de manera consciente acerca de las reglas sociales.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_57', procedure: 'EQ'}
};
EQ.push(question57);

var question58 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">58. Se me da bien predecir lo que una persona va a hacer.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_58', procedure: 'EQ'}
};
EQ.push(question58);

var question59 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">59. Suelo implicarme emocionalmente en los problemas de mis amigos.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_59', procedure: 'EQ'}
};
EQ.push(question59);

var question60 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">60. Normalmente soy capaz de apreciar el punto de vista de otra persona aunque yo no lo comparta.</div>', options: ['&nbsp;Totalmente<br>de acuerdo', '&nbsp;Un poco<br>de acuerdo', '&nbsp;Un poco<br>de desacuerdo', '&nbsp;Totalmente<br>desacuerdo'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'EQ_60', procedure: 'EQ'}
};
EQ.push(question60);

EQ.unshift(instruction_screen_experiment);
EQ.push.apply(questions, EQ);
call_function("EQ");
