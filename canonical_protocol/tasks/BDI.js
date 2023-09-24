/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('BDI') );
BDI = []; //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>BDI</big></b><br />'+
    '<br> Este cuestionario consta de 21 grupos de enunciados. Por favor, lea cada uno de ellos cuidadosamente. Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy. Seleccione el número correspondiente al enunciado elegido. Si varios enunciados de un mismo grupo le parecen igualmente apropiados, seleccione el número más alto. </p>'],
    data:{trialid: 'Instructions_01', procedure: 'BDI'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question001 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '1. Tristeza', options: ['&nbsp;0. No me siento triste.', '&nbsp;1. Me siento triste gran parte del tiempo.', '&nbsp;3. Estoy triste todo el tiempo.', '&nbsp;4. Estoy tan triste o soy tan infeliz que no puedo soportarlo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_001', procedure: 'BDI'}
};
BDI.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '2. Pesimismo', options: ['&nbsp;0. No estoy desalentado respecto de mi futuro.', '&nbsp;1. Me siento más desalentado respecto de mi futuro que lo que solía estarlo.', '&nbsp;3. No espero que las cosas funcionen para mí.', '&nbsp;4. Siento que no hay esperanza para mi futuro y que sólo puede empeorar.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_002', procedure: 'BDI'}
};
BDI.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '3. Fracaso', options: ['&nbsp;0. No me siento un fracasado.', '&nbsp;1. He fracasado más de lo que hubiera debido.', '&nbsp;3. Cuando miro hacia atrás veo muchos fracasos.', '&nbsp;4. Siento que como persona soy un fracaso total.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_003', procedure: 'BDI'}
};
BDI.push(question003);

var question004 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '4. Pérdida de Placer', options: ['&nbsp;0. Obtengo tanto placer como siempre por las cosas de las que disfruto.', '&nbsp;1. No disfruto tanto de las cosas.', '&nbsp;3. Obtengo muy poco placer de las cosas de las que solía disfrutar.', '&nbsp;4. No puedo obtener ningún placer de las cosas de las que solía disfrutar.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_004', procedure: 'BDI'}
};
BDI.push(question004);

var question005 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '5. Sentimientos de Culpa', options: ['&nbsp;0. No me siento particularmente culpable.', '&nbsp;1. Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.', '&nbsp;3. Me siento bastante culpable la mayor parte del tiempo.', '&nbsp;4. Me siento culpable todo el tiempo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_005', procedure: 'BDI'}
};
BDI.push(question005);

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '6. Sentimientos de Castigo', options: ['&nbsp;0. No siento que estoy siendo castigado.', '&nbsp;1. Siento que tal vez pueda ser castigado.', '&nbsp;3. Espero ser castigado.', '&nbsp;4. Siento que estoy siendo castigado.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_006', procedure: 'BDI'}
};
BDI.push(question006);

var question007 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '7. Disconformidad con Uno Mismo', options: ['&nbsp;0. Siento acerca de mí lo mismo que siempre.', '&nbsp;1. He perdido la confianza en mí mismo.', '&nbsp;3. Estoy decepcionado conmigo mismo.', '&nbsp;4. No me gusto a mí mismo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_007', procedure: 'BDI'}
};
BDI.push(question007);

var question008 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '8. Autocrítica', options: ['&nbsp;0. No me critico ni me culpo más de lo habitual.', '&nbsp;1. Estoy más crítico conmigo mismo que lo que solía estarlo.', '&nbsp;3. Me critico a mí mismo por todos mis errores.', '&nbsp;4. Me culpo a mí mismo por todo lo malo que sucede.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_008', procedure: 'BDI'}
};
BDI.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '9. Pensamiento o Deseos Suicidas', options: ['&nbsp;0. No tengo ningún pensamiento de matarme.', '&nbsp;1. He tenido pensamientos de matarme, pero no lo haría.', '&nbsp;3. Querría matarme.', '&nbsp;4. Me mataría si tuviera la oportunidad de hacerlo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_009', procedure: 'BDI'}
};
BDI.push(question009);

var question010 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '10. Llanto', options: ['&nbsp;0. No lloro más de lo que solía hacerlo.', '&nbsp;1. Lloro más de lo que solía hacerlo.', '&nbsp;3. Lloro por cualquier pequeñez.', '&nbsp;4. Siento ganas de llorar pero no puedo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_010', procedure: 'BDI'}
};
BDI.push(question010);


