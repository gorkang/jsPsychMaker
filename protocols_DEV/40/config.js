// Configuration file

// Main parameters -------------------------------------------------------------

pid = 40; // old 31
online = false;
max_participants = 100000000;
random_id = true;
max_time = "01:01:00";
accept_discarded = true;
debug_mode = false; // SHOULD be false in production
language = "English"
finish_link = ""


// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['ConsentAudio', 'WaisWorkingMemory'];
last_tasks = ['Goodbye'];
secuentially_ordered_tasks_1 = ['DEMOGR40', 'Bayesian40'];
randomly_ordered_tasks = ['WaisWorkingMemory', 'WaisMatrices', 'BNT', 'DEBRIEF40'];
//tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];


//message_str = 'The protocol is loading, it will take a few seconds...';

// media to preload in protocol_controller
//img_folder = 'media/images/Bayesian40/';
//AUDIO FOLDER? img_folder = 'media/images/Bayesian40/';
images =  {"Bayesian40": ['VPP_low_Cancer.png', 'VPN_high_Cancer.png',  'VPN_low_Stroke.png', 'VPP_high_Stroke.png', 'instructions1.png', 'instructions2.png', 'phone-rotation.png'], 
          "WaisWorkingMemory": ['cross.png']};
audios = {"ConsentAudio": ['ConsentAudio.mp3'],
          "WaisWorkingMemory": ['Directo/hombre_1.mp3', 'Directo/hombre_2.mp3', 'Directo/hombre_3.mp3', 'Directo/hombre_4.mp3', 'Directo/hombre_5.mp3', 'Directo/hombre_6.mp3', 'Directo/hombre_7.mp3', 'Directo/hombre_8.mp3', 'Directo/hombre_9.mp3', 'Directo/hombre_10.mp3', 'Directo/hombre_11.mp3', 'Directo/hombre_12.mp3', 'Directo/hombre_13.mp3', 'Directo/hombre_14.mp3', 'Directo/hombre_15.mp3', 'Directo/hombre_16.mp3',
                                'Inverso/hombre_1.mp3', 'Inverso/hombre_2.mp3', 'Inverso/hombre_3.mp3', 'Inverso/hombre_4.mp3', 'Inverso/hombre_5.mp3', 'Inverso/hombre_6.mp3', 'Inverso/hombre_7.mp3', 'Inverso/hombre_8.mp3', 'Inverso/hombre_9.mp3', 'Inverso/hombre_10.mp3', 'Inverso/hombre_11.mp3', 'Inverso/hombre_12.mp3', 'Inverso/hombre_13.mp3', 'Inverso/hombre_14.mp3', 'Inverso/hombre_15.mp3', 'Inverso/hombre_16.mp3',
                                'Secuencial/hombre_1.mp3', 'Secuencial/hombre_2.mp3', 'Secuencial/hombre_3.mp3', 'Secuencial/hombre_4.mp3', 'Secuencial/hombre_5.mp3', 'Secuencial/hombre_6.mp3', 'Secuencial/hombre_7.mp3', 'Secuencial/hombre_8.mp3', 'Secuencial/hombre_9.mp3', 'Secuencial/hombre_10.mp3', 'Secuencial/hombre_11.mp3', 'Secuencial/hombre_12.mp3', 'Secuencial/hombre_13.mp3', 'Secuencial/hombre_14.mp3', 'Secuencial/hombre_15.mp3', 'Secuencial/hombre_16.mp3']};
videos = {};

salt = ">P/9k9YR&h?Q7pBe";

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// Conditions for experimental task
all_conditions = {"Bayesian40": {"type": ["Text", "Image"], "recommendation": ["should", "should not"]}};
