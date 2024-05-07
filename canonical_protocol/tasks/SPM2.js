/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('SPM2') );
SPM2 = [];    //temporal timeline

var instruction_screen_experiment = {
  type: 'instructions',
  fullscreen_mode: true,
  pages: [`<b><big>SPM-2</big></b><BR>Por favor contesta estas preguntas en base a tu  conducta típica durante el mes pasado. Selecciona sólo la respuesta que mejor describa la frecuencia con la cual esta conducta ocurre, usando la siguiente escala de evaluación.<BR><BR>`],
  button_label_next: 'Continuar',
  data: {trialid: 'Instructions_01', procedure: 'SPM2'},
  show_clickable_nav: true,
};

var question001 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me abrumo o me distraigo en las tiendas por todas las cosas que se ven en las vitrinas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_001', procedure: 'SPM2'}
};
SPM2.push(question001);

var question002 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La luz brillante me fastidia.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_002', procedure: 'SPM2'}
};
SPM2.push(question002);

var question003 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me tropiezo con las cosas o con la gente porque no me doy cuenta de que están a mi paso (en mi camino).', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_003', procedure: 'SPM2'}
};
SPM2.push(question003);

var question004 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Las luces que parpadean me fastidian.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_004', procedure: 'SPM2'}
};
SPM2.push(question004);

var question005 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me distraigo por cosas que veo cerca de mí como objetos en la pared o gente moviéndose alrededor.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_005', procedure: 'SPM2'}
};
SPM2.push(question005);

var question006 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo problemas para encontrar objetos en un estante.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_006', procedure: 'SPM2'}
};
SPM2.push(question006);

var question007 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo problemas para percibir los letreros de las calles o las señales de tránsito cuando estoy en un lugar nuevo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_007', procedure: 'SPM2'}
};
SPM2.push(question007);

var question008 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo pierdo mi lugar cuando muevo la vista de un sitio a otro, por ejemplo copiando lo de la pizarra al escritorio o leyendo de una línea de texto a la siguiente.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_008', procedure: 'SPM2'}
};
SPM2.push(question008);

var question009 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para juzgar (medir) la velocidad de autos que se acercan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_009', procedure: 'SPM2'}
};
SPM2.push(question009);

var question010 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para entender información en forma visual como diagramas y mapas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_010', procedure: 'SPM2'}
};
SPM2.push(question010);

var question011 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los sonidos fuertes, como el de una aspiradora o de una máquina de cortar el césped, me molestan tanto que quiero irme del sitio o taparme los oídos.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_011', procedure: 'SPM2'}
};
SPM2.push(question011);

var question012 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me gusta hacer ciertos sonidos repetidamente como tararear, cantar, o gritar.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_012', procedure: 'SPM2'}
};
SPM2.push(question012);

var question013 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo evito los lugares donde hay música o ruido fuerte.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_013', procedure: 'SPM2'}
};
SPM2.push(question013);

var question014 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para determinar de donde provienen los sonidos o las voces.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_014', procedure: 'SPM2'}
};
SPM2.push(question014);

var question015 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para enfocarme en una película cuando hay ruidos cerca como el de gente abriendo envases de comida.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_015', procedure: 'SPM2'}
};
SPM2.push(question015);

var question016 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los sonidos agudos, como de silbatos o aparatos para hacer bulla en las fiestas, me molestan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_016', procedure: 'SPM2'}
};
SPM2.push(question016);

var question017 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo noto sonidos que los demás no notan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_017', procedure: 'SPM2'}
};
SPM2.push(question017);

var question018 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La gente me dice que yo no les oigo cuando llaman mi nombre.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_018', procedure: 'SPM2'}
};
SPM2.push(question018);

var question019 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me distraigo fácilmente con ruidos sutiles en el ambiente como el ruido del aire acondicionado o del refrigerador.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_019', procedure: 'SPM2'}
};
SPM2.push(question019);

var question020 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los sonidos fuertes o inesperados me hacen sobresaltar fácilmente.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_020', procedure: 'SPM2'}
};
SPM2.push(question020);

var question021 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Las comidas que tienen ciertas texturas me disgustan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_021', procedure: 'SPM2'}
};
SPM2.push(question021);

var question022 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para encontrar cosas en un bolsillo, una bolsa, o una mochila sin mirar.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_022', procedure: 'SPM2'}
};
SPM2.push(question022);

var question023 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La sensación de ciertas ropas me disgusta.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_023', procedure: 'SPM2'}
};
SPM2.push(question023);

var question024 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Otros tienen que decirme cuando necesito limpiarme algo de la cara porque yo no me doy cuenta de eso.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_024', procedure: 'SPM2'}
};
SPM2.push(question024);

var question025 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No me gusta la sensación de cortarme las uñas de las manos o pies.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_025', procedure: 'SPM2'}
};
SPM2.push(question025);

