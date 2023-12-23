/**
 * CSCN lab
/**
This document was made with test_maker
*/

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('RMET') );
RMET = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b>Instrucciones:</b><br/>'+'<p>Para cada par de ojos, escoja y haga un clic sobre la palabra que mejor describa lo que la persona en la fotografía está pensando o sintiendo. Puede que le parezca que aplica más de una palabra, pero por favor escoja únicamente una, la que le parezca más adecuada. Antes de decidir la palabra, asegúrese de haber leído las cuatro palabras. Intente hacerlo sin dedicarle demasiado tiempo a cada fotografía, pero no hay un tiempo límite. Si no entiende alguna de las palabras, puede consultar el manual de definiciones adjunto posicionando el cursor sobre el signo de interrogación ubicado al final de cada palabra.<p>'],
    data: {trialid: 'Instructions', procedure: 'RMET'},
    show_clickable_nav: true,
    button_label_previous: "Anterior",
    button_label_next: 'Siguiente',
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var trials = [ {
    options: ['JUGUETÓN', 'RECONFORTANTE', 'IRRITADO', 'ABURRIDO']
  },
  {
    options: ['ATERRORIZADO', 'MOLESTO', 'ARROGANTE', 'ENFADADO']
  },
  {
    options: ['BROMISTA', 'AGOBIADA', 'DESEO', 'CONVENCIDA']
  },
  {
    options: ['BROMISTA', 'INSISTENTE', 'ENTRETENIDO', 'RELAJADO']
  },
  {
    options: ['IRRITADO', 'SARCÁSTICO', 'PREOCUPADO', 'AMISTOSO']
  },
  {
    options: ['ASUSTADA', 'FANTASIOSA', 'IMPACIENTE', 'ALARMADA']
  },
  {
    options: ['ARREPENTIDO', 'AMISTOSO', 'INTRANQUILO', 'DECAÍDO']
  },
  {
    options: ['ABATIDO', 'ALIVIADO', 'TÍMIDO', 'ENTUSIASMADO']
  },
  {
    options: ['ENFADADA', 'HOSTIL', 'HORRORIZADA', 'ANGUSTIADA']
  },
  {
    options: ['PRUDENTE', 'INSISTENTE', 'ABURRIDO', 'ASUSTADO']
  },
  {
    options: ['ATERRORIZADO', 'ENTRETENIDO', 'ARREPENTIDO', 'SEDUCTOR']
  },
  {
    options: ['INDIFERENTE', 'ABOCHORNADO', 'ESCÉPTICO', 'DECAÍDO']
  },
  {
    options: ['DECIDIDO', 'EXPECTANTE', 'AMENAZANTE', 'TÍMIDO']
  },
  {
    options: ['IRRITADO', 'DECEPCIONADO', 'DEPRIMIDO', 'ACUSANTE']
  },
  {
    options: ['ABSTRAÍDA', 'AGOBIADA', 'ALENTADORA', 'ENTRETENIDA']
  },
  {
    options: ['IRRITADO', 'CONSIDERADO', 'ALENTADOR', 'COMPASIVO']
  },
  {
    options: ['INSEGURA', 'AFECTUOSA', 'JUGUETONA', 'ASUSTADA']
  }, //parte 2
  {
    options: ['DECIDIDA', 'ENTRETENIDA', 'ASUSTADA', 'ABURRIDA']
  },
  {
    options: ['ARROGANTE', 'AGRADECIDA', 'SARCÁSTICA', 'VACILANTE']
  },
  {
    options: ['IMPONENTE', 'AMISTOSO', 'CULPABLE', 'HORRORIZADO']
  },
  {
    options: ['ABOCHORNADA', 'FANTASIOSA', 'CONFUNDIDA', 'EN PÁNICO']
  },
  {
    options: ['ANGUSTIADA', 'AGRADECIDA', 'INSISTENTE', 'SUPLICANTE']
  },
  {
    options: ['SATISFECHO', 'ARREPENTIDO', 'DESAFIANTE', 'CURIOSO']
  },
  {
    options: ['ABSTRAÍDO', 'IRRITADO', 'ENTUSIASMADO', 'HOSTIL']
  },
  {
    options: ['EN PÁNICO', 'INCRÉDULA', 'ABATIDA', 'INTERESADA']
  },
  {
    options: ['ALARMADO', 'TÍMIDO', 'HOSTIL', 'ANSIOSO']
  },
  {
    options: ['BROMISTA', 'PRUDENTE', 'ARROGANTE', 'TRANQUILIZADORA']
  },
  {
    options: ['INTERESADA', 'BROMISTA', 'AFECTUOSA', 'SATISFECHA']
  },
  {
    options: ['IMPACIENTE', 'ASUSTADA', 'IRRITADA', 'REFLEXIVA']
  },
  {
    options: ['AGRADECIDA', 'SEDUCTORA', 'HOSTIL', 'DECEPCIONADA']
  },
  {
    options: ['AVERGONZADA', 'SEGURA', 'BROMISTA', 'DECAÍDA']
  },
  {
    options: ['SERIO', 'AVERGONZADO', 'DESCONCERTADO', 'ALARMADO']
  },
  {
    options: ['AVERGONZADO', 'CULPABLE', 'FANTASIOSO', 'PREOCUPADO']
  },
  {
    options: ['ASUSTADA', 'DESCONCERTADA', 'RECELOSA', 'ATERRORIZADA']
  },
  {
    options: ['PERPLEJA', 'NERVIOSA', 'INSISTENTE', 'PENSATIVA']
  },
  {
    options: ['AVERGONZADO', 'NERVIOSO', 'DESCONFIADO', 'INDECISO']
  },
]

