function createMysqlTable (table_name, pid, rows) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  }
  // el false es para que funcione de manera sincrónica
  xhr.open('POST', 'controllers/php/mysql.php');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify({"query": "createTable", "table_name": table_name, "pid": pid, "rows": rows}));
  console.log(table_name)
}

function updateMysqlTable (table_name, pid, id, data) {

  id = JSON.stringify(id).replaceAll('":','=').replaceAll(/"|\{|\}/g,'');

  data = JSON.stringify(data).replaceAll('":','=').replaceAll(/"|\{|\}/g,'');

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  }
  // el false es para que funcione de manera sincrónica
  xhr.open('POST', 'controllers/php/mysql.php');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify({"query": "updateTable", "table_name": table_name, "pid": pid, "id": id, "data": data}));
}

function insertIntoMysqlTable (table_name, pid, dict) {

  rows = Object.keys(dict).join();
  values = Object.values(dict).join();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  }
  // el false es para que funcione de manera sincrónica
  xhr.open('POST', 'controllers/php/mysql.php');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify({"query": "insertIntoTable", "table_name": table_name, "pid": pid, "rows": rows, "values": values}));
}
