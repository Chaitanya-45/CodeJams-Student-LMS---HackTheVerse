<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="loginstyle.css">
    
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
<header class="head">
  <nav>
    <div class="nav-links" id="navLinks">
      <i class="fa fa-times" onclick="hidemenu()"></i>
      <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="login.php">LOGIN</a></li>
        <li><a href="signup.php">REGISTER</a></li>
      </ul>
    </div>
  </nav>

</header>

    <div class="background-image"></div>
    <div class="login-container">
        <h1>Login</h1>
        <form id="login-form" method="post" action="">
            <label for="username">Username:</label>
            <input type="text" id="Username" name="Username">
            <br>
            <label for="password">Password:</label>
            <input type="password" id="Password" name="Password">
            <br>
            <input type="submit" value="Login" class="logBtn" name="login_btn">
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>

<?php
// Establish a connection to the database
$conn = mysqli_connect("localhost", "root", "", "websitelogin");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['login_btn'])) {
    $Username = mysqli_real_escape_string($conn, $_POST['Username']);
    $Password = md5($_POST['Password']); // Assuming passwords are stored as MD5 hashes

    $sql = "SELECT * FROM logindetails WHERE Username = '$Username' AND Password = '$Password'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        // Login successful
        header('Location: profile.html');
        exit();
    } else {
        echo "<script>alert('Login unsuccessful');</script>";
    }
}

mysqli_close($conn);
?>