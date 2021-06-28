// funcion usada para almacenar la data, se usa en el call-function (último item) de cada task
function saveData(data, online, name, version = 'original', first_experiment, last_experiment) {
  // almacenamiento de la data en el caché del sistema
  completed_task_storage(jsPsych.data.get().filter({procedure: name}).csv(), name, first_experiment, last_experiment);

  if (online) {
    var xhr = new XMLHttpRequest();
    // el false es para que funcione de manera sincrónica
    xhr.open('POST', 'controllers/php/write_data.php', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({short_name: name, filedata: data, user_id: uid_external, project_code: pid, version: version}));
  } else {

    // obtención de data
    data = jsPsych.data.get().filter({procedure: name}).csv();
    // creación de uri y objetos html
    var encodedUri = encodeURI("data:text/csv;charset=utf-8," + data);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);

    // obtención de fecha, el slice es para asegurarnos que hayan 2 dígitos en cada elemento
    var currentdate = new Date();
    actual_time = currentdate.getFullYear() + "-"
                + ("0" + currentdate.getMonth()+1).slice(-2)  + "-"
                + ("0" + currentdate.getDate()).slice(-2) + "T"
                + ("0" + currentdate.getHours()).slice(-2)
                + ("0" + currentdate.getMinutes()).slice(-2)
                + ("0" + currentdate.getSeconds()).slice(-2);

    if (uid_external != -1)
      csv_name = pid + "_" + name + "_" + version + "_" + actual_time + "_" + uid_external + ".csv";
    else
      csv_name = pid + "_" + name + "_" + version + "_" + actual_time + "_" + uid + ".csv";

    link.setAttribute("download", csv_name);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  }
}
