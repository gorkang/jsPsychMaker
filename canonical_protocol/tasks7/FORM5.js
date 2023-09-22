/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('FORM5') );
FORM5 = [];    //temporal timeline

var question000 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Por favor, ingrese su ID de usuario otorgada por Prolific</div>', required: true}],
  data: {trialid: 'FORM5_000', procedure: 'FORM5'}
};
FORM5.push(question000);

var question00 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Indique el país de su nacionalidad</div>', required: true}],
  data: {trialid: 'FORM5_00', procedure: 'FORM5'}
};
FORM5.push(question00);

var question01 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Para continuar ingrese su rut Completo (sin puntos ni guión y con dígito verificador). <br> Si su rut termina con K, reemplácelo por un 0</div>', input_type: 'number', min: 10000000, max: 999999999, required: true}],
  data: {trialid: 'FORM5_01', procedure: 'FORM5'},
  on_load: function () {
    input_reload();
  }
};
FORM5.push(question01);

var question02 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Indica tu correo electrónico personal</div>', html: '<input name ="Q0" type="email" required>',
  data: {trialid: 'FORM5_02', procedure: 'FORM5'}
};
FORM5.push(question02);

var question03 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Nombre completo</div>', required: true}],
  data: {trialid: 'FORM5_03', procedure: 'FORM5'}
};
FORM5.push(question03);

var question04 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Edad</div>', input_type: 'number', min: 0, max: 120, required: true}],
  data: {trialid: 'FORM5_04', procedure: 'FORM5'},
  on_load: function () {
    input_reload();
  }
};
FORM5.push(question04);

var question05 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">Género</div>', options: ['&nbsp;Femenino', '&nbsp;Masculino', '&nbsp;No binario'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FORM5_05', procedure: 'FORM5'}
};
FORM5.push(question05);

var question06 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Nivel educacional en años de estudio <BR><BR> (Considere hasta el año realizado. Por ejemplo, si terminó 4to medio y no realizó nada más, poner 12 años. Si realizo dos años de formación técnica después de terminar 4to medio, poner 14 años. Si llegó solo hasta 3er medio, poner 10 ya que terminó 2do medio. etc.)</div>', input_type: 'number', min: 0, max: 50, required: true}],
  data: {trialid: 'FORM5_06', procedure: 'FORM5'},
  on_load: function () {
    input_reload();
  }
};
FORM5.push(question06);

