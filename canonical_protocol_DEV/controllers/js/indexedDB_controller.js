function start_indexeddb() {
  return new Promise(
    function(resolve, reject) {
      //prefixes of implementation that we want to test
      window.indexedDB = window.indexedDB || window.mozIndexedDB ||
      window.webkitIndexedDB || window.msIndexedDB;

      //prefixes of window.IDB objects
      window.IDBTransaction = window.IDBTransaction ||
      window.webkitIDBTransaction || window.msIDBTransaction;
      window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
      window.msIDBKeyRange;

      if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.");
      }

      const protocol_stats = { id_protocol: pid, counter: 0, created_date: new Date().toISOString().slice(0, 19), max_participants: max_participants, last_revision: "None"};
      //const user_extras = { id_protocol: pid, counter: 0, start_date: new Date().toISOString().slice(0, 19)};

      var db;
      var request = window.indexedDB.open("user_management", 1);

      request.onerror = function(event) {
        console.log("error: ");
        reject("");
      };

      request.onsuccess = function(event) {
        db = request.result;
        //console.log("success: "+ db);
        resolve(db);
      };

      request.onupgradeneeded = function(event) {
        var db = event.target.result;
        // usuarios
        db.createObjectStore("user", {keyPath: "id_user", autoIncrement:true });
        // stats del protocolo
        protocol_table = db.createObjectStore("protocol", {keyPath: "id_protocol"});
        // condiciones
        condition_table = db.createObjectStore("experimental_condition", {keyPath: "id_condition", autoIncrement:true });
        // tareas
        task_table = db.createObjectStore("task", {keyPath: "id_task", autoIncrement:true });

        // tablas intermedias para el many to many
        db.createObjectStore("user_task", {keyPath: "id", autoIncrement:true });
        db.createObjectStore("user_condition", {keyPath: "id", autoIncrement:true });

        for (var i in conditions) {
          condition_table.add(conditions[i]);
        }
        for (var j in tasks) {
          task_table.add(tasks[j]);
        }
        protocol_table.add(protocol_stats);
      };
    }
  );
}

function clean_indexeddb(db){
  readAllIndexedSync("user", db).then(
    function (results) {
      max_sec = date_to_mil(max_time);
      //actual_time = new Date();
      actual_time = new Date().toISOString().slice(0, 19);

      for (var i = 0; i < results.length; i++) {
        // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el usuario es descartado y removido de los usuarios asignados
        if ((actual_time - new Date(results[i].start_date))/1000 > max_sec && results[i].status == "assigned") {
          updateIndexed("user", results[i].id_user, "status", "discarded", db);
          updateIndexed("protocol", pid, "counter", "-", db);

          findAllIndexedSync("user_condition", "id_user", results[i].id_user, pid, db).then(function(user_conditions) {
            for (var i = 0; i < user_conditions.length; i++) {
              updateIndexed("experimental_condition", user_conditions[i].id_condition, "assigned_task", "-", db);
            }
          });

        }
      }
    }, function () {
      console.log("users table not found");
    }
  );
}

// loading tasks scripts, wait for db charged, then wait for read conditions table, then enable check button
function load_clean_indexeddb(iterations_for_review, max_participants) {
  start_indexeddb().then(function(db) {
    readAllIndexedSync("experimental_condition", db).then(function(condition_data) {
      // limpieza de base de datos
      //readAllIndexedSync("protocol", db).then(function(actual_stats) {
      findIndexedSync("protocol", "id_protocol", pid, pid, db).then(function(actual_stats) {
        // se calcula el módulo entre el contador y las iteraciones para la revisión
        mod =  actual_stats.counter % iterations_for_review;
        if (mod === 0 && actual_stats.counter !== 0) {
          clean_indexeddb(db);
        }
      }, function () {
        console.log("protocol table not found");
      });

      // actualizamos las condiciones bloquedas dependiendo de la cantidad de tareas asignadas
      for (var i = 0; i < condition_data.length; i++) {
        if (condition_data[i].assigned_task >= max_participants) {
          condition_data[i].blocked = true;
          updateIndexed("experimental_condition", condition_data[i].id_condition, "blocked", true, db);
        } else {
          condition_data[i].blocked = false;
          updateIndexed("experimental_condition", condition_data[i].id_condition, "blocked", false, db);
        }
      }
      actual_condition_data = condition_data;
      check.disabled = false;
    }, function(condition_data) {
      console.log("condition table not found");
    } );
  }, function(db) {
    console.log("BD not charged");
  });
}


