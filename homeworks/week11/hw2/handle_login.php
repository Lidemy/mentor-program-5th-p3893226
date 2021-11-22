<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  if (
    empty($_POST['username'])  ||
    empty($_POST['password']) 
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM aidan_blog_users WHERE username=? AND password=? ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $username, $password);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result();
  
  //以有沒有資料判斷是否登入成功
  if ($result->num_rows) {
    // 登入成功
    header("Location: index.php");
    $_SESSION['username'] = $username;
  } else {
    header("Location: login.php?errCode=2");
  }
?>