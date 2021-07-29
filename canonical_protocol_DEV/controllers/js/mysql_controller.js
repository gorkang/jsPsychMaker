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
            console.log(response);
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
        base_query["id"] = "";
        for (var [key, value] of Object.entries(elements["id"])) {
          base_query["id"] = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || value.toString().indexOf("- 1") != -1 || isNormalInteger(value.toString())) {
            base_query["id"] += value
          } else {
            base_query["id"] += '"' + value + '"'
          }
        }
        base_query["data"] = "";
        for (var [key, value] of Object.entries(elements["data"])) {
          base_query["data"] = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || value.toString().indexOf("- 1") != -1 || isNormalInteger(value.toString())) {
            base_query["data"] += value
          } else {
            base_query["data"] += '"' + value + '"'
          }
        }

      } else if (query == "condition_selection") {
        base_query["id"] = "";
        for (var [key, value] of Object.entries(elements["id"])) {
          base_query["id"] = key + "=";
          if (value.toString().indexOf("+ 1") != -1 || value.toString().indexOf("- 1") != -1 || isNormalInteger(value.toString())) {
            base_query["id"] += value
          } else {
            base_query["id"] += '"' + value + '"'
          }
        }
      } else if (query == "findRow" || query == "findAll") {
        console.log(table_name);
        console.log(elements);
        if ('keys' in elements)
          base_query["keys"] = elements["keys"];
        if ('values' in elements)
          base_query["values"] = elements["values"];
      }

      xhr.send(JSON.stringify(base_query));
    }
  )
}

function start_mysqldb(pid, max_participants) {

  // Ver mysql.php para detalles de como se hacen las llamadas mysql

/*
// NOW in config.js //

  const conditions = [
    { id_protocol: pid, condition_name: "control", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"},
    { id_protocol: pid, condition_name: "text", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"},
    { id_protocol: pid, condition_name: "pictorial", assigned_task: 0, completed_protocol: 0, blocked: 0, task_name: "INFCONS", type: "between"}
  ]

  const tasks = [
    { id_protocol: pid, task_name: "Consent"},
    { id_protocol: pid, task_name: "DEMOGR"},
    { id_protocol: pid, task_name: "PSETPP"},
    { id_protocol: pid, task_name: "PSPPC"},
    { id_protocol: pid, task_name: "PRFBM"},
    { id_protocol: pid, task_name: "HRPVB"},
    { id_protocol: pid, task_name: "INFCONS"},
    { id_protocol: pid, task_name: "HRPVBpost"},
    { id_protocol: pid, task_name: "PRFBMpost"},
    { id_protocol: pid, task_name: "BNT"},
    { id_protocol: pid, task_name: "OBJNUM"},
    { id_protocol: pid, task_name: "DEBRIEF"},
    { id_protocol: pid, task_name: "Goodbye"},
  ]

*/
  XMLcall("createTable", "protocol", {keys: "id_protocol INT NOT NULL PRIMARY KEY DEFAULT 0, counter INT NOT NULL DEFAULT 0, last_revision TIMESTAMP DEFAULT CURRENT_TIMESTAMP, max_participants INT NOT NULL DEFAULT " + max_participants.toString()});
  XMLcall("createTable", "experimental_condition", {keys: "id_condition INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, assigned_task INT NOT NULL DEFAULT 0, blocked BOOLEAN NOT NULL DEFAULT 0, completed_protocol INT NOT NULL DEFAULT 0, condition_name VARCHAR(255) NOT NULL, task_name VARCHAR(255) NOT NULL, type VARCHAR(255), UNIQUE KEY unique_combination (id_protocol, condition_name)"});

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
    //actual_time = new Date
    actual_time = new Date().toISOString().slice(0, 19);

    // REVIEW: FILTERING to loop only amongst NON completed. SHOULD BE ONLY amongst assigned (???)
    users = users.filter(function(value,index) { return value["status"]  !== "completed"; });

    for (var i = 0; i < users.length; i++) {

      DBtime = users[i].start_date; // Date already stored in ISO format
      //DBtime = new Date(users[i].start_date).toISOString().slice(0, 19);

      // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el usuario es descartado y removido de los usuarios asignados
      if ((new Date(actual_time) - new Date(DBtime))/1000 > max_sec && users[i].status == "assigned") {

        console.log("ID: " + users[i].id_user + " [" + users[i].status + "] || actual_time: " + actual_time + " || DBtime: " + DBtime + " || " + (new Date(actual_time) - new Date(DBtime))/1000 + " > " + max_sec);

        XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "discarded"}});
        XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});

        XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [users[i].id_user]}).then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
          }
        })

      }
    }
  }, function (error) {
    console.log("User Table not found")
  })

}

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

        //updateIndexed("condition", condition_data[i].id_condition, "blocked", true, db);

      } else {
        condition_data[i].blocked = false;

        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": false}});

        //updateIndexed("condition", condition_data[i].id_condition, "blocked", false, db);
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