function updateIndexed(table, id, variable, new_data = "", db) {
  var objectStore = db.transaction([table], "readwrite").objectStore(table);
  var request = objectStore.get(id);
  request.onerror = function(event) {
    // Handle errors!
  };
  request.onsuccess = function(event) {
    // Get the old value that we want to update
    var data = request.result;

    // update the value(s) in the object that we want to change
    if (new_data == "+")
      data[variable] += 1;
    else if (new_data == "-")
      data[variable] -= 1;
    else
      data[variable] = new_data;

    // Put this updated object back into the database.
    var requestUpdate = objectStore.put(data);
    requestUpdate.onerror = function(event) {
      // Do something with the error
      console.log("Unable to update data from database!");
    };
    requestUpdate.onsuccess = function(event) {
      // Success - the data is updated!
      console.log("Has been updated in your database.");
    };
  };
}

function readIndexed(table, id, db) {
  var transaction = db.transaction([table]);
  var objectStore = transaction.objectStore(table);
  var request = objectStore.get(id);

  request.onerror = function(event) {
    console.log("Unable to retrieve data from database!");
  };

  request.onsuccess = function(event) {
     // Do something with the request.result!
    if(request.result) {
      console.log(request.result);
    } else {
      console.log('object not found');
    }
  };
}

function readIndexedSync(table, id, db){
  return new Promise(
    function(resolve, reject) {
      var transaction   = db.transaction([table]);
      var objectStore   = transaction.objectStore(table);
      var objectRequest = objectStore.get(id);

      objectRequest.onerror = function(event) {
        reject(console.log('Error text'));
      };

      objectRequest.onsuccess = function(event) {
        if (objectRequest.result) resolve(objectRequest.result);
        else reject('object not found');
      };
    }
  );
}

function findIndexedSync(table, column, keyword, pid, db){
  return new Promise(
    function(resolve, reject) {
      var transaction   = db.transaction([table], "readwrite");
      var objectStore   = transaction.objectStore(table);
      var request       = objectStore.openCursor();

      request.onerror = function(event) {
        reject(console.log('request find error'));
      };

      request.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          if (cursor.value[column] == keyword) {
            if (cursor.value.id_protocol == pid) {
              resolve(cursor.value);
            }
          }
          cursor.continue();
        } else {
          reject("element not found")
        }
      }
    }
  );
}

function findAllIndexedSync(table, column, keyword, pid, db){
  return new Promise(
    function(resolve, reject) {
      array = [];

      var transaction   = db.transaction([table], "readwrite");
      var objectStore   = transaction.objectStore(table);
      var request       = objectStore.openCursor();

      request.onerror = function(event) {
        reject(console.log('request find error'));
      };

      request.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          if (cursor.value[column] == keyword) {
            if (cursor.value.id_protocol == pid) {
              array.push(cursor.value);
            }
          }
          cursor.continue();
        } else {
          resolve(array);
        }
      }
    }
  );
}

// funcion para obtener elementos de una base de datos basados en un filtro en forma de array
function findArrayFromIndexedSync(table, column, keyword_list, pid, db){
  return new Promise(
    function(resolve, reject) {
      array = [];

      var transaction   = db.transaction([table], "readwrite");
      var objectStore   = transaction.objectStore(table);
      var request       = objectStore.openCursor();

      request.onerror = function(event) {
        reject(console.log('request find error'));
      };

      request.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          if (keyword_list.includes(cursor.value[column])) {
            if (cursor.value.id_protocol == pid) {
              array.push(cursor.value);
            }
          }
          cursor.continue();
        } else {
          resolve(array);
        }
      }
    }
  );
}

