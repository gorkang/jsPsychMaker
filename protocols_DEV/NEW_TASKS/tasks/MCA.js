/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Moral Circle Assessment

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('MCA') );
MCA = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Evaluación de Círculo Moral</big></b><BR><BR>En la siguiente página, por favor indique el alcance de su círculo moral. Por círculo moral nos referimos al círculo de personas u otros agentes por los cuales se preocupa y está atento al bien y al mal que se les pueda estar haciendo. Por favor escala que se le mencionará para seleccionar la extensión de su círculo moral.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'MCA'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>Por favor, seleccione el número que representa la extensión de su círculo moral. Tenga en cuenta que, en esta escala, el número que seleccione incluye a todos los números anteriores a este también. Si, por ejemplo, usted selecciona 10 (todos los mamíferos), también está incluyendo los números del 1 al 9.</p></div>', options: ['&nbsp;0. Solo usted.', '&nbsp;1. Toda su familia inmediata.', '&nbsp;2. Toda su familia extendida.', '&nbsp;3. Todos sus amigos cercanos.', '&nbsp;4. Todos sus amigos (incluyendo amigos distantes o poco cercanos).', '&nbsp;5. Todos sus conocidos.', '&nbsp;6. Todas las personas que ha conocido en la vida.', '&nbsp;7. Todas las personas en su país.', '&nbsp;8. Todas las personas en su continente (América).', '&nbsp;9. Todas las personas en todos los continentes.', '&nbsp;10. Todos los mamíferos.', '&nbsp;11. Todos los anfibios, reptiles y aves.', '&nbsp;12. Todos los animales en la tierra, incluyendo los paramecios y las amebas.', '&nbsp;13. Todos los animales en el universo incluyendo vida fuera del planeta.', '&nbsp;14. Todos los seres vivos en el universo, incluyendo plantas y árboles.', '&nbsp;15. Todas las cosas naturales en el universo, incluyendo entidades inertes como las rocas.', '&nbsp;16. Todas las cosas en la existencia.'], required: true, horizontal: false}],
  data: {trialid: 'MCA_01', procedure: 'MCA'}
};
MCA.push(question01);

MCA.unshift(instruction_screen_experiment);
MCA.push.apply(questions, MCA);
call_function("MCA");
