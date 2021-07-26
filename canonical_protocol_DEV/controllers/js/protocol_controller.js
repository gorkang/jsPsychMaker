// Estas dos lineas son solo para poder consultar experimental_condition interactivamente
// XMLcall("findAll", "experimental_condition", {keys: ["id_protocol"], values: [pid]});
// condition_data = JSON.parse(response);

function date_to_mil(date) {
  elements = date.split(":");
  secs = 0;
  for (var i = 0; i < elements.reverse().length; i++) {
    secs += elements[i]*(60**i);
  }
  return secs;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// Used on index.html. Verify status of user id
function check_id_status(event) {

  // Divided in OFFLINE and ONLINE sections. OFFLINE uses IndexedDB, ONLINE uses MySQL

  // We have id in either URL (uid) or POST (input_uid)
  // On the DB, the uid/input_uid is called uid_external.

  // Checks if the uid is in the URL OR on input_uid
  if ((params.has("uid") || document.getElementById('input_uid').reportValidity())) {

    if (params.has("uid")) {
      uid_external = params.get('uid');
    } else {
      uid_external = document.getElementById("input_uid").value;
    }

    experiment_blocked = false;
    if (typeof questions !== 'undefined') {
      questions = []
    }


// OFFLINE check_id_status()-------------------------------------------------------
// --------------------------------------------------------------------------------

    if (online == false) {
      // carga de tareas (solo puede ser realizada una vez se tenga el id, ya que no se deben sobreescribir las between ya creadas)
      start_indexeddb().then(function(db) {
        findIndexedSync("user", "uid_external", uid_external, pid, db).then(function(actual_user) {
          uid = actual_user.id_user;
          if (actual_user.status == "discarded") {
            console.log("Usuario descartado.");
            if (accept_discarded) {

              actual_time = new Date().toISOString().slice(0, 19);

              actual_user.start_date = actual_time;
              // Se agrega la data a indexedDB en la tabla assigned_users
              updateIndexed("user", actual_user.id_user, "status", "assigned", db);

              // se cargan las condiciones del usuario asignados
              user_assigned = true;
              between_selection = {};
              findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(between_list) {
                for (const actual_element in between_list) {
                  readIndexedSync("condition", between_list[actual_element].id_condition, db).then(function(actual_condition) {
                    if (typeof between_selection[actual_condition.task_name] !== 'undefined')
                      between_selection[actual_condition.task_name].push(actual_condition.condition_name);
                    else
                      between_selection[actual_condition.task_name] = [actual_condition.condition_name];
                  })
                }

                for (var [key, value] of Object.entries(between_selection)) {
                  for (var i = 0; i < value.length; i++) {
                    findIndexedSync("condition", "condition_name", value[i], pid, db).then(function(actual_condition) {
                      updateFindedIndexed("condition", actual_condition, "assigned_task", "+", db);
                    });
                  }
                }
                updateIndexed("protocol", pid, "counter", "+", db);

                completed_experiments = [];
                findAllIndexedSync("user_task", "id_user", uid, pid, db).then(function(tasks_list) {
                  for (const actual_element in tasks_list) {
                    readIndexedSync("task", tasks_list[actual_element].id_task, db).then(function(actual_task) {
                      completed_experiments.push(actual_task.task_name);
                    })
                  }
                  // se carga en caso de que el usuario esté asignado
                  script_loading("tasks", all_tasks, completed_experiments);
                })
              })
            }
          } else if (actual_user.status == "completed") {
            console.log("Usuario finalizado.");
            completed_experiments = actual_user.completed_experiments;
            continue_page_activation([], [], true);
          } else if (actual_user.status == "assigned") {
            console.log("Usuario Asignado Anteriormente");
            // se cargan las condiciones del usuario asignados
            user_assigned = true;
            between_selection = {};
            findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(between_list) {
              for (const actual_element in between_list) {
                readIndexedSync("condition", between_list[actual_element].id_condition, db).then(function(actual_condition) {
                  if (typeof between_selection[actual_condition.task_name] !== 'undefined')
                    between_selection[actual_condition.task_name].push(actual_condition.condition_name);
                  else
                    between_selection[actual_condition.task_name] = [actual_condition.condition_name];
                })
              }

              completed_experiments = [];
              findAllIndexedSync("user_task", "id_user", uid, pid, db).then(function(tasks_list) {
                for (const actual_element in tasks_list) {
                  readIndexedSync("task", tasks_list[actual_element].id_task, db).then(function(actual_task) {
                    completed_experiments.push(actual_task.task_name);
                  })
                }
                // se carga en caso de que el usuario esté asignado
                script_loading("tasks", all_tasks, completed_experiments);
              })
            })
          }
        }, function(new_element) {
          console.log("Usuario Nuevo");
          uid = 0;
          // se carga en caso de que el usuario sea nuevo, además acá se selecciona la condicion
          script_loading("tasks", all_tasks, completed_experiments, true);
        });
      }, function(db) {
        console.log("db not charged")
      })


// ONLINE check_id_status() ------------------------------------------------------------
// -------------------------------------------------------------------------------------

    } else if (online == true) {

      // REVIEW: SHOULD DO... start_mysql().then(function(......) { (???)

      // REVIEW: clean_mysql should be done before check_id_status() (???)
      // This is important because now we say there are no slots before cleaning up discarded
      // VERY IMPORTANT: Make sure there are no other collisions, for example, in check_id_status(), if the participant already exists and we accept_discarded, the participant can continue!
      // We don't want to delete the information of discarded participants...


      // gets experimental_condition table. Checks if there are available slots
      XMLcall("findAll", "experimental_condition").then(function(condition_data) {

        // We don't filter by value["condition_name"] === between_selection[Object.keys(between_selection)[0]][0] because it is not loaded yet
        completed_protocol_filtered = condition_data.filter(function(value,index) { return value["assigned_task"] < max_participants; });

        // NO available slots
        if (completed_protocol_filtered.length == 0) {

          alert("No hay cupos disponibles")
          console.log("No available slots #1")
          //console.table(completed_protocol_filtered)

          // REVIEW: protocol_blocked AND experiment_blocked are DIFF or the SAME (???)
          // experiment_blocked used also in INFCONS.js SHOULD be protocol_blocked (???)
          protocol_blocked = true;
          experiment_blocked = true;
          //throw new Error("ERROR: no hay cupos disponibles.");

        // Available slots
        } else {

          console.log("Available slots")
          //console.table(completed_protocol_filtered)

          // Look for uid_external in user table
          XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {

            // NEW user (uid_external not in DB) ---
            if (Object.keys(actual_user).length === 0 && actual_user.constructor === Object) {

              console.log("New user");
              uid = 0;

              // LOAD all the tasks. This also loads the between participants conditions
              script_loading("tasks", all_tasks, completed_experiments, true);

            // User found in DB
            } else {

              // Fetch internal DB uid
              uid = actual_user.id_user;

              // DISCARDED - Will check if it can re-assigned
              if (actual_user.status == "discarded") {
                console.log("User has status discarded.");

                // Check if we accept_discarded participants
                if (accept_discarded) {

                  // REVIEW: THIS IS ALMOST IDENTICAL TO } else if (actual_user.status == "assigned") {
                  // ONLY EXCEPTION IS // assigned_task & counter + 1 chunk
                  // Can do a:  actual_user.status == "discarded" & accept_discarded OR actual_user.status == "assigned" chunk?
                  // ADD a if (accept_discarded) for the assigned_task & counter + 1 chunk

                  // Reset starting date to NOW
                  actual_time = new Date().toISOString().slice(0, 19);
                  actual_user.start_date = actual_time;
                  // REVIEW: We intert the new date into the DB (???)

                  // Change status to assigned in table user
                  XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "assigned"}});
                  console.log("Usuario re-assigned.");

                  // LOAD **between participants** conditions for the particicipant from the DB (so she can continue where she left off)
                  user_assigned = true;
                  between_selection = {};

                  // REVIEW: Can we do this with a filter instead of a for loop (???)
                  XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(between_list) {
                    for (const actual_element in between_list) {
                      XMLcall("findRow", "experimental_condition", {keys: ["id_condition"], values: [actual_element.id_condition]}).then(function(actual_condition) {
                        if (typeof between_selection[actual_condition.task_name] !== 'undefined')
                          between_selection[actual_condition.task_name].push(actual_condition.condition_name);
                        else
                          between_selection[actual_condition.task_name] = [actual_condition.condition_name];
                      })
                    }
                  })

                  // assigned_task & counter + 1
                  // REVIEW: We need a loop here? WHY? (???)
                  for (var [key, value] of Object.entries(between_selection)) {
                    for (var i = 0; i < value.length; i++) {
                      XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [value[i]]}).then(function(actual_condition) {

                        // REVIEW: This assigned_task + 1 is inside a for loop (???)
                        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                      })
                    }
                  }
                  XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});

                  // GET list of completed tasks ---
                  completed_experiments = [];

                  // REVIEW: Can we do this using map instead of for (???)
                  XMLcall("findAll", "user_task", {keys: ["id_user"], values: [uid]}).then(function(tasks_list) {
                    for (const actual_element in tasks_list) {
                      XMLcall("findRow", "task", {keys: ["id_task"], values: [tasks_list[actual_element].id_task]}).then(function(actual_task) {
                        completed_experiments.push(actual_task.task_name);
                      })
                    }

                    // LOAD tasks scripts. Starts after the completed experiments
                    script_loading("tasks", all_tasks, completed_experiments);
                  })
                } // accept_discarded


              // COMPLETED. Protocol already completed by this participant
              } else if (actual_user.status == "completed") {
                console.log("User already completed the protocol.");
                completed_experiments = actual_user.completed_experiments;
                continue_page_activation([], [], true);

              // ASSIGNED. Protocol already started and between condition assigned
              } else if (actual_user.status == "assigned") {

                console.log("User previously assigned.");

                // LOAD **between participants** conditions for the particicipant from the DB (so she can continue where she left off)
                user_assigned = true;
                between_selection = {};
                XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(between_list) {
                  for (const actual_element in between_list) {
                    XMLcall("findRow", "experimental_condition", {keys: ["id_condition"], values: [between_list[actual_element].id_condition]}).then(function(actual_condition) {
                      if (typeof between_selection[actual_condition.task_name] !== 'undefined')
                        between_selection[actual_condition.task_name].push(actual_condition.condition_name);
                      else
                        between_selection[actual_condition.task_name] = [actual_condition.condition_name];
                    })
                  }

                  // para asegurarnos del término del for anterior, o al menos de gran parte de él
                  sleep(100);

                  completed_experiments = [];
                  XMLcall("findAll", "user_task", {keys: ["id_user"], values: [uid]}).then(function(tasks_list) {
                    for (const actual_element in tasks_list) {
                      XMLcall("findRow", "task", {keys: ["id_task"], values: [tasks_list[actual_element].id_task]}).then(function(actual_task) {
                        completed_experiments.push(actual_task.task_name);
                      })
                    }
                    // se carga en caso de que el usuario esté asignado
                    script_loading("tasks", all_tasks, completed_experiments);
                  })
                })
              }
            } // user in DB
          }, function (error) {
            console.log("User search error")
          }); // uid_external in user table
        };
      }
    ); // Available slots XMLcall
  } // online / offline
} // valid uid
}


