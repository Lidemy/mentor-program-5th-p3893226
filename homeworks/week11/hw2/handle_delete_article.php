<?php
session_start();
require_once('conn.php');

if(empty($_SESSION['username'])) {
  header("Location: index.php");
}

$id = $_GET['id'];
echo '拿get資料的id是'. $id .'<br>';

if (empty($id)) {
  header('Location:index.php');
  die('刪除失敗！');
}

$sql = " UPDATE aidan_blog_articles SET is_deleted ='1' WHERE id=? ";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
};

header('Location: index.php ');
?>
