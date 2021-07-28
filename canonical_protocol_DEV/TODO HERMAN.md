

## TODO

Revisar que media preloading esta funcionando:

- He movido todo a media/



Revisar que he sacado todos los elementos de configuracion a `config.js`

- He hecho un intento que parece funcionar bien



Revisar que `obtain_experiments()` funciona correctamente (parece que si):

- He cambiado if (acceptedValues.includes(questions[e] ["procedure"])) por if (acceptedValues.includes(questions[e]**.data**["procedure"]))
  - Ya NO es necesario el procedure extra.
  - Una **ventaja** MUY importante es que si no se incluye la linea `data: {trialid: 'BLA', procedure: 'BLA'},` en las preguntas, DA UN ERROR!
  - Esto hace imposible correr un protocolo y perder pantallas sin darse cuenta.
  - La unica "desventaja" que veo es que hay que poner `data: {trialid: 'BLA', procedure: 'BLA'}` en las `call-functions`, `timelines` y `fullscreen`.



Revisar `mysql_controller.js`, `protocol_controller.js`, etc.

- Reducir codigo duplicado

- Optimizar y simplificar todo lo que se pueda (for por map o filter, limpiar basurilla antigua, etc.)

- **Comentar bien** el codigo (puedes hacerlo en español, yo despues lo traduzco)

- `protocol_blocked` y `experiment_blocked` hacen lo mismo?

- `blocked` se usa?

- `accepted discarded` esta funcionando bien?



Adaptar los cambios hechos a mysql a indexedDB



Tener un index.html funcionando con id asignado aleatoriamente y otro con id introducido a mano.



Asignacion participantes a between conditions:

- Algoritmo deberia asignar siempre a la condicion con menos participantes. Si hay varios con menos participantes, a la [0].
- Si no hay limite en condiciones, max_participants = Inf



Sistema para definir orden de tareas deberia permitir aleatorizar varios grupos de tareas...



La funcion `block_fkeys` que esta en todas las tareas, se podria poner en protocol_controller para que queden mas limpitas las tareas?



Crear funciones para CHECKEAR todos los nombres de trialid, de tarea, etc.


### TODO otros

completed_protocol_filtered = condition_data.filter(function(value,index) {return value["assigned_task"] < max_participants && value["condition_name"] === between_selection["INFCONS"][0] });

- between_selection["INFCONS"][0] } tiene que ser mas general cuando tengamos mas de una between



HORA CSV ahora es UTC. Tal vez deberia ser la hora local



LOCK TABLE con alias para ver si mejoran las cosas



Almacenar fechas en mysql con milisegundos

Podemos crear un proceso de revision en consent +1 o similar donde