var question026 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Las sensaciones que tengo al cepillarme los dientes me hacen tener arcadas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_026', procedure: 'SPM2'}
};
SPM2.push(question026);

var question027 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La comida tiene que estar exactamente a la temperatura correcta para que yo me la coma.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_027', procedure: 'SPM2'}
};
SPM2.push(question027);

var question028 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para sentir cuando mi ropa, por ejemplo mi camisa, se ha enrollado en mi cuerpo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_028', procedure: 'SPM2'}
};
SPM2.push(question028);

var question029 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo toso porque tengo problemas para sentir la comida o los líquidos deslizarse por mi garganta.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_029', procedure: 'SPM2'}
};
SPM2.push(question029);

var question030 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para darme cuenta que algo está demasiado caliente y me quemo por accidente.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_030', procedure: 'SPM2'}
};
SPM2.push(question030);

var question031 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No me gusta probar comidas nuevas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_031', procedure: 'SPM2'}
};
SPM2.push(question031);

var question032 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los sabores de ciertas comidas me disgustan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_032', procedure: 'SPM2'}
};
SPM2.push(question032);

var question033 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando me encuentro con algo nuevo, me gusta olerlo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_033', procedure: 'SPM2'}
};
SPM2.push(question033);

var question034 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo noto fragancias u olores que otros no notan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_034', procedure: 'SPM2'}
};
SPM2.push(question034);

var question035 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo evito estar con grupos de gente en sitios encerrados, como en los ascensores o en habitaciones atestadas (saturadas), debido al olor.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_035', procedure: 'SPM2'}
};
SPM2.push(question035);

var question036 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No me gusta comer en restaurantes debido a los diferentes olores y sabores.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_036', procedure: 'SPM2'}
};
SPM2.push(question036);

var question037 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo evito las comidas que tengan un sabor o un olor muy fuerte.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_037', procedure: 'SPM2'}
};
SPM2.push(question037);

var question038 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Pensar en los olores de comida que no me gustan me hace tener arcadas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_038', procedure: 'SPM2'}
};
SPM2.push(question038);

var question039 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los olores de ciertas comidas me molestan o me disgustan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_039', procedure: 'SPM2'}
};
SPM2.push(question039);

var question040 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me fastidian olores que a los demás no les molestan.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_040', procedure: 'SPM2'}
};
SPM2.push(question040);

var question041 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tiendo a usar demasiada presión para la tarea que estoy haciendo, por ejemplo rompo las puntas de los lápices al escribir.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_041', procedure: 'SPM2'}
};
SPM2.push(question041);

var question042 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo muerdo cosas como los lápices o la ropa repetidamente.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_042', procedure: 'SPM2'}
};
SPM2.push(question042);

var question043 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tiro la pelota con demasiada o con muy poca fuerza para embocarla.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_043', procedure: 'SPM2'}
};
SPM2.push(question043);

var question044 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tiendo a derramar o botar las cosas que llevo en una azafate (bandeja).', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_044', procedure: 'SPM2'}
};
SPM2.push(question044);

var question045 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo manejo los recipientes tan bruscamente o tan fuerte que se abollan, se rompen, o derraman.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_045', procedure: 'SPM2'}
};
SPM2.push(question045);

var question046 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo agarro las cosas de un modo tan suelto que se me caen de la mano.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_046', procedure: 'SPM2'}
};
SPM2.push(question046);

var question047 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los demás se quejan de que yo empujo, pateo, abrazo, o pego demasiado fuerte.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_047', procedure: 'SPM2'}
};
SPM2.push(question047);

var question048 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo rompo las cosas al presionarlas, jalarlas, o empujarlas demasiado fuerte.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_048', procedure: 'SPM2'}
};
SPM2.push(question048);

var question049 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me gusta chocar mi cuerpo contra cosas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_049', procedure: 'SPM2'}
};
SPM2.push(question049);

var question050 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo vuelco (derramo) las cosas por accidente.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_050', procedure: 'SPM2'}
};
SPM2.push(question050);

var question051 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'No me gustan las actividades que me hagan echar la cabeza hacia atrás como para mirar algo que este encima o para enjuagarme el cabello.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_051', procedure: 'SPM2'}
};
SPM2.push(question051);

var question052 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo evito caminar sobre superficies desiguales que requieren equilibrio como la tierra o el pasto.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_052', procedure: 'SPM2'}
};
SPM2.push(question052);

var question053 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me tropiezo, me caigo, o pierdo el equilibrio al correr o hacer deportes.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_053', procedure: 'SPM2'}
};
SPM2.push(question053);

var question054 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad manteniendo el equilibrio al montar bicicleta o patinar.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_054', procedure: 'SPM2'}
};
SPM2.push(question054);

var question055 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me siento incómodo(a) en escaleras o en escaleras de mano (mecánicas).', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_055', procedure: 'SPM2'}
};
SPM2.push(question055);

