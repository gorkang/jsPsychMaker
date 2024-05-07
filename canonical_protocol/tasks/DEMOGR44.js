/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('DEMOGR44') );
DEMOGR44 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '1. Información personal:' +'</p>'],
  data: {trialid: 'instructions_001', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};

var question001 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Nombre Completo:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_001', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question001);

var question002 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Edad:</div>", type: 'number', required: true, range: [18, 100]}],
  data: {trialid: 'DEMOGR44_002', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Nacionalidad:', options: ['&nbsp;Chilena', '&nbsp;Otra'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_003', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question003);

var question004 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique su nacionalidad:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_004', procedure: 'DEMOGR44'}
};

var if_question004 = {
  timeline: [question004],
  data: {trialid: 'DEMOGR44_004_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_003'))["response"])["Q0"]).trim();
    if(data == 'Otra'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Región:', options: ['&nbsp;Metropolitana', '&nbsp;Otra'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_005', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question005);

var question006 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique su región:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_006', procedure: 'DEMOGR44'}
};

var if_question006 = {
  timeline: [question006],
  data: {trialid: 'DEMOGR44_006_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_005'))["response"])["Q0"]).trim();
    if(data == 'Otra'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question006);

var question07 = {
  type: 'survey-html-form',
  preamble: '<div class="justified">Comuna:</div>', html: '<input name ="Q0" list="comunas" required><datalist id="comunas"><option value="Iquique"> <option value="Alto Hospicio"> <option value="Pozo Almonte"> <option value="Camiña"> <option value="Colchane"> <option value="Huara"> <option value="Pica"> <option value="Antofagasta"> <option value="Mejillones"> <option value="Sierra Gorda"> <option value="Taltal"> <option value="Calama"> <option value="Ollagüe"> <option value="San Pedro de Atacama"> <option value="Tocopilla"> <option value="María Elena"> <option value="Copiapó"> <option value="Caldera"> <option value="Tierra Amarilla"> <option value="Chañaral"> <option value="Diego de Almagro"> <option value="Vallenar"> <option value="Alto del Carmen"> <option value="Freirina"> <option value="Huasco"> <option value="La Serena"> <option value="Coquimbo"> <option value="Andacollo"> <option value="La Higuera"> <option value="Paiguano"> <option value="Vicuña"> <option value="Illapel"> <option value="Canela"> <option value="Los Vilos"> <option value="Salamanca"> <option value="Ovalle"> <option value="Combarbalá"> <option value="Monte Patria"> <option value="Punitaqui"> <option value="Río Hurtado"> <option value="Valparaíso"> <option value="Casablanca"> <option value="Concón"> <option value="Juan Fernández"> <option value="Puchuncaví"> <option value="Quintero"> <option value="Viña del Mar"> <option value="Isla de Pascua"> <option value="Los Andes"> <option value="Calle Larga"> <option value="Rinconada"> <option value="San Esteban"> <option value="La Ligua"> <option value="Cabildo"> <option value="Papudo"> <option value="Petorca"> <option value="Zapallar"> <option value="Quillota"> <option value="Calera"> <option value="Hijuelas"> <option value="La Cruz"> <option value="Nogales"> <option value="San Antonio"> <option value="Algarrobo"> <option value="Cartagena"> <option value="El Quisco"> <option value="El Tabo"> <option value="Santo Domingo"> <option value="San Felipe"> <option value="Catemu"> <option value="Llaillay"> <option value="Panquehue"> <option value="Putaendo"> <option value="Santa María"> <option value="Quilpué"> <option value="Limache"> <option value="Olmué"> <option value="Villa Alemana"> <option value="Rancagua"> <option value="Codegua"> <option value="Coinco"> <option value="Coltauco"> <option value="Doñihue"> <option value="Graneros"> <option value="Las Cabras"> <option value="Machalí"> <option value="Malloa"> <option value="Mostazal"> <option value="Olivar"> <option value="Peumo"> <option value="Pichidegua"> <option value="Quinta de Tilcoco"> <option value="Rengo"> <option value="Requínoa"> <option value="San Vicente"> <option value="Pichilemu"> <option value="La Estrella"> <option value="Litueche"> <option value="Marchihue"> <option value="Navidad"> <option value="Paredones"> <option value="San Fernando"> <option value="Chépica"> <option value="Chimbarongo"> <option value="Lolol"> <option value="Nancagua"> <option value="Palmilla"> <option value="Peralillo"> <option value="Placilla"> <option value="Pumanque"> <option value="Santa Cruz"> <option value="Talca"> <option value="Constitución"> <option value="Curepto"> <option value="Empedrado"> <option value="Maule"> <option value="Pelarco"> <option value="Pencahue"> <option value="Río Claro"> <option value="San Clemente"> <option value="San Rafael"> <option value="Cauquenes"> <option value="Chanco"> <option value="Pelluhue"> <option value="Curicó"> <option value="Hualañé"> <option value="Licantén"> <option value="Molina"> <option value="Rauco"> <option value="Romeral"> <option value="Sagrada Familia"> <option value="Teno"> <option value="Vichuquén"> <option value="Linares"> <option value="Colbún"> <option value="Longaví"> <option value="Parral"> <option value="Retiro"> <option value="San Javier"> <option value="Villa Alegre"> <option value="Yerbas Buenas"> <option value="Concepción"> <option value="Coronel"> <option value="Chiguayante"> <option value="Florida"> <option value="Hualqui"> <option value="Lota"> <option value="Penco"> <option value="San Pedro de la Paz"> <option value="Santa Juana"> <option value="Talcahuano"> <option value="Tomé"> <option value="Hualpén"> <option value="Lebu"> <option value="Arauco"> <option value="Cañete"> <option value="Contulmo"> <option value="Curanilahue"> <option value="Los Alamos"> <option value="Tirúa"> <option value="Los Angeles"> <option value="Antuco"> <option value="Cabrero"> <option value="Laja"> <option value="Mulchén"> <option value="Nacimiento"> <option value="Negrete"> <option value="Quilaco"> <option value="Quilleco"> <option value="San Rosendo"> <option value="Santa Bárbara"> <option value="Tucapel"> <option value="Yumbel"> <option value="Alto Biobío"> <option value="Temuco"> <option value="Carahue"> <option value="Cunco"> <option value="Curarrehue"> <option value="Freire"> <option value="Galvarino"> <option value="Gorbea"> <option value="Lautaro"> <option value="Loncoche"> <option value="Melipeuco"> <option value="Nueva Imperial"> <option value="Padre Las Casas"> <option value="Perquenco"> <option value="Pitrufquén"> <option value="Pucón"> <option value="Saavedra"> <option value="Teodoro Schmidt"> <option value="Toltén"> <option value="Vilcún"> <option value="Villarrica"> <option value="Cholchol"> <option value="Angol"> <option value="Collipulli"> <option value="Curacautín"> <option value="Ercilla"> <option value="Lonquimay"> <option value="Los Sauces"> <option value="Lumaco"> <option value="Purén"> <option value="Renaico"> <option value="Traiguén"> <option value="Victoria"> <option value="Puerto Montt"> <option value="Calbuco"> <option value="Cochamó"> <option value="Fresia"> <option value="Frutillar"> <option value="Los Muermos"> <option value="Llanquihue"> <option value="Maullín"> <option value="Puerto Varas"> <option value="Castro"> <option value="Ancud"> <option value="Chonchi"> <option value="Curaco de Vélez"> <option value="Dalcahue"> <option value="Puqueldón"> <option value="Queilén"> <option value="Quellón"> <option value="Quemchi"> <option value="Quinchao"> <option value="Osorno"> <option value="Puerto Octay"> <option value="Purranque"> <option value="Puyehue"> <option value="Río Negro"> <option value="San Juan de la Costa"> <option value="San Pablo"> <option value="Chaitén"> <option value="Futaleufú"> <option value="Hualaihué"> <option value="Palena"> <option value="Coihaique"> <option value="Lago Verde"> <option value="Aisén"> <option value="Cisnes"> <option value="Guaitecas"> <option value="Cochrane"> <option value="O Higgins"> <option value="Tortel"> <option value="Chile Chico"> <option value="Río Ibáñez"> <option value="Punta Arenas"> <option value="Laguna Blanca"> <option value="Río Verde"> <option value="San Gregorio"> <option value="Cabo de Hornos"> <option value="Antártica"> <option value="Porvenir"> <option value="Primavera"> <option value="Timaukel"> <option value="Natales"> <option value="Torres del Paine"> <option value="Santiago"> <option value="Cerrillos"> <option value="Cerro Navia"> <option value="Conchalí"> <option value="El Bosque"> <option value="Estación Central"> <option value="Huechuraba"> <option value="Independencia"> <option value="La Cisterna"> <option value="La Florida"> <option value="La Granja"> <option value="La Pintana"> <option value="La Reina"> <option value="Las Condes"> <option value="Lo Barnechea"> <option value="Lo Espejo"> <option value="Lo Prado"> <option value="Macul"> <option value="Maipú"> <option value="Ñuñoa"> <option value="Pedro Aguirre Cerda"> <option value="Peñalolén"> <option value="Providencia"> <option value="Pudahuel"> <option value="Quilicura"> <option value="Quinta Normal"> <option value="Recoleta"> <option value="Renca"> <option value="San Joaquín"> <option value="San Miguel"> <option value="San Ramón"> <option value="Vitacura"> <option value="Puente Alto"> <option value="Pirque"> <option value="San José de Maipo"> <option value="Colina"> <option value="Lampa"> <option value="Tiltil"> <option value="San Bernardo"> <option value="Buin"> <option value="Calera de Tango"> <option value="Paine"> <option value="Melipilla"> <option value="Alhué"> <option value="Curacaví"> <option value="María Pinto"> <option value="San Pedro"> <option value="Talagante"> <option value="El Monte"> <option value="Isla de Maipo"> <option value="Padre Hurtado"> <option value="Peñaflor"> <option value="Valdivia"> <option value="Corral"> <option value="Lanco"> <option value="Los Lagos"> <option value="Máfil"> <option value="Mariquina"> <option value="Paillaco"> <option value="Panguipulli"> <option value="La Unión"> <option value="Futrono"> <option value="Lago Ranco"> <option value="Río Bueno"> <option value="Arica"> <option value="Camarones"> <option value="Putre"> <option value="General Lagos"> <option value="Chillán"> <option value="Bulnes"> <option value="Chillán Viejo"> <option value="El Carmen"> <option value="Pemuco"> <option value="Pinto"> <option value="Quillón"> <option value="San Ignacio"> <option value="Yungay"> <option value="Quirihue"> <option value="Cobquecura"> <option value="Coelemu"> <option value="Ninhue"> <option value="Portezuelo"> <option value="Ranquil"> <option value="Treguaco"> <option value="San Carlos"> <option value="Coihueco"> <option value="Ñiquén"> <option value="San Fabián"> <option value="San Nicolás">  </datalist>',
  data: {trialid: 'DEMOGR44_07', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question07);

var question008 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Correo Electrónico</div>", type: 'email', required: true}],
  data: {trialid: 'DEMOGR44_008', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question008);

var Instructions_002 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '2. Estado civil/relaciones:' +'</p>'],
  data: {trialid: 'instructions_002', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};
