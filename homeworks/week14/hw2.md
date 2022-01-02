# 部署

原以為部署會遇到很多困難，但跟著學長姊的[文章](https://hackmd.io/@Heidi-Liu/note-website-deployment#%E8%A8%AD%E5%AE%9A%E5%9F%9F%E5%90%8D)，就順利完成部署，真的少走很多冤枉路。  
雖然中間有遇到 unprotected private key file! 的問題，不論怎麼修改私鑰的權限都沒有辦法解決，最後是將私鑰 cp 到 ~\.ssh 並透過這個路徑的私鑰連線，才順利解決這個問題，但也沒有繼續深入追究究竟為什麼會這樣。

---

## 稍微紀錄一下流程

1. 選擇主機(這裡選擇 AWS EC2 的主機)

    - 註冊會員
    - 選擇 EC2 的服務
    - 選擇要運行的環境 (Ubuntu Server)
    - 逐步完成設定(主機等級、防火牆設定...等等)
    - 透過 AWS 提供的私鑰進行連線(介面為 CLI)

2. 將 Server 的版本更新到最新，避免安全性漏洞

3. 設定 LAMP 的運行環境
    - 安裝 Tasksel
    - 以 Tasksel 套件來安裝 lamp-server

4. 設定好資料庫(這邊使用 phpmyadmin)
    - 密碼設定
    - 登入設定更改

5. 購買域名(domain)
    - 使用 gandi 來購買，感謝老師助教提供的優惠碼
    - 記得將 DNS 的設定改為主機 IPv4 位址

6. 運用 Cloudflare 加上鎖頭
    - 註冊會員，選擇免費方案
    - 回到 gandi 更改名稱服務器
    - 使用外部名稱服務器

      bradley.ns.cloudflare.com  
      gene.ns.cloudflare.com

    - 檢視設定>設定建議中>啟用一律使用 HTTPS

7. 放上自己的程式到伺服器上，完成!!
