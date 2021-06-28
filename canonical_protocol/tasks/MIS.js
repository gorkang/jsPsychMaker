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

MIS = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>MIS</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions', procedure: 'MIS'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>1. Algunas personas pueden hacerme consciente de ellos simplemente pensando en mí.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_01', procedure: 'MIS'}
};
MIS.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>2. He tenido la sensación momentánea de que tal vez no soy humano.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_02', procedure: 'MIS'}
};
MIS.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>3. A veces he tenido miedo de pisar las grietas en la acera.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_03', procedure: 'MIS'}
};
MIS.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>4. Creo que podría aprender a leer las mentes de otros si yo quisiera.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_04', procedure: 'MIS'}
};
MIS.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>5. Los horóscopos son correctos con demasiada frecuencia para que sea una coincidencia.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_05', procedure: 'MIS'}
};
MIS.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>6. Las cosas a veces parecen estar en diferentes lugares cuando llego a casa, a pesar de que nadie ha estado allí.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_06', procedure: 'MIS'}
};
MIS.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>7. Los números como 13 y 7 no tienen poderes especiales.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_07', procedure: 'MIS'}
};
MIS.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>8. Ocasionalmente tuve la tonta sensación de que alguien en la estación de televisión o la emisora ​​de radio sabía que lo estaba escuchando.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_08', procedure: 'MIS'}
};
MIS.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>9. Me preocupa que las personas en otros planetas puedan influir en lo que sucede en la tierra</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_09', procedure: 'MIS'}
};
MIS.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>10. El gobierno se niega a decirnos la verdad sobre platillos voladores.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_10', procedure: 'MIS'}
};
MIS.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>11. He sentido que había mensajes para mí en cómo se organizaron las cosas en una vitrina.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_11', procedure: 'MIS'}
};
MIS.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>12. Nunca he dudado de que mis sueños son los productos de mi propia mente.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_12', procedure: 'MIS'}
};
MIS.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>13. Los amuletos de buena suerte no funcionan.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_13', procedure: 'MIS'}
};
MIS.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>14. He notado sonidos en mis grabaciones o discos que no están allí en otros momentos.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_14', procedure: 'MIS'}
};
MIS.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>15. Los movimientos de las manos que los extraños hacen parecen influir en mí a veces.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_15', procedure: 'MIS'}
};
MIS.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>16. Casi nunca sueño con cosas antes de que sucedan.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_16', procedure: 'MIS'}
};
MIS.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>17. He tenido la sensación momentánea de que el lugar de una persona ha sido ocupado por alguien parecido a ella.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_17', procedure: 'MIS'}
};
MIS.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>18. No es posible dañar a otros simplemente teniendo malos pensamientos sobre ellos.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_18', procedure: 'MIS'}
};
MIS.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>19. A veces he sentido una presencia maligna a mi alrededor, aunque no podía verla.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_19', procedure: 'MIS'}
};
MIS.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>20. A veces tengo la sensación de ganar o perder energía cuando ciertas personas me miran o me tocan.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_20', procedure: 'MIS'}
};
MIS.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>21. A veces he tenido el pensamiento pasajero de que los extraños están enamorados de mí.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_21', procedure: 'MIS'}
};
MIS.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>22. Nunca tuve la sensación de que ciertos pensamientos míos pertenecían (eran) realmente de otra persona.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_22', procedure: 'MIS'}
};
MIS.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>23. Cuando me presentan a extraños, rara vez me pregunto si los he conocido antes.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_23', procedure: 'MIS'}
};
MIS.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>24. Si la reencarnación fuera cierta, explicaría algunas experiencias inusuales que he tenido.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_24', procedure: 'MIS'}
};
MIS.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>25. Las personas a menudo se comportan de manera tan extraña que uno se pregunta si son parte de un experimento.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_25', procedure: 'MIS'}
};
MIS.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>26. A veces realizo ciertos pequeños rituales para alejar las influencias negativas.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_26', procedure: 'MIS'}
};
MIS.push(question26);

var question27 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>27. He sentido que podría causar que algo suceda, simplemente pensando demasiado en ello.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_27', procedure: 'MIS'}
};
MIS.push(question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>28. Me he preguntado si los espíritus de los muertos pueden influir en los vivos.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_28', procedure: 'MIS'}
};
MIS.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>29. A veces he sentido que la conferencia de un profesor (charla de experto) estaba destinada especialmente para mí.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_29', procedure: 'MIS'}
};
MIS.push(question29);

var question30 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>30. A veces he sentido que extraños leían mi mente.</div>", options: ['&nbsp;Verdadero', '&nbsp;Falso'], required: true, horizontal: false}],
  data: {trialid: 'MIS_30', procedure: 'MIS'}
};
MIS.push(question30);

MIS.unshift(instruction_screen_experiment);
questions.push.apply(questions, MIS)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'MIS'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'MIS'}).json();
      }
      saveData(data, online, 'MIS');
    },
    procedure: 'MIS'
});
