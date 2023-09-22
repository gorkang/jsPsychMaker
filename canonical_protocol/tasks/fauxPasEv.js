/**
 * CSCN lab
/**
This document was made with test_maker
*/

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('fauxPasEv') );
faux_pas = [];    //temporal timeline

var pages = [
  '<p>'+'<center><b><big>Historia 1</big></b></center><p/>'+
  '<p>Viviana estaba en una fiesta en la casa de su amigo Oscar. Ella estaba hablando con Oscar cuando llegó una mujer que era vecina de él.<br/><br/>'+
	'La mujer dijo “Hola”, luego se dio vuelta hacia Viviana y le dijo,<br/>'+
  '“¿Creo que no nos conocemos?. Yo soy María, ¿como es tu nombre?"<br/>'+
  '… <br/>'+
	'"Yo soy Viviana"<br/>'+
	'“¿Alguien quiere algo de beber?" preguntó Oscar.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 2</big></b></center><p/>'+
  '<p>'+ 'El marido de Elena estaba organizando una fiesta sorpresa para el cumpleaños de ella. El invitó a Sara, una amiga de ella y le dijo, "no le cuentes a nadie, y menos a Elena".</br>'+
	'El día antes de la fiesta, Elena estaba en la casa de Sara y Sara volcó el café sobre un vestido nuevo que estaba colgando sobre su silla. "Oh!" dijo Sara, " yo iba a usar esto en tu fiesta!" </br>'+
	'“¿Qué fiesta?" dijo Elena.</br>'+
	'"Vamos" dijo Sara, "Veamos si podemos sacar la mancha“.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 3</big></b></center><p/>'+
  '<p>'+ 'Javier estaba de compras buscando una camisa que hiciera juego con su traje. El vendedor le mostró varias. Javier las miró y finalmente encontró una que era del color correcto. Pero cuando se la fue a probar, no le cabía.</br>'+
	'“Es muy chica” le dijo al vendedor.</br>'+
	'“No se preocupe” le dijo el vendedor, “nosotros la próxima semana tendremos talles más grandes” </br>'+
	'“Muy bien, volveré entonces” dijo Javier.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 4</big></b></center><p/>'+
  '<p>'+ 'Julia que se acababa de mudar a su nuevo departamento había comprado unas cortinas nuevas para su dormitorio. Cuando terminaba de decorar el departamento, llegó su mejor amiga  Alicia.</br>'+
	'Julia le mostró el departamento y le preguntó, “ ¿te gusta mi dormitorio?”</br>'+
	'“ Esas cortinas son horribles” dijo Alicia,  “espero que las cambies por unas nuevas!”'+
  '</p>',
  '<p>'+'<center><b><big>Historia 5</big></b></center><p/>'+
  '<p>'+'Roberto fue al peluquero para un corte de cabello. “¿Cómo quisiera Usted que le corte?” preguntó el peluquero.</br>'+
	'“Me gustaría el mismo estilo que tengo ahora, sólo saque unos dos centímetros de largo” contestó Roberto.</br>'+
	'El peluquero le cortó algo desparejo en la frente, por lo que tuvo que cortarlo más corto. “Me temo que es un poco más corto que lo que me pidió” dijo el peluquero.</br>'+
	'“Ah, está bien” contestó Roberto, “ya crecerá”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 6</big></b></center><p/>'+
  '<p>'+ 'Juan se detuvo en la estación de servicio camino a su casa y llenó el tanque. Le dio a la cajera su tarjeta de crédito. La cajera la pasó por la máquina registradora y le dijo “lo siento, la máquina no acepta su tarjeta”</br>'+
	'“Mmm” dijo Juan, “bueno, pagaré al contado”.  El le dio $30.000 y le pidió que llene el tanque con bencina sin plomo.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 7</big></b></center><p/>'+
  '<p>'+ 'Susana es una nena de 3 años con cara redonda y cabello rubio corto, que estaba en la casa de su tía Carolina. Sonó el timbre y su tía abrió la puerta. Era una vecina, María. “Hola” dijo la tía Carolina, “qué bueno que estés por acá!”</br>'+
	'María dijo “hola”, luego miró a Susana y dijo “eh, creo que no conozco a este pequeño niño. ¿Cómo es su nombre?”'+
  '</p>',
  '<p>'+'<center><b><big>Historia 8</big></b></center><p/>'+
  '<p>'+'Julieta llevó a su perro Sultán al parque. Ella le tiraba un palo para que lo agarrara. Cuando llevaban allí un rato, pasó Paula, una vecina de ella. Ellas charlaron por unos minutos. Después Paula preguntó, “¿te estás yendo a tu casa?” , ¿quieres que nos vayamos caminando juntas?” </br>'+
	'“Bueno”, dijo Julieta. Ella llamó a Sultán que estaba ocupado persiguiendo palomas y este no volvió. “Parece que no está listo para volver” dijo ella, “creo que nos quedaremos”.</br>'+
	'“ok” dijo Paula, “te veré más tarde”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 9</big></b></center><p/>'+
  '<p>'+'Juanita había tenido un rol destacado en la obra de teatro de la escuela el año anterior y este año quería el rol protagónico. Tomó clases de actuación y dio una prueba para la obra.</br>'+
  'El día que se anunciaron las decisiones, fue antes de la clase para revisar la lista de quienes harían la obra. Ella no tenía el protagónico y en cambio le habían asignado un rol menor.</br>'+
  'Ella se dirigió a su novio que estaba en la entrada y le contó lo que había sucedido. “Qué pena” dijo él, “debes estar desilusionada”.</br>'+
  '“Sí” contestó Juanita, “tengo que decidir si aceptaré este rol”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 10</big></b></center><p/>'+
  '<p>'+'José estaba en la biblioteca. Él encontró el libro que quería sobre cómo escalar el Aconcagua y fue al mostrador del frente para registrarlo. Cuando miró en su billetera, descubrió que había dejado su credencial en su casa.</br>'+
  '“Disculpe” le dijo a la mujer del mostrador, “me dejé la credencial en mi casa”</br>'+
  '“Está bien” contestó ella. “Dime tu nombre, y si nosotros lo tenemos en la computadora, puedes registrar el libro sólo mostrándome tu licencia de conducir”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 11</big></b></center><p/>'+
  '<p>'+'Jorge Gomez, el gerente de “ABC Programaciones”, llamó a todo su personal a una reunión. “Tengo algo que decirles” dijo. “Juan Mercado, uno de nuestros contadores, está en el hospital muy enfermo con cáncer”. Todos se quedaron mudos, asimilando la noticia, cuando Roberto, un ingeniero de sistemas que llegó tarde, dijo “hola, escuché un buen chiste anoche!”, “¿qué le dijo el paciente terminal a su doctor?”</br>'+
  'Jorge dijo “ok, vamos abajo a trabajar”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 12</big></b></center><p/>'+
  '<p>'+'Miguel, un niño de nueve años que acababa de comenzar en una nueva escuela, estaba en uno de los  baños de la escuela.</br>'+
  'José y Pedro, otros dos chicos, entraron charlando al lavatorio. José dijo, “¿viste el chico nuevo de la clase? Su nombre es Miguel, ¿no es raro? y es tan pequeño!.</br>'+
  'Miguel salió del baño y José y Pedro lo vieron. Pedro dijo, “oh, hola Miguel! ¿vamos a jugar al fútbol?”.</br>'+
  '</p>',
  '<p>'+'<center><b><big>Historia 13</big></b></center><p/>'+
  '<p>'+'El primo de Karina, Sergio venía de visita y Karina le hizo una tarta de manzana especialmente para él.</br>'+
  'Luego de la cena, ella dijo, “hice una tarta para ti, está en la cocina”</br>'+
  '“Mmm” contestó Sergio, “¡Qué rico olor! Me encantan las tartas, menos la de manzana, por supuesto.”'+
  '</p>',
  '<p>'+'<center><b><big>Historia 14</big></b></center><p/>'+
  '<p>'+'Josefina le compró a su amiga Ana como regalo de bodas una fuente de cristal. Ana tuvo una gran boda con un montón de regalos. Alrededor de un año después, Josefina estaba una noche cenando en la casa de Ana. A Josefina se le cayó por accidente una botella de vino sobre la fuente de cristal, que se rompió. “Disculpame, rompí la fuente” dijo Josefina.</br>'+
  '“No te preocupes” dijo Ana. “Nunca me gustó, alguien me la regaló para mi casamiento”.</br>'+
  '</p>',
  '<p>'+'<center><b><big>Historia 15</big></b></center><p/>'+
  '<p>'+'En la escuela primaria, había un concurso de cuentos. Todos habían sido invitados a participar. Varios alumnos de quinto grado participaron. A Cristina le encantaba la historia que había enviado al concurso. Unos días más tarde, se anunciaron los resultados de la competencia: la historia de Cristina no había ganado nada, y un compañero de su clase, Julián, había ganado el primer premio.</br>'+
  'Al día siguiente, Cristina estaba sentada en un banco con Julián. Ellos estaban mirando el trofeo del primer premio. Julián dijo, “fue tan fácil ganar este concurso, todas las historias en esta competencia eran horribles”</br>'+
  '“¿Dónde vas a poner tu trofeo?” preguntó Cristina.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 16</big></b></center><p/>'+
  '<p>'+'Tito estaba en un restaurante y se le cayó accidentalmente el café.</br>'+
  '“Le traeré otra taza de café” dijo el mozo quien luego se fue un largo rato.</br>'+
  'Hector, otro cliente del restaurante estaba parado en la caja esperando para pagar.</br>'+
  'Tito fue hacia Hector y le dijo, “se me volcó café en mi mesa, ¿puede ir a limpiarlo?”</br>'+
  '</p>',
  '<p>'+'<center><b><big>Historia 17</big></b></center><p/>'+
  '<p>'+'Leonor estaba esperando en la parada de buses. El bus estaba retrasado y ella había estado mucho tiempo parada. Tenía 65 años y estaba cansada de estar parada tanto tiempo. Cuando el bus vino finalmente, estaba lleno y no había asientos libres.</br>'+
  'Ella vio a un vecino, Pablo, parado en el pasillo que le dijo: “Hola Leonor,  ¿estuviste esperando mucho?”</br>'+
  'Ella contestó: “Como 20 minutos”.</br>'+
  'Una mujer joven que estaba sentada se paró y le dijo “¿quiere usted mi asiento?”'+
  '</p>',
  '<p>'+'<center><b><big>Historia 18</big></b></center><p/>'+
  '<p>'+'Rodolfo comenzó a trabajar en una oficina nueva. Un día en la cafetería, estaba hablando con un compañero nuevo, Andrés. Este le preguntó:</br>'+
  '“¿A qué se dedica tu esposa?”.</br>'+
  'Rodolfo contestó “Ella es abogada”.</br>'+
  'Unos minutos más tarde, Clara llegó a la cafetería, se veía irritada. Les contó “Acabo de recibir una llamada de teléfono terrible, los abogados son todos arrogantes y avaros, no los soporto”.</br>'+
  'Andrés le pidió a Clara. “¿Querés mirar esos informes?”</br>'+
  'Ella contestó “Ahora no, necesito mi café”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 19</big></b></center><p/>'+
  '<p>'+'Ricardo compró un auto nuevo, un Peugeot rojo. Unas semanas después que lo había comprado, chocó de atrás al auto de su vecino Tomás, un viejo escarabajo Volkswagen.</br>'+
  'Su auto no se dañó y tampoco le hizo mucho daño al auto de Tomás, solo un rayón en la pintura del guardabarro.</br>'+
  'De todas maneras, fue y golpeó a su puerta. Cuando Tomás contestó, Ricardo le dijo, “realmente lo siento, acabo de hacer un pequeño rayón en tu auto”.</br>'+
  'Tomás lo miró y le dijo, “No te preocupes, fue solo un accidente”.'+
  '</p>',
  '<p>'+'<center><b><big>Historia 20</big></b></center><p/>'+
  '<p>'+'Luisa fue a la carnicería a comprar un pollo. El negocio estaba lleno y ruidoso. Ella le pidió al carnicero, “¿tiene algún pollo sin menudos?”</br>'+
  'Él lo negó y comenzó a envolver un pollo asado.</br>'+
  '“Perdón” dijo ella, “debo no haber hablado claramente. Le pregunté si tenía pollos sin menudos”.</br>'+
  '“Oh, perdón”, dijo el carnicero “no tenemos más”.'+
  '<p>',
  '<p>'+'<center><b><big>Fin de las historias</big></b></center><p/>'
]

