<?php
header('Content-type: application/json');
$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД
$sqltext = "DROP DATABASE `".$_POST['SelectBD']."`";

$sql = mysqli_query($db, $sqltext); //запрос

if ($sql === TRUE){
    $message = "База успешно удалена";
}
else{
    $message = "Ошибка";
}

$response = ['message' =>$message];

$db->close();

echo json_encode($response);
?>
