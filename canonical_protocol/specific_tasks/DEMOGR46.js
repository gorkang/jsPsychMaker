/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR46') );
DEMOGR46 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '1. Información personal:' +'</p>'],
  data: {trialid: 'instructions_001', procedure: 'DEMOGR46'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Nombre Completo (opcional):</div>", type: 'text', required: false}],
  data: {trialid: 'DEMOGR46_001', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question001);

var question002 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Correo Electrónico (opcional):</div>", type: 'email', required: false}],
  data: {trialid: 'DEMOGR46_002', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question002);

var question003 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Fecha de nacimiento:</div>", type: 'date', required: true}],
  data: {trialid: 'DEMOGR46_003', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question003);

var question004 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Edad:</div>", type: 'number', required: true, range: [18, 100]}],
  data: {trialid: 'DEMOGR46_004', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Sexo biológico (insertar explicacion):', options: ['&nbsp;Hombre', '&nbsp;Mujer'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_005', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Género (insertar explicacion):', options: ['&nbsp;Masculino', '&nbsp;Femenino', '&nbsp;Otro'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_006', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question006);

var question007 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique su género:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_007', procedure: 'DEMOGR46'}
};

var if_question007 = {
  timeline: [question007],
  data: {trialid: 'DEMOGR46_007_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_006'))["response"])["Q0"]).trim();
    if(data == 'Otro'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question007);