var question000 = {
  type: 'survey-multi-choice-CSCN-RMET',
  preamble: "<img width='100%'src='media/images/RMET/0.png' />",
  questions: [{prompt: '', options: ['&nbsp;CELOSO', '&nbsp;EN PÁNICO', '&nbsp;ARROGANTE', '&nbsp;LLENO DE ODIO'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'RMET_t01', procedure: 'RMET'},
  button_label: 'Siguiente'
};
RMET.push(question000);

var question000_1 = {
  type: 'instructions',
  pages: ['<p>' +'Has acertado la práctica! al empezar la tarea no recibirás más retroalimentación.'+'</p>'],
  data: {trialid: 'Instructions_1', procedure: 'RMET'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var if_question000_1 = {
  timeline: [question000_1],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'RMET_t01'))['response'])['Q0']).trim();
    if((data) ==  'EN PÁNICO'){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'RMET_t01_1_if', procedure: 'RMET'}
};
RMET.push(if_question000_1);

var question000_2 = {
  type: 'instructions',
  pages: ['<p>' +'La respuesta acertada era "en pánico". Al empezar la tarea no recibiras mas retroalimentacion.'+'</p>'],
  data: {trialid: 'Instructions_2', procedure: 'RMET'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var if_question000_2 = {
  timeline: [question000_2],
  conditional_function: function(){
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'RMET_t01'))['response'])['Q0']).trim();
    if((data) !=  'EN PÁNICO'){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'RMET_t01_2_if', procedure: 'RMET'}
};
RMET.push(if_question000_2);

index = 1;
trials.forEach(function(trial) {
  RMET.push({
    type: "survey-multi-choice-CSCN-RMET",
    preamble: "<img width='100%'src='media/imagesRMET/" + index.toString() + ".png" + "' />",
    questions: [{
      prompt: "",
      options: trial.options,
      required: true,
      random_options: false,
      horizontal: false
    }],
    button_label: 'Siguiente',
    data: {
      trialid: "RMET_" + String(index).padStart(3, '0'),
      procedure: 'RMET'
    }
  })
  index += 1;
})

RMET.unshift(instruction_screen_experiment);
questions.push.apply(questions, RMET);

call_function("RMET");
