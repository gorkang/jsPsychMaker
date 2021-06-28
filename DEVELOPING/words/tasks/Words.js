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
      message: '<p>La tarea entrará en modo pantalla completa</p>',
      button_label: 'Pantalla Completa',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: 'Words'}
    }],
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    },
    procedure: 'Words'
  }
);

Words = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Validación de Palabras</big></b><br />'+'Texto para modificar'+'</p>'],
    data: {trialid: 'Instructions', procedure: 'Words'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    },
    procedure: 'Words'
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dios</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_001', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Virgen</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_002', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pesebre</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_003', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Trinidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_004', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Beato</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_005', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Milagro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_006', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vaticano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_007', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Católico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_008', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Adviento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_009', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Adán</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_010', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Eva</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_011', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Amen</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_012', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aleluya</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_013', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Apocalipsis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_014', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Biblia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_015', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question015);

var question016 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ángeles</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_016', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Apóstol</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_017', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cura</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_018', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bautizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_019', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bendecir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_020', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Catecismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_021', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question021);

var question022 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Monja</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_022', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question022);

var question023 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pecar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_023', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question023);

var question024 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pastoral</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_024', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question024);

var question025 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cruz</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_025', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question025);

var question026 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cuaresma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_026', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question026);

var question027 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rosario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_027', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question027);

var question028 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diezmo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_028', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question028);

var question029 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Iglesia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_029', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question029);

var question030 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Eclesiástico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_030', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question030);

var question031 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Reencarnar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_031', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question031);

var question032 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Estigma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_032', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question032);

var question033 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Eucaristía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_033', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question033);

var question034 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hostia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_034', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question034);

var question035 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Santo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_035', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question035);

var question036 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diablo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_036', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question036);

var question037 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Infierno</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_037', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question037);

var question038 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jesús</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_038', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question038);

var question039 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Liturgia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_039', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question039);

var question040 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mandamientos</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_040', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question040);

var question041 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Papa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_041', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question041);

var question042 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Obispo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_042', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question042);

var question043 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Parroquia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_043', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question043);

var question044 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pascua</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_044', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question044);

var question045 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sagrado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_045', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question045);

var question046 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Testamento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_046', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question046);

var question047 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Samaritano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_047', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question047);

var question048 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Satanás</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_048', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question048);

var question049 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Teología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_049', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question049);

var question050 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Adorar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_050', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question050);

var question051 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Agnóstico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_051', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question051);

var question052 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alabar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_052', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question052);

var question053 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aleluya</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_053', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question053);

var question054 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Altar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_054', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question054);

var question055 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ambón</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_055', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question055);

var question056 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Apócrifo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_056', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question056);

var question057 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Apóstol</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_057', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question057);

var question058 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Asunción</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_058', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question058);

var question059 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ateo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_059', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question059);

var question060 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Basílica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_060', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question060);

var question061 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bautizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_061', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question061);

var question062 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bienaventurado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_062', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question062);

var question063 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cáliz</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_063', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question063);

var question064 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Creyente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_064', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question064);

var question065 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cardenal</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_065', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question065);

var question066 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Caritativo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_066', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question066);

var question067 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Carisma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_067', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question067);

var question068 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Casto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_068', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question068);

var question069 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Catedral</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_069', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question069);

var question070 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Catequesis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_070', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question070);

var question071 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Célibe</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_071', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question071);

var question072 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cielo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_072', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question072);

var question073 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Comunión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_073', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question073);

var question074 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cónclave</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_074', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question074);

var question075 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Confirmación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_075', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question075);

var question076 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Consagrar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_076', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question076);

var question077 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Credencia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_077', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question077);

var question078 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diócesis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_078', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question078);

var question079 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Discípulo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_079', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question079);

var question080 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dogmático</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_080', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question080);

var question081 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Emmanuel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_081', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question081);

var question082 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Encíclica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_082', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question082);

var question083 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Esencia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_083', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question083);

var question084 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Eucaristía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_084', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question084);

var question085 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Evangelio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_085', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question085);

var question086 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Exorcizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_086', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question086);

var question087 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fe</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_087', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question087);

var question088 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Genuflexión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_088', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question088);

var question089 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gracia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_089', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question089);

var question090 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hereje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_090', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question090);

var question091 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Homilía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_091', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question091);

var question092 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hosanna</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_092', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question092);

