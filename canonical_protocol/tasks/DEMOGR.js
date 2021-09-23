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

DEMOGR = [];    //temporal timeline


var instruction_screen_experiment = {
    type: 'fullscreen',
    fullscreen_mode: true,
    message: [`<b><big>Información demográfica</big></b><BR>Por favor, contesta a las siguientes preguntas<BR><BR>`],
    button_label: 'Iniciar el estudio a pantalla completa',
    data: {trialid: 'Instructions_01', procedure: 'DEMOGR'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

/*var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>' +
    '<p><left><b><big>Información demográfica</big></b><br />'+'Por favor, contesta a las siguientes preguntas' +'</p>'],
    data: {trialid: 'Instructions'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};*/


var question01 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica tu edad</div>', type: 'number', range: [18, 100], required: true, error_text: 'Tienes que ser mayor de edad para poder participar'}],
  data: {trialid: 'DEMOGR_01', procedure: 'DEMOGR'}
};
DEMOGR.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica tu género</div>', options: ['&nbsp;Femenino', '&nbsp;Masculino', '&nbsp;No binario'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_02', procedure: 'DEMOGR'}
};
DEMOGR.push(question02);

var question03 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Indica tu correo electrónico personal<p style="font-size: 13px;">(enviaremos la giftcard a este email cuando finalices las tareas)</p></div>', html: '<input name ="Q0" type="email" required>',
  data: {trialid: 'DEMOGR_03', procedure: 'DEMOGR'}
};
DEMOGR.push(question03);

/*var question04 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Introduce tu número de celular (912345678)</div>', type: 'number', range: [9e+08, 9999999999], required: true, error_text: 'Tienes que introducir un celular valido (ej. 9 1234 5678 pero sin los espacios)'}],
  data: {trialid: 'DEMOGR_04', procedure: 'DEMOGR'}
};
DEMOGR.push(question04);*/

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Tienes algún tipo de daltonismo?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_05', procedure: 'DEMOGR'}
};
DEMOGR.push(question05);

