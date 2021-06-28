library(dplyr)
library(readr)

DF = read_csv("canonical_protocol/canonical_protocol_details.csv")

tasks = list.files("canonical_protocol/tasks/") %>% gsub("\\.js", "", .) %>% 
  as_tibble() %>% rename(short_name = value)
  

All_tasks = 
  tasks %>% 
  left_join(DF)

missing_tasks = 
  All_tasks %>% 
  filter(is.na(long_name))

tasks_missing_info = 
  All_tasks %>% 
  filter(is.na(validation_paper))


write_csv(tasks_missing_info, "canonical_protocol/tasks_missing_info.csv")
