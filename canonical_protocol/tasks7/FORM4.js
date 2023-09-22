/**
 * CSCN lab
/**
This document was made with test_maker
*/

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('FORM4') );

FORM4 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: [`Contesta a las siguientes 5 preguntas de manera honesta. <BR><BR>Recuerda que tus datos son confidenciales.<BR><BR>`],
  data: {trialid: 'Instructions', procedure: 'FORM4'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Indica tu edad</div>', input_type: 'number', min: 1, max: 110, required: true, error_text: 'Tiene que ser un número entre 1 y 110'}],
  data: {trialid: 'FORM4_01', procedure: 'FORM4'},
  on_load: function () {
    input_reload();
  }
};
FORM4.push(question01);

var question02 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Indica tu género</div>', options: ['&nbsp;Femenino', '&nbsp;Masculino', '&nbsp;No binario'], required: true,  random_options: true, horizontal: false}],
  data: {trialid: 'FORM4_02', procedure: 'FORM4'}
};
FORM4.push(question02);

var question03 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Indica tu correo electrónico personal</div>', html: '<input name ="Q0" type="email" required oninvalid="this.setCustomValidity(\'Necesitamos un email válido para poder contactar contigo en caso de que seas seleccionada\')" oninput="setCustomValidity(\'\')"></input>',
  data: {trialid: 'FORM4_03', procedure: 'FORM4'}
};
FORM4.push(question03);

var question04 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Alguna vez has tenido un parto vaginal o cesarea?</div>', options: ['&nbsp;Si', '&nbsp;No'], required: true,  random_options: true, horizontal: true}],
  data: {trialid: 'FORM4_04', procedure: 'FORM4'}
};
FORM4.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Quieres tener hijos en el futuro?</div>', options: ['&nbsp;Si', '&nbsp;No', '&nbsp;No se'], required: true,  random_options: true, horizontal: true}],
  data: {trialid: 'FORM4_05', procedure: 'FORM4'}
};
FORM4.push(question05);

