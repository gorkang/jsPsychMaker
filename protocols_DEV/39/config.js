// Configuration file

// Main parameters -------------------------------------------------------------

pid = 39; //old 22
online = true;
max_participants = 100000000;
random_id = true;
max_time = "02:00:00";
accept_discarded = false;
debug_mode = false; // SHOULD be false in production
disable_button_interaction = true; // Monkeys control, should be false when launching Monkeys
language = "Spanish";
finish_link = "";
store_URL = false; // For Prolific, Connect, etc. Stores URL in Consent

var_researcher_email = `gorkang@gmail.com`;

// ORDER OF TASKS --------------------------------------------------------------

first_tasks = ['Consent'];
last_tasks = ['Goodbye'];
secuentially_ordered_tasks_1 = ['DEMOGR39', 'Bayesian39', 'BNT', 'DEBRIEF39'];
tasks = ['first_tasks', 'secuentially_ordered_tasks_1', 'last_tasks'];

// MEDIA preloading ------------------------------------------------------------


// media to preload in protocol_controller
images =  {"Bayesian39": ['VPP_low_Cancer.png', 'VPN_high_Cancer.png',  'VPN_low_Stroke.png', 'VPP_high_Stroke.png', 'Example_PPV.png', 'Example_NPV.png', 'phone-rotation.png', 'intro.png']};
audios = {};
videos = {};

salt = ">P/9k9YR&h?Q7pBe";

// zoom type for images: Intense, fullPage or None
zoom_type = 'fullPage';

// BETWEEN subject variables ----------------------------------------------

// Conditions for experimental task
all_conditions = {"Bayesian39": {"type": ["text_only", "text_aid", "visual_aid"]}};