function updateFindedIndexed(table, data, variable, new_data = "", db) {
  var objectStore = db.transaction([table], "readwrite").objectStore(table);
  // update the value(s) in the object that we want to change
  if (new_data == "+")
    data[variable] += 1;
  else if (new_data == "-")
    data[variable] -= 1;
  else
    data[variable] = new_data;

  // Put this updated object back into the database.
  var requestUpdate = objectStore.put(data);
  requestUpdate.onerror = function(event) {
    // Do something with the error
    console.log("Unable to update data from database!");
  };
  requestUpdate.onsuccess = function(event) {
    // Success - the data is updated!
    console.log("Has been updated in your database.");
  };
}

function readAllIndexed(table, db) {
  var objectStore = db.transaction(table).objectStore(table);
  var objectRequest = objectStore.getAll();

  objectRequest.onerror = function(event) {
    return(false);
  };

  objectRequest.onsuccess = function(event) {
    if (objectRequest.result) return(objectRequest.result);
    else return(false);
  };
}

function readAllIndexedSync(table, db) {
  return new Promise(
    function (resolve, reject) {
      var objectStore = db.transaction(table).objectStore(table);
      var objectRequest = objectStore.getAll();

      objectRequest.onerror = function(event) {
        reject(console.log('Error text'));
      };

      objectRequest.onsuccess = function(event) {
        if (objectRequest.result) resolve(objectRequest.result);
        else reject(console.log('object not found'));
      };
    }
  );
}

function addIndexed(table, data, db) {
  var request = db.transaction([table], "readwrite")
  .objectStore(table)
  .add(data);

  request.onsuccess = function(event) {
    console.log("Has been added to your database.");
  };

  request.onerror = function(event) {
    console.log("Unable to add data, is already exist in your database! ");
  }
}

function removeIndexed(table, id, db) {
  var request = db.transaction([table], "readwrite")
  .objectStore(table)
  .delete(id);

  request.onsuccess = function(event) {
    console.log("Entry has been removed from your database.");
  };
}






// condition_selection() --------------------------------------------------------