var question008 = {
  type: 'survey-multi-select',
  questions: [{prompt: '¿Cómo calificarías tu ciclo menstrual?', options: ['&nbsp;Regular', '&nbsp;Irregular ', '&nbsp;Doloroso', '&nbsp;Con poco dolor', '&nbsp;No tengo ciclo menstrual'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_008', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'País de residencia:', options: ['&nbsp;Chile', '&nbsp;Argentina', '&nbsp;España'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_009', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question009);

var question10 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Comuna de residencia:</div>', html: '<input name ="Q0" list="comunas" required><datalist id="comunas"><option value="Iquique"> <option value="Alto Hospicio"> <option value="Pozo Almonte"> <option value="Camiña"> <option value="Colchane"> <option value="Huara"> <option value="Pica"> <option value="Antofagasta"> <option value="Mejillones"> <option value="Sierra Gorda"> <option value="Taltal"> <option value="Calama"> <option value="Ollagüe"> <option value="San Pedro de Atacama"> <option value="Tocopilla"> <option value="María Elena"> <option value="Copiapó"> <option value="Caldera"> <option value="Tierra Amarilla"> <option value="Chañaral"> <option value="Diego de Almagro"> <option value="Vallenar"> <option value="Alto del Carmen"> <option value="Freirina"> <option value="Huasco"> <option value="La Serena"> <option value="Coquimbo"> <option value="Andacollo"> <option value="La Higuera"> <option value="Paiguano"> <option value="Vicuña"> <option value="Illapel"> <option value="Canela"> <option value="Los Vilos"> <option value="Salamanca"> <option value="Ovalle"> <option value="Combarbalá"> <option value="Monte Patria"> <option value="Punitaqui"> <option value="Río Hurtado"> <option value="Valparaíso"> <option value="Casablanca"> <option value="Concón"> <option value="Juan Fernández"> <option value="Puchuncaví"> <option value="Quintero"> <option value="Viña del Mar"> <option value="Isla de Pascua"> <option value="Los Andes"> <option value="Calle Larga"> <option value="Rinconada"> <option value="San Esteban"> <option value="La Ligua"> <option value="Cabildo"> <option value="Papudo"> <option value="Petorca"> <option value="Zapallar"> <option value="Quillota"> <option value="Calera"> <option value="Hijuelas"> <option value="La Cruz"> <option value="Nogales"> <option value="San Antonio"> <option value="Algarrobo"> <option value="Cartagena"> <option value="El Quisco"> <option value="El Tabo"> <option value="Santo Domingo"> <option value="San Felipe"> <option value="Catemu"> <option value="Llaillay"> <option value="Panquehue"> <option value="Putaendo"> <option value="Santa María"> <option value="Quilpué"> <option value="Limache"> <option value="Olmué"> <option value="Villa Alemana"> <option value="Rancagua"> <option value="Codegua"> <option value="Coinco"> <option value="Coltauco"> <option value="Doñihue"> <option value="Graneros"> <option value="Las Cabras"> <option value="Machalí"> <option value="Malloa"> <option value="Mostazal"> <option value="Olivar"> <option value="Peumo"> <option value="Pichidegua"> <option value="Quinta de Tilcoco"> <option value="Rengo"> <option value="Requínoa"> <option value="San Vicente"> <option value="Pichilemu"> <option value="La Estrella"> <option value="Litueche"> <option value="Marchihue"> <option value="Navidad"> <option value="Paredones"> <option value="San Fernando"> <option value="Chépica"> <option value="Chimbarongo"> <option value="Lolol"> <option value="Nancagua"> <option value="Palmilla"> <option value="Peralillo"> <option value="Placilla"> <option value="Pumanque"> <option value="Santa Cruz"> <option value="Talca"> <option value="Constitución"> <option value="Curepto"> <option value="Empedrado"> <option value="Maule"> <option value="Pelarco"> <option value="Pencahue"> <option value="Río Claro"> <option value="San Clemente"> <option value="San Rafael"> <option value="Cauquenes"> <option value="Chanco"> <option value="Pelluhue"> <option value="Curicó"> <option value="Hualañé"> <option value="Licantén"> <option value="Molina"> <option value="Rauco"> <option value="Romeral"> <option value="Sagrada Familia"> <option value="Teno"> <option value="Vichuquén"> <option value="Linares"> <option value="Colbún"> <option value="Longaví"> <option value="Parral"> <option value="Retiro"> <option value="San Javier"> <option value="Villa Alegre"> <option value="Yerbas Buenas"> <option value="Concepción"> <option value="Coronel"> <option value="Chiguayante"> <option value="Florida"> <option value="Hualqui"> <option value="Lota"> <option value="Penco"> <option value="San Pedro de la Paz"> <option value="Santa Juana"> <option value="Talcahuano"> <option value="Tomé"> <option value="Hualpén"> <option value="Lebu"> <option value="Arauco"> <option value="Cañete"> <option value="Contulmo"> <option value="Curanilahue"> <option value="Los Alamos"> <option value="Tirúa"> <option value="Los Angeles"> <option value="Antuco"> <option value="Cabrero"> <option value="Laja"> <option value="Mulchén"> <option value="Nacimiento"> <option value="Negrete"> <option value="Quilaco"> <option value="Quilleco"> <option value="San Rosendo"> <option value="Santa Bárbara"> <option value="Tucapel"> <option value="Yumbel"> <option value="Alto Biobío"> <option value="Temuco"> <option value="Carahue"> <option value="Cunco"> <option value="Curarrehue"> <option value="Freire"> <option value="Galvarino"> <option value="Gorbea"> <option value="Lautaro"> <option value="Loncoche"> <option value="Melipeuco"> <option value="Nueva Imperial"> <option value="Padre Las Casas"> <option value="Perquenco"> <option value="Pitrufquén"> <option value="Pucón"> <option value="Saavedra"> <option value="Teodoro Schmidt"> <option value="Toltén"> <option value="Vilcún"> <option value="Villarrica"> <option value="Cholchol"> <option value="Angol"> <option value="Collipulli"> <option value="Curacautín"> <option value="Ercilla"> <option value="Lonquimay"> <option value="Los Sauces"> <option value="Lumaco"> <option value="Purén"> <option value="Renaico"> <option value="Traiguén"> <option value="Victoria"> <option value="Puerto Montt"> <option value="Calbuco"> <option value="Cochamó"> <option value="Fresia"> <option value="Frutillar"> <option value="Los Muermos"> <option value="Llanquihue"> <option value="Maullín"> <option value="Puerto Varas"> <option value="Castro"> <option value="Ancud"> <option value="Chonchi"> <option value="Curaco de Vélez"> <option value="Dalcahue"> <option value="Puqueldón"> <option value="Queilén"> <option value="Quellón"> <option value="Quemchi"> <option value="Quinchao"> <option value="Osorno"> <option value="Puerto Octay"> <option value="Purranque"> <option value="Puyehue"> <option value="Río Negro"> <option value="San Juan de la Costa"> <option value="San Pablo"> <option value="Chaitén"> <option value="Futaleufú"> <option value="Hualaihué"> <option value="Palena"> <option value="Coihaique"> <option value="Lago Verde"> <option value="Aisén"> <option value="Cisnes"> <option value="Guaitecas"> <option value="Cochrane"> <option value="O Higgins"> <option value="Tortel"> <option value="Chile Chico"> <option value="Río Ibáñez"> <option value="Punta Arenas"> <option value="Laguna Blanca"> <option value="Río Verde"> <option value="San Gregorio"> <option value="Cabo de Hornos"> <option value="Antártica"> <option value="Porvenir"> <option value="Primavera"> <option value="Timaukel"> <option value="Natales"> <option value="Torres del Paine"> <option value="Santiago"> <option value="Cerrillos"> <option value="Cerro Navia"> <option value="Conchalí"> <option value="El Bosque"> <option value="Estación Central"> <option value="Huechuraba"> <option value="Independencia"> <option value="La Cisterna"> <option value="La Florida"> <option value="La Granja"> <option value="La Pintana"> <option value="La Reina"> <option value="Las Condes"> <option value="Lo Barnechea"> <option value="Lo Espejo"> <option value="Lo Prado"> <option value="Macul"> <option value="Maipú"> <option value="Ñuñoa"> <option value="Pedro Aguirre Cerda"> <option value="Peñalolén"> <option value="Providencia"> <option value="Pudahuel"> <option value="Quilicura"> <option value="Quinta Normal"> <option value="Recoleta"> <option value="Renca"> <option value="San Joaquín"> <option value="San Miguel"> <option value="San Ramón"> <option value="Vitacura"> <option value="Puente Alto"> <option value="Pirque"> <option value="San José de Maipo"> <option value="Colina"> <option value="Lampa"> <option value="Tiltil"> <option value="San Bernardo"> <option value="Buin"> <option value="Calera de Tango"> <option value="Paine"> <option value="Melipilla"> <option value="Alhué"> <option value="Curacaví"> <option value="María Pinto"> <option value="San Pedro"> <option value="Talagante"> <option value="El Monte"> <option value="Isla de Maipo"> <option value="Padre Hurtado"> <option value="Peñaflor"> <option value="Valdivia"> <option value="Corral"> <option value="Lanco"> <option value="Los Lagos"> <option value="Máfil"> <option value="Mariquina"> <option value="Paillaco"> <option value="Panguipulli"> <option value="La Unión"> <option value="Futrono"> <option value="Lago Ranco"> <option value="Río Bueno"> <option value="Arica"> <option value="Camarones"> <option value="Putre"> <option value="General Lagos"> <option value="Chillán"> <option value="Bulnes"> <option value="Chillán Viejo"> <option value="El Carmen"> <option value="Pemuco"> <option value="Pinto"> <option value="Quillón"> <option value="San Ignacio"> <option value="Yungay"> <option value="Quirihue"> <option value="Cobquecura"> <option value="Coelemu"> <option value="Ninhue"> <option value="Portezuelo"> <option value="Ranquil"> <option value="Treguaco"> <option value="San Carlos"> <option value="Coihueco"> <option value="Ñiquén"> <option value="San Fabián"> <option value="San Nicolás">  </datalist>',
  data: {trialid: 'DEMOGR46_10', procedure: 'DEMOGR46'}
};

var if_question010 = {
  timeline: [question010],
  data: {trialid: 'DEMOGR46_010_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_009'))["response"])["Q0"]).trim();
    if(data == 'Chile'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question010);