var question06 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Elige del desplegable tu comuna de residencia.</div>', html: '<input name ="Q0" list="comunas" required><datalist id="comunas"><option value="Iquique"> <option value="Alto Hospicio"> <option value="Pozo Almonte"> <option value="Camiña"> <option value="Colchane"> <option value="Huara"> <option value="Pica"> <option value="Antofagasta"> <option value="Mejillones"> <option value="Sierra Gorda"> <option value="Taltal"> <option value="Calama"> <option value="Ollagüe"> <option value="San Pedro de Atacama"> <option value="Tocopilla"> <option value="María Elena"> <option value="Copiapó"> <option value="Caldera"> <option value="Tierra Amarilla"> <option value="Chañaral"> <option value="Diego de Almagro"> <option value="Vallenar"> <option value="Alto del Carmen"> <option value="Freirina"> <option value="Huasco"> <option value="La Serena"> <option value="Coquimbo"> <option value="Andacollo"> <option value="La Higuera"> <option value="Paiguano"> <option value="Vicuña"> <option value="Illapel"> <option value="Canela"> <option value="Los Vilos"> <option value="Salamanca"> <option value="Ovalle"> <option value="Combarbalá"> <option value="Monte Patria"> <option value="Punitaqui"> <option value="Río Hurtado"> <option value="Valparaíso"> <option value="Casablanca"> <option value="Concón"> <option value="Juan Fernández"> <option value="Puchuncaví"> <option value="Quintero"> <option value="Viña del Mar"> <option value="Isla de Pascua"> <option value="Los Andes"> <option value="Calle Larga"> <option value="Rinconada"> <option value="San Esteban"> <option value="La Ligua"> <option value="Cabildo"> <option value="Papudo"> <option value="Petorca"> <option value="Zapallar"> <option value="Quillota"> <option value="Calera"> <option value="Hijuelas"> <option value="La Cruz"> <option value="Nogales"> <option value="San Antonio"> <option value="Algarrobo"> <option value="Cartagena"> <option value="El Quisco"> <option value="El Tabo"> <option value="Santo Domingo"> <option value="San Felipe"> <option value="Catemu"> <option value="Llaillay"> <option value="Panquehue"> <option value="Putaendo"> <option value="Santa María"> <option value="Quilpué"> <option value="Limache"> <option value="Olmué"> <option value="Villa Alemana"> <option value="Rancagua"> <option value="Codegua"> <option value="Coinco"> <option value="Coltauco"> <option value="Doñihue"> <option value="Graneros"> <option value="Las Cabras"> <option value="Machalí"> <option value="Malloa"> <option value="Mostazal"> <option value="Olivar"> <option value="Peumo"> <option value="Pichidegua"> <option value="Quinta de Tilcoco"> <option value="Rengo"> <option value="Requínoa"> <option value="San Vicente"> <option value="Pichilemu"> <option value="La Estrella"> <option value="Litueche"> <option value="Marchihue"> <option value="Navidad"> <option value="Paredones"> <option value="San Fernando"> <option value="Chépica"> <option value="Chimbarongo"> <option value="Lolol"> <option value="Nancagua"> <option value="Palmilla"> <option value="Peralillo"> <option value="Placilla"> <option value="Pumanque"> <option value="Santa Cruz"> <option value="Talca"> <option value="Constitución"> <option value="Curepto"> <option value="Empedrado"> <option value="Maule"> <option value="Pelarco"> <option value="Pencahue"> <option value="Río Claro"> <option value="San Clemente"> <option value="San Rafael"> <option value="Cauquenes"> <option value="Chanco"> <option value="Pelluhue"> <option value="Curicó"> <option value="Hualañé"> <option value="Licantén"> <option value="Molina"> <option value="Rauco"> <option value="Romeral"> <option value="Sagrada Familia"> <option value="Teno"> <option value="Vichuquén"> <option value="Linares"> <option value="Colbún"> <option value="Longaví"> <option value="Parral"> <option value="Retiro"> <option value="San Javier"> <option value="Villa Alegre"> <option value="Yerbas Buenas"> <option value="Concepción"> <option value="Coronel"> <option value="Chiguayante"> <option value="Florida"> <option value="Hualqui"> <option value="Lota"> <option value="Penco"> <option value="San Pedro de la Paz"> <option value="Santa Juana"> <option value="Talcahuano"> <option value="Tomé"> <option value="Hualpén"> <option value="Lebu"> <option value="Arauco"> <option value="Cañete"> <option value="Contulmo"> <option value="Curanilahue"> <option value="Los Alamos"> <option value="Tirúa"> <option value="Los Angeles"> <option value="Antuco"> <option value="Cabrero"> <option value="Laja"> <option value="Mulchén"> <option value="Nacimiento"> <option value="Negrete"> <option value="Quilaco"> <option value="Quilleco"> <option value="San Rosendo"> <option value="Santa Bárbara"> <option value="Tucapel"> <option value="Yumbel"> <option value="Alto Biobío"> <option value="Temuco"> <option value="Carahue"> <option value="Cunco"> <option value="Curarrehue"> <option value="Freire"> <option value="Galvarino"> <option value="Gorbea"> <option value="Lautaro"> <option value="Loncoche"> <option value="Melipeuco"> <option value="Nueva Imperial"> <option value="Padre Las Casas"> <option value="Perquenco"> <option value="Pitrufquén"> <option value="Pucón"> <option value="Saavedra"> <option value="Teodoro Schmidt"> <option value="Toltén"> <option value="Vilcún"> <option value="Villarrica"> <option value="Cholchol"> <option value="Angol"> <option value="Collipulli"> <option value="Curacautín"> <option value="Ercilla"> <option value="Lonquimay"> <option value="Los Sauces"> <option value="Lumaco"> <option value="Purén"> <option value="Renaico"> <option value="Traiguén"> <option value="Victoria"> <option value="Puerto Montt"> <option value="Calbuco"> <option value="Cochamó"> <option value="Fresia"> <option value="Frutillar"> <option value="Los Muermos"> <option value="Llanquihue"> <option value="Maullín"> <option value="Puerto Varas"> <option value="Castro"> <option value="Ancud"> <option value="Chonchi"> <option value="Curaco de Vélez"> <option value="Dalcahue"> <option value="Puqueldón"> <option value="Queilén"> <option value="Quellón"> <option value="Quemchi"> <option value="Quinchao"> <option value="Osorno"> <option value="Puerto Octay"> <option value="Purranque"> <option value="Puyehue"> <option value="Río Negro"> <option value="San Juan de la Costa"> <option value="San Pablo"> <option value="Chaitén"> <option value="Futaleufú"> <option value="Hualaihué"> <option value="Palena"> <option value="Coihaique"> <option value="Lago Verde"> <option value="Aisén"> <option value="Cisnes"> <option value="Guaitecas"> <option value="Cochrane"> <option value="O Higgins"> <option value="Tortel"> <option value="Chile Chico"> <option value="Río Ibáñez"> <option value="Punta Arenas"> <option value="Laguna Blanca"> <option value="Río Verde"> <option value="San Gregorio"> <option value="Cabo de Hornos"> <option value="Antártica"> <option value="Porvenir"> <option value="Primavera"> <option value="Timaukel"> <option value="Natales"> <option value="Torres del Paine"> <option value="Santiago"> <option value="Cerrillos"> <option value="Cerro Navia"> <option value="Conchalí"> <option value="El Bosque"> <option value="Estación Central"> <option value="Huechuraba"> <option value="Independencia"> <option value="La Cisterna"> <option value="La Florida"> <option value="La Granja"> <option value="La Pintana"> <option value="La Reina"> <option value="Las Condes"> <option value="Lo Barnechea"> <option value="Lo Espejo"> <option value="Lo Prado"> <option value="Macul"> <option value="Maipú"> <option value="Ñuñoa"> <option value="Pedro Aguirre Cerda"> <option value="Peñalolén"> <option value="Providencia"> <option value="Pudahuel"> <option value="Quilicura"> <option value="Quinta Normal"> <option value="Recoleta"> <option value="Renca"> <option value="San Joaquín"> <option value="San Miguel"> <option value="San Ramón"> <option value="Vitacura"> <option value="Puente Alto"> <option value="Pirque"> <option value="San José de Maipo"> <option value="Colina"> <option value="Lampa"> <option value="Tiltil"> <option value="San Bernardo"> <option value="Buin"> <option value="Calera de Tango"> <option value="Paine"> <option value="Melipilla"> <option value="Alhué"> <option value="Curacaví"> <option value="María Pinto"> <option value="San Pedro"> <option value="Talagante"> <option value="El Monte"> <option value="Isla de Maipo"> <option value="Padre Hurtado"> <option value="Peñaflor"> <option value="Valdivia"> <option value="Corral"> <option value="Lanco"> <option value="Los Lagos"> <option value="Máfil"> <option value="Mariquina"> <option value="Paillaco"> <option value="Panguipulli"> <option value="La Unión"> <option value="Futrono"> <option value="Lago Ranco"> <option value="Río Bueno"> <option value="Arica"> <option value="Camarones"> <option value="Putre"> <option value="General Lagos"> <option value="Chillán"> <option value="Bulnes"> <option value="Chillán Viejo"> <option value="El Carmen"> <option value="Pemuco"> <option value="Pinto"> <option value="Quillón"> <option value="San Ignacio"> <option value="Yungay"> <option value="Quirihue"> <option value="Cobquecura"> <option value="Coelemu"> <option value="Ninhue"> <option value="Portezuelo"> <option value="Ranquil"> <option value="Treguaco"> <option value="San Carlos"> <option value="Coihueco"> <option value="Ñiquén"> <option value="San Fabián"> <option value="San Nicolás">  </datalist>',
  data: {trialid: 'FORM4_06', procedure: 'FORM4'}
};
FORM4.push(question06);

FORM4.unshift(instruction_screen_experiment);
FORM4.push.apply(questions, FORM4)

call_function("FORM4");