// obtención de condiciones para usuario nuevo (funciona como promise para que sea sincrónico)
function condition_selection(between_selection_temp = {}) {
  return new Promise(
    function(resolve, reject) {
      between_selection = {};

      start_indexeddb().then(function(db) {
          readAllIndexedSync("experimental_condition", db).then(function(condition_data) {
            // se establece un mínimo (respecto a este mínimo seleccionaremos la condicion)
            // diccionario de mínimos para que no se pierda con cambios de tareas en condition_data
            actual_min = {};
            temp_condition_task_list = [];

            if (Object.keys(between_selection_temp).length === 0) {

              condition_data_temp = [];
              ARRAY_between_temp = [];

              // Get array with unique between tasks (we need to select one condition for each one)
              unique_between_tasks = [...new Set(condition_data.map(item => item.task_name))];

              // For each of the between tasks (usually just one)
              for (var i = 0; i < unique_between_tasks.length; i++) {

/*
// OLD VERSION
                // Temporal array for the condition i
                ARRAY_temp[i] = condition_data.filter(function(value,index) { return value["task_name"] === unique_tasks[i]; });

                // Min number of assigned_task in array
                min_assigned_temp = Math.min.apply(Math, ARRAY_temp[i].map(function(value,index) { return value["assigned_task"]; }));
                // Filter array so only the rows where assigned_task is <= min_assigned_temp AND < max_participants remain. If there are more than one, we get the first one [0]
                condition_data_temp = ARRAY_temp[i].filter(function(value,index) { return value["assigned_task"] <= min_assigned_temp &&  value["assigned_task"] < max_participants; })[0];
*/

// NEW VERSION -----------------
    // Temporal array for the condition i
    ARRAY_between_temp[i] = condition_data.filter(function(value,index) { return value["task_name"] === unique_between_tasks[i]; });

    // Min number of participants assigned to a condition (assigned_task in array)
    min_assigned_temp = Math.min.apply(Math, ARRAY_between_temp[i].map(function(value,index) { return value["assigned_task"]; }));

    // Filter array so only the rows where assigned_task is <= min_assigned_temp AND < max_participants remain
    // If there are more than one condition with the same number of assigned participants, we get one of them randomly
    available_conditions_ARRAY = ARRAY_between_temp[i].filter(function(value,index) { return value["assigned_task"] <= min_assigned_temp &&  value["assigned_task"] < max_participants; });
    randomly_selected_index = jsPsych.randomization.sampleWithoutReplacement(Array(available_conditions_ARRAY.length).fill().map((element, index) => index), 1);
    condition_data_temp = available_conditions_ARRAY[randomly_selected_index];

    if (debug_mode === true) {
      console.log("All conditions");
      console.log(ARRAY_between_temp);
      console.log("Available conditions (conditions with == number of assigned OR condition with min assign)");
      console.log(available_conditions_ARRAY);
      console.log("Selected index: " + randomly_selected_index);
    }
// -------------------------------



                // If we can't assign a condition
                if (condition_data_temp === undefined) {
                  experiment_blocked = true;
                  condition_temp_array = [false];
                  alert("Se ha alcanzado el número máximo de participantes para este protocolo [#1]");
                  throw new Error('Usuario bloqueado por límite en condiciones'); // To avoid loading the rest of the questions
                  resolve(false);
                } else {
                  // If there are slots, write to between_selection[NAME_OF_TASK]
                  // OLD // between_selection[unique_tasks[i]] = [condition_data_temp["condition_name"]];
                  between_selection[unique_between_tasks[i]] = [condition_data_temp["condition_name"]];
                  experiment_blocked = false;
                  condition_temp_array = [true];
                  resolve(true);
                }

              }

            // [[DISCARDED PARTICIPANTS]] ----------------------------------------
            // -------------------------------------------------------------------

            } else {
              // comprobación para discarded
              temp_accepted_conditions = condition_data.filter(function(value,index) { return value["assigned_task"] < max_participants; });

              condition_temp_array = [];

              Object.entries(between_selection_temp).forEach(([key, val]) => {
                // si al filtrar las condiciones, comparandolas con el key-value actual (ejem: key = INFCONS, value = control), sumando el hecho de que sea menor al maximo de participantes, se obtiene un resultado,
                // entonces se agrega a la lista temporal un true, en caso contrario un false
                condition_temp_array.push(condition_data.filter(function(value,index) { return (key == value["task_name"] && val == value["condition_name"] && value["assigned_task"] < max_participants); }).length > 0);
              });
              condition_temp_array = between_selection_temp.map(function (condition, index, array) { return (condition in between_selection); });
            }

            // CHECKS
            //if (condition_temp_array.includes(false)) {
            if (typeof condition_temp_array !== 'undefined' && condition_temp_array.includes(false)) {

              experiment_blocked = true;
              console.log("Usuario bloqueado por límite en condiciones");
              resolve(false);
            } else {
              experiment_blocked = false;
              resolve(true);
            }

          }, function() {
            console.log("Error al cargar la seleccion de condiciones.");
            reject(false);
          });
        });

    }
  );
}


// check_id_status() --------------------------------------------------------

