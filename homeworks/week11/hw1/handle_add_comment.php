<?php
  require_once("conn.php");
  require_once("utils.php");
  session_start();

  if(empty($_POST["content"])
    ) {
    header("Location: index.php?errCode=1");
    die("資料不齊全");
  }

  $user = getUserFromUsername($_SESSION['username']);
  $username = $_SESSION['username'];

  $content = $_POST["content"];
  $sql = 
    "INSERT INTO aidan_board_comments(username, content) 
    values(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $content);
  $result = $stmt->execute();
  if (!$result) {
    die("$conn->error");
  }

  header("Location: index.php");
?>