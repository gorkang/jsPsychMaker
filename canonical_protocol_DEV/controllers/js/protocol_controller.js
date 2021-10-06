function date_to_mil(date) {
  elements = date.split(":");
  secs = 0;
  for (var i = 0; i < elements.reverse().length; i++) {
    secs += elements[i]*(60**i);
  }
  return secs;
}

function check_fullscreen(task_name) {
  return ({
    timeline: [{
      type: 'fullscreen',
      message: '<p>El experimento entrará en modo pantalla completa</p>',
      button_label: 'Full screen',
      delay_after: 0,
      fullscreen_mode: true,
      data: {procedure: task_name}
    }],
    data: {procedure: task_name},
    conditional_function: function(){
      if(window.innerWidth != screen.width || window.innerHeight != screen.height)
        return true;
      else
        return false;
    }
  });
}

// obtención de condiciones para usuario nuevo (funciona como promise para que sea sincrónico)
function condition_selection(between_selection_temp = {}) {
  return new Promise(
    function(resolve, reject) {
      between_selection = {};
      // REVIEW: hay que ver si funciona correctamente en caso de que no existan condiciones en el experimento
      XMLcall("findAll", "experimental_condition").then(function(condition_data) {

        // se establece un mínimo (respecto a este mínimo seleccionaremos la condicion)
        // diccionario de mínimos para que no se pierda con cambios de tareas en condition_data
        actual_min = {};
        temp_condition_task_list = [];

        if (Object.keys(between_selection_temp).length === 0) {
          // esta parte solo debe ser usada en caso de que sea un usuario nuevo
          // ver si se puede pasar a filter-map


          // NEW VERSION ----------------------------------------------
          condition_data_temp = [];
          ARRAY_temp = [];

          // Get array with unique between tasks (we need to select one condition for each one)
          unique_tasks = [...new Set(condition_data.map(item => item.task_name))];

          // For each of the between tasks (usually just one)
          for (var i = 0; i < unique_tasks.length; i++) {

            // Temporal array for the condition i
            ARRAY_temp[i] = condition_data.filter(function(value,index) { return value["task_name"] === unique_tasks[i]; });
            // Min number of assigned_task in array
            min_assigned_temp = Math.min.apply(Math, ARRAY_temp[i].map(function(value,index) { return value["assigned_task"]; }));
            // Filter array so only the rows where assigned_task is <= min_assigned_temp AND < max_participants remain. If there are more than one, we get the first one [0]
            condition_data_temp = ARRAY_temp[i].filter(function(value,index) { return value["assigned_task"] <= min_assigned_temp &&  value["assigned_task"] < max_participants; })[0];


            // REVIEW: This is mostly copied from CHECK below. Not sure how to integrate with // comprobación para discarded to avoid duplication
            if (condition_data_temp === undefined) {
              // If we can't assign a condition
              experiment_blocked = true;
              condition_temp_array = [false];
              alert("Se ha alcanzado el número máximo de participantes para este protocolo [#1]");
              throw new Error('Usuario bloqueado por límite en condiciones'); // To avoid loading the rest of the questions
              resolve(false);
            } else {
              // If there are slots, write to between_selection[NAME_OF_TASK]
              between_selection[unique_tasks[i]] = [condition_data_temp["condition_name"]];
              experiment_blocked = false;
              condition_temp_array = [true];
              resolve(true);
            }

          };

        } else {
          // comprobación para discarded
          temp_accepted_conditions = condition_data.filter(function(value,index) { return value["assigned_task"] < max_participants; })

          condition_temp_array = [];

          Object.entries(between_selection_temp).forEach(([key, val]) => {
            // si al filtrar las condiciones, comparandolas con el key-value actual (ejem: key = INFCONS, value = control), sumando el hecho de que sea menor al maximo de participantes, se obtiene un resultado,
            // entonces se agrega a la lista temporal un true, en caso contrario un false
            condition_temp_array.push(condition_data.filter(function(value,index) { return (key == value["task_name"] && val == value["condition_name"] && value["assigned_task"] < max_participants); }).length > 0);
          })
          condition_temp_array = between_selection_temp.map(function (condition, index, array) { return (condition in between_selection) });
        }

        // CHECKS
        if (condition_temp_array.includes(false)) {
          experiment_blocked = true;
          console.log("Usuario bloqueado por límite en condiciones");
          resolve(false);
        } else {
          experiment_blocked = false;
          resolve(true);
        }

      }, function() {
        console.log("Error al cargar la seleccion de condiciones.")
        reject(false)
      });
    }
  );
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

      // gets experimental_condition table. Checks if there are available slots
      XMLcall("findAll", "experimental_condition").then(function(condition_data) {

        // Look for uid_external in user table
        XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {

          // NEW user (uid_external not in DB) ---
          if (Object.keys(actual_user).length === 0 && actual_user.constructor === Object) {

            console.log("New user");
            uid = 0;
            condition_selection().then(function(accepted) {
              // LOAD all the tasks. This also loads the between participants conditions
              script_loading("tasks", all_tasks, completed_experiments, true);
            });

          // User found in DB
          } else {

            // Fetch internal DB uid
            uid = actual_user.id_user;

            if (actual_user.status == "assigned" || (accept_discarded && actual_user.status == "discarded")) {

              // REVIEW: revisar si podemos cambiar esto y hacerlo antes, porque es importante tener cargado esto para la funcion condition_selection
              // LOAD **between participants** conditions for the particicipant from the DB (so she can continue where she left off)
              between_selection = {};

              XMLcall("condition_selection", "", {id: {"id_user": actual_user.id_user}}).then(function (between_selection_temp){
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

                if (actual_user.status == "discarded") {
                  // Reset starting date to NOW
                  actual_time = new Date().toISOString().slice(0, 19);
                  actual_user.start_date = actual_time;
                  // REVIEW: We intert the new date into the DB (???)
                  condition_selection(between_selection).then(function(accepted) {
                    // si la revisión de condiciones resulta positiva podemos agregar al usuario reasignado
                    if (accepted) {
                      // Change status to assigned in table user
                      XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "assigned"}});
                      console.log("Usuario re-assigned.");
                      for (var [key, value] of Object.entries(between_selection)) {
                        for (var i = 0; i < value.length; i++) {
                          XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [value[i]]}).then(function(actual_condition) {

                            // REVIEW: This assigned_task + 1 is inside a for loop (???)
                            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                          })
                        }
                      }
                      XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});
                      // LOAD all the tasks. This also loads the between participants conditions
                      script_loading("tasks", all_tasks, completed_experiments, true);
                      user_assigned = true;
                    }
                  });
                } else {
                  console.log("User previously assigned.");
                  user_assigned = true;
                }

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
        //}; completed_protocol_filtered.length == 0
      }); // Available slots XMLcall
    } // online / offline
  } // valid uid
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
    start.removeAttribute("style");
  } else if ((completed_experiments.length == all_tasks.length) || completed) {
    text_input_uid.innerHTML = "Usted ya ha completado todas las tareas de este protocolo."
  } else if (discarded && !accept_discarded) {
    text_input_uid.innerHTML = "Este usuario fue descartado del protocolo, comuníquese con un administrador para poder volver a ingresar."
  } else {
    text_input_uid.innerHTML = "Tareas cargadas.\nPresione el siguiente botón para comenzar con las tareas de este protocolo."
    start.hidden = false;
    start.removeAttribute("style");
  }
  input_uid.hidden = true;
  if (typeof check !== 'undefined' && check !== null) {
    check.hidden = true;
    check.setAttribute("style", "display:none !important");
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
            // verificación de cupos
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

        // NEW USER ----------------------------------------------------
        // Created after first task (Consent)
        // QUESTION: How we know is the first task (???)

        } else {

          // Check condition_data table on DB
          XMLcall("findAll", "experimental_condition").then(function(condition_data) {

            // Use condition_data to check if there are available slots for the condition selected in the BETWEEN task (e.g. between_selection["INFCONS"][0])
            // We use Object.keys(between_selection).length to assign +1 to each of the between tasks

            // For each of the between tasks (usually just one)
            for (var i = 0; i < Object.keys(between_selection).length; i++) {

              completed_protocol_filtered = condition_data.filter(function(value,index) {return value["assigned_task"] < max_participants && value["condition_name"] === between_selection[Object.keys(between_selection)[i]][0]});

              if (completed_protocol_filtered.length > 0) {

                added_task = completed_protocol_filtered[0]["task_name"]
                selected_id_condition = completed_protocol_filtered[0].id_condition
                XMLcall("updateTable", "experimental_condition", {id: {"id_condition": selected_id_condition}, data: {"assigned_task": "assigned_task + 1"}});

                protocol_blocked = false;

              } else {
                console.log("NO hay cupos disponibles");
                alert("NO hay cupos disponibles");
                protocol_blocked = true;
                window.location.reload();
              };

            };

            // REVIEW: Se esta usando realmente la columna blocked? Es necesaria?
            // Antes se hacia if (condition_data[i].blocked == false).
            // Ahora vemos si hay cupos. Imagino que bloqued solo se da cuando no hay cupos (???)

            if (!protocol_blocked) {
              user_assigned = true;
              console.log("User assigned")

              // Se agrega la data a MySQL en la tabla assigned_users
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
