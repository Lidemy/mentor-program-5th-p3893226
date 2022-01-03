## Webpack 是做什麼用的？可以不用它嗎？

### 為什麼會有 Webpack？

當開發大型專案時，需要考慮的內容與細節很多，因此程式碼也會相當的龐大、複雜，在流程上就會出現模組化的情形，方便我們來管理、重複使用程式碼，但因為 JS module 所使用的 require、exports語法，瀏覽器並不認識更不能執行，而 Webpack 的出現就是為了能夠將 module 打包成瀏覽器可以執行的檔案。

- Webpack 是一個可以透過自己所撰寫設定檔，下指令來打包所有包括以下各個模組

  1. 各種前處理的過程例如 SASS
  2. 其他別人所開發的 NPM 套件
  3. 圖片檔等資源
  4. 例如 jquery、Bootstrap 方便的 JS 語法

將上述的各個模組打包之後，最後會輸出成瀏覽器看得懂的檔案，方便之後一次部署到線上。

## gulp 跟 webpack 有什麼不一樣？

- gulp
是一套任務管理工具（Task Runner）  
目的：提供自動化與流程管理，整合前端開發環境，藉由簡化工作量，可讓開發者將重點放在功能的開發上  
功能：提供自訂任務流程，例如 babel、scss、壓縮、重新整理、校正時間等

- Webpack
是一套模組整合工具（module bundler）  
目的：利用模組化的概念，將各種資源打包成能在瀏覽器上執行的程式碼  

由此可知，兩者目標其實並不相同，但是均能夠達到部分功能，因此容易被混淆，例如：

1. 使用 Babel 將 ES6 編譯成 ES5 語法
2. 將 SASS 檔編譯成 CSS 檔
3. 壓縮 CSS, JS, 圖檔等

> 簡言之，gulp 是用來管理任務，建構自動化流程的工具；而 Webpack 則是將資源打包，提供模組化開發方式。

## CSS Selector 權重的計算方式為何？

![CSS階級](https://selflearningsuccess.com/wp-content/uploads/2021/07/CSS%E6%A8%A3%E5%BC%8F6%E5%80%8B%E9%9A%8E%E7%B4%9A-1.jpg)

| 標題     | inline style | ID | class | element |
|--------|--------------|----|-------|---------|
| 權重位置 | 0            | 0  | 0     | 0       |

- 權重高低：inline style > id > class、pseudo class、attribute > element
- inline style：(1, 0, 0, 0)
- id 選擇器以 # 表示：(0, 1, 0, 0)
- class 選擇器以 . 表示：(0, 0, 1, 0)
- element ( div, p, li, main, footer... )：(0, 0, 0, 1)
