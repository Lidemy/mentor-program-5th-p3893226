<?php
  require_once("conn.php");

  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');

  if(
    empty($_POST["content"]) ||
    empty($_POST["nickname"]) ||
    empty($_POST["site_key"])
  )
  {
    $json = array(
      "ok" => false,
      "message" =>"資料填寫不完全"
    );
     
    $response = json_encode($json);
    echo $response;
    die();
  }

  $nickname = $_POST['nickname'];
  $content = $_POST["content"];
  $siteKey = $_POST["site_key"];
  
  $sql = "INSERT INTO aidan_discussions(nickname, content, site_key) 
          VALUES(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $nickname, $content, $siteKey);
  $result = $stmt->execute();
  if (!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $json = array(
    "ok" => true,
    "message" => "成功！"
  );
  
  $response = json_encode($json);
  echo $response;
?>