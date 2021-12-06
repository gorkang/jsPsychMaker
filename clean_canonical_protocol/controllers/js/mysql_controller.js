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
            // if (debug_mode === true) console.log(query + " // " + table_name);
            // if (debug_mode === true) console.log(answer);
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

      } else if (query == "general_query") {
        // console.log(elements);

        // CHECK general_query sql is a SELECT
        if (!Object.entries(elements.sql)[0][1].startsWith("SELECT")) throw (new Error('general_query ERROR'));

        // Put elements in SQL query
        base_query.id = Object.entries(elements.id)[0][0] + "=" +  Object.entries(elements.id)[0][1];
        base_query.sql = Object.entries(elements.sql)[0][1];

        //console.log(base_query);

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

  if (debug_mode === true) console.warn("start_mysqldb()");

  // REVIEW: start_mysqldb() should be used ONLY if we don't already have the DB

  if (debug_mode === true) {

    // See mysql.php for the source of the mysql calls
    XMLcall("createTable", "protocol", {keys: "id_protocol INT NOT NULL PRIMARY KEY DEFAULT 0, counter INT NOT NULL DEFAULT 0, last_revision TIMESTAMP DEFAULT CURRENT_TIMESTAMP, max_participants INT NOT NULL DEFAULT " + max_participants.toString()});
    XMLcall("createTable", "experimental_condition", {keys: "id_condition INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, assigned_task INT NOT NULL DEFAULT 0, blocked BOOLEAN NOT NULL DEFAULT 0, completed_protocol INT NOT NULL DEFAULT 0, condition_key VARCHAR(255) NOT NULL, condition_name VARCHAR(255) NOT NULL, task_name VARCHAR(255) NOT NULL, type VARCHAR(255), UNIQUE KEY unique_combination (id_protocol, condition_name)"});

    // necesario para la lista de tareas completadas
    XMLcall("createTable", "task", {keys: "id_task INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, task_name VARCHAR(255) NOT NULL, UNIQUE KEY unique_combination (id_protocol, task_name)"});

    XMLcall("createTable", "user", {keys: "id_user INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, uid_external VARCHAR(255) NOT NULL,  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, status VARCHAR(255) NOT NULL DEFAULT 'assigned', UNIQUE KEY unique_combination (id_protocol, uid_external)"});

    XMLcall("createTable", "user_condition", {keys: "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, id_condition INT NOT NULL REFERENCES experimental_condition(id_condition), id_user INT NOT NULL REFERENCES user(id_user), UNIQUE KEY unique_combination (id_protocol, id_condition, id_user)"});
    XMLcall("createTable", "user_task", {keys: "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, id_protocol INT NOT NULL DEFAULT 0, id_task INT NOT NULL REFERENCES task(id_task), id_user INT NOT NULL REFERENCES user(id_user), UNIQUE KEY unique_combination (id_protocol, id_task, id_user)"});
  }


  // CHECK if task table has contents [this select is tied to the pid]
  XMLcall("findRow", "task", {keys: ["task_name"], values: ["Consent"]}).then(function(tasks_in_table) {

    if (Object.keys(tasks_in_table).length === 0) {
      if (debug_mode === true) console.warn("Creating tasks tables");
     // REVIEW: THIS CAN BE A SINGLE TRANSACTION
      for (var i in tasks) {
        XMLcall("insertIntoTable", "task", {dict: tasks[i]});
      }
    } else {
      if (debug_mode === true) console.warn("start_mysqldb() | Tasks tables already exist");
    }

  });

  // These two need to run always
  XMLcall("insertIntoTable", "protocol", {dict: {id_protocol: pid, max_participants: max_participants}});
  for (var j in conditions) {
    XMLcall("insertIntoTable", "experimental_condition", {dict: conditions[j]});
  }

}

// clean_mysql() ---------------------------------------------------------------