// función para almacenar elementos en los csv que funcionarán como base de datos
function database(filename, filedata = "", condition = "", status = ""){
  if (filename == "assigned_users") {
    // obtención de fecha, el slice es para asegurarnos que hayan 2 dígitos en cada elemento

    actual_time = new Date().toISOString().slice(0, 19);
    filedata += "," + actual_time;
  }
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'controllers/php/database.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onprogress = function () {
    console.log('LOADING: ', xhr.status);
  };

  xhr.onload = function () {
    console.log('DONE: ', xhr.status);
  };
  xhr.send(JSON.stringify({filename: filename, filedata: filedata, condition: condition, status: status}));
}

// En caso que haya data almacenada esta funcion se preocupa de manejar lo que muestra el index y cuando iniciar el protocolo
function continue_page_activation(completed_experiments, questions, completed = false, discarded = false){
  input_uid = document.getElementById('input_uid');
  check = document.getElementById('check');
  start = document.getElementById('start');

  // se selecciona el texto a mostrar y si es que se muestra o no el botón para continuar con el protocolo en el punto en el que quedó
  if (completed_experiments.length != 0 && questions.length != 0) {
    text_input_uid.innerHTML = "Usted ha completado " + (completed_experiments.length).toString() + " tareas de este protocolo. <br> Para continuar donde quedó presione el siguiente botón:";
    start.hidden = false;
  } else if ((completed_experiments.length == all_tasks.length) || completed) {
    text_input_uid.innerHTML = "Usted ya ha completado todas las tareas de este protocolo."
  } else if (discarded && !accept_discarded) {
    text_input_uid.innerHTML = "Este usuario fue descartado del protocolo, comuníquese con un administrador para poder volver a ingresar."
  } else {
    text_input_uid.innerHTML = "Tareas cargadas.\nPresione el siguiente botón para comenzar con las tareas de este protocolo."
    start.hidden = false;
  }
  input_uid.hidden = true;
  if (typeof check !== 'undefined' && check !== null) {
    console.log(check)
    check.hidden = true;
  }
}

