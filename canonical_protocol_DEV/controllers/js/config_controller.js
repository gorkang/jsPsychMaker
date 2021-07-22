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

// REVIEW: Ver arriba. No entiendo esto...
// obtaining final array (if random)
var all_tasks = (random) ? (['Consent'].concat(first_tasks.concat(jsPsych.randomization.shuffle(randomly_ordered_tasks)))) : (['Consent'].concat(first_tasks.concat(randomly_ordered_tasks)));
all_tasks = all_tasks.concat(last_tasks);

// Create tasks Array for DB
var tasks = []
for(var i= 0; i < all_tasks.length; i++) {
  tasks = tasks.push({ id_protocol: pid, task_name: all_tasks[i]})
}

// Create condition Array for DB
var conditions = []
Object.entries(all_conditions).forEach(([key, value]) => {
  for(var i=0; i < value.length; i++) { conditions.push({ id_protocol: pid, condition_name: value[i], assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: key, type: "between"}) }
})

// Use IndexedDB or MySQL for offline or online protocols
if (online) {
  start_mysqldb(pid, max_participants);
  load_clean_mysql(iterations_for_review, max_participants);
} else {
  load_clean_indexeddb(iterations_for_review, max_participants);
}
