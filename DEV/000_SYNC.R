
# Load all R/ functions
invisible(lapply(list.files("./R", full.names = TRUE, pattern = ".R$"), source))

# 1) DOWNLOAD  http://cscn.uai.cl/lab/public/instruments/protocols/test/FONDECYT2021/ TO canonical_protocol_DEV 

sync_server_local(server_folder = "test/FONDECYT2021/", local_folder = "canonical_protocol_DEV/", direction = "server_to_local")