DEMOGR44.push(Instructions_002);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Nacionalidad', options: ['&nbsp;Soltera', '&nbsp;Casada', '&nbsp;Divorciada', '&nbsp;Separada', '&nbsp;Viuda'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_009', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Número de hijas/os', options: ['&nbsp;0', '&nbsp;1', '&nbsp;2', '&nbsp;3', '&nbsp;4 o más'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_010', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Estás actualmente en una relación?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_011', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question011);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tienes actualmente una dinámica de violencia? ', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_012', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Mencione la dinámica de violencia que tiene actualmente:', options: ['&nbsp;Física', '&nbsp;Psicológica', '&nbsp;Sexual', '&nbsp;Patrimonial'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_013', procedure: 'DEMOGR44'}
};

var if_question013 = {
  timeline: [question013],
  data: {trialid: 'DEMOGR44_013_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_012'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question013);

var Instructions_003 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '3. Exposición a la violencia:' +'</p>'],
  data: {trialid: 'instructions_003', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};
DEMOGR44.push(Instructions_003);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Has sido víctima de una o más relaciones violentas?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_014', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question014);

var Instructions_004 = {
  type: 'instructions',
  pages: ['<p>Enumera las <b>relaciones violentas<b> de las que has sido víctima, y el tipo de violencia</p>'],
  data: {trialid: 'instructions_004', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};

var if_instructions_004 = {
  timeline: [Instructions_004],
  data: {trialid: 'Instructions_004_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_instructions_004);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En mi primera (o única) de pareja:', options: ['&nbsp;Psicológica', '&nbsp;Física', '&nbsp;Sexual', '&nbsp;Financiera'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_016', procedure: 'DEMOGR44'}
};

var if_question015 = {
  timeline: [question015],
  data: {trialid: 'DEMOGR44_015_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En mi segunda de pareja:', options: ['&nbsp;Psicológica', '&nbsp;Física', '&nbsp;Sexual', '&nbsp;Financiera', 'No he tenido una segunda pareja violenta'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_016', procedure: 'DEMOGR44'}
};

var if_question016 = {
  timeline: [question016],
  data: {trialid: 'DEMOGR44_016_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'En mi tercera de pareja:', options: ['&nbsp;Psicológica', '&nbsp;Física', '&nbsp;Sexual', '&nbsp;Financiera', 'No he tenido una tercera pareja violenta'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_017', procedure: 'DEMOGR44'}
};

var if_question017 = {
  timeline: [question017],
  data: {trialid: 'DEMOGR44_017_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question017);

var question018 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Has reportado/o reportaste la violencia a alguna autoridad?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_018', procedure: 'DEMOGR44'}
};

var if_question018 = {
  timeline: [question018],
  data: {trialid: 'DEMOGR44_018_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Te ayudaron a que el nivel de violencia disminuyera?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_019', procedure: 'DEMOGR44'}
};

var if_question019 = {
  timeline: [question019],
  data: {trialid: 'DEMOGR44_019_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question019);

var Instructions_005 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '4. Legal/Protección:' +'</p>'],
  data: {trialid: 'instructions_005', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};
DEMOGR44.push(Instructions_005);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Estás actualmente bajo alguna protección legal?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_020', procedure: 'DEMOGR44'}
};

var if_question020 = {
  timeline: [question020],
  data: {trialid: 'DEMOGR44_020_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question020);

var question021 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Bajo que protección legal estás actualmente?', options: ['&nbsp;Prohibición al agresor de permanecer en el hogar', '&nbsp;Prohibición al agresor de acercarse al domicilio, trabajo o lugar de estudios de la víctima', '&nbsp;Cambio temporal o definitivo de domicilio', '&nbsp;Entrega de alarmas de ruido', '&nbsp;Ubicación en casa de acogida'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_021', procedure: 'DEMOGR44'}
};

var if_question021 = {
  timeline: [question021],
  data: {trialid: 'DEMOGR44_021_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_020'))["response"])["Q0"]).trim();
      if(data2 == 'Si'){
        return true;
      }
    }
    return false;
  }
}
DEMOGR44.push(if_question021);

var question022 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Has buscado ayuda o asesoramiento legal?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_022', procedure: 'DEMOGR44'}
};