var question093 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hostia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_093', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question093);

var question094 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Iglesia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_094', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question094);

var question095 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>IHS</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_095', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question095);

var question096 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Infierno</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_096', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question096);

var question097 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jesucristo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_097', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question097);

var question098 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Liturgia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_098', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question098);

var question099 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Magisterio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_099', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question099);

var question100 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mártir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_100', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question100);

var question101 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Matrimonio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_101', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question101);

var question102 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Misa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_102', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question102);

var question103 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Misterio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_103', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question103);

var question104 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Monseñor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_104', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question104);

var question105 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Obispo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_105', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question105);

var question106 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ofertorio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_106', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question106);

var question107 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Parroquia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_107', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question107);

var question108 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pascua</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_108', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question108);

var question109 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Penitente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_109', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question109);

var question110 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pentecostés</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_110', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question110);

var question111 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pontífice</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_111', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question111);

var question112 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Presbítero</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_112', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question112);

var question113 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Prójimo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_113', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question113);

var question114 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Purgatorio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_114', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question114);

var question115 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Redimir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_115', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question115);

var question116 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Religión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_116', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question116);

var question117 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Resucitar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_117', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question117);

var question118 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Revelación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_118', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question118);

var question119 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rito</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_119', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question119);

var question120 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sacramento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_120', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question120);

var question121 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sagrado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_121', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question121);

var question122 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sagrario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_122', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question122);

var question123 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Santuario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_123', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question123);

var question124 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Seminario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_124', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question124);

var question125 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Templo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_125', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question125);

var question126 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Teologales</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_126', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question126);

var question127 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Virtuoso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_127', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question127);

var question128 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Transubstanciar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_128', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question128);

var question129 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Venerar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_129', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question129);

var question130 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vicario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_130', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question130);

var question131 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vigilia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_131', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question131);

var question132 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arcángel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_132', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question132);

var question133 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Serafines</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_133', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question133);

var question134 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Querubines</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_134', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question134);

var question135 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Anglicano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_135', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question135);

var question136 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Apócrifos</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_136', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question136);

var question137 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aureola</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_137', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question137);

var question138 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arca</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_138', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question138);

var question139 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diluviar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_139', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question139);

var question140 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Noé</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_140', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question140);

var question141 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Babel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_141', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question141);

var question142 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Babilonia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_142', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question142);

var question143 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Moisés</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_143', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question143);

var question144 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Belén</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_144', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question144);

var question145 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lourdes</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_145', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question145);

var question146 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jerusalén</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_146', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question146);

var question147 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fátima</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_147', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question147);

var question148 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Devoto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_148', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question148);

var question149 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Poseído</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_149', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question149);

var question150 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Reencarnar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_150', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question150);

var question151 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Concilio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_151', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question151);

var question152 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ortodoxo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_152', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question152);

var question153 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Congregación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_153', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question153);

var question154 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ordenación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_154', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question154);

var question155 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Salvador</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_155', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question155);

var question156 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ícono</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_156', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question156);

var question157 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Confesar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_157', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question157);

var question158 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fiel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_158', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question158);

var question159 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Peregrinar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_159', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question159);

var question160 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Abstinente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_160', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question160);

var question161 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Limosna</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_161', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question161);

var question162 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Caritativo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_162', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question162);

var question163 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ayunar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_163', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question163);

var question164 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Navidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_164', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question164);

var question165 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Laico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_165', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question165);

var question166 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Orar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_166', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question166);

var question167 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Reliquia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_167', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question167);

var question168 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diácono</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_168', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question168);

var question169 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Altar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_169', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question169);

var question170 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Extremaunción</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_170', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question170);

var question171 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Plegaria</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_171', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question171);

var question172 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Adventista</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_172', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question172);

var question173 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jesuita</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_173', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question173);

var question174 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Salesiano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_174', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question174);

var question175 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Franciscano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_175', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question175);

var question176 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Novicia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_176', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question176);

var question177 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Yahvé</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_177', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question177);

var question178 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ostia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_178', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question178);

var question179 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bendecir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_179', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question179);

var question180 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Asceta</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_180', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question180);

var question181 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Evangelizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_181', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question181);

var question182 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Judas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_182', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question182);

var question183 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Amén</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_183', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question183);

var question184 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sotana</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_184', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question184);

var question185 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Paraíso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_185', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question185);

