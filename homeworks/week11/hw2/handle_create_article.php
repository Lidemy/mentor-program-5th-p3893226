<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  if (
    empty($_POST['title']) || 
    empty($_POST['content'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }

  $title = $_POST['title'];
  $content = $_POST['content'];

  $sql = "INSERT INTO aidan_blog_articles(title, content) values(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $title, $content);
  $result = $stmt->execute();

  if (!$result) {
    die($conn->error);
  }
  
  header("Location: index.php");
?>