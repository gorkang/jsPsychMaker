function isNormalInteger(str) {
    str = str.trim();
    if (!str) {
        return false;
    }
    str = str.replace(/^0+/, "") || "0";
    var n = Math.floor(Number(str));
    return String(n) === str && n >= 0;
}

function json_can_parsed(data) {
  if (/^[\],:{}\s]*$/.test(data.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    //the json is ok
    return true;
  }else{
    //the json is not ok
    return false;
  }
}



// XMLcall() ------------------------------------------------------------------

// wait_for_response makes the calles synchronic
function XMLcall (query, table_name, elements = {}, sql = "", wait_for_response = false) {
  return new Promise(
    function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          response = (xhr.responseText);
          if (json_can_parsed (response)) {
            answer = (response !== "") ? JSON.parse(response) : {};
            if (debug_mode === true) console.log(query + " // " + table_name);
            if (debug_mode === true) console.log(answer);
            resolve(answer);
          } else {
            console.log(response);
            reject(response);
          }
        }
      };

      // By default perform asynchronous calls.
      if (wait_for_response === true) {
        xhr.open('POST', 'controllers/php/mysql.php', false);
      } else {
        xhr.open('POST', 'controllers/php/mysql.php');
      }

      xhr.setRequestHeader('Content-Type', 'application/json');

      base_query = {"query": query, "table_name": table_name, "pid": pid, "sql": sql};

      if (query == "createTable") {
        base_query.keys = elements.keys;
      } else if (query == "insertIntoTable") {
        keys = Object.keys(elements.dict).join();
        values = '"' + Object.values(elements.dict).join('","') + '"';
        base_query.keys = keys;
        base_query.values = values;
      } else if (query == "updateTable") { //update "1" element from mysql table
        base_query.id = "";
        for (var [key, value] of Object.entries(elements.id)) {
          base_query.id = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || value.toString().indexOf("- 1") != -1 || isNormalInteger(value.toString())) {
            base_query.id += value;
          } else {
            base_query.id += '"' + value + '"';
          }
        }
        base_query.data = "";
        for (var [key, value] of Object.entries(elements.data)) {
          base_query.data = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || value.toString().indexOf("- 1") != -1 || isNormalInteger(value.toString())) {
            base_query.data += value;
          } else {
            base_query.data += '"' + value + '"';
          }
        }

      } else if (query == "condition_selection") {
        base_query.id = "";
        for (var [key, value] of Object.entries(elements.id)) {
          base_query.id = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || value.toString().indexOf("- 1") != -1 || isNormalInteger(value.toString())) {
            base_query.id += value;
          } else {
            base_query.id += '"' + value + '"';
          }
        }


  // NEW GENERAL QUERY -------------------------------------------------------------

      } else if (query == "general_query") {
        console.log(elements);

        // CHECK general_query sql is a SELECT
        if (!Object.entries(elements.sql)[0][1].startsWith("SELECT")) throw (new Error('general_query ERROR'));

        // Put elements in SQL query
        base_query.id = Object.entries(elements.id)[0][0] + "=" +  Object.entries(elements.id)[0][1];
        base_query.sql = Object.entries(elements.sql)[0][1];

        console.log(base_query);

// ----------------------------------------------------------------------------------


      } else if (query == "findRow" || query == "findAll") {
        if ('keys' in elements)
          base_query.keys = elements.keys;
        if ('values' in elements)
          base_query.values = elements.values;
      }

      xhr.send(JSON.stringify(base_query));
    }
  );
}



// start_mysqldb() -------------------------------------------------------------