var question186 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Avemaría</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_186', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question186);

var question187 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Encarnar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_187', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question187);

var question188 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Limbo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_188', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question188);

var question189 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Anticristo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_189', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question189);

var question190 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Salmo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_190', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question190);

var question191 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Anunciación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_191', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question191);

var question192 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cirios</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_192', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question192);

var question193 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fraile</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_193', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question193);

var question194 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cruzados</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_194', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question194);

var question195 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Génesis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_195', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question195);

var question196 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Edén</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_196', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question196);

var question197 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Maná</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_197', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question197);

var question198 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Abadía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_198', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question198);

var question199 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Creación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_199', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question199);

var question200 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Heráldicas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_200', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question200);

var question201 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Capellán</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_201', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question201);

var question202 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Omnipotente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_202', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question202);

var question203 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Omnisciente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_203', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question203);

var question204 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Crucificar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_204', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question204);

var question205 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Condenar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_205', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question205);

var question206 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arrepentimiento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_206', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question206);

var question207 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cristiano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_207', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question207);

var question208 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Campanas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_208', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question208);

var question209 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Retablo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_209', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question209);

var question210 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Estampa </big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_210', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question210);

var question211 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Acólito</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_211', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question211);

var question212 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dominicos</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_212', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question212);

var question213 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sacristía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_213', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question213);

var question214 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Convento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_214', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question214);

var question215 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Milagro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_215', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question215);

var question216 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Becerro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_216', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question216);

var question217 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gula </big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_217', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question217);

var question218 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Avaro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_218', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question218);

var question219 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Perezoso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_219', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question219);

var question220 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lujurioso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_220', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question220);

var question221 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Iracundo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_221', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question221);

var question222 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lucifer</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_222', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question222);

var question223 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mesías</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_223', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question223);

var question224 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Glorificar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_224', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question224);

var question225 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Canonizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_225', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question225);

var question226 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Proverbio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_226', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question226);

var question227 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alabar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_227', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question227);

var question228 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sermón</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_228', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question228);

var question229 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Divino</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_229', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question229);

var question230 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pastor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_230', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question230);

var question231 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cuaresma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_231', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question231);

var question232 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Metodista</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_232', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question232);

var question233 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rosario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_233', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question233);

var question234 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sacristán</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_234', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question234);

var question235 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pobre</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_235', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question235);

var question236 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Procesión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_236', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question236);

var question237 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Campanario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_237', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question237);

var question238 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Roma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_238', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question238);

var question239 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mirra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_239', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question239);

var question240 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fantasma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_240', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question240);

var question241 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bruja</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_241', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question241);

var question242 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mago</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_242', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question242);

var question243 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Duende</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_243', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question243);

var question244 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hada</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_244', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question244);

var question245 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Conjuro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_245', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question245);

var question246 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Varita</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_246', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question246);

var question247 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Magia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_247', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question247);

var question248 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Telépata</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_248', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question248);

var question249 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Astrólogo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_249', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question249);

var question250 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ouija</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_250', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question250);

var question251 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Maldición</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_251', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question251);

var question252 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vudú</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_252', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question252);

var question253 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Telequinesis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_253', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question253);

var question254 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tarot</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_254', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question254);

var question255 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Elfo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_255', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question255);

var question256 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aura</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_256', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question256);

var question257 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Chakra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_257', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question257);

var question258 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Clarividente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_258', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question258);

var question259 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Abracadabra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_259', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question259);

var question260 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rito</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_260', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question260);

var question261 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gnosticismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_261', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question261);

var question262 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aries</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_262', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question262);

var question263 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tauro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_263', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question263);

var question264 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Piscis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_264', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question264);

var question265 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cáncer</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_265', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question265);

var question266 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Libra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_266', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question266);

var question267 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Capricornio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_267', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question267);

var question268 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Virgo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_268', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question268);

var question269 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Escorpio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_269', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question269);

var question270 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sagitario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_270', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question270);

var question271 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Acuario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_271', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question271);

var question272 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Leo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_272', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question272);

var question273 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Géminis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_273', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question273);

var question274 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cuarzo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_274', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question274);

var question275 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ágata</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_275', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question275);

var question276 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alquimista</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_276', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question276);

var question277 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Místico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_277', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question277);

var question278 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Amuleto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_278', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question278);

