<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  if(empty($_POST["username"]) ||
     empty($_POST["password"])
    ) {
    header("Location: login.php?errCode=1");
    die("資料不齊全");
  }
  $username = $_POST["username"];
  $password = $_POST["password"];

  $sql = "SELECT * FROM aidan_board_users WHERE username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $username);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result(); //上面只知道有沒有執行成功，但沒有拿到結果，必須加上這行
  if ($result->num_rows === 0){
    header("Location: login.php?errCode=2");
    exit();
  }
    // 查到有使用者
  $row = $result->fetch_assoc();
  if(password_verify($password, $row['password'])){
    $_SESSION['username'] = $username;
    // 登入成功
    header("Location: index.php");
  } else{
    header("Location: login.php?errCode=2");
  }
?>