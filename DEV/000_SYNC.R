# Load all R/ functions
invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))

# UPLOAD canonical_protocol_DEV to  http://cscn.uai.cl/lab/public/instruments/protocols/test/canonical_protocol_DEV/
  # sync_server_local(direction = "local_to_server", server_folder = "test/canonical_protocol_DEV/", local_folder = "canonical_protocol_DEV/")
  # sync_server_local(server_folder = "test/tasks_DEV/", local_folder = "tasks_DEV/", direction = "local_to_server")
  # sync_server_local(server_folder = "test/10/", local_folder = "10/", direction = "local_to_server")

sync_server_local(direction = "local_to_server", local_folder = "canonical_protocol_DEV/", server_folder = "999", only_test = FALSE)


# sync_server_local(direction = "local_to_server", local_folder = "DEV_protocols/10/", server_folder = "10", only_test = FALSE)
# sync_server_local(direction = "local_to_server", local_folder = "DEV_protocols/12/", server_folder = "12", only_test = FALSE)

# sync_server_local(direction = "local_to_server", local_folder = "DEV_protocols/10/", server_folder = "10")


-Preparar lineas para sincronizar SOLO maquinaria a otros protocolos


# DELETE DATA FILES
  # list_credentials = source(".vault/.credentials") # Get server credentials
  # system(paste0('sshpass -p ', list_credentials$value$password, ' ssh ', list_credentials$value$user, '@', list_credentials$value$IP, ' rm ', list_credentials$value$main_FOLDER, 'test/tasks_DEV', '/.data/*'))




# 1) canonical_protocol_DEV: SERVER -->> LOCAL
# DOWNLOAD  http://cscn.uai.cl/lab/public/instruments/protocols/test/canonical_protocol_DEV/ TO canonical_protocol_DEV 
  sync_server_local(direction = "server_to_local", server_folder = "test/canonical_protocol_DEV/", local_folder = "canonical_protocol_DEV/")
  sync_server_local(direction = "local_to_server", local_folder = "canonical_protocol_DEV/", server_folder = "999")


# 2) canonical_protocol_DEV: SERVER -->> LOCAL
# DOWNLOAD  http://cscn.uai.cl/lab/public/instruments/protocols/test/tasks_DEV/ TO tasks_DEV 
  sync_server_local(server_folder = "test/canonical_protocol_DEV/", local_folder = "tasks_DEV/", direction = "server_to_local")



# -Sincronizaremos canonical_protocol_DEV ->> tasks_DEV solo la maquinaria con rsync
# -Sincronizaremos tasks_DEV ->> canonical_protocol_DEV solo la tarea FONDECYT con rsync