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

function XMLcall (query, table_name, elements = {}) {
  return new Promise(
    function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          response = (xhr.responseText);
          if (json_can_parsed (response)) {
            answer = (response != "") ? JSON.parse(response) : {};
            //console.log(answer);
            resolve(answer);
          } else {
            //console.log(response);
            reject(response);
          }
        }
      }

      xhr.open('POST', 'controllers/php/mysql.php');
      xhr.setRequestHeader('Content-Type', 'application/json');

      base_query = {"query": query, "table_name": table_name, "pid": pid};

      if (query == "createTable") {
        base_query["keys"] = elements["keys"];
      } else if (query == "insertIntoTable") {
        keys = Object.keys(elements["dict"]).join();
        values = '"' + Object.values(elements["dict"]).join('","') + '"'
        base_query["keys"] = keys;
        base_query["values"] = values;
      } else if (query == "updateTable") { //update "1" element from mysql table
        console.log(elements["id"])
        base_query["id"] = "";
        for (var [key, value] of Object.entries(elements["id"])) {
          console.log(typeof value);
          base_query["id"] = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || isNormalInteger(value.toString())) {
            console.log(value);
            base_query["id"] += value
          } else {
            base_query["id"] += '"' + value + '"'
          }
        }

        base_query["data"] = "";
        for (var [key, value] of Object.entries(elements["data"])) {
          base_query["data"] = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || isNormalInteger(value.toString())) {
            base_query["data"] += value
          } else {
            base_query["data"] += '"' + value + '"'
          }
        }

        //id = JSON.stringify(elements["id"]).replaceAll(':','=').replaceAll(/"|\{|\}/g,'');
        //base_query["id"] = id.replace("=", '="') + '"';
        //data = JSON.stringify(elements["data"]).replaceAll(':','=').replaceAll(/"|\{|\}/g,'');
        //base_query["data"] = data.replace("=", '="') + '"';
      } else if (query == "findRow" || query == "findAll") {
        if ('keys' in elements)
          base_query["keys"] = elements["keys"];
        if ('values' in elements)
          base_query["values"] = elements["values"];
      }

      /*if ("id" in elements) {
        id = JSON.stringify(elements["id"]).replaceAll('":','=').replaceAll(/"|\{|\}/g,'');
        base_query["id"] = id;
      } else if ("data" in elements) {
        data = JSON.stringify(elements["data"]).replaceAll('":','=').replaceAll(/"|\{|\}/g,'');
        base_query["data"] = data;
      } else if ("dict" in elements) {
        //rows = '"' + Object.keys(elements["dict"]).join('","') + '"'
        values = '"' + Object.values(elements["dict"]).join('","') + '"'
        keys = Object.keys(elements["dict"]).join();
        //values = Object.values(elements["dict"]).join();
        base_query["keys"] = keys;
        base_query["values"] = values;
      } else if ("keys" in elements) {
      }*/
      //console.log(base_query);
      xhr.send(JSON.stringify(base_query));
    }
  )
}

function start_mysqldb(pid, max_participants) {

  const conditions = [
    { id_protocol: pid, condition_name: "Text", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "Between-Within", type: "between"},
    { id_protocol: pid, condition_name: "Image", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "Between-Within", type: "between" }
  ]

  const tasks = [
    { id_protocol: pid, task_name: "Welcome"},
    { id_protocol: pid, task_name: "Between-Within"},
    { id_protocol: pid, task_name: "Goodbye"},
  ]

  XMLcall("createTable", "protocol", {keys: "id_protocol INT NOT NULL PRIMARY KEY DEFAULT 0, counter INT NOT NULL DEFAULT 0, last_revision TIMESTAMP DEFAULT CURRENT_TIMESTAMP, max_participants INT NOT NULL DEFAULT " + max_participants.toString()});
  XMLcall("createTable", "experimental_condition", {keys: "id_condition INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, assigned_task INT NOT NULL DEFAULT 0, blocked BOOLEAN NOT NULL DEFAULT 0, completed_protocol INT NOT NULL DEFAULT 0, condition_name VARCHAR(255) NOT NULL, task_name VARCHAR(255) NOT NULL, type VARCHAR(255), UNIQUE KEY unique_combination (id_protocol, condition_name)"});

  //insertIntoMysqlTable("condition", {})
  //updateMysqlTable("protocol", {"id_protocol": pid}, {"counter": "counter + 1"});

  // necesario para la lista de tareas completadas
  XMLcall("createTable", "task", {keys: "id_task INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, task_name VARCHAR(255) NOT NULL, UNIQUE KEY unique_combination (id_protocol, task_name)"});

  XMLcall("createTable", "user", {keys: "id_user INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, uid_external VARCHAR(255) NOT NULL,  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status VARCHAR(255) NOT NULL DEFAULT 'assigned', UNIQUE KEY unique_combination (id_protocol, uid_external)"});

  XMLcall("createTable", "user_condition", {keys: "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, id_condition INT NOT NULL REFERENCES experimental_condition(id_condition), id_user INT NOT NULL REFERENCES user(id_user), UNIQUE KEY unique_combination (id_protocol, id_condition, id_user)"});
  XMLcall("createTable", "user_task", {keys: "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, id_task INT NOT NULL REFERENCES task(id_task), id_user INT NOT NULL REFERENCES user(id_user), UNIQUE KEY unique_combination (id_protocol, id_task, id_user)"});

  XMLcall("insertIntoTable", "protocol", {dict: {id_protocol: pid}});
  for (var i in conditions) {
    XMLcall("insertIntoTable", "experimental_condition", {dict: conditions[i]});
  }
  for (var i in tasks) {
    XMLcall("insertIntoTable", "task", {dict: tasks[i]});
  }
}

