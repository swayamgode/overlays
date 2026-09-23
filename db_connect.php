<?php
$host = 'localhost';
$username = 'root';
$password = '';  // Empty password by default in XAMPP
$database = 'my_website';

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
