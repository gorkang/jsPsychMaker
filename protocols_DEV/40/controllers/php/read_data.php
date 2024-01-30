<?php

  // This file only works in a server or a no CORS browser, be careful when using this offline
  $directory = '../../.data';
  if(file_exists($directory)) { 
    echo 'The directory .data exists'; 
  } else {
    echo 'The directory .data does not exist -> creating folder';
    mkdir("../../.data");
  }

?>