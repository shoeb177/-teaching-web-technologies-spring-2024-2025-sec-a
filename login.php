<?php
session_start();
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (empty($email) || empty($password)) {
        $error = "Please enter both email and password.";
    } elseif ($email == "admin@example.com" && $password == "admin123") {
        $_SESSION["username"] = explode("@", $email)[0];
        header("Location: dashboard.php");
        exit();
    } else {
        $error = "Invalid credentials.";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h2>Login</h2>
  <form method="post">
    <input type="email" name="email" placeholder="Email"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <button type="submit">Login</button>
  </form>
  <p style="color:red;"><?php echo $error; ?></p>
</body>
</html>
