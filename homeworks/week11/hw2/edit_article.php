<?php
session_start();
require_once('conn.php');
require_once('utilis.php');

if(empty($_SESSION['username'])) {
  header("Location: index.php");
  exit();
}

$id = $_GET['id'];

$username = NULL;
if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
}

$user = getUserFromUsername($username);

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

  <title>Lagre Blog</title>
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
      <h1>Edit Content</h1>
    </div>
  </section>
  <?php
        if (!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          $msg = 'Error';
          if ($code === '1') {
            $msg = '資料不齊全';
          }
          echo '<h2 class="error">錯誤：' . $msg . '</h2>';
        }
      ?>

  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_edit_article.php" method="POST">
          <div class="edit-post__title">
            Edit Article：
          </div>
          <div class="edit-post__input-wrapper">
            <input name ="title" value = <?php echo escape($row['title']);?> class="edit-post__input" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name ="content" rows="20" class="edit-post__content"><?php echo escape($row['content']);?> </textarea>
            <input type="hidden" name="id" value="<?php echo escape($row['id']) ?>" />
            <input class="edit-post__btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>