// Creacion de timeline e inclusion de trials
fauxPasEv = [];

// HISTORIA 1 -------------------------------------------------------------------------------------------------------------------------

var question001 = {
  type: 'instructions',
  pages: [pages[0]],
  data: {trialid: 'fauxPasEv_001', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question001);

var question002 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_002', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question002);

var question003 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Óscar', '&nbsp;Viviana', '&nbsp;María'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_003', procedure: 'fauxPasEv'}
};

var question004 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_004', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question005 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que ella/él lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_005', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question006 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Sabía Oscar que Vivi y María no se conocían?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_006', procedure: 'fauxPasEv'}
};

var question007 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que se sintió Vivi?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_007', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_01 = {
  timeline: [question003, question004, question005, question006, question007],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_002')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_003_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_01);

var question008 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Donde estaba Vivi?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_008', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question008);

var question009 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Vivi y María se conocían?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_009', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question009);

// HISTORIA 2 -------------------------------------------------------------------------------------------------------------------------

var question010 = {
  type: 'instructions',
  pages: [pages[1]],
  data: {trialid: 'fauxPasEv_010', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question010);

var question011 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_011', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question011);

var question012 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Sara', '&nbsp;Elena', '&nbsp;El marido de Elena'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_012', procedure: 'fauxPasEv'}
};