var question056 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando pierdo el equilibrio, tengo problemas para sujetarme a tiempo para no caer.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_056', procedure: 'SPM2'}
};
SPM2.push(question056);

var question057 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo pierdo el equilibrio o me caigo de mi silla al sentarme al escritorio o una mesa.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_057', procedure: 'SPM2'}
};
SPM2.push(question057);

var question058 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me mareo cuando giro mi cabeza de un lado a otro como al mirar en ambos sentidos antes de cruzar una calle.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_058', procedure: 'SPM2'}
};
SPM2.push(question058);

var question059 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para mirar algo mientras mi cabeza está en movimiento como por ejemplo al correr para agarrar una pelota.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_059', procedure: 'SPM2'}
};
SPM2.push(question059);

var question060 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me incomoda cuando tengo que sentarme en un asiento sin respaldo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_060', procedure: 'SPM2'}
};
SPM2.push(question060);

var question061 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo necesito más práctica que los demás para adquirir una habilidad nueva.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_061', procedure: 'SPM2'}
};
SPM2.push(question061);

var question062 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para que mis dos manos funcionen (coordinen) en conjunto cuando tengo que hacer tareas tales como abrir un envase o envolver un regalo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_062', procedure: 'SPM2'}
};
SPM2.push(question062);

var question063 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para seguir los pasos de una tarea nueva, como los de una receta o de un manual de reparaciones.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_063', procedure: 'SPM2'}
};
SPM2.push(question063);

var question064 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo problemas para generar ideas para nuevas actividades o juegos.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_064', procedure: 'SPM2'}
};
SPM2.push(question064);

var question065 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo prefiero repetir actividades una y otra vez de la misma forma en vez de cambiar algo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_065', procedure: 'SPM2'}
};
SPM2.push(question065);

var question066 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Cuando participo en deportes me es dificil patear o agarrar la pelota exactamente en el momento preciso.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_066', procedure: 'SPM2'}
};
SPM2.push(question066);

var question067 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo dificultad para planificar como cargar con varias cosas al mismo tiempo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_067', procedure: 'SPM2'}
};
SPM2.push(question067);

var question068 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo tengo problemas para completar en el orden correcto los pasos de rutinas familiares, como vestirme o preparar el desayuno.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_068', procedure: 'SPM2'}
};
SPM2.push(question068);

var question069 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me es difícil mantener un cuaderno, o una mochila organizados.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_069', procedure: 'SPM2'}
};
SPM2.push(question069);

var question070 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo necesito decir los pasos de una tarea dentro de mi mismo mientras la estoy haciendo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_070', procedure: 'SPM2'}
};
SPM2.push(question070);

var question071 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me llevo bien fácilmente con mis compañeros de clase sin hacer dramas o discutir.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_071', procedure: 'SPM2'}
};
SPM2.push(question071);

var question072 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me llevo bien con los adultos que son parte de mi vida.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_072', procedure: 'SPM2'}
};
SPM2.push(question072);

var question073 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo disfruto estando con mis amigos.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_073', procedure: 'SPM2'}
};
SPM2.push(question073);

var question074 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo disfruto participando en reuniones familiares como en días feriados o para las fiestas.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_074', procedure: 'SPM2'}
};
SPM2.push(question074);

var question075 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Me es difícil hacer contacto visual con la gente cuando les hablo.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_075', procedure: 'SPM2'}
};
SPM2.push(question075);

var question076 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La gente me dice que yo me paro o me siento demasiado cerca de ellos.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_076', procedure: 'SPM2'}
};
SPM2.push(question076);

var question077 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me uno a actividades con otros sin perturbar la actividad que está en progreso.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_077', procedure: 'SPM2'}
};
SPM2.push(question077);

var question078 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Yo me quedo (atascado) pegado en un mismo tema cuando hablo con otros.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_078', procedure: 'SPM2'}
};
SPM2.push(question078);

var question079 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'Los demás me dicen que parezco estar ignorando a la gente, cuando en realidad yo ni siquiera me había dado cuenta de que estaban ahí.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_079', procedure: 'SPM2'}
};
SPM2.push(question079);

var question080 = {
  type: 'survey-multi-choice',
  questions: [{prompt: 'La gente me dice que yo hablo con voz demasiado suave o demasiado alta.', options: ['&nbsp;Nunca', '&nbsp;Ocasionalmente', '&nbsp;Frecuentemente', '&nbsp;Siempre'], required: true}],
  data: {trialid: 'SPM2_080', procedure: 'SPM2'}
};
SPM2.push(question080);

// Randomize order of items
//if (debug_mode === false) SPM2 = jsPsych.randomization.repeat(SPM2,1);
SPM2.unshift(instruction_screen_experiment);
SPM2.push.apply(questions, SPM2);

call_function("SPM2");