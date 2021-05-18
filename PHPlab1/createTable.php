<?php
header('Content-type: application/json');


if(trim(!empty( $_POST['SelectBD']))){
    $dbname = $_POST['SelectBD'];
}
else{
    $dbname = 'test555';
}
$servername = "localhost"; // локалхост
$username = "root"; // имя пользователя
$password = "root"; // пароль если существует


// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);
// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}




$sql1 .= "CREATE TABLE {$_POST['nameTable']} (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, ";


for ($i = 1; $i<= $_POST['count']; $i++){
    if (($i) != $_POST['count']){
        $sql1.=$_POST["inputelem".$i]." ".$_POST["selecttypedata".$i]."(".$_POST["inputlen".$i].") ".$_POST["inputNULL".$i].",";
    } else {
        $sql1.=$_POST["inputelem".$i]." ".$_POST["selecttypedata".$i]."(".$_POST["inputlen".$i].") ".$_POST["inputNULL".$i].")";
    }
}
$temp = 2;

if ($conn->query($sql1) === TRUE) {
    $message = "{$_POST["inputelem".$temp]}        Таблица ".$_POST['nameTable']." создана успешно ".$sql1;
} else {
    $message = "Ошибка создания таблицы: " . $conn->error;
}

// Закрыть подключение
$conn->close();

$response = ['message' =>$message];

echo json_encode($response);
?>