var question279 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Etiqueta</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_279', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question279);

var question280 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Anatman</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_280', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question280);

var question281 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arquetipo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_281', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question281);

var question282 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Atlantis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_282', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question282);

var question283 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alíen</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_283', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question283);

var question284 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ovni</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_284', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question284);

var question285 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Avalon</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_285', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question285);

var question286 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sacrificio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_286', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question286);

var question287 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sirena</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_287', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question287);

var question288 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tritón</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_288', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question288);

var question289 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vidente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_289', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question289);

var question290 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Adivina</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_290', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question290);

var question291 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sectario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_291', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question291);

var question292 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Brujería</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_292', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question292);

var question293 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dragón</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_293', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question293);

var question294 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Yoga</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_294', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question294);

var question295 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Brahama</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_295', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question295);

var question296 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Temazcal</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_296', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question296);

var question297 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Chamán</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_297', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question297);

var question298 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Desdoblamiento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_298', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question298);

var question299 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Abacomancia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_299', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question299);

var question300 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Zarathustra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_300', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question300);

var question301 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Buda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_301', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question301);

var question302 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Yogananda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_302', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question302);

var question303 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Krishnamurti</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_303', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question303);

var question304 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aquelarre</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_304', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question304);

var question305 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jodorowsky</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_305', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question305);

var question306 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Glastonbury</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_306', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question306);

var question307 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Kundalini</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_307', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question307);

var question308 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Giza</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_308', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question308);

var question309 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Clarividente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_309', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question309);

var question310 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Medium</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_310', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question310);

var question311 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tarotista</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_311', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question311);

var question312 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Telépata</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_312', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question312);

var question313 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Psíquica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_313', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question313);

var question314 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hipnotizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_314', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question314);

var question315 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Teletransportar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_315', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question315);

var question316 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mentalizar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_316', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question316);

var question317 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Demonólogo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_317', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question317);

var question318 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sacerdotisa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_318', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question318);

var question319 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<div class='justified'><b><big>Ho'oponopono</big></b></div>",
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_319', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question319);

var question320 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Wicca</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_320', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question320);

var question321 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Péndulo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_321', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question321);

var question322 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diosas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_322', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question322);

var question323 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vibras (vibración)</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_323', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question323);

var question324 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Reiki</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_324', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question324);

var question325 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ocultismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_325', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question325);

var question326 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cristales</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_326', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question326);

var question327 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Incienso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_327', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question327);

var question328 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Oráculo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_328', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question328);

var question329 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Unicornio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_329', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question329);

var question330 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Osho</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_330', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question330);

var question331 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Atrapasueños</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_331', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question331);

var question332 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Quiromancia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_332', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question332);

var question333 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Profano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_333', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question333);

var question334 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Om</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_334', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question334);

var question335 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Zen</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_335', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question335);

var question336 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Feng-shui</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_336', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question336);

var question337 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ying-Yang</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_337', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question337);

var question338 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Interconexión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_338', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question338);

var question339 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ancestros</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_339', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question339);

var question340 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cíclico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_340', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question340);

var question341 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Intuitivo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_341', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question341);

var question342 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Masaje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_342', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question342);

var question343 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Abducido</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_343', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question343);

var question344 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ufología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_344', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question344);

var question345 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Monstruo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_345', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question345);

var question346 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ogro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_346', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question346);

var question347 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>I-Ching</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_347', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question347);

var question348 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Destino</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_348', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question348);

var question349 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rumpología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_349', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question349);

var question350 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Iluminado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_350', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question350);

var question351 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Moai</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_351', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question351);

var question352 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mito</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_352', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question352);

var question353 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Leyenda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_353', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question353);

var question354 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Legendario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_354', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question354);

var question355 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Elegido</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_355', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question355);

var question356 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Inconsciente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_356', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question356);

var question357 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mándala</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_357', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question357);

var question358 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Transpersonal</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_358', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question358);

var question359 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Psicodélico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_359', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question359);

var question360 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Astral</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_360', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question360);

var question361 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ayurveda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_361', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question361);

var question362 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pranayama</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_362', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question362);

var question363 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mudra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_363', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question363);

var question364 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Veda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_364', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question364);

var question365 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Asana</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_365', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question365);

var question366 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sanación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_366', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question366);

var question367 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Biodanza</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_367', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question367);

var question368 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mantra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_368', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question368);