var question013 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_013', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question014 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que ella/él lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_014', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question015 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Recordaba Sara que la fiesta era una fiesta sorpresa?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_015', procedure: 'fauxPasEv'}
};

var question016 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Elena pensó?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_016', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_02 = {
  timeline: [question012, question013, question014, question015, question016],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_011')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_012_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_02);

var question017 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En la historia, ¿Para quién era la fiesta sorpresa?</div>', options: ['&nbsp;Sara', '&nbsp;Elena', '&nbsp;El marido de Elena'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_017', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question017);

var question018 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿A quién se le volcó algo en el vestido?</div>', options: ['&nbsp;Sara', '&nbsp;Elena', '&nbsp;El marido de Elena'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_018', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question018);

// HISTORIA 3 -------------------------------------------------------------------------------------------------------------------------

var question019 = {
  type: 'instructions',
  pages: [pages[2]],
  data: {trialid: 'fauxPasEv_019', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question019);

var question020 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_020', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question020);

var question021 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;El vendedor', '&nbsp;Javier'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_021', procedure: 'fauxPasEv'}
};

var question022 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_022', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question023 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que ella/él lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_023', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question024 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuándo se probó la camisa, ¿Sabía Javier que no había de su tamaño?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_024', procedure: 'fauxPasEv'}
};