// Used on index.html. Verify status of user id
function check_id_status(event) {

  // We have id in either URL (uid) or POST (input_uid)
  // On the DB, the uid/input_uid is called uid_external.

  // Checks if the uid is in the URL OR on input_uid
  if ((params.has("uid") || document.getElementById('input_uid').reportValidity())) {

    check = document.getElementById("check");
    check.setAttribute('disabled', 'true');
    check.hidden = true;
    check.setAttribute("style", "display:none !important");
    input_uid.hidden = true;

    if (params.has("uid")) {
      uid_external = params.get('uid');
    } else {
      uid_external = document.getElementById("input_uid").value;
    }

    experiment_blocked = false;
    if (typeof questions !== 'undefined') {
      questions = [];
    }

      // carga de tareas (solo puede ser realizada una vez se tenga el id, ya que no se deben sobreescribir las between ya creadas)
      start_indexeddb().then(function(db) {
        findIndexedSync("user", "uid_external", uid_external, pid, db).then(function(actual_user) {

          // Fetch internal DB uid
          uid = actual_user.id_user;

          // Make user_start_date a global variable so we can use it in continue_page_activation()
          globalThis.user_start_date = actual_user.start_date;


// REVIEW
// En mysql tenemos seccion [[OLD USER]] (uid_external is in DB) where user Can be discarded or assigned
// Esto permite compartir el select de condition_selection y la carga de tareas no realizadas

          // [[DISCARDED USER]] --------------------------------------------
          // ---------------------------------------------------------------

          if (actual_user.status == "discarded") {
            console.log("Usuario descartado.");

            if (accept_discarded) {

              actual_time = new Date().toISOString().slice(0, 19);
              actual_user.start_date = actual_time;



              // Se agrega la data a indexedDB en la tabla assigned_users
              updateIndexed("user", actual_user.id_user, "status", "assigned", db);
              console.log("Usuario re-assignado.");
              text_input_uid.innerHTML = 'Tiempo excedido. Recuperando datos de participante... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';


              // se cargan las condiciones del usuario asignados
              user_assigned = true;
              between_selection = {};
              findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(between_list) {
                for (const actual_element in between_list) {
                  readIndexedSync("experimental_condition", between_list[actual_element].id_condition, db).then(function(actual_condition) {
                    if (typeof between_selection[actual_condition.task_name] !== 'undefined')
                      between_selection[actual_condition.task_name].push(actual_condition.condition_name);
                    else
                      between_selection[actual_condition.task_name] = [actual_condition.condition_name];
                  });
                }

                for (var [key, value] of Object.entries(between_selection)) {
                  for (var i = 0; i < value.length; i++) {
                    findIndexedSync("experimental_condition", "condition_name", value[i], pid, db).then(function(actual_condition) {
                      updateFindedIndexed("experimental_condition", actual_condition, "assigned_task", "+", db);
                    });
                  }
                }
                updateIndexed("protocol", pid, "counter", "+", db);

                completed_experiments = [];

                findAllIndexedSync("user_task", "id_user", uid, pid, db).then(function(tasks_list) {
                  // funcion para obtener elementos de una base de datos basados en un filtro en forma de array (se le entregan los id_tasks obtenidos de user_task)
                  findArrayFromIndexedSync("task", "id_task", Array.from(tasks_list, x => x.id_task), pid, db).then(function(all_tasks_list){
                    completed_experiments = Array.from(all_tasks_list, x => x.task_name);
                    //console.log(completed_experiments)

                    // se carga en caso de que el usuario esté asignado
                    script_loading("tasks", all_tasks, completed_experiments);
                  });

                /*findAllIndexedSync("user_task", "id_user", uid, pid, db).then(function(tasks_list) {
                  for (const actual_element in tasks_list) {
                    readIndexedSync("task", tasks_list[actual_element].id_task, db).then(function(actual_task) {
                      completed_experiments.push(actual_task.task_name);
                    });
                  }
                  // se carga en caso de que el usuario esté asignado
                  script_loading("tasks", all_tasks, completed_experiments);*/
                });
              });
            }


          // [[COMPLETED USER]] --------------------------------------------
          // ---------------------------------------------------------------

          } else if (actual_user.status == "completed") {
            console.log("Usuario finalizado.");
            completed_experiments = actual_user.completed_experiments;
            continue_page_activation([], [], true);


          // [[ASSIGNED USER]] --------------------------------------------
          // --------------------------------------------------------------

          } else if (actual_user.status == "assigned") {
            console.log("User previously assigned.");
            user_assigned = true;
            text_input_uid.innerHTML = 'Participante encontrado. Cargando estado... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';

            // se cargan las condiciones del usuario asignados
            between_selection = {};
            findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(between_list) {
              for (const actual_element in between_list) {
                readIndexedSync("experimental_condition", between_list[actual_element].id_condition, db).then(function(actual_condition) {
                  if (typeof between_selection[actual_condition.task_name] !== 'undefined')
                    between_selection[actual_condition.task_name].push(actual_condition.condition_name);
                  else
                    between_selection[actual_condition.task_name] = [actual_condition.condition_name];
                });
              }

              completed_experiments = [];
              findAllIndexedSync("user_task", "id_user", uid, pid, db).then(function(tasks_list) {
                // funcion para obtener elementos de una base de datos basados en un filtro en forma de array (se le entregan los id_tasks obtenidos de user_task)
                findArrayFromIndexedSync("task", "id_task", Array.from(tasks_list, x => x.id_task), pid, db).then(function(all_tasks_list){
                  completed_experiments = Array.from(all_tasks_list, x => x.task_name);
                  //console.log(completed_experiments)

                  // se carga en caso de que el usuario esté asignado
                  script_loading("tasks", all_tasks, completed_experiments);
                });
                /*console.log("tasks_list");
                for (const actual_element in tasks_list) {
                  readIndexedSync("task", tasks_list[actual_element].id_task, db).then(function(actual_task) {
                    completed_experiments.push(actual_task.task_name);
                  });
                }*/

                // IMPORTANT: completed_experiments TIENE QUE ESTAR COMPLETO ANTES DE CONTINUAR.
                // EN MYSQL HACEMOS UNA SOLA CONSULTA CON LEFT JOIN PARA ASEGURARNOS

                // DELETEME WHEN FIXED ----------------------
                // LONG_COMPUTATION = Array.from(Array(20000000).keys());
                // END DELETEME ------------------------------

              });
            });
          }

        // [[NEW USER]] --------------------------------------------------
        // ---------------------------------------------------------------
        }, function(new_element) {
          console.log("Usuario Nuevo");
          uid = 0;
          // se carga en caso de que el usuario sea nuevo, además acá se selecciona la condicion
          condition_selection().then(function(accepted) {
            // LOAD all the tasks. This also loads the between participants conditions

            // DELETEME WHEN FIXED ----------------------
            LONG_COMPUTATION = Array.from(Array(20000000).keys());
            // END DELETEME ------------------------------

            script_loading("tasks", all_tasks, completed_experiments, true);
          });
        });
      }, function(db) {
        console.log("db not charged");
      });

  } // valid uid
}