var if_question022 = {
  timeline: [question022],
  data: {trialid: 'DEMOGR44_022_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_014'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question022);

var question023 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Estás al tanto de tus derechos legales en relación con la violencia?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_023', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question023);

var Instructions_006 = {
  type: 'instructions',
  pages: ['<p><left>' +
  '<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '5. Antecedentes educativos:' +'</p>'],
  data: {trialid: 'instructions_006', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};
DEMOGR44.push(Instructions_006);

var question024 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Indica el nivel de educación más alto que has completado:', options: ['&nbsp;Enseñanza Básica', '&nbsp;Enseñanza Media', '&nbsp;Educación técnica nivel superior', '&nbsp;Bachillerato universitario', '&nbsp;Magíster', '&nbsp;Doctorado', '&nbsp;Ninguno / Básica incompleta'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_024', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question024);

var question025 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Estado laboral actual:', options: ['&nbsp;Dependiente', '&nbsp;Independiente', '&nbsp;Desempleada'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_025', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question025);

var question026 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Ocupación:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_026', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question026);

var question027 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tienes acceso a recursos financieros?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_027', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question027);

var Instructions_007 = {
  type: 'instructions',
  pages: ['<p><left><b><big>Preguntas Demográficas</big></b><br />'+ '6. Salud:' +'</p>'],
  data: {trialid: 'instructions_007', procedure: 'DEMOGR44'},
  show_clickable_nav: true
};
DEMOGR44.push(Instructions_007);

var question028 = {
  type: 'survey-multi-select',
  questions: [{prompt: '¿Tienes algún diagnóstico de enfermedad como las siguientes? Marque una o más opciones:', options: ['&nbsp;Lupus', '&nbsp;Artritis reumatoide', '&nbsp;Psoriasis', '&nbsp;Enfermedad de Chron', '&nbsp;Fibromialgia', '&nbsp;Colitis ulcerosa', '&nbsp;Esclerosis sistémica', '&nbsp;Aterosclerosis', '&nbsp;Diabetes', '&nbsp;Hipertensión', '&nbsp;Gastritis', '&nbsp;Dermatitis', '&nbsp;Otra', '&nbsp;Ninguna'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_028', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question028);

var question029 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique el otro diagnóstico de enfermedad que tiene:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_029', procedure: 'DEMOGR44'}
};

var if_question029 = {
  timeline: [question029],
  data: {trialid: 'DEMOGR44_029_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === "DEMOGR44_028"))["response"].replace(/&nbsp;/g,''))["Q0"]);
    if(data.includes("Otra")){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question029);

var question030 = {
  type: 'survey-multi-select',
  questions: [{prompt: 'Marque cual o cuales de estas enfermedades del aparato reproductor femenino padece:', options: ['&nbsp;Menstruaciones irregulares', '&nbsp;Menstruaciones dolorosas', '&nbsp;Endometriosis', '&nbsp;Displasia uterina', '&nbsp;Cáncer uterino', '&nbsp;Infecciones urinarias recurrentes', '&nbsp;Otra', '&nbsp;Ninguna'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_030', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question030);

var question031 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique el otro diagnóstico de enfermedad que tiene:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_031', procedure: 'DEMOGR44'}
};

var if_question031 = {
  timeline: [question031],
  data: {trialid: 'DEMOGR44_031_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === "DEMOGR44_030"))["response"].replace(/&nbsp;/g,''))["Q0"]);
    if(data.includes("Otra")){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question031);

var question032 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tiene algún diagnóstico de enfermedad cardiovascular?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_032', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question032);

var question033 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Especifique cual diagnóstico de enfermedad cardiovascular tiene:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_033', procedure: 'DEMOGR44'}
};

var if_question033 = {
  timeline: [question033],
  data: {trialid: 'DEMOGR44_033_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_032'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question033);

var question034 = {
  type: 'survey-multi-select',
  questions: [{prompt: '¿Tomas alguno de estos medicamentos?', options: ['&nbsp;Sertralina', '&nbsp;Citalopram', '&nbsp;Fluoxetina', '&nbsp;Alprazolam', '&nbsp;Clonazepam', '&nbsp;Medicamentos para dormir', '&nbsp;Otro', '&nbsp;No consumo nada'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_034', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question034);


var question035 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Mencione que otro medicamento consume:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_035', procedure: 'DEMOGR44'}
};

var if_question035 = {
  timeline: [question035],
  data: {trialid: 'DEMOGR44_035_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_034'))["response"].replace(/&nbsp;/g,''))["Q0"]);
    if(data.includes('Otro')){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question035);

var question036 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Desde cuándo?', options: ['&nbsp;Menos de seis meses', '&nbsp;Más de seis meses, pero menos de un año', '&nbsp;Un año o más'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_036', procedure: 'DEMOGR44'}
};

var if_question036 = {
  timeline: [question036],
  data: {trialid: 'DEMOGR44_036_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_034'))["response"].replace(/&nbsp;/g,''))["Q0"]);
    if(data.includes('No consumo nada') && data.length === 1){
      return false;
    } else {
      return true;
    }
  }
}
DEMOGR44.push(if_question036);

var question037 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Has buscado ayuda médica o psicológica para problemas relacionados con la violencia?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_037', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question037);

var question038 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>¿Dónde has recibido apoyo?</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_038', procedure: 'DEMOGR44'}
};

var if_question038 = {
  timeline: [question038],
  data: {trialid: 'DEMOGR44_038_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_037'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question038);

var question039 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Te ha ayudado?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_039', procedure: 'DEMOGR44'}
};

var if_question039 = {
  timeline: [question039],
  data: {trialid: 'DEMOGR44_039_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_037'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question039);

var question040 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Estás recibiendo actualmente algún tipo de terapia o asesoramiento?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_040', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question040);

var question041 = {
  type: 'survey-multi-choice',
  questions: [{prompt: '¿Tienes una red de apoyo o acceso a servicios de apoyo?', options: ['&nbsp;Si', '&nbsp;No'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_041', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question041);

var question042 = {
  type: 'survey-multi-select',
  questions: [{prompt: '¿Cual es tu red de apoyo o acceso a servicios de apoyo?', options: ['&nbsp;Familia', '&nbsp;Amistades', '&nbsp;Vecinas/os', '&nbsp;Otro'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_042', procedure: 'DEMOGR44'}
};

var if_question042 = {
  timeline: [question042],
  data: {trialid: 'DEMOGR44_042_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_041'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      return true;
    } else {
      return false;
    }
  }
}
DEMOGR44.push(if_question042);

var question043 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Escriba su red de apoyo o acceso a servicios de apoyo:</div>", type: 'text', required: true}],
  data: {trialid: 'DEMOGR44_043', procedure: 'DEMOGR44'}
};

var if_question043 = {
  timeline: [question043],
  data: {trialid: 'DEMOGR44_043_if', procedure: 'DEMOGR44'},
  conditional_function: function(){
    // get the data from the previous trial,
    // and check which key was pressed
    let data = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_041'))["response"])["Q0"]).trim();
    if(data == 'Si'){
      let data2 = (JSON.parse((jsPsych.data.get().values().find(x => x.trialid === 'DEMOGR44_042'))["response"].replace(/&nbsp;/g,''))["Q0"]);
      if(data2.includes('Otro')){
        return true;
      }
    } 
    return false;
  }
}
DEMOGR44.push(if_question043);

var question044 = {
  type: 'survey-multi-select',
  questions: [{prompt: '¿Cómo calificarías tu ciclo menstrual?', options: ['&nbsp;Regular', '&nbsp;Irregular ', '&nbsp;Doloroso', '&nbsp;Con poco dolor', '&nbsp;No tengo ciclo menstrual'], required: true, horizontal: false}],
  data: {trialid: 'DEMOGR44_044', procedure: 'DEMOGR44'}
};
DEMOGR44.push(question044);

DEMOGR44.unshift(instruction_screen_experiment);
questions.push.apply(questions, DEMOGR44);

call_function("DEMOGR44");