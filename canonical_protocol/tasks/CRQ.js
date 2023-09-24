/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */
// Escala de Reserva Cognitiva

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CRQ') );
CRQ = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Reserva Cognitiva</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_01', procedure: 'CRQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>1. Escolaridad</p></div>', options: ["&nbsp;Sin estudios", "&nbsp;Lee y escribe de manera autodidacta", "&nbsp;Básica (< 9 años)", "&nbsp;Media incompleta (< 12 años e > 9)", "&nbsp;Media completa (=12 años)", "&nbsp;Superior (> 12 años)"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_01', procedure: 'CRQ'}
};
CRQ.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>2. Escolaridad de los padres</p></div>', options: ["&nbsp;No escolarizados", "&nbsp;Básica o primaria", "&nbsp;Secundaria o superior"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_02', procedure: 'CRQ'}
};
CRQ.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>3. Cursos de Formación</p></div>', options: ["&nbsp;Ninguno", "&nbsp;Uno o dos", "&nbsp;Entre 2 y cinco", "&nbsp;Más de cinco"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_03', procedure: 'CRQ'}
};
CRQ.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>4. Ocupación Laboral</p></div>', options: ['&nbsp;No calificado (ej: labores domésticas, ninguna especialización)', "&nbsp;Calificado (ej: obrero calificado, trabajos manuales, artesanales)", "&nbsp;Técnico (estudios y/o especialización formal en centros de formación técnica, institutos, liceos técnicos, etc)", "&nbsp;Profesional (estudios superiores/universitarios)", "&nbsp;Directivo"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_04', procedure: 'CRQ'}
};
CRQ.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>5. Formación Musical</p></div>', options: ["&nbsp;No toca ningún instrumento ni escucha música frecuentemente", "&nbsp;Toca poco (aficionado) o escucha música frecuentemente", "&nbsp;Formación musical reglada"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_05', procedure: 'CRQ'}
};
CRQ.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>6. Idiomas</p></div>', options: ["&nbsp;Solamente el idioma materno", "&nbsp;Dos idiomas", "&nbsp;Más de dos idiomas"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_06', procedure: 'CRQ'}
};
CRQ.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>7. Actividad Lectora</p></div>', options: ["&nbsp;Nunca", "&nbsp;Ocasionalmente", "&nbsp;Entre dos y cinco libros al año", "&nbsp;De 5 a 10 libros al año", "&nbsp;Mas de 10 libros al año"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_07', procedure: 'CRQ'}
};
CRQ.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified"><p>8. Juegos intelectuales (ajedrez, puzzle, crucigramas)</p></div>', options: ["&nbsp;Nunca o alguna vez", "&nbsp;Ocasional (entre 1 y 5 al mes)", "&nbsp;Frecuente (más de 5 al mes)"], required: true, horizontal: false}],
  data: {trialid: 'CRQ_08', procedure: 'CRQ'}
};
CRQ.push(question08);

var instruction_screen_experiment_00 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Reserva Cognitiva</big></b><BR>La Escala de Reserva Cognitiva pretende medir cómo de activo ha sido y es su estilo de vida. A continuación, se presenta una serie de actividades referidas a tres etapas de su vida:<BR><BR> <b>Juventud (18-35 años)</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>Adultez (36-64 años)</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>Madurez (A partir de los 65 años)</b>  <BR><BR> Para responder con qué frecuencia realizaba y realiza cada una de las siguientes actividades en cada etapa de su vida, tenga en cuenta el siguiente código de respuesta: <BR><BR> <b>0 = Nunca</b><BR> <b>1 = Una o varias veces al año</b><BR> <b>2 = Una o varias veces al mes</b><BR> <b>3 = Una o varias veces a la semana</b><BR> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_02', procedure: 'CRQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
CRQ.push(instruction_screen_experiment_00);

var instruction_screen_experiment_01 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Reserva Cognitiva</big></b><BR>ACTIVIDADES DE LA VIDA DIARIA<BR><BR>`, `<b><big>Escala de Reserva Cognitiva</big></b><BR>¿Con qué frecuencia realizaba (Juventud, Adultez) y realizó (Madurez) cada una de las siguientes actividades?<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_03', procedure: 'CRQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
CRQ.push(instruction_screen_experiment_01);

var question09 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>1. Controlar mis asuntos personales (ej. administración de medicinas, cuándo tengo cita con el médico, qué ropa vestir cada día, reservas en hoteles, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_09', procedure: 'CRQ'}
};
CRQ.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>2. Controlar los asuntos económicos de mi hogar (ej. recibos, hipoteca, inversiones, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_10', procedure: 'CRQ'}
};
CRQ.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>3. Realizar tareas domésticas (ej. hacer la comida, limpiar el polvo, recoger la casa, poner la lavadora, hacer la compra, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_11', procedure: 'CRQ'}
};
CRQ.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>4. Utilizar las nuevas tecnologías del momento básicamente (ej. contestar al teléfono o al móvil, poner la televisión, cambiar los canales, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_12', procedure: 'CRQ'}
};
CRQ.push(question12);

var instruction_screen_experiment_02 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Reserva Cognitiva</big></b><BR>FORMACIÓN - INFORMACIÓN<BR><BR>`, `<b><big>Escala de Reserva Cognitiva</big></b><BR>¿Con qué frecuencia realizaba (Juventud, Adultez) y realizó (Madurez) cada una de las siguientes actividades?<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_04', procedure: 'CRQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
CRQ.push(instruction_screen_experiment_02);

