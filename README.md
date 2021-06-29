# jsPsychMaker

<!-- badges: start -->
[![Lifecycle: experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
<!-- badges: end -->


A set of tools to help create experiments with [jsPsych](https://www.jspsych.org/), randomize participants, etc.

In `canonical_protocol/` we will keep a [list of tasks](https://github.com/gorkang/jsPsychMaker/blob/main/canonical_protocol/canonical_protocol_details.csv) available for reuse.   

Each of the tasks should have a sister script in [jsPsychHelpeR](https://github.com/gorkang/jsPsychHelpeR) to automatize the data preparation. Using a simple function `create_targets()` you should be able to automatically create the full data preparation pipeline for a jsPsychMaker protocol.  
