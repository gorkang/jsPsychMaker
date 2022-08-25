# library(tidyverse)
# source("../jsPsychHelpeR/R/helper_functions.R")
# 
# cat(crayon::silver("CHECKING trialids for canonical_protocol/\n"))
# check_trialids(local_folder_protocol = "canonical_protocol/")



# check_trialids(local_folder_protocol = "/home/emrys/gorkang@gmail.com/RESEARCH/PROYECTOS/2021-Creencias-COVID-Brenda/protocolo_final/8/")

# TODO: check that all trials have a 'data: {trialid: 'Instructions', procedure: 'BNT'},' below the type: 'instructions', or timeline: ...





# CHECK TRIALIDs ----------------------------------------------------------

# source("../jsPsychHelpeR/R/helper_functions.R")  
# ALL_PROTOCOLS = basename(list.dirs("../CSCN-server/protocols/", recursive = FALSE))
# TEST_PROTOCOLS = basename(list.dirs("../CSCN-server/protocols/test/", recursive = FALSE))
# 
# 
# OUTPUT_ALL = 1:length(ALL_PROTOCOLS) %>% 
#   map(~  check_trialids(local_folder_protocol = paste0("../CSCN-server/protocols/", ALL_PROTOCOLS[.x], "/")))
# 
# OUTPUT_TEST = 1:length(TEST_PROTOCOLS) %>% 
#   map(~  check_trialids(local_folder_protocol = paste0("../CSCN-server/protocols/test/", TEST_PROTOCOLS[.x], "/")))
