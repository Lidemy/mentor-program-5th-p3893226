const errorMessage = '「系統不穩定，請再試一次」'
const API_URL = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery'
const wrapperClasses = ['wrapper__first', 'wrapper__second', 'wrapper__third', 'wrapper__none']
const prizes = {
  FIRST: {
    title: '恭喜你中頭獎了！日本東京來回雙人遊！',
    className: 'wrapper__first'
  },
  SECOND: {
    title: '二獎！90 吋電視一台！',
    className: 'wrapper__second'
  },
  THIRD: {
    title: '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！',
    className: 'wrapper__third'
  },
  NONE: {
    title: '銘謝惠顧',
    className: 'wrapper__none'
  }
}

// 加上監聽器
document.querySelector('.btn-wrapper').addEventListener('click', () => {
  sendQuest()
})
document.querySelector('.btn-lottery').addEventListener('click', () => {
  sendQuest()
})

// 發送抽獎請求
function sendQuest() {
  const request = new XMLHttpRequest()
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let response
      try {
        response = JSON.parse(request.responseText)
      } catch (error) {
        alert(errorMessage)
        return
      }
      if (!response) {
        alert(errorMessage)
        return
      }
      const { prize } = response
      try {
        lottery(prize.toUpperCase())
      } catch (error) {
        alert(errorMessage)
      }
    } else {
      console.log('err')
      alert(errorMessage)
    }
  }
  request.onerror = function() {
    alert(errorMessage)
  }
  request.open('GET', API_URL, true)
  request.send()
}

// 更換背景圖片及顯示文字
function lottery(item) {
  document.querySelector('.lottery__des').innerText = prizes[item].title
  document.querySelector('.wrapper').classList.remove(...wrapperClasses)
  document.querySelector('.wrapper').classList.add(prizes[item].className)
  document.querySelector('.lottery__message').classList.remove('hide')
  document.querySelector('.activity__content').classList.add('hide')
}