var question025 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Javier se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_025', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_03 = {
  timeline: [question021, question022, question023, question024, question025],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_020')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_021_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_03);

var question026 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué estaba comprando Javier?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_026', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question026);

var question027 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué volvería en la semana siguiente?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_027', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question027);

// HISTORIA 4 -------------------------------------------------------------------------------------------------------------------------

var question028 = {
  type: 'instructions',
  pages: [pages[3]],
  data: {trialid: 'fauxPasEv_028', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question028);

var question029 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_029', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question029);

var question030 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Alicia', '&nbsp;Julia'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_030', procedure: 'fauxPasEv'}
};

var question031 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_031', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question032 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que ella/él lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_032', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question033 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alicia sabía quién había comprado las cortinas?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_033', procedure: 'fauxPasEv'}
};

var question034 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Julia se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_034', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};


var if_block_04 = {
  timeline: [question030, question031, question032, question033, question034],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_029')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_030_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_04);

var question035 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué acababa de comprar Julia?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_035', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question035);

var question036 = {
  type: 'survey-html-form',
  html: function() {
    // parte comun para ambas partes del between
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cuánto tiempo había vivido Julia en este departamento?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_036', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question036);

// HISTORIA 5 -------------------------------------------------------------------------------------------------------------------------

var question037 = {
  type: 'instructions',
  pages: [pages[4]],
  data: {trialid: 'fauxPasEv_037', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question037);

var question038 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_038', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question038);

var question039 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Roberto', '&nbsp;El peluquero'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_039', procedure: 'fauxPasEv'}
};

var question040 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_040', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question041 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_041', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question042 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Mientras le estaba cortando, ¿Roberto se dio cuenta que el peluquero le estaba cortando muy corto?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_042', procedure: 'fauxPasEv'}
};

var question043 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Roberto se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_043', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_05 = {
  timeline: [question039, question040, question041, question042, question043],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_038')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_039_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_05);

var question044 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Cómo quería Roberto su corte?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_044', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question044);

var question045 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo le corto el peluquero el pelo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_045', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question045);

// HISTORIA 6 -------------------------------------------------------------------------------------------------------------------------

var question046 = {
  type: 'instructions',
  pages: [pages[5]],
  data: {trialid: 'fauxPasEv_046', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question046);

var question047 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_047', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question047);

var question048 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Juan', '&nbsp;La cajera'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_048', procedure: 'fauxPasEv'}
};

