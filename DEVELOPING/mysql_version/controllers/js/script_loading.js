// carga de todos los scripts de un array de una carpeta específica
function script_loading(folder, array, completed_experiments = [], new_element = false, index = 0) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = false;

  if (folder != "")
    script.src = folder + "/"
  script.src += array[index] + ".js";

	document.getElementsByTagName("head")[0].appendChild(script);

	if (index < array.length - 1) {
		script.onload = script_loading(folder, array, completed_experiments, new_element, index + 1);
	} else if (index == array.length - 1 && folder == "tasks") {
		script.onload = function () {
			if (experiment_blocked)
				alert("Se ha alcanzado el número máximo de participantes para este protocolo.\nPor favor, espere a que se liberen más cupos.");
			else {
				questions = obtain_experiments(questions, completed_experiments);
				continue_page_activation(completed_experiments, questions);
			}
		}
	}
}
