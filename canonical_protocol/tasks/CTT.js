/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// COUNTERFACTUAL THINKING TEST

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CTT') );
CTT = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Test de pensamiento contrafactual</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'CTT'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

if (between_selection["CTT"][0] == "1") {

  var question01 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: '<div class="justified"><p><i>Escenario 1</i></p><p>Imagine que usted está manejando hacia la oficina en la que tendrá una importante entrevista de trabajo que ha estado esperando mucho tiempo. Además, imagine que, después de estacionar su auto, está caminando hacia la oficina un poco apurado porque no quiere llegar tarde a la entrevista. Sin embargo, en el camino a la oficina, usted tiene el presentimiento de que dejó la puerta del auto abierta. Aunque así lo cree, usted no puede estar absolutamente seguro de sí cerró o no la puerta.</p><p>¿Usted regresaría a verificar si la puerta del auto quedó abierta o iría directamente a la entrevista?</p></div>', options: ['Iría a la entrevista', 'se devolvería a revisar la puerta del carro (auto)'], required: true, horizontal: false}],
    data: {trialid: 'CTT_01', condition_between: between_selection["CTT"][0], procedure: 'CTT'}
  };

} else if (between_selection["CTT"][0] == "2") {

  var question01 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: '<div class="justified"><p><i>Escenario 2</i></p><p>Imagine que usted está manejando hacia la oficina en la que tendrá una importante entrevista de trabajo que ha estado esperando mucho tiempo. Además, imagine que, después de estacionar su auto, está caminando hacia la oficina un poco apurado porque no quiere llegar tarde a la entrevista. Sin embargo, en el camino a la oficina, usted tiene el presentimiento de que dejó la puerta del auto abierta. Aunque así lo cree, usted no puede estar absolutamente seguro de sí cerró o no la puerta.</p><p>Piense por un minuto acerca de qué tan molesto se sentiría si usted decidiera no regresar a verificar que la puerta de su carro (auto) esté cerrada, y su carro (auto) fuera saqueado.</p><p>¿Usted regresaría a verificar si la puerta del carro (auto) quedó abierta o iría directamente a la entrevista?</p></div>', options: ['Iría a la entrevista', 'se devolvería a revisar la puerta del carro (auto)'], required: true, horizontal: false}],
    data: {trialid: 'CTT_01', condition_between: between_selection["CTT"][0], procedure: 'CTT'}
  };

} else if (between_selection["CTT"][0] == "3") {

  var question01 = {
    type: 'survey-multi-choice-vertical',
    questions: [{prompt: '<div class="justified"><p><i>Escenario 3</i></p><p>Imagine que usted está manejando hacia la oficina en la que tendrá una importante entrevista de trabajo que ha estado esperando mucho tiempo. Además, imagine que, después de estacionar su auto, está caminando hacia la oficina un poco apurado porque no quiere llegar tarde a la entrevista. Sin embargo, en el camino a la oficina, usted tiene el presentimiento de que dejó la puerta del auto abierta. Aunque así lo cree, usted no puede estar absolutamente seguro de sí cerró o no la puerta.</p><p>Piense por un minuto acerca de qué tan molesto se sentiría si usted decidiera regresar a verificar que la puerta de su auto esté cerrada, y terminará llegando tarde a la entrevista y perdiendo la oportunidad de obtener el trabajo por el que tanto ha esperado.</p><p>¿Usted regresaría a verificar si la puerta del carro (auto) quedó abierta o iría directamente a la entrevista?</p></div>', options: ['Iría a la entrevista', 'se devolvería a revisar la puerta del carro (auto)'], required: true, horizontal: false}],
    data: {trialid: 'CTT_01', condition_between: between_selection["CTT"][0], procedure: 'CTT'}
  };

}
CTT.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>¿Qué tan correcta cree que fue su decisión?</div></br>", require_movement:true, required: true, min: 0, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Totalmente incorrecta", "Totalmente correcta"], button_label: "Siguiente",
  data: {trialid: 'CTT_02', condition_between: between_selection["CTT"][0], procedure: 'CTT'}
};
CTT.push(question02);

CTT.unshift(instruction_screen_experiment);
CTT.push.apply(questions, CTT);
call_function("CTT");
