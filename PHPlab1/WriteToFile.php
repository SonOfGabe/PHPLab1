<?php
header('Content-type: application/json');
$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД
$sqltext = "SELECT * FROM `".$_POST['SelectTable']."`";

$sql = mysqli_query($db, $sqltext); //запрос
$path = __DIR__.'/files/'.$_POST['SelectBD']."_".$_POST['SelectTable'].'.txt';
$file = fopen($path,'w');

while($row = mysqli_fetch_array($sql)){

    for ($i=0; $i < $_POST['count']; $i++) {
        $string .= $row[$_POST['nametable1'.$i]] . "\t";
    }
    $string.= "\n";

}

$write = fwrite($file, $string);
if($write) $message= "Данные успешно записаны!<br>";
else $message= "Не удалось записать данные!<br>";
//закрываем файл
fclose($file);


$response = ['message' =>$message];

$db->close();

echo json_encode($response);
?>
