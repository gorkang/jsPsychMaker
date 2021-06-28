// carga de todos los scripts de un array de una carpeta específica
function script_loading(folder, array, index = 0) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.async = false;

  if (folder != "")
    script.src = folder + "/"
  script.src += array[index] + ".js";

	document.getElementsByTagName("head")[0].appendChild(script);

  if (index++ < array.length - 1) {
    script_loading(folder, array, index)
  }
}
