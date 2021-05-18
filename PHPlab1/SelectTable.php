<?php
header('Content-type: application/json');
$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД

$sql = mysqli_query($db, "SHOW TABLES FROM `".$_POST['SelectBD']."`"); //запрос
while ($row = mysqli_fetch_array($sql)) { // массив с данными
    $message .= "<option>$row[0]</option>"; //вывод данных
}

$response = ['message' =>$message];
$db->close();

echo json_encode($response);
?>