var question369 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Trance</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_369', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question369);

var question370 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Levitar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_370', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question370);

var question371 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Parapsicología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_371', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question371);

var question372 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Súper-humano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_372', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question372);

var question373 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Extrasensorial</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_373', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question373);

var question374 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Criptozoología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_374', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question374);

var question375 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pegaso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_375', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question375);

var question376 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Chupacabras</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_376', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question376);

var question377 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Demonio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_377', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question377);

var question378 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alucinar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_378', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question378);

var question379 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>New-Age</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_379', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question379);

var question380 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Holismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_380', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question380);

var question381 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Precognición</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_381', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question381);

var question382 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Premonición</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_382', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question382);

var question383 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Elevarse</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_383', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question383);

var question384 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Espiritista</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_384', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question384);

var question385 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Retrocognición</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_385', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question385);

var question386 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vampiro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_386', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question386);

var question387 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vórtice</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_387', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question387);

var question388 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Energía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_388', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question388);

var question389 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Visiones</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_389', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question389);

var question390 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pránica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_390', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question390);

var question391 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Zombi</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_391', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question391);

var question392 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Acupuntura</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_392', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question392);

var question393 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aikido</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_393', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question393);

var question394 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Castañeda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_394', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question394);

var question395 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Grof</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_395', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question395);

var question396 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Antroposofía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_396', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question396);

var question397 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aparición</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_397', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question397);

var question398 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Biomagnetismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_398', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question398);

var question399 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bioenergética</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_399', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question399);

var question400 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Biofeedback</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_400', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question400);

var question401 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Reflexología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_401', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question401);

var question402 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Masaje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_402', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question402);

var question403 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mitología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_403', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question403);

var question404 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Canalización</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_404', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question404);

var question405 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cantos</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_405', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question405);

var question406 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cienciología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_406', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question406);

var question407 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Clariaudiencia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_407', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question407);

var question408 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Clarisintencia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_408', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question408);

var question409 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mensajes</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_409', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question409);

var question410 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Deja-vú</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_410', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question410);

var question411 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Masonería</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_411', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question411);

var question412 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ayahuasca</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_412', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question412);

var question413 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Druidas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_413', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question413);

var question414 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_414', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question414);

var question415 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Éxtasis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_415', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question415);

var question416 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ectoplasma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_416', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question416);

var question417 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lama</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_417', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question417);

var question418 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Simbólico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_418', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question418);

var question419 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gaia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_419', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question419);

var question420 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cábala</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_420', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question420);

var question421 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Elixir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_421', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question421);

var question422 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gnosticismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_422', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question422);

var question423 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Halo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_423', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question423);

var question424 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Homeopatía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_424', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question424);

var question425 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Iluminati</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_425', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question425);

var question426 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Área-51</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_426', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question426);

var question427 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jainismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_427', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question427);

var question428 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Karma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_428', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question428);

var question429 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Templario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_429', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question429);

var question430 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Merlín</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_430', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question430);

var question431 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Espíritus</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_431', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question431);

var question432 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Naturopatía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_432', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question432);

var question433 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Paganismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_433', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question433);

var question434 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Neopaganismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_434', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question434);

var question435 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Nirvana</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_435', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question435);

var question436 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Nostradamus</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_436', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question436);

var question437 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Numerología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_437', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question437);

var question438 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Profecía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_438', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question438);

var question439 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Catarsis</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_439', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question439);

var question440 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Extracorporal</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_440', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question440);

var question441 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Planetario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_441', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question441);

var question442 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Visualización</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_442', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question442);

var question443 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pirámides</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_443', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question443);

var question444 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Runas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_444', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question444);

var question445 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sufismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_445', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question445);

var question446 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Talismán</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_446', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question446);

var question447 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tanatología</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_447', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question447);

var question448 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Teosofía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_448', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question448);

var question449 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Meditación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_449', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question449);

var question450 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Yoga</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_450', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question450);

var question451 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Predestinado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_451', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question451);

var question452 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Caravana</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_452', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question452);

var question453 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Freno</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_453', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question453);

var question454 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Atajo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_454', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question454);

var question455 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tijeras</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_455', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question455);

var question456 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Moler</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_456', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question456);

var question457 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gancho</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_457', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question457);

var question458 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Medialuna</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_458', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question458);

var question459 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Grabador</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_459', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question459);

