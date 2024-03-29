/**
 * jspsych-survey-multi-choice-CSCN-RMET
 * a jspsych plugin for multiple choice survey questions
 *
 * Shane Martin
 *
 * documentation: docs.jspsych.org
 *
 */

function stripHtml(html)
{
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

definitions = {
  'ABOCHORNADO': 'Avergonzado.<br><br>Juan se sintió muy abochornado por olvidar el nombre de un colega.',
  'ABOCHORNADA': 'Avergonzada.<br><br>Eva se sintió muy abochornada por olvidar el nombre de un colega.',
  'ABATIDO': 'Pesimista, desconsolado, sin esperanza.<br><br>Gerardo estaba abatido al no conseguir el empleo que deseaba.',
  'ABATIDA': 'Pesimista, desconsolada, sin esperanza.<br><br>Lucia  estaba abatida al no conseguir el empleo que deseaba.',
  'ABSTRAÍDO': 'Reflexivo, pensativo, caviloso.<br><br>Juan parecía abstraído en la víspera de cumplir sus 60 años.',
  'ABSTRAÍDA': 'Reflexiva, pensativa, cavilosa.<br><br>Laura parecía abstraída en la víspera de cumplir sus 60 años.<br>Susana parecía abstraída cuando se dirigía a encontrarse con los padres de su novio por primera vez.',
  'ABURRIDO': 'Que genera desgana, tedioso.<br><br>José Manuel estaba muy aburrido en clase.',
  'ABURRIDA': 'Que genera desgana, tedioso.<br><br>Fabiola estaba muy aburrida en clase.',
  'ACUSANTE': 'Echar la culpa de algo.<br><br>El policía acusó al hombre de robar una billetera.',
  'AFECTUOSO': 'Que demuestra cariño hacia alguien.<br><br>La mayoría de los padres son afectuosos con sus hijos, dándoles muchos besos y abrazos.',
  'AFECTUOSA': 'Que demuestra cariño hacia alguien.<br><br>La mayoría de las madres son afectuosas con sus hijos, dándoles muchos besos y abrazos.',
  'AGOBIADO': 'Confundido, nervioso y alterado.<br><br>Pedro se agobió un poco al darse cuenta de lo atrasado que iba para la reunión y de que se había olvidado un documento importante.',
  'AGOBIADA': 'Confundida, nerviosa y alterada.<br><br>Sara se agobió un poco al darse cuenta de lo atrasada que iba para la reunión y de que se había olvidado un documento importante.',
  'AGRADECIDO': 'Sentir gratitud por algo o alguien.<br><br>Julio estaba muy agradecido por la amabilidad demostrada por el extraño.',
  'AGRADECIDA': 'Sentir gratitud por algo o alguien.<br><br>Nuria estaba muy agradecida por la amabilidad demostrada por el extraño.',
  'ALARMADO': 'Temeroso, preocupado, lleno de ansiedad.<br><br>Carlos  se alarmó al pensar que lo seguían de camino a casa.',
  'ALARMADA': 'Temerosa, preocupada, llena de ansiedad.<br><br>Clara  se alarmó al pensar que la seguían de camino a casa.',
  'ALENTADOR': 'Esperanzado, motivador, contenedor.<br><br>Todos los padres alentaban a sus hijos el día de deportes en la escuela.',
  'ALENTADORA': 'Esperanzada, motivadora, contenedora.<br><br>Todos los padres alentaban a sus hijos el día de deportes en la escuela.',
  'ALIVIADO': 'Libre de preocupación o ansiedad.<br><br>En el restaurante, Ramón se sintió aliviado al descubrir que no se había olvidado su billetera.',
  'ALIVIADA': 'Libre de preocupación o ansiedad.<br><br>En el restaurante, Sofia se sintió aliviada al descubrir que no se había olvidado su billetera.',
  'AMENAZANTE': 'Intimidante.<br><br>El ladron tenia un tono amenazante.',
  'AMENAZADOR': 'Intimidante.<br><br>El ladron tenia un tono amenazador.',
  'AMENAZADORA': 'Intimidante.<br><br>El borracho corpulento actuaba de manera muy amenazado.',
  'AMISTOSO': 'Sociable, amigable, simpático.<br><br>El amistoso niño dio indicaciones a los turistas sobre cómo llegar al centro de la ciudad.',
  'AMISTOSA': 'Sociable, amigable, simpática.<br><br>La amistosa niña dio indicaciones a los turistas sobre cómo llegar al centro de la ciudad.',
  'ANGUSTIADO': 'Absorto, enfrascado en los propios pensamientos, preocupado.<br><br>La preocupación por su madre hacía que Gustavo estuviera angustiado en el trabajo.',
  'ANGUSTIADA': 'Absorta, enfrascada en los propios pensamientos, preocupada.<br><br>La preocupación por su madre hacía que Débora estuviera angustiada en el trabajo.',
  'ANSIOSO': 'Preocupado, tenso, inquieto.<br><br>El estudiante estaba ansioso antes de realizar sus exámenes finales.',
  'ANSIOSA': 'Preocupada, tensa, inquieta.<br><br>La estudiante estaba ansiosa antes de realizar sus exámenes finales.',
  'ARREPENTIDO': 'Lamentarse, sentirse mal por algo.<br><br>El camarero se arrepintió por haber derramado la sopa sobre el cliente.<br>Leo siempre se arrepintió de no haber viajado nunca cuando era más joven.',
  'ARREPENTIDA': 'Lamentarse, sentirse mal por algo.<br><br>Nicole estaba arrepentida por haber actuado sin pensar.',
  'ARROGANTE': 'Engreído/a, presumido/a, con una gran opinión de sí mismo.<br><br>El hombre arrogante pensaba que sabía más de política que nadie en la sala.',
  'ASUSTADO': 'Horrorizado, estupefacto, alarmado.<br><br>Juan se asustó al descubrir que habían entrado ladrones a su casa.',
  'ASUSTADA': 'Horrorizada, estupefacta, alarmada.<br><br>Juana estaba asustada durante la tormenta.',
  'ATERRORIZADO': 'Alarmado, temeroso.<br><br>El niño se aterrorizó cuando pensó que había visto un fantasma.',
  'ATERRORIZADA': 'Alarmada, temerosa.<br><br>La madre encontro a su hija aterrorizada.',
  'AVERGONZADO': 'Sentirse abrumado por la vergüenza o la culpa.<br><br>El niño se sintió avergonzado cuando su madre lo descubrió robando dinero de su cartera.',
  'AVERGONZADA': 'Sentirse abrumada por la vergüenza o la culpa.<br><br>La niña se sintió avergonzada cuando su madre lo descubrió robando dinero de su cartera.',
  'BROMISTA': 'Ser gracioso/a, chistoso/a.<br><br>Laura siempre estaba bromeando con la gente.',
  'CELOSO': 'Envidioso.<br><br>Antonio estaba celoso de los chicos más altos y más guapos de su clase.',
  'CELOSA': 'Envidiosa.<br><br>Lina estaba celosa de las chicas más altas y más guapas de su clase.',
  'COMPASIVO': 'Que muestra compasión, caritativo, misericordioso.<br><br>El juez fue compasivo y le rebajó la pena al ladrón',
  'COMPASIVA': 'Que muestra compasión, caritativa, misericordiosa.<br><br>La jueza fue compasiva y le rebajó la pena al ladrón',
  'COMPRENSIVO': 'Amable, compasivo.<br><br>El enfermero se mostró comprensivo cuando le transmitió al paciente las malas noticias.',
  'COMPRENSIVA': 'Amable, compasiva.<br><br>La enfermera se mostró comprensiva cuando le transmitió al paciente las malas noticias.',
  'CONFIADO': 'Seguro de sí mismo, cree en sí mismo.<br><br>El tenista confiaba mucho en ganar el partido.',
  'CONFIADA': 'Segura de sí misma, cree en sí misma.<br><br>La tenista confiaba mucho en ganar el partido.',
  'CONFUNDIDO': 'Desconcertado/a, perplejo/a.<br><br>Roberto estaba tan confundido por las instrucciones que le dieron que se perdió.',
  'CONFUNDIDA': 'Desconcertado/a, perplejo/a.<br><br>Elisa estaba tan confundida por las instrucciones que le dieron que se perdió.',
  'CONSIDERADO': 'Respetuoso, atento, cortés.<br><br>El doctor era muy considerado con las personas mayores',
  'CONSIDERADA': 'Respetuosa, atenta, cortés.<br><br>La doctora era muy considerada con las personas mayores',
  'CONVENCIDO': 'Certero, absolutamente positivo.<br><br>Ricardo estaba convencido de que había tomado la decisión correcta.',
  'CONVENCIDA': 'Certera, absolutamente positiva.<br><br>Elisa estaba convencida de que había tomado la decisión correcta.',
  'CULPABLE': '"Lamentarse por hacer algo mal.<br><br>Juan  se sentía culpable por tener una aventura amorosa.',
  'CURIOSO': 'Cotilla, preguntador, entrometido.<br><br>Luis tenía curiosidad por el paquete de forma rara.',
  'CURIOSA': 'Cotilla, preguntadora, entrometida.<br><br>Luisa tenía curiosidad por el paquete de forma rara.',
  'DECAÍDO': 'Apesadumbrado, abatido, deprimido.<br><br>Adán estaba decaído por no haber aprobado sus exámenes.',
  'DECAÍDA': 'Apesadumbrada, abatida, deprimida.<br><br>Eva estaba decaída por no haber aprobado sus exámenes.',
  'DECEPCIONADO': 'Disgustado, descontento.<br><br>Los fans del Real Madrid estaban decepcionados por no haber ganado el campeonato.',
  'DECEPCIONADA': 'Disgustada, descontenta.<br><br>Natalia estaba decepcionada por no haber ganado el campeonato.',
  'DECIDIDO': 'Decisión ya tomada.<br><br>Pedro se veía muy decidido al entrar al centro electoral.',
  'DECIDIDA': 'Decisión ya tomada.<br><br>Julia se veía muy decidida al entrar al centro electoral.',
  'DECIDIENDO': 'Tomar una decisión.<br><br>El hombre estaba decidiendo a quién votar en las elecciones.',
  'DEPRIMIDO': 'Abatido.<br><br>Jorge se deprimió al no recibir ninguna tarjeta de cumpleaños.',
  'DEPRIMIDA': 'Abatida.<br><br>Camila se deprimió al no recibir ninguna tarjeta de cumpleaños.',
  'DESAFIANTE': 'Insolente, atrevido, no le importa lo que piensen los demás.<br><br>El manifestante se mostraba desafiante aún después de haber sido enviado a prisión.',
  'DESCONCERTADO': 'Totalmente confundido, perplejo, aturdido, confundido.<br><br>El niño estaba desconcertado cuando visitó la gran ciudad por primera vez.<br>Los detectives estaban completamente desconcertados por el crimen.',
  'DESCONCERTADA': 'Totalmente confundida, perpleja, aturdida, confundida.<br><br>La niña estaba desconcertada cuando visitó la gran ciudad por primera vez.<br>La detective estaba completamente desconcertada por el crimen.',
  'DESCONFIADO': 'Suspicaz, dubitativo, cauteloso.<br><br>El anciano desconfiaba del extraño en su puerta.',
  'DESCONFIADA': 'Suspicaz, dubitativa, cautelosa.<br><br>La anciana desconfiaba del extraño en su puerta.',
  'DESEO': 'Pasión, apetito, anhelo.<br><br>Catalina tenía un fuerte deseo por el chocolate.',
  'DOMINANTE': 'Confiado/a, seguro/a de sí mismo/a.<br><br>La mujer, dominante, exigió que el negocio le hiciera un reembolso.',
  'DUDOSO': 'Dubitativo, con sospecha.<br><br>Pedro estaba dudoso cuando le ofrecieron un televisor extremadamente barato en un bar.',
  'DUDOSA': 'Dubitativa, con sospecha.<br><br>Iris estaba dudosa cuando le ofrecieron un televisor extremadamente barato en un bar.',
  'EN PÁNICO': 'Angustiado/a, sensación de terror o ansiedad.<br><br>La familia entró en pánico al despertarse y encontrar la casa en llamas.',
  'ENFADADO': 'Irritado, contrariado.<br><br>Joaquín se enfadó al descubrir que había perdido el último autobús para volver a casa.',
  'ENFADADA': 'Irritada, contrariada.<br><br>Francisca estaba enfadada por la mala conducta de su hijo.',
  'ENTRETENIDO': 'Absorto,  divertido o contento por algo.<br><br>Me entretuve mucho con el mago.<br>Me entretuve con los chistes que contaban.',
  'ENTRETENIDA': 'Absorta,  divertida o contenta por algo.<br><br>Estela estaba entretenida con el show de los magos',
  'ENTUSIASMADO': 'Sentir admiración, interés y alegría por algo.<br><br> El día de Navidad por la mañana, los niños estaban entusiasmados por abrir sus regalos.',
  'ENTUSIASMADA': 'Sentir admiración, interés y alegría por algo.<br><br>El día de Navidad por la mañana, las niñas estaban entusiasmadas por abrir sus regalos.',
  'ESCÉPTICO': 'Dubitativo, suspicaz, receloso.<br><br>Jaime  parecía escéptico cuando alguien le leía el horóscopo.',
  'ESCÉPTICA': 'Dubitativa, suspicaz, recelosa.<br><br>Eliana parecía escéptica cuando alguien le leía el horóscopo.',
  'ESPERANZADO': 'Optimista.<br><br>Carlos tenía esperanza en que el correo le trajera buenas noticias.',
  'ESPERANZADA': 'Optimista.<br><br>Michelle tenía esperanza en que el correo le trajera buenas noticias.',
  'EXPECTANTE': 'Esperanzado/a, a la espera de que ocurra algo.<br><br>Al comienzo del partido de fútbol, los fans estaban a la expectativa de un gol rápido.',
  'EXTRAÑADO': '"Apabullado, desconcertado, confundido.<br><br>Frank estaba extrañado por la desaparición de los gnomos de su jardín.',
  'EXTRAÑADA': 'Apabullada, desconcertada, confundida.<br><br>Daniela estaba extrañada por la desaparición de los gnomos de su jardín.',
  'FANTASIOSO': 'Soñar despierto.<br><br>Guillermo fantaseaba con ser una estrella de cine.',
  'FANTASIOSA': 'Soñar despierta.<br><br>Emma fantaseaba con ser una estrella de cine.',
  'FASCINADO': 'Cautivado, realmente interesado.<br><br>En la playa, los niños estaban fascinados con las criaturas que encontraron entre las rocas.',
  'FASCINADA': 'Cautivada, realmente interesada.<br><br>Paola estaba fascinada con la belleza de Arturo.',
  'FORMAL': 'Con una intención seria.<br><br>Enrique era muy formal acerca de sus creencias religiosas.',
  'HORRORIZADO': 'Aterrado, espantado.<br><br>El hombre se horrorizó al enterarse de que su nueva esposa ya estaba casada.',
  'HORRORIZADA': 'Aterrada, espantada.<br><br>Antonia estaba horrorizada por el accidente de transito.',
  'HOSTIL': 'Antipático/a.<br><br>Los dos vecinos se trataban con hostilidad tras una discusión debida a que uno de ellos ponía la música fuerte.',
  'IMPACIENTE': 'Inquieto/a, con deseos de que pase algo rápido.<br><br>Juana se impacientaba cada vez más mientras esperaba a su amiga que ya llevaba 20 minutos de retraso.',
  'IMPONENTE': 'Autoritario/a, mandón/a.<br><br>El sargento mayor parecía imponente cuando inspeccionaba a los nuevos reclutas.',
  'INCRÉDULO': 'Que no cree.<br><br>Simón estaba incrédulo al ver que había ganado la lotería.',
  'INCRÉDULA': 'Que no cree.<br><br>Alicia estaba incrédula al ver que había ganado la lotería.',
  'INDECISO': 'Inseguro, vacilante, incapaz de decidirse.<br><br>Pablo era tan indeciso que ni siquiera podía decidir qué comer',
  'INDECISA': 'Insegura, vacilante, incapaz de decidirse.<br><br>Tamara era tan indecisa que ni siquiera podía decidir qué comer.',
  'INDIFERENTE': 'Desinteresado/a, insensible, no le importa.<br><br>A Fernando le resultaba totalmente indiferente si iban al cine o al bar.',
  'INSEGURO': 'Dudoso, con sospecha, no cree en realidad.<br><br>Marío no estaba seguro de que su hijo le estuviera diciendo la verdad.',
  'INSEGURA': 'Dudosa, con sospecha, no cree en realidad.<br><br>María no estaba segura de que su hijo le estuviera diciendo la verdad.',
  'INSISTENTE': 'Demandante, persistente, perseverante.<br><br>Después de una cena de trabajo, Fran insistió en pagar toda la cuenta',
  'INSULTANTE': 'Grosero, ofensivo.<br><br>Los hinchas insultaron al árbitro después de que pitara un penalti.',
  'INTERESADO': 'Preguntando, curioso.<br><br>Después de ver Parque Jurásico, Hugo se interesó mucho por los dinosaurios.',
  'INTERESADA': 'Preguntando, curiosa.<br><br>Después de ver Parque Jurásico, Javiera se interesó mucho por los dinosaurios.',
  'INTRANQUILO': 'Preocupado, turbado, inquieto.<br><br>El doctor se intranquilizó cuando su paciente empeoró.<br>Claudio se sintió un poco intranquilo antes de recibir la noticia.',
  'INTRANQUILA': 'Preocupada, turbada, inquieta.<br><br>El doctor se intranquilizó cuando su paciente empeoró.<br>Claudia se sintió un poco intranquila por aceptar que la llevara en coche el hombre que había conocido ese mismo día.',
  'INTRIGADO': 'Muy curioso, muy interesado, necesita saber más.<br><br>Una llamada telefónica misteriosa intrigó a Ricardo.',
  'INTRIGADA': 'Muy curiosa, muy interesada, necesita saber más.<br><br>Una llamada telefónica dejó a Marina intrigada.',
  'IRRITADO': 'Exasperado, molesto.<br><br>Juan estaba irritado por todo el correo basura que recibía.',
  'IRRITADA': 'Exasperada, molesta.<br><br>Carmen estaba irritada por todo el correo basura que recibía.',
  'JUGUETÓN': 'Muy animado y divertido.<br><br>El pequeño Daniel estaba juguetón en su fiesta de cumpleaños.',
  'JUGUETONA': '"Muy animada y divertida.<br><br>La pequeña Lucy estaba juguetona en su fiesta de cumpleaños.',
  'LLENO DE ODIO': 'Demostrar mucho desagrado.<br><br>Los dos hermanos se odiaban y siempre peleaban entre ellos.',
  'LLENA DE ODIO': 'Demostrar mucho desagrado.<br><br>Las dos hermanas se odiaban y siempre peleaban entre ellas.',
  'MOLESTO': 'Agitado, preocupado, incómodo.<br><br>El hombre estaba muy molesto cuando su madre le engañó.',
  'MOLESTA': 'Agitada, preocupada, incómoda.<br><br>La madre estaba muy molesta cuando su hijo le engañó.',
  'NERVIOSO': 'Apreensivo, tenso, preocupado.<br><br>Justo antes de su entrevista laboral, Carlos se puso muy nervioso.',
  'NERVIOSA': 'Apreensiva, tensa, preocupada.<br><br>Justo antes de su entrevista laboral, Alicia se puso muy nerviosa.',
  'OFENDIDO': 'Insultado, herido, dolido.<br><br>Cuando alguien hizo una broma acerca de su peso, Martin se sintió ofendido.',
  'OFENDIDA': 'Insultada, herida, dolida.<br><br>Cuando alguien hizo una broma acerca de su peso, Marta se sintió ofendida.',
  'PENSATIVO': 'Pensar sobre algo.<br><br>Felipe parecía pensativo días antes de cortar con su novia.',
  'PENSATIVA': 'Pensar sobre algo.<br><br>Sol parecía pensativo días antes de cortar con su novio.',
  'PERPLEJO': 'Apabullado, confundido.<br><br>Juan se quedó perplejo al ver que su hija pequeña acababa un crucigrama en sólo cinco minutos.',
  'PERPLEJA': 'Apabullada, confundida.<br><br>Juana se quedó perpleja al ver que su hija pequeña acababa un crucigrama en sólo cinco minutos.',
  'PREOCUPADO': 'Ansioso, impaciente, atribulado.<br><br>Cuando su gato se perdió, el niño estaba muy preocupado.',
  'PREOCUPADA': 'Ansiosa, impaciente, atribulada.<br><br>Cuando su gato se perdió, la niña estaba muy preocupada.',
  'PRUDENTE': 'Cuidadoso/a, precavido/a.<br><br>Sara era bastante prudente cuando hablaba con alguien nuevo.',
  'RECELOSO': 'Desconfiado, suspicaz.<br><br>El señor se mostraba receloso de hacer su primera compra por internet.',
  'RECELOSA': 'Desconfiada, suspicaz.<br><br>La señora se mostraba recelosa de hacer su primera compra por internet.',
  'RECONFORTANTE': 'Que brinda consuelo, que da compasión.<br><br>La enfermera reconfortaba al soldado herido.',
  'REFLEXIVO': 'Contemplativo, pensativo.<br><br>Tomás parecía reflexivo cuando pensaba en qué había hecho de su vida.',
  'REFLEXIVA': 'Contemplativa, pensativa.<br><br>Maria parecía reflexiva cuando pensaba en qué había hecho de su vida.',
  'RELAJADO': 'Sereno, calmo, sin preocupaciones.<br><br>En vacaciones, Patricio se sintió feliz y relajado.',
  'RELAJADA': 'Serena, calma, sin preocupaciones.<br><br>En vacaciones, Patricia se sintió feliz y relajada.',
  'RESENTIDO': 'Amargo, hostil.<br><br>El empresario estaba resentido hacia su joven colega',
  'RESENTIDA': 'Amarga, hostil.<br><br>La empresaria estaba resentida hacia su joven colega',
  'SARCÁSTICO': 'Cínico, burlón, desdeñoso.<br><br>El humorista hizo un comentario sarcástico cuando alguien entró tarde al teatro.',
  'SARCÁSTICA': 'Cínica, burlóna, desdeñosa.<br><br>Lucia estaba siendo sarcástica cuando dijo que el clima estaba fenomenal.',
  'SATISFECHO': 'Contento, conforme.<br><br>Después de una buena caminata y una buena comida, David se sentía muy satisfecho.<br><br>Contento, realizado.<br><br>Esteban se sintió muy satisfecho después de haber conseguido justo el apartamento que él quería.',
  'SATISFECHA': 'Contenta, conforme.<br><br>Después de una buena caminata y una buena comida, Sara se sentía muy satisfecha.<br><br>Contenta, realizada.<br><br>Ester se sintió muy satisfecha después de haber conseguido justo el apartamento que élla quería.',
  'SEDUCTOR': 'Pícaro, coqueto, descarado.<br><br>Santiago se mostró seductor cuando le guiñó el ojo a una extraña en la fiesta.',
  'SEDUCTORA': 'Pícara, coqueta, descarada.<br><br>Sandra se mostró seductora cuando le guiñó el ojo a un extraño en la fiesta.',
  'SEGURO': 'Firme, fiable.<br><br>El modelo avanzaba seguro por la pasarela.',
  'SEGURA': 'Firme, fiable.<br><br>La modelo avanzaba segura por la pasarela.',
  'SERIO': 'Solemne, formal.<br><br>El gerente del banco se puso serio al rechazar un crédito a Miguel.',
  'SERIA': 'Solemne, formal.<br><br>La gerente del banco se puso seria al rechazar un crédito a Miguel.',
  'SEVERO': 'Hosco, estricto, firme.<br><br>El maestro se veía muy severo cuando regañó a la clase',
  'SEVERA': 'Hosca, estricta, firme.<br><br>La maestra se veía muy severa cuando regañó a la clase.',
  'SUPLICANTE': 'Rogar, implorar.<br><br>Nicolás suplicó a su padre que le prestara el coche.',
  'SUSPICAZ': 'Que no cree, sospecha, duda.<br><br>Después de que Samuel hubiera perdido su billetera por segunda vez en el trabajo, se sintió suspicaz de uno de sus colegas.',
  'TEMEROSO': 'Aterrorizado, preocupado.<br><br>El niño caminaba temeroso por la calle oscura.',
  'TEMEROSA': 'Aterrorizada, preocupada.<br><br>Las mujeres caminaban temerosas por la calle oscura.',
  'TÍMIDO': 'Vergonzoso, cohibido.<br><br>El niño era muy tímido con los desconocidos',
  'TÍMIDA': 'Vergonzosa, cohibida.<br><br>La niña era muy tímida con los desconocidos',
  'TRANQUILIZADOR': 'Contenedor, alentador, que inspira confianza.<br><br>Andrés se mostraba tranquilizador al decirle a su esposa que su hijo pequeño se encontraba bien.',
  'TRANQUILIZADORA': 'Contenedora, alentadora, que inspira confianza.<br><br>Andrea se mostraba tranquilizadora al decirle a su esposo que su hijo pequeño se encontraba bien.',
  'VACILANTE': 'Indeciso/a, inseguro/a, cauteloso/a.<br><br>Andrea vaciló un poco antes de entrar a la sala llena de extraños.',
}

jsPsych.plugins['survey-multi-choice-CSCN-RMET'] = (function() {

  var plugin = {};
  plugin.info = {
    name: 'survey-multi-choice-CSCN-RMET',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {type: jsPsych.plugins.parameterType.STRING,
                     pretty_name: 'Prompt',
                     default: undefined,
                     description: 'The strings that will be associated with a group of options.'},
          options: {type: jsPsych.plugins.parameterType.STRING,
                     pretty_name: 'Options',
                     array: true,
                     default: undefined,
                     description: 'Displays options for an individual question.'},
          required: {type: jsPsych.plugins.parameterType.BOOL,
                     pretty_name: 'Required',
                     default: false,
                     description: 'Subject will be required to pick an option for each question.'},
          horizontal: {type: jsPsych.plugins.parameterType.BOOL,
                        pretty_name: 'Horizontal',
                        default: false,
                        description: 'If true, then questions are centered and options are displayed horizontally.'},
        }
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'HTML formatted string to display at the top of the page above all the questions.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      }
    }
  }
  plugin.trial = function(display_element, trial) {
    var plugin_id_name = "jspsych-survey-multi-choice-CSCN-RMET";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    // inject CSS for trial
    display_element.innerHTML = '<style id="jspsych-survey-multi-choice-CSCN-RMET-css"></style>';
    var cssstr = ".jspsych-survey-multi-choice-CSCN-RMET-question { margin-top: 2em; margin-bottom: 2em; text-align: left; }"+
      ".jspsych-survey-multi-choice-CSCN-RMET-text span.required {color: darkred;}"+
      ".jspsych-survey-multi-choice-CSCN-RMET-horizontal .jspsych-survey-multi-choice-CSCN-RMET-text {  text-align: center;}"+
      ".jspsych-survey-multi-choice-CSCN-RMET-option { line-height: 2; }"+
      ".jspsych-survey-multi-choice-CSCN-RMET-horizontal .jspsych-survey-multi-choice-CSCN-RMET-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}"+
      "label.jspsych-survey-multi-choice-CSCN-RMET-text input[type='radio'] {margin-right: 1em;}"

    display_element.querySelector('#jspsych-survey-multi-choice-CSCN-RMET-css').innerHTML = cssstr;

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.innerHTML += '<form id="'+trial_form_id+'"></form>';
    var trial_form = display_element.querySelector("#" + trial_form_id);
    // show preamble text
    var preamble_id_name = _join(plugin_id_name, 'preamble');
    if(trial.preamble !== null){
      trial_form.innerHTML += '<div id="'+preamble_id_name+'" class="'+preamble_id_name+'">'+trial.preamble+'</div>';
    }

    questions_list = {}

    // add multiple-choice questions
    for (var i = 0; i < trial.questions.length; i++) {
        // create question container
        var question_classes = [_join(plugin_id_name, 'question')];
        if (trial.questions[i].horizontal) {
          question_classes.push(_join(plugin_id_name, 'horizontal'));
        }

        questions_list["Q".concat(i.toString())] = trial.questions[i].prompt;

        trial_form.innerHTML += '<div id="'+_join(plugin_id_name, i)+'" class="'+question_classes.join(' ')+'"></div>';

        var question_selector = _join(plugin_id_selector, i);

        // add question text
        display_element.querySelector(question_selector).innerHTML += '<p class="' + plugin_id_name + '-text survey-multi-choice">' + trial.questions[i].prompt + '</p>';

      // create option radio buttons
      for (var j = 0; j < trial.questions[i].options.length; j++) {
        var option_id_name = _join(plugin_id_name, "option", i, j),
        option_id_selector = '#' + option_id_name;

        // add radio button container
        display_element.querySelector(question_selector).innerHTML += '<div id="'+option_id_name+'" class="'+_join(plugin_id_name, 'option')+'"></div>';

        // add label and question text
        var form = document.getElementById(option_id_name)
        var input_name = _join(plugin_id_name, 'response', i);
        var input_id = _join(plugin_id_name, 'response', i, j);
        var label = document.createElement('label');
        label.setAttribute('class', plugin_id_name+'-text');
        label.setAttribute('style', 'display: inline');

        //console.log((trial.questions[i].options[j].slice(0, -1) + "O/A").replace(/\&nbsp;/g, ''))

        // modificacion para tarea de miradas:
        // label.innerHTML = trial.questions[i].options[j];
        if (trial.questions[i].options[j].replace(/\&nbsp;/g, '') in definitions) {
          tooltip = definitions[trial.questions[i].options[j].replace(/\&nbsp;/g, '')];
        } else if ( ((trial.questions[i].options[j].slice(0, -1) + "O/A").replace(/\&nbsp;/g, '')) in definitions) {
          tooltip = definitions[((trial.questions[i].options[j].slice(0, -1) + "O/A").replace(/\&nbsp;/g, ''))];
        } else if ((trial.questions[i].options[j]).replace(/\&nbsp;/g, '') == "LLENO DE ODIO") {
          tooltip = definitions["LLENO/A DE ODIO"];
        } else {
          tooltip = "";
        }

        // JUGUETÓN/A, TRANQUILIZADOR/A

        label.innerHTML = trial.questions[i].options[j] + " " + "<div class=tooltip>" + "(?)" + '<span class="tooltiptext">' + tooltip + '</div>';
        label.setAttribute('for', input_id)

        //console.log(label);

        // create radio button
        var input = document.createElement('input');
        input.setAttribute('type', "radio");
        input.setAttribute('name', input_name);
        input.setAttribute('id', input_id);
        input.setAttribute('value', trial.questions[i].options[j]);
        form.appendChild(label);
        form.insertBefore(input, label);

      }

      if (trial.questions[i].required) {
        // add "question required" asterisk
        //modificacion display_element.querySelector(question_selector + " p").innerHTML += "<span class='required'>*</span>";

        // add required property
        display_element.querySelector(question_selector + " input[type=radio]").required = true;
      }
    }
    // add submit button
    //modificacion
    trial_form.innerHTML += "<p>"
    //modificacion
    trial_form.innerHTML += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '></input>';
    //modificacion
    trial_form.innerHTML += "<p>"
    //modificacion

    trial_form.addEventListener('submit', function(event) {
      event.preventDefault();
      var matches = display_element.querySelectorAll("div." + plugin_id_name + "-question");
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll("div." + plugin_id_name + "-question");
      for(var i=0; i<matches.length; i++){
        match = matches[i];
        var id = "Q" + i;
        if(match.querySelector("input[type=radio]:checked") !== null){
          var val = match.querySelector("input[type=radio]:checked").value;
        } else {
          var val = "";
        }
        var obje = {};
        obje[id] = val;
        Object.assign(question_data, obje);
      }
      // save data
      var trial_data = {
        "stimulus": stripHtml(JSON.stringify(questions_list)),
        "rt": response_time,
        "response": stripHtml(JSON.stringify(question_data))
      };
      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
