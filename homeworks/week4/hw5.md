## 請以自己的話解釋 API 是什麼
- 使用 API 的目的：主要拿來**交換資訊**
- 生活中常見的例子：  
某些購物網站會使用 Facebook 的登入系統，提供購物網站使用者更快速的憑證登入，不需要再額外花時間註冊新的帳號。
- 所以究竟 **API 是什麼**？  
英文全名 application programming interface，主要著重於 interface 這詞，中文翻譯為介面，主要制定一個統一的標準格式，好讓大家透過標準，來交換資料(包含擷取、提供資料)，而 API 就是中間的途徑媒介。
- API 對於**購物網站**的意義：  
能夠運用擷取使用者已經在 Facebook 所註冊的資訊，生日、帳號圖片等等 Facebook 所提供的資料
- API 對於 **Facebook** 的意義：  
利用 API 提供部分資訊給需要的開發者，可以讓開發者新增 Facebook 帳號登入的功能，若有不可公開的資料也能透過 API 的設定選擇不提供，比起提供整個後端資料庫給開發者還要來的好。



## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- **204 No Content**：成功，但沒有回傳的內容（ 例如發出 Delete 的 request ）
- **502 Bad Gateway**：通常是伺服器的某個服務沒有正確執行
- **418 I’m a teapot**：我是一個茶壺，不會泡咖啡。  
用戶端錯誤碼表明了伺服器是個（永久性的）茶壺，所以拒絕煮咖啡。一個結合了咖啡與茶壺的壺子暫時沒咖啡的情境，應該回傳 503。這個錯誤是源自於 1998 與 2014 的愚人節玩笑「超文字咖啡壺控制協定」（Hyper Text Coffee Pot Control Protocol）

>參考資料：[常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL：https://restaurants-in-taiwan.com
| 說明             | Method | path         | 參數                    | 範例                  |
|----------------|--------|--------------|-----------------------|-----------------------|
| 回傳所有餐廳資料 | GET    | /restaurants | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
|回傳單一餐廳資料  |GET    |/restautants/{id}|無|/restaurants/7
|刪除餐廳         |DELETE |/restaurants/{id}|無|無|
|新增餐廳         |POST   |/restaurants|name:餐廳名|無|
|更改餐廳         |PATCH  |/restaurants/{id}|name:餐廳名|無|