//Saves the data in database
function completed_task_storage(csv, task) {

  actual_time = new Date().toISOString().slice(0, 19);

  if (task == all_tasks[all_tasks.length - 1])

    last_task = true;
    //actual_time = new Date().toISOString().slice(0, 19);


    start_indexeddb().then(function(db) {

      // [[NEW OR DISCARDED]] -------------------------------------------------------
        // User NOT assigned and experiment NOT blocked

      if (!user_assigned && !experiment_blocked) {
        readIndexedSync("user", uid, db).then(function(actual_user) {


          // [[USER Discarded]] --------------------------------------------------
          // ---------------------------------------------------------------------

          if (actual_user.status == "discarded") {
            findAllIndexedSync("experimental_condition", "id_protocol", pid, pid, db).then(function(condition_data) {
              // cupos?
              all_conditions_tasks = {};
              for (var i = 0; i < condition_data.length; i++) {
                if (!(condition_data[i].task_name in all_conditions_tasks)) {
                  all_conditions_tasks[condition_data[i].task_name] = false;
                }
                if (condition_data[i].assigned_task >= max_participants) {
                  condition_data[i].blocked = true;
                } else {
                  condition_data[i].blocked = false;
                }
                if (all_conditions_tasks[condition_data[i].task_name] == false) {
                  if (condition_data[i].blocked == false)
                    all_conditions_tasks[condition_data[i].task_name] = true;
                }
              }

              let protocol_blocked = false;

              Object.keys(all_conditions_tasks).forEach(function(key) {
                if (all_conditions_tasks[key] == false)
                  protocol_blocked = true;
              });

              if (!protocol_blocked && accept_discarded) {
                user_assigned = true;
                console.log("User re-assigned");
                //console.log(actual_time)

                // Se agrega la data a indexedDB en la tabla assigned_users
                updateIndexed("user", uid, "start_date", actual_time, db);
                updateIndexed("user", uid, "status", "assigned", db);

              } else {
                console.log("Usuario bloqueado por límite en condiciones");
                alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
              }
            });
          }

        // [[NEW USER]] ----------------------------------------------------------
        // First task //
        // -----------------------------------------------------------------------

        // AFTER COMPLETING FIRST TASK (Should be Consent. NOT enforced)

        }, function(user_not_found) { //se crea nuevo usuario al terminar la primera tarea

          findAllIndexedSync("experimental_condition", "id_protocol", pid, pid, db).then(function(condition_data) {

            // CHECK if there are available slots --------------------------------

              // Use condition_data to check if there are available slots for the condition selected in the BETWEEN task (e.g. between_selection["INFCONS"][0])
              // We use Object.keys(between_selection).length to assign +1 to each of the between tasks

            all_conditions_tasks = {};
            for (var i = 0; i < condition_data.length; i++) {
              if (!(condition_data[i].task_name in all_conditions_tasks)) {
                all_conditions_tasks[condition_data[i].task_name] = false;
              }
              if (condition_data[i].assigned_task >= max_participants) {
                condition_data[i].blocked = true;
              } else {
                condition_data[i].blocked = false;
              }
              if (all_conditions_tasks[condition_data[i].task_name] == false) {
                if (condition_data[i].blocked == false)
                  all_conditions_tasks[condition_data[i].task_name] = true;
              }
            }

            let protocol_blocked = false;

            Object.keys(all_conditions_tasks).forEach(function(key) {
              if (all_conditions_tasks[key] == false)
                protocol_blocked = true;
            });


            // AVAILABLE SLOTS --------------------------------------------------

            if (!protocol_blocked) {
              user_assigned = true;

              // REVIEW: If actual_time not defined here, gets FORMAT1, but we NEED FORMAT2
              // Not sure where the actual_time with the wrong format comes from.
              //console.log(actual_time) // FORMAT1: 2021-10-18T112550
              actual_time = new Date().toISOString().slice(0, 19);
              //console.log(actual_time) // FORMAT2: 2021-10-18T11:25:50
              console.log("User assigned");



              // Se agrega la data a indexedDB en la tabla assigned_users
              addIndexed("user", { id_protocol: pid, uid_external: uid_external, status: "assigned", start_date: actual_time/*, completed_tasks: [experiment], between_selection: between_selection, within_selection: within_selection*/}, db);

              // GET DB internal uid
              findIndexedSync("user", "uid_external", uid_external, pid, db).then(function(actual_user) {
                uid = actual_user.id_user;

                // GET id_task for the task
                findIndexedSync("task", "task_name", task, pid, db).then(function(actual_task) {

                  // INSERT details in user_task
                  addIndexed("user_task", { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}, db);

                });

                // INSERT between_selection condition for user
                Object.entries(between_selection).forEach(([key, value]) => {
                  for (var i = 0; i < between_selection[key].length; i++) {
                    findIndexedSync("experimental_condition", "condition_name", between_selection[key][i], pid, db).then(function(actual_condition) {
                      addIndexed("user_condition", { id_protocol: pid, id_condition: actual_condition.id_condition, id_user: uid}, db);
                      updateIndexed("experimental_condition", actual_condition.id_condition, "assigned_task", "+", db);

                    });
                  }
                });
              });

              // UPDATE general counter in table protocol
              updateIndexed("protocol", pid, "counter", "+", db);

            // NO SLOTS AVAILABLE ------------------------------------------------
            } else {
              console.log("Usuario bloqueado por límite en condiciones");
              alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
            }
          });
        });


      // [[USER already assigned]] ---------------------------------------------------------
      // Second to last tasks  //
      // -----------------------------------------------------------------------------------
      } else if (user_assigned && !experiment_blocked) {

        // REVIEW: condition_data NOT used here (???)

        // revisar si puede continuar o si ya no hay cupos o si ya no tiene tiempo
        readAllIndexedSync("experimental_condition", db).then(function(condition_data) {
          readIndexedSync("user", uid, db).then(function(actual_user) {

            // USER assigned
            if (actual_user.status == "assigned") {

              if (!accept_discarded) {
                max_sec = date_to_mil(max_time);
                //actual_time = new Date;

                actual_time = new Date().toISOString().slice(0, 19);
                DBtime = actual_user.start_date;
                seconds_since_start = (new Date(actual_time) - new Date(DBtime))/1000;
                hours_until_discarded = Math.round(((max_sec - seconds_since_start)/3600  + Number.EPSILON) * 100) / 100;
                minutes_until_discarded = Math.round(((max_sec - seconds_since_start)/60  + Number.EPSILON) * 100) / 100;
                console.log("actual_time: " + actual_time + " || DBtime" + DBtime + " || Started " + seconds_since_start + " seconds ago || Time ends in " + hours_until_discarded + " hours [" + minutes_until_discarded + " minutes]");
                console.log("actual_time - DBtime: " + Date(actual_time) - Date(DBtime));

                // IF user ran out of time
                if (seconds_since_start > max_sec) {

                  console.log("actual_time: " + actual_time + " || DBtime" + DBtime + " || Started " + seconds_since_start + " seconds ago || Time ends in " + hours_until_discarded + " hours [" + minutes_until_discarded + " minutes]");
                  console.log("actual_time - DBtime: " + Date(actual_time) - Date(DBtime));

                  // SET status = discarded in user table in DB
                  updateIndexed("user", uid, "status", "discarded", db);

                  findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(user_conditions) {
                    console.log(user_conditions);
                    for (var i = 0; i < user_conditions.length; i++) {
                      updateIndexed("experimental_condition", user_conditions[i].id_condition, "assigned_task", "-", db);
                    }
                  });
                  updateIndexed("protocol", pid, "counter", "-", db);
                  alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.");

                  console.log("User discarded because it is over the max_time (#2).");
                  window.location.reload();
                }
              }

            // USER status is NOT assigned
            } else {
              // If it is not in the last_task
              if (!last_task) {
                alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.");
                console.log("User discarded: actual_user.status != assigned.");
                window.location.reload();
                //console.log(actual_user);
              }
            }

            if (actual_user.status == "assigned" || actual_user.status == "completed") {
              findIndexedSync("task", "task_name", task, pid, db).then(function(actual_task) {
                addIndexed("user_task", { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}, db);
              });
            }

          }, function(user_not_found) {
            alert("Usuario no encontrado");
            console.log("user_not_found");
          });
        });
      }

    }, function () {
      console.log("Problemas al cargar la base de datos al terminar la tarea " + task + ".");
    });

  }


// IF HERE, we are offline. load_clean_indexeddb()
load_clean_indexeddb(iterations_for_review, max_participants);
