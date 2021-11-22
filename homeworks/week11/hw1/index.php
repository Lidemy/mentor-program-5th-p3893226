<?php
session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = null;
  $user = null;
  $role = null;
  if(!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
    $role = $user['role'];
  }

  $page = 1;
  if (!empty($_GET['page'])) {
    $page = intval($_GET['page']); // 轉成數字型態 
  }
  $item_per_page = 5;
  $offset = ($page - 1) * $item_per_page;

  $stmt = $conn->prepare(
                "SELECT ".
                  "C.id AS id, ". 
                  "C.content AS content, ".
                  "C.created_at AS created_at, ". 
                  "U.nickname AS nickname, ". 
                  "U.username AS username ". 
                "FROM aidan_board_comments AS C ". 
                "left join aidan_board_users AS U ". 
                "ON C.username = U.username ".
                "WHERE C.is_deleted IS NULL ". 
                "ORDER BY C.id DESC ". 
                "limit ? offset ?");
  $stmt->bind_param('ii', $item_per_page, $offset);
  $result = $stmt->execute();
  if (!$result) {
    die('Error:' . $conn->error);
  }
  $result = $stmt->get_result();

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>留言板</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" href="./style.css" />

</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
      <div class="board__btn-wrapper">
        <?php if (!$username) { ?>
          <a class="board__btn" href="register.php">註冊</a>
          <a class="board__btn" href="login.php">登入</a>
        <?php } else { ?>
          <a class="board__btn" href="logout.php">登出</a>
          <label class="drawer__btn" for="drawer3">編輯暱稱</label>
          <?php if($role == 1) { ?>
                <a class="board__btn" href="admin.php">後台管理</a>
                <?php } ?>
          <input class="drawer__trigger" id="drawer3" type="checkbox" />
            <div class="drawer__content-wrapper">
              <form method="POST" action="handle_update_user.php">
                新暱稱：<input class="new__nickname" type="text" name="nickname"/>
                <input class="board__submit-btn" type="submit" value="更改"/>
              </form>
            </div>
          <h3>你好！<?php echo escape($user['nickname']); ?></h3>
        <?php } ?>
      </div>
      
      <h1 class="board__title">Comments</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          $msg = 'Error';
          if ($code === '1') {
            $msg = '資料不齊全';
          } else if($code === '2'){
            $msg = '帳號帳號或密碼輸入錯誤';
          } else if($code === '3'){
            $msg = '帳號權限不足';
          }
          echo '<h2 class="error">錯誤：' . $msg . '</h2>';
        }
      ?>
        <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
          <textarea name="content" rows="5"></textarea>
          <?php if ($username && $role >= 0) { ?>
            <input class="board__submit-btn" type="submit" />
          <?php } else if ($username && $role < 0){ ?>
            <h3>您的帳號已被限制發言</h3>
          <?php } else { ?>
            <h3>請登入發布留言</h3>
          <?php } ?>  
        </form>
      <div class="board__hr"></div>
      <section>
        <?php
          while($row = $result->fetch_assoc()) {
        ?>
          <div class="card">
            <div class="card__avatar"></div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author">
                    <?php echo escape($row['nickname']); ?>
                    (@<?php echo escape($row['username']); ?>)
                  </span>
                  <span class="card__time">
                    <?php echo escape($row['created_at']) ; ?>
                  </span>
                  <?php if ($row['username'] === $username || $role > 0) {?>
                  <a href="update_comment.php?id=<?php echo $row['id']?>">編輯</a>
                  <a href="handle_delete_comment.php?id=<?php echo $row['id']?>">刪除</a>
                  <?php } ?>
                </div>
                <p class="card__content"><?php echo escape($row['content']); ?></p>
            </div>
          </div>
        <?php } ?>

      </section>
      <div class="board__hr"></div>
      <?php 
       $stmt = $conn->prepare("SELECT count(id) AS count FROM aidan_board_comments WHERE is_deleted IS NULL");
        $result = $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $count = $row['count'];
        $total_page = ceil($count/$item_per_page);
      ?>
      <div class="page-info">
        <span>總共有 <?php echo $count ?> 筆留言，頁數：</span>
        <span><?php echo $page ?> / <?php echo $total_page ?></span>
      </div>
      <div class="paginator">
        <?php if ($page != 1) { ?> 
          <a href="index.php?page=1">首頁</a>
          <a href="index.php?page=<?php echo $page - 1 ?>">上一頁</a>
        <?php } ?>
        <?php for($print_page = 1; $print_page <= $total_page; $print_page++) { if ($print_page == $page) {?>
                <span class="current__page"><?php echo escape($print_page) ?></span>
            <?php } else { ?>
                <a href="index.php?page=<?php echo $print_page ?>"><?php echo escape($print_page) ?></a>
            <?php }} ?>
        <?php if ($page != $total_page) { ?>
          <a href="index.php?page=<?php echo $page + 1 ?>">下一頁</a>
          <a href="index.php?page=<?php echo $total_page ?>">最後一頁</a> 
        <?php } ?>
      

  </main>
</body>

</html>