var question460 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pasto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_460', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question460);

var question461 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gripe</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_461', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question461);

var question462 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Enjuagar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_462', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question462);

var question463 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diccionario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_463', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question463);

var question464 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rascarse</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_464', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question464);

var question465 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Espacio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_465', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question465);

var question466 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lavadora</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_466', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question466);

var question467 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Trasbordar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_467', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question467);

var question468 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Deporte</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_468', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question468);

var question469 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Comisario</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_469', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question469);

var question470 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Suegro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_470', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question470);

var question471 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Emboscada</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_471', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question471);

var question472 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Centrifuga</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_472', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question472);

var question473 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Establo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_473', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question473);

var question474 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hundir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_474', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question474);

var question475 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Envase</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_475', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question475);

var question476 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Amaestrado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_476', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question476);

var question477 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Adelgazar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_477', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question477);

var question478 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Escoltar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_478', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question478);

var question479 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Firma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_479', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question479);

var question480 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bonito</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_480', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question480);

var question481 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Capullo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_481', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question481);

var question482 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Enhebrar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_482', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question482);

var question483 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Boomerang</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_483', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question483);

var question484 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Juventud</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_484', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question484);

var question485 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arena</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_485', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question485);

var question486 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mosquito</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_486', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question486);

var question487 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Planos</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_487', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question487);

var question488 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ritmo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_488', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question488);

var question489 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Goma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_489', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question489);

var question490 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Piano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_490', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question490);

var question491 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vivienda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_491', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question491);

var question492 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Zapato</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_492', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question492);

var question493 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Frambuesa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_493', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question493);

var question494 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gotera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_494', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question494);

var question495 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Caricatura</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_495', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question495);

var question496 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lanzar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_496', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question496);

var question497 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Borde</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_497', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question497);

var question498 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Manga</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_498', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question498);

var question499 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hilo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_499', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question499);

var question500 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Anfibio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_500', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question500);

var question501 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Kiwi</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_501', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question501);

var question502 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Medicamento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_502', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question502);

var question503 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Grabar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_503', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question503);

var question504 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mediano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_504', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question504);

var question505 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Polera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_505', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question505);

var question506 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tejido</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_506', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question506);

var question507 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Grifo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_507', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question507);

var question508 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cáscara</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_508', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question508);

var question509 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cajero</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_509', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question509);

var question510 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ticket</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_510', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question510);

var question511 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cancha</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_511', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question511);

var question512 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Nieto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_512', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question512);

var question513 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Picotear</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_513', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question513);

var question514 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Granja</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_514', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question514);

var question515 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Remolque</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_515', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question515);

var question516 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Quitasol</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_516', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question516);

var question517 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Esperar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_517', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question517);

var question518 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Piscina</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_518', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question518);

var question519 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rollo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_519', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question519);

var question520 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Catalina</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_520', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question520);

var question521 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rodrigo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_521', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question521);

var question522 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Melisa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_522', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question522);

var question523 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bruno</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_523', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question523);

var question524 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diego</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_524', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question524);

var question525 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Thiago</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_525', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question525);

var question526 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>El Tabo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_526', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question526);

var question527 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Villarrica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_527', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question527);

var question528 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Santiago</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_528', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question528);

var question529 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_529', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question529);

var question530 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Puerto Varas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_530', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question530);

var question531 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>La Serena</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_531', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question531);

var question532 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Concepción</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_532', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question532);

var question533 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Panguipulli </big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_533', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question533);

var question534 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Montevideo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_534', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question534);

var question535 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>New York</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_535', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question535);

var question536 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Buenos Aires</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_536', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question536);

var question537 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Guadalajara</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_537', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question537);

var question538 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_538', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question538);

var question539 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Blando</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_539', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question539);

var question540 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Frondoso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_540', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question540);

var question541 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Barato</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_541', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question541);

var question542 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Seco</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_542', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question542);

var question543 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Amueblada</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_543', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question543);

var question544 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Empalagoso</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_544', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question544);

var question545 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cómico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_545', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question545);

var question546 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Desechable</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_546', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question546);

var question547 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Escarchado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_547', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question547);

var question548 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hotel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_548', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question548);

var question549 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Papagayo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_549', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question549);

var question550 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Desatar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_550', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question550);

var question551 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cerradura</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_551', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question551);

