<?php
header('Content-type: application/json');

$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД

$sql = mysqli_query($db, "SHOW COLUMNS FROM `".$_POST['SelectTable']."`"); //запрос<tr>
$message.= "<tr>";
$count = 0;
while($row = mysqli_fetch_array($sql)){
    if($count>0){
        $message.= "<td class='tabledata'>".$row["Field"]."(".$row["Type"].",  NULL ".$row["Null"].")</td>";
    }
    $count++;
}
$message.= "</tr>";
$response = ['message' =>$message];
$db->close();

echo json_encode($response);
?>
