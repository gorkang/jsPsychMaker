onkeydown = function block_fkeys(event){
  var x = event.which || event.keyCode;
  if(x == 112 || x == 116){ //blocks f1 and f5 keys
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

// limpieza de arrays dentro de arrays
function flatten(arr) {

  let final_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('random')) {
      final_arr = final_arr.concat(jsPsych.randomization.shuffle(window[arr[i]]));
    } else {
      final_arr = final_arr.concat(window[arr[i]]);
    }
  }

  return final_arr;
}

// Parameters - Do not change ----------------------------------

let params = new URLSearchParams(location.search);
uid = -1;
uid_external = -1;

iterations_for_review = 1; // usado para bloquear el experimento en caso de que se superen todas las condiciones

between_selection = {};
within_selection = {};
completed_experiments = [];
user_assigned = false;

actual_condition_data = [];

// Create condition Array for DB
var conditions = []
Object.entries(all_conditions).forEach(([task_name, condition_dict]) => {
  Object.entries(condition_dict).forEach(([key, conditions_temp]) => {
    for(var i=0; i < conditions_temp.length; i++) { conditions.push({ id_protocol: pid, condition_key: key, condition_name: conditions_temp[i], assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: task_name, type: "between"}) }
  })
})

// obtaining final array
all_tasks = flatten(tasks);


// Create tasks Array for DB
var tasks = [];
for(var i= 0; i < all_tasks.length; i++) {
  tasks.push({ id_protocol: pid, task_name: all_tasks[i]});
}

// Use IndexedDB or MySQL for offline or online protocols
if (online) {
  start_mysqldb(pid, max_participants);
  load_clean_mysql(iterations_for_review, max_participants);
} else {
  load_clean_indexeddb(iterations_for_review, max_participants);
}
