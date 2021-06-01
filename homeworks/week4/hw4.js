const request = require('request')

request.get({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'qjpnjipu6xlq7oul7tfrham7je85ir'
  }
}, (error, response, body) => {
  if (error) { // 發送 request 的流程有問題，未收到 response 回報
    return console.log('獲取失敗', error)
  }
  let data // 處理 response 型態轉換
  try {
    data = JSON.parse(body)
  } catch (error) {
    console.log('資料型態出錯囉!!!', error)
    return
  }
  console.log(data.top)
  data.top.forEach((element) => console.log(`${element.viewers} ${element.game.name}`))
}
)
