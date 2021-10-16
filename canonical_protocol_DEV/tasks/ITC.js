/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];;    //final timeline
questions.push( check_fullscreen('ITC') );
ITC = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>ITC</big></b><br />'+
    'Indica la opción que prefieres dentro de las siguientes preguntas. No hay respuestas correctas ni incorrectas por lo que debes responder respecto de lo que realmente te represente mejor. Los datos de este cuestionario son de exclusivo uso de este estudio y no serán públicos.' +'</p>'],
    data: {trialid: 'Instructions_01', procedure: 'ITC'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">1. ¿Qué opción preferirías?</div>', options: ['&nbsp;$3400000 este mes', '&nbsp;$3800000 el próximo mes'], required: true, horizontal: false}],
  data: {trialid: 'ITC_01', procedure: 'ITC'}
};
ITC.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">2. ¿Qué opción preferirías?</div>', options: ['&nbsp;$100000 ahora', '&nbsp;$140000 el próximo mes'], required: true, horizontal: false}],
  data: {trialid: 'ITC_02', procedure: 'ITC'}
};
ITC.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">3. ¿Qué opción preferirías?</div>', options: ['&nbsp;$100000 ahora', '&nbsp;$1100000 en 10 años'], required: true, horizontal: false}],
  data: {trialid: 'ITC_03', procedure: 'ITC'}
};
ITC.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">4. ¿Qué opción preferirías?</div>', options: ['&nbsp;$9000 ahora', '&nbsp;$100000 en 10 años'], required: true, horizontal: false}],
  data: {trialid: 'ITC_04', procedure: 'ITC'}
};
ITC.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">5. ¿Qué opción preferirías?</div>', options: ['&nbsp;$40000 inmediatamente', '&nbsp;$1000000 en 10 años'], required: true, horizontal: false}],
  data: {trialid: 'ITC_05', procedure: 'ITC'}
};
ITC.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">6. ¿Qué opción preferirías?</div>', options: ['&nbsp;$100000 ahora', '&nbsp;$20000 cada año durante 7 años'], required: true, horizontal: false}],
  data: {trialid: 'ITC_06', procedure: 'ITC'}
};
ITC.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">7. ¿Qué opción preferirías?</div>', options: ['&nbsp;$400000', '&nbsp;$100000 cada año durante 10 años'], required: true, horizontal: false}],
  data: {trialid: 'ITC_07', procedure: 'ITC'}
};
ITC.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">8. ¿Qué opción preferirías?</div>', options: ['&nbsp;$1000000 ahora', '&nbsp;$100000 cada año durante 25 años'], required: true, horizontal: false}],
  data: {trialid: 'ITC_08', procedure: 'ITC'}
};
ITC.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">9. ¿Qué opción preferirías?</div>', options: ['&nbsp;Un masaje de 30 mins. en dos semanas', '&nbsp;Un masaje de 45 mins. en algunos meses'], required: true, horizontal: false}],
  data: {trialid: 'ITC_09', procedure: 'ITC'}
};
ITC.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">10. ¿Qué opción preferirías?</div>', options: ['&nbsp;Perder $1000000 este año', '&nbsp;Perder $2000000 el próximo año'], required: true, horizontal: false}],
  data: {trialid: 'ITC_10', procedure: 'ITC'}
};
ITC.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">11. ¿Qué opción preferirías?</div>', options: ['&nbsp;Sacarte un diente hoy', '&nbsp;Sacarte un diente en 2 semanas'], required: true, horizontal: false}],
  data: {trialid: 'ITC_11', procedure: 'ITC'}
};
ITC.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12. ¿Cuán impulsivo eres?</div></br>", require_movement:true, required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Muy bajo el promedio", "En el promedio", "Muy sobre el promedio"], button_label: "Siguiente",
  data: {trialid: 'ITC_12', procedure: 'ITC'}
};
ITC.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13. ¿Cuánto tiempo tiendes a procastinar (perder el tiempo cuando tienes que hacer algo importante?</div></br>", require_movement:true, required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Muy bajo el promedio", "En el promedio", "Muy sobre el promedio"], button_label: "Siguiente",
  data: {trialid: 'ITC_13', procedure: 'ITC'}
};
ITC.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14. ¿Cuánto piensas en tu futuro?</div></br>", require_movement:true, required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Muy bajo el promedio", "En el promedio", "Muy sobre el promedio"], button_label: "Siguiente",
  data: {trialid: 'ITC_14', procedure: 'ITC'}
};
ITC.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">15. Te has encontrado una billetera en cuyo interior hay una suma grande de dinero y la identificación del dueño. ¿Qué crees que harías?</div>', options: ['&nbsp;Devuelves la billetera sin dejar que el dueño sepa quien eres', '&nbsp;Devuelves la billetera esperando recibir una recompensa', '&nbsp;Mantienes la billetera y el dinero', '&nbsp;Dejas la billetera donde la encontraste'], required: true, horizontal: false}],
  data: {trialid: 'ITC_15', procedure: 'ITC'}
};
ITC.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">16. Un(a) niño(a) andando en triciclo pasa por tu casa aparentando estar perdido.  ¿Qué crees que harías?</div>', options: ['&nbsp;Ingnoras al niño(a) para evitar potenciales malos entendidos y problemas', '&nbsp;Te imaginas que el niño(a) conoce el camino a su casa', '&nbsp;Le preguntas al niño(a) donde vive y lo llevas a su casa', '&nbsp;Llevas al niño(a) a tu casa y llamas a la policía'], required: true, horizontal: false}],
  data: {trialid: 'ITC_16', procedure: 'ITC'}
};
ITC.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">17. ¿Qué sería más probable que hicieras un sábado por la tarde?</div>', options: ['&nbsp;Encontrar a alguien que te ayude en un proyecto muy atrasado que tienes', '&nbsp;Ir a ver una película solo', '&nbsp;Trabajar en un horario media jornada', '&nbsp;Ayudar a un amigo a limpiar su sótano'], required: true, horizontal: false}],
  data: {trialid: 'ITC_17', procedure: 'ITC'}
};
ITC.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">18. Un hombre que no habla español se te acerca en la calle apartentemente por necesita ayuda. ¿Qué crees que harías?</div>', options: ['&nbsp;Sigues caminando porque no quieres llegar tarde a tu destino', '&nbsp;Haces como si no lo hubieras escuchado', '&nbsp;Decides qué hacer en base a su apariencia', '&nbsp;Lo ayudas de cualquier manera que puedas'], required: true, horizontal: false}],
  data: {trialid: 'ITC_18', procedure: 'ITC'}
};
ITC.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">19. La noche anterior a un importante examen un compañero te muestra una copia robada de la prueba.  ¿Qué crees que harías?</div>', options: ['&nbsp;Informas al profesor que la copia fue robada', '&nbsp;Te niegas a ver el examen robado y no le dices nada al profesor', '&nbsp;Estudias el examen robado y obtienes una buena nota', '&nbsp;Dejas una nota anónima informando al profesor que el examen fue robado'], required: true, horizontal: false}],
  data: {trialid: 'ITC_19', procedure: 'ITC'}
};
ITC.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">20. En una situación en la que podrías cooperar, pero preferirías no hacerlo:</div>', options: ['&nbsp;Coopero de todas formas si es útil para los demás', '&nbsp;Coopero de todas formas si es útil para mi', '&nbsp;Simplemente no lo hago', '&nbsp;Evito situaciones donde podría ser requerida mi cooperación'], required: true, horizontal: false}],
  data: {trialid: 'ITC_20', procedure: 'ITC'}
};
ITC.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">21. Un amigo(a) te pide prestado(a) una prenda de ropa.  ¿Qué crees que harías?</div>', options: ['&nbsp;Le dices que no te gusta prestar ropa', '&nbsp;Le dices que no', '&nbsp;Se la prestas si es que tú podrías pedirle a cambio algo en otra oportunidad', '&nbsp;Se la prestas si sabes que realmente la necesita'], required: true, horizontal: false}],
  data: {trialid: 'ITC_21', procedure: 'ITC'}
};
ITC.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">22. Un(a) compañero(a) de tu clase está teniendo un problema en su casa y en su rendimiento universitario . ¿Qué crees que harías?</div>', options: ['&nbsp;Ayudas a esta persona lo más que puedas', '&nbsp;Le dices a la persona que no te moleste', '&nbsp;Dejas a la persona sola resolviendo sus propios problemas', '&nbsp;Acuerdas con la persona una tarifa razonable para ayudarlo'], required: true, horizontal: false}],
  data: {trialid: 'ITC_22', procedure: 'ITC'}
};
ITC.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">23. Estás en el segundo piso de un edificio y notas a un hombre con problemas de equililbrio y apartentando estar en problemas. ¿Qué crees que harías?</div>', options: ['&nbsp;Lo ignoras', '&nbsp;Llamas a la policia temiendo algún posible peligro', '&nbsp;Vas en ayuda sólo si lo reconoces como alguien conocido', '&nbsp;Vas en su ayuda sin importar si lo conoces'], required: true, horizontal: false}],
  data: {trialid: 'ITC_23', procedure: 'ITC'}
};
ITC.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">24. Estando solo(a) en tu casa, escuchas afuera a una mujer pidiendo ayuda. ¿Qué crees que harías?</div>', options: ['&nbsp;Vas a ayudarla', '&nbsp;Llamas a la policia y vas con ellos a ver que pasa', '&nbsp;Por temor prefieres no hacer nada', '&nbsp;Estás seguro de que alquien más ha escuchado por lo que esperas'], required: true, horizontal: false}],
  data: {trialid: 'ITC_24', procedure: 'ITC'}
};
ITC.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">25. Yendo hacia la universidad ve a una persona de tu mismo sexo y similar edad con problemas en su auto. ¿Qué crees que harías?</div>', options: ['&nbsp;Te detienes si la persona está en una de tus clases', '&nbsp;Te detienes a ayudar aunque la persona sea un extraño', '&nbsp;Continúas tu viaje', '&nbsp;No ayudas porque piensas que puede ser peligroso'], required: true, horizontal: false}],
  data: {trialid: 'ITC_25', procedure: 'ITC'}
};
ITC.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">26. Cuando eres requerido(a) como voluntario(a) para una tarea en la que no recibirás pago. ¿Qué crees que harías?</div>', options: ['&nbsp;Lo evitas o pospones la respuesta', '&nbsp;Explicas que no estás de acuerdo con los objetivos que se buscan por lo que no podrás participar', '&nbsp;Te comprometes y ayudas si recibirás algún reconocimiento', '&nbsp;Aceptas la tarea sin condiciones'], required: true, horizontal: false}],
  data: {trialid: 'ITC_26', procedure: 'ITC'}
};
ITC.push(question26);

