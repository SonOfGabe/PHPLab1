<?php
header('Content-type: application/json');
$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД
$sqltext = "INSERT INTO `".$_POST['SelectTable']."`(";
for ($i=0; $i< $_POST['count']; $i++){
if($i+1 == $_POST['count']){
        $sqltext.="`".$_POST['nametable'.$i]."`";
    }
    else{
        $sqltext.= "`".$_POST['nametable'.$i]."`, ";
    }
}
$sqltext.=") VALUES(";
for ($i=0; $i< $_POST['count']; $i++){
    if($i+1 == $_POST['count']){
        $sqltext.= $_POST['insertdata'.$i].")";
    }
    else{
        $sqltext.= $_POST['insertdata'.$i].", ";
    }
}
$sql = mysqli_query($db, $sqltext); //запрос
if($sql === true){
    $message = "Данные добавлены";
}
else{
    $message = "Ошибка добавления данных";
}
$db->close();
$response = ['message' =>$message];

echo json_encode($response);
?>
