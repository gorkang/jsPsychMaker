source("R/helper_functions.R")

cat(crayon::silver("CHECKING trialids for canonical_protocol/\n"))
check_trialids(local_folder_protocol = "canonical_protocol/")
# check_trialids(local_folder_protocol = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS/2021-Creencias-COVID-Brenda/protocolo_final/8/")

# TODO: check that all trials have a 'data: {trialid: 'Instructions', procedure: 'BNT'},' below the type: 'instructions', or timeline: ...

