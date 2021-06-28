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

SRA = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>SRA</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions', procedure: 'SRA'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. He ayudado a sacar el coche de un extraño de la nieve.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_01', procedure: 'SRA'}
};
SRA.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. Le he dado instrucciones a un extraño.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_02', procedure: 'SRA'}
};
SRA.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. He hecho cambios por un extraño.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_03', procedure: 'SRA'}
};
SRA.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. He dado dinero a una organización benéfica.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_04', procedure: 'SRA'}
};
SRA.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. Le di dinero a un extraño que lo necesitaba (o me lo pidió).</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_05', procedure: 'SRA'}
};
SRA.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. He donado artículos o ropa a una organización benéfica.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_06', procedure: 'SRA'}
};
SRA.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. He realizado trabajo voluntario para una organización benéfica.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_07', procedure: 'SRA'}
};
SRA.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. He donado sangre.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_08', procedure: 'SRA'}
};
SRA.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. He ayudado a llevar las pertenencias de un extraño (libros, paquetes, etc.).</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_09', procedure: 'SRA'}
};
SRA.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. He retrasado un ascensor y mantuve la puerta abierta para un extraño.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_10', procedure: 'SRA'}
};
SRA.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. Permití que alguien se adelantara a mí en una fila (por ejemplo: en un banco, en el supermercado, etc).</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_11', procedure: 'SRA'}
};
SRA.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. He dado a un extraño un aventón en mi auto.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_12', procedure: 'SRA'}
};
SRA.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. He señalado el error de un empleado (por ejemplo: en un banco, en el supermercado, etc) al cobrar menos por un artículo.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_13', procedure: 'SRA'}
};
SRA.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. Dejé que un vecino a quien no conocía demasiado bien, tomara prestado un artículo de algún valor para mí (por ejemplo: un plato, herramientas, etc).</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_14', procedure: 'SRA'}
};
SRA.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. He comprado tarjetas de Navidad "benéficas" deliberadamente porque sabía que era una buena causa.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_15', procedure: 'SRA'}
};
SRA.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. He ayudado a un compañero de clase que no conocía muy bien con una tarea cuando mi conocimiento era mayor que el de él o ella.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_16', procedure: 'SRA'}
};
SRA.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. Antes de que me pidieran, he cuidado voluntariamente las mascotas o los niños de un vecino sin ser pagado por ello.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_17', procedure: 'SRA'}
};
SRA.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. Me he ofrecido a ayudar a un extraño discapacitado o anciano a cruzar la calle.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_18', procedure: 'SRA'}
};
SRA.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. Le ofrecí mi asiento en un autobús o tren a un extraño que estaba parado.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_19', procedure: 'SRA'}
};
SRA.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. He ayudado a un conocido a mudarse de hogar.</div>', options: ['&nbsp;Nunca', '&nbsp;Una vez', '&nbsp;Más de una vez', '&nbsp;A menudo', '&nbsp;Muy a menudo'], required: true, horizontal: false}],
  data: {trialid: 'SRA_20', procedure: 'SRA'}
};
SRA.push(question20);

SRA.unshift(instruction_screen_experiment);
questions.push.apply(questions, SRA)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'SRA'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'SRA'}).json();
      }
      saveData(data, online, 'SRA');
    },
    procedure: 'SRA'
});
