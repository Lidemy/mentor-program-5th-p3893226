<?php
session_start();
require_once('conn.php');
require_once('utilis.php');

//讀取session資訊
$username = NULL;
if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
}

$user = getUserFromUsername($username);

$sql = "SELECT * FROM aidan_blog_articles " .
"WHERE aidan_blog_articles.is_deleted IS NUll " .//soft delete
"limit 5 ";
$stmt = $conn->prepare($sql);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
};
$result = $stmt->get_result();
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
        <a href='index.php'>Large</a>
      </div>
      <ul class="navbar__list">
      <?php if (!$username) {?>
        <div>
          <li><a href="articles.php">Articles</a></li>
          <li><a href="#">About</a></li>
        </div>
        <div>
          <li><a href="login.php">Sign in</a></li>
        </div>
        <?php } else {?>
        <div>
          <li><a href="create_article.php">Post</a></li>
          <li><a href="logout.php">Sign out</a></li>
        </div>
        <?php }?>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>Large is a place to write, read, and connect</h1>
      <div>It's easy and free to post your thinking on any topic and connect with millions of readers.</div>
    </div>
  </section>
  <?php 
        if (!empty($_GET['errCode'])) {
          $getCode = $_GET['errCode'];
          $errorMsg = '錯誤';
          if ($getCode === '1') {
            $errorMsg = '資料不齊全';
          };
          echo '<h2 class ="error">錯誤：' . $errorMsg . '<h2>';
        }
      ?>
  <section class="container-wrapper">
    <div class="posts">
      <?php
        while($row = $result->fetch_assoc()) {
      ?>
        <article class="post">
          <div class="post__header">
            <div><?php echo escape($row['title']); ?></div>
            <?php if($username) { ?>
            <div class="post__actions">
              <a class="post__action" href="edit_article.php?id=<?php echo $row['id'];?>">Edit</a>
              <a class="post__action" href="handle_delete_article.php?id=<?php echo $row['id'];?>">Delete</a>
            </div>
            <?php } ?>
          </div>
          <div class="post__info">
            <?php echo $row['created_at']; ?>
          </div>
          <div class="post__content">
            <?php echo substr(escape($row['content']),0, 300);?>
          </div>
          <a class="btn-read-more" href="blog.php?id=<?php echo $row['id'];?>">READ MORE</a>
        </article>
        <?php } ?> 
      </div>
    </section>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>