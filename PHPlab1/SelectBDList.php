<?php
header('Content-type: application/json');
$user = 'root';
$pass = 'root';
$server = 'localhost';
$dbh = new PDO( "mysql:host=$server", $user, $pass );
$dbs = $dbh->query( 'SHOW DATABASES' );


while( ( $db = $dbs->fetchColumn( 0 ) ) !== false ) {
    $message.= "<option>$db</option>";
    $response = ['message' =>$message];
}
echo json_encode($response);
    ?>