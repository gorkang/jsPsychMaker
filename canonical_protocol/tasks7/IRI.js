/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('IRI') );
IRI = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left><b><big>IRI</big></b><br />'+
  '<br> Las siguientes declaraciones indagan sobre sus pensamientos y sentimientos en una variedad de situaciones. <br> <br> Para cada ítem, indique cuán bien la declaración lo/a describe, seleccionando el número indicado según la escala presentada a continuación: <br> <br> No me describe bien 0 ――― 1 ――― 2 ――― 3 ――― 4 Me describe muy bien ' +'</p> <p> Lea cada ítem atentamente antes de responder. Intente ser lo más sincero/a posible. </p>'],
  data:{trialid: 'Instructions_01', procedure: 'IRI'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>1.- Con cierta frecuencia sueño despierto y fantaseo sobre cosas que podrían pasarme.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_01', procedure: 'IRI'}
};
IRI.push(question01);

var question02 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>2.- A menudo tengo sentimientos de compasión y preocupación hacia gente menos afortunada que yo.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_02', procedure: 'IRI'}
};
IRI.push(question02);

var question03 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>3.- A veces encuentro difícil ver las cosas desde el punto de vista de otros.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_03', procedure: 'IRI'}
};
IRI.push(question03);

var question04 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>4.- A veces no me dan mucha lástima otras personas cuando tienen problemas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_04', procedure: 'IRI'}
};
IRI.push(question04);

var question05 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>5.- Realmente me siento “metido/a” en los sentimientos de los personajes de una novela.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_05', procedure: 'IRI'}
};
IRI.push(question05);

var question06 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>6.- En situaciones de emergencia, me siento aprensivo e incómodo.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_06', procedure: 'IRI'}
};
IRI.push(question06);

var question07 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>7.- Generalmente soy objetivo cuando veo una película o una obra de teatro y no me suelo “meter” completamente en ella.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_07', procedure: 'IRI'}
};
IRI.push(question07);

var question08 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>8.- En un desacuerdo con otros, trato de ver las cosas desde el punto de vista de los demás antes de tomar una decisión.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_08', procedure: 'IRI'}
};
IRI.push(question08);

var question09 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>9.- Cuando veo que se aprovechan de alguien, siento necesidad de protegerle.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_09', procedure: 'IRI'}
};
IRI.push(question09);

var question10 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>10.- A veces me siento indefenso/a cuando estoy en medio de una situación muy emotiva.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_10', procedure: 'IRI'}
};
IRI.push(question10);

var question11 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>11.- A veces intento comprender mejor a mis amigos imaginando cómo ven las cosas desde su perspectiva.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_11', procedure: 'IRI'}
};
IRI.push(question11);

var question12 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>12.- Es raro que yo me “meta” mucho en un buen libro o en una película.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_12', procedure: 'IRI'}
};
IRI.push(question12);

var question13 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>13.- Cuando veo que alguien se hace daño, tiendo a permanecer tranquilo.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_13', procedure: 'IRI'}
};
IRI.push(question13);

var question14 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>14.- Las desgracias de otros no suelen angustiarme mucho.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_14', procedure: 'IRI'}
};
IRI.push(question14);

var question15 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>15.- Si estoy seguro/a que tengo la razón en algo, no pierdo mucho tiempo escuchando los argumentos de otras personas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_15', procedure: 'IRI'}
};
IRI.push(question15);

var question16 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>16.- Después de ver una obra de teatro o una película, me siento como si fuese uno de los protagonistas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_16', procedure: 'IRI'}
};
IRI.push(question16);

var question17 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>17.- Me asusta estar en una situación emocional tensa.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_17', procedure: 'IRI'}
};
IRI.push(question17);

var question18 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>18.- Cuando veo que alguien está siendo tratado injustamente, no suelo sentir mucha pena por él.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_18', procedure: 'IRI'}
};
IRI.push(question18);

var question19 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>19.- Generalmente soy bastante efectivo afrontando emergencias.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_19', procedure: 'IRI'}
};
IRI.push(question19);

var question20 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>20.- A menudo me conmueven las cosas que veo que pasan.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_20', procedure: 'IRI'}
};
IRI.push(question20);

var question21 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>21.- Creo que todas las cuestiones se pueden ver desde dos perspectivas e intento considerar ambas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_21', procedure: 'IRI'}
};
IRI.push(question21);

var question22 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>22.- Me describiría como una persona bastante sensible.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_22', procedure: 'IRI'}
};
IRI.push(question22);

var question23 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>23.- Cuando veo una buena película, puedo ponerme muy fácilmente en el lugar del protagonista.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_23', procedure: 'IRI'}
};
IRI.push(question23);

var question24 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>24.- Tiendo a perder el control en las emergencias.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_24', procedure: 'IRI'}
};
IRI.push(question24);

var question25 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: '<div class="justified">25.- Cuando estoy molesto con alguien, generalmente trato de "ponerme en su pellejo" durante un tiempo.</div></br>', require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_25', procedure: 'IRI'}
};
IRI.push(question25);

var question26 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>26.- Cuando estoy leyendo una novela o historia interesante, imagino cómo me sentiría si me estuviera pasando lo que ocurre en la historia.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_26', procedure: 'IRI'}
};
IRI.push(question26);

var question27 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>27.- Cuando veo a alguien en una emergencia que necesita ayuda, pierdo el control.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_27', procedure: 'IRI'}
};
IRI.push(question27);

var question28 = {
  type: jsPsychHtmlSliderResponse,
  stimulus: "<div class='justified'>28.- Antes de criticar a alguien, intento imaginar cómo me sentiría yo si estuviera en su lugar.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_28', procedure: 'IRI'}
};
IRI.push(question28);

IRI.unshift(instruction_screen_experiment);
questions.push.apply(questions, IRI)

call_function("IRI");
