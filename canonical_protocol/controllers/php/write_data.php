<?php
$post_data = json_decode(file_get_contents('php://input'), true);

date_default_timezone_set('America/Santiago');
$actual_time = new DateTime('NOW');

// the directory "data" must be writable by the server
$name = "../../.data/".$post_data['project_code']."_".$post_data['short_name']."_".$post_data['version']."_".$actual_time -> format('Y-m-d\THis')."_".$post_data['user_id'].".csv";
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>
