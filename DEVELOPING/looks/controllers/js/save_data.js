// funcion usada para almacenar la data, se usa en el call-function (último item) de cada task
function saveData(data, online, name, version = 'original') {

  // almacenamiento de la data en el caché del sistema
  local_storage_save(jsPsych.data.get().filter({procedure: name}).csv(), name);

  if (online) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'controllers/php/write_data.php', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({short_name: name, filedata: data, user_id: uid, project_code: pid, version: version}));
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

    csv_name = pid + "_" + name + "_" + version + "_" + actual_time + "_" + uid + ".csv";

    link.setAttribute("download", csv_name);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".

    /* obtención de data vía ajax usado antiguamente
    $.ajax({
      type: "POST",
      url: '/save',
      data: {
        "data": data
      },
      success: function() {
        document.location = "/next"
      },
      dataType: "application/json",

      // Endpoint not running, local save
      error: function(err) {
        if (err.status == 200) {
          document.location = "/next";
        } else {
          // If error, assue local save
          if (window.self !== window.top) {
            parent.postMessage({
              csv: jsPsych.data.get().filter({procedure: name}).csv(),
              name: name.concat("", '_results')
            }, '*');
          } else {
            jsPsych.data.get().filter({procedure: name}).localSave('csv', name.concat("", '_results.csv'));
          }
        }
      }
    }) */
  }
}
