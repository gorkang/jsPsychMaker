function date_to_mil(date) {
  elements = date.split(":");
  secs = 0;
  for (var i = 0; i < elements.reverse().length; i++) {
    secs += elements[i]*(60**i);
  }
  return secs;
}

// lanzado en el body y en el botón "comenzar" (index) para verificar el estado del id
function check_id_status(event) {
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

    if (online == false) {
      // carga de tareas (solo puede ser realizada una vez se tenga el id, ya que no se deben sobreescribir las between ya creadas)
      start_indexeddb().then(function(db) {
        findIndexedSync("user", "uid_external", uid_external, pid, db).then(function(actual_user) {
          uid = actual_user.id_user;
          if (actual_user.status == "discarded") {
            console.log("Usuario descartado.");
            if (accept_discarded) {
              var currentdate = new Date();
              actual_time = currentdate.getFullYear() + "-"
                          + ("0" + (parseInt(currentdate.getMonth()) + 1).toString() ).slice(-2)  + "-"
                          + ("0" + currentdate.getDate()).slice(-2) + "T"
                          + ("0" + currentdate.getHours()).slice(-2) + ":"
                          + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                          + ("0" + currentdate.getSeconds()).slice(-2);

              actual_user.start_date = actual_time;
              // Se agrega la data a indexedDB en la tabla assigned_users
              updateIndexed("user", actual_user.id_user, "status", "assigned", db);

              // se cargan las condiciones del usuario asignados
              user_assigned = true;
              between_selection = {};
              findAllIndexedSync("user_condition", "id_user", uid, pid, db).then(function(between_list) {
                for (const actual_element in between_list) {
                  readIndexedSync("condition", actual_element.id_condition, db).then(function(actual_condition) {
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
                    readIndexedSync("task", actual_element.id_task, db).then(function(actual_task) {
                      completed_experiments.push(actual_task.task_name);
                    })
                  }
                  // se carga en caso de que el usuario esté asignado
                  script_loading("tasks", all_experiments, completed_experiments);
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
                script_loading("tasks", all_experiments, completed_experiments);
              })
            })
          }
        }, function(new_element) {
          console.log("Usuario Nuevo");
          uid = 0;
          // se carga en caso de que el usuario sea nuevo, además acá se selecciona la condicion
          script_loading("tasks", all_experiments, completed_experiments, true);
        });
      }, function(db) {
        console.log("db not charged")
      })
    } else if (online == true) {
      XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {
        if (Object.keys(actual_user).length === 0 && actual_user.constructor === Object) {
          console.log("Usuario Nuevo");
          uid = 0;
          // se carga en caso de que el usuario sea nuevo, además acá se selecciona la condicion
          script_loading("tasks", all_experiments, completed_experiments, true);
        } else {
          uid = actual_user.id_user;
          if (actual_user.status == "discarded") {
            console.log("Usuario descartado.");
            if (accept_discarded) {
              var currentdate = new Date();
              actual_time = currentdate.getFullYear() + "-"
                          + ("0" + (parseInt(currentdate.getMonth()) + 1).toString() ).slice(-2)  + "-"
                          + ("0" + currentdate.getDate()).slice(-2) + "T"
                          + ("0" + currentdate.getHours()).slice(-2) + ":"
                          + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                          + ("0" + currentdate.getSeconds()).slice(-2);

              actual_user.start_date = actual_time;
              // Se agrega la data a indexedDB en la tabla assigned_users
              XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "assigned"}});
              //updateIndexed("user", actual_user.id_user, "status", "assigned", db);

              // se cargan las condiciones del usuario asignados
              user_assigned = true;
              between_selection = {};
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

              for (var [key, value] of Object.entries(between_selection)) {
                for (var i = 0; i < value.length; i++) {
                  XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [value[i]]}).then(function(actual_condition) {
                    XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                  })
                }
              }
              XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});

              completed_experiments = [];

              XMLcall("findAll", "user_task", {keys: ["id_user"], values: [uid]}).then(function(tasks_list) {
                for (const actual_element in tasks_list) {
                  XMLcall("findRow", "task", {keys: ["id_task"], values: [actual_element.id_task]}).then(function(actual_task) {
                    completed_experiments.push(actual_task.task_name);
                  })
                }
                // se carga en caso de que el usuario esté asignado
                script_loading("tasks", all_experiments, completed_experiments);
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

            completed_experiments = [];
            XMLcall("findAll", "user_task", {keys: ["id_user"], values: [uid]}).then(function(tasks_list) {
              for (const actual_element in tasks_list) {
                XMLcall("findRow", "task", {keys: ["id_task"], values: [actual_element.id_task]}).then(function(actual_task) {
                  completed_experiments.push(actual_task.task_name);
                })
              }
              // se carga en caso de que el usuario esté asignado
              script_loading("tasks", all_experiments, completed_experiments);
            })
          }
        }
      }, function (error) {
        console.log("User search error")
      });
    }
  }
}


// función para almacenar elementos en los csv que funcionarán como base de datos
function database(filename, filedata = "", condition = "", status = ""){
  if (filename == "assigned_users") {
    // obtención de fecha, el slice es para asegurarnos que hayan 2 dígitos en cada elemento
    var currentdate = new Date();
    actual_time = currentdate.getFullYear() + "-"
                + ("0" + currentdate.getMonth()+1).slice(-2)  + "-"
                + ("0" + currentdate.getDate()).slice(-2) + "T"
                + ("0" + currentdate.getHours()).slice(-2) + ":"
                + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                + ("0" + currentdate.getSeconds()).slice(-2);
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
  } else if ((completed_experiments.length == all_experiments.length) || completed) {
    text_input_uid.innerHTML = "Usted ya ha completado todas las tareas de este protocolo."
  } else if (discarded && !accept_discarded) {
    text_input_uid.innerHTML = "Este usuario fue descartado del protocolo, comuníquese con un administrador para poder volver a ingresar."
  } else {
    text_input_uid.innerHTML = "Tareas cargadas.\nPresione el siguiente botón para comenzar con las tareas de este protocolo."
    start.hidden = false;
  }
  input_uid.hidden = true;
  check.hidden = true;
}

