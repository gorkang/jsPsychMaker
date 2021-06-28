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

SDG = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Información Sociodemográfica</big></b><br />'+
    'Las preguntas que se le realizarán a continuación son de carácter general. Le recuerdo que toda la información que usted entregue es confidencial y sólo será utilizada con fines académicos.' +'</p>'],
    data:{trialid: 'Instructions', procedure: 'SDG'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question00 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Rut Completo (sin puntos ni guión y con dígito verificador, en caso que termine en k, reemplace por un 0):</div>', type: 'number', range: [100000000, 300000000], required: true}],
  data: {trialid: 'SDG_01', procedure: 'SDG'}
};
SDG.push(question00);

/*var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Sexo:</div>', options: ['&nbsp;Hombre', '&nbsp;Mujer'], required: true, horizontal: false}],
  data: {trialid: 'SDG_01', procedure: 'SDG'}
};
SDG.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Fecha de Nacimiento:</div>', type: 'date', required: true}],
  data: {trialid: 'SDG_02', procedure: 'SDG'}
};
SDG.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Edad:</div>', type: 'number', required: true}],
  data: {trialid: 'SDG_03', procedure: 'SDG'}
};*/
//SDG.push(question03); eliminado dado que tenemos fecha de nacimiento

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál es su actual situación de pareja?</div>', options: ['&nbsp;Casado (a)', '&nbsp;Conviviente', '&nbsp;Viudo (a)', '&nbsp;Divorciado/anulado (a)', '&nbsp;Separado (a)', '&nbsp;Soltero/sin pareja', '&nbsp;Soltero/con pareja'], required: true, horizontal: false}],
  data: {trialid: 'SDG_02', procedure: 'SDG'}
};
SDG.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál es el grado más alto de educación que usted ha completado?</div>', options: ['&nbsp;Sin Estudios', '&nbsp;Básica Incompleta', '&nbsp;Básica Completa', '&nbsp;Media Incompleta', '&nbsp;Media Completa', '&nbsp;Técnica Incompleta', '&nbsp;Técnica Completa', '&nbsp;Universitaria Incompleta', '&nbsp;Universitaria Completa o más', '&nbsp;No sabe o no aplica'], required: true, horizontal: false}],
  data: {trialid: 'SDG_03', procedure: 'SDG'}
};
SDG.push(question05);

/*var question06 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Años de estudio (considerando educación básica, media y cualquier estudio posterior):</div>', type: 'number', required: true}],
  data: {trialid: 'SDG_06', procedure: 'SDG'}
};
SDG.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Comuna de Residencia:</div>', type: 'text', required: true}],
  data: {trialid: 'SDG_07', procedure: 'SDG'}
};
SDG.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Durante los últimos 12 meses ¿Ha sido diagnosticado y/o tratado por algún problema Psicológico o Psiquiátrico?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'SDG_08', procedure: 'SDG'}
};
SDG.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿De cuál problema fue diagnosticado y/o tratado?</div>', type: 'text', required: true}],
  data: {trialid: 'SDG_09', procedure: 'SDG'}
};

var if_question09 = {
    timeline: [question09],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDG_08'))["response"])["Q0"]).trim();
        if(data == "Si"){
            return true;
        } else {
            return false;
        }
    }
}

SDG.push(if_question09);*/

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Tiene Nº de registro social de hogares? (Si no sabe puede consultar aquí: <a href="http://www.registrosocial.gob.cl/" target="_blank">http://www.registrosocial.gob.cl/</a>. Luego ingrese a "ir a mi registro" e ingrese los datos que le solicitan. En caso que tenga, recuerde el porcentaje al cual corresponde, en caso contrario indique la opción "No tengo registro").</div>', options: ['&nbsp;Si tengo registro.', '&nbsp;No tengo registro.'], required: true, horizontal: false}],
  data: {trialid: 'SDG_04', procedure: 'SDG'}
};
SDG.push(question10);

var question10_1 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Ingrese el porcentaje al que corresponde en el registro social de hogares:</div>', type: 'number', range: [0, 100], required: true}],
  data: {trialid: 'SDG_05', procedure: 'SDG'}
};

var if_question10_1 = {
    timeline: [question10_1],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDG_04'))["response"])["Q0"]).trim();
        if(data == "Si tengo registro."){
            return true;
        } else {
            return false;
        }
    }
}

SDG.push(if_question10_1);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Cuál es su situación ocupacional actual?</div>', options: ['&nbsp;Trabaja a tiempo completo', '&nbsp;Trabaja a tiempo parcial', '&nbsp;Trabaja esporádicamente', '&nbsp;Está desempleado(a), pero busca trabajo', '&nbsp;Es estudiante', '&nbsp;No trabaja, ni busca trabajo', '&nbsp;Es ama de casa', '&nbsp;Está jubilado o pensionado', '&nbsp;Es rentista', '&nbsp;No sabe/No responde'], required: true, horizontal: false}],
  data: {trialid: 'SDG_06', procedure: 'SDG'}
};
SDG.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Qué tipo de trabajo hace usted?</div>', options: ['&nbsp;Profesionales', '&nbsp;Ejecutivos, administrativos, gerentes', '&nbsp;Comerciantes, vendedores y cajeros', '&nbsp;Trabajos de apoyo administrativo, incluyendo trabajos eclesiásticos administrativos', '&nbsp;Trabajo con productos de precisión o artesanías. Técnicos en reparación.', '&nbsp;Operador de máquinas, instalador, inspectores', '&nbsp;Ocupaciones de transporte y manejo de carga', '&nbsp;Obreros, limpiadores de equipos, ayudantes y peones', '&nbsp;Ocupaciones de servicio, excepto empleados de casa particular', '&nbsp;Agricultor/ gerente de agricultura', '&nbsp;Campesino', '&nbsp;Fuerzas Armadas', '&nbsp;Empleados casa particular', '&nbsp;Otro'], required: true, horizontal: false}],
  data: {trialid: 'SDG_07', procedure: 'SDG'}
};

var if_question12 = {
    timeline: [question12],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDG_06'))["response"])["Q0"]).trim();
        if(data == "Trabaja a tiempo completo" || data == "Trabaja a tiempo parcial" || data == "Trabaja esporádicamente" ){
            return true;
        } else {
            return false;
        }
    }
}

SDG.push(if_question12);

var question13 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Especifique el tipo de trabajo que realiza:</div>', type: 'text', required: true}],
  data: {trialid: 'SDG_08', procedure: 'SDG'}
};

var if_question13 = {
    timeline: [question13],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data1 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDG_06'))["response"])["Q0"]).trim();
        if(data1 == "Trabaja a tiempo completo" || data1 == "Trabaja a tiempo parcial" || data1 == "Trabaja esporádicamente" ){
            let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'SDG_07'))["response"])["Q0"]).trim();
            if(data2 == "Otro" ){
                return true;
            }
          }
        return false;
    }
}

SDG.push(if_question13);

SDG.unshift(instruction_screen_experiment);
questions.push.apply(questions, SDG)

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'SDG'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'SDG'}).json();
      }
      saveData(data, online, 'SDG');
    },
    procedure: 'SDG'
});