function start_mysqldb(pid, max_participants) {
  // REVIEW: start_mysqldb() should be used ONLY if we don't already have the DB

  // See mysql.php for the source of the mysql calls

  XMLcall("createTable", "protocol", {keys: "id_protocol INT NOT NULL PRIMARY KEY DEFAULT 0, counter INT NOT NULL DEFAULT 0, last_revision TIMESTAMP DEFAULT CURRENT_TIMESTAMP, max_participants INT NOT NULL DEFAULT " + max_participants.toString()});
  XMLcall("createTable", "experimental_condition", {keys: "id_condition INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, assigned_task INT NOT NULL DEFAULT 0, blocked BOOLEAN NOT NULL DEFAULT 0, completed_protocol INT NOT NULL DEFAULT 0, condition_key VARCHAR(255) NOT NULL, condition_name VARCHAR(255) NOT NULL, task_name VARCHAR(255) NOT NULL, type VARCHAR(255), UNIQUE KEY unique_combination (id_protocol, condition_name)"});

  // necesario para la lista de tareas completadas
  XMLcall("createTable", "task", {keys: "id_task INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, task_name VARCHAR(255) NOT NULL, UNIQUE KEY unique_combination (id_protocol, task_name)"});

  XMLcall("createTable", "user", {keys: "id_user INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, uid_external VARCHAR(255) NOT NULL,  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status VARCHAR(255) NOT NULL DEFAULT 'assigned', UNIQUE KEY unique_combination (id_protocol, uid_external)"});

  XMLcall("createTable", "user_condition", {keys: "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, id_condition INT NOT NULL REFERENCES experimental_condition(id_condition), id_user INT NOT NULL REFERENCES user(id_user), UNIQUE KEY unique_combination (id_protocol, id_condition, id_user)"});
  XMLcall("createTable", "user_task", {keys: "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, id_task INT NOT NULL REFERENCES task(id_task), id_user INT NOT NULL REFERENCES user(id_user), UNIQUE KEY unique_combination (id_protocol, id_task, id_user)"});

  XMLcall("insertIntoTable", "protocol", {dict: {id_protocol: pid, max_participants: max_participants}});
  for (var i in conditions) {
    XMLcall("insertIntoTable", "experimental_condition", {dict: conditions[i]});
  }
  for (var i in tasks) {
    XMLcall("insertIntoTable", "task", {dict: tasks[i]});
  }
}



// clean_mysql() ---------------------------------------------------------------

function clean_mysql(){


  // REVIEW: clean_mysql should be done before check_id_status() (???)
  // This is important because now we say there are no slots before cleaning up discarded
  // Make sure there are no other collisions, for example, in check_id_status(), if the participant already exists and we accept_discarded, the participant can continue!


  XMLcall("findAll", "user").then(function(users) {

    /*
    XMLcall("findAll", "user");
    users = JSON.parse(response);
    */

    max_sec = date_to_mil(max_time);
    actual_time = new Date().toISOString().slice(0, 19);

    // REVIEW: FILTERING to loop only amongst NON completed. SHOULD BE ONLY amongst assigned (???)
    users = users.filter(function(value,index) { return value["status"]  !== "completed"; });

    for (var i = 0; i < users.length; i++) {

      DBtime = users[i].start_date; // Date already stored in ISO format

      // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el usuario es descartado y removido de los usuarios asignados
      if ((new Date(actual_time) - new Date(DBtime))/1000 > max_sec && users[i].status == "assigned") {

        console.log("ID: " + users[i].id_user + " [" + users[i].status + "] || actual_time: " + actual_time + " || DBtime: " + DBtime + " || " + (new Date(actual_time) - new Date(DBtime))/1000 + " > " + max_sec);

        XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "discarded"}});
        XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});

        XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [users[i].id_user]}).then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
          }
        });

      }
    }
  }, function (error) {
    console.log("User Table not found");
  });

}



// load_clean_mysql() ----------------------------------------------------------

