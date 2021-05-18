<?php
header('Content-type: application/json');
$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД
$sqltext = "DELETE FROM `".$_POST['SelectTable']."`";

$sql = mysqli_query($db, $sqltext); //запрос

if ($sql === TRUE){
    $message = "Данные успешно удалены";
}
else{
    $message = "Ошибка в удалении данных";
}

$response = ['message' =>$message];

$db->close();

echo json_encode($response);
?>
