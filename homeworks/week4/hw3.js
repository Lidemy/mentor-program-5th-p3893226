const request = require('request')
const process = require('process')

const countryName = process.argv[2]
const apiEndpoint = 'https://restcountries.eu/rest/v2/name/'

listInformations(countryName)

function listInformations(countryName) {
  request(`${apiEndpoint}${countryName}`, (error, response, body) => {
    if (error) { // 發送 request 的流程有問題，未收到 response 回報
      return console.log('獲取失敗', error)
    }
    let informations // 處理 response 型態轉換
    try {
      informations = JSON.parse(body)
    } catch (error) {
      console.log('資料型態錯誤', error)
    }
    if (informations.message === 'Not Found') { // 關鍵字未有可顯示結果
      return console.log('找不到國家資訊')
    }
    for (let i = 0; i < informations.length; i++) { // 找到結果並顯示
      console.log(`============
國家：${informations[i].name}
首都：${informations[i].capital}
貨幣：${informations[i].currencies[0].code}
國碼：${informations[i].callingCodes}`)
    }
  })
}