// filtrador de elementos por questions["procedure"]
function obtain_experiments(questions, completed_experiments){
  // se filtran los experimentos completados para obtener los faltantes
  acceptedValues = all_tasks.filter( function( element ) {
    return !completed_experiments.includes( element );
  } );

  // se crea el array con los elementos no completados
  var questions = Object.keys(questions).reduce(function(r, e) {
    if (acceptedValues.includes(questions[e].data["procedure"])) {
      r[e] = questions[e]
    }
    return r;
  }, [])

  // se limpia el array de los elementos vacios
  var questions = questions.filter(function (el) {
    return el != null;
  });

  return questions
}

//Saves the data in database
function completed_task_storage(csv, task) {

  if (task == all_tasks[all_tasks.length - 1])
    last_task = true;

  actual_time = new Date().toISOString().slice(0, 19);


  // OFFLINE completed_task_storage() ---------------------------------------------
  // ------------------------------------------------------------------------------

  if (online == false) {
    start_indexeddb().then(function(db) {
      if (!user_assigned && !experiment_blocked) {
        readIndexedSync("user", uid, db).then(function(actual_user) {
          if (actual_user.status == "discarded") {
            findAllIndexedSync("condition", "id_protocol", pid, pid, db).then(function(condition_data) {
              // cupos?
              all_conditions_tasks = {}
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
                    all_conditions_tasks[condition_data[i].task_name] = true
                }
              }

              let protocol_blocked = false;

              Object.keys(all_conditions_tasks).forEach(function(key) {
                if (all_conditions_tasks[key] == false)
                  protocol_blocked = true;
              });

              if (!protocol_blocked && accept_discarded) {
                user_assigned = true;

                // Se agrega la data a indexedDB en la tabla assigned_users
                updateIndexed("user", uid, "start_date", actual_time, db);
                updateIndexed("user", uid, "status", "assigned", db);

                console.log("Asignado")

              } else {
                console.log("Usuario bloqueado por límite en condiciones");
                alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
              }
            })
          }
        }, function(user_not_found) { //se crea nuevo usuario al terminar la primera tarea
          findAllIndexedSync("condition", "id_protocol", pid, pid, db).then(function(condition_data) {
            // cupos?
            all_conditions_tasks = {}
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
                  all_conditions_tasks[condition_data[i].task_name] = true
              }
            }

            let protocol_blocked = false;

            Object.keys(all_conditions_tasks).forEach(function(key) {
              if (all_conditions_tasks[key] == false)
                protocol_blocked = true;
            });

            if (!protocol_blocked) {
              user_assigned = true;
              console.log("Asignado")

              // Se agrega la data a indexedDB en la tabla assigned_users
              addIndexed("user", { id_protocol: pid, uid_external: uid_external, status: "assigned", start_date: actual_time/*, completed_tasks: [experiment], between_selection: between_selection, within_selection: within_selection*/}, db);

              findIndexedSync("user", "uid_external", uid_external, pid, db).then(function(actual_user) {
                uid = actual_user.id_user;
                //completed_tasks
                findIndexedSync("task", "task_name", task, pid, db).then(function(actual_task) {
                  addIndexed("user_task", { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}, db);
                })

                //between_selection
                Object.entries(between_selection).forEach(([key, value]) => {
                  for (var i = 0; i < between_selection[key].length; i++) {
                    findIndexedSync("condition", "condition_name", between_selection[key][i], pid, db).then(function(actual_condition) {
                      addIndexed("user_condition", { id_protocol: pid, id_condition: actual_condition.id_condition, id_user: uid}, db);
                      updateIndexed("condition", actual_condition.id_condition, "assigned_task", "+", db);
                    })
                  }
                });
              })

              // Se aumenta el contador general en el sistema
              updateIndexed("protocol", pid, "counter", "+", db);
            } else {
              console.log("Usuario bloqueado por límite en condiciones");
              alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
            }
          })
        })

      } else if (user_assigned && !experiment_blocked) {
        // revisar si puede continuar o si ya no hay cupos o si ya no tiene tiempo
        readAllIndexedSync("condition", db).then(function(condition_data) {
          readIndexedSync("user", uid, db).then(function(actual_user) {
            if (actual_user.status == "assigned") {
              if (!accept_discarded) {
                max_sec = date_to_mil(max_time);
                actual_time = new Date

                if ((actual_time - new Date(actual_user.start_date))/1000 > max_sec) {
                  updateIndexed("user", uid, "status", "discarded", db);

                  findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(user_conditions) {
                    for (var i = 0; i < user_conditions.length; i++) {
                      updateIndexed("condition", user_conditions[i].id_condition, "assigned_task", "-", db);
                    }
                  })
                  updateIndexed("protocol", pid, "counter", "-", db);
                  alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.")
                  console.log("Usuario descartado por límite de tiempo 1.");
                  window.location.reload();
                }
              }
            } else {
              if (!last_task) {
                alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.")
                console.log("Usuario sin el status de asignado")
                console.log(actual_user);
              }
            }

            if (actual_user.status == "assigned" || actual_user.status == "completed") {
              findIndexedSync("task", "task_name", task, pid, db).then(function(actual_task) {
                addIndexed("user_task", { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}, db);
              })
            }

          }, function(user_not_found) {
            console.log("user not found");
            console.log(user_not_found);
          })
        })
      }

    }, function () {
      console.log("Problemas al cargar la base de datos al terminar la tarea " + task + ".");
    })


  // ONLINE completed_task_storage() ----------------------------------------------
  // ------------------------------------------------------------------------------

  } else if (online == true) {

    // REVIEW: Explain the origin and use of user_assigned and experiment_blocked
    // User NOT assigned and experiment NOT blocked
    if (!user_assigned && !experiment_blocked) {
      XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {

        // User already exists in the DB. There is a status in user table in DB for this uid_external
        if ("status" in actual_user) {


          // REVIEW: THIS CHUNK is almost identical to the check_id_status() one.
          // 1. USE filter here instead of for loop.
          // 2. Can we have a function to do this and use it here and in check_id_status() (???)

          // REVIEW: for accept_discarded protocols!

          // USER Discarded
          if (actual_user.status == "discarded") {
            XMLcall("findAll", "experimental_condition").then(function(condition_data) {
              // cupos?
              all_conditions_tasks = {}
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
                    all_conditions_tasks[condition_data[i].task_name] = true
                }
              }

              let protocol_blocked = false;

              Object.keys(all_conditions_tasks).forEach(function(key) {
                if (all_conditions_tasks[key] == false)
                  protocol_blocked = true;
              });

              // We accept discarded and protocol is not blocked (available slots?)
              if (!protocol_blocked && accept_discarded) {
                user_assigned = true;
                console.log("User assigned")

                // Se agrega la data a indexedDB en la tabla user
                XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"start_date": actual_time}});
                XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "assigned"}});
              } else {
                console.log("Usuario bloqueado por límite en condiciones");
                alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
              }
            })
          }

        // NEW USER ---
        // Created after first task (Consent) # REVIEW: How we know is the first task (???)
        } else {

          XMLcall("findAll", "experimental_condition").then(function(condition_data) {

            // With only one between variable: the total participants will be
            // max_participants * levels of the between variable

            // With more than 1 between variable: total participants number
            // needs to be divisible by the number of levels of the other
            // between participants and give an integer

            // Use condition_data to check if there are available slots for the condition selected in the BETWEEN task (e.g. between_selection["INFCONS"][0])
            completed_protocol_filtered = condition_data.filter(function(value,index) {return value["assigned_task"] < max_participants && value["condition_name"] === between_selection[Object.keys(between_selection)[0]][0] });

            // There are available slots
            if (completed_protocol_filtered.length > 0) {

              added_task = completed_protocol_filtered[0]["task_name"]
              selected_id_condition = completed_protocol_filtered[0].id_condition
              XMLcall("updateTable", "experimental_condition", {id: {"id_condition": selected_id_condition}, data: {"assigned_task": "assigned_task + 1"}});

              // alert("SI hay cupos disponibles en la condition " + selected_id_condition);
              // console.table(completed_protocol_filtered);

              protocol_blocked = false;

            // NO available slots
            } else {
              console.log("NO hay cupos disponibles");
              alert("NO hay cupos disponibles");
              protocol_blocked = true;
              window.location.reload();
            };

            // REVIEW: Se esta usando realmente la columna blocked? Es necesaria?
            // Antes se hacia if (condition_data[i].blocked == false).
            // Ahora vemos si hay cupos. Imagino que bloqued solo se da cuando no hay cupos (???)

          /* // REVIEW: Lo de arriba reemplaza a todo esto de abajo... no se si me he dejado algo necesario fuera...
                  let added = false;
                  let added_condition, added_task;

                  all_conditions_tasks = {}
                  for (var i = 0; i < condition_data.length; i++) {
                    if (!(condition_data[i].task_name in all_conditions_tasks)) {
                      all_conditions_tasks[condition_data[i].task_name] = false;
                    }
                    // comprobamos que no esté bloqueado
                    if (condition_data[i].assigned_task >= max_participants) {
                      condition_data[i].blocked = true;
                    } else {
                      condition_data[i].blocked = false;
                      // si forma parte del between selection del usuario se agregará el primero automáticamente
                      if (between_selection[condition_data[i]["task_name"]].includes(condition_data[i]["condition_name"]) && added == false) {
                        temporal_index = between_selection[condition_data[i]["task_name"]].indexOf(condition_data[i]["condition_name"]);

                        XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [between_selection[condition_data[i]["task_name"]][temporal_index]]}).then(function(actual_condition) {
                          // se aumenta el numero de experimental condition
                          XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                        })
                        added_task = condition_data[i]["task_name"];
                        added_condition = condition_data[i]["condition_name"];
                        added = true;
                      }

                    }
                    if (all_conditions_tasks[condition_data[i].task_name] == false) {
                      if (condition_data[i].blocked == false)
                        all_conditions_tasks[condition_data[i].task_name] = true
                    }
                  }

                  console.log("Tiempo de inicio")
                  console.log(actual_time)

                  let protocol_blocked = false;

                  /*Object.keys(all_conditions_tasks).forEach(function(key) {
                    if (all_conditions_tasks[key] == false)
                      protocol_blocked = true;
                  });*/

            if (!protocol_blocked) {
              user_assigned = true;
              console.log("User assigned")

              // Se agrega la data a indexedDB en la tabla assigned_users
              XMLcall("insertIntoTable", "user", {dict: { id_protocol: pid, uid_external: uid_external, status: "assigned", start_date: actual_time}}).then( function (actual_user) {

                XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {
                  uid = actual_user.id_user;
                  XMLcall("findRow", "task", {keys: ["task_name"], values: [task]}).then(function(actual_task) {
                    XMLcall("insertIntoTable", "user_task", {dict: { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}});
                  })

                  //between_selection
                  Object.entries(between_selection).forEach(([key, value]) => {
                    for (var i = 0; i < between_selection[key].length; i++) {
                      XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [between_selection[key][i]]}).then(function(actual_condition) {
                        XMLcall("insertIntoTable", "user_condition", {dict: { id_protocol: pid, id_condition: actual_condition.id_condition, id_user: uid}});

                      })
                    }
                  });
                })
              });

              // Se aumenta el contador general en el sistema
              XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});
            } else {
              console.log("Usuario bloqueado por límite en condiciones");
              alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
            }
          })
        }
      }, function(user_not_found) {
        console.log("error en base de datos (busqueda de user)")
      })

    // USER already assigned and experiment NOT blocked
    } else if (user_assigned && !experiment_blocked) {

      // REVIEW: if this is working OK.

      // CHECK if user can continue: Enough slots & max_time
      // REVIEW: WHY are we doing "XMLcall("findAll", "experimental_condition").then(function(condition_data) {" (???) condition_data NOT used here (???)
      XMLcall("findAll", "experimental_condition").then(function(condition_data) {
        XMLcall("findRow", "user", {keys: ["id_user"], values: [uid]}).then(function(actual_user) {

          // USER exists in user table in DB (REVIEW: WE are in the if (user_assigned) condition. WHY this double check (?)
          if ("status" in actual_user) {

            // USER assigned
            if (actual_user.status == "assigned") {

              // CLEAN UP based on max_sec (over time limit)
              if (!accept_discarded) {
                max_sec = date_to_mil(max_time);

                // REVIEW: IN mysql_controller.js (~ line 148), we had to make the change below because the time is stored in ISO format in the DB. Here too (???)
                // DBtime = actual_user.start_date; instead of DBtime = new Date(actual_user.start_date).toISOString().slice(0, 19);
                // Also, need to Date(actual_time) - new Date(DBtime) because .toISOString().slice(0, 19) messes with the format (?)

                actual_time = new Date().toISOString().slice(0, 19);
                DBtime = actual_user.start_date;

                //if ((actual_time - DBtime)/1000 > max_sec) {
                if ((new Date(actual_time) - new Date(DBtime))/1000 > max_sec) {

                  console.log("actual_time: " + actual_time + " || DBtime" + DBtime + "||" + actual_time - DBtime);
                  //console.log("ID: " + actual_user.id_user + " [" + actual_user.status + "] || actual_time: " + actual_time + " || DBtime: " + DBtime + " || " + (new Date(actual_time) - new Date(DBtime))/1000 + " > " + max_sec);

                  // SET status = discarded in user table in DB
                  XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "discarded"}});

                  // REVIEW: for loop useful in case there is more than one between variable for the uid?
                  XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(user_conditions) {
                    console.log(user_conditions);
                    for (var i = 0; i < user_conditions.length; i++) {
                      XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
                    }
                  })
                  XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});
                  alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal.")

                  console.log("User discarded because it is over the max_time (#2).");
                  window.location.reload();
                }
              }

            // USER statis is NOT assigned
            } else {
              // If it is not in the last_task
              if (!last_task) {
                alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.")
                console.log("User discarded: actual_user.status != assigned.");
                window.location.reload();
              }
            }

            if (actual_user.status == "assigned" || actual_user.status == "completed") {
              XMLcall("findRow", "task", {keys: ["task_name"], values: [task]}).then(function(actual_task) {
                XMLcall("insertIntoTable", "user_task", {dict: { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}});
              })
            }

          // USER NOT in user table in DB
          } else {
            alert("Usuario no encontrado");
            console.log("user not found");
             // REVIEW: SHOULD do a window.location.reload(); (???)
          }
        }, function(user_not_found) {
          console.log("error en base de datos (busqueda de user)")
          })
        })
      }
    }
  }