var question27 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">27. Una anciana parada en una esquina aparenta estar perdida. ¿Qué crees que harías?</div>', options: ['&nbsp;Vas y ayudas', '&nbsp;La ayudas solo si está bien vestida', '&nbsp;Asumes que alguien más la ayudará', '&nbsp;La dejas sola, temiendo que ella pueda pensar que eres un ladrón(a) si vas a ayudar'], required: true, horizontal: false}],
  data: {trialid: 'ITC_27', procedure: 'ITC'}
};
ITC.push(question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">28. Un grupo de compañeros tuyos organizó un evento de llamado "como todo lo que puedas" a beneficiencia de una institución de caridad. ¿Qué crees que harías?</div>', options: ['&nbsp;Compras la entrada sin intención de ir', '&nbsp;Compras la entrada y vas', '&nbsp;Compras la entrada y comes todo lo que puedas (como sugiere el nombre del evento)', '&nbsp;No compras la entrada'], required: true, horizontal: false}],
  data: {trialid: 'ITC_28', procedure: 'ITC'}
};
ITC.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">29. Una persona "hace dedo" tarde en la noche. Está lloviendo y hay pocos autos en el camino. ¿Qué crees que harías?</div>', options: ['&nbsp;Le ofreces llevarlo si la persona se ve como alguien con el que tú querrías conversar', '&nbsp;Continúas manejando por seguridad', '&nbsp;Continúas manejando y evitas mirar a la persona', '&nbsp;Paras y ofreces llevarlo'], required: true, horizontal: false}],
  data: {trialid: 'ITC_29', procedure: 'ITC'}
};
ITC.push(question29);

