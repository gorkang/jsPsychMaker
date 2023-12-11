<?php
/*
  //TO DEBUG THE SQL commands
    ?>
    <script>alert("<?php echo $query; ?>")</script>
    <?php
*/

// Random sleep for a few ms to avoid clashes when checking assigned_task in the DB
// REVIEW: If we manage to lock the table this can go
$sleep_time = rand (1, 10);
usleep( $sleep_time );


// MySQL credentials: .secrets_mysql.php --------------------------------------

  // DO NOT FILL THE PARAMETERS HERE
  // .secrets_mysql.php SHOULD NOT BE IN A PUBLIC FOLDER OR REPOSITORY

/* The file .secrets_mysql.php contains the following information:
  $servername = "";
  $username = "";
  $password = "";
  $dbname = "";
*/


// Path to .secrets_mysql.php is different if running in protocols/test/ or protocols/
$url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";

if (strpos($url,'test') !== false) {
  // If running task in protocols/tests/protocols_DEV/ folder:
  require_once '../../../../../../../../../../.secrets_mysql.php';
} else {
  // If running task in protocols/ folder:
  require_once '../../../../../../../../.secrets_mysql.php';
}



  $data = json_decode(file_get_contents('php://input'), true);
// REMEMBER: delete me
// echo '<pre>'; print_r($data); echo '</pre>';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


// FUNCTIONS -----------------------------------------------------------------


  // general_query  ----------------------------------------------------
  // -------------------------------------------------------------------

  function general_query($data, $conn) {
 
    $query = $data["sql"] . " WHERE " . $data["id"] . " AND task.id_protocol = " . $data["pid"];
    // echo($query);
  
      if (array_key_exists('keys', $data) && array_key_exists('values', $data)) {
        for ($i=0; $i < count($data["keys"]); $i++) {
          $query = $query . " AND " . $data["keys"][$i] . " = " . $data["values"][$i];
        }
      }
  
      echo("[");
      $starting = true;
      $query = $query . ";";
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

  };
  
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------
  
  


  function createTable($data, $conn) {
    $query = "CREATE TABLE IF NOT EXISTS " . $data["table_name"] . " (" . $data["keys"] .")";
    $result = mysqli_query($conn, $query);
  };

  function insertIntoTable($data, $conn) {
    $query = "INSERT IGNORE INTO " . $data["table_name"] . " (" . $data["keys"] . ") VALUES (" . $data["values"] . ")";
    //echo($query);
    $result = mysqli_query($conn, $query);
    //echo($result);
  };

  function updateTable($data, $conn) {

    $query = "UPDATE " . $data["table_name"] . " SET " . $data["data"] . " WHERE " . $data["id"];
    $result = mysqli_query($conn, $query);
    //echo($query);
  };


  function condition_selection($data, $conn) {

    $query = "SELECT task_name, condition_name, condition_key FROM user_condition LEFT JOIN experimental_condition USING (id_condition) WHERE " . $data["id"] . " AND experimental_condition.id_protocol = " . $data["pid"];
    $result = mysqli_query($conn, $query);
    //echo($result);
    echo('[');
    $starting = true;

    while ($row = $result->fetch_assoc()) {
      foreach($row as $key=>$value) {
        if ($starting){
          $starting = false;
        } elseif ($starting == false && $key == "task_name") {
          echo ", ";
        }

        if ($key == "task_name") {
          echo('{"' . $value . '": ');
        } elseif ($key == "condition_name") {
          echo('{"' . $key . '": "' . $value . '",');
        } elseif ($key == "condition_key") {
          echo('"' . $key . '": "' . $value . '"}}');
        } else {
          echo ("error en " . $key . " " . $value);
        }

        //echo('{"' . $key . '": "' . $value . '"}');
      }
    }
    echo(']');
  };


  function findAll($data, $conn) {
  
    $query = "LOCK TABLES " . $data["table_name"] . " WRITE;";
    $result = mysqli_query($conn, $query);

    $query = "SELECT * from " . $data["table_name"] . " WHERE id_protocol = " . $data["pid"];

    if (array_key_exists('keys', $data) && array_key_exists('values', $data)) {
      for ($i=0; $i < count($data["keys"]); $i++) {
        $query = $query . " AND " . $data["keys"][$i] . " = " . $data["values"][$i];
      }
    }

    echo("[");
    $starting = true;

    $query = $query . ";";

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

    $query = "UNLOCK TABLES;";
    $result = mysqli_query($conn, $query);

  }


  function findRow($data, $conn) {

    $query = "SELECT * from " . $data["table_name"] . " WHERE id_protocol = " . $data["pid"];

    if (array_key_exists('keys', $data) && array_key_exists('values', $data)) {
      for ($i=0; $i < count($data["keys"]); $i++) {
        $query = $query . " AND " . $data["keys"][$i] . ' = "' . $data["values"][$i] . '"';
      }
    }

    //echo($query);

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



// Function to use depending on the 'query' parameter
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
  } else if ($data["query"] == "condition_selection") {
    condition_selection($data, $conn);
  } else if ($data["query"] == "general_query") {
    general_query($data, $conn);
  }

  $conn->close();

?>
