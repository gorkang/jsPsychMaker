/**
 * CSCN lab
/**
This document was made with test_maker
*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];;    //final timeline

RTS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>RTS</big></b><br />'+
    'Por favor responda a las siguientes afirmaciones con un verdadero o falso de acuerdo a la opción que más le identifique. Responda honestamente, no hay respuestas correctas o incorrectas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'RTS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. Los horóscopos tienen razón con demasiada frecuencia para que sea una coincidencia.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_01', procedure: 'RTS'}
};
RTS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. A veces realizo ciertos pequeños rituales para alejarme de las influencias negativas.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_02', procedure: 'RTS'}
};
RTS.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. He experimentado un estado alterado de conciencia en el que sentí que me volví cósmicamente iluminado.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_03', procedure: 'RTS'}
};
RTS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. En la actualidad, soy muy bueno imaginando y haciendo cosas.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_04', procedure: 'RTS'}
};
RTS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. He sentido que había recibido una sabiduría especial, para ser comunicada al resto de la humanidad.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_05', procedure: 'RTS'}
};
RTS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. A veces me he comportado de una manera mucho más impulsiva y/o desinhibida que de costumbre.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_06', procedure: 'RTS'}
};
RTS.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. Me fascinan las nuevas ideas, tengan o no un valor práctico.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_07', procedure: 'RTS'}
};
RTS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. A veces he sentido una presencia maligna a mi alrededor, aunque no pude verla.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_08', procedure: 'RTS'}
};
RTS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. Mis pensamientos a veces han llegado tan rápido que no podía escribirlos todos lo suficientemente rápido.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_09', procedure: 'RTS'}
};
RTS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. Si ya no pudiera fingir, no sería yo, no sería la misma persona.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_10', procedure: 'RTS'}
};
RTS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. A veces experimento cosas como si fueran doblemente reales.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_11', procedure: 'RTS'}
};
RTS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. A veces es posible para mí estar completamente inmerso en la naturaleza o en el arte y sentir como si todo mi estado de conciencia se hubiera alterado temporalmente de alguna manera.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_12', procedure: 'RTS'}
};
RTS.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. A menudo tengo un día en que las luces en espacios interiores parecen tan brillantes que me molestan los ojos.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_13', procedure: 'RTS'}
};
RTS.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. Estoy convencido de que he tenido al menos una experiencia de telepatía entre otra persona y yo.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_14', procedure: 'RTS'}
};
RTS.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. Estoy convencido de que soy psíquico.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_15', procedure: 'RTS'}
};
RTS.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. He experimentado un estado alterado de conciencia que creo que transformó por completo (de manera positiva) la forma en que me miraba a mí mismo.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_16', procedure: 'RTS'}
};
RTS.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. Estoy convencido de que he tenido un presentimiento sobre el futuro que se hizo realidad y que (creo) no fue solo una coincidencia.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_17', procedure: 'RTS'}
};
RTS.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. Creo que realmente sé lo que algunas personas quieren decir cuando hablan de experiencias místicas.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_18', procedure: 'RTS'}
};
RTS.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. He pasado por momentos en los que los olores parecían más fuertes y abrumadores de lo habitual.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_19', procedure: 'RTS'}
};
RTS.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. Puedo sentir claramente de nuevo (revivir) en mi imaginación cosas tales como: la sensación de una suave brisa, arena cálida bajo los pies descalzos, la suavidad del pelaje, la hierba fresca, el calor del sol y el olor a hierba recién cortada.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_20', procedure: 'RTS'}
};
RTS.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">21. Una persona debe tratar de comprender sus sueños y dejarse guiar por ellos o recibir advertencias de ellos.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_21', procedure: 'RTS'}
};
RTS.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">22. Mientras escucho mi música favorita, además de sentirme tranquilo, relajado, feliz, etc., a menudo tengo un sentimiento de unidad con la música, o de estar en otro lugar o tiempo, o de recordar vívidamente el pasado. </div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_22', procedure: 'RTS'}
};
RTS.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">23. A veces siento de alguna manera la presencia de alguien que no está físicamente allí.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_23', procedure: 'RTS'}
};
RTS.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">24. Estoy convencido de que es posible obtener información sobre los pensamientos, sentimientos o circunstancias de otra persona, de una manera que no depende de la predicción racional o de los canales sensoriales normales.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_24', procedure: 'RTS'}
};
RTS.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">25. Durante varios días seguidos he tenido una conciencia tan elevada de las imágenes y los sonidos que no puedo ignorarlos.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_25', procedure: 'RTS'}
};
RTS.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">26. A veces tengo la sensación de ganar o perder energía cuando ciertas personas me miran o me tocan.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_26', procedure: 'RTS'}
};
RTS.push(question26);

var question27 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">27. Ahora que soy mayor, todavía creo de alguna manera en seres como elfos, brujas, duendes, hadas, etc.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_27', procedure: 'RTS'}
};
RTS.push(question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">28. A veces la gente piensa que soy un poco raro porque mis ideas son muy novedosas.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_28', procedure: 'RTS'}
};
RTS.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">29. Cuando escucho música de órgano u otra música potente, a veces siento como si me elevaran en el aire.</div>', options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'RTS_29', procedure: 'RTS'}
};
RTS.push(question29);

RTS.unshift(instruction_screen_experiment);
questions.push.apply(questions, RTS)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'RTS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'RTS'}).json();
      }
      saveData(data, online, 'RTS');
    },
    procedure: 'RTS'
});