var question30 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">30. Estás en una sala de espera con otra persona. Si escuchas un grito en la sala de al lado y la otra persona no hace nada. ¿Qué crees que harías?</div>', options: ['&nbsp;Ayudar a quien está gritando sin importar si la otra persona ayuda o no', '&nbsp;Ayudar a quien está gritando sólo si la otra persona también lo hace', '&nbsp;Esperas a ver si los gritos continuan', '&nbsp;Abandonas la sala de espera'], required: true, horizontal: false}],
  data: {trialid: 'ITC_30', procedure: 'ITC'}
};
ITC.push(question30);

var question31 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">31. ¿A cual grupo sería más probable que te unas?</div>', options: ['&nbsp;A un club dedicado a actividades de ocio', '&nbsp;A un club que ayude a otras personas y ofrezca actividades de interés para ti', '&nbsp;A un club dedicado principalmente ayudar a los demás', '&nbsp;A ninguno'], required: true, horizontal: false}],
  data: {trialid: 'ITC_31', procedure: 'ITC'}
};
ITC.push(question31);

var question32 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">32. En una calle desierta una persona pobremente vestida te pide una moneda. ¿Qué crees que harías?</div>', options: ['&nbsp;Lo ignoras', '&nbsp;Le preguntas para qué quiere el dinero', '&nbsp;Le das la moneda sin hacer preguntas', '&nbsp;No le das dinero'], required: true, horizontal: false}],
  data: {trialid: 'ITC_32', procedure: 'ITC'}
};
ITC.push(question32);