// Clean DB from discarded users (time since started protocol > max_time)
function clean_mysql(){

  if (debug_mode === true) console.warn("clean_mysql()");

  // REVIEW: clean_mysql should be done before check_id_status()
  // This is important because now we say there are no slots before cleaning up discarded
  // Make sure there are no other collisions, for example, in check_id_status(), if the participant already exists and we accept_discarded, the participant can continue!


  XMLcall("findAll", "user").then(function(users) {

    // REVIEW: FILTERING to loop only amongst NON completed. SHOULD BE ONLY amongst assigned (???)
    users = users.filter(function(value,index) { return value["status"]  !== "completed"; });

    for (var i = 0; i < users.length; i++) {

      max_sec = date_to_mil(max_time);
      actual_time = new Date().toISOString().slice(0, 19);
      DBtime = users[i].start_date.replace(" ","T"); // Date already stored in ISO format
      seconds_since_start = (new Date(actual_time) - new Date(DBtime))/1000;

      // si es que la diferencia de tiempo supera la máxima cantidad de segundos entonces el participante es descartado y removido de los participantes asignados
      if (seconds_since_start > max_sec && users[i].status == "assigned") {

        // If the active user is the one that should be discarded...
        if (users[i].id_user == uid & debug_mode === true) console.warn("clean_mysql() wants to discard you");

        if (debug_mode === true) console.warn("clean_mysql() || DISCARD users.id_user: " + users[i].id_user + "(uid_external " + users[i].uid_external + ") [" + users[i].status + "] || actual_time: " + actual_time + " || DBtime: " + DBtime + " || " + seconds_since_start + " > " + max_sec);

        // UPDATE status: discarded  & protocol: counter -1
        XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "discarded"}});
        XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});

        // UPDATE assigned_task -1 for each between_selection condition
        XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [users[i].id_user]}).then(function(user_conditions) {
          for (var i = 0; i < user_conditions.length; i++) {
            XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
          }
        });

        if (debug_mode === true) console.warn('clean_mysql() || seconds_since_start > max_sec && users[i].status == "assigned" || UPDATE || status: discarded, counter - 1, for(assigned_task - 1) | users.id_user: ' + users[i].id_user + '(uid_external ' + users[i].uid_external + ')');

      }
    }
  }, function (error) {
    if (debug_mode === true) console.warn("User Table not found");
  });

}

// load_clean_mysql() ----------------------------------------------------------

// DB clean with clean_mysql() and block conditions with no slots available

function load_clean_mysql(iterations_for_review, max_participants) {

  if (debug_mode === true) console.warn("load_clean_mysql()");

  XMLcall("findAll", "experimental_condition").then(function(condition_data) {

    // DB clean with clean_mysql()
    XMLcall("findRow", "protocol", {keys: ["id_protocol"], values: [pid]}).then(function(actual_stats) {

      // REVIEW: IS this if needed? Can't we do actual_stats[0] below?
      if (Array.isArray(actual_stats)) {
        actual_stats = actual_stats[0];
      }
      // Calculates module between counter and iterations_for_review
      mod =  actual_stats.counter % iterations_for_review;
      if (mod == 0 && actual_stats.counter != 0) {
        clean_mysql();
      }
    }, function () {
      if (debug_mode === true) console.warn("protocol table not found")
    })

    // Update blocked conditions based on assigned_task >= max_participants
    for (var i = 0; i < condition_data.length; i++) {
      if (condition_data[i].assigned_task >= max_participants) {
        condition_data[i].blocked = true; // REVIEW: condition_data[i].blocked is 0/1
        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": true}});
        if (debug_mode === true) console.warn('load_clean_mysql() | UPDATE | for(blocked: true) | condition_data[i].assigned_task >= max_participants');
      } else {
        condition_data[i].blocked = false; // REVIEW: condition_data[i].blocked is 0/1
        XMLcall("updateTable", "experimental_condition", {id: {"id_condition": condition_data[i].id_condition}, data: {"blocked": false}});
        if (debug_mode === true) console.warn('load_clean_mysql() | UPDATE | for(blocked: false) | ELSE: condition_data[i].assigned_task >= max_participants');
      }
    }
    actual_condition_data = condition_data;
    if (typeof check !== 'undefined' && check !== null) {
      check.disabled = false;
    }
  }, function (error) {
    if (debug_mode === true) console.warn("Condition Table not found");
  });
}

// condition_selection() --------------------------------------------------------

// Get conditions for NEW participants or recover conditions from DB for OLD participants (Works as promise so it's synchronic)
// RETURNS true if there are slots available, false if not.

