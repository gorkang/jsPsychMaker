// Daily mental wandering

/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DMW') );
DMW = [];    //temporal timeline

allowed_ids = ["123ab"]

question_allowed = false

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Vagabundeo mental en la vida diaria</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    button_label_next: 'Continuar',
    data:{trialid: 'Instructions_01', procedure: 'DMW'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
    type: 'survey-text',
    questions: [{prompt: '<div class="justified">Ingrese el identificador que se le ha asignado:</div>', type: 'text', required: true}],
    data: {trialid: 'DMW_01', procedure: 'DMW'},
    on_load: function() {
        // verificador
        const actual_input = document.getElementsByName("#jspsych-survey-text-response-0")[0];
        const button = document.getElementById("jspsych-survey-text-next");

        actual_input.addEventListener("input", function() {
            // Aquí puedes llamar a la función que deseas ejecutar cada vez que se actualice el input
            id_verification();
        });

        function id_verification() {
            if (allowed_ids.includes(actual_input.value))
                button.disabled = false
            else
                button.disabled = true
                //button.disabled = false // DELETE THIS WHEN ENTERING PRODUCTION
        }

        id_verification();
    }
};
DMW.push(question01);

var question02 = {
    type: 'survey-html-form',
    preamble: '<div class="justified">¿Que estás haciendo? </div>', 
    html: '<br><input name ="Q0" list="doing" required> <datalist id="doing"> <option value="Descansando, durmiendo"> <option value="Trabajando"> <option value="Usando computador, smartphone, tablet"> <option value="Movilizándome, viajando"> <option value="Aseándome, trabajando en mi cuidado personal"> <option value="Escuchando radio"> <option value="Viendo TV"> <option value="Haciendo labores domésticas"> <option value="Leyendo"> <option value="Estudiando"> <option value="Relajándome, nada especial"> <option value="Cuidando de mi familia"> <option value="Comprando"> <option value="Haciendo diligencias"> <option value="Preparando comida"> <option value="Orando, adorando, rezando"> <option value="Meditando, haciendo yoga"> <option value="Ejercitándome"> <option value="Caminando"> <option value="Jugando"> <option value="Saliendo con mis amigos/amigas"> <option value="Cocinando"> <option value="Comiendo"> <option value="Conversando, hablando"> <option value="Teniendo sexo"> <option value="Otros"> </datalist><br><br>',
    button_label: 'Continuar',
    data: {trialid: 'DMW_02', procedure: 'DMW'}
};
DMW.push(question02);


var question03 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: '<div class="justified">¿Tu atención estaba enfocada en lo que estás haciendo actualmente?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true, horizontal: false}],
    button_label: 'Continuar',
    data: {trialid: 'DMW_03', procedure: 'DMW'}
};
DMW.push(question03);

var question04 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: '<div class="justified">Tu atención estaba distraída por:</div>', options: ['&nbsp;Una distracción externa (ej. Postura incómoda, picazón, estornudos, tos)', '&nbsp;Una distracción interna (ej. Recuerdos, imaginación, pensamientos)', '&nbsp;Somnolencia (sensación de quedarse dormido)', '&nbsp;Otros'], required: true, horizontal: false}],
    button_label: 'Continuar',
    data: {trialid: 'DMW_04', procedure: 'DMW'}
};

var if_question04 = {
    timeline: [question04],
    data: {trialid: 'DMW_04_if', procedure: 'DMW'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DMW_03'))["response"])["Q0"]).trim();
        if(data == 'Si'){
            question_allowed = true;
            return true;
        } else {
            return false;
        }
    }
}
DMW.push(if_question04);

var question05 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: '<div class="justified">El pensamiento se refería a:</div>', options: ['&nbsp;El pasado', '&nbsp;El presente', '&nbsp;El futuro', '&nbsp;Era atemporal'], required: true, horizontal: false}],
    button_label: 'Continuar',
    data: {trialid: 'DMW_05', procedure: 'DMW'}
};

var if_question05 = {
    timeline: [question05],
    data: {trialid: 'DMW_05_if', procedure: 'DMW'},
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        if (question_allowed) {
            let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DMW_04'))["response"])["Q0"]).trim();
            if(data == 'Una distracción interna (ej. Recuerdos, imaginación, pensamientos)'){
                return true;
            }
        }
        return false;
    }
}
DMW.push(if_question05);

DMW.unshift(instruction_screen_experiment);
questions.push.apply(questions, DMW);

call_function("DMW");