var question049 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_049', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question050 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_050', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question051 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuándo le dio su tarjeta a la cajera, ¿Sabía Juan que la máquina no aceptaría su tarjeta?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_051', procedure: 'fauxPasEv'}
};

var question052 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Juan se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_052', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_06 = {
  timeline: [question048, question049, question050, question051, question052],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_047')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_048_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_06);

var question053 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Que se detuvo a comprar Juan?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_053', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question053);

var question054 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué pagó con efectivo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_054', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question054);

// HISTORIA 7 -------------------------------------------------------------------------------------------------------------------------

var question055 = {
  type: 'instructions',
  pages: [pages[6]],
  data: {trialid: 'fauxPasEv_055', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question055);

var question056 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_056', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question056);

var question057 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Susana', '&nbsp;La tía Carolina', '&nbsp;La vecina María'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_057', procedure: 'fauxPasEv'}
};

var question058 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_058', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question059 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_059', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question060 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿María sabía que Susy era una niña?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_060', procedure: 'fauxPasEv'}
};

var question061 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Susy se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_061', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_07 = {
  timeline: [question057, question058, question059, question060, question061],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_056')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_057_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_07);

var question062 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Donde estaba Susy?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_062', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question062);

var question063 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Quién vino de visita?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_063', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question063);

// HISTORIA 8 -------------------------------------------------------------------------------------------------------------------------

var question064 = {
  type: 'instructions',
  pages: [pages[7]],
  data: {trialid: 'fauxPasEv_064', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question064);

var question065 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_065', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question065);

var question066 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Julieta', '&nbsp;Sultan', '&nbsp;Paula'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_066', procedure: 'fauxPasEv'}
};

var question067 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_067', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question068 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_068', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question069 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuándo la invitó, ¿Sabía Paula que Julieta no iba a poder volver caminando con ella?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_069', procedure: 'fauxPasEv'}
};

var question070 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Paula se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_070', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_08 = {
  timeline: [question066, question067, question068, question069, question070],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_065')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_066_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_08);

var question071 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Donde había llevado Julieta a Sultán?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_071', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question071);

var question072 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué no regresó con su amiga Paula?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_072', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question072);

// HISTORIA 9 -------------------------------------------------------------------------------------------------------------------------

