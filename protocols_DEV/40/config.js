// Configuration file

// Main parameters -------------------------------------------------------------

pid = 40; // old 31
online = false;
max_participants = 100000000;
random_id = true;
max_time = "01:01:00";
accept_discarded = true;
debug_mode = false; // SHOULD be false in production
language = "English";
finish_link = "";


// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['ConsentAudio'];
secuentially_ordered_tasks_1 = ['DEMOGR40', 'Bayesian40'];
randomly_ordered_tasks = ['WaisWorkingMemory', 'WaisMatrices', 'BNT', 'DEBRIEF40'];
last_tasks = ['Goodbye'];

tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'randomly_ordered_tasks', 'last_tasks'];


//message_str = 'The protocol is loading, it will take a few seconds...';

// media to preload in protocol_controller
//img_folder = 'media/images/Bayesian40/';
//AUDIO FOLDER? img_folder = 'media/images/Bayesian40/';
images =  {"Bayesian40": ['BreastCancer_NPV.png', 'BreastCancer_PPV.png', 'Example_NPV.png', 'Example_PPV.png', 'intro.png', 'phone-rotation.png', 'Stroke_NPV.png', 'Stroke_PPV.png'], 
          "WaisWorkingMemory": ['cross.png'],
          "WaisMatrices": ['10A.png', '10B_1.png', '10B_2.png', '10B_3.png', '10B_4.png', '10B_5.png', '10B.png', '11A.png', '11B_1.png', '11B_2.png', '11B_3.png', '11B_4.png', '11B_5.png', '11B.png', '12A.png', '12B_1.png', '12B_2.png', '12B_3.png', '12B_4.png', '12B_5.png', '12B.png', '13A.png', '13B_1.png', '13B_2.png', '13B_3.png', '13B_4.png', '13B_5.png', '13B.png', '14A.png', '14B_1.png', '14B_2.png', '14B_3.png', '14B_4.png', '14B_5.png', '14B.png', '15A.png', '15B_1.png', '15B_2.png', '15B_3.png', '15B_4.png', '15B_5.png', '15B.png', '16A.png', '16B_1.png', '16B_2.png', '16B_3.png', '16B_4.png', '16B_5.png', '16B.png', '17A.png', '17B_1.png', '17B_2.png', '17B_3.png', '17B_4.png', '17B_5.png', '17B.png', '18A.png', '18B_1.png', '18B_2.png', '18B_3.png', '18B_4.png', '18B_5.png', '18B.png', '19A.png', '19B_1.png', '19B_2.png', '19B_3.png', '19B_4.png', '19B_5.png', '19B.png', '1A.png', '1B_1.png', '1B_2.png', '1B_3.png', '1B_4.png', '1B_5.png', '1B.png', '20A.png', '20B_1.png', '20B_2.png', '20B_3.png', '20B_4.png', '20B_5.png', '20B.png', '21A.png', '21B_1.png', '21B_2.png', '21B_3.png', '21B_4.png', '21B_5.png', '21B.png', '22A.png', '22B_1.png', '22B_2.png', '22B_3.png', '22B_4.png', '22B_5.png', '22B.png', '23A.png', '23B_1.png', '23B_2.png', '23B_3.png', '23B_4.png', '23B_5.png', '23B.png', '24A.png', '24B_1.png', '24B_2.png', '24B_3.png', '24B_4.png', '24B_5.png', '24B.png', '25A.png', '25B_1.png', '25B_2.png', '25B_3.png', '25B_4.png', '25B_5.png', '25B.png', '26A.png', '26B_1.png', '26B_2.png', '26B_3.png', '26B_4.png', '26B_5.png', '26B.png', '27A.png', '27B_1.png', '27B_2.png', '27B_3.png', '27B_4.png', '27B_5.png', '27B.png', '28A.png', '28B_1.png', '28B_2.png', '28B_3.png', '28B_4.png', '28B_5.png', '28B.png', '2A.png', '2B_1.png', '2B_2.png', '2B_3.png', '2B_4.png', '2B_5.png', '2B.png', '3A.png', '3B_1.png', '3B_2.png', '3B_3.png', '3B_4.png', '3B_5.png', '3B.png', '4A.png', '4B_1.png', '4B_2.png', '4B_3.png', '4B_4.png', '4B_5.png', '4B.png', '5A.png', '5B_1.png', '5B_2.png', '5B_3.png', '5B_4.png', '5B_5.png', '5B.png', '6A.png', '6B_1.png', '6B_2.png', '6B_3.png', '6B_4.png', '6B_5.png', '6B.png', '7A.png', '7B_1.png', '7B_2.png', '7B_3.png', '7B_4.png', '7B_5.png', '7B.png', '8A.png', '8B_1.png', '8B_2.png', '8B_3.png', '8B_4.png', '8B_5.png', '8B.png', '9A.png', '9B_1.png', '9B_2.png', '9B_3.png', '9B_4.png', '9B_5.png', '9B.png']};
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
all_conditions = {"Bayesian40": {"type": ["Text", "Image"], "recommendation": ["take", "avoid"]}};
