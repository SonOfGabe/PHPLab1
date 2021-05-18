<?php
header('Content-type: application/json');
$db = mysqli_connect("localhost", "root", "root", $_POST['SelectBD']) or die(mysqli_error()); //подключение к БД
$sqltext = "SELECT * FROM `".$_POST['SelectTable']."`";

$sql = mysqli_query($db, $sqltext); //запрос


while($row = mysqli_fetch_array($sql)){

    $message.= "<tr>";

    for ($i=0; $i < $_POST['count']; $i++) {
        $message .= "<td class='tabledata'>" . $row[$_POST['nametable1'.$i]] . "</td>";
    }
    $message.= "</tr>";

}

$response = ['message' =>$message];

$db->close();

echo json_encode($response);
?>
