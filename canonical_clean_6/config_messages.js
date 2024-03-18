// Configuration file for messages

var_researcher_email = `changemeto@myemail.com`;

// Logos (you can replace the files in controllers/media/)
logo_intro = "controllers/media/logo.png"
logo_online = "controllers/media/logo-CSCN.png"
logo_loading = "controllers/media/loading.gif"


switch (language) {

    case "Spanish":

        loading_protocol_message = "Cargando protocolo...";
        start_button = "Comenzar";
        continue_button = "Continuar";
        
        debug_message = `ヽ(ಠ_ಠ)ノ   ヽ(ಠ_ಠ)ノ   ヽ(ಠ_ಠ)ノ\n\n| | | PROTOCOLO EN DESARROLLO | | |\n\nNO ESTA LISTO PARA RECOLECTAR DATOS\n\nCAMBIA debug_mode a 'false' en config.js`;
        
        // INTRO [index.html] Screen where uid is entered
        intro_HTML = `<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + logo_intro + `" name="UAI" align="bottom" width="158" height="59" border="0"/></p></div>
        Para cambiar este texto, edita la variable intro_HTML en config_messages.js<BR><BR>
        Si tienes alguna duda, puedes escribirnos a: <a href="mailto:` + var_researcher_email + `?subject=Protocol ` + pid + `">` + var_researcher_email + `</a><BR><BR>
        Recuerda usar un navegador actualizado.`;

        // INTRO [index.html] Screen after uid is entered (if random_id = true, this is the first screen)
        outro_HTML = `<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + logo_intro + `" name="UAI" align="bottom" width="158" height="59" border="0"/></p></div>
        Para cambiar este texto, edita la variable outro_HTML en config_messages.js<BR><BR>
        Si tienes alguna duda, puedes escribirnos a: <a href="mailto:` + var_researcher_email + `?subject=Protocol ` + pid + `">` + var_researcher_email + `</a><BR><BR>
        Recuerda usar un navegador actualizado.`;


        // helper messages ------------------------------------------------------------

        outro_ending = "<br><br>Presiona el botón " + start_button + " para comenzar el protocolo"; // Text to show at the end of the outro
        fullscreen_text = 'El protocolo entrará en modo pantalla completa.'; // Text to show when fullscreen mode is activated
        fullscreen_label = 'Pantalla completa'; // Label of the fullscreen button
        message_str = 'El protocolo está cargando, espere un momento...'; // Message when preloading media
        max_participants_reached = 'Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, intentalo más tarde o escríbenos a: ' + var_researcher_email; // Message when max participants is reached
        discarded_time_message = ["<B>Tu cupo caducará en ", " horas ["," minutos].</B>"]; // Message when time is running out
        discarded_time_message_2 = "Este participante fue descartado del protocolo por superar el tiempo asignado (" + max_time + ")."; // Message when time is out
        tasks_completed_message = "Ya has completado todas las tareas de este protocolo."; // Message when all tasks are completed
        tasks_count_message = ["Ya has completado ", " de ", " tareas. <br><br> Para continuar con las ", " últimas tareas, presiona el botón. "]; // Message when a number of tasks are completed
        exit_fullscreen_message = "Si sales de pantalla completa pueden perderse datos. Por favor, pulsa F11 para volver al protocolo."; // Message when exiting fullscreen mode
        progress_bar_message = 'Porcentaje completado'; // Message to show in the progress bar
        loading_resources_message = 'Cargando recursos...'; // Message to show when loading resources
        zoom_in_out_message = "Haz click de nuevo en la imagen para volver atrás";
        text_error_zoom = "Tienes que hacer click sobre la imagen para que se active el botón";


        // mysql/indexedDB controller messages ------------------------------------------------------------

        out_of_slots_message = 'No hay cupos disponibles. <BR>Si tiene dudas puede comunicarse con: ' + var_researcher_email + '. <BR><BR><img src="' + logo_online + '" name="CSCN" align="bottom" border="0"/>'; // Message when there are no more slots available
        new_participant_message = 'Nuevo participante. Iniciando protocolo... <BR><BR><img src="' + logo_loading + '" name="UAI" align="bottom" border="0"/>'; // Message when a new participant is created
        status_loading_message = 'Participante encontrado. Cargando estado... <BR><BR><img src="' + logo_loading + '" name="UAI" align="bottom" border="0"/>'; // Message when a participant is found
        discarded_user_message = 'Tiempo excedido. Recuperando datos de participante... <BR><BR><img src="' + logo_loading + '" name="UAI" align="bottom" border="0"/>'; // Message when a participant is discarded
        discarded_user_no_time_message = 'El participante ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="' + logo_online + '" name="CSCN" align="bottom" border="0"/>'; // Message when a participant is discarded because time is out
        completed_user_message = 'El participante ya completó el protocolo. <BR><BR><img src="' + logo_online + '" name="CSCN" align="bottom" border="0"/>'; // Message when a participant has already completed the protocol
        user_not_found_message = "Participante no encontrado"; // Message when a participant is not found
        break;


    default:

        loading_protocol_message = "Loading protocol...";
        start_button = "Start";
        continue_button = "Continue";
        
        debug_message = `ヽ(ಠ_ಠ)ノ   ヽ(ಠ_ಠ)ノ   ヽ(ಠ_ಠ)ノ\n\n| | | PROTOCOL IN DEVELOPMENT | | |\n\nNOT READY FOR DATA COLLECTION\n\nCHANGE debug_mode to 'false' in config.js`;
    
        // INTRO [index.html] Screen where uid is entered
        intro_HTML = `<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + logo_intro + `" name="UAI" align="bottom" width="158" height="59" border="0"/></p></div>
        To change this text, edit the variable intro_HTML in config_messages.js<BR><BR>
        If you have any doubts, you can write us to: <a href="mailto:` + var_researcher_email + `?subject=Protocol ` + pid + `">` + var_researcher_email + `</a><BR><BR>
        Remember to use a fully updated browser`;

        // INTRO [index.html] Screen after uid is entered (if random_id = true, this is the first screen)
        outro_HTML = `<div title="logo"><p style="margin-bottom: 0.2in; line-height: 100%"><img src="` + logo_intro + `" name="UAI" align="bottom" width="158" height="59" border="0"/></p></div>
        To change this text, edit the variable outro_HTML in config_messages.js<BR><BR>
        If you have any doubts, you can write us to: <a href="mailto:` + var_researcher_email + `?subject=Protocol ` + pid + `">` + var_researcher_email + `</a><BR><BR>
        Remember to use a fully updated browser`;


        // helper messages ------------------------------------------------------------

        outro_ending = "<br><br>Press the " + start_button + " button to begin the protocol."; // Text to show at the end of the outro
        fullscreen_text = 'The protocol will enter Full Screen.'; // Text to show when fullscreen mode is activated
        fullscreen_label = 'Full Screen'; // Label of the fullscreen button
        message_str = 'The protocol is loading, wait a moment...'; // Message when preloading media
        max_participants_reached = 'We reached the maximum number of participants for this protocol.\nPlease try again later, or write us to: ' + var_researcher_email; // Message when max participants is reached
        discarded_time_message = ["<B>Your slot will expire in ", " hours ["," minutes].</B>"]; // Message when time is running out
        discarded_time_message_2 = "This participant was discarded from the protocol for exceeding the allotted time (" + max_time + ")."; // Message when time is out
        tasks_completed_message = "You already completed all the tasks in the protocol."; // Message when all tasks are completed
        tasks_count_message = ["You completed ", " out of ", " tasks. <br><br> To continue with the last ", " tasks, press the button. "]; // Message when a number of tasks are completed
        exit_fullscreen_message = "If you exit Full Screen, your data could be lost. Please, press F11 to go back to the protocol."; // Message when exiting fullscreen mode
        progress_bar_message = 'Percentage completed'; // Message to show in the progress bar
        loading_resources_message = 'Loading resources...'; // Message to show when loading resources
        zoom_in_out_message = "Click again on the image to zoom out";
        text_error_zoom = "You have to click on the image for the button to activate.";


        // mysql/indexedDB controller messages ------------------------------------------------------------

        out_of_slots_message = 'No available slots. <BR>If you have any doubts, you can contact: ' + var_researcher_email + '. <BR><BR><img src="' + logo_online + '" name="CSCN" align="bottom" border="0"/>'; // Message when there are no more slots available
        new_participant_message = 'New participant. Starting protocol... <BR><BR><img src="' + logo_loading + '" name="UAI" align="bottom" border="0"/>'; // Message when a new participant is created
        status_loading_message = 'Participant found. Loading status... <BR><BR><img src="' + logo_loading + '" name="UAI" align="bottom" border="0"/>'; // Message when a participant is found
        discarded_user_message = 'Time exceeded. Retrieving participant data... <BR><BR><img src="' + logo_loading + '" name="UAI" align="bottom" border="0"/>'; // Message when a participant is discarded
        discarded_user_no_time_message = 'This participant was discarded from the protocol for exceeding the allotted time (' + max_time + '). If you have any doubts, write us to '  + var_researcher_email + '. <BR><BR><img src="' + logo_online + '" name="CSCN" align="bottom" border="0"/>'; // Message when a participant is discarded because time is out
        completed_user_message = 'The participant already completed the protocol. <BR><BR><img src="' + logo_online + '" name="CSCN" align="bottom" border="0"/>'; // Message when a participant has already completed the protocol
        user_not_found_message = "Participant not found"; // Message when a participant is not found
        break;
}

