## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

### 什麼是 DNS？

域名系統（Domain Name System, DNS）
>將好記憶的網域名稱（domain name），轉換成實際的IP地址。往往是所有請求的第一站。

DNS 服務是一種全球分佈的服務，它將 www.example.com 這種人們可讀取的名稱轉換為 192.0.2.1 等數字 IP 地址，供電腦用於互相連接。網際網路 DNS 系統的工作原理和電話簿類似

### Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

Google Public DNS 是一個免費、全域的網域名稱系統（DNS）解析服務，可以用來取代目前的 DNS 提供者，Google DNS 的特色是解析速度快、安全性與可靠性佳，能夠使上網的速度更快更穩定。

#### 對使用者的好處

1. 只需要將 Google Public DNS 設定為上網時慣用的 DNS 伺服器，就能透過 Google DNS 進行上網時的網頁解析，因為有快取功能，可以加速頁面的檢索速度、以及縮短 DNS 更新時間。而 Google Public DNS 也能使你上網更安全，它會自動篩選並過濾掉惡意網站。

#### 對 Google 的好處

1. 透過搜尋引擎來蒐集大數據，藉以分析使用者行為，以應用於商業目的
2. 日後可提供更符合該使用地區的資料，或是投放更精準的廣告

## 什麼是資料庫的 lock？為什麼我們需要 lock？

### 為什麼需要 Locks

因為多筆交易在資料的讀取與寫入的時候，彼此會相互影響，因此為了交易的concurrency與 isolation ，資料的讀取或是寫入的時候就會被做一個記號，這個記號用來告知該資料正在被讀取或是寫入的狀態，其他交易根據這個記號來決定是否要等待到該紀錄狀態結束或是直接讀取該資料，而該”記號”就是所謂的 Locks

舉例來說:
今天我有一樣商品的庫存量還剩下 2 個，但同時有 A、B 兩位使用者幾乎在同時下單要購買剩下的這最後 2 個庫存，這時可能就會發生超賣的情形，所以我們就需要 LOCK 這個功能，確保 A 的訂單在修改資料庫時不會被 B 影響，以保持伺服器回傳正確的結果。

## NoSQL 跟 SQL 的差別在哪裡？

### 這邊先簡單的介紹一下什麼是 NoSQL

NoSQL是Not Only SQL的縮寫，和剛才前面介紹的不同是，NoSQL 資料庫是一種非關聯式資料庫，將資料儲存為類似 JSON 的文件，並對資料進行查詢，這是一個 document 資料庫模型，在這個模型中，資料並不存儲在 Table 中，doucment 是 key-value 的有序集合。資料庫中的每個doucment 不需要具有相同的數據結構，你可以將資料儲存在 JSON、XML文件甚至CSV文件 ，我下方使用紀錄書籍資訊的JSON格式作為範例，讓你更容易理解。

這是使用JSON格式紀錄的書籍資料，這裏有兩本書，分別是「斜槓青年」與「巴菲特寫給股東的信」，使用key-value 的方式紀錄資料，像是書名的key值，就是title，value值就是「斜槓青年」，這樣我們在找資料時，只要搜尋key值title等於「斜槓青年」，就可以找到資料。

``` javascript
[
    {
        "year" : 2017,
        "title" : "斜槓青年",
        "info" : {
            "release_date" : "2017-09-01",
            "rating" : 8.2,
            "genres" : ["生涯規劃", "商業理財"],
            "plot" : "全球職涯新趨勢，迎接更有價值的多職人生",
            "actors" : "Susan Kuang"
        }
    },
    {
        "year": 2017,
        "title": "巴菲特寫給股東的信",
        "info": {
            "plot": "巴菲特親筆撰述唯一著作",
            "rating": 8.3
        }
    }
]
```

