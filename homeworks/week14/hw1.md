# 短網址系統設計

> 請你畫出一張短網址服務的後端系統架構圖，越詳細越好，可以考慮到如何增進效能、scaling 以及備份資料。

主要是參考學姊的筆記對照理解後額外在自己畫一張。
![TinyUrl](https://i.imgur.com/ccp90QC.png)

## Load Balancer

**什麼是負載平衡器（Load Balancer）？**  
負載平衡器提供了類似是路由器的功能，能幫你自動分配新進來的請求要導到哪一台 Server。  

**為什麼你需要它？**  
假設你原本只有開單台機器運行一個網站，可是某一天你的服務突然撐不住了，這時候你可以重買一台規格比較好的（Scale Up），也可以買一台比較便宜差不多的然後兩台分散（Scale Out）。  
可是若是你要開多台分散，就會遇到一個問題，你的網站只有一個網址，要怎麼自動分散導到這兩台呢？  
這個時候通常你就需要負載平衡器（Load Balancer）了！

參考資料：  
[短網址系統設計](https://codemonkey.coderbridge.io/2021/07/11/web-structure-design/)  
[[week 14] 後端基礎：資料庫 & 系統設計](https://hackmd.io/@Heidi-Liu/note-database-and-system-design)  
[系統設計101—大型系統的演進（上）](https://medium.com/%E5%BE%8C%E7%AB%AF%E6%96%B0%E6%89%8B%E6%9D%91/backend-architecture-101-5c425e760a13)