function condition_selection(between_selection_temp = {}) {

  if (debug_mode === true) console.warn("condition_selection()");

  return new Promise(
    function(resolve, reject) {

      XMLcall("findAll", "experimental_condition").then(function(condition_data) {


        // [[NEW PARTICIPANTS]] ----------------------------------------------
        // -------------------------------------------------------------------

        if (debug_mode === true) console.warn("condition_selection() || Object.keys(between_selection_temp).length: " + Object.keys(between_selection_temp).length);
        if (debug_mode === true) console.warn("between_selection_temp: '" + Object.keys(between_selection_temp) + "'");
        // FOR DEBUG:
        /*
        between_selection_temp = {"FONDECYT": ['Text']}
        XMLcall("findAll", "experimental_condition")
        condition_data = answer
        */

        // Does not have a between_selection value [NEW PARTICIPANT]
        if (Object.keys(between_selection_temp).length === 0) {

          condition_data_temp = [];
          ARRAY_between_temp = [];

          // Get array with unique between tasks (we need to select one condition for each one)
          unique_between_tasks = [...new Set(condition_data.map(item => item.task_name))];

          // REVIEW: With all_conditions = {}; it will never enter the for loop, and condition_selection() was not giving any response, freezing the protocol
          if (unique_between_tasks.length === 0) {

            if (debug_mode === true) console.error('condition_selection() | unique_between_tasks EMPTY | No between_tasks defined | continuing: we assume is a protocol without between conditions');
            resolve(true);

          } else {

            // For each of the between tasks (usually just one)
            for (var i = 0; i < unique_between_tasks.length; i++) {

              // Temporal array for the condition i
              ARRAY_between_temp[i] = condition_data.filter(function(value,index) { return value["task_name"] === unique_between_tasks[i]; });

              // Min number of participants assigned to a condition (assigned_task in array)
              min_assigned_temp = Math.min.apply(Math, ARRAY_between_temp[i].map(function(value,index) { return value["assigned_task"]; }));

              // Filter array so only the rows where assigned_task is <= min_assigned_temp AND < max_participants remain
              // If there are more than one condition with the same number of assigned participants, we get one of them randomly
              available_conditions_ARRAY = ARRAY_between_temp[i].filter(function(value,index) { return value["assigned_task"] <= min_assigned_temp &&  value["assigned_task"] < max_participants; });

              // Only randomize when there are available conditions, otherwise, sampleWithoutReplacement gives an error
              if (available_conditions_ARRAY.length > 0) {
                if (debug_mode === true) console.warn("condition_selection() | Choosing between the " + available_conditions_ARRAY.length + " conditions available.");
                randomly_selected_index = jsPsych.randomization.sampleWithoutReplacement(Array(available_conditions_ARRAY.length).fill().map((element, index) => index), 1);
                condition_data_temp = available_conditions_ARRAY[randomly_selected_index];

                if (debug_mode === true) {
                  // Create simple versions to print in console
                  SIMPLE_ARRAY = ARRAY_between_temp[0].map(function(item){return {"task_name": [item.task_name], "condition_name": [item.condition_name], "assigned_task": [item.assigned_task], "completed_protocol": [item.completed_protocol]};})
                  SIMPLE_ARRAY_CHR = JSON.stringify(flattenObject(SIMPLE_ARRAY)).replace(/","1\.|","2\./, ' \n ').replace(/0\.|\.0|1\.|\.1|2\.|\.2/g, '')
                  available_conditions_SIMPLE_ARRAY = available_conditions_ARRAY.map(function(item){return {"task_name": [item.task_name], "condition_name": [item.condition_name], "assigned_task": [item.assigned_task], "completed_protocol": [item.completed_protocol]};})
                  available_conditions_SIMPLE_ARRAY_CHR = JSON.stringify(flattenObject(available_conditions_SIMPLE_ARRAY)).replace(/","1\.|","2\./, ' \n ').replace(/0\.|\.0|1\.|\.1|2\.|\.2/g, '')

                  if (debug_mode === true) console.warn(new Date().toISOString().slice(0, 19) + " All conditions: \n " + SIMPLE_ARRAY_CHR);
                  if (debug_mode === true) console.warn(new Date().toISOString().slice(0, 19) + " Available conditions: \n " + available_conditions_SIMPLE_ARRAY_CHR);
                  if (debug_mode === true) console.warn("Selected condition: " + available_conditions_ARRAY[randomly_selected_index].condition_name);
                }

              } else {
                if (debug_mode === true) console.warn("condition_selection() | No available conditions");
              }

              // FINAL CHECKS FOR NEW PARTICIPANTS ------
              // No slots available
              if (condition_data_temp === undefined || condition_data_temp.length == 0) {
                experiment_blocked = true;
                condition_temp_array = [false]; // REVIEW: Needed here?
                if (debug_mode === true) console.warn('condition_selection() | Final check NEW | No slots available'); // Ends up in jsPsych.end
                text_input_uid.innerHTML = 'No hay cupos disponibles. <BR>Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>';
                resolve(false);

              // Slots available
              } else {
                // DEFINE VALUE OF between_selection{}
                between_selection[unique_between_tasks[i]] = [condition_data_temp["condition_name"]];
                experiment_blocked = false;
                condition_temp_array = [true]; // REVIEW: Needed here?
                if (debug_mode === true) console.warn('condition_selection() | Final check NEW | Available slots');
                resolve(true);
              }
            } // End of for

          }

        // [[DISCARDED PARTICIPANTS]] ----------------------------------------
        // -------------------------------------------------------------------

        } else {

          // THIS IS TO BE ABLE TO CHECK if the participant is out of time but already assigned (because no other participant accessed to trigger the clean up)
          XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {

            if (debug_mode === true) console.warn("condition_selection() | ELSE: Object.keys(between_selection_temp).length === 0");

            condition_temp_array = [];

            // For each between condition, CHECK if there are available conditions to re-assign the discarded participant
            Object.entries(between_selection_temp).forEach(([key, val]) => {

              if (debug_mode === true) console.warn("condition_selection() | forEach CHECK if there are available conditions to re-assign the discarded participant");

              // Filter those conditions where we have available slots. Create temporal list with true for available slots
              condition_temp_array.push(condition_data.filter(function(value,index) { return (key == value["task_name"] && val == value["condition_name"] && value["assigned_task"] < max_participants); }).length > 0);
            });

            // REVIEW: ALTERNATIVE to the forEach. Would NEED an if // Commented out. Gives ERROR:'between_selection_temp.map is not a function'
            // condition_temp_array = between_selection_temp.map(function (condition, index, array) { return (condition in between_selection_temp); });
            if (debug_mode === true) console.log(between_selection_temp);
            // ??? if (typeof between_selection_temp !== 'undefined')
            // ??? condition_temp_array = between_selection_temp[0].map(function (condition, index, array) { return (condition in between_selection_temp); });
            // if(Object.keys(between_selection_temp).length === 0)

            if (debug_mode === true) console.warn('condition_selection() | ELSE: if (available_conditions_ARRAY.length > 0) | actual_user.status === "assigned" | actual_user.status: ' + actual_user.status);

            // REVIEW: SPECIAL CASE WHERE A PARTICIPANT IS ASSIGNED, OVER MAX_TIME, BUT NO ONE ENTERED THE PROTOCOL, SO IT HAS NOT BEEN DISCARDED
              // WE NEED TO CHECK IF IS THE CASE, AND THEN DISCARD IT, COUNTER -1 ETC.
              // IN CONDITION_SELECTION() WE JUST GIVE BACK A TRUE / FALSE.
              // IN THE NEXT FUNCTION, WE RE-ASSIGN, COUNTER +1, ETC. SO IF WE DO NOT "DISCARD IT" HERE, assigned_task WILL HAVE ONE MORE
            if (actual_user.status === "assigned") {

              // DO THIS BECAUSE LATTER IT WILL BE NEADED
              // UPDATE status: discarded  & protocol: counter -1
              XMLcall("updateTable", "user", {id: {"id_user": users[i].id_user}, data: {"status": "discarded"}});
              XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});

              // UPDATE assigned_task -1 for each between_selection condition
              XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [users[i].id_user]}).then(function(user_conditions) {
                for (var i = 0; i < user_conditions.length; i++) {
                  XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
                  }
                  });
                // This is to trick the if (condition_data_temp === undefined || condition_data_temp.length == 0)
                condition_temp_array = [];
                condition_temp_array = [true];

            }


            // FINAL CHECKS FOR condition_selection() ------
            if (typeof condition_temp_array !== 'undefined' && condition_temp_array.includes(false)) {
              experiment_blocked = true;
              if (debug_mode === true) console.warn("condition_selection() | Final check DISCARDED | No available slots");
              resolve(false);
            } else {
              experiment_blocked = false;
              if (debug_mode === true) console.warn("condition_selection() | Final check DISCARDED |  Available slots. Participant can continue");
              resolve(true);
            }
            // ----------------------------------------------
          }); // actual_user
        }

      }, function() {
        if (debug_mode === true) console.warn("condition_selection() | Final check |  Error when loading conditions.");
        reject(false);
      });
    }
  );
}