var question07 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Elige del desplegable comuna de residencia.</div>', html: '<input name ="Q0" list="comunas" required><datalist id="comunas"><option value="Iquique"> <option value="Alto Hospicio"> <option value="Pozo Almonte"> <option value="Camiña"> <option value="Colchane"> <option value="Huara"> <option value="Pica"> <option value="Antofagasta"> <option value="Mejillones"> <option value="Sierra Gorda"> <option value="Taltal"> <option value="Calama"> <option value="Ollagüe"> <option value="San Pedro de Atacama"> <option value="Tocopilla"> <option value="María Elena"> <option value="Copiapó"> <option value="Caldera"> <option value="Tierra Amarilla"> <option value="Chañaral"> <option value="Diego de Almagro"> <option value="Vallenar"> <option value="Alto del Carmen"> <option value="Freirina"> <option value="Huasco"> <option value="La Serena"> <option value="Coquimbo"> <option value="Andacollo"> <option value="La Higuera"> <option value="Paiguano"> <option value="Vicuña"> <option value="Illapel"> <option value="Canela"> <option value="Los Vilos"> <option value="Salamanca"> <option value="Ovalle"> <option value="Combarbalá"> <option value="Monte Patria"> <option value="Punitaqui"> <option value="Río Hurtado"> <option value="Valparaíso"> <option value="Casablanca"> <option value="Concón"> <option value="Juan Fernández"> <option value="Puchuncaví"> <option value="Quintero"> <option value="Viña del Mar"> <option value="Isla de Pascua"> <option value="Los Andes"> <option value="Calle Larga"> <option value="Rinconada"> <option value="San Esteban"> <option value="La Ligua"> <option value="Cabildo"> <option value="Papudo"> <option value="Petorca"> <option value="Zapallar"> <option value="Quillota"> <option value="Calera"> <option value="Hijuelas"> <option value="La Cruz"> <option value="Nogales"> <option value="San Antonio"> <option value="Algarrobo"> <option value="Cartagena"> <option value="El Quisco"> <option value="El Tabo"> <option value="Santo Domingo"> <option value="San Felipe"> <option value="Catemu"> <option value="Llaillay"> <option value="Panquehue"> <option value="Putaendo"> <option value="Santa María"> <option value="Quilpué"> <option value="Limache"> <option value="Olmué"> <option value="Villa Alemana"> <option value="Rancagua"> <option value="Codegua"> <option value="Coinco"> <option value="Coltauco"> <option value="Doñihue"> <option value="Graneros"> <option value="Las Cabras"> <option value="Machalí"> <option value="Malloa"> <option value="Mostazal"> <option value="Olivar"> <option value="Peumo"> <option value="Pichidegua"> <option value="Quinta de Tilcoco"> <option value="Rengo"> <option value="Requínoa"> <option value="San Vicente"> <option value="Pichilemu"> <option value="La Estrella"> <option value="Litueche"> <option value="Marchihue"> <option value="Navidad"> <option value="Paredones"> <option value="San Fernando"> <option value="Chépica"> <option value="Chimbarongo"> <option value="Lolol"> <option value="Nancagua"> <option value="Palmilla"> <option value="Peralillo"> <option value="Placilla"> <option value="Pumanque"> <option value="Santa Cruz"> <option value="Talca"> <option value="Constitución"> <option value="Curepto"> <option value="Empedrado"> <option value="Maule"> <option value="Pelarco"> <option value="Pencahue"> <option value="Río Claro"> <option value="San Clemente"> <option value="San Rafael"> <option value="Cauquenes"> <option value="Chanco"> <option value="Pelluhue"> <option value="Curicó"> <option value="Hualañé"> <option value="Licantén"> <option value="Molina"> <option value="Rauco"> <option value="Romeral"> <option value="Sagrada Familia"> <option value="Teno"> <option value="Vichuquén"> <option value="Linares"> <option value="Colbún"> <option value="Longaví"> <option value="Parral"> <option value="Retiro"> <option value="San Javier"> <option value="Villa Alegre"> <option value="Yerbas Buenas"> <option value="Concepción"> <option value="Coronel"> <option value="Chiguayante"> <option value="Florida"> <option value="Hualqui"> <option value="Lota"> <option value="Penco"> <option value="San Pedro de la Paz"> <option value="Santa Juana"> <option value="Talcahuano"> <option value="Tomé"> <option value="Hualpén"> <option value="Lebu"> <option value="Arauco"> <option value="Cañete"> <option value="Contulmo"> <option value="Curanilahue"> <option value="Los Alamos"> <option value="Tirúa"> <option value="Los Angeles"> <option value="Antuco"> <option value="Cabrero"> <option value="Laja"> <option value="Mulchén"> <option value="Nacimiento"> <option value="Negrete"> <option value="Quilaco"> <option value="Quilleco"> <option value="San Rosendo"> <option value="Santa Bárbara"> <option value="Tucapel"> <option value="Yumbel"> <option value="Alto Biobío"> <option value="Temuco"> <option value="Carahue"> <option value="Cunco"> <option value="Curarrehue"> <option value="Freire"> <option value="Galvarino"> <option value="Gorbea"> <option value="Lautaro"> <option value="Loncoche"> <option value="Melipeuco"> <option value="Nueva Imperial"> <option value="Padre Las Casas"> <option value="Perquenco"> <option value="Pitrufquén"> <option value="Pucón"> <option value="Saavedra"> <option value="Teodoro Schmidt"> <option value="Toltén"> <option value="Vilcún"> <option value="Villarrica"> <option value="Cholchol"> <option value="Angol"> <option value="Collipulli"> <option value="Curacautín"> <option value="Ercilla"> <option value="Lonquimay"> <option value="Los Sauces"> <option value="Lumaco"> <option value="Purén"> <option value="Renaico"> <option value="Traiguén"> <option value="Victoria"> <option value="Puerto Montt"> <option value="Calbuco"> <option value="Cochamó"> <option value="Fresia"> <option value="Frutillar"> <option value="Los Muermos"> <option value="Llanquihue"> <option value="Maullín"> <option value="Puerto Varas"> <option value="Castro"> <option value="Ancud"> <option value="Chonchi"> <option value="Curaco de Vélez"> <option value="Dalcahue"> <option value="Puqueldón"> <option value="Queilén"> <option value="Quellón"> <option value="Quemchi"> <option value="Quinchao"> <option value="Osorno"> <option value="Puerto Octay"> <option value="Purranque"> <option value="Puyehue"> <option value="Río Negro"> <option value="San Juan de la Costa"> <option value="San Pablo"> <option value="Chaitén"> <option value="Futaleufú"> <option value="Hualaihué"> <option value="Palena"> <option value="Coihaique"> <option value="Lago Verde"> <option value="Aisén"> <option value="Cisnes"> <option value="Guaitecas"> <option value="Cochrane"> <option value="O Higgins"> <option value="Tortel"> <option value="Chile Chico"> <option value="Río Ibáñez"> <option value="Punta Arenas"> <option value="Laguna Blanca"> <option value="Río Verde"> <option value="San Gregorio"> <option value="Cabo de Hornos"> <option value="Antártica"> <option value="Porvenir"> <option value="Primavera"> <option value="Timaukel"> <option value="Natales"> <option value="Torres del Paine"> <option value="Santiago"> <option value="Cerrillos"> <option value="Cerro Navia"> <option value="Conchalí"> <option value="El Bosque"> <option value="Estación Central"> <option value="Huechuraba"> <option value="Independencia"> <option value="La Cisterna"> <option value="La Florida"> <option value="La Granja"> <option value="La Pintana"> <option value="La Reina"> <option value="Las Condes"> <option value="Lo Barnechea"> <option value="Lo Espejo"> <option value="Lo Prado"> <option value="Macul"> <option value="Maipú"> <option value="Ñuñoa"> <option value="Pedro Aguirre Cerda"> <option value="Peñalolén"> <option value="Providencia"> <option value="Pudahuel"> <option value="Quilicura"> <option value="Quinta Normal"> <option value="Recoleta"> <option value="Renca"> <option value="San Joaquín"> <option value="San Miguel"> <option value="San Ramón"> <option value="Vitacura"> <option value="Puente Alto"> <option value="Pirque"> <option value="San José de Maipo"> <option value="Colina"> <option value="Lampa"> <option value="Tiltil"> <option value="San Bernardo"> <option value="Buin"> <option value="Calera de Tango"> <option value="Paine"> <option value="Melipilla"> <option value="Alhué"> <option value="Curacaví"> <option value="María Pinto"> <option value="San Pedro"> <option value="Talagante"> <option value="El Monte"> <option value="Isla de Maipo"> <option value="Padre Hurtado"> <option value="Peñaflor"> <option value="Valdivia"> <option value="Corral"> <option value="Lanco"> <option value="Los Lagos"> <option value="Máfil"> <option value="Mariquina"> <option value="Paillaco"> <option value="Panguipulli"> <option value="La Unión"> <option value="Futrono"> <option value="Lago Ranco"> <option value="Río Bueno"> <option value="Arica"> <option value="Camarones"> <option value="Putre"> <option value="General Lagos"> <option value="Chillán"> <option value="Bulnes"> <option value="Chillán Viejo"> <option value="El Carmen"> <option value="Pemuco"> <option value="Pinto"> <option value="Quillón"> <option value="San Ignacio"> <option value="Yungay"> <option value="Quirihue"> <option value="Cobquecura"> <option value="Coelemu"> <option value="Ninhue"> <option value="Portezuelo"> <option value="Ranquil"> <option value="Treguaco"> <option value="San Carlos"> <option value="Coihueco"> <option value="Ñiquén"> <option value="San Fabián"> <option value="San Nicolás">  </datalist>',
  data: {trialid: 'FORM5_07', procedure: 'FORM5'}
};
FORM5.push(question07);