function load_clean_mysql(iterations_for_review, max_participants) {


  XMLcall("findAll", "experimental_condition").then(function(condition_data) {
    // limpieza de base de datos
    XMLcall("findRow", "protocol", {keys: ["id_protocol"], values: [pid]}).then(function(actual_stats) {
      // se calcula el módulo entre el contador y las iteraciones para la revisión
      if (Array.isArray(actual_stats)) {
        actual_stats = actual_stats[0];
      }
      mod =  actual_stats.counter % iterations_for_review;
      if (mod == 0 && actual_stats.counter != 0) {
        clean_mysql();
      }
    }, function () {
      console.log("protocol table not found")
    })

    // actualizamos las condiciones bloquedas dependiendo de la cantidad de tareas asignadas
    for (var i = 0; i < condition_data.length; i++) {
      if (condition_data[i].assigned_task >= max_participants) {
        condition_data[i].blocked = true;

        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": true}});

      } else {
        condition_data[i].blocked = false;

        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": false}});

      }
    }
    actual_condition_data = condition_data;
    if (typeof check !== 'undefined' && check !== null) {
      check.disabled = false;
    }
  }, function (error) {
    console.log("Condition Table not found");
  });
}




// condition_selection() --------------------------------------------------------

// RETURNS true if there are slots available, false if not.
// Writes between_selection, experiment_blocked, condition_temp_array
// obtención de condiciones para usuario nuevo (funciona como promise para que sea sincrónico)