// filtrador de elementos por questions["procedure"]
function obtain_experiments(questions, completed_experiments){
  // se filtran los experimentos completados para obtener los faltantes
  acceptedValues = all_experiments.filter( function( element ) {
    return !completed_experiments.includes( element );
  } );

  // se crea el array con los elementos no completados
  var questions = Object.keys(questions).reduce(function(r, e) {
    if (acceptedValues.includes(questions[e]["procedure"])) {
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
function completed_task_storage(csv, task, first_task, last_task = false) {
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
                console.log("Asignado")
                var currentdate = new Date();
                actual_time = currentdate.getFullYear() + "-"
                            + ("0" + (parseInt(currentdate.getMonth()) + 1).toString() ).slice(-2)  + "-"
                            + ("0" + currentdate.getDate()).slice(-2) + "T"
                            + ("0" + currentdate.getHours()).slice(-2) + ":"
                            + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                            + ("0" + currentdate.getSeconds()).slice(-2);

                // Se agrega la data a indexedDB en la tabla assigned_users
                updateIndexed("user", uid, "start_date", actual_time, db);
                updateIndexed("user", uid, "status", "assigned", db);
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
              var currentdate = new Date();
              actual_time = currentdate.getFullYear() + "-"
                          + ("0" + (parseInt(currentdate.getMonth()) + 1).toString() ).slice(-2)  + "-"
                          + ("0" + currentdate.getDate()).slice(-2) + "T"
                          + ("0" + currentdate.getHours()).slice(-2) + ":"
                          + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                          + ("0" + currentdate.getSeconds()).slice(-2);

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
                  console.log("Usuario descartado por límite de tiempo.");
                  window.location.reload();
                }
              }
            } else {
              if (!last_task) {
                alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.")
                console.log("Usuario descartado por límite de tiempo.")
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
  } else if (online == true) {

    if (!user_assigned && !experiment_blocked) {
      XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {
        if ("status" in actual_user) {
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

              if (!protocol_blocked && accept_discarded) {
                user_assigned = true;
                console.log("Asignado")
                var currentdate = new Date();
                actual_time = currentdate.getFullYear() + "-"
                            + ("0" + (parseInt(currentdate.getMonth()) + 1).toString() ).slice(-2)  + "-"
                            + ("0" + currentdate.getDate()).slice(-2) + "T"
                            + ("0" + currentdate.getHours()).slice(-2) + ":"
                            + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                            + ("0" + currentdate.getSeconds()).slice(-2);

                // Se agrega la data a indexedDB en la tabla assigned_users
                XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"start_date": actual_time}});
                XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "assigned"}});
                //updateIndexed("user", uid, "start_date", actual_time, db);
                //updateIndexed("user", uid, "status", "assigned", db);
              } else {
                console.log("Usuario bloqueado por límite en condiciones");
                alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
              }
            })
          }
        } else { //se crea nuevo usuario al terminar la primera tarea
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

            if (!protocol_blocked) {
              user_assigned = true;
              console.log("Asignado")
              var currentdate = new Date();
              actual_time = currentdate.getFullYear() + "-"
                          + ("0" + (parseInt(currentdate.getMonth()) + 1).toString() ).slice(-2)  + "-"
                          + ("0" + currentdate.getDate()).slice(-2) + "T"
                          + ("0" + currentdate.getHours()).slice(-2) + ":"
                          + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                          + ("0" + currentdate.getSeconds()).slice(-2);

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
                        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
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
    } else if (user_assigned && !experiment_blocked) {
      // revisar si puede continuar o si ya no hay cupos o si ya no tiene tiempo
      XMLcall("findAll", "experimental_condition").then(function(condition_data) {
        XMLcall("findRow", "user", {keys: ["id_user"], values: [uid]}).then(function(actual_user) {
          if ("status" in actual_user) {
            if (actual_user.status == "assigned") {
              if (!accept_discarded) {
                max_sec = date_to_mil(max_time);
                actual_time = new Date

                if ((actual_time - new Date(actual_user.start_date))/1000 > max_sec) {
                  XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "discarded"}});

                  XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(user_conditions) {
                    for (var i = 0; i < user_conditions.length; i++) {
                      XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
                    }
                  })
                  XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});
                  alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.")
                  console.log("Usuario descartado por límite de tiempo.");
                  window.location.reload();
                }
              }
            } else {
              if (!last_task) {
                alert("Su usuario ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con un administrador.")
                console.log("Usuario descartado por límite de tiempo.")
              }
            }

            if (actual_user.status == "assigned" || actual_user.status == "completed") {
              XMLcall("findRow", "task", {keys: ["task_name"], values: [task]}).then(function(actual_task) {
                XMLcall("insertIntoTable", "user_task", {dict: { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}});
              })
            }
          } else {
            console.log("user not found");
            console.log(user_not_found);
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
        XMLcall("findAll", "user_condition").then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"completed_protocol": "completed_protocol + 1"}});
          }
        }, function() {console.log("final update user_condition table not found")})
      }
    }
  });

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