var question08 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Introduce tu número de celular con el formato 912345678 (opcional)</div>', input_type: 'number', min: 900000000, max: 9999999999, required: false}],
  data: {trialid: 'FORM5_08', procedure: 'FORM5'},
  on_load: function () {
    input_reload();
  }
};
FORM5.push(question08);

var question09 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">He sido diagnosticado con alguna enfermedad psiquiátrica.</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FORM5_09', procedure: 'FORM5'}
};
FORM5.push(question09);

var question10 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Indicar el año en que usted fue diagnosticado y tipo de diagnóstico (por ejemplo: 2018 ansiedad, 2019 depresión, 2020 esquizofrenia)</div>', required: true}],
  data: {trialid: 'FORM5_10', procedure: 'FORM5'}
};

var if_question10 = {
  timeline: [question10],
  data: {trialid: 'FORM5_10_if', procedure: 'FORM5'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'FORM5_09'))['response']['Q0']).toString().trim();
    if((data) ==  'Sí'){
      return true;
    } else {
      return false;
    }
  }
}
FORM5.push(if_question10);

var question11 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Se encuentra actualmente bajo algún tratamiento psiquiátrico? (ej: usa medicación; está bajo terapia psiquiátrica y/o control médico)</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FORM5_11', procedure: 'FORM5'}
};
FORM5.push(question11);

var question12 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">¿Qué tipo de tratamiento?</div>', required: true}],
  data: {trialid: 'FORM5_12', procedure: 'FORM5'}
};

var if_question12 = {
  timeline: [question12],
  data: {trialid: 'FORM5_12_if', procedure: 'FORM5'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'FORM5_11'))['response']['Q0']).toString().trim();
    if((data) ==  'Sí'){
      return true;
    } else {
      return false;
    }
  }
}
FORM5.push(if_question12);

var question13 = {
  type: jsPsychSurveyMultiChoice,
  questions: [{prompt: '<div class="justified">¿Ha tenido que acudir por ayuda especializada, o tiene la necesidad de buscarla, por consumo problemático de alcohol y/o drogas?</div>', options: ['&nbsp;Sí', '&nbsp;No'], required: true,  random_options: false, horizontal: false}],
  data: {trialid: 'FORM5_13', procedure: 'FORM5'}
};
FORM5.push(question13);

var question14 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">¿Qué tipo de droga ha consumido?</div>', required: true}],
  data: {trialid: 'FORM5_14', procedure: 'FORM5'}
};

var if_question14 = {
  timeline: [question14],
  data: {trialid: 'FORM5_14_if', procedure: 'FORM5'},
  conditional_function: function(){
    let data = ((jsPsych.data.get().values().find(x => x.trialid === 'FORM5_13'))['response']['Q0']).toString().trim();
    if((data) ==  'Sí'){
      return true;
    } else {
      return false;
    }
  }
}
FORM5.push(if_question14);

questions.push.apply(questions, FORM5)

call_function("FORM5");
