<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
    $role = $user['role'];
  } else{
    header("Location: index.php?errCode=2");
    exit();
  }
  if($role != 1) {
    header("Location: index.php?errCode=3");
    exit();
  }
  
  if(empty($_POST["id"])
    ) {
    header("Location: index.php?errCode=1");
    die("資料不齊全");
  }

  $id = $_POST['id'];
  $role = $_POST['role'];

  $sql = 
    "UPDATE aidan_board_users SET role=? WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ii', $role, $id);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: admin.php");
?>