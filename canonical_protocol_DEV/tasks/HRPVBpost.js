/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('HRPVBpost') );
HRPVBpost = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
//    pages: [`<p><left><p><left><big><b>Percepción de riesgos según modalidad de parto</b></big><br />Indica la probabilidad de que ocurra cada uno de los eventos mencionados.</p>`],
    pages: ['<p><left><b><big>Preguntas sobre preferencias</big></b><br />'+'Ahora que has podido leer la información del consentimiento, te pedimos que vuelvas a responder a las preguntas sobre riesgos' +'</p>',
            '<p><left>' + '<p><left><big><b>Percepción de riesgos según modalidad de parto</b></big><br />'+'Indica la probabilidad de que ocurra cada uno de los eventos mencionados.' +'</p>'],

    data: {trialid: 'Instructions_01', procedure: 'HRPVBpost'},
    show_clickable_nav: true,
    allow_backward: false,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

HRPVBpost.unshift(instruction_screen_experiment);
questions.push.apply(questions, HRPVBpost)


// CREATE MATERIALS ----------------------------------------------------------

HRPVBpost_BB = [];    //temporal timeline
HRPVBpost_MM = [];    //temporal timeline


  var tipo_sujeto = ['Bebé', 'Madre']
  var tipo_parto_raw = ['por cesarea', 'vaginal']

  var tipo_problema_BB = ['Problemas respiratorios del recién nacido',
                         'Lesión en el cerebro del bebe por falta de oxígeno',
                         'Hospitalización en cuidados intensivos neonatales',
                         'Dificultades para inicio temprano de lactancia materna']

   var tipo_problema_MM = ['Complicaciones de la anestesia',
                          'Paro cardíaco',
                          'Histerectomía (extracción del útero)',
                          'Infección de la herida',
                          'Lesión de la vagina',
                          'Hospitalización de la madre en cuidados intensivos',
                          'Depresión post parto']



    var number_of_items_BB = tipo_problema_BB.length;
    var number_of_items_MM = tipo_problema_MM.length;



// Data preparation block BEBE ------------------------------------

  // Shuffle n pairs of tipo_parto_raw (n == number_of_items_BB)
  tipo_parto = Array.apply(null, Array(number_of_items_BB)).map(function(){return jsPsych.randomization.shuffle(tipo_parto_raw)}).flat()

  // Asign specific colors to each type of item
  color = tipo_parto.slice()
  color.forEach(function (item, index) {
     if (item == 'por cesarea') {
      color[index] = "ffa442";
    } else {
      color[index] = "4268ff"
    }}
  );

  // Create suffix for trialid that depends on the within car tipo_parto_raw
  tipo_parto_n = tipo_parto.slice()
  tipo_parto_n.forEach(function (item, index) {
     if (item == tipo_parto_raw[0]) {
      tipo_parto_n[index] = "01";
    } else {
      tipo_parto_n[index] = "02"
    }}
  );


  // Create Array for the within var tipo_sujeto[0] // Bebé
  var test_riesgos_BB = []
  for(var i=0; i < tipo_parto.length/2; i++){

    var temp =
      { sujeto: tipo_sujeto[0],
        intro: tipo_problema_BB[i],
        stimulus1: [color[i+i], tipo_parto[i+i]],
        stimulus2: [color[i+i+1], tipo_parto[i+i+1]],
        // i + 1 to avoid 00
        trialid0: "HRPVBpost_" + ("00" + (i + 1)).slice (-2) + "_" + "00",// + "_0",
        trialid1: "HRPVBpost_" + ("00" + (i + 1)).slice (-2) + "_" + tipo_parto_n[i+i],// + "_1",
        trialid2: "HRPVBpost_" + ("00" + (i + 1)).slice (-2) + "_" + tipo_parto_n[i+i+1],// + "_2"
      }


    test_riesgos_BB.push(temp)
  }

// Data preparation block MAMA ------------------------------------

  // Shuffle n pairs of tipo_parto_raw (n == number_of_items_MM)
  tipo_parto = Array.apply(null, Array(number_of_items_MM)).map(function(){return jsPsych.randomization.shuffle(tipo_parto_raw)}).flat()

  // Asign specific colors to each type of item
  color = tipo_parto.slice()
  color.forEach(function (item, index) {
     if (item == 'por cesarea') {
      color[index] = "ffa442";
    } else {
      color[index] = "4268ff"
    }}
  );

  // Create suffix for trialid that depends on the within car tipo_parto_raw
  tipo_parto_n = tipo_parto.slice()
  tipo_parto_n.forEach(function (item, index) {
     if (item == tipo_parto_raw[0]) {
      tipo_parto_n[index] = "01";
    } else {
      tipo_parto_n[index] = "02"
    }}
  );


  // Create Array for the within var tipo_sujeto[1] // Mamá
  var test_riesgos_MM = []
  for(var i=0; i < tipo_parto.length/2; i++){

    var temp =
      { sujeto: tipo_sujeto[1],
        intro: tipo_problema_MM[i],
        stimulus1: [color[i+i], tipo_parto[i+i]],
        stimulus2: [color[i+i+1], tipo_parto[i+i+1]],
        // i + 1 to avoid 00. We sum number_of_items_BB so the item number for MM starts when BB ends
        trialid0: "HRPVBpost_" + ("00" + ((i + 1) + number_of_items_BB)).slice (-2) + "_" + "00",// + "_0",
        trialid1: "HRPVBpost_" + ("00" + ((i + 1) + number_of_items_BB)).slice (-2) + "_" + tipo_parto_n[i+i],// + "_1",
        trialid2: "HRPVBpost_" + ("00" + ((i + 1) + number_of_items_BB)).slice (-2) + "_" + tipo_parto_n[i+i+1],// + "_2"
      }


    test_riesgos_MM.push(temp)
  }