var question552 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Auto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_552', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question552);

var question553 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mariposa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_553', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question553);

var question554 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cliente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_554', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question554);

var question555 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dibujar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_555', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question555);

var question556 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Botón</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_556', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question556);

var question557 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dama</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_557', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question557);

var question558 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Orilla</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_558', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question558);

var question559 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Riachuelo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_559', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question559);

var question560 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Actor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_560', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question560);

var question561 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Orejera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_561', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question561);

var question562 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Temblor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_562', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question562);

var question563 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Primavera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_563', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question563);

var question564 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Marraqueta</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_564', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question564);

var question565 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Raqueta</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_565', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question565);

var question566 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mascota</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_566', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question566);

var question567 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alicate</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_567', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question567);

var question568 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Colador</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_568', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question568);

var question569 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Avión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_569', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question569);

var question570 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Amortiguar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_570', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question570);

var question571 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Insecto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_571', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question571);

var question572 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pizza</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_572', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question572);

var question573 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diligencia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_573', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question573);

var question574 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cóctel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_574', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question574);

var question575 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Recorrido</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_575', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question575);

var question576 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pala</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_576', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question576);

var question577 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Letrero</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_577', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question577);

var question578 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tirarse</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_578', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question578);

var question579 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Somnoliento</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_579', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question579);

var question580 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cerco</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_580', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question580);

var question581 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Nombre</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_581', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question581);

var question582 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mercurio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_582', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question582);

var question583 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Difícil</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_583', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question583);

var question584 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mezcla</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_584', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question584);

var question585 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sopa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_585', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question585);

var question586 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Creativa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_586', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question586);

var question587 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Agresividad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_587', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question587);

var question588 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cualidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_588', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question588);

var question589 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cordialidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_589', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question589);

var question590 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Dócil</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_590', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question590);

var question591 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fealdad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_591', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question591);

var question592 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Igualdad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_592', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question592);

var question593 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Inquietud</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_593', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question593);

var question594 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Habilidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_594', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question594);

var question595 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vejez</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_595', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question595);

var question596 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Movilidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_596', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question596);

var question597 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sorpresa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_597', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question597);

var question598 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Versatilidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_598', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question598);

var question599 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Utilidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_599', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question599);

var question600 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Vital</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_600', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question600);

var question601 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hielo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_601', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question601);

var question602 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Encaje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_602', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question602);

var question603 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Guirnalda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_603', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question603);

var question604 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Hematoma</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_604', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question604);

var question605 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rodilla</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_605', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question605);

var question606 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Prendedor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_606', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question606);

var question607 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Flaco</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_607', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question607);

var question608 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Nostalgia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_608', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question608);

var question609 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ansiedad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_609', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question609);

var question610 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Astucia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_610', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question610);

var question611 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Calidad</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_611', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question611);

var question612 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Añoranza</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_612', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question612);

var question613 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ego</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_613', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question613);

var question614 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Destilar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_614', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question614);

var question615 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Suecia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_615', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question615);

var question616 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Diente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_616', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question616);

var question617 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rotar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_617', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question617);

var question618 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Mecánica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_618', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question618);

var question619 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Postizo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_619', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question619);

var question620 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sonajero</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_620', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question620);

var question621 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Espejismo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_621', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question621);

var question622 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Zambullir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_622', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question622);

var question623 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Combustible</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_623', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question623);

var question624 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cucurucho</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_624', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question624);

var question625 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cabina</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_625', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question625);

var question626 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sudor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_626', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question626);

var question627 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Domicilio</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_627', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question627);

var question628 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tostar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_628', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question628);

var question629 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Resumen</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_629', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question629);

var question630 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Liviano</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_630', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question630);

var question631 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Peaje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_631', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question631);

var question632 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Taza</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_632', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question632);

var question633 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Accidente</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_633', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question633);

var question634 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cochayuyo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_634', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question634);

var question635 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Levadura</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_635', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question635);

var question636 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Locomotora</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_636', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question636);

var question637 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Playa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_637', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question637);

var question638 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cita</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_638', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question638);

var question639 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Invasión</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_639', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question639);

var question640 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bombo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_640', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question640);

var question641 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cereal</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_641', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question641);

var question642 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Derrumbe</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_642', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question642);

var question643 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sauna</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_643', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question643);

var question644 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pagar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_644', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question644);

