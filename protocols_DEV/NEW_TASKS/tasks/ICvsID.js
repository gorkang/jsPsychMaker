/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Impartial Charity vs. Instrumental Damage

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('ICvsID') );
ICvsID = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Beneficencia imparcial vs Daño instrumental</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'ICvsID'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>1. En la UCI de un hospital queda una cama libre. Un médico decide no asignar esa cama a un paciente con COVID19 pues estima que su probabilidad de supervivencia es baja y decide dejarla libre para un paciente con mejor pronóstico.</p><p>En relación con la situación responda:</p><p>¿Lo hecho por el médico estuvo bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_01', procedure: 'ICvsID'}
};
ICvsID.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>1. En la UCI de un hospital queda una cama libre. Un médico decide no asignar esa cama a un paciente con COVID19 pues estima que su probabilidad de supervivencia es baja y decide dejarla libre para un paciente con mejor pronóstico.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como este médico?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_02', procedure: 'ICvsID'}
};
ICvsID.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>1. En la UCI de un hospital queda una cama libre. Un médico decide no asignar esa cama a un paciente con COVID19 pues estima que su probabilidad de supervivencia es baja y decide dejarla libre para un paciente con mejor pronóstico.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por este médico generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_03', procedure: 'ICvsID'}
};
ICvsID.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>2. Un individuo decide ignorar las medidas de confinamiento afirmando que lo hizo por problemas económicos. Una persona conoce la situación y decide denunciarlo a la policía.</p><p>En relación con la situación responda:</p><p>¿Lo hecho por la persona que denunció estuvo bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_04', procedure: 'ICvsID'}
};
ICvsID.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>2. Un individuo decide ignorar las medidas de confinamiento afirmando que lo hizo por problemas económicos. Una persona conoce la situación y decide denunciarlo a la policía.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_05', procedure: 'ICvsID'}
};
ICvsID.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>2. Un individuo decide ignorar las medidas de confinamiento afirmando que lo hizo por problemas económicos. Una persona conoce la situación y decide denunciarlo a la policía.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_06', procedure: 'ICvsID'}
};
ICvsID.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>3. Un cirujano debe decidir a quien dar un transplante de corazón entre dos pacientes. Uno de ellos es un adulto de 62 años con enfermedad coronaria, con familia extensa y buenos hábitos recientes. El otro es un estudiante de 23 años con una enfermedad cardiaca de origen desconocido, con patrones de consumo de riesgo y malos hábitos.  El cirujano decide realizar el trasplante al paciente de 23 años.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo que pasa en esta situación está bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_07', procedure: 'ICvsID'}
};
ICvsID.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>3. Un cirujano debe decidir a quien dar un transplante de corazón entre dos pacientes. Uno de ellos es un adulto de 62 años con enfermedad coronaria, con familia extensa y buenos hábitos recientes. El otro es un estudiante de 23 años con una enfermedad cardiaca de origen desconocido, con patrones de consumo de riesgo y malos hábitos.  El cirujano decide realizar el trasplante al paciente de 23 años.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_08', procedure: 'ICvsID'}
};
ICvsID.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>3. Un cirujano debe decidir a quien dar un transplante de corazón entre dos pacientes. Uno de ellos es un adulto de 62 años con enfermedad coronaria, con familia extensa y buenos hábitos recientes. El otro es un estudiante de 23 años con una enfermedad cardiaca de origen desconocido, con patrones de consumo de riesgo y malos hábitos.  El cirujano decide realizar el trasplante al paciente de 23 años.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_09', procedure: 'ICvsID'}
};
ICvsID.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>4. Un gobernante se dispone a decretar la imposición de un brazalete electrónico a los ciudadanos que hayan incumplido las normas de confinamiento, con la finalidad de controlar sus movimientos e impedir futuros incumplimientos.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo que pasa en esta situación está bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_10', procedure: 'ICvsID'}
};
ICvsID.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>4. Un gobernante se dispone a decretar la imposición de un brazalete electrónico a los ciudadanos que hayan incumplido las normas de confinamiento, con la finalidad de controlar sus movimientos e impedir futuros incumplimientos.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_11', procedure: 'ICvsID'}
};
ICvsID.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>4. Un gobernante se dispone a decretar la imposición de un brazalete electrónico a los ciudadanos que hayan incumplido las normas de confinamiento, con la finalidad de controlar sus movimientos e impedir futuros incumplimientos.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_12', procedure: 'ICvsID'}
};
ICvsID.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>5. Un gobernante se dispone a aumentar el presupuesto militar para asegurarse que la gente cumpla el confinamiento ante una posible ampliación de la cuarentena.  En relación con la situación responda:</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo que pasa en esta situación está bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_13', procedure: 'ICvsID'}
};
ICvsID.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>5. Un gobernante se dispone a aumentar el presupuesto militar para asegurarse que la gente cumpla el confinamiento ante una posible ampliación de la cuarentena.  En relación con la situación responda:</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_14', procedure: 'ICvsID'}
};
ICvsID.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>5. Un gobernante se dispone a aumentar el presupuesto militar para asegurarse que la gente cumpla el confinamiento ante una posible ampliación de la cuarentena.  En relación con la situación responda:</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_15', procedure: 'ICvsID'}
};
ICvsID.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>6. Un hombre tiene una mascarilla (tapabocas) sobrante de alta protección. En su barrio un desconocido no tiene ninguna protección. El hombre decide donarle una mascarilla.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo que pasa en esta situación está bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_16', procedure: 'ICvsID'}
};
ICvsID.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>6. Un hombre tiene una mascarilla (tapabocas) sobrante de alta protección. En su barrio un desconocido no tiene ninguna protección. El hombre decide donarle una mascarilla.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_17', procedure: 'ICvsID'}
};
ICvsID.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>6. Un hombre tiene una mascarilla (tapabocas) sobrante de alta protección. En su barrio un desconocido no tiene ninguna protección. El hombre decide donarle una mascarilla.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_18', procedure: 'ICvsID'}
};
ICvsID.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>7. Una mujer mayor con antecedentes de salud sabe que tiene pocas probabilidades de sobrevivir al COVID19. Al comenzar a sentir síntomas graves, decide quedarse en casa en lugar de ir al hospital para liberar esos recursos a posibles pacientes con mejor pronóstico.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo que pasa en esta situación está bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_19', procedure: 'ICvsID'}
};
ICvsID.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>7. Una mujer mayor con antecedentes de salud sabe que tiene pocas probabilidades de sobrevivir al COVID19. Al comenzar a sentir síntomas graves, decide quedarse en casa en lugar de ir al hospital para liberar esos recursos a posibles pacientes con mejor pronóstico.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_20', procedure: 'ICvsID'}
};
ICvsID.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>7. Una mujer mayor con antecedentes de salud sabe que tiene pocas probabilidades de sobrevivir al COVID19. Al comenzar a sentir síntomas graves, decide quedarse en casa en lugar de ir al hospital para liberar esos recursos a posibles pacientes con mejor pronóstico.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_21', procedure: 'ICvsID'}
};
ICvsID.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>8. Un hombre que gana el salario mínimo del país decide donar un 10% de su sueldo mensual para aportar a programas sociales de personas que viven en la calle.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo que pasa en esta situación está bien o mal?</p></div></br>", require_movement:true, required: true, min: -5, max: 5, slider_width: 500, slider_start: 0, step: 1, labels: ["Muy mal", "Ni bien ni mal", "Muy bien"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_22', procedure: 'ICvsID'}
};
ICvsID.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>8. Un hombre que gana el salario mínimo del país decide donar un 10% de su sueldo mensual para aportar a programas sociales de personas que viven en la calle.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree que usted actuaría como esta persona?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_23', procedure: 'ICvsID'}
};
ICvsID.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'><p>8. Un hombre que gana el salario mínimo del país decide donar un 10% de su sueldo mensual para aportar a programas sociales de personas que viven en la calle.</p><p>En relación con la situación responda:</p><p>¿En qué medida cree usted que lo hecho por esta persona generó un daño?</p></div></br>", require_movement:true, required: true, min: 1, max: 5, slider_width: 500, slider_start: 3, step: 1, labels: ["Poco", "Mucho"], button_label: "Siguiente",
  data: {trialid: 'ICvsID_24', procedure: 'ICvsID'}
};
ICvsID.push(question24);

ICvsID.unshift(instruction_screen_experiment);
ICvsID.push.apply(questions, ICvsID);
call_function("ICvsID");