var question33 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">33. ¿Cuál de las siguientes alternativas te prepresenta mejor?</div>', options: ['&nbsp;Ayudar a tus amigos(as)', '&nbsp;Solucionar tus propios problemas sin ayuda del resto', '&nbsp;Me gusta ayudar a quienes están dispuestos a ayudarme', '&nbsp;Me gusta cuando las personas me ayudan'], required: true, horizontal: false}],
  data: {trialid: 'ITC_33', procedure: 'ITC'}
};
ITC.push(question33);

var question34 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">34. Si eres requerido(a) como voluntario (a) para una causa social por la que recibirás pago. ¿Qué crees que harías?</div>', options: ['&nbsp;Serías voluntario(a) pero no aceptas el pago', '&nbsp;Serías voluntario(a) y aceptarías el pago', '&nbsp;No serías voluntario(a)', '&nbsp;Serías voluntario(a) si estás seguro(a) de que te pagarán y que el trabajo no es demasiado exigente'], required: true, horizontal: false}],
  data: {trialid: 'ITC_34', procedure: 'ITC'}
};
ITC.push(question34);

var question35 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">35. Un amigo de otra universidad visita a tu compañero de pieza el fin de semana. El quiere usar tu ticket de almuerzo para comer en la cafetería gratis. ¿Qué crees que harías?</div>', options: ['&nbsp;Le prestas tu ticket si tu compañero promete que hará lo mismo por ti alguna vez', '&nbsp;Finges que no tienes tu ticket de almuerzo', '&nbsp;Le prestas tu ticket de almuerzo si él te paga algo', '&nbsp;Prestas tu ticket de almuerzo y te quedas sin almorzar'], required: true, horizontal: false}],
  data: {trialid: 'ITC_35', procedure: 'ITC'}
};
ITC.push(question35);

ITC.unshift(instruction_screen_experiment);
questions.push.apply(questions, ITC)


questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'ITC'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'ITC'}).json();
      }
      saveData(data, online, 'ITC');
    }
});
