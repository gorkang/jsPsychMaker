/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SRSav') );;    //final timeline

SRSav = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>SRSav (ORA)</big></b><br />'+
    'Por favor, responde las siguientes preguntas' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'SRSav'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>1. ¿Con qué frecuencia asiste a los servicios de la iglesia?</div>", options: ['Varias veces a la semana', 'Aproximadamente una vez a la semana', 'Varias veces al mes', 'Varias veces al año', 'Raramente', 'Nunca'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_01', procedure: 'SRSav'}
};
SRSav.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>2. ¿Con qué frecuencia participas en otras actividades religiosas? (actividades grupales, es decir, clases de escuela dominical para adultos, grupos de estudio bíblico, grupos de oración, etc.)</div>", options: ['Varias veces a la semana', 'Aproximadamente una vez a la semana', 'Varias veces al mes', 'Varias veces al año', 'Raramente', 'Nunca'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_02', procedure: 'SRSav'}
};
SRSav.push(question02);

SRSav.unshift(instruction_screen_experiment);
questions.push.apply(questions, SRSav)

SRSav = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>SRSav (NORA)</big></b><br />'+
    'Por favor, responde las siguientes preguntas' +'</p>'],
    data: {trialid: 'Instructions_02', procedure: 'SRSav'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>3. ¿Con qué frecuencia rezas en privado?</div>", options: ['Nunca', 'Solo ocasionalmente', 'Varias veces a la semana', 'Una vez al día', 'Dos veces al día', 'Tres o más veces al día'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_03', procedure: 'SRSav'}
};
SRSav.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>4. ¿Con qué frecuencia lees la Biblia u otros religiosos? literatura (revistas, periódicos, libros) en casa?</div>", options: ['Varias veces al día', 'Diario', 'Varias veces a la semana', 'Varias veces al mes', 'Solo ocasionalmente', 'Para nada'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_04', procedure: 'SRSav'}
};
SRSav.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>5. ¿Con qué frecuencia escuchas o ves programas religiosos en radio o televisión?</div>", options: ['Nunca', 'Solo ocasionalmente', 'Varias veces al mes', 'Varias veces a la semana', 'Diario', 'Varias veces al día'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_05', procedure: 'SRSav'}
};
SRSav.push(question05);

SRSav.unshift(instruction_screen_experiment);
questions.push.apply(questions, SRSav)

SRSav = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>SRSav (IR)</big></b><br />'+
    'Por favor, responde las siguientes preguntas' +'</p>'],
    data: {trialid: 'Instructions_03', procedure: 'SRSav'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>6. Mi fe involucra toda mi vida.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_06', procedure: 'SRSav'}
};
SRSav.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>7. En mi vida, experimento la presencia de lo divino (es decir, de Dios).</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_07', procedure: 'SRSav'}
};
SRSav.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>8. Aunque soy una persona religiosa, me niego a dejar que consideraciones religiosas influyan en mis asuntos cotidianos.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_08', procedure: 'SRSav'}
};
SRSav.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>9. Nada es tan importante para mí como servir a Dios como mejor se hacerlo.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_09', procedure: 'SRSav'}
};
SRSav.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>10. Mi fe a veces restringe mis acciones.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_10', procedure: 'SRSav'}
};
SRSav.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>11. Mis creencias religiosas son lo que realmente se encuentra detrás de todo mi enfoque de vida.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_11', procedure: 'SRSav'}
};
SRSav.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>12. Me esfuerzo por llevar mi religión a todos los demás aspectos de mi vida.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_12', procedure: 'SRSav'}
};
SRSav.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>13. Uno debe buscar la guía de Dios al tomar decisiones importantes.</div>", options: ['Definitivamente en desacuerdo', 'Tiende a estar en desacuerdo', 'Inseguro', 'Tiende a estar de acuerdo', 'Definitivamente de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_13', procedure: 'SRSav'}
};
SRSav.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>14. Aunque creo en la religión, siento que hay muchas cosas más importantes en la vida.</div>", options: ['Definitivamente en desacuerdo', 'Tiende a estar en desacuerdo', 'Inseguro', 'Tiende a estar de acuerdo', 'Definitivamente de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_14', procedure: 'SRSav'}
};
SRSav.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>15. No importa tanto lo que yo crea siempre y cuando lleve una vida moral.</div>", options: ['Definitivamente en desacuerdo', 'Tiende a estar en desacuerdo', 'Inseguro', 'Tiende a estar de acuerdo', 'Definitivamente de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'SRSav_15', procedure: 'SRSav'}
};
SRSav.push(question15);

SRSav.unshift(instruction_screen_experiment);
questions.push.apply(questions, SRSav)


questions.push({
    type: 'call-function',
    data: {trialid: 'SRSav_000', procedure: 'SRSav'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'SRSav'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'SRSav'}).json();
      }
      saveData(data, online, 'SRSav');
    },
    procedure: 'SRSav'
});