// check_id_status() --------------------------------------------------------

// Used on index.html. Verify status of user id.
// If NEW participant: calls condition_selection() to check if there are available slots. If there are, calls script_loading()
// If OLD participant: recovers between_condition from DB and calls condition_selection(between_condition) to check if there are available slots for the between_condition of the participant.
function check_id_status(event) {

  if (debug_mode === true) console.warn("check_id_status()");

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


        // [[NEW PARTICIPANT]] (uid_external not in DB) -------------------------------
        // ---------------------------------------------------------------------

        if (Object.keys(actual_user).length === 0 && actual_user.constructor === Object) {

          if (debug_mode === true) console.warn("check_id_status() | NEW participant " + new Date().toISOString().slice(0, 19));

          uid = 0;
          text_input_uid.innerHTML = 'Nuevo participante. Iniciando experimento... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';

          // Assign a value to between_selection (if slots available)
          condition_selection().then(function(accepted) {
            // accepted == we have available slots
            if (accepted) {
              script_loading("tasks", all_tasks, completed_experiments, true); // LOAD all the tasks. This also loads the between participants conditions
              console.warn("NEW participant | available slots");
            } else {
              if (debug_mode === true) console.warn("check_id_status() | NEW participant | condition_selection returned false");
              console.warn("NEW participant | no available slots");
            }
          });


        // [[OLD PARTICIPANT]] (uid_external is in DB) --------------------------------
        // Can be assigned, discarded or completed
        // ---------------------------------------------------------------------

        } else {

          if (debug_mode === true) console.warn("check_id_status() | OLD participant");

          // Fetch internal DB uid
          uid = actual_user.id_user;

          // Make user_start_date a global variable so we can use it in continue_page_activation()
          globalThis.user_start_date = actual_user.start_date;


          // assigned OR discarded but recoverable (accept_discarded = true)
          if (actual_user.status == "assigned" || (actual_user.status == "discarded" && accept_discarded)) {

            // GET **between_selection** conditions for the particicipant from the DB (so she can continue where she left off)
            XMLcall("condition_selection", "", {id: {"id_user": uid}}).then(function (between_selection_temp){
              // between_selection_temp = [{"FONDECYT": ['Text']}]


              // RECOVER between_selection from the DB ----------------------------------------
              // ------------------------------------------------------------------------------
              // Right now:  between_selection = {} (comes from helper_functions.js)
              if(debug_mode === true) console.warn("check_id_status() || between_selection (showing only first): '" + Object.values(between_selection_temp[0])[0] + "'");

              // EXAMPLES of the variable structure
              /* // DEBUG, to get to present state (choose one of the following between_selection definitions)
              between_selection = {"FONDECYT": ['Text']}
              between_selection = {"FONDECYT": ['Text'], "TASK2": ['condition2']}
              between_selection_temp = [between_selection]
              between_selection = {}
              */

              // REVIEW: Does not work if more than one between. e.g.  {"FONDECYT": ['Text'], "TASK2": ['condition2']}
              // EXPLAIN goal of this loop
              for (var i = 0; i < between_selection_temp.length; i++) {
                let actual_task = Object.keys(between_selection_temp[i])[0];
                let actual_condition = Object.values(between_selection_temp[i])[0];

                // If the task exists in between_selection, add to array, else create array
                if (actual_task in between_selection) {
                  between_selection[actual_task].push(actual_condition);
                } else {
                  between_selection[actual_task] = [actual_condition];
                }
              }

              // console.log(between_selection);

              // ------------------------------------------------------------------------------
              // ------------------------------------------------------------------------------

              // Vars to CHECK if over time (seconds_since_start > max_sec)
              max_sec = date_to_mil(max_time);
              actual_time = new Date().toISOString().slice(0, 19);
              DBtime = actual_user.start_date.replace(" ","T"); // Date already stored in ISO format
              seconds_since_start = (new Date(actual_time) - new Date(DBtime))/1000;



              // [[ASSIGNED PARTICIPANT inside time limit]] ---------------------------

              if ((actual_user.status == "assigned" && seconds_since_start < max_sec)) {

                if (debug_mode === true) console.warn("check_id_status() | ASSIGNED participant & seconds_since_start < max_sec");
                user_assigned = true;
                text_input_uid.innerHTML = 'Participante encontrado. Cargando estado... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';


              // [[DISCARDED PARTICIPANT & accept_discarded || ASSIGNED out of time & accept_discarded]] ----------------------------------------------------------------

              } else if (actual_user.status == "discarded" && accept_discarded === true || (actual_user.status == "assigned" && seconds_since_start > max_sec & accept_discarded === true)) {
              // OLD: if (actual_user.status == "discarded" & accept_discarded === true || (seconds_since_start > max_sec && actual_user.status == "assigned" & accept_discarded === true)) {

                if (debug_mode === true) console.warn("check_id_status() || DISCARDED participant & accept_discarded OR ASSIGNED out of time & accept_discarded || actual_user.status: " + actual_user.status + " || out of time: " +  (seconds_since_start > max_sec));

                // CHECK if we have available slots for the participant's between_selection
                condition_selection(between_selection).then(function(accepted) {

                  if (debug_mode === true) console.warn("check_id_status() || Inside condition_selection(). accepted: " + accepted);

                  // If condition_selection() shows there is available slots, re-assign participant and reset start_date
                  if (accepted) {

                    if (debug_mode === true) console.warn("check_id_status() || OLD user || condition_selection() returned true");

                    // Reset starting date to NOW. Update global user_start_date so it can be shown in the screen
                    globalThis.user_start_date = actual_time;

                    // UPDATE status to assigned in table user, update start_date, update counter
                      // TODO: The user table updates should be a single call (?)
                    XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "assigned"}});
                    XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"start_date": actual_time}});
                    XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});

                    // UPDATE: assigned_task + 1 for each between_selection variable
                    for (var [key, value] of Object.entries(between_selection)) {
                      for (var i = 0; i < value.length; i++) {
                        XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [value[i]]}).then(function(actual_condition) {
                          XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                        });
                      }
                    }

                    if (debug_mode === true) console.warn('check_id_status() | UPDATE | status: assigned, start_date: actual_time, counter + 1, assigned_task + 1 | actual_user.status == "discarded" & accept_discarded === true || (seconds_since_start > max_sec && actual_user.status == "assigned" & accept_discarded === true) --> condition_selection(accepted)');
                    console.warn("OLD participant | available slots, re-assign");
                    text_input_uid.innerHTML = 'Tiempo excedido. Recuperando datos de participante... <BR><BR><img src="controllers/media/loading.gif" name="UAI" align="bottom" border="0"/>';

                    // LOAD all the tasks
                    script_loading("tasks", all_tasks, completed_experiments, true);
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
                text_input_uid.innerHTML = 'El participante ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>';

                // throw ERROR so don't get to the following script_loading()
                throw new Error('check_id_status() | IMPOSSIBLE CONDITION')
              }


              // IF REACHED HERE: GET TASKS LIST AND script_loading() ----------
              completed_experiments = [];

              // Single call to get the tasks names
              XMLcall(query = "general_query", table_name = "", elements = {sql: {"sql_call": "SELECT task.task_name FROM user LEFT JOIN user_task USING (id_user) LEFT JOIN task USING (id_task)"}, id: {"id_user": uid}}).then(function(tasks_list) {

               if (debug_mode === true) console.warn("check_id_status() [[ completed_experiments: " + completed_experiments.length + " || all_tasks: " + all_tasks.length + " ]]")
                completed_experiments =  answer.map(a => a.task_name); // Extract all elements of object answer to completed_experiments
                script_loading("tasks", all_tasks, completed_experiments);

              });
              // ---------------------------------------------------------------

            });

          // [[COMPLETED PARTICIPANT]] *************************************
          } else if (actual_user.status == "completed") {
            console.warn("OLD participant | already completed the protocol");
            //jsPsych.endExperiment("check_id_status() | completed");
            text_input_uid.innerHTML = 'El participante ya completó el protocolo. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>';

          // [[DISCARDED PARTICIPANT (!accept_discarded) ]] *****************
          } else  {
            console.warn("OLD participant | discarded (!accept_discarded)");
            //jsPsych.endExperiment("check_id_status() | else");
            text_input_uid.innerHTML = 'El participante ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>';
          }
        } // user in DB
      }, function (error) {
        console.warn("User search error");
      }); // uid_external in user table
      //}; completed_protocol_filtered.length == 0
    }); // Available slots XMLcall
     // online / offline
  } // valid uid
}



