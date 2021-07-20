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
      window.msIDBKeyRange

      if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
      }

      /*
      // NOW in config.js //

      const conditions = [
        { id_protocol: pid, condition_name: "Text", assigned_task: 0, completed_protocol: 0, blocked: false, task_name: "Between-Within", type: "between"},
        { id_protocol: pid, condition_name: "Image", assigned_task: 0, completed_protocol: 0, blocked: false, task_name: "Between-Within", type: "between" }
      ]

      const tasks = [
        { id_protocol: pid, task_name: "Welcome"},
        { id_protocol: pid, task_name: "Between-Within"},
        { id_protocol: pid, task_name: "Goodbye"},
      ]
      */

      // REVIEW: NO veo esto en mysql
      const protocol_stats = { id_protocol: pid, counter: 0, created_date: new Date(), max_participants: max_participants, last_revision: "None"}

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
        condition_table = db.createObjectStore("condition", {keyPath: "id_condition", autoIncrement:true });
        // tareas
        task_table = db.createObjectStore("task", {keyPath: "id_task", autoIncrement:true });

        // tablas intermedias para el many to many
        db.createObjectStore("user_task", {keyPath: "id", autoIncrement:true });
        db.createObjectStore("user_condition", {keyPath: "id", autoIncrement:true });

        for (var i in conditions) {
          condition_table.add(conditions[i]);
        }
        for (var i in tasks) {
          task_table.add(tasks[i]);
        }
        protocol_table.add(protocol_stats);
      }
    }
  )
}

function clean_indexeddb(db){
  readAllIndexedSync("user", db).then(
    function (results) {
      max_sec = date_to_mil(max_time);
      actual_time = new Date
      for (var i = 0; i < results.length; i++) {
        // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el usuario es descartado y removido de los usuarios asignados
        if ((actual_time - new Date(results[i].start_date))/1000 > max_sec && results[i].status == "assigned") {
          updateIndexed("user", results[i].id_user, "status", "discarded", db);
          updateIndexed("protocol", pid, "counter", "-", db);

          findAllIndexedSync("user_condition", "id_user", results[i].id_user, pid, db).then(function(user_conditions) {
            for (var i = 0; i < user_conditions.length; i++) {
              updateIndexed("condition", user_conditions[i].id_condition, "assigned_task", "-", db);
            }
          })

        }
      }
    }, function () {
      console.log("users table not found")
    }
  );
}

// loading tasks scripts, wait for db charged, then wait for read conditions table, then enable check button
function load_clean_indexeddb(iterations_for_review, max_participants) {
  start_indexeddb().then(function(db) {
    readAllIndexedSync("condition", db).then(function(condition_data) {
      // limpieza de base de datos
      //readAllIndexedSync("protocol", db).then(function(actual_stats) {
      findIndexedSync("protocol", "id_protocol", pid, pid, db).then(function(actual_stats) {
        // se calcula el módulo entre el contador y las iteraciones para la revisión
        mod =  actual_stats.counter % iterations_for_review;
        if (mod == 0 && actual_stats.counter != 0) {
          clean_indexeddb(db);
        }
      }, function () {
        console.log("protocol table not found")
      })

      // actualizamos las condiciones bloquedas dependiendo de la cantidad de tareas asignadas
      for (var i = 0; i < condition_data.length; i++) {
        if (condition_data[i].assigned_task >= max_participants) {
          condition_data[i].blocked = true;
          updateIndexed("condition", condition_data[i].id_condition, "blocked", true, db);
        } else {
          condition_data[i].blocked = false;
          updateIndexed("condition", condition_data[i].id_condition, "blocked", false, db);
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
