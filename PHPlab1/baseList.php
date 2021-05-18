<?php
header('Content-type: application/json');
$user = 'root';
$pass = 'root';
$server = 'localhost';
$dbh = new PDO( "mysql:host=$server", $user, $pass );
$dbs = $dbh->query( 'SHOW DATABASES' );

while( ( $dbname = $dbs->fetchColumn( 0 ) ) !== false ) {
    $message.= '<li><div class="dbname__title">'.$dbname.'</div>';
    $db = mysqli_connect("localhost", "root", "root", $dbname) or die(mysqli_error()); //подключение к БД
    $sql = mysqli_query($db, "SHOW TABLES FROM `{$dbname}`"); //запрос
    $countrow = mysqli_num_rows($sql);
    if($countrow > 0 and $countrow < 10){
        $message.= '<ul>';
        while ($row = mysqli_fetch_array($sql)) { // массив с данными
            $message.= '<li>'.$row[0].'</li>'; //вывод данных
        }
        $message.= '</ul>';
    }
    $message.= '</li>';

    $response = ['message' =>$message];
}
echo json_encode($response);
?>