function condition_selection(between_selection_temp = {}) {
  return new Promise(
    function(resolve, reject) {
      between_selection = {};

        XMLcall("findAll", "experimental_condition").then(function(condition_data) {

          // se establece un mínimo (respecto a este mínimo seleccionaremos la condicion)
          // diccionario de mínimos para que no se pierda con cambios de tareas en condition_data
          actual_min = {};
          temp_condition_task_list = [];


          // [[NEW PARTICIPANTS]] ----------------------------------------------
          // -------------------------------------------------------------------

          if (Object.keys(between_selection_temp).length === 0) {

            condition_data_temp = [];
            ARRAY_between_temp = [];

            // Get array with unique between tasks (we need to select one condition for each one)
            unique_between_tasks = [...new Set(condition_data.map(item => item.task_name))];

            // For each of the between tasks (usually just one)
            for (var i = 0; i < unique_between_tasks.length; i++) {

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


              // If we can't assign a condition
              if (condition_data_temp === undefined) {
                experiment_blocked = true;
                condition_temp_array = [false];
                alert("Se ha alcanzado el número máximo de participantes para este protocolo [#1]");
                throw new Error('Usuario bloqueado por límite en condiciones'); // To avoid loading the rest of the questions
                resolve(false);
              // If there are slots, write to between_selection[NAME_OF_TASK]
              } else {
                between_selection[unique_between_tasks[i]] = [condition_data_temp["condition_name"]];
                experiment_blocked = false;
                condition_temp_array = [true];
                resolve(true);
              }
            }

          // [[DISCARDED PARTICIPANTS]] ----------------------------------------
          // -------------------------------------------------------------------
          } else {

            // REVIEW:  temp_accepted_conditions NO se usa para nada (?????)
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


    // gets experimental_condition table. Checks if there are available slots
    XMLcall("findAll", "experimental_condition").then(function(condition_data) {

      // Look for uid_external in user table
      XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {


        // [[NEW USER]] (uid_external not in DB) -------------------------------
        // ---------------------------------------------------------------------

        if (Object.keys(actual_user).length === 0 && actual_user.constructor === Object) {

          console.log("New user");
          uid = 0;
          text_input_uid.innerHTML = 'Nuevo participante. Iniciando experimento... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';

          condition_selection().then(function(accepted) {
            // LOAD all the tasks. This also loads the between participants conditions
            script_loading("tasks", all_tasks, completed_experiments, true);
          });



        // [[OLD USER]] (uid_external is in DB) --------------------------------
        // ---------------------------------------------------------------------
        // Can be discarded or assigned

        } else {

          // Fetch internal DB uid
          uid = actual_user.id_user;

          // Make user_start_date a global variable so we can use it in continue_page_activation()
          globalThis.user_start_date = actual_user.start_date;


          // assigned or discarded but recoverable
          if (actual_user.status == "assigned" || (accept_discarded && actual_user.status == "discarded")) {


            // GET **BETWEEN PARTICIPANTS** conditions for the particicipant from the DB (so she can continue where she left off)
            between_selection = {};

            XMLcall("condition_selection", "", {id: {"id_user": uid}}).then(function (between_selection_temp){
              // between selection es del tipo [{task1: condition1},{task2: condition2},{task2: condition3}]
              for (var i = 0; i < between_selection_temp.length; i++) {
                let actual_task = Object.keys(between_selection_temp[i])[0];
                let actual_condition = Object.values(between_selection_temp[i])[0];

                // si la tarea existe en el between_selection entonces se agrega al array, en caso contrario el array se crea
                if (actual_task in between_selection) {
                  between_selection[actual_task].push(actual_condition);
                } else {
                  between_selection[actual_task] = [actual_condition];
                }
              }


              // [[DISCARDED USER]] --------------------------------------------

              if (actual_user.status == "discarded") {

                // CHECK
                condition_selection(between_selection).then(function(accepted) {

                  // si la revisión de condiciones resulta positiva podemos agregar al usuario reasignado
                  if (accepted) {

                    // Reset starting date to NOW
                    actual_time = new Date().toISOString().slice(0, 19);
                    actual_user.start_date = actual_time;

                    // Change status to assigned in table user
                    XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "assigned"}});
                    console.log("Usuario re-assignado.");
                    text_input_uid.innerHTML = 'Tiempo excedido. Recuperando datos de participante... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';

                    for (var [key, value] of Object.entries(between_selection)) {
                      for (var i = 0; i < value.length; i++) {
                        XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [value[i]]}).then(function(actual_condition) {

                          // REVIEW: This assigned_task + 1 is inside a for loop (???)
                          XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                        });
                      }
                    }
                    XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});
                    // LOAD all the tasks. This also loads the between participants conditions
                    script_loading("tasks", all_tasks, completed_experiments, true);
                    user_assigned = true;
                  }
                });


              // [[ASSIGNED USER]] --------------------------------------------

              } else {

                console.log("User previously assigned.");
                user_assigned = true;
                text_input_uid.innerHTML = 'Participante encontrado. Cargando estado... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';
              }

              completed_experiments = [];

              // TODO: THIS should be a single call to get the tasks names, instead of a call, a loop, and a call for each idtask -----------------------------------------------------------------
                  // SELECT user.id_user, task.task_name FROM user LEFT JOIN user_task USING (id_user) LEFT JOIN task USING (id_task) WHERE id_user = 1053
              // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

              /*
              XMLcall("findAll", "user_task", {keys: ["id_user"], values: [uid]}, wait_for_response = true).then(function(tasks_list) {
                //console.log("In XMLcall");
                //console.log(tasks_list);

                for (const actual_element in tasks_list) {

                  XMLcall("findRow", "task", {keys: ["id_task"], values: [tasks_list[actual_element].id_task]}, wait_for_response = true).then(function(actual_task) {
                    completed_experiments.push(actual_task.task_name);
                  });

                }

                if (debug_mode === true) console.log("check_id_status() [[ completed_experiments: " + completed_experiments.length + " || all_tasks: " + all_tasks.length + " ]]")

                // se carga en caso de que el usuario esté asignado
                script_loading("tasks", all_tasks, completed_experiments);
              });
              */


              XMLcall(query = "general_query", table_name = "", elements = {sql: {"sql_call": "SELECT task.task_name FROM user LEFT JOIN user_task USING (id_user) LEFT JOIN task USING (id_task)"}, id: {"id_user": uid}}).then(function(tasks_list) {

               if (debug_mode === true) console.log("check_id_status() [[ completed_experiments: " + completed_experiments.length + " || all_tasks: " + all_tasks.length + " ]]")
                completed_experiments =  answer.map(a => a.task_name); // Extract all elements of object answer to completed_experiments
                script_loading("tasks", all_tasks, completed_experiments);

              });
              // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

            });

          // [[COMPLETED USER]] *************************************
          //*********************************************************
          } else if (actual_user.status == "completed") {
            console.log("User already completed the protocol.")
            text_input_uid.innerHTML = "El participante ya completó el protocolo";
          }
        } // user in DB
      }, function (error) {
        console.log("User search error");
      }); // uid_external in user table
      //}; completed_protocol_filtered.length == 0
    }); // Available slots XMLcall
     // online / offline
  } // valid uid
}



