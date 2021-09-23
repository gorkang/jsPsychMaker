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

Cov19Q = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Cov19Q</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'Cov19Q'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question1 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. ¿Usted ha contraído Coronavirus (covid-19) en el último año?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_01', procedure: 'Cov19Q'}
};
Cov19Q.push(question1);

var question2 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Algún miembro de su hogar, que vive con usted, ha contraído Coronavirus (covid-19) en el último año?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_02', procedure: 'Cov19Q'}
};
Cov19Q.push(question2);

var question3 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. ¿Conoce de algún cercano (familiar, amigo, conocido), que ha contraído Coronavirus (covid-19) en el último año?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_03', procedure: 'Cov19Q'}
};
Cov19Q.push(question3);

var question4 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. Considerando la información de esta semana que usted maneja sobre la evolución del coronavirus ¿Qué tan grave considera la pandemia?</div>', options: ['&nbsp;Nada grave', '&nbsp;Poco grave', '&nbsp;Medianamente grave', '&nbsp;Muy grave', '&nbsp;Extremadamente grave'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_04', procedure: 'Cov19Q'}
};
Cov19Q.push(question4);

var question5 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><b> En el último tiempo han circulado teorías y supuestos sobre la pandemia del coronavirus. Al respecto, usted cree que: </b> <br> 5. El virus fue creado en un laboratorio.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Ni de acuerdo ni en desacuerdo', '&nbsp;De acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_05', procedure: 'Cov19Q'}
};
Cov19Q.push(question5);

var question6 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><b> En el último tiempo han circulado teorías y supuestos sobre la pandemia del coronavirus. Al respecto, usted cree que: </b> <br> 6. El virus fue esparcido intencionalmente.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Ni de acuerdo ni en desacuerdo', '&nbsp;De acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_06', procedure: 'Cov19Q'}
};
Cov19Q.push(question6);

var question7 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><b> En el último tiempo han circulado teorías y supuestos sobre la pandemia del coronavirus. Al respecto, usted cree que: </b> <br> 7. El virus, independientemente si es natural o creado, ha sido utilizado a propósito para dominarnos y/o dañarnos.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Ni de acuerdo ni en desacuerdo', '&nbsp;De acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_07', procedure: 'Cov19Q'}
};
Cov19Q.push(question7);

var question8 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><b> En el último tiempo han circulado teorías y supuestos sobre la pandemia del coronavirus. Al respecto, usted cree que: </b> <br> 8. Todo esto del virus y/o sus consecuencias es más bien un montaje, posiblemente falso.</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Ni de acuerdo ni en desacuerdo', '&nbsp;De acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_08', procedure: 'Cov19Q'}
};
Cov19Q.push(question8);

var question9 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><b> En el último tiempo han circulado teorías y supuestos sobre la pandemia del coronavirus. Al respecto, usted cree que: </b> <br> 9. Todo esto del virus y/o sus consecuencias es mucho menos grave de lo que se dice o no muy distinto que otros virus existentes (como la influenza o similares).</div>', options: ['&nbsp;Muy en desacuerdo', '&nbsp;En desacuerdo', '&nbsp;Ni de acuerdo ni en desacuerdo', '&nbsp;De acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'Cov19Q_09', procedure: 'Cov19Q'}
};
Cov19Q.push(question9);

Cov19Q.unshift(instruction_screen_experiment);
questions.push.apply(questions, Cov19Q)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Cov19Q'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Cov19Q'}).json();
      }
      saveData(data, online, 'Cov19Q');
    },
    procedure: 'Cov19Q'
});
