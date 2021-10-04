---
title: "README developing jsPsychMaker"
# author: "Gorka Navarrete"
# date: "10/4/2021"
output: html_document
---

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
  
  
  