var question645 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Engranar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_645', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question645);

var question646 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Temporera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_646', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question646);

var question647 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Bingo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_647', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question647);

var question648 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Estancado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_648', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question648);

var question649 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cuadra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_649', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question649);

var question650 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pipa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_650', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question650);

var question651 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ojear</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_651', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question651);

var question652 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Empacho</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_652', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question652);

var question653 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Impuesto</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_653', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question653);

var question654 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Aseo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_654', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question654);

var question655 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Turistear</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_655', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question655);

var question656 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Caldera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_656', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question656);

var question657 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Inversionista</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_657', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question657);

var question658 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Blanco</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_658', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question658);

var question659 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gol</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_659', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question659);

var question660 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Embutido</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_660', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question660);

var question661 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ventilar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_661', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question661);

var question662 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Estufa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_662', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question662);

var question663 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cachorro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_663', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question663);

var question664 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Afligirse</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_664', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question664);

var question665 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Eco</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_665', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question665);

var question666 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pan</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_666', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question666);

var question667 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Novela</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_667', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question667);

var question668 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Provincia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_668', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question668);

var question669 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Peludo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_669', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question669);

var question670 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Moda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_670', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question670);

var question671 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Desfile</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_671', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question671);

var question672 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Estómago</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_672', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question672);

var question673 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Sello</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_673', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question673);

var question674 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Oficina</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_674', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question674);

var question675 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Lavanda</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_675', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question675);

var question676 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fósforo</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_676', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question676);

var question677 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Encorvado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_677', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question677);

var question678 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Recibir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_678', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question678);

var question679 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Desabrochar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_679', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question679);

var question680 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Jabalina</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_680', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question680);

var question681 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ensillar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_681', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question681);

var question682 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Porcentaje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_682', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question682);

var question683 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Anclaje</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_683', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question683);

var question684 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Arribar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_684', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question684);

var question685 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Papel</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_685', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question685);

var question686 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Letra</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_686', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question686);

var question687 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Caligrafía</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_687', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question687);

var question688 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Rascar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_688', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question688);

var question689 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cosquillas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_689', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question689);

var question690 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Computadora</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_690', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question690);

var question691 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Gotear</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_691', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question691);

var question692 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Elástico</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_692', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question692);

var question693 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Faja</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_693', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question693);

var question694 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pinchar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_694', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question694);

var question695 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Barrera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_695', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question695);

var question696 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Ganar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_696', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question696);

var question697 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Teatro</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_697', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question697);

var question698 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Danzar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_698', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question698);

var question699 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Contaminación</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_699', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question699);

var question700 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Fabrica</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_700', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question700);

var question701 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tela</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_701', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question701);

var question702 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tejer</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_702', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question702);

var question703 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pantufla</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_703', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question703);

var question704 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cebar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_704', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question704);

var question705 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Zurcir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_705', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question705);

var question706 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Alborada</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_706', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question706);

var question707 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Cornisa</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_707', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question707);

var question708 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Perla</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_708', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question708);

var question709 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Resfriado</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_709', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question709);

var question710 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Orbitar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_710', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question710);

var question711 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Empaque</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_711', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question711);

var question712 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Olla</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_712', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question712);

var question713 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Tetera</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_713', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question713);

var question714 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Motor</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_714', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question714);

var question715 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Espagueti</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_715', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question715);

var question716 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Esquiador</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_716', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question716);

var question717 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Pilas</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_717', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question717);

var question718 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Estancia</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_718', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question718);

var question719 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Avenida</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_719', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question719);

var question720 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Remache</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_720', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question720);

var question721 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Prevenir</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_721', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question721);

var question722 = {
  type: 'survey-multi-choice-vertical',
  preamble: '<div class="justified"><b><big>Trinar</big></b></div>',
  questions: [
    {prompt: '<div class="justified">¿Cuán religiosa considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true},
    {prompt: '<div class="justified">¿Cuán paranormal/mágica considera que es esta palabra?</div>', options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], required: true, random_options: false, horizontal: true}
  ],
  data: {trialid: 'Words_722', procedure: 'Words'},
  procedure: 'Words'
};
Words.push(question722);

Words.unshift(instruction_screen_experiment);
questions.push.apply(questions, Words);

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'Words'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'Words'}).json();
      }
      saveData(data, online, 'Words');
    },
    procedure: 'Words'
});