var question073 = {
  type: 'instructions',
  pages: [pages[8]],
  data: {trialid: 'fauxPasEv_073', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question073);

var question074 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_074', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question074);

var question075 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Juanita', '&nbsp;El novio de Juanita'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_075', procedure: 'fauxPasEv'}
};

var question076 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_076', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question077 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_077', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question078 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuando él corrió hacia ella primero en la entrada, ¿Sabía el novio de Juanita que ella no había ganado el rol?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_078', procedure: 'fauxPasEv'}
};

var question079 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Juanita se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_079', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_09 = {
  timeline: [question075, question076, question077, question078, question079],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_074')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_075_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_09);

var question080 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Que rol ganó Juanita?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_080', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question080);

var question081 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Qué le dijo su novio?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_081', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question081);

// HISTORIA 10 -------------------------------------------------------------------------------------------------------------------------

var question082 = {
  type: 'instructions',
  pages: [pages[9]],
  data: {trialid: 'fauxPasEv_082', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question082);

var question083 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_083', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question083);

var question084 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;La mujer del mostrador', '&nbsp;José'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_084', procedure: 'fauxPasEv'}
};

var question085 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_085', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question086 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_086', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question087 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuando José fue a la biblioteca, ¿Se dio cuenta que se había dejado su tarjeta?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_087', procedure: 'fauxPasEv'}
};

var question088 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que José se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_088', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_10 = {
  timeline: [question084, question085, question086, question087, question088],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_083')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_084_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_10);

var question089 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué libro sacó de la biblioteca?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_089', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question089);

var question090 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Lo pudo chequear?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_090', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question090);

// HISTORIA 11 -------------------------------------------------------------------------------------------------------------------------

var question091 = {
  type: 'instructions',
  pages: [pages[10]],
  data: {trialid: 'fauxPasEv_091', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question091);

var question092 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_092', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question092);

var question093 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Jorge Gomez, el gerente', '&nbsp;Juan Mercado, el contador', '&nbsp;Roberto, el ingeniero'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_093', procedure: 'fauxPasEv'}
};

var question094 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_094', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question095 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_095', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question096 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuando llegó, ¿sabía Roberto que el contador estaba enfermo de cáncer?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_096', procedure: 'fauxPasEv'}
};

var question097 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Jorge, el gerente, se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_097', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_11 = {
  timeline: [question093, question094, question095, question096, question097],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_092')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_093_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_11);

var question098 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué le dijo Jorge, el gerente, a la gente en la reunión?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_098', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question098);

var question099 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Quién llegó tarde a la reunión?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_099', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question099);

// HISTORIA 12 -------------------------------------------------------------------------------------------------------------------------

var question100 = {
  type: 'instructions',
  pages: [pages[11]],
  data: {trialid: 'fauxPasEv_100', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question100);

var question101 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_101', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question101);

var question102 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;José', '&nbsp;Miguel', '&nbsp;Pedro'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_102', procedure: 'fauxPasEv'}
};

var question103 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_103', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question104 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_104', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question105 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuando José estaba hablando con Pedro, ¿Sabía que Miguel estaba en uno de los baños?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_105', procedure: 'fauxPasEv'}
};

var question106 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Miguel se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_106', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_12 = {
  timeline: [question102, question103, question104, question105, question106],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_101')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_102_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_12);

var question107 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Dónde estaba Miguel mientras José y Pedro estaban hablando?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_107', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question107);

var question108 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Qué dijo José de Miguel?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_108', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question108);

// HISTORIA 13 -------------------------------------------------------------------------------------------------------------------------

var question109 = {
  type: 'instructions',
  pages: [pages[12]],
  data: {trialid: 'fauxPasEv_109', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question109);

var question110 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_110', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question110);

var question111 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Sergio, el primo de Karina', '&nbsp;Karina'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_111', procedure: 'fauxPasEv'}
};

var question112 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_112', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question113 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_113', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question114 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuándo olió la tarta, ¿Sergio sabía que era de manzana?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_114', procedure: 'fauxPasEv'}
};