// completed_task_storage() --------------------------------------------------------

// Saves the data of a task in the DB
function completed_task_storage(csv, task) {

  if (task == all_tasks[all_tasks.length - 1])
    last_task = true;

  actual_time = new Date().toISOString().slice(0, 19);


  // [[NEW OR DISCARDED]] -------------------------------------------------------
    // User NOT assigned and experiment NOT blocked
  if (!user_assigned && !experiment_blocked) {
    XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {

      // User already exists in the DB. There is a status in user table in DB for this uid_external
      if ("status" in actual_user) {


        // REVIEW: for accept_discarded protocols!


        // [[USER Discarded]] --------------------------------------------------
        // ---------------------------------------------------------------------

        if (actual_user.status == "discarded") {
          XMLcall("findAll", "experimental_condition").then(function(condition_data) {

            // CHECK if we have available slots
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

            // Default
            let protocol_blocked = false;

            // REVIEW: What happens IF we have multiple between conditions?
            Object.keys(all_conditions_tasks).forEach(function(key) {
              if (all_conditions_tasks[key] == false)
                protocol_blocked = true;
            });

            // IF accept_discarded and there are available slots (protocol_blocked = false)
            if (!protocol_blocked && accept_discarded) {
              user_assigned = true;
              console.log("User assigned");

              // Update start_date and status of participant in user table
                // IMPROVE: This should be a SINGLE call
                // REVIEW: SHOULD WE assigned_task +1 in this case? When a participant is discarded, assigned_task - 1?
              XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"start_date": actual_time}});
              XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "assigned"}});

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
      // We know it's the first task because it's a NEW USER (NO "status" in actual_user))

      } else {

        // Check condition_data table on DB
        XMLcall("findAll", "experimental_condition").then(function(condition_data) {

          // CHECK if there are available slots --------------------------------

            // Use condition_data to check if there are available slots for the condition selected in the BETWEEN task (e.g. between_selection["INFCONS"][0])
            // We use Object.keys(between_selection).length to assign +1 to each of the between tasks

          // For each of the between tasks (usually just one)
          for (var i = 0; i < Object.keys(between_selection).length; i++) {

            completed_protocol_filtered = condition_data.filter(function(value,index) {return value["assigned_task"] < max_participants && value["condition_name"] === between_selection[Object.keys(between_selection)[i]][0]});

            // Available slots
            if (completed_protocol_filtered.length > 0) {
              console.log("Cupos disponibles");
              added_task = completed_protocol_filtered[0]["task_name"];
              selected_id_condition = completed_protocol_filtered[0].id_condition;
              XMLcall("updateTable", "experimental_condition", {id: {"id_condition": selected_id_condition}, data: {"assigned_task": "assigned_task + 1"}});
              protocol_blocked = false;

            // NO slots available
            } else {
              console.log("NO hay cupos disponibles");
              alert("NO hay cupos disponibles");
              protocol_blocked = true;
              window.location.reload(); // RELOAD website (REVIEW: can cause an infinite loop if uid in URL?)
            }

          }


          // AVAILABLE SLOTS --------------------------------------------------

          if (!protocol_blocked) {
            user_assigned = true;
            console.log("User assigned");

            // ADD data to user table
            XMLcall("insertIntoTable", "user", {dict: { id_protocol: pid, uid_external: uid_external, status: "assigned", start_date: actual_time}}).then( function (actual_user) {

              // GET DB internal uid
              XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {
                uid = actual_user.id_user;

                // GET id_task for the task
                XMLcall("findRow", "task", {keys: ["task_name"], values: [task]}).then(function(actual_task) {

                  // INSERT details in user_task
                  XMLcall("insertIntoTable", "user_task", {dict: { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}});

                });

                // INSERT between_selection condition for user
                Object.entries(between_selection).forEach(([key, value]) => {
                  for (var i = 0; i < between_selection[key].length; i++) {
                    XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [between_selection[key][i]]}).then(function(actual_condition) {
                      XMLcall("insertIntoTable", "user_condition", {dict: { id_protocol: pid, id_condition: actual_condition.id_condition, id_user: uid}});

                    });
                  }
                });
              });
            });

            // UPDATE general counter in table protocol
            XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});

          // NO SLOTS AVAILABLE ------------------------------------------------
          } else {
            console.log("Usuario bloqueado por límite en condiciones");
            alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
          }
        });
      }
    }, function(user_not_found) {
      console.log("error en base de datos (busqueda de user)");
    });


  // [[USER already assigned]] ---------------------------------------------------------
  // Second to last tasks  //
  // -----------------------------------------------------------------------------------
  // experiment NOT blocked
  } else if (user_assigned && !experiment_blocked) {

    // REVIEW: WHY are we doing "XMLcall("findAll", "experimental_condition").then(function(condition_data) {" (???) condition_data NOT used here (???)

    // CHECK if user can continue: Enough slots & max_time
    XMLcall("findAll", "experimental_condition").then(function(condition_data) {
      XMLcall("findRow", "user", {keys: ["id_user"], values: [uid]}).then(function(actual_user) {

        // USER exists in user table in DB
        if ("status" in actual_user) {

          // USER assigned
            //REVIEW: WE are in the if (user_assigned) condition. WHY this double check (?)
          if (actual_user.status == "assigned") {

            // CLEAN UP based on max_sec (over time limit)
            if (!accept_discarded) {
              max_sec = date_to_mil(max_time);

              // REVIEW: IN mysql_controller.js (~ line 148), we had to make the change below because the time is stored in ISO format in the DB. Here too (???)
              // DBtime = actual_user.start_date; instead of DBtime = new Date(actual_user.start_date).toISOString().slice(0, 19);
              // Also, need to Date(actual_time) - new Date(DBtime) because .toISOString().slice(0, 19) messes with the format (?)

              actual_time = new Date().toISOString().slice(0, 19);
              DBtime = actual_user.start_date;
              seconds_since_start = (new Date(actual_time) - new Date(DBtime))/1000;
              hours_until_discarded = Math.round(((max_sec - seconds_since_start)/3600  + Number.EPSILON) * 100) / 100;
              minutes_until_discarded = Math.round(((max_sec - seconds_since_start)/60  + Number.EPSILON) * 100) / 100;

              // IF user ran out of time
              if (seconds_since_start > max_sec) {

                console.log("actual_time: " + actual_time + " || DBtime" + DBtime + " || Started " + seconds_since_start + " seconds ago || Time ends in " + hours_until_discarded + " hours [" + minutes_until_discarded + " minutes]");
                console.log("actual_time - DBtime: " + Date(actual_time) - Date(DBtime));
                //console.log("ID: " + actual_user.id_user + " [" + actual_user.status + "] || actual_time: " + actual_time + " || DBtime: " + DBtime + " || " + (new Date(actual_time) - new Date(DBtime))/1000 + " > " + max_sec);

                // SET status = discarded in user table in DB
                XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "discarded"}});

                // REVIEW: for loop useful in case there is more than one between variable for the uid?
                XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(user_conditions) {
                  console.log(user_conditions);
                  for (var i = 0; i < user_conditions.length; i++) {
                    XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
                  }
                });
                XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});
                alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal.");

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
            }
          }

          if (actual_user.status == "assigned" || actual_user.status == "completed") {
            XMLcall("findRow", "task", {keys: ["task_name"], values: [task]}).then(function(actual_task) {
              XMLcall("insertIntoTable", "user_task", {dict: { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}});
            });
          }

        // USER NOT in user table in DB
        } else {
          alert("Usuario no encontrado");
          console.log("user not found");
        }
      }, function(user_not_found) {
        console.log("error en base de datos (busqueda de user)");
        });
      });
    }

  }



// IF here, we are online
if (debug_mode === true) start_mysqldb(pid, max_participants); // SHOULD be launched only if pid is not in DB
load_clean_mysql(iterations_for_review, max_participants);