// funcion de jspysch para lanzar un experimento (recibe la lista completa de questions)
function start_protocol(questions){
  // con el arreglo de questions finalizado se pueden agregar restricciones extras, como el precargado de imágenes (son definidas en index):
  var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'El protocolo está cargando, espere un momento...',
    images: images,
    audio: audio,
    video: video
  }
  questions.unshift({type: 'preload', images: images});

  // almacenamiento de data en base de datos (csv)
  questions.push({
    type: 'call-function',
    func: function () {
      if (online == false) {
        start_indexeddb().then(function(db) {
          updateIndexed("user", uid, "status", "completed", db);

          findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(user_conditions) {
            for (var i = 0; i < user_conditions.length; i++) {
              updateIndexed("condition", user_conditions[i].id_condition, "completed_protocol", "+", db);
            }
          }, function() {console.log("final update user_condition table not found")})
        }, function() {
          console.log("db not charged")
        });
      } else if (online == true) {
        XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "completed"}});
        XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"completed_protocol": "completed_protocol + 1"}});
          }
        }, function() {console.log("final update user_condition table not found")})
      }
    }
  });

  questions.push({
    type: 'fullscreen',
    fullscreen_mode: false
  })

  jsPsych.init({
    timeline: questions,
    override_safe_mode: true,
    show_progress_bar: true,
    message_progress_bar: 'Porcentaje completado',
    fullscreen: true,
    on_interaction_data_update: function(data){
      if (data.event == 'fullscreenexit'){
        alert("Si sales de pantalla completa pueden perderse datos. Por favor, pulsa F11 para volver al experimento.")
      }}
  })
}
