# jsPsychMaker

<!-- badges: start -->
[![Lifecycle: experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
<!-- badges: end -->


A set of tools to help create experiments with [jsPsych](https://www.jspsych.org/), randomize participants, etc.

For details about the available [tasks](https://github.com/gorkang/jsPsychMaker/tree/main/canonical_protocol/tasks), you can check the [Tareas jsPsychR googledoc](https://docs.google.com/spreadsheets/d/1Eo0F4GcmqWZ1cghTpQlA4aHsc8kTABss-HAeimE2IqA/edit#gid=0) (SPANISH!), or the [jsPsychR-manual](https://gorkang.github.io/jsPsychR-manual/jsPsychMaker.html#available-tasks).

## Creating a protocol

To create a fully working protocol you need to download this repo and edit the `config.js` file. There is a [Shiny app to help you create the protocol configuration, and the consent form](https://gorkang.shinyapps.io/jsPsychMaker_config/).  

## Data preparation

Each of the tasks should have a sister script in [jsPsychHelpeR](https://github.com/gorkang/jsPsychHelpeR) to automatize the data preparation. With [jsPsychHelpeR](https://github.com/gorkang/jsPsychHelpeR), using a simple function `run_initial_setup()` you can setup a full project to automatically run the full data preparation pipeline for a jsPsychMaker protocol.  


## New tasks

If you need help creating a new task, [create a new  issue](https://github.com/gorkang/jsPsychMaker/issues/new?assignees=HeRm4nV&labels=NEW+TASK&template=new-task.md&title=New+task%3A+%5BNAME+OF+THE+TASK%5D) and fill the details of the task in the [NEW jsPsychR tasks document](https://docs.google.com/spreadsheets/d/1LAsyTZ2ZRP_xLiUBkqmawwnKWgy8OCwq4mmWrrc_rpQ/edit#gid=0).  


## More information

Check the [jsPsychR-manual](https://gorkang.github.io/jsPsychR-manual/jsPsychMaker.html).  
