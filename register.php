<?php
session_start(); // Start the session

if (isset($_SESSION['username'])) {
    header("Location: index.php"); // Redirect if already logged in
    exit();
}

require_once 'db_connect.php'; // Include database connection

$registration_success = false; // Flag to track registration success
$registration_error = ""; // Variable to hold error messages

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $password = $_POST["password"];
    $email = trim($_POST["email"]);

    // Validate inputs (basic example - you should add more robust validation!)
    if (empty($username) || empty($password) || empty($email)) {
        $registration_error = "All fields are required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $registration_error = "Invalid email format.";
    } else {

        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Prepare and execute the SQL query (using prepared statements to prevent SQL injection)
        $stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $hashed_password, $email); // "sss" indicates 3 string parameters

        if ($stmt->execute()) {
            $registration_success = true;
            // Optionally redirect to login page after successful registration
            header("Location: login.php");
            exit();
        } else {
            // Check for duplicate username error
            if ($conn->errno == 1062) { // 1062 is the error code for duplicate key
                $registration_error = "Username already exists. Please choose a different username.";
            } else {
                $registration_error = "Error registering user: " . $stmt->error;
            }
        }

        $stmt->close();
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <!-- Link to your existing CSS if you want to use those styles -->
    <!-- <link href="src/style.css" rel="stylesheet"/> -->
    <style>
        body {
            font-family: 'Outfit', sans-serif; /* Use Outfit font */
            /*background-color: #f4f4f4;*/ /* Remove the background color */
            background-image: url('img/c1.jpg'); /* Add the background image */
            background-size: cover; /* Cover the entire background */
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Prevent the image from repeating */
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent white background to the container */
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
            width: 400px;
            max-width: 90%; /* Make it responsive */
            text-align: center;
        }

        h2 {
            color: #333;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            text-align: left;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box; /* Important for width calculation */
            font-size: 16px;
        }

        input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 14px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        p {
            margin-top: 15px;
            color: #777;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .error {
            color: red;
            margin-bottom: 15px;
        }

        .success {
            color: green;
            margin-bottom: 15px;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }

            input[type="text"],
            input[type="email"],
            input[type="password"] {
                padding: 10px;
                font-size: 14px;
            }

            input[type="submit"] {
                font-size: 16px;
            }
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">

</head>
<body>
    <div class="container">
        <h2>Register</h2>

        <?php if ($registration_success): ?>
            <p class="success">Registration successful! You can now <a href="login.php">log in</a>.</p>
        <?php endif; ?>

        <?php if (!empty($registration_error)): ?>
            <p class="error"><?php echo $registration_error; ?></p>
        <?php endif; ?>

        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <input type="submit" value="Register">
        </form>
        <p>Already have an account? <a href="login.php">Log in</a></p>
    </div>
</body>
</html>