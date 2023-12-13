function start_indexeddb() {
  return new Promise(
    function (resolve, reject) {
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

      const protocol_stats = { id_protocol: pid, counter: 0, created_date: new Date().toISOString().slice(0, 19), max_participants: max_participants, last_revision: "None" };
      //const user_extras = { id_protocol: pid, counter: 0, start_date: new Date().toISOString().slice(0, 19)};

      var db;
      var request = window.indexedDB.open("user_management", 1);

      request.onerror = function (event) {
        console.log("error: ");
        reject("");
      };

      request.onsuccess = function (event) {
        db = request.result;
        //console.log("success: "+ db);
        resolve(db);
      };

      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        // usuarios
        db.createObjectStore("user", { keyPath: "id_user", autoIncrement: true });
        // stats del protocolo
        protocol_table = db.createObjectStore("protocol", { keyPath: "id_protocol" });
        // condiciones
        condition_table = db.createObjectStore("experimental_condition", { keyPath: "id_condition", autoIncrement: true });
        db.createObjectStore("combination_between", { keyPath: "id_combination", autoIncrement: true });
        // tareas
        task_table = db.createObjectStore("task", { keyPath: "id_task", autoIncrement: true });

        // tablas intermedias para el many to many
        db.createObjectStore("user_task", { keyPath: "id", autoIncrement: true });
        db.createObjectStore("user_condition", { keyPath: "id", autoIncrement: true });

        for (var i in conditions) {
          condition_table.add(conditions[i]);
        }
        for (var actual_task of [...new Set(all_tasks)]) {
          task_table.add({ id_protocol: pid, task_name: actual_task} );
        }
        protocol_table.add(protocol_stats);
      };
    }
  );
}

// clean discarded users
function clean_indexeddb(db) {
  readAllIndexedSync("user", db).then(function (users) {
    users = users.filter(function (value, index) { return value["status"] == "assigned"; });

    max_sec = date_to_mil(max_time);
    //actual_time = new Date();
    actual_time = new Date().toISOString().slice(0, 19);

    for (var i = 0; i < users.length; i++) {
      seconds_since_start = actual_time - new Date(users[i].start_date);
      // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el usuario es descartado y removido de los usuarios asignados
      // change: we delete the declaration "status ==  assigned" because now we're filtering our users before
      if (seconds_since_start / 1000 > max_sec) {
        updateIndexed("user", users[i].id_user, "status", "discarded", db);
        updateIndexed("protocol", pid, "counter", "-", db);

        findAllIndexedSync("user_condition", "id_user", users[i].id_user, pid, db).then(function (user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            updateIndexed("experimental_condition", user_conditions[i].id_condition, "assigned_task", "-", db);
          }
        });
      }
    }
  }, function () {
    console.log("users table not found");
  });
}

