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

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

questions.push(
  {
    timeline: [{
      type: 'fullscreen',
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'Looks'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'Looks'
  }
);

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +'<p><left><b><big>Miradas</big></b><br />'+
    'A continuación verá expresiones en los ojos de distintas personas. Por favor marque la alternativa que más representa la emoción de los ojos.'+'</p>'],
    data: {trialid: 'Instructions', procedure: 'Looks'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'Looks'
};

// Funciones de apoyo
onkeydown = function block_fkeys(event) {
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

var instructions = {
  type: 'instructions',
  pages: ['<p><left><b><big>Miradas</big></b><br />'+
      'A continuación verá expresiones en los ojos de distintas personas. Por favor marque la alternativa que más representa la emoción de los ojos.'],
  data: {
    trialid: "Instructions"
  },
  show_clickable_nav: true,
};

var trials = [ {
    options: ['CELOSO', 'EN PÁNICO', 'ARROGANTE', 'LLENO DE ODIO']
  },
  {
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
    options: ['IRRITADO', 'SARCASTICO', 'PREOCUPADO', 'AMISTOSO']
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
    options: ['AVERGONZADA', 'SEGURA', 'BROMISTA', 'DECAIDA']
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

// Creacion de timeline e inclusion de trials
Looks = [];

index = 0;
trials.forEach(function(trial) {
  Looks.push({
    type: "survey-multi-choice-vertical",
    preamble: "<img width='100%'src='" + images[index] + "' />",
    questions: [{
      prompt: "",
      options: trial.options,
      required: true,
      random_options: false,
      horizontal: false
    }],
    data: {
      trialid: "question_" + index,
      procedure: 'Looks'
    }
  })
  index += 1;
})
/*
var question001 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dios</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_001', procedure: 'Looks'},
  procedure: 'Looks'
};
Looks.push(question001);*/

Looks.unshift(instruction_screen_experiment);
questions.push.apply(questions, Looks);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Looks'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Looks'}).json();
      }
      saveData(data, online, 'Looks');
    },
    procedure: 'Looks'
});
