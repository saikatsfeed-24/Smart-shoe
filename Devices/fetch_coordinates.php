<?php
$servername = "localhost";
$username = "root";
$password = "Uemj@1234";
$dbname = "uem";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT latitude, longitude FROM gps_data WHERE device_id = 867959035080174";
$result = $conn->query($sql);

$coordinates = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $coordinates[] = $row;
    }
}

$conn->close();

echo json_encode($coordinates);
?>
