const errorMessage = '出錯了'
const API_URL = 'https://api.twitch.tv/kraken'
const CLIENT_ID = 'qjpnjipu6xlq7oul7tfrham7je85ir'
const ACCEPT = 'application/vnd.twitchtv.v5+json'
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
</div>`

getGames((games) => {
  const gameList = games.top.map((element) => (`${element.game.name}`))
  for (const game of gameList) {
    const element = document.createElement('li')
    element.innerText = game
    document.querySelector('.navbar__list').appendChild(element)
  }
  switchGame(gameList[0]) // 顯示預設遊戲
})

document.querySelector('.navbar__list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const game = e.target.innerText
    switchGame(game)
  }
})

function getStreams(gameName, callback) { // 獲取實況資料
  const request = new XMLHttpRequest()
  const API_URL2 = `${API_URL}/streams?game=${encodeURIComponent(gameName)}`
  request.open('GET', API_URL2, true)
  request.setRequestHeader('Accept', ACCEPT)
  request.setRequestHeader('Client-ID', CLIENT_ID)
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      let streams
      try {
        streams = JSON.parse(request.responseText)
      } catch (error) {
        alert(errorMessage)
        return
      }
      if (!streams) {
        alert(errorMessage)
      }
      const streamList = streams.streams
      callback(streamList)
    }
  })
  request.send()
}

function getGames(callback) { // 獲取遊戲資料
  const requestGames = new XMLHttpRequest()
  const API_URL1 = `${API_URL}/games/top/?limit=5`
  requestGames.open('GET', API_URL1, true)
  requestGames.setRequestHeader('Accept', ACCEPT)
  requestGames.setRequestHeader('Client-ID', CLIENT_ID)
  requestGames.addEventListener('load', () => {
    if (requestGames.status >= 200 && requestGames.status < 400) {
      let games
      try {
        games = JSON.parse(requestGames.responseText)
      } catch (error) {
        alert(errorMessage)
        return
      }
      if (!games) {
        alert(errorMessage)
      }
      callback(games)
    }
  })
  requestGames.send()
}

function switchGame(game) { // 切換遊戲
  document.querySelector('.title').innerText = game // 改變標題
  document.querySelector('.wrapper__streams').innerText = '' // 清除預設內容
  getStreams(game, (streamList) => {
    for (const stream of streamList) {
      appendStream(stream)
    }
  })
}

function appendStream(stream) { // 渲染實況內容
  const element = document.createElement('div')
  element.innerHTML = STREAM_SAMPLE
    .replace('$url', `${stream.channel.url}`)
    .replace('$preview', `${stream.preview.large}`)
    .replace('$avatar', `${stream.channel.logo}`)
    .replace('$title', `${stream.channel.status}`)
    .replace('$name', `${stream.channel.name}`)
  document.querySelector('.wrapper__streams').appendChild(element)
}
