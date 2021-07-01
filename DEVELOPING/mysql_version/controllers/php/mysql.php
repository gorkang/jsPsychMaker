<?php

require_once '/srv/users/user-cscn/apps/uai-cscn/.secrets_mysql.php';

/* The file .secrets_mysql.php contains the following information: 
  $servername = "";
  $username = "";
  $password = "";
  $dbname = "";
*/

  $data = json_decode(file_get_contents('php://input'), true);

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  function createTable($data, $conn) {
    $query = "CREATE TABLE IF NOT EXISTS " . $data["table_name"] . " (" . $data["keys"] .")";
    $result = mysqli_query($conn, $query);
  };

  function insertIntoTable($data, $conn) {
    $query = "INSERT IGNORE INTO " . $data["table_name"] . " (" . $data["keys"] . ") VALUES (" . $data["values"] . ")";
    $result = mysqli_query($conn, $query);
    //echo($result);
  };

  function updateTable($data, $conn) {
    $query = "UPDATE " . $data["table_name"] . " SET " . $data["data"] . " WHERE " . $data["id"];
    $result = mysqli_query($conn, $query);
    //echo($query);
  };

  function findAll($data, $conn) {
    $query = "SELECT * from " . $data["table_name"] . " WHERE id_protocol = " . $data["pid"];

    if (array_key_exists('keys', $data) && array_key_exists('values', $data)) {
      for ($i=0; $i < count($data["keys"]); $i++) {
        $query = $query . " AND " . $data["keys"][$i] . " = " . $data["values"][$i];
      }
    }

    echo("[");
    $starting = true;
    $result = mysqli_query($conn, $query);
    while ($row = $result->fetch_assoc()) {
      $first = true;
      if ($starting){
        echo "{";
        $starting = false;
      } else {
        echo ", {";
      }

      foreach($row as $key=>$value) {
        if ($first) {
          $first = false;
        } else {
          echo ", ";
        }
        echo ('"' . $key . '"' . ': "' . $value . '"');
      }
      echo '}';
    }
    echo("]");
  }

  function findRow($data, $conn) {

    $query = "SELECT * from " . $data["table_name"] . " WHERE id_protocol = " . $data["pid"];

    if (array_key_exists('keys', $data) && array_key_exists('values', $data)) {
      for ($i=0; $i < count($data["keys"]); $i++) {
        $query = $query . " AND " . $data["keys"][$i] . ' = "' . $data["values"][$i] . '"';
      }
    }

    $result = mysqli_query($conn, $query);

    while ($row = $result->fetch_assoc()) {
      $first = true;
      echo "{";
      foreach($row as $key=>$value) {
        if ($first) {
          $first = false;
        } else {
          echo ", ";
        }
        echo ('"' . $key . '"' . ': "' . $value . '"');
      }
      echo '}';
    }
  }

  if ($data["query"] == "createTable") {
    createTable($data, $conn);
  } else if ($data["query"] == "insertIntoTable") {
    insertIntoTable($data, $conn);
  } else if ($data["query"] == "updateTable") {
    updateTable($data, $conn);
  } else if ($data["query"] == "findAll") {
    findAll($data, $conn);
  } else if ($data["query"] == "findRow") {
    findRow($data, $conn);
  }

  $conn->close();

?>
