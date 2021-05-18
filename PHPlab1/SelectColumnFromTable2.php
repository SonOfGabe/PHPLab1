<?php
header('Content-type: application/json');

$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД

$sql = mysqli_query($db, "SHOW COLUMNS FROM `".$_POST['SelectTable']."`"); //запрос<tr>
$message.= "<tr>";
while($row = mysqli_fetch_array($sql)){
        $message.= "<td class='tabledata2'>".$row["Field"]."</td>";

}
$message.= "</tr>";
$response = ['message' =>$message];
$db->close();

echo json_encode($response);
?>
