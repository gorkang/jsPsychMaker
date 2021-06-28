<?php
/*
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
  echo "Connected successfully";

  function createTable($data, $conn) {
    $query = "CREATE TABLE IF NOT EXISTS " . $data["table_name"] . " (" . $data["rows"] .")";
    $result = mysqli_query($conn, $query);
    /*if (mysqli_query($conn, "SELECT * FROM " . $data["table_name"] . "_" . $data["pid"])) {
      echo "TABLE CREATED SUCCESSFULLY";
    } else {
      echo "TABLE CREATED UNSUCCESSFULLY";
    }*/
    //echo($query);
  };

  function insertIntoTable($data, $conn) {
    $query = "INSERT IGNORE INTO " . $data["table_name"] . " (" . $data["rows"] . ") VALUES (" . $data["values"] . ")";
    $result = mysqli_query($conn, $query);
    //echo($query);
  };

  function updateTable($data, $conn) {
    $query = "UPDATE " . $data["table_name"] . " SET " . $data["data"] . " WHERE " . $data["id"];
    $result = mysqli_query($conn, $query);
    //echo($query);
  };

  if ($data["query"] == "createTable") {
    createTable($data, $conn);
  } else if ($data["query"] == "insertIntoTable") {
    insertIntoTable($data, $conn);
  } else if ($data["query"] == "updateTable") {
    updateTable($data, $conn);
  }

  /*
  $query = "SELECT id FROM " . $data["table_name"];
  $result = $conn->query($query);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["id"] . "<br>";
    }
  } else {
    echo "0 results";
  } */

  /*
  if(empty($result)) {
    $query = "CREATE TABLE USERS (
      ID int(11) AUTO_INCREMENT,
      EMAIL varchar(255) NOT NULL,
      PASSWORD varchar(255) NOT NULL,
      PERMISSION_LEVEL int,
      APPLICATION_COMPLETED int,
      APPLICATION_IN_PROGRESS int,
      PRIMARY KEY  (ID)
    )";
    $result = $conn->query($query);
  }

  $sql = "SELECT id FROM users";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["id"] . "<br>";
    }
  } else {
    echo "0 results";
  }
  */

  $conn->close();

?>
