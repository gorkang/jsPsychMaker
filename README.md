# jsPsychMaker

<!-- badges: start -->
[![Lifecycle: experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
[![Codecov test coverage](https://codecov.io/gh/gorkang/jsPsychMaker/branch/main/graph/badge.svg)](https://app.codecov.io/gh/gorkang/jsPsychMaker?branch=main)
<!-- badges: end -->


An set of tools to help create experimental protocols with  [jsPsych](https://www.jspsych.org/). It allows you to randomize participants between conditions, keeping the groups balanced, in online and offline protocols, etc.

For details about the available [tasks](https://github.com/gorkang/jsPsychMaker/tree/main/canonical_protocol/tasks), you can check the [Tareas jsPsychR googledoc](https://docs.google.com/spreadsheets/d/1Eo0F4GcmqWZ1cghTpQlA4aHsc8kTABss-HAeimE2IqA/edit#gid=0) (SPANISH!), or the [jsPsychR-manual](https://gorkang.github.io/jsPsychR-manual/jsPsychMaker.html#available-tasks).

## Installing

Install jsPsychMaker with: `remotes::install_github("gorkang/jsPsychMaker")`



## Creating a protocol from existing tasks

To create a full protocol using already existing tasks:  

1) List available tasks: `jsPsychMaker::list_available_tasks()`

2) Create protocol:  

```
jsPsychMaker::create_protocol(canonical_tasks = c("AIM", "EAR", "IRI"),
                              folder_output = "~/Downloads/TEST/new_protocol", 
                              launch_browser = TRUE)
```

 
Check if there are new tasks available in a new version of the Github package: 
 
`jsPsychMaker::check_NEW_tasks_Github()`



## Creating a protocol with new tasks

You can create a protocol with new tasks using csv or excel files:  

1) Copy example tasks to local folder: `jsPsychMaker::copy_example_tasks(destination_folder = "~/Downloads/TEST")`  
  
2) Create protocol
  
```
jsPsychMaker::create_protocol(folder_tasks = "~/Downloads/TEST/"
                              folder_output = "~/Downloads/TEST/new_protocol", 
                              launch_browser = TRUE)
```

See the [jsPsychR manual](https://gorkang.github.io/jsPsychR-manual/qmd/07-NEWtasks.html), and "~/Downloads/TEST" for examples of how to create new tasks.



## Adapting protocols

After creating a protocol, you can edit the `config.js` file to tweak the configuration. There is a [Shiny app to help you create the protocol configuration, and the consent form](https://gorkang.shinyapps.io/jsPsychMaker_config/).  


## Data preparation

Each of the tasks should have a sister script in [jsPsychHelpeR](https://github.com/gorkang/jsPsychHelpeR) to automatize the data preparation. With [jsPsychHelpeR](https://github.com/gorkang/jsPsychHelpeR), using a simple function `run_initial_setup()` you can setup a full project to automatically run the full data preparation pipeline for a jsPsychMaker protocol.  


## HELP with new tasks

If you need help creating a new task, [create a new  issue](https://github.com/gorkang/jsPsychMaker/issues/new?assignees=HeRm4nV&labels=NEW+TASK&template=new-task.md&title=New+task%3A+%5BNAME+OF+THE+TASK%5D) and fill the details of the task in the [NEW jsPsychR tasks document](https://docs.google.com/spreadsheets/d/1LAsyTZ2ZRP_xLiUBkqmawwnKWgy8OCwq4mmWrrc_rpQ/edit#gid=0).  


## More information

Check the [jsPsychR-manual](https://gorkang.github.io/jsPsychR-manual/jsPsychMaker.html).  
