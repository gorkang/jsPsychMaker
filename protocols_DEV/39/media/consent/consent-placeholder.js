// You can include regular HTML code between the ``, edit the template, and or fill the template variables

// Template variables
path_logo = "media/html/logo-UAI.png";
var_title = `Comprensión y toma de decisiones en población general y personal sanitario de pruebas de screening y diagnósticas: hacia la toma de decisiones conjunta`;
var_researcher_name = `Gorka Navarrete`;
var_researcher_email = `gorkang@gmail.com`;
var_researcher_affiliation = `Centro de Neurociencia Social y Cognitiva`;
var_researcher_university = `Universidad Adolfo Ibáñez`;

var_ethics_comitee_name_president = `Paola Cañon`;
var_ethics_comitee_phone = `(562) 2331-1277`;
var_ethics_comitee_email = `paola.canon.g@uai.cl`;


var_purpose = `En este proyecto estamos investigando cómo las personas razonan y toman decisiones en contextos médicos. Este estudio es financiado por FONDECYT`;
var_procedure = `Usted deberá completar algunas pruebas y cuestionarios en un computador. Su tarea consistirá en responder lo más fiel y cuidadosamente que pueda. El tiempo que tomará su participación variará dependiendo de lo rápido que complete las tareas. Sin embargo, estimamos que ese tiempo no superará los 15 minutos`;
var_comprehension = `cómo las personas razonan y toman decisiones. También podrían beneficiar a las ciencias aplicadas, que usan hallazgos empíricos obtenidos de experimentos como éste`;


// The content of intro_CONSENT will be shown in the Consent.js task
intro_CONSENT = `

<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + path_logo + `" name="UAI" align="bottom" width="200" height="60" border="0"/></p></div>
<div>
<h3 class="western" align="center">Consentimiento Informado</h3><br/>
<b>Nombre del proyecto: </b>` + var_title + `.<br/>
<b>Investigador(a) Principal: </b>` + var_researcher_name + ", " + var_researcher_affiliation + `.<br/>
<b>Propósito: </b>` + var_purpose + `.<br/><br/>
<b>Procedimiento: </b>` + var_procedure + `.<br/><br/>
<b>Riesgos Asociados: </b>No hay riesgos asociados con este estudio. Si bien al responder, usted revela información privada, esta será empleada únicamente para fines de investigación, resguardando la privacidad y confidencialidad, pues sólo se analizarán los datos agrupados y no los datos individuales.<br/><br/>
<b>Beneficios: </b>Es probable que, como resultado de participar en este estudio, no haya beneficios inmediatos para usted. Sin embargo, los resultados mejorarán nuestra comprensión sobre ` + var_comprehension + `.<br/><br/>
<b>Confidencialidad: </b>Al seleccionar &quot;acepto participar&quot;, usted da permiso al equipo de investigación para que analice sus datos. Sin embargo, toda la información producida en esta investigación es confidencial, y por tanto, sólo será utilizada con fines de investigación. No mantendremos su nombre en nuestra base de datos, ni habrá forma de asociar posteriormente la información que usted nos dé con su identidad. La información que usaremos, tanto en informes como en artículos que se deriven del estudio, consistirá solo en datos agrupados (por ejemplo, promedios). La información confidencial será almacenada con clave y de manera privada sólo en el computador del investigador responsable. Si desea tener más información o conocer los resultados de este estudio, puede contactarse con la persona responsable del proyecto (` + var_researcher_name + `, email: <a href="mailto:` + var_researcher_email + `">` + var_researcher_email + `</a>)<br/><br/>
<b>Voluntariedad: </b>La participación en este estudio es voluntaria. Usted puede retirarse cuando lo desee sin que exista consecuencia negativa alguna por esto. Su retiro no significa que no pueda participar en otro de nuestros estudios en el futuro. Si usted tiene un reclamo o siente que sus derechos fueron vulnerados por alguna de las personas que realizan este estudio, puede contactarse con el Comité de Ética de la ` + var_researcher_university + `, cuyo Presidente/a o Secretario/a es ` + var_ethics_comitee_name_president + ` en el teléfono ` + var_ethics_comitee_phone + `, o en el correo electrónico: <a href="mailto:` + var_ethics_comitee_email + `">` + var_ethics_comitee_email + `</a>. <br/><br/>
<em>Al seleccionar “acepto participar” usted declara que está dispuesto/a a participar voluntariamente de esta investigación: </em>
<BR><BR>
</div>

`;
