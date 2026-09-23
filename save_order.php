<?php
$conn = new mysqli("localhost", "root", "", "orders_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
    foreach ($data as $item) {
        $user_name = "Guest"; // Modify this if you have user authentication
        $product_name = $conn->real_escape_string($item['name']);
        $quantity = intval($item['quantity']);
        $price = floatval($item['price']);

        $sql = "INSERT INTO orders (user_name, product_name, quantity, price) VALUES ('$user_name', '$product_name', $quantity, $price)";
        $conn->query($sql);
    }
}

$conn->close();
echo json_encode(["message" => "Order saved successfully!"]);
?>