var question011 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Comuna de residencia:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_011', procedure: 'DEMOGR46'}
};

var if_question011 = {
  timeline: [question011],
  data: {trialid: 'DEMOGR46_011_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_009'))["response"])["Q0"]).trim();
    if(data == 'Chile'){
      return false;
    } else {
      return true;
    }
  }
}
DEMOGR46.push(if_question011);

var question012 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Ciudad de residencia:</div>", type: 'email', required: true}],
  data: {trialid: 'DEMOGR46_012', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Nacionalidad:', options: ['&nbsp;Chileno/a', '&nbsp;Argentino/a', '&nbsp;Español/a', '&nbsp;Otra'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_013', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question013);

var question014 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique su nacionalidad:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_014', procedure: 'DEMOGR46'}
};

var if_question014 = {
  timeline: [question014],
  data: {trialid: 'DEMOGR46_014_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_013'))["response"])["Q0"]).trim();
    if(data == 'Otra'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question014);

var Instructions_002 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '2. Nivel de educación:' +'</p>'],
  data: {trialid: 'instructions_002', procedure: 'DEMOGR46'},
  show_clickable_nav: true
};
DEMOGR46.push(Instructions_002);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Qué nivel estás cursando este año?', options: ['&nbsp;6° de enseñanza básica.', '&nbsp;7° de enseñanza básica.', '&nbsp;8° de enseñanza básica.', '&nbsp;9° (I Medio)', '&nbsp;10° (II Medio)', '&nbsp;11° (III Medio)', '&nbsp;12° (IV Medio)', '&nbsp;Otro'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_015', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question015);

