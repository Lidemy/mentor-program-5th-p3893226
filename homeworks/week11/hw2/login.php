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
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>Welcome back</h1>
    </div>
  </section>
  <div class="login-wrapper">
    <h2>Login</h2>
    <form action="handle_login.php" method="POST">
      <div class="input__wrapper">
        <div class="input__label">Account</div>
        <input class="input__field" type="text" name="username" />
      </div>
      <div class="input__wrapper">
        <div class="input__label">Password</div>
        <input class="input__field" type="password" name="password" />
      </div>
    <?php 
        if (!empty($_GET['errCode'])) {
          $getCode = $_GET['errCode'];
          $errorMsg = 'Error';
          if ($getCode === '1') {
            $errorMsg = 'Please enter a valid account or password';
          } else if ($getCode === '2') {
            $errorMsg = 'account or password incorrect';
          };
          echo '<div class ="error">' . $errorMsg . '</div>';
        }
    ?>  
      <input type='submit' value="Continue" />
    </form>
  </div>
</body>
</html>