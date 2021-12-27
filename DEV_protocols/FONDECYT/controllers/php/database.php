<?php
$post_data = json_decode(file_get_contents('php://input'), true);

// the directory "data" must be writable by the server
$name = "../../database/".$post_data['filename'].".csv";

// if is "conditions.csv" we need update the file, else we only need append a new line
// condition.csv necesita tener agregadas las lineas desde el inicio del proyecto
if ($post_data['filename'] == "conditions") {
  $condition = $post_data['condition'];
  //completed or assigned
  $status = $post_data['status'];
  $lines = file($name, FILE_IGNORE_NEW_LINES);
  $rows = count(file($name)) - 1;

  for ($i = 1; $i <= $rows; $i++) {
    if (str_contains($lines[$i], $condition)) {
      $actual_line = explode(',', $lines[$i]);
      if ($status == "assigned") {
        $actual_line[1] = strval(intval($actual_line[1]) += 1);
      } elseif ($status == "completed") {
        $actual_line[1] = strval(intval($actual_line[2]) += 1);
      }
      $lines[$i] = implode(",", $actual_line);
    }
  }

  file_put_contents($name, implode("\n", $lines));
} else {
  $data = $post_data['filedata'];
  file_put_contents($name, $data, FILE_APPEND | LOCK_EX);
}

?>
