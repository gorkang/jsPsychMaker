<?php

  $directory = '../../.data';
  if(file_exists($directory)) { 
    echo 'The directory .data exists'; 
  } else {
    echo 'The directory .data does not exist -> creating folder';
    mkdir("../../.data");
  }

?>