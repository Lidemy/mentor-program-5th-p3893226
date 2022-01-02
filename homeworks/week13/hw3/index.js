/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
const errorMessage = "出錯了";
const API_URL = "https://api.twitch.tv/kraken";
const CLIENT_ID = "qjpnjipu6xlq7oul7tfrham7je85ir";
const ACCEPT = "application/vnd.twitchtv.v5+json";
const STREAM_SAMPLE = `        <div class="streams">
<a href=$url target="_blank">
<img class= stream__preview src="$preview" width="180">
<div class="streams__des">
  <img  class=streamer__avatar src="$avatar" alt="">
  <div class="streamer__detail">
    <div class="streamer__title">$title</div>
    <div class="streamer__name">$name</div>
  </div>
</div>
</a>
</div>`;

getGames();
document.querySelector(".navbar__list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const gameName = e.target.innerText;
    switchGame(gameName);
  }
});

async function getGames() {
  // 獲取遊戲資料
  const API_URL1 = `${API_URL}/games/top/?limit=5`;
  const headers = {
    Accept: ACCEPT,
    "Client-ID": CLIENT_ID,
  };
  const response = await fetch(API_URL1, {
    method: "GET",
    headers,
  });
  try {
    const games = await response.json();
    appendTopGame(games);
  } catch (err) {
    alert(errorMessage);
  }
}

function appendTopGame(games) {
  const gameList = games.top.map((element) => `${element.game.name}`);
  for (const game of gameList) {
    const element = document.createElement("li");
    element.innerText = game;
    document.querySelector(".navbar__list").appendChild(element);
  }
  switchGame(gameList[0]); // 顯示預設遊戲
}

function switchGame(game) {
  // 切換遊戲
  document.querySelector(".title").innerText = game; // 改變標題
  document.querySelector(".wrapper__streams").innerText = ""; // 清除預設內容
  getStreams(game);
}

async function getStreams(gameName) {
  // 獲取實況資料
  const API_URL2 = `${API_URL}/streams?game=${encodeURIComponent(gameName)}`;
  const headers = {
    Accept: ACCEPT,
    "Client-ID": CLIENT_ID,
  };
  const response = await fetch(API_URL2, {
    method: "GET",
    headers,
  });
  try {
    const streams = await response.json();
    const streamsList = streams.streams;
    appendStream(streamsList);
  } catch (err) {
    alert(errorMessage);
  }
}

function appendStream(streams) {
  // 渲染實況內容
  for (const stream of streams) {
    const element = document.createElement("div");
    element.innerHTML = STREAM_SAMPLE.replace("$url", `${stream.channel.url}`)
      .replace("$preview", `${stream.preview.large}`)
      .replace("$avatar", `${stream.channel.logo}`)
      .replace("$title", `${stream.channel.status}`)
      .replace("$name", `${stream.channel.name}`);
    document.querySelector(".wrapper__streams").appendChild(element);
  }
}