var question115 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Karina se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_115', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_13 = {
  timeline: [question111, question112, question113, question114, question115],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_110')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_111_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_13);

var question116 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Que clase de tarta hizo Karina?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_116', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question116);

var question117 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo se conocían Karina y Sergio?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_117', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question117);

// HISTORIA 14 -------------------------------------------------------------------------------------------------------------------------

var question118 = {
  type: 'instructions',
  pages: [pages[13]],
  data: {trialid: 'fauxPasEv_118', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question118);

var question119 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_119', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question119);

var question120 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Ana', '&nbsp;Josefina'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_120', procedure: 'fauxPasEv'}
};

var question121 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_121', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question122 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_122', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question123 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Ana recordaba que Josefina le había dado esa fuente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_123', procedure: 'fauxPasEv'}
};

var question124 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Josefina se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_124', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_14 = {
  timeline: [question120, question121, question122, question123, question124],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_119')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_120_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_14);

var question125 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué le regaló Josefina a Ana en su boda?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_125', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question125);

var question126 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo se rompió la fuente?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_126', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question126);

// HISTORIA 15 -------------------------------------------------------------------------------------------------------------------------

var question127 = {
  type: 'instructions',
  pages: [pages[14]],
  data: {trialid: 'fauxPasEv_127', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question127);

var question128 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_128', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question128);

var question129 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Cristina', '&nbsp;Julian'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_129', procedure: 'fauxPasEv'}
};

var question130 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_130', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question131 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_131', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question132 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Sabía Julián que Cristina había inscrito una historia en el concurso?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_132', procedure: 'fauxPasEv'}
};

var question133 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Cristina se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_133', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_15 = {
  timeline: [question129, question130, question131, question132, question133],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_128')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_129_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_15);

var question134 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">En la historia, ¿Quién ganó el concurso?</div>', options: ['&nbsp;Julian', '&nbsp;Cristina'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_134', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question134);

var question135 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Ganó algo la historia de Cristina?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_135', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question135);

// HISTORIA 16 -------------------------------------------------------------------------------------------------------------------------

var question136 = {
  type: 'instructions',
  pages: [pages[15]],
  data: {trialid: 'fauxPasEv_136', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question136);

var question137 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_137', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question137);

var question138 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Tito', '&nbsp;Héctor', '&nbsp;El mozo'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_138', procedure: 'fauxPasEv'}
};

var question139 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_139', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question140 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_140', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question141 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Sabía Tito que Héctor era otro cliente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_141', procedure: 'fauxPasEv'}
};

var question142 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Héctor se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_142', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_16 = {
  timeline: [question138, question139, question140, question141, question142],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_137')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_138_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_16);

var question143 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Por qué estaba Héctor parado al lado de la caja?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_143', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question143);

var question144 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Qué volcó Tito?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_144', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question144);

// HISTORIA 17 -------------------------------------------------------------------------------------------------------------------------

var question145 = {
  type: 'instructions',
  pages: [pages[16]],
  data: {trialid: 'fauxPasEv_145', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question145);

var question146 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_146', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question146);

var question147 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;La mujer joven', '&nbsp;Pablo', '&nbsp;Leonor'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_147', procedure: 'fauxPasEv'}
};

var question148 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_148', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question149 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_149', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question150 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuando Leonor subió al colectivo, ¿Sabía Pablo cuánto tiempo ella había estado esperando?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_150', procedure: 'fauxPasEv'}
};

var question151 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Leonor se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_151', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_17 = {
  timeline: [question147, question148, question149, question150, question151],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_146')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_147_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_17);

var question152 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Por qué estuvo Leonor esperando el colectivo por 20 minutos?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_152', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question152);

var question153 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Había asientos libres en el colectivo cuando se subió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_153', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question153);

// HISTORIA 18 -------------------------------------------------------------------------------------------------------------------------