var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '11. Agitación', options: ['&nbsp;0. No estoy más inquieto o tenso que lo habitual.', '&nbsp;1. Me siento más inquieto o tenso que lo habitual.', '&nbsp;3. Estoy tan inquieto o agitado que me es difícil quedarme quieto.', '&nbsp;4. Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_011', procedure: 'BDI'}
};
BDI.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '12. Pérdida de Interés', options: ['&nbsp;0. No he perdido el interés en otras actividades o personas.', '&nbsp;1. Estoy menos interesado que antes en otras personas o cosas.', '&nbsp;3. He perdido casi todo el interés en otras personas o cosas.', '&nbsp;4. Me es difícil interesarme por algo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_012', procedure: 'BDI'}
};
BDI.push(question012);

var question013 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '13. Indecisión', options: ['&nbsp;0. Tomo mis decisiones tan bien como siempre.', '&nbsp;1. Me resulta más difícil que de costumbre tomar decisiones.', '&nbsp;3. Encuentro mucha más dificultad que antes para tomar decisiones.', '&nbsp;4. Tengo problemas para tomar cualquier decisión.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_013', procedure: 'BDI'}
};
BDI.push(question013);

var question014 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '14. Desvalorización', options: ['&nbsp;0. No siento que yo no sea valioso.', '&nbsp;1. No me considero a mí mismo tan valioso y útil como solía considerarme.', '&nbsp;3. Me siento menos valioso cuando me comparo con otros.', '&nbsp;4. Siento que no valgo nada.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_014', procedure: 'BDI'}
};
BDI.push(question014);

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '15. Pérdida de Energía', options: ['&nbsp;0. Tengo tanta energía como siempre.', '&nbsp;1. Tengo menos energía que la que solía tener.', '&nbsp;3. No tengo suficiente energía para hacer demasiado.', '&nbsp;4. No tengo energía suficiente para hacer nada.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_015', procedure: 'BDI'}
};
BDI.push(question015);


var question016 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '16. Cambios en los Hábitos de Sueño', options: ['&nbsp;0. No he experimentado ningún cambio en mis hábitos de sueño.', '&nbsp;1. Duermo un poco más que lo habitual.', '&nbsp;3. Duermo un poco menos que lo habitual.', '&nbsp;4. Duermo mucho más que lo habitual.', '&nbsp;5. Duermo mucho menos que lo habitual.', '&nbsp;6. Duermo la mayor parte del día.', '&nbsp;7. Me despierto 1-2 horas más temprano y no puedo volver a dormirme.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_016', procedure: 'BDI'}
};
BDI.push(question016);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '17. Irritabilidad', options: ['&nbsp;0. No estoy más irritable que lo habitual.', '&nbsp;1. Estoy más irritable que lo habitual.', '&nbsp;3. Estoy mucho más irritable que lo habitual.', '&nbsp;4. Estoy irritable todo el tiempo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_017', procedure: 'BDI'}
};
BDI.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '18. Cambios en el Apetito', options: ['&nbsp;0. No he experimentado ningún cambio en mi apetito.', '&nbsp;1. Mi apetito es un poco menor que lo habitual.', '&nbsp;3. Mi apetito es un poco mayor que lo habitual.', '&nbsp;4. Mi apetito es mucho menor que antes.', '&nbsp;5. Mi apetito es mucho mayor que lo habitual.', '&nbsp;6. No tengo apetito en absoluto.', '&nbsp;7. Quiero comer todo el tiempo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_018', procedure: 'BDI'}
};
BDI.push(question018);

var question019 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '19. Dificultad de concentración', options: ['&nbsp;0. Puedo concentrarme tan bien como siempre.', '&nbsp;1. No puedo concentrarme tan bien como habitualmente.', '&nbsp;3. Me es difícil mantener la mente en algo por mucho tiempo.', '&nbsp;4. Encuentro que no puedo concentrarme en nada.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_019', procedure: 'BDI'}
};
BDI.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '20. Cansancio o Fatiga', options: ['&nbsp;0. No estoy más cansado o fatigado que lo habitual.', '&nbsp;1. Me fatigo o me canso más fácilmente que lo habitual.', '&nbsp;3. Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.', '&nbsp;4. Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_020', procedure: 'BDI'}
};
BDI.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '21. Pérdida de Interés en el Sexo', options: ['&nbsp;0. No he notado ningún cambio reciente en mi interés por el sexo.', '&nbsp;1. Estoy menos interesado por el sexo de lo que solía estarlo.', '&nbsp;3. Ahora estoy mucho menos interesado en el sexo.', '&nbsp;4. He perdido completamente el interés en el sexo.'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'BDI_021', procedure: 'BDI'}
};
BDI.push(question021);

BDI.unshift(instruction_screen_experiment);
questions.push.apply(questions, BDI)

call_function("BDI");
