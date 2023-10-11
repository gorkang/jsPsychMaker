// Configuration file

// Main parameters -------------------------------------------------------------
pid = 31;
online = false;
max_participants = 100000000;
random_id = true;
max_time = "01:01:00";
accept_discarded = true;
debug_mode = true; // SHOULD be false in production
language = "English"; // Spanish or English


// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['WaisWorkingMemory', 'Bayesian31', 'ConsentAudio'];
last_tasks = ['Goodbye'];
secuentially_ordered_tasks_1 = ['DEMOGR31', 'Bayesian31'];
randomly_ordered_tasks = ['WaisWorkingMemory', 'WaisMatrices', 'BNT', 'DEBRIEF31'];
//tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];


//message_str = 'The protocol is loading, it will take a few seconds...';

// media to preload in protocol_controller
images =  {"Bayesian31": ['VPP_low_Cancer.png', 'VPN_high_Cancer.png',  'VPN_low_Stroke.png', 'VPP_high_Stroke.png',
          'instructions1.png', 'instructions2.png', 'iphone-rotation-475102.png'], "WaisWorkingMemory": ['cross.png']};
audios = {"ConsentAudio": ['ConsentAudio.mp3']};
videos = {};

salt = ">P/9k9YR&h?Q7pBe";

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// Conditions for experimental task
all_conditions = {"Bayesian31": {"type": ["Text", "Image"], "recommendation": ["should", "should not"]}};
