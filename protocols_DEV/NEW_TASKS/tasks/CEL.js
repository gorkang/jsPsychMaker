/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// CUESTIONARIO ESTILOS DE LIDERAZGOS

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CEL') );
CEL = [];    //temporal timeline

jobs = ["Directivo", "Profesor"];
if (debug_mode == true && typeof job === 'undefined') job = jobs[Math.floor(Math.random()*jobs.length)];

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>ESTILOS DE LIDERAZGOS</big></b><BR>Piense en un grupo u organización de la cual es miembro. Visualízate a cargo de un grupo de discusión. A medida que dirige el grupo, los siguientes problemas surgen. Lea el primer problema y posibles soluciones. Elija la mejor de las posibles soluciones y seleccione la letra que coincide con la solución. Tenga en mente que usted está a cargo de la discusión grupal de un grupo en particular.<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'CEL'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Su grupo está teniendo problemas para comenzar. Ha intentado que todos se sientan cómodos. Ha permitido que haya tiempo para acomodarse. Al parecer todos están interesados y cooperativos, pero nadie quiere ser el primero en hablar.</div>', options: ['&nbsp;Espera hasta que estén listos para hablar.', '&nbsp;Sugiere que el grupo vote qué hacer ahora.', '&nbsp;Asigna tareas específicas a diferentes personas y los ayuda a completar con sus tareas.'], required: true, horizontal: false}],
  data: {trialid: 'CEL_01', procedure: 'CEL'}
};

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El grupo está operando excelentemente. Todos se llevan bien entre sí. La discusión es vívida. Cada uno está contribuyendo al grupo. Usted se quiere asegurar que esto continúe.</div>', options: ['&nbsp;Reduce su liderazgo. Deja que las personas en el grupo lideren lo más posible.', '&nbsp;Se asegura que se llegue a un acuerdo en cada punto, antes de proceder.', '&nbsp;Mantiene al grupo bajo firme control, sino el grupo perderá su momentum.'], required: true, horizontal: false}],
  data: {trialid: 'CEL_02', procedure: 'CEL'}
};

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El grupo ha sido muy productivo. Dos o tres personas han hecho la mayoría de la conversación y del trabajo. Todos parecen felices, pero le gustaría hacer algunos cambios de manera tal que más personas se involucraran</div>', options: ['&nbsp;Lo expresaría tal cual. Delinearía los cambios y observaría que éstos se lleven a cabo.', '&nbsp;Propondría los cambios. Explicaría, por qué son necesarios y luego permitiría que el grupo decida qué hacer.', '&nbsp;No haría nada al respecto, esto podría amenazar la productividad del grupo.'], required: true, horizontal: false}],
  data: {trialid: 'CEL_03', procedure: 'CEL'}
};

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El grupo continúa trabajando bien y las relaciones entre los miembros del equipo son muy positivas. Se siente un poco inseguro sobre su falta de dirección del grupo.</div>', options: ['&nbsp;Deja al grupo solo.', '&nbsp;Lentamente se inserta para ir dándole al grupo una mayor dirección.', '&nbsp;Le pregunta al grupo si usted debiera proveer... y luego cumple con sus deseos.'], required: true, horizontal: false}],
  data: {trialid: 'CEL_04', procedure: 'CEL'}
};

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">El grupo estaba haciéndolo excelente, pero ahora se está desintegrando. Las personas del grupo están comenzando a dispersarse. Es difícil mantenerse en el tema. Uno de ellos ha sugerido que quizás el grupo debiera tomarse un receso por 2 o 3 meses.</div>', options: ['&nbsp;Deja que todos en el grupo manifiesten su opinión. Sin intervenir.', '&nbsp;Lleva a votación la sugerencia sobre el receso.', '&nbsp;Propone un nuevo curso de acción para el grupo. Si nadie se opone firmemente, designa tareas y luego observa que estas se lleven a cabo.'], required: true, horizontal: false}],
  data: {trialid: 'CEL_05', procedure: 'CEL'}
};

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Su grupo ha completado una excelente discusión de un tema escogido por ellos, pero nadie quiere tomar acción, a pesar de que muchas de las actividades podrían ser apropiadas y estas ya han sido discutidas.</div>', options: ['&nbsp;Sugiere que el grupo avance hacia otro tema. Y si nadie se opone, hace un listado de los posibles temas.', '&nbsp;Elige una actividad para el grupo y asigna tareas.', '&nbsp;Se mantiene en silencio hasta que el grupo tome una decisión.'], required: true, horizontal: false}],
  data: {trialid: 'CEL_06', procedure: 'CEL'}
};

var if_questions = {
    timeline: [instruction_screen_experiment, question01, question02, question03, question04, question05, question06],
    data: {trialid: 'CEL_01_if', procedure: 'CEL'},
    conditional_function: function(){
      // get the data from the previous trial,
      // and check which key was pressed
      if(job == "Directivo"){
        return true;
      } else {
        return false;
      }
    }
}
CEL.push(if_questions);

//CEL.unshift(instruction_screen_experiment);
CEL.push.apply(questions, CEL);
call_function("CEL");