var question016 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique su nivel de educación actual:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_016', procedure: 'DEMOGR46'}
};

var if_question016 = {
  timeline: [question016],
  data: {trialid: 'DEMOGR46_016_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_015'))["response"])["Q0"]).trim();
    if(data == 'Otro'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question016);

var Instructions_003 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '3. Deporte:' +'</p>'],
  data: {trialid: 'instructions_003', procedure: 'DEMOGR46'},
  show_clickable_nav: true
};
DEMOGR46.push(Instructions_003);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Realizas algún deporte u actividad física/corporal regularmente?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_017', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question017);

var question018 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique el deporte u actividad física/corporal que realiza regularmente:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_018', procedure: 'DEMOGR46'}
};

var if_question018 = {
  timeline: [question018],
  data: {trialid: 'DEMOGR46_018_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_017'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question018);

var question019 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique frecuencia (horas a la  semana) en la que realiza el deporte u actividad física/corporal mencionado:</div>", type: 'number', required: true, range: [1, 168]}],
  data: {trialid: 'DEMOGR46_019', procedure: 'DEMOGR46'}
};

var if_question019 = {
  timeline: [question019],
  data: {trialid: 'DEMOGR46_019_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_017'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question019);

var Instructions_004 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '3. Antecedentes de salud:' +'</p>'],
  data: {trialid: 'instructions_004', procedure: 'DEMOGR46'},
  show_clickable_nav: true
};
DEMOGR46.push(Instructions_004);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tienes alguna alergia?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_020', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question020);

var question021 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique la alergia que tiene:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_021', procedure: 'DEMOGR46'}
};

var if_question021 = {
  timeline: [question021],
  data: {trialid: 'DEMOGR46_021_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_020'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question021);

var question022 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Ha sido diagnosticado(a) con alguna condición o enfermedad crónica?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_022', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question022);

var question023 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique la condición o enfermedad crónica con la que fue diagnosticado(a):</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_023', procedure: 'DEMOGR46'}
};

var if_question023 = {
  timeline: [question023],
  data: {trialid: 'DEMOGR46_023_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_022'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question023);

var question024 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique a que edad fue diagnosticado(a) con esa condición o enfermedad:</div>", type: 'number', required: true, range: [0, 100]}],
  data: {trialid: 'DEMOGR46_024', procedure: 'DEMOGR46'}
};

var if_question024 = {
  timeline: [question024],
  data: {trialid: 'DEMOGR46_024_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_022'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question024);

var question025 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Estás bajo algún tratamiento farmacológico en este momento?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR46_025', procedure: 'DEMOGR46'}
};
DEMOGR46.push(question025);

var question026 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique el tratamiento farmacológico:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR46_026', procedure: 'DEMOGR46'}
};

var if_question026 = {
  timeline: [question026],
  data: {trialid: 'DEMOGR46_026_if', procedure: 'DEMOGR46'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR46_025'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR46.push(if_question026);

// Randomize order of items
//if (debug_mode === false) DEMOGR46 = jsPsych.randomization.repeat(DEMOGR46,1);
DEMOGR46.unshift(instruction_screen_experiment);
questions.push.apply(questions, DEMOGR46);

call_function("DEMOGR46");