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

PBS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>PBS</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions', procedure: 'PBS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>1. El alma sigue existiendo aunque el cuerpo pueda morir.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_01', procedure: 'PBS'}
};
PBS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>2. Algunos individuos pueden levitar (levantar) objetos a través de fuerzas mentales.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_02', procedure: 'PBS'}
};
PBS.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>3. La magia negra realmente existe.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_03', procedure: 'PBS'}
};
PBS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>4. Los gatos negros traen mala suerte.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_04', procedure: 'PBS'}
};
PBS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>5. Tu mente o alma puede salir del cuerpo y viajar (proyección astral).</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_05', procedure: 'PBS'}
};
PBS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>6. El abominable hombre de las nieves, o pie grande del Tíbet, existe.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_06', procedure: 'PBS'}
};
PBS.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>7. La astrología es una forma precisa de predecir el futuro.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_07', procedure: 'PBS'}
};
PBS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>8. Existe el diablo.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_08', procedure: 'PBS'}
};
PBS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>9. La telekinesis, mover objetos a través de poderes psíquicos, existe.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_09', procedure: 'PBS'}
};
PBS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>10. Las brujas existen.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_10', procedure: 'PBS'}
};
PBS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>11. Si quiebras un espejo, tendrás mala suerte.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_11', procedure: 'PBS'}
};
PBS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>12. Durante estados alterados, como el sueño o los trances, el espíritu puede salir del cuerpo.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_12', procedure: 'PBS'}
};
PBS.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>13. El monstruo del lago Ness en Escocia, existe.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_13', procedure: 'PBS'}
};
PBS.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>14. El horóscopo dice el futuro de las personas de forma precisa.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_14', procedure: 'PBS'}
};
PBS.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>15. Creo en Dios</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_15', procedure: 'PBS'}
};
PBS.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>16. Los pensamientos de una persona pueden influir en el movimiento de un objeto físico.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_16', procedure: 'PBS'}
};
PBS.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>17. A través del uso de pócimas y conjuros, es posible lanzar hechizos sobre las personas.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_17', procedure: 'PBS'}
};
PBS.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>18. El número “13” es de mala suerte.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_18', procedure: 'PBS'}
};
PBS.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>19. La reencarnación existe.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_19', procedure: 'PBS'}
};
PBS.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>20. Hay vida en otros planetas.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_20', procedure: 'PBS'}
};
PBS.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>21. Algunos psíquicos pueden predecir el futuro de forma precisa.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_21', procedure: 'PBS'}
};
PBS.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>22. Existe un Cielo y un Infierno.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_22', procedure: 'PBS'}
};
PBS.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>23. Leer la mente no es posible</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_23', procedure: 'PBS'}
};
PBS.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>24. Hay casos reales de brujería</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_24', procedure: 'PBS'}
};
PBS.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>25. Es posible comunicarse con los muertos</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_25', procedure: 'PBS'}
};
PBS.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>26. Algunas personas tienen la inexplicable habilidad de predecir el futuro.</div>", options: ['&nbsp;Muy en desacuerdo', '&nbsp;Moderadamente en desacuerdo', '&nbsp;Un poco en desacuerdo', '&nbsp;No sé / No tengo certeza', '&nbsp;Un poco de acuerdo', '&nbsp;Moderadamente de acuerdo', '&nbsp;Muy de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'PBS_26', procedure: 'PBS'}
};
PBS.push(question26);

PBS.unshift(instruction_screen_experiment);
questions.push.apply(questions, PBS)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'PBS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'PBS'}).json();
      }
      saveData(data, online, 'PBS');
    },
    procedure: 'PBS'
});
