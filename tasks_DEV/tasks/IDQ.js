/**
 * CSCN lab
/**
This document was made with test_maker
*/



questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('IDQ') );

IDQ = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>IDQ</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'IDQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Nombre completo</div>', type: 'text', required: true}],
  data: {trialid: 'IDQ_01', procedure: 'IDQ'}
};
IDQ.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Edad</div>', type: 'number', required: true}],
  data: {trialid: 'IDQ_02', procedure: 'IDQ'}
};
IDQ.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Rut (sin digito verificador)</div>', type: 'number', required: true}],
  data: {trialid: 'IDQ_03', procedure: 'IDQ'}
};
IDQ.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sexo</div>', options: ['&nbsp;Hombre', '&nbsp;Mujer', '&nbsp;No binario'], required: true, horizontal: false}],
  data: {trialid: 'IDQ_04', procedure: 'IDQ'}
};
IDQ.push(question04);

var question05 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Nivel educacional en años de estudio (Considere hasta el año realizado. Por ejemplo, si terminó 4to medio y no realizó nada más, poner 12 años. Si realizo dos años de formación técnica después de terminar 4to medio, poner 14 años. Si llegó solo hasta 3er medio, poner 10 ya que terminó 2do medio. etc.)</div>', type: 'number', required: true}],
  data: {trialid: 'IDQ_05', procedure: 'IDQ'}
};
IDQ.push(question05);

var question06 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Comuna de residencia</div>', type: 'text', required: true}],
  data: {trialid: 'IDQ_06', procedure: 'IDQ'}
};
IDQ.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Número telefónico de contacto</div>', type: 'number', required: true}],
  data: {trialid: 'IDQ_07', procedure: 'IDQ'}
};
IDQ.push(question07);

var question08 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Dirección correo electrónico</div>', type: 'text', required: true}],
  data: {trialid: 'IDQ_08', procedure: 'IDQ'}
};
IDQ.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Ha sido diagnosticado con alguna enfermedad psiquiátrica?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'IDQ_09', procedure: 'IDQ'}
};
IDQ.push(question09);

var question10 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿En que año fue diagnosticado con alguna enfermedad psiquiátrica?</div>', type: 'number', required: true}],
  data: {trialid: 'IDQ_10', procedure: 'IDQ'}
};

var if_question10 = {
    timeline: [question10],
    data: {trialid: 'IDQ_10_if', procedure: 'IDQ'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'IDQ_09'))["response"])["Q0"]).trim();
        if(data == "Si"){
            return true;
        } else {
            return false;
        }
    }
}
IDQ.push(if_question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Se encuentra actualmente bajo algún tratamiento psiquiátrico? (ej: usa medicación; está bajo terapia psiquiátrica y/o control médico)</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'IDQ_11', procedure: 'IDQ'}
};
IDQ.push(question11);

var question12 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Qué tipo de tratamiento?</div>', type: 'text', required: true}],
  data: {trialid: 'IDQ_12', procedure: 'IDQ'}
};

var if_question12 = {
    timeline: [question12],
    data: {trialid: 'IDQ_12_if', procedure: 'IDQ'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'IDQ_11'))["response"])["Q0"]).trim();
        if(data == "Si"){
            return true;
        } else {
            return false;
        }
    }
}
IDQ.push(if_question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Ha tenido que acudir por ayuda especializada, o tiene la necesidad de buscarla, por consumo problemático de alcohol y/o drogas?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'IDQ_13', procedure: 'IDQ'}
};
IDQ.push(question13);

var question14 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Qué tipo de droga ha consumido?</div>', type: 'text', required: true}],
  data: {trialid: 'IDQ_14', procedure: 'IDQ'}
};

var if_question14 = {
    timeline: [question14],
    data: {trialid: 'IDQ_14_if', procedure: 'IDQ'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'IDQ_13'))["response"])["Q0"]).trim();
        if(data == "Si"){
            return true;
        } else {
            return false;
        }
    }
}
IDQ.push(if_question14);

IDQ.unshift(instruction_screen_experiment);
questions.push.apply(questions, IDQ)

questions.push({
    type: 'call-function',
    data: {trialid: 'IDQ_000', procedure: 'IDQ'},
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'IDQ'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'IDQ'}).json();
      }
      saveData(data, online, 'IDQ');
    }
});
