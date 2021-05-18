<?php
header('Content-type: application/json');
$servername = "localhost";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Create database
if(trim(!empty( $_POST['namedb']))){
    $namedb = $_POST['namedb'];
}
else{
    $namedb = 'test555';
}
$sql = "CREATE DATABASE {$namedb}";
if ($conn->query($sql) === TRUE) {
    //echo "Database created successfully";
    $message = 'База '.$namedb.' успешно создана';
} else {
    //echo "Error creating database: " . $conn->error;
    $message = 'База с таким именем существует';
}
    $response = ['message' =>$message];
$conn->close();
echo json_encode($response);
?>

