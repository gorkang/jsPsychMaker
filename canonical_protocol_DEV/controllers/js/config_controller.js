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
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(jsPsych.randomization.shuffle(toFlatten)) : toFlatten);
  }, []);
}

// Parameters - Do not change ----------------------------------
check = true; // REVIEW: ??? que es esto? (lo añadi yo pq daba un error) | linea 101

let params = new URLSearchParams(location.search);
uid = -1;
uid_external = -1;

iterations_for_review = 1; // usado para bloquear el experimento en caso de que se superen todas las condiciones
random = false; // REVIEW: Dado que usamos tres variables (first_tasks, randomly_ordered_tasks y last_tasks), este parametro es redundante, no?

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

// REVIEW: Ver arriba. No entiendo esto...
// obtaining final array (if random)
// limpieza de arrays a lista de tareas
all_tasks = flatten(tasks);

// OLD VERSION
//var all_tasks = (random) ? (['Consent'].concat(first_tasks.concat(jsPsych.randomization.shuffle(randomly_ordered_tasks)))) : (['Consent'].concat(first_tasks.concat(randomly_ordered_tasks)));
//all_tasks = all_tasks.concat(last_tasks);

// Create tasks Array for DB
var tasks = []
for(var i= 0; i < all_tasks.length; i++) {
  tasks.push({ id_protocol: pid, task_name: all_tasks[i]})
}

// Use IndexedDB or MySQL for offline or online protocols
if (online) {
  start_mysqldb(pid, max_participants);
  load_clean_mysql(iterations_for_review, max_participants);
} else {
  load_clean_indexeddb(iterations_for_review, max_participants);
}
