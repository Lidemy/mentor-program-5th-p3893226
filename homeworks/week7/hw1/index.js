document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  let isVaild = 0
  const inputs = [document.querySelector('input[name=nickName]'), document.querySelector('input[name=email]'), document.querySelector('input[name=phoneNumber]'), document.querySelector('input[name=knowing]'), document.querySelector('input[name=advice]')]
  const [nickName, email, phone, knowing, advice] = inputs
  // 檢查四個必填欄位
  for (const input of inputs) {
    if (!input.value) {
      input.parentNode.parentNode.classList.remove('done')
    } else {
      input.parentNode.parentNode.classList.add('done')
      isVaild += 1
    }
  }
  // 檢查報名必填欄位
  if (document.getElementById('imagination').checked || document.getElementById('existing').checked) {
    document.getElementById('imagination').parentNode.parentNode.classList.add('done')
    isVaild += 1
  } else {
    document.getElementById('imagination').parentNode.parentNode.classList.remove('done')
  }
  // 顯示輸入資料
  if (isVaild === 5) {
    const types = document.querySelector('input[type=radio]:checked + label').innerText
    alert(`感謝您的填寫，填寫資料如下，
    暱稱：${nickName.value}
    電子郵件：${email.value}
    手機號碼：${phone.value}
    報名類型：${types}
    怎麼知道這個活動的：${knowing.value}
    其他：${advice.value}`
    )
  } else {
    alert('請確認表單內容')
  }
})
