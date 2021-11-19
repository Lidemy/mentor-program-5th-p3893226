<?php
session_start();
require_once('conn.php');
require_once('utilis.php');

//拿GET來的id資料
$id = $_GET['id'];

//跟資料庫拿資料
$sql = "SELECT * FROM aidan_blog_articles WHERE id = ? ";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id); 
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
  print_r($conn->error);
};
$result = $stmt->get_result();
$row = $result->fetch_assoc();
?>

<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>Large Blog</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Home</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="articles.php">Articles</a></li>
          <li><a href="#">About</a></li>
        </div>
        <div>
          <li><a href="logout.php">Sign out</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1><?php echo escape($row['title']);?></h1>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
          <div class="edit-post__input-wrapper">
            <div name ="content" rows="20" class="post__content"><?php echo escape($row['content']);?> </div>
          </div>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>