var question06 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Elige del desplegable tu comuna de residencia.</div>', html: '<input name ="Q0" list="comunas" required><datalist id="comunas"><option value="Iquique"> <option value="Alto Hospicio"> <option value="Pozo Almonte"> <option value="Camiña"> <option value="Colchane"> <option value="Huara"> <option value="Pica"> <option value="Antofagasta"> <option value="Mejillones"> <option value="Sierra Gorda"> <option value="Taltal"> <option value="Calama"> <option value="Ollagüe"> <option value="San Pedro de Atacama"> <option value="Tocopilla"> <option value="María Elena"> <option value="Copiapó"> <option value="Caldera"> <option value="Tierra Amarilla"> <option value="Chañaral"> <option value="Diego de Almagro"> <option value="Vallenar"> <option value="Alto del Carmen"> <option value="Freirina"> <option value="Huasco"> <option value="La Serena"> <option value="Coquimbo"> <option value="Andacollo"> <option value="La Higuera"> <option value="Paiguano"> <option value="Vicuña"> <option value="Illapel"> <option value="Canela"> <option value="Los Vilos"> <option value="Salamanca"> <option value="Ovalle"> <option value="Combarbalá"> <option value="Monte Patria"> <option value="Punitaqui"> <option value="Río Hurtado"> <option value="Valparaíso"> <option value="Casablanca"> <option value="Concón"> <option value="Juan Fernández"> <option value="Puchuncaví"> <option value="Quintero"> <option value="Viña del Mar"> <option value="Isla de Pascua"> <option value="Los Andes"> <option value="Calle Larga"> <option value="Rinconada"> <option value="San Esteban"> <option value="La Ligua"> <option value="Cabildo"> <option value="Papudo"> <option value="Petorca"> <option value="Zapallar"> <option value="Quillota"> <option value="Calera"> <option value="Hijuelas"> <option value="La Cruz"> <option value="Nogales"> <option value="San Antonio"> <option value="Algarrobo"> <option value="Cartagena"> <option value="El Quisco"> <option value="El Tabo"> <option value="Santo Domingo"> <option value="San Felipe"> <option value="Catemu"> <option value="Llaillay"> <option value="Panquehue"> <option value="Putaendo"> <option value="Santa María"> <option value="Quilpué"> <option value="Limache"> <option value="Olmué"> <option value="Villa Alemana"> <option value="Rancagua"> <option value="Codegua"> <option value="Coinco"> <option value="Coltauco"> <option value="Doñihue"> <option value="Graneros"> <option value="Las Cabras"> <option value="Machalí"> <option value="Malloa"> <option value="Mostazal"> <option value="Olivar"> <option value="Peumo"> <option value="Pichidegua"> <option value="Quinta de Tilcoco"> <option value="Rengo"> <option value="Requínoa"> <option value="San Vicente"> <option value="Pichilemu"> <option value="La Estrella"> <option value="Litueche"> <option value="Marchihue"> <option value="Navidad"> <option value="Paredones"> <option value="San Fernando"> <option value="Chépica"> <option value="Chimbarongo"> <option value="Lolol"> <option value="Nancagua"> <option value="Palmilla"> <option value="Peralillo"> <option value="Placilla"> <option value="Pumanque"> <option value="Santa Cruz"> <option value="Talca"> <option value="Constitución"> <option value="Curepto"> <option value="Empedrado"> <option value="Maule"> <option value="Pelarco"> <option value="Pencahue"> <option value="Río Claro"> <option value="San Clemente"> <option value="San Rafael"> <option value="Cauquenes"> <option value="Chanco"> <option value="Pelluhue"> <option value="Curicó"> <option value="Hualañé"> <option value="Licantén"> <option value="Molina"> <option value="Rauco"> <option value="Romeral"> <option value="Sagrada Familia"> <option value="Teno"> <option value="Vichuquén"> <option value="Linares"> <option value="Colbún"> <option value="Longaví"> <option value="Parral"> <option value="Retiro"> <option value="San Javier"> <option value="Villa Alegre"> <option value="Yerbas Buenas"> <option value="Concepción"> <option value="Coronel"> <option value="Chiguayante"> <option value="Florida"> <option value="Hualqui"> <option value="Lota"> <option value="Penco"> <option value="San Pedro de la Paz"> <option value="Santa Juana"> <option value="Talcahuano"> <option value="Tomé"> <option value="Hualpén"> <option value="Lebu"> <option value="Arauco"> <option value="Cañete"> <option value="Contulmo"> <option value="Curanilahue"> <option value="Los Alamos"> <option value="Tirúa"> <option value="Los Angeles"> <option value="Antuco"> <option value="Cabrero"> <option value="Laja"> <option value="Mulchén"> <option value="Nacimiento"> <option value="Negrete"> <option value="Quilaco"> <option value="Quilleco"> <option value="San Rosendo"> <option value="Santa Bárbara"> <option value="Tucapel"> <option value="Yumbel"> <option value="Alto Biobío"> <option value="Temuco"> <option value="Carahue"> <option value="Cunco"> <option value="Curarrehue"> <option value="Freire"> <option value="Galvarino"> <option value="Gorbea"> <option value="Lautaro"> <option value="Loncoche"> <option value="Melipeuco"> <option value="Nueva Imperial"> <option value="Padre Las Casas"> <option value="Perquenco"> <option value="Pitrufquén"> <option value="Pucón"> <option value="Saavedra"> <option value="Teodoro Schmidt"> <option value="Toltén"> <option value="Vilcún"> <option value="Villarrica"> <option value="Cholchol"> <option value="Angol"> <option value="Collipulli"> <option value="Curacautín"> <option value="Ercilla"> <option value="Lonquimay"> <option value="Los Sauces"> <option value="Lumaco"> <option value="Purén"> <option value="Renaico"> <option value="Traiguén"> <option value="Victoria"> <option value="Puerto Montt"> <option value="Calbuco"> <option value="Cochamó"> <option value="Fresia"> <option value="Frutillar"> <option value="Los Muermos"> <option value="Llanquihue"> <option value="Maullín"> <option value="Puerto Varas"> <option value="Castro"> <option value="Ancud"> <option value="Chonchi"> <option value="Curaco de Vélez"> <option value="Dalcahue"> <option value="Puqueldón"> <option value="Queilén"> <option value="Quellón"> <option value="Quemchi"> <option value="Quinchao"> <option value="Osorno"> <option value="Puerto Octay"> <option value="Purranque"> <option value="Puyehue"> <option value="Río Negro"> <option value="San Juan de la Costa"> <option value="San Pablo"> <option value="Chaitén"> <option value="Futaleufú"> <option value="Hualaihué"> <option value="Palena"> <option value="Coihaique"> <option value="Lago Verde"> <option value="Aisén"> <option value="Cisnes"> <option value="Guaitecas"> <option value="Cochrane"> <option value="O Higgins"> <option value="Tortel"> <option value="Chile Chico"> <option value="Río Ibáñez"> <option value="Punta Arenas"> <option value="Laguna Blanca"> <option value="Río Verde"> <option value="San Gregorio"> <option value="Cabo de Hornos"> <option value="Antártica"> <option value="Porvenir"> <option value="Primavera"> <option value="Timaukel"> <option value="Natales"> <option value="Torres del Paine"> <option value="Santiago"> <option value="Cerrillos"> <option value="Cerro Navia"> <option value="Conchalí"> <option value="El Bosque"> <option value="Estación Central"> <option value="Huechuraba"> <option value="Independencia"> <option value="La Cisterna"> <option value="La Florida"> <option value="La Granja"> <option value="La Pintana"> <option value="La Reina"> <option value="Las Condes"> <option value="Lo Barnechea"> <option value="Lo Espejo"> <option value="Lo Prado"> <option value="Macul"> <option value="Maipú"> <option value="Ñuñoa"> <option value="Pedro Aguirre Cerda"> <option value="Peñalolén"> <option value="Providencia"> <option value="Pudahuel"> <option value="Quilicura"> <option value="Quinta Normal"> <option value="Recoleta"> <option value="Renca"> <option value="San Joaquín"> <option value="San Miguel"> <option value="San Ramón"> <option value="Vitacura"> <option value="Puente Alto"> <option value="Pirque"> <option value="San José de Maipo"> <option value="Colina"> <option value="Lampa"> <option value="Tiltil"> <option value="San Bernardo"> <option value="Buin"> <option value="Calera de Tango"> <option value="Paine"> <option value="Melipilla"> <option value="Alhué"> <option value="Curacaví"> <option value="María Pinto"> <option value="San Pedro"> <option value="Talagante"> <option value="El Monte"> <option value="Isla de Maipo"> <option value="Padre Hurtado"> <option value="Peñaflor"> <option value="Valdivia"> <option value="Corral"> <option value="Lanco"> <option value="Los Lagos"> <option value="Máfil"> <option value="Mariquina"> <option value="Paillaco"> <option value="Panguipulli"> <option value="La Unión"> <option value="Futrono"> <option value="Lago Ranco"> <option value="Río Bueno"> <option value="Arica"> <option value="Camarones"> <option value="Putre"> <option value="General Lagos"> <option value="Chillán"> <option value="Bulnes"> <option value="Chillán Viejo"> <option value="El Carmen"> <option value="Pemuco"> <option value="Pinto"> <option value="Quillón"> <option value="San Ignacio"> <option value="Yungay"> <option value="Quirihue"> <option value="Cobquecura"> <option value="Coelemu"> <option value="Ninhue"> <option value="Portezuelo"> <option value="Ranquil"> <option value="Treguaco"> <option value="San Carlos"> <option value="Coihueco"> <option value="Ñiquén"> <option value="San Fabián"> <option value="San Nicolás">  </datalist>',
  data: {trialid: 'DEMOGR_06', procedure: 'DEMOGR'}
};
DEMOGR.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica <B>tú</B> nivel de estudios</div>', options: ['&nbsp;Sin educación formal', '&nbsp;Básica incompleta', '&nbsp;Básica completa', '&nbsp;Media incompleta', '&nbsp;Media completa', '&nbsp;Centro de Formación Técnica o en Instituto Profesional incompleta', '&nbsp;Centro de Formación Técnica o en Instituto Profesional completa', '&nbsp;Universidad incompleta', '&nbsp;Universidad completa', '&nbsp;Postgrado incompleta', '&nbsp;Postgrado completa', '&nbsp;Magíster o Doctorado incompleta', '&nbsp;Magíster o Doctorado completa'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_07', procedure: 'DEMOGR'}
};
DEMOGR.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Qué estas estudiando?</div>', options: ['&nbsp;Artes', '&nbsp;Humanidades y Ciencias Sociales', '&nbsp;Ciencias / Ingeniería', '&nbsp;Ciencias de la salud', '&nbsp;Negocios / Comercio', '&nbsp;Otro'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_08', procedure: 'DEMOGR'}
};
DEMOGR.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">Indica el nombre completo de lo que estás estudiando</div>', type: 'text', range: [-Infinity, Infinity], required: true}],
  data: {trialid: 'DEMOGR_09', procedure: 'DEMOGR'}
};

