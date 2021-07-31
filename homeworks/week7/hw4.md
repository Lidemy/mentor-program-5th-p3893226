## 什麼是 DOM？
1. 「DOM」是由瀏覽器執行環境所提供，所以跟在 node 環境下的 JavaScript 就不會有這個。  
2. 前端開發者就是透過 JavaScript 去呼叫 DOM 提供的 API，進一步透過它們去控制瀏覽器的行為與網頁的內容。
3. DOM 全名為 Document Object Model (文件物件模型)，將 HTML 文件以樹狀的結構來表達。HTML 文件中每個標籤就代表一個節點。
4. DOM API定義了讓 JavaScript 可以存取、改變 HTML 架構、樣式和內容的方法，甚至是對節點加上監聽事件。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件流程(Event flow)：網頁元素接收事件的順序  
  1. 捕獲階段:捕獲階段指的是「從網頁的根節點，也就是 document 開始，逐層往下傳遞」，直到目標元素節點。
  2. 目標階段：捕獲階段完成後，瀏覽器會觸發事件中的任何監聽器，如果在目標階段使用 stopPropagation or stopImmediatePropagation，事件傳遞和冒泡階段皆會停止。
  3. 冒泡階段：冒泡階段指的是「從目標啟動事件的元素節點開始，逐層往上傳遞」，直到整個網頁的根節點，也就是 document。

  ![image](https://miro.medium.com/max/1400/1*tqVhiv1UU6loC8Mily3kpw.png)

## 什麼是 event delegation，為什麼我們需要它？
利用DOM事件傳遞機制 "冒泡"
- 子元素 接收到 點擊事件
- 事件冒泡 往上至母元素 接受到 點擊事件
- 母元素 透過 match 去判斷該子元素應該要做甚麼行為

優點
1. 通常會需要事件代理，是因為假設網頁中每個元素都監聽的話，太浪費資源
意指減少監聽器的數量，會節省不少記憶體資源
Ex:列表下多個Item,利用事件代理只需一個,而非每個Item都掛載監聽器

2. 避免迴圈掛載監聽器，節省 DOM 操作次數

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- stopPropagation也是事件物件（Event）的一個方法，作用是阻止目標元素的冒泡事件，但是會不阻止預設行為。
```js
<div id="parent">
  <a id="child" href="http://www.google.com/" target="_blank">Google</a>
</div>

var child = document.getElementById("child");

// 點擊元素本身的動作將會發生，但是事件傳遞機制將會被停止
child.onclick = function(e) { 
  e.stopPropagation();
  console.log('Stop! no bubbles!'); 
};

// 傳遞機制因為 child 點擊被阻止了，所以訊息將不會被看見 
child.parentNode.onclick = function(e) { 
  console.log('You will never see this message!'); 
};
```
- preventDefault它是事件物件（Event）的一個方法，作用是取消一個目標元素的預設行為。 既然是說預設行為，當然是元素必須有預設行為才能被取消，如果元素本身就沒有預設行為，調用當然就無效了。 
什麼元素有預設行為呢？ 例如連結<a>導航到新的位址，提交按鈕`<input type="submit">`等。