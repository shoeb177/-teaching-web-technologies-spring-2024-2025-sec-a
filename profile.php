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
  <title>Profile</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>User Profile</h1>
  <form>
    <input type="text" placeholder="Name"><br>
    <input type="email" placeholder="Email"><br>
    <input type="password" placeholder="New Password"><br>
    <button>Save Changes</button>
  </form>
  <a href="dashboard.php">Back to Dashboard</a>
</body>
</html>