var if_question09 = {
timeline: [question09],
conditional_function: function(){
  let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR_08'))['response'])['Q0']).trim();
 if((data) ==  'Universidad incompleta' | (data) ==  'Universidad completa' | (data) ==  'Postgrado incompleta' | (data) ==  'Postgrado completa' | (data) ==  'Magíster o Doctorado incompleta' | (data) ==  'Magíster o Doctorado completa'){
   return true;
   } else {
   return false;
  }
}
}

DEMOGR.push(if_question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Año completado de tus estudios</div>', options: ['&nbsp;Iniciada', '&nbsp;Primero', '&nbsp;Segundo', '&nbsp;Tercero', '&nbsp;Cuarto', '&nbsp;Quinto'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_10', procedure: 'DEMOGR'}
};
DEMOGR.push(question10);

var question11 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Elige del desplegable la institución educativa a la que asistes. En caso de que no aparezca, introduce el nombre.</div>', html: '<input name ="Q0" list="universidades" required><datalist id="universidades"><option value="Pontificia Universidad Católica de Chile (PUC)"> <option value="Universidad de Chile (UCHILE)"> <option value="Universidad de Santiago de Chile (USACH)"> <option value="Universidad Adolfo Ibáñez (UAI)"> <option value="Universidad Diego Portales (UDP)"> <option value="Universidad Alberto Hurtado"> <option value="Facultad Latinoamericana de Cs. Soc. FLACSO"> <option value="Academia Politécnica Militar"> <option value="Pontificia Universidad Católica de Valparaíso (PUCV)"> <option value="Universidad Academia de Humanismo Cristiano"> <option value="Universidad Adventista de Chile (UNACH)"> <option value="Universidad Arturo Prat (UNAP)"> <option value="Universidad Austral de Chile (UACH)"> <option value="Universidad Autónoma de Chile (UAS)"> <option value="Universidad Bernardo O Higgins (UBO)"> <option value="Universidad Bolivariana"> <option value="Universidad Católica de la Sma. Concepción (UCSC)"> <option value="Universidad Católica Cardenal Silva Henríquez (UCSH)"> <option value="Universidad Católica de Temuco (UCT)"> <option value="Universidad Católica del Maule (UCM)"> <option value="Universidad Católica del Norte (UCN)"> <option value="Universidad Central de Chile (UCENTRAL)"> <option value="Universidad Chileno - Británica de Cultura"> <option value="Universidad de Aconcagua"> <option value="Universidad de Antofagasta (UANTOF)"> <option value="Universidad de Arte y Cs. Sociales (UARCIS)"> <option value="Universidad de Artes, Cs. y Comunicación (UNIACC)"> <option value="Universidad de Atacama (UDA)"> <option value="Universidad de Ciencias de la Informática (UCINF)"> <option value="Universidad de Concepción (UDEC)"> <option value="Universidad de La Frontera (UFRO)"> <option value="Universidad de La Serena"> <option value="Universidad de Las Américas (UDLA)"> <option value="Universidad de Los Andes (UANDES)"> <option value="Universidad de Los Lagos"> <option value="Universidad de Magallanes (UMAG)"> <option value="Universidad de Playa Ancha de Cs. de la Educ. (UPLA)"> <option value="Universidad de Talca"> <option value="Universidad de Tarapacá (UTA)"> <option value="Universidad de Valparaíso (UV)"> <option value="Universidad de Viña del Mar (UVM)"> <option value="Universidad del Bío-Bío"> <option value="Universidad del Desarrollo (UDD)"> <option value="Universidad del Pacífico"> <option value="Universidad Finis Terrae"> <option value="Universidad Gabriela Mistral (UGM)"> <option value="Universidad Iberoamericana de Cs. y Tecnología (UNICIT)"> <option value="Universidad Internacional SEK (UISEK)"> <option value="Universidad La República (ULARE)"> <option value="Universidad Marítima de Chile"> <option value="Universidad Mayor"> <option value="Universidad Metropolitana de Ciencias de la Educación"> <option value="Universidad Miguel de Cervantes"> <option value="Universidad Nacional Andrés Bello (UNAB)"> <option value="Universidad Pedro de Valdivia (UPV)"> <option value="Universidad Regional San Marcos (URSM)"> <option value="Universidad San Sebastián (USS)"> <option value="Universidad Santo Tomás"> <option value="Universidad Técnica Federico Sta. María (USM)"> <option value="Universidad Tecnológica de Chile (UTC)"> <option value="Universidad Tecnológica Metropolitana (UTEM)"> </datalist>',
  data: {trialid: 'DEMOGR_11', procedure: 'DEMOGR'}
};
DEMOGR.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica el nivel de estudios de tu <B>madre</B></div>', options: ['&nbsp;Sin educación formal', '&nbsp;Básica incompleta', '&nbsp;Básica completa', '&nbsp;Media incompleta', '&nbsp;Media completa', '&nbsp;Centro de Formación Técnica o en Instituto Profesional incompleta', '&nbsp;Centro de Formación Técnica o en Instituto Profesional completa', '&nbsp;Universidad incompleta', '&nbsp;Universidad completa', '&nbsp;Postgrado incompleta', '&nbsp;Postgrado completa', '&nbsp;Magíster o Doctorado incompleta', '&nbsp;Magíster o Doctorado completa'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_12', procedure: 'DEMOGR'}
};
DEMOGR.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">Indica el nivel de estudios de tu <B>padre</B></div>', options: ['&nbsp;Sin educación formal', '&nbsp;Básica incompleta', '&nbsp;Básica completa', '&nbsp;Media incompleta', '&nbsp;Media completa', '&nbsp;Centro de Formación Técnica o en Instituto Profesional incompleta', '&nbsp;Centro de Formación Técnica o en Instituto Profesional completa', '&nbsp;Universidad incompleta', '&nbsp;Universidad completa', '&nbsp;Postgrado incompleta', '&nbsp;Postgrado completa', '&nbsp;Magíster o Doctorado incompleta', '&nbsp;Magíster o Doctorado completa'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_13', procedure: 'DEMOGR'}
};
DEMOGR.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: '<div class="justified">¿Qué tipo de seguro de salud tienes?</div>', options: ['&nbsp;Isapre', '&nbsp;FONASA A', '&nbsp;FONASA B', '&nbsp;FONASA C', '&nbsp;FONASA D', '&nbsp;Otros'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'DEMOGR_14', procedure: 'DEMOGR'}
};
DEMOGR.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: '<div class="justified">¿Alguna vez has estado embarazada?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'DEMOGR_15', procedure: 'DEMOGR'}
};
DEMOGR.push(question15);

