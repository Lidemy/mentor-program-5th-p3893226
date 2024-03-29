<?php
  require_once("conn.php");
  require_once("utils.php");
  session_start();

  if(empty($_POST["content"])
    ) {
    header("Location: update_comment.php?errCode=1&id=".$_POST['id']);
    die("資料不齊全");
  }

  $username = $_SESSION['username'];
  $id = $_POST['id'];
  $content = $_POST['content'];

  $sql = 
    "update aidan_board_comments set content=? where id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('si', $content, $id);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>