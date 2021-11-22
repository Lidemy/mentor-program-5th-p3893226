<?php
session_start();
require_once('conn.php');


$id = $_POST['id'];

$title = $_POST['title'];
$content = $_POST['content'];

if (empty($title) || empty($content) ) {
  header('Location: edit_article.php?errCode=1&id='.$id);
  die('資料不齊全');
}

$sql = " UPDATE aidan_blog_articles SET title=?, content=? WHERE id=? ";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $title, $content, $id);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
};

header('Location: index.php ');
?>