var question16 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: '<div class="justified">¿Alguna vez has tenido un parto vaginal o cesarea?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'DEMOGR_16', procedure: 'DEMOGR'}
};
DEMOGR.push(question16);

var question17 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: '<div class="justified">¿Quieres tener hijos en el futuro?</div>', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No se'], required: true,  random_options: false, horizontal: true}],
  data: {trialid: 'DEMOGR_17', procedure: 'DEMOGR'}
};
DEMOGR.push(question17);

var question18 = {
  type: 'survey-text',
  questions: [{prompt: '<div class="justified">¿Cuántos hijos(as) te gustaría tener? (0, 1, 2, 3...)</div>', type: 'number', range: [0, Infinity], required: true, error_text: 'Tienes que introducir un número'}],
  data: {trialid: 'DEMOGR_18', procedure: 'DEMOGR'}
};
DEMOGR.push(question18);

var question19 = {
  type: 'survey-multi-select',
  questions: [{prompt: '<div class="justified">Indica si alguna de las siguientes personas o grupos ha tenido una cesarea (puedes marcar más de una opción):</div>', options: ['&nbsp;Madre', '&nbsp;Hermanas', '&nbsp;Amigas cercanas'], required: true, name: 'Q0', randomize_question_order: false, horizontal: true}],
  data: {trialid: 'DEMOGR_19', procedure: 'DEMOGR'}
};
DEMOGR.push(question19);

DEMOGR.unshift(instruction_screen_experiment);
DEMOGR.push.apply(questions, DEMOGR)
/*
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions.unshift({
    type: 'fullscreen',
    message: '<p></p>',
    button_label: 'Full screen',
    delay_after: 0,
    fullscreen_mode: true
  });
}
*/
questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'DEMOGR'}).json();
      }
      saveData(data, online, 'DEMOGR');
    },
    procedure: 'DEMOGR'
});