var question154 = {
  type: 'instructions',
  pages: [pages[17]],
  data: {trialid: 'fauxPasEv_154', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question154);

var question155 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_155', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question155);

var question156 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Rodolfo', '&nbsp;Andres, el compañero nuevo', '&nbsp;La esposa de Rodolfo', '&nbsp;Clara'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_156', procedure: 'fauxPasEv'}
};

var question157 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_157', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question158 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_158', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question159 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Sabía Clara que la esposa de Rodolfo era abogada?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_159', procedure: 'fauxPasEv'}
};

var question160 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Rodolfo se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_160', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_18 = {
  timeline: [question156, question157, question158, question159, question160],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_155')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_156_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_18);

var question161 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué hacía la esposa de Rodolfo para vivir?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_161', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question161);

var question162 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Dónde estaban Rodolfo y Andrés hablando?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_162', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question162);

// HISTORIA 19 -------------------------------------------------------------------------------------------------------------------------

var question163 = {
  type: 'instructions',
  pages: [pages[18]],
  data: {trialid: 'fauxPasEv_163', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question163);

var question164 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_164', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question164);

var question165 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Ricardo', '&nbsp;Tomas'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_165', procedure: 'fauxPasEv'}
};

var question166 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_166', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question167 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_167', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question168 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Sabía Ricardo cómo iba a reaccionar su vecino Tomás?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_168', procedure: 'fauxPasEv'}
};

var question169 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Ricardo se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_169', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_19 = {
  timeline: [question165, question166, question167, question168, question169],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_164')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_165_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_19);

var question170 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Qué le hizo Ricardo al auto de Tomás?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_170', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question170);

var question171 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo reaccionó Tomás?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_171', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question171);

// HISTORIA 20 -------------------------------------------------------------------------------------------------------------------------

var question172 = {
  type: 'instructions',
  pages: [pages[19]],
  data: {trialid: 'fauxPasEv_172', procedure: 'fauxPasEv'},
  button_label_previous: "Anterior",
  button_label_next: "Siguiente",
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};
fauxPasEv.push(question172);

var question173 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Alguien dijo algo que no debió decir o dijo algo inconveniente?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_173', procedure: 'fauxPasEv'}
};
fauxPasEv.push(question173);

var question174 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Quién dijo algo que no debió decir o algo inconveniente?</div>', options: ['&nbsp;Luisa', '&nbsp;El carnicero'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_174', procedure: 'fauxPasEv'}
};

var question175 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué ella/él no debió haberlo dicho o por qué era inapropiado?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_175', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question176 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué crees que él/ella lo dijo?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_176', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var question177 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Cuándo empezó a envolver el pollo para Luisa, ¿Sabía el carnicero que ella quería un pollo sin menudos?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true, random_options: false, horizontal: false}],
  data: {trialid: 'fauxPasEv_177', procedure: 'fauxPasEv'}
};

var question178 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Cómo crees que Luisa se sintió?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_178', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};

var if_block_20 = {
  timeline: [question174, question175, question176, question177, question178],
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse(jsPsych.data.get().values().find(x => x.trialid === 'fauxPasEv_173')["response"])["Q0"]).trim();
    if(data == "Si"){
      return true;
    } else {
      return false;
    }
  },
  data: {trialid: 'fauxPasEv_174_if', procedure: 'fauxPasEv'}
}
fauxPasEv.push(if_block_20);

var question179 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + 'En la historia, ¿Donde fue Luisa?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_179', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question179);

var question180 = {
  type: 'survey-html-form',
  html: function() {
    var html = '<div style="text-align: justify; width: 100%">' + '¿Por qué el carnicero comenzó a envolverle un pollo asado a ella?' + '</div>';
    html += '<p><textarea name ="Q0" style="min-width:500px; max-width:100%;min-height:50px;height:100%;width:100%;" required="true" autofocus></textarea></p>'
    return html;
  },
  data: {trialid: 'fauxPasEv_180', procedure: 'fauxPasEv'},
  show_clickable_nav: true
};
fauxPasEv.push(question180);

questions.push.apply(questions, fauxPasEv);

call_function("fauxPasEv");
