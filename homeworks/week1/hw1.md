# 交作業流程
---
1. 每週完成作業內容
2. 本地已有 master 的 branch，每有新的作業就另外開 branch

    ```
    git branch week1
    ```

3. 切換到 branch week1

    ```
    git checkout week1
    ```

    或合併2、3

    ```
     git checkout -b week1
    ```

4. 將寫完的作業 commit 到新的 branch 

    ```
    git commit -am "第一週作業" 
    ```

5. 確認作業沒有問題，將作業同步到 Github 上 

    ```
    git push origin week1
    ```

6. 到 Github 上 Lidemy 上自己的 Repoitories 點選 Compare & pull request
7. 查看 Files changed，確認作業沒問題
8. 將PR連結貼到課程學習系統上，並確認作業沒有問題
9. 助教改完後，會在 Github 進行 merge 
10. 切換到本地的 master ，準備同步

    ```
    git checkout master
    ```

11. 將改完的作業拉下來同步 

    ```
    git pull origin master
    ```

12. 同步以後，將本地端的 branch 刪除

    ```
     git branch -d week1
    ```