// Create SCREENS of trial ---------------------------------------------------

  var intro_BB = {
      type: 'instructions',
      pages: ['<p><left><p><left><big>Riesgos para <b>' + tipo_sujeto[0] + '</b></p>'], // Esto esta fuera del trial, por lo que usamos tipo_sujeto[0] directamente
      data: {trialid: 'Instructions_02', procedure: 'HRPVBpost'},
      show_clickable_nav: true,
      allow_backward: false,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };

  var intro_MM = {
      type: 'instructions',
      pages: ['<p><left><p><left><big>Riesgos para <b>' + tipo_sujeto[1] + '</b></p>'], // Esto esta fuera del trial, por lo que usamos tipo_sujeto[0] directamente
      data: {trialid: 'Instructions_02', procedure: 'HRPVBpost'},
      show_clickable_nav: true,
      allow_backward: false,
      on_trial_start: function(){
          bloquear_enter = 0;
      }
  };


  var intro = {
    type: 'html-button-response',
    stimulus: function() { return'<B>' + jsPsych.timelineVariable('intro') + '</B><BR><BR>'},
    choices: ['Indicar probabilidades'],
    data: function () {
      var element = {
        //trialid: 'HRPVBpost_00',
        trialid: jsPsych.timelineVariable('trialid0'),
        condition_within : jsPsych.timelineVariable('intro'),
        stimulus: jsPsych.timelineVariable('intro'),
        procedure: 'HRPVBpost'
      };
      return element;
      }
  };


  var test1 = {
    type: 'html-slider-response',
      stimulus: function () {return '<div class="justified"><p><U><B>' + jsPsych.timelineVariable('sujeto') + '</B> en un <span style="color: #' + jsPsych.timelineVariable('stimulus1')[0] + '"><B>parto ' + jsPsych.timelineVariable('stimulus1')[1] + '</B></span></U><BR><BR><BR>Indica la probabilidad de que ocurra lo siguiente:<BR><BR><B>' + jsPsych.timelineVariable('intro') + '</B></div></br>'},
      require_movement: true, slider_number: true, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 0.1, labels: ["Muy baja", "Muy alta"], button_label: "Next",
      data: function () {
        var element = {
          //trialid: 'HRPVBpost_01',
          trialid: jsPsych.timelineVariable('trialid1'),
          condition_within : jsPsych.timelineVariable('intro') + "; " + jsPsych.timelineVariable('stimulus1')[1].replace("por ", ""),
          stimulus: jsPsych.timelineVariable('stimulus1')[1].replace("por ", ""),
          procedure: 'HRPVBpost'
        };
        return element;
        }
      }

  var test2 = {
    type: 'html-slider-response',
      stimulus: function () {return '<div class="justified"><p><U><B>' + jsPsych.timelineVariable('sujeto') + '</B> en un <span style="color: #' + jsPsych.timelineVariable('stimulus2')[0] + '"><B>parto ' + jsPsych.timelineVariable('stimulus2')[1] + '</B></span></U><BR><BR><BR>Indica la probabilidad de que ocurra lo siguiente:<BR><BR><B>' + jsPsych.timelineVariable('intro') + '</B></div></br>'},
      require_movement: true, slider_number: true, required: true, stimulus_duration: 1e+10, min: 0, max: 100, slider_width: 500, slider_start: 50, step: 0.1, labels: ["Muy baja", "Muy alta"], button_label: "Next",
      data: function () {
        var element = {
          //trialid: 'HRPVBpost_02',
          trialid: jsPsych.timelineVariable('trialid2'),
          condition_within : jsPsych.timelineVariable('intro') + "; " + jsPsych.timelineVariable('stimulus2')[1].replace("por ", ""),
          stimulus: jsPsych.timelineVariable('stimulus2')[1].replace("por ", ""),
          procedure: 'HRPVBpost'
        };
        return element;
        }
    }


// Create blocks --------------------------------------------------------

  var test_procedure_BB = {
    timeline: [intro, test1, test2],
    data: {trialid: 'HRPVBpost_BB', procedure: 'HRPVBpost'},
    timeline_variables: test_riesgos_BB,
    repetitions: 1,
    randomize_order: true,
    procedure: 'HRPVBpost'
  }
  HRPVBpost_BB.push(test_procedure_BB);
  HRPVBpost_BB.unshift(intro_BB);


  var test_procedure_MM = {
    timeline: [intro, test1, test2],
    data: {trialid: 'HRPVBpost_MM', procedure: 'HRPVBpost'},
    timeline_variables: test_riesgos_MM,
    repetitions: 1,
    randomize_order: true,
    procedure: 'HRPVBpost'
  }
  HRPVBpost_MM.push(test_procedure_MM);
  HRPVBpost_MM.unshift(intro_MM);



// Randomize order of blocks ------------------------------------------------

  var order_blocks = ['HRPVBpost_BB','HRPVBpost_MM'];
  if (debug_mode == 'false') order_blocks = jsPsych.randomization.repeat(order_blocks,1);

  // Present blocks in random order
  order_blocks.push.apply(questions, window[order_blocks[0]]);
  order_blocks.push.apply(questions, window[order_blocks[1]]);



call_function("HRPVBpost");