// completed_task_storage() --------------------------------------------------------

// Saves id_user/id_task to user_task
// If its the first task, assigns participant (status assigned, assigned_task +1, etc.)
// If the user is discarded:
  // - If we can recover it, re-assign
  // - If we can't recover it, discard (status discarded, assigned_task -1, etc.)

function completed_task_storage(csv, task) {

  if (debug_mode === true) console.warn("completed_task_storage()");

  if (task == all_tasks[all_tasks.length - 1]) {
    last_task = true;
  } else {
    last_task = false;
  }

  actual_time = new Date().toISOString().slice(0, 19);


  // [[NEW OR DISCARDED]] -------------------------------------------------------
      // User NOT assigned and experiment NOT blocked

  // user_assigned comes from check_id_status(). REVIEW: Should be passed through the function? Same with experiment_blocked
  if (!user_assigned && !experiment_blocked) {

    XMLcall("findRow", "user", {keys: ["uid_external"], values: [uid_external]}).then(function(actual_user) {

      // User already exists in the DB. There is a status in user table in DB for this uid_external
      if ("status" in actual_user) {


        // [[DISCARDED participant]] --------------------------------------------------
        // if !protocol_blocked && accept_discarded re-enrroll
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

              if (debug_mode === true) console.warn('completed_task_storage() | actual_user.status == "discarded" --> !protocol_blocked && accept_discarded');
              user_assigned = true;

              // Update global user_start_date so it can be shown un the screen
              globalThis.user_start_date = actual_time;

              // UPDATE start_date and status of participant in user table
                // TODO: The user table updates should be a single call (?)
              XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "assigned"}});
              XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"start_date": actual_time}});
              XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});

               // UPDATE: assigned_task + 1 for each between_selection variable
              for (var [key, value] of Object.entries(between_selection)) {
                for (var i = 0; i < value.length; i++) {
                  XMLcall("findRow", "experimental_condition", {keys: ["condition_name"], values: [value[i]]}).then(function(actual_condition) {
                    XMLcall("updateTable", "experimental_condition", {id: {"id_condition": actual_condition.id_condition}, data: {"assigned_task": "assigned_task + 1"}});
                  });
                }
              }
              if (debug_mode === true) console.warn('completed_task_storage() | UPDATE | status: assigned, start_date: actual_time, counter + 1, assigned_task + 1 | !user_assigned && !experiment_blocked --> actual_user.status == "discarded" --> !protocol_blocked && accept_discarded');

            } else {
              if (debug_mode === true) console.warn("Participante bloqueado por límite en condiciones" +  " #2");
              jsPsych.endExperiment('No hay cupos disponibles. <BR>Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>');
            }
          });
        }


      // [[NEW participant]] ----------------------------------------------------------
      // First task //
      // -----------------------------------------------------------------------

      // AFTER COMPLETING FIRST TASK (Should be Consent, although we are NOT enforcing it)
      // We know it's the first task because it's a NEW participant (NO "status" in actual_user))
      // For NEW participants HERE is when we get the between_selection slot in the DB (assigned_task + 1)

      } else {

        if (debug_mode === true) console.warn("completed_task_storage() || NEW user: first task");

        XMLcall("findAll", "experimental_condition").then(function(condition_data) {

         if (debug_mode == true) console.warn("completed_task_storage() || Object.keys(between_selection).length" + Object.keys(between_selection).length);

          // CHECK if there are available slots --------------------------------

            // Use condition_data to check if there are available slots for the condition selected in the BETWEEN task (e.g. between_selection["INFCONS"][0])

            // between_selection comes from:
            // When it's a new participant: between_selection{} is created in helper_functions -> In condition_selection() we select a condition and fill between_selection{}
            // When it's an OLD participant: check_id_status() -> 'condition_selection' call to DB (see mysql.php)


          // IN protocols WITHOUT between vars, we need the protocol_blocked = false by default, but it causes issues in protocols with between vars (corner cases)
          if (Object.keys(between_selection).length == 0) protocol_blocked = false;

          // For each of the between tasks (usually just one), assigned_task + 1
            // REVIEW: With multiple between conditions, there must be slots in all or none of the conditions, right?
          for (var i = 0; i < Object.keys(between_selection).length; i++) {

            if (debug_mode == true) console.warn("completed_task_storage() || LOOP between_selection");
            if (debug_mode == true) console.warn(between_selection);

            // CHECK if available slots
            completed_protocol_filtered = condition_data.filter(function(value,index) {return value["assigned_task"] < max_participants && value["condition_name"] === between_selection[Object.keys(between_selection)[i]][0]});

            // Available slots
            if (completed_protocol_filtered.length > 0) {

              selected_id_condition = completed_protocol_filtered[0].id_condition;

              // ADD TO experimental_condition / assigned_task
              XMLcall("updateTable", "experimental_condition", {id: {"id_condition": selected_id_condition}, data: {"assigned_task": "assigned_task + 1"}});
              if (debug_mode === true) console.warn('completed_task_storage() | UPDATE | for(assigned_task + 1) | !user_assigned && !experiment_blocked --> ELSE "status" in actual_user');
              protocol_blocked = false;

            // NO slots available
            } else {
              if (debug_mode === true) console.warn("completed_task_storage() | completed_protocol_filtered.length > 0 | NO available slots loop");
              // alert("NO hay cupos disponibles");
              protocol_blocked = true;
              if (debug_mode === true) console.warn('condition_selection() || Participante bloqueado por límite en condiciones' +  ' #3'); // Ends up in jsPsych.end
              jsPsych.endExperiment('No hay cupos disponibles. <BR>Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>');
            }

          }

          // AVAILABLE SLOTS --------------------------------------------------------------------
            // INSERTS the participant in all the relevant tables
          // ------------------------------------------------------------------------------------

          if (!protocol_blocked) { // Comes from for loop above

            user_assigned = true;
            added_task = completed_protocol_filtered[0]["task_name"];
            if (debug_mode === true) console.warn("completed_task_storage() || NEW user, first task | User assigned | task: " + added_task);

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


            // UPDATE: counter + 1 in protocol
            XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter + 1"}});
            if (debug_mode === true) console.warn('completed_task_storage() | INSERT | table user, table user_task, table user_condition, counter + 1 | !user_assigned && !experiment_blocked --> ELSE "status" in actual_user --> !protocol_blocked');

            // -------------------------------------------------------------------------------------


          // NO SLOTS AVAILABLE ------------------------------------------------
          } else {
            if (debug_mode === true) console.warn("Participante bloqueado por límite en condiciones" +  " #4");
            jsPsych.endExperiment('No hay cupos disponibles. <BR>Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>');
            //alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
          }
        });
      }
    }, function(user_not_found) {
      if (debug_mode === true) console.warn("error en base de datos (busqueda de user)");
    });


  // [[OLD participant]] ---------------------------------------------------------
  // Second to last tasks : user_assigned && !experiment_blocked//
  // -----------------------------------------------------------------------------------

  // experiment NOT blocked
  } else if (user_assigned && !experiment_blocked) {

    if (debug_mode === true) console.warn("completed_task_storage() || asigned: second task and forward");

    XMLcall("findRow", "user", {keys: ["id_user"], values: [uid]}).then(function(actual_user) {

      // PARTICIPANT exists in user table in DB
      if ("status" in actual_user) {

        // [[ASSIGNED ]] -------------------------------------------------------------------------
        if (actual_user.status == "assigned") {

          // IF we do not accept_discarded, CHECK if user is over time and CLEAN UP. If accept_discarded = true we do not care if time is over
          if (!accept_discarded) {

            max_sec = date_to_mil(max_time);
            actual_time = new Date().toISOString().slice(0, 19);
            DBtime = actual_user.start_date.replace(" ","T");
            seconds_since_start = (new Date(actual_time) - new Date(DBtime))/1000;

            hours_until_discarded = Math.round(((max_sec - seconds_since_start)/3600  + Number.EPSILON) * 100) / 100;
            minutes_until_discarded = Math.round(((max_sec - seconds_since_start)/60  + Number.EPSILON) * 100) / 100;


            // [[ASSIGNED & out of time & !accept_discarded]] ------------------------------------
            // discard (status discarded, assigned_task -1, etc.)
            // -----------------------------------------------------------------------------------

            if (seconds_since_start > max_sec) {

              // UPDATE status: discarded  & protocol: counter -1
              XMLcall("updateTable", "user", {id: {"id_user": uid}, data: {"status": "discarded"}});
              XMLcall("updateTable", "protocol", {id: {"id_protocol": pid}, data: {"counter": "counter - 1"}});

              // UPDATE assigned_task -1 for each between_selection condition
              XMLcall("findAll", "user_condition", {keys: ["id_user"], values: [uid]}).then(function(user_conditions) {
                if (debug_mode === true) console.log(user_conditions);
                for (var i = 0; i < user_conditions.length; i++) {
                  if (debug_mode === true) console.warn("completed_task_storage() || DISCARD PARTICIPANT || updateTable: experimental_condition || assigned_task: assigned_task - 1" + new Date().toISOString().slice(0, 19));
                  XMLcall("updateTable", "experimental_condition", {id: {"id_condition": user_conditions[i].id_condition}, data: {"assigned_task": "assigned_task - 1"}});
                }
              });

              if (debug_mode === true) console.warn('completed_task_storage() | UPDATE | status: discarded, counter - 1, for(assigned_task - 1) | actual_user.status == "assigned" --> !accept_discarded --> seconds_since_start > max_sec');
              if (debug_mode === true) console.warn("completed_task_storage() | OUT OF TIME | actual_time: " + actual_time + " | DBtime" + DBtime + " | Started " + seconds_since_start + " seconds ago | Time ends in " + hours_until_discarded + " hours [" + minutes_until_discarded + " minutes]");

              jsPsych.endExperiment('El participante ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>');
            }

          } else {
            if (debug_mode === true) console.warn("completed_task_storage() | assigned & accept_discarded | continue");
          }

        // PARTICIPANT status is NOT 'assigned' (e.g. discarded)
        } else {

          // If it is not in the last_task we finish the experiment (out of time). If in the last task we allow the participant to finish
          if (!last_task) {
            if (debug_mode === true) console.warn("completed_task_storage() | User discarded: actual_user.status != assigned --> !last_task | jsPsych.endExperiment()");
            jsPsych.endExperiment('El participante ha sido descartado porque se ha superado el tiempo límite para completar el protocolo. Si tiene dudas puede comunicarse con el contacto que aparece en la página principal. <BR><BR><img src="controllers/media/logo-CSCN.png" name="CSCN" align="bottom" border="0"/>');
          } else {
            if (debug_mode === true) console.warn("completed_task_storage() | User discarded: actual_user.status != assigned --> last_task | continue");
          }

        }


        // FINAL CHECK: If reaches here, insert the id of the task completed in user_task ------------------------
          // Either assigned participant of completed (in last task (?))

        if (actual_user.status == "assigned" || actual_user.status == "completed") {
          XMLcall("findRow", "task", {keys: ["task_name"], values: [task]}).then(function(actual_task) {
            XMLcall("insertIntoTable", "user_task", {dict: { id_protocol: pid, id_task: actual_task.id_task, id_user: uid}});
          });
          if (debug_mode === true) console.warn('completed_task_storage() | insertIntoTable id_user-id_task | actual_user.status == "assigned" || actual_user.status == "completed" |');
        }
        // --------------------------------------------------------------------------------------------------------


      // PARTICIPANT NOT in user table in DB
      } else {
        alert("Participante no encontrado");
        if (debug_mode === true) console.warn("completed_task_storage() | Participant not found");
      }
    }, function(user_not_found) {
      if (debug_mode === true) console.warn("completed_task_storage() | Error in DB (searching user)");

    });
  }
}

// IF here, we are online
start_mysqldb(pid, max_participants); // SHOULD be launched only if pid is not in DB
load_clean_mysql(iterations_for_review, max_participants);
