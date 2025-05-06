<?php
session_start();
if (!isset($_SESSION["username"])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Notifications</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Notifications</h1>
  <p>You have no new notifications.</p>
  <a href="dashboard.php">Back to Dashboard</a>
</body>
</html>
