/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CRS') );

CRS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>CRS</big></b><br />'+
    'Aquí hay algunas sugerencias sobre cómo buscar u obtener una cita para la religión y las prácticas religiosas. Es necesario responder a todas las preguntas. No hay respuestas correctas o incorrectas, así que responda con sinceridad. Sus respuestas permanecerán anónimas. Lea cada una de las siguientes oraciones y luego seleccione su respuesta.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'CRS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. ¿Con qué frecuencia piensas en temas religiosos?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_01', procedure: 'CRS'}
};
CRS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Hasta qué punto crees que Dios o algo divino existe?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_02', procedure: 'CRS'}
};
CRS.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. ¿Con qué frecuencia participas en servicios religiosos?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_03', procedure: 'CRS'}
};
CRS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. ¿Con qué frecuencia rezas?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_04', procedure: 'CRS'}
};
CRS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. ¿Con qué frecuencia meditas?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_05', procedure: 'CRS'}
};
CRS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. ¿Con qué frecuencia experimenta situaciones en las que tiene la sensación de que Dios o algo divino interviene en su vida?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_06', procedure: 'CRS'}
};
CRS.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. ¿Con qué frecuencia experimenta situaciones en las que tiene la sensación de ser uno con todos?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_07', procedure: 'CRS'}
};
CRS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. ¿Qué tan interesado está en aprender más sobre temas religiosos?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_08', procedure: 'CRS'}
};
CRS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. ¿Hasta qué punto crees en una vida futura? inmortalidad del alma, resurrección de los muertos o reencarnación?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_09', procedure: 'CRS'}
};
CRS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. ¿Qué tan importante es participar en los servicios religiosos?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_10', procedure: 'CRS'}
};
CRS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. ¿Qué tan importante es la oración personal para ti?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_11', procedure: 'CRS'}
};
CRS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. ¿Qué tan importante es la meditación para ti?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_12', procedure: 'CRS'}
};
CRS.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. ¿Con qué frecuencia experimentas situaciones en las que tienes la sensación de que Dios o algo divino quiere comunicarte o revelarte algo?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_13', procedure: 'CRS'}
};
CRS.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. ¿Con qué frecuencia experimenta situaciones en las que tiene la sensación de ser tocado por un poder divino?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_14', procedure: 'CRS'}
};
CRS.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. ¿Con qué frecuencia se mantiene informado sobre cuestiones religiosas a través de la radio, la televisión, internet, periódicos o libros?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_15', procedure: 'CRS'}
};
CRS.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. En tu opinión, ¿qué tan probable es que realmente exista un poder superior?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_16', procedure: 'CRS'}
};
CRS.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. ¿Qué tan importante es para usted estar conectado a una comunidad religiosa?</div>', options: ['&nbsp;Nada', '&nbsp;Un poco', '&nbsp;Algo', '&nbsp;Mucho', '&nbsp;Demasiado'], required: true, horizontal: false}],
  data: {trialid: 'CRS_17', procedure: 'CRS'}
};
CRS.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. ¿Con qué frecuencia rezas espontáneamente cuando te inspiras en situaciones cotidianas?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_18', procedure: 'CRS'}
};
CRS.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. ¿Con qué frecuencia intentas conectarte a lo divino espontáneamente cuando te inspiras en situaciones cotidianas?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_19', procedure: 'CRS'}
};
CRS.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. ¿Con qué frecuencia experimenta situaciones en las que tiene la sensación de que Dios o algo divino está presente?</div>', options: ['&nbsp;Nunca', '&nbsp;Rara vez', '&nbsp;Ocasionalmente', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'CRS_20', procedure: 'CRS'}
};
CRS.push(question20);

CRS.unshift(instruction_screen_experiment);
questions.push.apply(questions, CRS)

questions.push({
    type: 'call-function',
    data: {trialid: 'CRS_000', procedure: 'CRS'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'CRS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'CRS'}).json();
      }
      saveData(data, online, 'CRS');
    }
});