function clean_mysql(db){

  XMLcall("findAll", "user").then(function(users) {
    max_sec = date_to_mil(max_time);
    actual_time = new Date
    for (var i = 0; i < users.length; i++) {
      // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el usuario es descartado y removido de los usuarios asignados
      if ((actual_time - new Date(users[i].start_date))/1000 > max_sec && users[i].status == "assigned") {

        XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "discarded"}});
        XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});
        //updateIndexed("user", users[i].id_user, "status", "discarded", db);
        //updateIndexed("protocol", pid, "counter", "-", db);

        XMLcall("findAll", "user_condition").then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
            //updateIndexed("condition", user_conditions[i].id_condition, "assigned_task", "-", db);
          }
        })
        /*
        findAllIndexedSync("user_condition", "id_user", users[i].id_user, pid, db).then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            updateIndexed("condition", user_conditions[i].id_condition, "assigned_task", "-", db);
          }
        })
        */
      }
    }
  }, function (error) {
    console.log("User Table not found")
  })

  /*

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
  ); */
}

function charge_clean_mysql(iterations_for_review, max_participants) {

  XMLcall("findAll", "experimental_condition").then(function(condition_data) {
    // limpieza de base de datos
    XMLcall("findAll", "protocol").then(function(actual_stats) {
      // se calcula el módulo entre el contador y las iteraciones para la revisión
      mod =  actual_stats.counter % iterations_for_review;
      if (mod == 0 && actual_stats.counter != 0) {
        clean_db(db);
      }
    }, function () {
      console.log("protocol table not found")
    })

    // actualizamos las condiciones bloquedas dependiendo de la cantidad de tareas asignadas
    for (var i = 0; i < condition_data.length; i++) {
      if (condition_data[i].assigned_task >= max_participants) {
        condition_data[i].blocked = true;

        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": true}});

        //updateIndexed("condition", condition_data[i].id_condition, "blocked", true, db);

      } else {
        condition_data[i].blocked = false;

        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": false}});

        //updateIndexed("condition", condition_data[i].id_condition, "blocked", false, db);
      }
    }
    actual_condition_data = condition_data;
    check.disabled = false;

  }, function (error) {
    console.log("Condition Table not found");
  });
}

/*function createMysqlTable(table_name, rows) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      response = (xhr.responseText);
      console.log(response);
    }
  }
  xhr.open('POST', 'controllers/php/mysql.php');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify({"query": "createTable", "table_name": table_name, "rows": rows}));
  //console.log(table_name)
}

function updateMysqlTable(table_name, id, data) {

  id = JSON.stringify(id).replaceAll('":','=').replaceAll(/"|\{|\}/g,'');

  data = JSON.stringify(data).replaceAll('":','=').replaceAll(/"|\{|\}/g,'');

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      response = (xhr.responseText);
    }
  }
  xhr.open('POST', 'controllers/php/mysql.php');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify({"query": "updateTable", "table_name": table_name, "id": id, "data": data}));
}

function insertIntoMysqlTable(table_name, dict) {

  rows = Object.keys(dict).join();
  values = Object.values(dict).join();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      response = (xhr.responseText);
    }
  }
  xhr.open('POST', 'controllers/php/mysql.php');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify({"query": "insertIntoTable", "table_name": table_name, "rows": rows, "values": values}));
}*/
