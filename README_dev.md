## TODO

**Al empezar protocolo canonical la pantalla estaba en blanco MUCHO tiempo (3 a 6 segundos!)`**

- He puesto un mensaje en <span id="text_input_uid"> para que se vea mientras se cargan las cosas.


### FONDECYT

- trialid FONDECYT_01_0 y FONDECYT_07_0 se repiten 2 veces cada uno. DEBERIAN SER FONDECYT_01_1, FONDECYT_01_2, FONDECYT_07_1 Y FONDECYT_07_2

- condition_within TIENE QUE SER LA COMBINACION DE LAS DOS VARIABLES WITHIN: e.g. lowQuality_Cancer, etc.
  + Lo he "ARREGLADO" con:
      + `condition_within: Object.entries(data_test_quality)[num_item][0]`
      + Hay una manera mas canonica?



### Optimizaciones

- MySQL: Comprobar que DB NO existe antes de lanzar start_mysqldb(). 
  - start_mysqldb(): ~9 transacciones de creacion de tabla + 1 * cada prueba que existe.
  - En protocolo completo se ahorran ~3 segundos si no corre start_mysqldb()
  
- MySQL: Insert multiple rows in one go: https://stackoverflow.com/a/6889087/1873521 https://www.mysqltutorial.org/mysql-insert-multiple-rows/
  - Para las experimental_condition : ahorramos conditions - 1
  - Para las task: ahorramos pruebas en protocolo - 1
  
- MySQL: Querys repetidas?
  - 3 veces: query: "findAll" table_name: "experimental_condition" (???)
  
- Scripts: 
  - Solo cargar los necesarios (e.g. indexedDB o MySQL)
    - SEPARAR completamente indexedDB y MySQL ?Ahora en protocol_controller.js estan juntos
    - Cargamos 1 archivo menos, y es mas pequeño
  - Usar solo los plugins de tareas, etc.
  - JUNTAR todas las funciones genericas en un helper_functions.js (?)
    - css_loading.js
    - save_data.js
    - script_loading.js
    - ...
    
- Cargar plugins una vez esta ya cargado el index
- Imagenes tinyficadas: https://tinypng.com/



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

