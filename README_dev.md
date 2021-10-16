# TODO 

- Para que se usa database.php???

- Añadir mensajes informativos mientras esta cargando a IndexedDB controller??? (`text_input_uid.innerHTML`)
  + Tal vez no es necesario pq IndexedDB es muy rapido?



### CATCH ERRORS AND GIVE INFORMATIVE MESSAGES

- Error cuando algun item no tiene procedure en data. Test para buscarlo y avisar de donde esta el problema!!!!
```
Uncaught TypeError: Cannot read properties of undefined (reading 'procedure')
    at helper_functions.js:253
    at Array.reduce (<anonymous>)
    at obtain_experiments (helper_functions.js:252)
    at HTMLScriptElement.script.onload (helper_functions.js:174)
```    

- Error when an element of tasks (in config.js) does not exist
`Failed to load resource: the server responded with a status of 404 (Not Found) undefined.js:1 `

- Si es la primera vez que se accede a un protocolo (No existe en MySQL) y "all_conditions = {};" (No hay ninguna condicion between), da un error sobre que condition_temp_array no esta definido en mysql_controller.js

- Separar img usadas en canonical de las de las tareas. Meter loading.gif, chrome y logo uai... en controllers/media???



## REMEMBER

- condition_within y condition_between tienen que estar en `camelCase`: 

  + `condition1`
  + `condition1_condition2`
  + `complexCondition1_complexCondition2`

- ||REVISAR|| condition_within deberia ser parte del trialid? Por ejemplo, FONDECYT_01_complexCondition1_complexCondition2, o FONDECYT_01_1_complexCondition1_complexCondition2 (???)
  + Si es asi, deberiamos revisar todas las tareas que tienen algun componente within para que funcionen de manera consistente: 
    + FONDECYT
    + INFCONS
    + HRPVB
    + ...
    
En tareas como HRPVB probablemente haya que usar un diccionario. No se como es la sintaxis exactamente, pero necesitamos un shortName para cada item, que se insertaria en el trialid:

```
var tipo_problema_BB = [problemasRespiratorios: 'Problemas respiratorios del recién nacido',
                        lesionCerebro: 'Lesión en el cerebro del bebe por falta de oxígeno',
                        hospitalizacion: 'Hospitalización en cuidados intensivos neonatales',
                        lactancia: 'Dificultades para inicio temprano de lactancia materna']
```


## HECHO

**Al empezar protocolo canonical la pantalla estaba en blanco MUCHO tiempo (3 a 6 segundos!)`**

- He puesto mensajes en <span id="text_input_uid"> para informar a los participantes mientras se cargan las cosas.

- Solo se carga el script necesario (indexedDB o MySQL)
    - SEPARADO completamente indexedDB y MySQL. 
      + Mas facil debugear
      + protocol_controller.js queda vacio
      + Cargamos 1 archivo menos, y es mas pequeño
    - El sistema usado probablemente no sea el mejor. 
      + No aparece mensaje en consola ni alerta cuando el uid ya existe.
  
- JUNTADAS todas las funciones genericas en un helper_functions.js
  - css_loading.js
  - save_data.js
  - script_loading.js
  - algunas cosas de protocol_controller.js
  - ...

- .secrets_mysql.php:
  + PHP lee la URL y cambia el path a .secrets_mysql.php si estamos en protocols/tests/ o protocols/

- Si hay un mismo numero de assigned, se selecciona una al azar, no la primera

## TODO

### FONDECYT

- trialid FONDECYT_01_0 y FONDECYT_07_0 se repiten 2 veces cada uno. DEBERIAN SER FONDECYT_01_1, FONDECYT_01_2, FONDECYT_07_1 Y FONDECYT_07_2

- condition_within TIENE QUE SER LA COMBINACION DE LAS DOS VARIABLES WITHIN: e.g. lowQuality_Cancer, etc.
  + Lo he "ARREGLADO" con:
      + `condition_within: Object.entries(data_test_quality)[num_item][0]`
      + Hay una manera mas canonica?



### Optimizaciones

- MySQL: Comprobar que DB NO existe antes de lanzar start_mysqldb() (penULTIMA linea de mysql_controller.js)
  - start_mysqldb(): ~9 transacciones de creacion de tabla + 1 * cada prueba que existe.
  - En protocolo completo se ahorran ~3 segundos si no corre start_mysqldb()
  
- MySQL: Se pueden insertar TODAS las tasks o experimental_condition en una sola llamada. 
  - Insert multiple rows in one go: https://stackoverflow.com/a/6889087/1873521 https://www.mysqltutorial.org/mysql-insert-multiple-rows/
  - Para las experimental_condition : ahorramos conditions - 1
  - Para las task: ahorramos pruebas en protocolo - 1
  



- Scripts: 
  + Usar solo los plugins de tareas del protoclo, etc.
    
- Imagenes tinyficadas: 
  + https://tinypng.com/
  + REVISAR que no se pierde calidad



Estandarizar: 

- TODAS las pruebas tienen al principio: questions.push( check_fullscreen("NOMBRE_PRUEBA") );
- if_questions. Ser **consistentes** en como se nombran. Ver PVC: PVC_001 es pregunta llave. PVC_001_1 es la if




### REMEMBER

- ASSIGN PARTICIPANTS se hace al acabar la primera tarea
  - Esta deberia ser Consent siempre? 
    - La parte buena, es que no asignamos participantes hasta que aceptan participar.
  - Hay una mejor manera?



## Directorios y Workflow


---

- `canonical_protocol`: version **en produccion** de la *maquinaria y tareas*.

  + Todas las tareas en `canonical_protocol` tienen que funcionar y ser probadas con el `jsPsychHelper`  

  + SIEMPRE que se crea un nuevo protocolo, se saca de aqui la maquinaria y tareas

  + La carpeta tiene que estar sincronizada con: http://cscn.uai.cl/lab/public/instruments/protocols/999/  


---

- `canonical_protocol_DEV`: version **en desarrollo** de la *maquinaria*.

  + En `canonical_protocol_DEV` hacemos mejoras en maquinaria

  + Cuando una nueva version esta lista, se pone a prueba con `jsPsychHelper`. Si todo funciona OK:

    + Se cambia la version en DESCRIPTION y NEWS.md

    + Se pasa a `canonical_protocol` y a `tasks_DEV`

  + La carpeta tiene que estar sincronizada con: http://cscn.uai.cl/lab/public/instruments/protocols/test/canonical_protocol_DEV/  


---

- `tasks_DEV`: **desarrollo** de nuevas *tareas*

  + En `tasks_DEV` la maquinaria es IDENTICA a `canonical_protocol`

  + Aqui se desarrollan nuevas tareas

  + Cuando una nueva tarea esta lista, se crea su script de correccion en `jsPsychHelper` y se pasa a `canonical_protocol`

  + La carpeta tiene que estar sincronizada con: http://cscn.uai.cl/lab/public/instruments/protocols/test/tasks_DEV/  



## CHECKS

- Nombres de tarea

- Nombres de trialid 

