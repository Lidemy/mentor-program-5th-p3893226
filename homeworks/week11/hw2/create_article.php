<?php
  session_start();
  if(empty($_SESSION['username'])) {
    header("Location: index.php");
  }
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
          <li><a href="#">category</a></li>
          <li><a href="#">About</a></li>
        </div>
        <div>
          <li><a href="admin.html">Control Panel</a></li>
          <li><a href="logout.php">Sign out</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>Post new article</h1>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_create_article.php" method="POST">
          <div class="edit-post__title">
          Publish Article：
          </div>
          <div class="edit-post__input-wrapper">
            <input name ="title" class="edit-post__input" placeholder="Please enter the title of the article" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name ="content" rows="20" class="edit-post__content"></textarea>
            <input class="edit-post__btn" type="submit" value="Sumbit" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>