但是存取資料的方式，必須使用資料庫系統提供的 API 才能夠新增、修改、刪除資料，也就是需要透過程式語言呼叫特定的函式，或是使用資料庫系統 提供的指令，遠端連線執行後才能存取資料，像是Amazon 的雲端服務AWS，也有提供NoSQL的資料庫服務，名稱是DynamoDB，下面是一段使用 Python 程式語言搜尋「斜槓青年」這本書的簡單範例，其中最重要的是有中文「斜槓青年」這一行，搜尋的方式是使用 Key 物件，使用函式eq判斷書名是否相同，如果相同就會將書籍資料回傳，並且可以透過下面for 迴圈一本一本找出來，列印出書名或其他相關資訊。

```python
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb', endpoint_url='http://localhost:8000')
table = dynamodb.Table('Book')
response = table.query(KeyConditionExpression=Key('title').eq('斜槓青年'))
for book in response['Items']:
        print(book['title'])
```

NoSQL 資料庫的優點是它們能夠處理大量的結構化或半結構化數據，更容易擴展，並且能夠提供高可用性。使用NoSQL 資料庫的一些好例子包括：事件記錄（例如存儲用戶登錄）、電子商務應用（存儲用戶購物車的數據）和即時的分析。

### SQL與NoSQL的比較

雖然 NoSQL 資料庫與關聯式資料庫相比確實有一些優勢，但也有很多缺點。數據一致性和數據完整性是NoSQL資料庫的主要問題，另一個缺點是缺乏標準化。例如SQL 語法適用於所有關聯式資料庫（MySQL、Oracle、MS SQL等），雖然一些特定的函式，語法上有些差異，但大致來說都是使用SQL 的語法操作資料庫，而NoSQL資料庫沒有這樣的標準語言，不同的NoSQL資料庫之間存在很大的差異，剛才上面是使用AWS DynamoDB 範例，我們需要匯入AWS的套件，以及使用特定的函式操作，但如果是使用另一個NoSQL資料庫，像是Firebase，那就需要匯入另一個套件和使用另一組函式來操作資料庫，所以學習SQL 程式語言會是CP值更高的一種投資，因為你不用再另外花時間學習多個操作資料庫的方法。

### NoSQL DB 的缺點

1. 不易轉換
不像關聯式資料庫有共通的標準語言 —— SQL，各種 NoSQL 都有自己的 API。所以一旦選定某種 NoSQL 產品，便不易再轉換至其他產品，比方說由 MongoDB 轉換為 Couchbase。
2. 不支援 ACID
ACID 可說是「Transaction」的構成要件，也是所有關聯式資料庫的主要特性。但大部分的 NoSQL DB 都不保證 ACID，必須使用一些變通技巧來實現（MongoDB 可使用 2 Phase Commits）。
3. 不支援 JOIN
因為 NoSQL DB 是 Non-relational 的，所以不支援 JOIN 操作。

## 資料庫的 ACID 是什麼？

ACID 分別代表

1. Atomicity (原子性) : 資料操作不能只有部分完成。一次的 transaction 只能有兩種結果：成功或失敗
2. Consistency (一致性)：transaction 完成前後，資料都必須永遠符合 schema 的規範，保持資料與資料庫的一致性
3. Isolation (隔離性)：資料庫允許多個 transactions 同時對其資料進行操作，但也同時確保這些 transaction 的交叉執行，不會導致數據的不一致
4. Durability (耐久性)：transaction 完成後，對資料的操作就是永久的，即便系統故障也不會丟失

參考資料:

1. <https://tw.alphacamp.co/blog/mysql-intro-acid-in-databases>
2. <https://www.qa-knowhow.com/?p=383>
3. [什麼是SQL？什麼是NOSQL? 用簡單範例看一下他們的差異吧！](https://codegym.tech/blog/sql_vs_nosql.html)
4. [[week 14] 後端基礎：資料庫 & 系統設計](https://hackmd.io/@Heidi-Liu/note-database-and-system-design)
4. [What is DNS? | How DNS works](https://www.cloudflare.com/zh-tw/learning/dns/what-is-dns/)
6. [什麼是 DNS？](https://aws.amazon.com/tw/route53/what-is-dns/)
