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

IEC = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>IEC</big></b><br />'+
    'A continuación, usted encontrará una serie de preguntas relacionadas con distintas experiencias de su vida, debe seleccionar una de las alternativas que aparezca en la lista.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'IEC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. El que yo llegue a ser un líder depende principalmente de mis habilidades.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_01', procedure: 'IEC'}
};
IEC.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. Mi vida ha sido influenciada en gran medida por eventos inesperados.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_02', procedure: 'IEC'}
};
IEC.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. Yo siento que lo que pasa en mi vida está muy determinado por la gente que tiene poder (padres, jefes, políticos)</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_03', procedure: 'IEC'}
};
IEC.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. El hecho de tener un accidente cuando voy manejando, depende principalmente de mi mismo.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_04', procedure: 'IEC'}
};
IEC.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. Cuando hago planes, estoy casi seguro de que lo llevaré a cabo.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_05', procedure: 'IEC'}
};
IEC.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. Ciertamente, a veces no puedo evitar tener mala suerte con mis asuntos personales.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_06', procedure: 'IEC'}
};
IEC.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. Como yo tengo buena suerte, siempre las cosas me salen bien.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_07', procedure: 'IEC'}
};
IEC.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. A pesar de estar bien capacitado, no conseguiré un buen empleo a menos que alguien influyente me ayude.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_08', procedure: 'IEC'}
};
IEC.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. La cantidad de amigos que tengo está determinada por mi propia simpatía.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_09', procedure: 'IEC'}
};
IEC.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. He descubierto que si algo va a suceder, ello sucederá independientemente de lo que yo haga.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_10', procedure: 'IEC'}
};
IEC.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. Yo creo que los ricos y políticos controlan mi vida de muchas maneras diferentes.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_11', procedure: 'IEC'}
};
IEC.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">12. Si tengo un accidente automovilístico ello se debe a mi mala suerte.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_12', procedure: 'IEC'}
};
IEC.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">13. La gente como yo tiene muy poca oportunidad de defender sus intereses personales cuando esos intereses entran en conflicto con los grupos poderosos (ricos, políticos).</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_13', procedure: 'IEC'}
};
IEC.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">14. No siempre es apropiado para mí planear muy por adelantado porque de todas maneras muchas cosas resultan ser asunto de buena o mala suerte.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_14', procedure: 'IEC'}
};
IEC.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. En este país, para uno lograr lo que quiere necesariamente tiene que halagar a alguien.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_15', procedure: 'IEC'}
};
IEC.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. El que yo llegue a ser un líder dependerá de la suerte que yo tenga.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_16', procedure: 'IEC'}
};
IEC.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. Yo siento que la gente que tiene algún poder sobre mí (padres, familiares, jefes), trata de decidir lo que sucederá en mi vida.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_17', procedure: 'IEC'}
};
IEC.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. En la mayoría de los casos yo puedo decidir lo que sucederá en mi vida.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_18', procedure: 'IEC'}
};
IEC.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. Normalmente soy capaz de defender mis intereses personales.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_19', procedure: 'IEC'}
};
IEC.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. Si tengo un accidente cuando voy manejando, toda la culpa es del otro conductor.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_20', procedure: 'IEC'}
};
IEC.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">21. Cuando logro lo que quiero es porque he trabajado mucho en ello.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_21', procedure: 'IEC'}
};
IEC.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">22. Cuando quiero que mis planes me salgan bien, los preparo de manera que le den en el gusto a la gente que tiene influencia sobre mi (padres, jefes, etc.).</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_22', procedure: 'IEC'}
};
IEC.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">23. Mi vida está determinada por mis propias acciones.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_23', procedure: 'IEC'}
};
IEC.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">24. Tener pocos o muchos amigos depende del destino de cada uno.</div>', options: ['&nbsp;Completamente en desacuerdo.', '&nbsp;Moderadamente en desacuerdo.', '&nbsp;Ligeramente en desacuerdo.', '&nbsp;Ligeramente de acuerdo.', '&nbsp;Moderadamente de acuerdo.', '&nbsp;Completamente de acuerdo.'], required: true, horizontal: false}],
  data: {trialid: 'IEC_24', procedure: 'IEC'}
};
IEC.push(question24);

IEC.unshift(instruction_screen_experiment);
questions.push.apply(questions, IEC)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'IEC'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'IEC'}).json();
      }
      saveData(data, online, 'IEC');
    },
    procedure: 'IEC'
});
