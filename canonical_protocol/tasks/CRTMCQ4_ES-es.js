/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CRTMCQ4') );

CRTMCQ4 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>CRTMCQ4</big></b><br />'+
    'A continuación verás algunas preguntas que varían en dificultad. Por favor, debes marcar la alternativa que te parezca correcta.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'CRTMCQ4'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Un bate y una pelota cuestan  €1 y 10 céntimos en total. El bate cuesta €1 más que la pelota ¿Cuánto cuesta la pelota? </div>', options: ['&nbsp;5 céntimos', '&nbsp;10 céntimos', '&nbsp;9 céntimos', '&nbsp;1 céntimo'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_01', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Si 5 máquinas tardan 5 minutos en hacer 5 audífonos ¿Cuánto tiempo tardarían 100 máquinas en hacer 100 audífonos?</div>', options: ['&nbsp;5 minutos', '&nbsp;100 minutos', '&nbsp;20 minutos', '&nbsp;500 minutos'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_02', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Parte de la superficie de un lago está cubierta con hojas de lirio. Esta parte, se dobla en tamaño cada día. Si las hojas de lirio demoran 48 días en cubrir el lago completo ¿Cuántos días tardarían en cubrir la mitad del lago?</div>', options: ['&nbsp;47 días', '&nbsp;24 días', '&nbsp;12 días', '&nbsp;36 días'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_03', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Si José puede beber un barril de agua en 6 días y María puede beber un barril de agua en 12 días ¿Cuánto tardarán ambos en beber un barril de agua juntos?</div>', options: ['&nbsp;4 días', '&nbsp;9 días', '&nbsp;12 días', '&nbsp;3 días'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_04', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Pedro recibió la quinceava nota más alta y la quinceava nota más baja en su clase ¿Cuántos estudiantes hay en su clase?</div>', options: ['&nbsp;29 estudiantes', '&nbsp;30 estudiantes', '&nbsp;1 estudiante', '&nbsp;15 estudiantes'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_05', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Un hombre compra un cerdo a €60, lo vende a €70, lo compra de nuevo por €80, y lo vuelve a vender finalmente por €90 ¿Cuánto dinero ha ganado?</div>', options: ['&nbsp;€20', '&nbsp;€10', '&nbsp;€0', '&nbsp;€30'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_06', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Simón decide invertir €8000 en el mercado de acciones un día a inicios de 2008. Seis meses después de haber invertido, el 17 de julio, las acciones que había comprado bajaron 50%. Afortunadamente para Simón, desde el 17 de julio hasta el 17 de octubre, las acciones que compró subieron 75%. En este punto, Simón:</div>', options: ['&nbsp;ha ganado dinero.', '&nbsp;ha perdido dinero.', '&nbsp;no ha ganado ni perdido dinero.', '&nbsp;no se puede determinar.'], random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_07', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question07);

CRTMCQ4.unshift(instruction_screen_experiment);
questions.push.apply(questions, CRTMCQ4);
call_function("CRTMCQ4");
