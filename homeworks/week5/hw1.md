## 前四週心得與解題心得
前四週的作業大概只有前兩週的作業試準時交出來，長久以來學習上最學問的習慣，影響到自己的進度，但主要還是自己時間上的安排，時常沒有照著安排好的進度進行，雖然看著老師的隨意聊刻意提醒自己學習上的習慣要改，但說實在很難輕易改變自己的習慣，交作業的時間真的很容易，因為一週的落後，就對自己寬容，漸漸的就脫隊了。

但以課程上來說，我很喜歡上課，至今學的東西，雖然以前沒有碰過，但是在老師淺顯易懂的影片下，也能夠找到一點成就感，雖然還不是能夠上檯面，但至少對於程式碼並不排斥；還有像是版本控制、網路 api 的串接，過程中難免會有點焦慮，但看到成功的結果後，真的很開心，希望後續對於課程上的挑戰也能夠秉持這樣的心情去面對。

課程上我很喜歡老師教導的方式，透過影片來傳授大概念，也不限制學習的工具或管道，讓我們自己學會查找資料，過濾資訊，吸收成為自己的知識，養成自己的學習流程，另外課程上有進度報告的系統，也有看到部分學員有遇到挫折的狀況，不免小小安慰道有時卡觀的自己，這種感覺讓自己並不孤單，有人也為了同樣的目標在堅持著，在耍廢的時候，光想到這個有激起了自己的鬥志，但其實四週以來，最大的收穫是，如何面對自己的時間安排及執行效率，有一種更了解自己的感覺。

## 解題心得
### Lidemy HTTP Challenge
很喜歡這樣的關卡設計，很像是 RPG 關卡，解一解半天就過去了，也能夠理解自己對於 request 有沒有理解，結果卡最久的部分竟然是 token 一開始還沒意會到它的意義，不知道如何進到下一關，這聽起來可能很荒謬，但就是在學習的階段，不求甚解的結果。
大部分的題目都能夠運用 JS 的 request 套件來完成，雖然只解到了第十關，但是如果後續有空的話，能夠把後面的關卡解一解感覺也不錯，這關卡讓我對於第四週的內容，有複習的作用，玩遊戲之餘又能複習真的太高明了。
### LIOJ 
LIOJ 的系統還要考慮輸入資料的處理，也要自己想 Edge case 來避免程式碼失敗，很多時候自己用 node.js 跑結果沒有問題，但是放到 LIOJ 上卻是失敗的很挫折，所以有點像是在考驗你找 Edge case 的能力。
#### 不合群的人
```js
function solve(n) {
  const totalPlayers = n[0]
  let chooseA = 0
  for(i = 1; i <= totalPlayers; i++) {
    if(n[i] === 'A'){
      chooseA+= 1
    }
  }
  const chooseB = totalPlayers - chooseA
 if (chooseA === chooseB|chooseA === 0|chooseB === 0) {
  console.log('PEACE')
 }else{
  const moreChoose = chooseA > chooseB ? 'A':'B'
  for(i = 1 ;i <= totalPlayers; i++) {
    if(n[i] !== moreChoose) {
      console.log(i)
    }
   }
  }
}
```
這題的思路是參考老師的 hint 將原本需要用迴圈計算的變數從兩個變成一個，不然原本是要用兩個迴圈算出來，在做人數比較，最後再找出不是最多人選的序號。
#### 貪婪的小偷
```js
function solve(lines) {
 let C = Number(lines[0])
 let N = Number(lines[1])
 let arr = []
 let sum = 0
 for(i= 2;i <= N + 1;i++){
  arr.push(lines[i])
  }

 if(C > N){
    arr.map((x)=> {
    sum+= Number(x)
    })
  }else{
   arr.sort(function(a,b){
     return b - a
   })
   for(i = 0; i <= C - 1; i++){
      sum += Number(arr[i])
  }
}
  console.log(sum)
 }
```
這題是在上課時就做出來的，所以詳細過程有點忘了，但回頭看發現自己那時還不太知道資料輸入的格式，還重新創造了一個陣列，來處理資料，然後這題使用的 map 內建函數，後來發現其實我要的目的透過 forEach 就可以做到，發現的過程中，也順便也搞清楚了其中的差別，捨棄用 for 迴圈的寫法。

#### 大平台
```js
function solve(n) {
  const arr = n[1].split(' ').map(Number)
  let platformLength = 0
  for(i = arr[0] ; i <= arr[arr.length - 1]; i++) {
    let temp = 0
    for(j = 0; j < arr.length; j++){
      if(arr[j] === i) {
        temp ++
      }
    }
    if(temp > platformLength) {
      platformLength = temp
    }
  }
  console.log(platformLength)
}
```
這題用了雙重迴圈，先找出數列中的數字，在與數列中的每個字做比對，若有重合，數字的長度就會增加，藉由這樣的方式來找出平台的長度，但不知道還有沒更有效率的方法能夠減少需要比對的數字。