// loading tasks scripts, wait for db charged, then wait for read conditions table, then enable check button
function load_clean_indexeddb(iterations_for_review, max_participants) {
  start_indexeddb().then(function (db) {
    readAllIndexedSync("experimental_condition", db).then(function (condition_data) {
      // limpieza de base de datos
      //readAllIndexedSync("protocol", db).then(function(actual_stats) {
      findIndexedSync("protocol", "id_protocol", pid, pid, db).then(function (actual_stats) {
        // se calcula el módulo entre el contador y las iteraciones para la revisión
        mod = actual_stats.counter % iterations_for_review;
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
    }, function (condition_data) {
      console.log("condition table not found");
    });
  }, function (db) {
    console.log("BD not charged");
  });
}


function updateIndexed(table, id, variable, new_data = "", db) {

  var objectStore = db.transaction([table], "readwrite").objectStore(table);
  var request = objectStore.get(id);
  request.onerror = function (event) {
    // Handle errors!
  };
  request.onsuccess = function (event) {
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
    requestUpdate.onerror = function (event) {
      // Do something with the error
      console.log("Unable to update data from database!");
    };
    requestUpdate.onsuccess = function (event) {
      // Success - the data is updated!
      console.log("Has been updated in your database.");
    };
  };
}

function readIndexed(table, id, db) {
  var transaction = db.transaction([table]);
  var objectStore = transaction.objectStore(table);
  var request = objectStore.get(id);

  request.onerror = function (event) {
    console.log("Unable to retrieve data from database!");
  };

  request.onsuccess = function (event) {
    // Do something with the request.result!
    if (request.result) {
      console.log(request.result);
    } else {
      console.log('object not found');
    }
  };
}

function readIndexedSync(table, id, db) {
  return new Promise(
    function (resolve, reject) {
      var transaction = db.transaction([table]);
      var objectStore = transaction.objectStore(table);
      var objectRequest = objectStore.get(id);

      objectRequest.onerror = function (event) {
        reject(console.log('Error text'));
      };

      objectRequest.onsuccess = function (event) {
        if (objectRequest.result) resolve(objectRequest.result);
        else reject('object not found');
      };
    }
  );
}

function findIndexedSync(table, column, keyword, pid, db) {
  return new Promise(
    function (resolve, reject) {
      var transaction = db.transaction([table], "readwrite");
      var objectStore = transaction.objectStore(table);
      var request = objectStore.openCursor();

      request.onerror = function (event) {
        reject(console.log('request find error'));
      };

      request.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          if (typeof column === 'string' || column instanceof String) {
            if (cursor.value[column] == keyword) {
              if (cursor.value.id_protocol == pid) {
                resolve(cursor.value);
              }
            }
          } else if (Array.isArray(column)){
            let coincidences = 0
            for (var i = 0; i < column.length; i++) {
              if (cursor.value[column[i]] == keyword[i]) {
                coincidences += 1;
              }
            }
            if (coincidences == column.length) {
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

function findAllIndexedSync(table, column, keyword, pid, db) {
  return new Promise(
    function (resolve, reject) {
      array = [];

      var transaction = db.transaction([table], "readwrite");
      var objectStore = transaction.objectStore(table);
      var request = objectStore.openCursor();

      request.onerror = function (event) {
        reject(console.log('request find error'));
      };

      request.onsuccess = function (event) {
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
function findArrayFromIndexedSync(table, column, keyword_list, pid, db) {
  return new Promise(
    function (resolve, reject) {
      array = [];

      var transaction = db.transaction([table], "readwrite");
      var objectStore = transaction.objectStore(table);
      var request = objectStore.openCursor();

      request.onerror = function (event) {
        reject(console.log('request find error'));
      };

      request.onsuccess = function (event) {
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
  requestUpdate.onerror = function (event) {
    // Do something with the error
    console.log("Unable to update data from database!");
  };
  requestUpdate.onsuccess = function (event) {
    // Success - the data is updated!
    console.log("Has been updated in your database.");
  };
}

function readAllIndexed(table, db) {
  var objectStore = db.transaction(table).objectStore(table);
  var objectRequest = objectStore.getAll();

  objectRequest.onerror = function (event) {
    return (false);
  };

  objectRequest.onsuccess = function (event) {
    if (objectRequest.result) return (objectRequest.result);
    else return (false);
  };
}

function readAllIndexedSync(table, db) {
  return new Promise(
    function (resolve, reject) {
      var objectStore = db.transaction(table).objectStore(table);
      var objectRequest = objectStore.getAll();

      objectRequest.onerror = function (event) {
        reject(console.log('Error text'));
      };

      objectRequest.onsuccess = function (event) {
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

  request.onsuccess = function (event) {
    console.log("Has been added to your database.");
  };

  request.onerror = function (event) {
    console.log("Unable to add data, is already exist in your database! ");
  }
}

function removeIndexed(table, id, db) {
  var request = db.transaction([table], "readwrite")
    .objectStore(table)
    .delete(id);

  request.onsuccess = function (event) {
    console.log("Entry has been removed from your database.");
  };
}

// condition_selection() --------------------------------------------------------
// select combination from combination_between if there is 2 or more conditions otherwise return a empty array
function select_combination(feasible_combinations) {
  console.warn("select_combination")
  return new Promise(
    function(resolve, reject) {
      start_indexeddb().then(function (db) {
        readAllIndexedSync("combination_between", db).then(function (all_combinations) {
          permited_list = [];

          all_combinations = all_combinations.filter((combination) => combination.assigned === 1)

          if (feasible_combinations.length > 0) {
            combination_counter = all_combinations.reduce(function (acc, curr, index, vector) {
              return (acc[curr["combination"]] ? ++acc[curr["combination"]] : acc[curr["combination"]] = 1, acc)
            }, {});

            minimun = -1;
            // retorna la lista de permited list cuando recién se crea el protocolo, en caso de que esto esté vacío, implicará que están todas en el servidor
            permited_list = feasible_combinations.filter(function (value, index) {
              if (minimun == -1) { minimun = combination_counter[value] }
              else { if (minimun > combination_counter[value]) { minimun = combination_counter[value] } }
              return Object.keys(combination_counter).indexOf(value) == -1; 
            });

            // cuando ya tenemos todas las combinaciones, el array estará vacío así que pasamos a esta sección
            if (feasible_combinations != 0 && permited_list.length == 0) {
              permited_list = feasible_combinations;
              permited_list = feasible_combinations.filter(function (value, index) { 
                return combination_counter[value] == minimun; 
              });
            }
            //select 1 combination:
            permited_list = permited_list[Math.floor(Math.random()*permited_list.length)].split("|");
          }

          resolve(permited_list);
        }, function (error) {
          console.warn("select_combination error");
        })
      })
    }
  )
}

// obtención de condiciones para usuario nuevo (funciona como promise para que sea sincrónico)
function condition_selection(between_selection_temp = {}) {

  if (debug_mode === true) console.warn("condition_selection()");

  return new Promise(
    function (resolve, reject) {
      between_selection = {};

      start_indexeddb().then(function (db) {
        readAllIndexedSync("experimental_condition", db).then(function (condition_data) {

          // [[NEW PARTICIPANTS]] ----------------------------------------------
          // -------------------------------------------------------------------

          if (debug_mode === true) console.warn("condition_selection() || Object.keys(between_selection_temp).length: " + Object.keys(between_selection_temp).length);
          if (debug_mode === true) console.warn("between_selection_temp: '" + Object.keys(between_selection_temp) + "'");

          // Does not have a between_selection value [NEW PARTICIPANT]
          if (Object.keys(between_selection_temp).length === 0) {

            // feasible combinations, needed to know if we can to assign a combination of conditions
            feasible_combinations = combinations_from_dict(all_conditions)

            // combination counter
            select_combination(feasible_combinations).then(function (permited_list) {

              condition_data_temp = [];
              ARRAY_between_temp = [];

              // Get array with unique between tasks (we need to select one condition for each one)
              unique_between_tasks = [...new Set(condition_data.map(item => item.task_name))];

              if (unique_between_tasks.length === 0) {

                if (debug_mode === true) console.error('condition_selection() | unique_between_tasks EMPTY | No between_tasks defined | continuing: we assume is a protocol without between conditions');
                resolve(true);

              } else {

                first_between_task = unique_between_tasks[0]

                for (var j = 0; j < condition_data.length; j++) {
                  if (condition_data[j].task_name == first_between_task) {
                    condition_data[j].assigned_task = parseInt(condition_data[j].assigned_task);
                  }
                }

                // Temporal array for the condition i
                ARRAY_between_temp = groupBy(condition_data.filter(
                  function (value, index) {
                    return (value["task_name"] === first_between_task);
                  }
                ), "condition_key");

                available_conditions_ARRAY = [];

                // from array ARRAY_between_temp ([0]) we obtain the dict of any condition for the actual task -> [{id_condition:...},{id_condition:...}] only for the first key (if we have 2 keys, like type and recommendation we focus only in one of them)
                stored_between_data = (Object.values(ARRAY_between_temp)[0])

                // Min number of participants assigned to a condition (assigned_task in array)
                min_assigned_temp = Math.min.apply(Math, stored_between_data.map(function(value,index) { return value["assigned_task"]; }));

                // Filter array so only the rows where assigned_task is <= min_assigned_temp AND < max_participants remain
                // If there are more than one condition with the same number of assigned participants, we get one of them randomly
                available_conditions_ARRAY = (stored_between_data.filter(function(value, index) { return (value["assigned_task"] <= min_assigned_temp && value["assigned_task"] < max_participants);}));

                available_conditions_ARRAY = [].concat(...Object.values(available_conditions_ARRAY))

                if (available_conditions_ARRAY.length > 0) {
                  if (debug_mode === true) console.warn("condition_selection() | Choosing between the " + available_conditions_ARRAY.length + " conditions available.");
                  grouped_avaliable_conditions = groupBy(available_conditions_ARRAY, "condition_key");
                  condition_data_temp = [];

                  for (let avaliable_condition in grouped_avaliable_conditions) {

                    randomly_selected_index = jsPsych.randomization.sampleWithoutReplacement(Array(grouped_avaliable_conditions[avaliable_condition].length).fill().map((element, index) => index), 1);

                    condition_data_temp.push(grouped_avaliable_conditions[avaliable_condition][randomly_selected_index]);

                    if (debug_mode === true) {
                      // Create simple versions to print in console
                      SIMPLE_ARRAY = [].concat(...Object.values(ARRAY_between_temp)).map(function (item) { return { task_name: [item.task_name], condition_name: [item.condition_name], assigned_task: [item.assigned_task], completed_protocol: [item.completed_protocol] }; });
                      SIMPLE_ARRAY_CHR = JSON.stringify(flattenObject(SIMPLE_ARRAY)).replace(/","1\.|","2\./, " \n ").replace(/0\.|\.0|1\.|\.1|2\.|\.2/g, "");
                      available_conditions_SIMPLE_ARRAY = grouped_avaliable_conditions[avaliable_condition].map(function (item) { return { task_name: [item.task_name], condition_name: [item.condition_name], assigned_task: [item.assigned_task], completed_protocol: [item.completed_protocol] }; });
                      available_conditions_SIMPLE_ARRAY_CHR = JSON.stringify(flattenObject(available_conditions_SIMPLE_ARRAY)).replace(/","1\.|","2\./, " \n ").replace(/0\.|\.0|1\.|\.1|2\.|\.2/g, "");

                      if (debug_mode === true) console.warn(new Date().toISOString().slice(0, 19) + " All conditions: \n " + SIMPLE_ARRAY_CHR);
                      if (debug_mode === true) console.warn(new Date().toISOString().slice(0, 19) + " Available conditions: \n " + available_conditions_SIMPLE_ARRAY_CHR);
                      if (debug_mode === true) console.warn("Selected condition: " + grouped_avaliable_conditions[avaliable_condition][randomly_selected_index].condition_name);
                    }
                  }
                } else {
                  if (debug_mode === true) console.warn("condition_selection() | No available conditions");
                }
                // -------------------------------

                // If we can't assign a condition
                if (condition_data_temp === undefined || condition_data_temp.length < Object.keys(grouped_avaliable_conditions).length) {
                  experiment_blocked = true;
                  condition_temp_array = [false];
                  if (debug_mode === true) console.warn('condition_selection() | Final check NEW | No slots available'); // Ends up in jsPsych.end
                  text_input_uid.innerHTML = out_of_slots_message;
                  resolve(false);
                } else {
                  // If there are slots, write to between_selection[NAME_OF_TASK]
                  between_selection[first_between_task] = {};
                  
                  // selection of element from permited_list and asignation to between_selection
                  if (permited_list.length !== 0) {
                    for (actual_task_name in all_conditions) {
                      for (actual_condition_key in all_conditions[actual_task_name]){
                        for (actual_condition_name of all_conditions[actual_task_name][actual_condition_key]) {
                          if (permited_list.includes(actual_condition_name)) {
                            between_selection[actual_task_name][actual_condition_key] = actual_condition_name;
                          }
                        }
                      }
                    }
                  } else {
                    // basic asignation to between_selection if there is one condition
                    between_selection[first_between_task][condition_data_temp[0]["condition_key"]] = condition_data_temp[0]["condition_name"];
                  }

                  experiment_blocked = false;
                  condition_temp_array = [true]; // REVIEW: Needed here?

                  if (debug_mode === true) console.warn("condition_selection() | Final check NEW | Available slots");
                  resolve(true);
                }

              }
            });

            // [[DISCARDED PARTICIPANTS]] ----------------------------------------
            // -------------------------------------------------------------------

          } else {
            findIndexedSync("user", "uid_external", uid_external, pid, db).then(function (actual_user) {

              if (debug_mode === true) console.warn("condition_selection() | ELSE: Object.keys(between_selection_temp).length === 0");

              condition_temp_array = [];

              Object.entries(between_selection_temp).forEach(([key, val]) => {

                if (debug_mode === true) console.warn("condition_selection() | forEach CHECK if there are available conditions to re-assign the discarded participant");
                // si al filtrar las condiciones, comparandolas con el key-value actual (ejem: key = INFCONS, value = control), sumando el hecho de que sea menor al maximo de participantes, se obtiene un resultado,
                // entonces se agrega a la lista temporal un true, en caso contrario un false
                condition_temp_array.push(condition_data.filter(function (value, index) { return (key == value["task_name"] && val == value["condition_name"] && value["assigned_task"] < max_participants); }).length > 0);
              });

              //condition_temp_array = between_selection_temp.map(function (condition, index, array) { return (condition in between_selection); });
              if (debug_mode === true) console.log(between_selection_temp);

              if (debug_mode === true) console.warn('condition_selection() | ELSE: if (available_conditions_ARRAY.length > 0) | actual_user.status === "assigned" | actual_user.status: ' + actual_user.status);

              // REVIEW: SPECIAL CASE WHERE A PARTICIPANT IS ASSIGNED, OVER MAX_TIME, BUT NO ONE ENTERED THE PROTOCOL, SO IT HAS NOT BEEN DISCARDED
              // WE NEED TO CHECK IF IS THE CASE, AND THEN DISCARD IT, COUNTER -1 ETC.
              // IN CONDITION_SELECTION() WE JUST GIVE BACK A TRUE / FALSE.
              // IN THE NEXT FUNCTION, WE RE-ASSIGN, COUNTER +1, ETC. SO IF WE DO NOT "DISCARD IT" HERE, assigned_task WILL HAVE ONE MORE
              if (actual_user.status === "assigned") {

                // DO THIS BECAUSE LATTER IT WILL BE NEADED
                // UPDATE status: discarded  & protocol: counter -1
                updateIndexed("user", actual_user.id_user, "status", "discarded", db);
                updateIndexed("protocol", pid, "counter", "-", db);

                // UPDATE assigned_task -1 for each between_selection condition
                findAllIndexedSync("user_condition", "id_user", actual_user.id_user, pid, db).then(function (user_conditions) {
                  for (var i = 0; i < user_conditions.length; i++) {
                    updateIndexed("experimental_condition", user_conditions[i].id_condition, "assigned_task", "-", db);
                  }
                });

                findIndexedSync("combination_between", "id_user", uid, pid, db).then(function (actual_combination) {
                  updateIndexed("combination_between", actual_combination.id_combination, "assigned", "0", db);
                })

                // This is to trick the if (condition_data_temp === undefined || condition_data_temp.length == 0)
                condition_temp_array = [];
                condition_temp_array = [true];
              }

              // CHECKS
              //if (condition_temp_array.includes(false)) {
              if (typeof condition_temp_array !== 'undefined' && condition_temp_array.includes(false)) {
                experiment_blocked = true;
                if (debug_mode === true) console.warn("condition_selection() | Final check DISCARDED | No available slots");
                resolve(false);
              } else {
                experiment_blocked = false;
                if (debug_mode === true) console.warn("condition_selection() | Final check DISCARDED |  Available slots. Participant can continue");
                resolve(true);
              }
            });
          }
        }, function () {
          if (debug_mode === true) console.warn("condition_selection() | Final check |  Error when loading conditions.");
          reject(false);
        });
      });
    }
  );
}

// condition task assignation + 1
function assign_condition_counter(selected_between_selection) {
  //XMLcall("findAll", "experimental_condition").then(function(condition_data) {
  start_indexeddb().then(function (db) {
    findAllIndexedSync("experimental_condition", "id_protocol", pid, pid, db).then(function (condition_data) {
      // ADD TO experimental_condition / assigned_task
      for (actual_task_name of Object.keys(selected_between_selection)) {
        for (actual_condition_key of Object.keys(selected_between_selection[actual_task_name])) {
          actual_selected_condition = condition_data.find((element) => element.condition_key == actual_condition_key && element.condition_name == between_selection[actual_task_name][actual_condition_key]);
          console.log(actual_selected_condition.condition_name)
          updateIndexed("experimental_condition", actual_selected_condition.id_condition, "counter", "+", db);
          //updateFindedIndexed("experimental_condition", actual_selected_condition.id_condition, "assigned_task", "+", db);
          //XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_selected_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
        }
      }
    })
  })
  if (debug_mode === true) console.warn('assign_condition_counter() | UPDATE | for(assigned_task + 1) | !user_assigned && !experiment_blocked --> ELSE "status" in actual_user');
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
    start_indexeddb().then(function (db) {
      findIndexedSync("user", "uid_external", uid_external, pid, db).then(function (actual_user) {

        // Fetch internal DB uid
        uid = actual_user.id_user;

        // Make user_start_date a global variable so we can use it in continue_page_activation()
        globalThis.user_start_date = actual_user.start_date;

        // REVIEW
        // En mysql tenemos seccion [[OLD USER]] (uid_external is in DB) where user Can be discarded or assigned
        // Esto permite compartir el select de condition_selection y la carga de tareas no realizadas

        // assigned OR discarded but recoverable (accept_discarded = true)
        if (actual_user.status == "assigned" || (actual_user.status == "discarded" && accept_discarded)) {

          findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function (actual_user_conditions) {

            for (var i = 0; i < actual_user_conditions.length; i++) {
              readIndexedSync("experimental_condition", actual_user_conditions[i].id_condition, db).then(function (between_selection_temp) {
                if (debug_mode === true) console.warn("check_id_status() || between_selection: '" + Object.values(between_selection_temp) + "'");
                let actual_task = between_selection_temp["task_name"];
                let actual_condition_key = between_selection_temp["condition_key"];
                let actual_condition = between_selection_temp["condition_name"];

                if (!(actual_task in between_selection))
                  between_selection[actual_task] = {}
                between_selection[actual_task][actual_condition_key] = actual_condition;
              }).then(function() {

                if (i == actual_user_conditions.length) {

                  max_sec = date_to_mil(max_time);
                  actual_time = new Date().toISOString().slice(0, 19);
                  DBtime = actual_user.start_date.replace(" ", "T"); // Date already stored in ISO format
                  seconds_since_start = (new Date(actual_time) - new Date(DBtime)) / 1000;

                  // [[ASSIGNED PARTICIPANT inside time limit]] ---------------------------

                  if ((actual_user.status == "assigned" && seconds_since_start < max_sec)) {

                    if (debug_mode === true) console.warn("check_id_status() | ASSIGNED participant & seconds_since_start < max_sec");
                    user_assigned = true;
                    text_input_uid.innerHTML = status_loading_message;


                    // [[DISCARDED PARTICIPANT & accept_discarded || ASSIGNED out of time & accept_discarded]] ----------------------------------------------------------------

                  } else if (actual_user.status == "discarded" && accept_discarded === true || (actual_user.status == "assigned" && seconds_since_start > max_sec & accept_discarded === true)) {

                    if (debug_mode === true) console.warn("check_id_status() || DISCARDED participant & accept_discarded OR ASSIGNED out of time & accept_discarded || actual_user.status: " + actual_user.status + " || out of time: " + (seconds_since_start > max_sec));
                    condition_selection(between_selection).then(function (accepted) {

                      if (debug_mode === true) console.warn("check_id_status() || Inside condition_selection(). accepted: " + accepted);

                      // If condition_selection() shows there is available slots, re-assign participant and reset start_date
                      if (accepted) {

                        if (debug_mode === true) console.warn("check_id_status() || OLD user || condition_selection() returned true");

                        // Reset starting date to NOW. Update global user_start_date so it can be shown in the screen
                        globalThis.user_start_date = actual_time;

                        // Se agrega la data a indexedDB en la tabla assigned_users
                        updateIndexed("user", actual_user.id_user, "status", "assigned", db);
                        updateIndexed("user", actual_user.id_user, "start_date", actual_time, db);
                        updateIndexed("protocol", pid, "counter", "+", db);

                        // UPDATE: assigned_task + 1 for each between_selection variable
                        for (var [key, value] of Object.entries(between_selection)) {
                          for (var i = 0; i < value.length; i++) {
                            findIndexedSync("experimental_condition", "condition_name", value[i], pid, db).then(function (actual_condition) {
                              updateIndexed("experimental_condition", actual_condition.id_condition, "assigned_task", "+", db);
                            });
                          }
                        }

                        findIndexedSync("combination_between", "id_user", uid, pid, db).then(function (actual_combination) {
                          updateIndexed("combination_between", actual_combination.id_combination, "assigned", "1", db);
                        })

                        if (debug_mode === true) console.warn('check_id_status() | UPDATE | status: assigned, start_date: actual_time, counter + 1, assigned_task + 1 | actual_user.status == "discarded" & accept_discarded === true || (seconds_since_start > max_sec && actual_user.status == "assigned" & accept_discarded === true) --> condition_selection(accepted)');
                        console.warn("OLD participant | available slots, re-assign");
                        text_input_uid.innerHTML = discarded_user_message;

                        // LOAD all the tasks
                        script_loading("tasks", all_tasks, completed_experiments);
                        user_assigned = true;
                      } else {
                        if (debug_mode === true) console.warn("check_id_status() || OLD user || condition_selection() returned false");
                        console.warn("OLD participant | no available slots");
                      }
                    });

                    // [[ELSE - IMPOSSIBLE CONDITION (?)]] ----------------------

                    // We are in actual_user.status == "assigned" || (actual_user.status == "discarded" && accept_discarded)
                    // We are catching:
                    //  - assigned (over and under time)
                    //  - discarded & accept discarded
                    //  - ELSE is: assigned without time variable or accept_discarded nt defined ?
                  } else {

                    if (debug_mode === true) console.warn("check_id_status() | IMPOSSIBLE CONDITION");
                    // jsPsych.endExperiment WON'T work here. jsPsych not defined yet. WHY?
                    text_input_uid.innerHTML = discarded_user_no_time_message;

                    // throw ERROR so don't get to the following script_loading()
                    throw new Error('check_id_status() | IMPOSSIBLE CONDITION')
                  }

                  completed_experiments = [];

                  findAllIndexedSync("user_task", "id_user", uid, pid, db).then(function (all_tasks_list) {
                    // funcion para obtener elementos de una base de datos basados en un filtro en forma de array (se le entregan los id_tasks obtenidos de user_task)
                    findArrayFromIndexedSync("task", "id_task", all_tasks_list.map(a => a.id_task), pid, db).then(function (tasks_list) {
                      if (debug_mode === true) console.warn("check_id_status() [[ completed_experiments: " + completed_experiments.length + " || all_tasks: " + all_tasks.length + " ]]")
                      completed_experiments = tasks_list.map(a => a.task_name);
                      //completed_experiments = Array.from(tasks_list, x => x.task_name); change: saved for performance testing
                      //console.log(completed_experiments)

                      // se carga en caso de que el usuario esté asignado
                      script_loading("tasks", all_tasks, completed_experiments);
                    });

                  });

                }
              })
            }  

          });


          // [[COMPLETED PARTICIPANT]] *************************************
        } else if (actual_user.status == "completed") {
          console.warn("OLD participant | already completed the protocol");
          //jsPsych.endExperiment("check_id_status() | completed");
          text_input_uid.innerHTML = completed_user_message;
          // [[DISCARDED PARTICIPANT (!accept_discarded) ]] *****************
        } else {
          console.warn("OLD participant | discarded (!accept_discarded)");
          //jsPsych.endExperiment("check_id_status() | else");
          text_input_uid.innerHTML = discarded_user_no_time_message;
        }

        // [[NEW USER]] --------------------------------------------------
        // ---------------------------------------------------------------
      }, function (new_element) {

        if (debug_mode === true) console.warn("check_id_status() | NEW participant " + new Date().toISOString().slice(0, 19));

        uid = 0;
        text_input_uid.innerHTML = new_participant_message;

        // se carga en caso de que el usuario sea nuevo, además acá se selecciona la condicion
        condition_selection().then(function (accepted) {
          // LOAD all the tasks. This also loads the between participants conditions

          // DELETEME WHEN FIXED ----------------------
          // LONG_COMPUTATION = Array.from(Array(20000000).keys());
          // END DELETEME ------------------------------
          if (accepted) {
            script_loading("tasks", all_tasks, completed_experiments);
            console.warn("NEW participant | available slots");
          } else {
            if (debug_mode === true) console.warn("check_id_status() | NEW participant | condition_selection returned false");
            console.warn("NEW participant | no available slots");
          }
        });
      });
    }, function (db) {
      console.log("db not charged");
    });

  } // valid uid
}



//Saves the data in database
function completed_task_storage(task) {

  actual_time = new Date().toISOString().slice(0, 19);

  last_task = task == all_tasks[all_tasks.length - 1];

  start_indexeddb().then(function (db) {

    // [[NEW OR DISCARDED]] -------------------------------------------------------
    // User NOT assigned and experiment NOT blocked

    if (!user_assigned && !experiment_blocked) {
      readIndexedSync("user", uid, db).then(function (actual_user) {


        // [[USER Discarded]] --------------------------------------------------
        // ---------------------------------------------------------------------

        if (actual_user.status == "discarded") {
          findAllIndexedSync("experimental_condition", "id_protocol", pid, pid, db).then(function (condition_data) {
            // cupos?
            all_conditions_tasks = {};
            for (var i = 0; i < condition_data.length; i++) {
              if (!(condition_data[i].task_name in all_conditions_tasks)) {
                all_conditions_tasks[condition_data[i].task_name] = false;
              }
              condition_data[i].blocked = (condition_data[i].assigned_task >= max_participants) ? true : false;
              if (all_conditions_tasks[condition_data[i].task_name] == false) {
                if (condition_data[i].blocked == false)
                  all_conditions_tasks[condition_data[i].task_name] = true;
              }
            }

            let protocol_blocked = false;

            Object.keys(all_conditions_tasks).forEach(function (key) {
              if (all_conditions_tasks[key] == false)
                protocol_blocked = true;
            });

            if (!protocol_blocked && accept_discarded) {
              user_assigned = true;

              if (debug_mode === true) console.warn('completed_task_storage() | actual_user.status == "discarded" --> !protocol_blocked && accept_discarded');
              user_assigned = true;

              // Update global user_start_date so it can be shown un the screen
              globalThis.user_start_date = actual_time;

              // Se agrega la data a indexedDB en la tabla assigned_users
              updateIndexed("user", uid, "start_date", actual_time, db);
              updateIndexed("user", uid, "status", "assigned", db);

              updateIndexed("protocol", pid, "counter", "+", db);

              // UPDATE: assigned_task + 1 for each between_selection variable
              for (var [key, value] of Object.entries(between_selection)) {
                for (var i = 0; i < value.length; i++) {
                  findIndexedSync("experimental_condition", "condition_name", value[i], pid, db).then(function (actual_condition) {
                    updateIndexed("experimental_condition", actual_condition.id_condition, "assigned_task", "+", db);
                  });
                }
              }
              
              findIndexedSync("combination_between", "id_user", uid, pid, db).then(function (actual_combination) {
                updateIndexed("combination_between", actual_combination.id_combination, "assigned", "1", db);
              })
              if (debug_mode === true) console.warn('completed_task_storage() | UPDATE | status: assigned, start_date: actual_time, counter + 1, assigned_task + 1 | !user_assigned && !experiment_blocked --> actual_user.status == "discarded" --> !protocol_blocked && accept_discarded');

            } else {
              console.log("Usuario bloqueado por límite en condiciones" + " #3");
              alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
            }
          });
        }

        // [[NEW USER]] ----------------------------------------------------------
        // First task //
        // -----------------------------------------------------------------------

        // AFTER COMPLETING FIRST TASK (Should be Consent. NOT enforced)

      }, function (user_not_found) { //se crea nuevo usuario al terminar la primera tarea

        findAllIndexedSync("experimental_condition", "id_protocol", pid, pid, db).then(function (condition_data) {

          if (debug_mode == true) console.warn("completed_task_storage() || Object.keys(between_selection).length" + Object.keys(between_selection).length);

          // CHECK if there are available slots --------------------------------

          // Use condition_data to check if there are available slots for the condition selected in the BETWEEN task (e.g. between_selection["INFCONS"][0])
          // We use Object.keys(between_selection).length to assign +1 to each of the between tasks

          // IN protocols WITHOUT between vars, we need the protocol_blocked = false by default, but it causes issues in protocols with between vars (corner cases)
          if (Object.keys(between_selection).length == 0) protocol_blocked = false;

          all_conditions_size = 0;

          Object.entries(all_conditions).forEach(([key, value]) => {
            all_conditions_size += Object.keys(all_conditions[key]).length;
          })

          // For each of the between tasks (usually just one), assigned_task + 1
          // REVIEW: With multiple between conditions, there must be slots in all or none of the conditions, right?
          for (var i = 0; i < Object.keys(between_selection).length; i++) {

            if (debug_mode == true) console.warn("completed_task_storage() || LOOP between_selection");
            if (debug_mode == true) console.warn(between_selection);

            Object.keys(between_selection[Object.keys(between_selection)[i]]).forEach(selection => {
              // CHECK if available slots
              completed_protocol_filtered = condition_data.filter(function (value, index) {
                return ((value["condition_name"] == (between_selection[Object.keys(between_selection)[i]][selection])) && (value["condition_key"] == selection) && (value["assigned_task"] < max_participants) && (value["task_name"] == Object.keys(between_selection)[i]));
              });

              // Available slots
              if (completed_protocol_filtered.length > 0) {

                selected_id_condition = completed_protocol_filtered[0].id_condition;

                // ADD TO experimental_condition / assigned_task
                if (!(all_conditions_size > 1)) {
                  updateIndexed("experimental_condition", selected_id_condition, "assigned_task", "+", db);
                  if (debug_mode === true) console.warn('completed_task_storage() | UPDATE | for(assigned_task + 1) | !user_assigned && !experiment_blocked --> ELSE "status" in actual_user');
                }
                protocol_blocked = false;

                // NO slots available
              } else {
                if (debug_mode === true) console.warn("completed_task_storage() | completed_protocol_filtered.length > 0 | NO available slots loop");
                // alert("NO hay cupos disponibles");
                protocol_blocked = true;
                if (debug_mode === true) console.warn('condition_selection() || Participante bloqueado por límite en condiciones' + ' #3'); // Ends up in jsPsych.end
                jsPsych.endExperiment(out_of_slots_message);
              }
            });
          }

          // AVAILABLE SLOTS --------------------------------------------------
            // INSERTS the participant in all the relevant tables
          // ------------------------------------------------------------------------------------

          if (!protocol_blocked) {

            user_assigned = true;
            added_task = completed_protocol_filtered[0]["task_name"];
            if (debug_mode === true) console.warn("completed_task_storage() || NEW user, first task | User assigned | task: " + added_task);

            combination_list = [];

            // Se agrega la data a indexedDB en la tabla assigned_users
            addIndexed("user", { id_protocol: pid, uid_external: uid_external, status: "assigned", start_date: actual_time }, db);

            // GET DB internal uid
            findIndexedSync("user", "uid_external", uid_external, pid, db).then(function (actual_user) {
              uid = actual_user.id_user;

              // GET id_task for the task
              findIndexedSync("task", "task_name", task, pid, db).then(function (actual_task) {
                // INSERT details in user_task
                addIndexed("user_task", { id_protocol: pid, id_task: actual_task.id_task, id_user: uid }, db);
              });


              Object.keys(between_selection).forEach(task_key => {
                Object.keys(between_selection[task_key]).forEach((condition_key) => {
                  findIndexedSync("experimental_condition", ["task_name", "condition_key", "condition_name"], [task_key, condition_key, between_selection[task_key][condition_key]], pid, db).then(function(actual_condition) {
                    addIndexed("user_condition", { id_protocol: pid, id_condition: actual_condition.id_condition, id_user: uid }, db);
                    combination_list.push(actual_condition.condition_name);
                  }).then(function(){
                    if (combination_list.length > 1 && combination_list.length == all_conditions_size) {
                      ordered_combination = []
                      tasks = Object.keys(all_conditions)
                      tasks.sort()
                      for (actual_task of tasks) {
                        condition_keys = Object.keys(all_conditions[actual_task])
                        condition_keys.sort()
                        for (actual_key of condition_keys){
                          for (actual_condition of all_conditions[actual_task][actual_key]) {
                            if (combination_list.includes(actual_condition)) {
                              ordered_combination.push(actual_condition)
                            }
                          }
                        }
                      }
                      addIndexed("combination_between", { id_protocol: pid, id_user: uid, combination: ordered_combination.join("|"), assigned: 1}, db);
                    }
                  })
                })
              })
              assign_condition_counter(between_selection)
            });

            // UPDATE general counter in table protocol
            updateIndexed("protocol", pid, "counter", "+", db);
            if (debug_mode === true) console.warn('completed_task_storage() | INSERT | table user, table user_task, table user_condition, counter + 1 | !user_assigned && !experiment_blocked --> ELSE "status" in actual_user --> !protocol_blocked');

            // NO SLOTS AVAILABLE ------------------------------------------------
          } else {
            if (debug_mode === true) console.warn("Participante bloqueado por límite en condiciones" + " #4");
            jsPsych.endExperiment(out_of_slots_message);
          }
        });
      });


      // [[USER already assigned]] ---------------------------------------------------------
      // Second to last tasks  //
      // -----------------------------------------------------------------------------------
    } else if (user_assigned && !experiment_blocked) {

      if (debug_mode === true) console.warn("completed_task_storage() || asigned: second task and forward");

      // revisar si puede continuar o si ya no hay cupos o si ya no tiene tiempo
      readIndexedSync("user", uid, db).then(function (actual_user) {

        // USER assigned
        if (actual_user.status == "assigned") {

          if (!accept_discarded) {
            max_sec = date_to_mil(max_time);
            actual_time = new Date().toISOString().slice(0, 19);
            DBtime = actual_user.start_date.replace(" ", "T");
            seconds_since_start = (new Date(actual_time) - new Date(DBtime)) / 1000;

            hours_until_discarded = Math.round(((max_sec - seconds_since_start) / 3600 + Number.EPSILON) * 100) / 100;
            minutes_until_discarded = Math.round(((max_sec - seconds_since_start) / 60 + Number.EPSILON) * 100) / 100;

            // IF user ran out of time
            if (seconds_since_start > max_sec) {

              // UPDATE status: discarded  & protocol: counter -1
              updateIndexed("user", uid, "status", "discarded", db);
              updateIndexed("protocol", pid, "counter", "-", db);

              findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function (user_conditions) {
                if (debug_mode === true) console.log(user_conditions);
                for (var i = 0; i < user_conditions.length; i++) {
                  if (debug_mode === true) console.warn("completed_task_storage() || DISCARD PARTICIPANT || updateTable: experimental_condition || assigned_task: assigned_task - 1" + new Date().toISOString().slice(0, 19));
                  updateIndexed("experimental_condition", user_conditions[i].id_condition, "assigned_task", "-", db);
                }
              });

              findIndexedSync("combination_between", "id_user", uid, pid, db).then(function (actual_combination) {
                updateIndexed("combination_between", actual_combination.id_combination, "assigned", "0", db);
              })

              if (debug_mode === true) console.warn('completed_task_storage() | UPDATE | status: discarded, counter - 1, for(assigned_task - 1) | actual_user.status == "assigned" --> !accept_discarded --> seconds_since_start > max_sec');
              if (debug_mode === true) console.warn("completed_task_storage() | OUT OF TIME | actual_time: " + actual_time + " | DBtime" + DBtime + " | Started " + seconds_since_start + " seconds ago | Time ends in " + hours_until_discarded + " hours [" + minutes_until_discarded + " minutes]");

              jsPsych.endExperiment(discarded_user_no_time_message);
            }
          } else {
            if (debug_mode === true) console.warn("completed_task_storage() | assigned & accept_discarded | continue");
          }

          // USER status is NOT assigned
        } else {
          // If it is not in the last_task we finish the experiment (out of time). If in the last task we allow the participant to finish
          if (!last_task) {
            if (debug_mode === true) console.warn("completed_task_storage() | User discarded: actual_user.status != assigned --> !last_task | jsPsych.endExperiment()");
            jsPsych.endExperiment(discarded_user_no_time_message);
          } else {
            if (debug_mode === true) console.warn("completed_task_storage() | User discarded: actual_user.status != assigned --> last_task | continue");
          }
        }

        if (actual_user.status == "assigned" || actual_user.status == "completed") {
          findIndexedSync("task", "task_name", task, pid, db).then(function (actual_task) {
            addIndexed("user_task", { id_protocol: pid, id_task: actual_task.id_task, id_user: uid }, db);
          });
          if (debug_mode === true) console.warn('completed_task_storage() | insertIntoTable id_user-id_task | actual_user.status == "assigned" || actual_user.status == "completed" |');
        }

      }, function (user_not_found) {
        if (debug_mode === true) console.warn("completed_task_storage() | Error in DB (searching user)");
      });
    }

  }, function () {
    if (debug_mode === true) console.warn("completed_task_storage() || BD charge error");
  });

}


// IF HERE, we are offline. load_clean_indexeddb()
start_indexeddb(); // SHOULD be launched only if pid is not in DB
load_clean_indexeddb(iterations_for_review, max_participants);
