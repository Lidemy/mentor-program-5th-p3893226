## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- mark ：突顯高亮文字，目的是讓這段文字可以在它的上下文中被突顯出來，例如可以用來在搜尋結果中突顯搜尋關鍵字，而瀏覽器預設會用語法高亮的樣式顯示被 mark 住的文字。
- object：用來在網頁中嵌入外部資源，這個資源像是一張圖片、一個 browsing context 或一個瀏覽器外掛 (plugins) 像是 Flash, PDF 等。  
    - 標籤上的屬性 (attributes)：
        - data: 外部資源的位址 (URL)
        - type: 要嵌入的資源的 [MIME type](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
        - typemustmatch: 指定瀏覽器需檢查載入的外部資源的 MIME type 要和設定的 type 屬性一致，增強安全性考量
        - name: 指定此 object 元素的名稱
        - width: 一個數字，指定嵌入內容的顯示寬度，單位是像素 (pixel)
        - height: 一個數字，指定嵌入內容的顯示高度，單位是像素 (pixel)
        - usemap: 指定一個關聯的 `<map>` 元素的 hash-name；值的格式為 # 加 `<map>` 元素的 name 名稱
        - form: 指定一個關聯的 `<form>` 表單元素的 id
- label：用來給表單的控制元件一個說明標題，可以搭配 <label> 的像是 input, textarea, select, button, meter, output, progress 這些表單元件，另外可以增加表單元件的可點擊範圍，就是當你點 label 的文字時，等於你同時點擊了 label 關聯的表單元件。

## 請問什麼是盒模型（box modal）
在 HTML 中的每個元素都可視為一個盒子，調整盒子中的內容，盒中有四個空間，由內至外
 - 內容(content)：裝著元素的真實內容
 - 內邊距(padding)：內容到邊框的空間
 - 邊框(border)：框線
 - 外邊框(margin)：可以說是與其他元素的距離

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
1. **block**：使用 block 前後元素會產生換行，元素寬度會自動填滿該行。  
    - 常見的 HTML 元素包括   
    div、p、h1~h6、  
    ul、ol、li、  
    dl、dt、dd、  
    form、table、hr、  
    blockquote、  
    address、menu、pre ...等
    - 可以設定width、height，但是元素即使設定寬度,仍然是獨占一行。
    - 可以設定margin、padding。

---
2. **inline**：使用 inline 前後元素不會獨占一行，多個相鄰的行內元素會排列在同一行，直到一行排列不下，才會新換一行，其寬度隨元素的內容而變化。
    - 常見的 HTML 元素包括  
    span、em、i、  
    b、strong、a、  
    br、select、textarea、  
    q、bdo、sub、sup ...等
    - width、height 即是文字或圖片的寬度，調整無效
    - 可以設定 margin、padding，但是調整上下會沒有用

---
3. **inline-block**：使用 inline-block 可以使元素具有 block 的寬度高度特性又具有 inline 的同行特性。
    - 可以設定width、height
    - 可以設定margin、padding


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
position 的屬性主要功能是將元素排定在網頁上，亦即元素要呈現在網頁上的哪個位置
- **static**：是瀏覽器排版的預設方式，元素不會特別排定位置，而是按照瀏覽器的配置自動排版，就算是使用 top、bottom、left、right 等來控制皆會被忽視。
- **relative**：中文翻譯為相對位置，元素相對於其他元素的位置，可以使用 top、bottom、left、right 使元素相對偏移**本該出現的位置**。
- **absolute**：中文翻譯為絕對位置，當使用此定位屬性，若父元素定位屬性非 static，則會相對父元素位置來做定位，否則以 body 原點來當作定位基準點。
- **fixed**：相對於瀏覽器來定位，不管網頁卷軸如何下拉，皆不會改變其位置，元素一樣可藉由 top、bottom、left、right 來定位，