// You can include regular HTML code between the ``, edit the template, and or fill the template variables
// The content of intro_CONSENT will be shown in the Consent.js task
path_logo = "controllers/media/logo.png";

switch (language) {

    case "Spanish":

        // Template variables
        var_title = `[[Título del proyecto]]`;
        var_researcher_name = `[[Nombre investigador/a]]`;
        var_researcher_email = `[[EMAIL investigador/a]]`;
        var_researcher_affiliation = `[[Afiliacion investigador/a]]`;
        var_researcher_university = `[[Universidad investigador/a]]`;

        var_ethics_comitee_name_president = `[[Nombre presidenta/e comité ética]]`;
        var_ethics_comitee_phone = `[[Teléfono presidenta/e comité ética]]`;
        var_ethics_comitee_email = `[[Email presidenta/e comité ética]]`;

        var_purpose = `[[Breve descripcion del proposito del proyecto]]`;
        var_procedure = `[[Breve descripcion del procedimiento]]`;
        var_comprehension = `[[Breve descripción de factores que comprenderemos mejor tras el estudio]]`;

        intro_CONSENT = `
        <div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + path_logo + `" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>
        <div>
        <h3 class="western" align="center">Consentimiento Informado</h3><br/>
        <b>Nombre del proyecto: </b>` + var_title + ` <br/>
        <b>Investigador(a) Principal: </b>` + var_researcher_name + ", " + var_researcher_affiliation + `.<br/>
        <b>Propósito: </b>` + var_purpose + `.<br/><br/>
        <b>Procedimiento: </b>` + var_procedure + `.<br/><br/>
        <b>Riesgos Asociados: </b>No hay riesgos asociados con este estudio. Si bien al responder, usted revela información privada, ésta será empleada únicamente para fines de investigación, resguardando la privacidad y confidencialidad, pues sólo se analizarán los datos agrupados y no los datos individuales.<br/><br/>
        <b>Beneficios: </b>Es probable que, como resultado de participar en este estudio, no haya beneficios inmediatos para usted. Sin embargo, los resultados mejorarán nuestra comprensión sobre ` + var_comprehension + `.<br/><br/>
        <b>Confidencialidad: </b>Al seleccionar &quot;acepto participar&quot;, usted da permiso al equipo de investigación para que analice sus datos. Sin embargo, toda la información producida en esta investigación es confidencial, y por tanto, sólo será utilizada con fines de investigación. No mantendremos su nombre en nuestra base de datos, ni habrá forma de asociar posteriormente la información que usted nos dé con su identidad. La información que usaremos, tanto en informes como en artículos que se deriven del estudio, consistirá solo en datos agrupados (por ejemplo, promedios). La información confidencial será almacenada con clave y de manera privada sólo en el computador del investigador responsable . Si desea tener más información o conocer los resultados de este estudio, puede contactarse con la persona responsable del proyecto (` + var_researcher_name + `, email: <a href="mailto:` + var_researcher_email + `">` + var_researcher_email + `</a>)<br/><br/>
        <b>Voluntariedad: </b>La participación en este estudio es voluntaria. Usted puede retirarse cuando lo desee sin que exista consecuencia negativa alguna por esto. Su retiro no significa que no pueda participar en otro de nuestros estudios en el futuro. Si usted tiene un reclamo o siente que sus derechos fueron vulnerados por alguna de las personas que realizan este estudio, puede contactarse con el Comité de Ética de la Universidad ` + var_researcher_university + `, cuyo Presidente/a o Secretario/a es ` + var_ethics_comitee_name_president + ` en el teléfono ` + var_ethics_comitee_phone + `, o en el correo electrónico: <a href="mailto:` + var_ethics_comitee_email + `">` + var_ethics_comitee_email + `</a>. <br/><br/>
        <em>Al seleccionar “acepto participar” usted declara que está dispuesto/a a participar voluntariamente de ésta investigación: </em>
        <BR><BR>
        </div>`;
        break;


    case "English":

        // Template variables
        var_title = `[[Title of the project]]`;
        var_researcher_name = `[[Name researcher]]`;
        var_researcher_email = `[[EMAIL researcher]]`;
        var_researcher_affiliation = `[[Affiliation researcher]]`;
        var_researcher_university = `[[University researcher]]`;

        var_ethics_comitee_name_president = `[[Name president ethics committee]]`;
        var_ethics_comitee_phone = `[[Phone number president ethics committee]]`;
        var_ethics_comitee_email = `[[Email president ethics committee]]`;

        var_purpose = `[[Brief description of the project's goal]]`;
        var_procedure = `[[Brief description of the procedure]]`;
        var_comprehension = `[[Brief description of the benefits of the study (improve our knowledge about what?)]]`;

        intro_CONSENT = `
        <div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + path_logo + `" name="UAI" align="bottom" width="200" height="44" border="0"/></p></div>
        <div>
        <h3 class="western" align="center">Informed Consent</h3><br/>
        <b>Name of the project: </b>` + var_title + ` <br/>
        <b>Principal Researcher: </b>` + var_researcher_name + ", " + var_researcher_affiliation + `.<br/>
        <b>Goal: </b>` + var_purpose + `.<br/><br/>
        <b>Procedure: </b>` + var_procedure + `.<br/><br/>
        <b>Associated risks: </b>There are no risks associated with this study. Although by responding, you reveal private information, it will be used only for research purposes, protecting your privacy and confidentiality, since only grouped data will be analyzed and not individual data.<br/><br/>
         <b>Benefits: </b>There may be no immediate benefits to you as a result of participating in this study. However, the results will improve our understanding of ` + var_comprehension + `.<br/><br/>
        <b>Confidentiality: </b>By selecting "I agree to participate", you give permission to the research team to analyze your data. However, all information produced in this research is confidential, and therefore will only be used for research purposes. We will not keep your name in our database, nor will there be any way to later associate the information you give us with your identity. The information we will use, both in reports and in articles derived from the study, will consist only of grouped data (for example, averages). Confidential information will be stored with a password and privately only on the computer of the responsible researcher. If you want more information or know the results of this study, you can contact the person responsible for the project (` + var_researcher_name + `, email: <a href="mailto:` + var_researcher_email + `">` + var_researcher_email + `</a>)<br/><br/>
        <b>Voluntariness: </b>Participation in this study is voluntary. You can withdraw whenever you wish without any negative consequences for this. Your withdrawal does not mean that you cannot participate in another of our studies in the future. If you have a claim or feel that your rights were violated by any of the people carrying out this study, you can contact the University Ethics Committee ` + var_researcher_university + `, whose president is ` + var_ethics_comitee_name_president + ` in the phone number ` + var_ethics_comitee_phone + `, o the email: <a href="mailto:` + var_ethics_comitee_email + `">` + var_ethics_comitee_email + `</a>. <br/><br/>
        <em>When selecting “I agree to participate” you declare that you are willing to voluntarily participate in this research: </em>
        <BR><BR>
        </div>`;
        break;
        
}