var question13 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>5. Realizar cursos, talleres o similares (ej. de informática, de idiomas, FPO etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_13', procedure: 'CRQ'}
};
CRQ.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>6. Hacer uso de otro idioma o dialecto.</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_14', procedure: 'CRQ'}
};
CRQ.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>7. Estar informado/a (ej. escuchar la radio, ver el telediario, leer el periódico, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_15', procedure: 'CRQ'}
};
CRQ.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>8. Utilizar las nuevas tecnologías del momento y hacer uso de ellas de una forma más compleja (ej. mando a distancia para teletexto o para programar; móvil para escribir mensajes; navegar por Internet, reservas online, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_16', procedure: 'CRQ'}
};
CRQ.push(question16);

var instruction_screen_experiment_03 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Reserva Cognitiva</big></b><BR>HOBBIES - AFICIONES<BR><BR>`, `<b><big>Escala de Reserva Cognitiva</big></b><BR>¿Con qué frecuencia realizaba (Juventud, Adultez) y realizó (Madurez) cada una de las siguientes actividades?<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_05', procedure: 'CRQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
CRQ.push(instruction_screen_experiment_03);

var question17 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>9. La lectura como afición (ej. periódicos, revistas, libros)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_17', procedure: 'CRQ'}
};
CRQ.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>10. La realización de pasatiempos (ej. crucigramas, sopa de letras, cruzadas, etc.) y/o juegos de mesa (cartas, damas, dominó, ajedrez, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_18', procedure: 'CRQ'}
};
CRQ.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>11. Escribir como afición (ej. cartas, diario personal, poesía, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_19', procedure: 'CRQ'}
};
CRQ.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>12. Escuchar música o ver la televisión (ej. música clásica o de la época, noticias, concursos, entrevistas, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_20', procedure: 'CRQ'}
};
CRQ.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>13. Tocar algún instrumento musical (ej. guitarra, flauta, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_21', procedure: 'CRQ'}
};
CRQ.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>14. Coleccionar objetos (ej. sellos, monedas, postales, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_22', procedure: 'CRQ'}
};
CRQ.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>15. Viajar o realizar excursiones de forma activa (ej. tomando fotos, visitando monumentos, mostrando interés por la cultura del lugar y las costumbres, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_23', procedure: 'CRQ'}
};
CRQ.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>16. Asistir a algún evento cultural (ej. exposiciones, teatro, cine, visita a museos, conciertos</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_24', procedure: 'CRQ'}
};
CRQ.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>17. Realizar manualidades y/o jardinería (ej. trabajos de marquetería, costura, tejer, poda de plantas, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_25', procedure: 'CRQ'}
};
CRQ.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>18. Cocinar como afición (ej. realizar nuevas recetas, probar otras formas de cocinar los alimentos, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_26', procedure: 'CRQ'}
};
CRQ.push(question26);

var question27 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>19. La pintura y/o la fotografía (ej. pintar cuadros, hacer fotos de los sitios que he visitado, realizar reportajes, retoques digitales, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_27', procedure: 'CRQ'}
};
CRQ.push(question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>20. Ir de compras de forma activa (ej. comparando precios, probando nuevos productos, memorizando la lista de la compra, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_28', procedure: 'CRQ'}
};
CRQ.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>21. Realizar alguna actividad física (ej. aerobic, correr, fútbol, caminar, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_29', procedure: 'CRQ'}
};
CRQ.push(question29);

var instruction_screen_experiment_04 = {
    type: 'instructions',
    fullscreen_mode: true,
    pages: [`<b><big>Escala de Reserva Cognitiva</big></b><BR>VIDA SOCIAL<BR><BR>`, `<b><big>Escala de Reserva Cognitiva</big></b><BR>¿Con qué frecuencia realizaba (Juventud, Adultez) y realizó (Madurez) cada una de las siguientes actividades?<BR><BR>`],
    button_label_next: 'Continuar',
    data: {trialid: 'Instructions_06', procedure: 'CRQ'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};
CRQ.push(instruction_screen_experiment_04);

var question30 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>22. Visitar y/o ser visitado/a por familiares, amigos, vecinos, etc (ej. reuniones sociales, comidas familiares, etc.)</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_30', procedure: 'CRQ'}
};
CRQ.push(question30);

var question31 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>23. Realizar actividades religiosas, de convivencia, de voluntariado, etc</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_31', procedure: 'CRQ'}
};
CRQ.push(question31);

var question32 = {
  type: 'survey-multi-choice-vertical',
  preamble: "<p>24. Relacionarme con personas de otras generaciones</p> <b>0 = Nunca</b><br> <b>1 = Una o varias veces al año</b><br> <b>2 = Una o varias veces al mes</b><br> <b>3 = Una o varias veces a la semana</b><br> <b>4 = Tres veces o más a la semana, siempre que me surge la oportunidad</b><br>",
  questions: [{prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Juventud</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Adultez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}, {prompt: '<div class="justified"><p style="margin-left: 6em;"><b>Madurez</b></p></div>', options: ["0", "1", "2", "3", "4"], required: true, horizontal: true}],
  data: {trialid: 'CRQ_32', procedure: 'CRQ'}
};
CRQ.push(question32);

CRQ.unshift(instruction_screen_experiment);
CRQ.push.apply(questions, CRQ);
call_function("CRQ");
