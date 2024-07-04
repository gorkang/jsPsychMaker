/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Interpersonal reactivity index: IRI

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('IRI') );
IRI = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>IRI</big></b><br />'+
  '<br> Las siguientes declaraciones indagan sobre sus pensamientos y sentimientos en una variedad de situaciones. <br> <br> Para cada ítem, indique cuán bien la declaración lo/a describe, seleccionando el número indicado según la escala presentada a continuación: <br> <br> No me describe bien 0 ――― 1 ――― 2 ――― 3 ――― 4 Me describe muy bien ' +'</p> <p> Lea cada ítem atentamente antes de responder. Intente ser lo más sincero/a posible. </p>'],
  data:{trialid: 'Instructions_01', procedure: 'IRI'},
  show_clickable_nav: true
};

var question001 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1.- Con cierta frecuencia sueño despierto y fantaseo sobre cosas que podrían pasarme.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_001', procedure: 'IRI'}
};
IRI.push(question001);

var question002 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2.- A menudo tengo sentimientos de compasión y preocupación hacia gente menos afortunada que yo.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_002', procedure: 'IRI'}
};
IRI.push(question002);

var question003 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3.- A veces encuentro difícil ver las cosas desde el punto de vista de otros.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_003', procedure: 'IRI'}
};
IRI.push(question003);

var question004 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4.- A veces no me dan mucha lástima otras personas cuando tienen problemas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_004', procedure: 'IRI'}
};
IRI.push(question004);

var question005 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5.- Realmente me siento “metido/a” en los sentimientos de los personajes de una novela.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_005', procedure: 'IRI'}
};
IRI.push(question005);

var question006 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6.- En situaciones de emergencia, me siento aprensivo e incómodo.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_006', procedure: 'IRI'}
};
IRI.push(question006);

var question007 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7.- Generalmente soy objetivo cuando veo una película o una obra de teatro y no me suelo “meter” completamente en ella.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_007', procedure: 'IRI'}
};
IRI.push(question007);

var question008 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8.- En un desacuerdo con otros, trato de ver las cosas desde el punto de vista de los demás antes de tomar una decisión.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_008', procedure: 'IRI'}
};
IRI.push(question008);

var question009 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9.- Cuando veo que se aprovechan de alguien, siento necesidad de protegerle.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_009', procedure: 'IRI'}
};
IRI.push(question009);

var question010 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10.- A veces me siento indefenso/a cuando estoy en medio de una situación muy emotiva.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_010', procedure: 'IRI'}
};
IRI.push(question010);

var question011 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11.- A veces intento comprender mejor a mis amigos imaginando cómo ven las cosas desde su perspectiva.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_011', procedure: 'IRI'}
};
IRI.push(question011);

var question012 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12.- Es raro que yo me “meta” mucho en un buen libro o en una película.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_012', procedure: 'IRI'}
};
IRI.push(question012);

var question013 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13.- Cuando veo que alguien se hace daño, tiendo a permanecer tranquilo.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_013', procedure: 'IRI'}
};
IRI.push(question013);

var question014 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14.- Las desgracias de otros no suelen angustiarme mucho.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_014', procedure: 'IRI'}
};
IRI.push(question014);

var question015 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15.- Si estoy seguro/a que tengo la razón en algo, no pierdo mucho tiempo escuchando los argumentos de otras personas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_015', procedure: 'IRI'}
};
IRI.push(question015);

var question016 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16.- Después de ver una obra de teatro o una película, me siento como si fuese uno de los protagonistas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_016', procedure: 'IRI'}
};
IRI.push(question016);

var question017 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>17.- Me asusta estar en una situación emocional tensa.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_017', procedure: 'IRI'}
};
IRI.push(question017);

var question018 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>18.- Cuando veo que alguien está siendo tratado injustamente, no suelo sentir mucha pena por él.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_018', procedure: 'IRI'}
};
IRI.push(question018);

var question019 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>19.- Generalmente soy bastante efectivo afrontando emergencias.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_019', procedure: 'IRI'}
};
IRI.push(question019);

var question020 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>20.- A menudo me conmueven las cosas que veo que pasan.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_020', procedure: 'IRI'}
};
IRI.push(question020);

var question021 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>21.- Creo que todas las cuestiones se pueden ver desde dos perspectivas e intento considerar ambas.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_021', procedure: 'IRI'}
};
IRI.push(question021);

var question022 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>22.- Me describiría como una persona bastante sensible.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_022', procedure: 'IRI'}
};
IRI.push(question022);

var question023 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>23.- Cuando veo una buena película, puedo ponerme muy fácilmente en el lugar del protagonista.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_023', procedure: 'IRI'}
};
IRI.push(question023);

var question024 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>24.- Tiendo a perder el control en las emergencias.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_024', procedure: 'IRI'}
};
IRI.push(question024);

var question025 = {
  type: 'html-slider-response',
  stimulus: '<div class="justified">25.- Cuando estoy molesto con alguien, generalmente trato de "ponerme en su pellejo" durante un tiempo.</div></br>', require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_025', procedure: 'IRI'}
};
IRI.push(question025);

var question026 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>26.- Cuando estoy leyendo una novela o historia interesante, imagino cómo me sentiría si me estuviera pasando lo que ocurre en la historia.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_026', procedure: 'IRI'}
};
IRI.push(question026);

var question027 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>27.- Cuando veo a alguien en una emergencia que necesita ayuda, pierdo el control.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_027', procedure: 'IRI'}
};
IRI.push(question027);

var question028 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>28.- Antes de criticar a alguien, intento imaginar cómo me sentiría yo si estuviera en su lugar.</div></br>", require_movement:true, required: true, min: 0, max: 4, slider_width: 500, slider_start: 2, step: 1, labels: ["No me describe bien", "Me describe muy bien"], button_label: "Siguiente",
  data: {trialid: 'IRI_028', procedure: 'IRI'}
};
IRI.push(question028);

IRI.unshift(instruction_screen_experiment);
questions.push.apply(questions, IRI)

call_function("IRI");