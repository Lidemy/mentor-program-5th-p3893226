# 教你朋友 CLI
## 什麼是 Command line

h0w 哥你在螢幕畫面點右鍵，會出現新增資料夾的選項，而你用滑鼠移過去再點擊，完成新增資料夾的一系列動作，是透過圖像的方式來操作電腦，叫做使用 GUI 圖形介面操縱。

而另一種是Command line 僅僅透過鍵盤輸入指令操縱電腦的方法，不過在使用前也需要安裝工具喔。

## 如何擁有輸入 Command line 介面

終端機(terminal)：用來跟電腦溝通的介面。

想要在 Windows 上面執行 command line 指令，推薦安裝 git-bash 這個介面

安裝方式很簡單，只要到 Git 官網：[https://git-scm.com/](https://git-scm.com/)

右邊的 Download 點下去，然後安裝的時候一直下一步就行了

## 該如何使用 Command line
### 基本指令
```html
pwd 
```

print working directory 告訴我目前資料夾位置

```html
ls
```

 列出資料夾內所有檔案清單，後面可加參數，加上 -a 可以顯示隱藏檔案、-al 可以顯示更詳細的檔案資訊

```html
cd 資料夾名稱
```

change directory 切換資料夾，加上 .. 回到這層資料夾的上一層，加上 ~ 是 /user/xxx 的位置，~download ，就會跳到路徑/user/xxx/download

```html
man 指令名稱
```

manual 使用說明書（Windows 無此指令）

如果畫面太亂可以使用 clear 清除畫面

### 檔案操作相關

```html
touch 檔案名稱
```

建立檔案或更改檔案修改時間

```html
rm 檔案
```

刪除檔案 加上-f強制刪除檔案

而 rmdir 刪除資料夾

```html
mkdir 
```

建立資料夾，加入空白鍵間隔開，可連續建立

```html
mv 要移動的檔案 去處 or 非去處的名稱
```

移動檔案或輸入非去處的名稱，也可以用來將檔案改名

```html
cp 要複製的檔案 新檔名稱
```

複製檔案，加上 -r 可以複製資料夾

### 編輯器

```html
vim 
```

分為兩種 i 插入模式，於插入模式可編輯文字或按下 esc 進入普通模式，若要離開 vim 於普通模式下輸入 :q or :q!

### 其他命令

```html
grep 關鍵字名稱
```

該指令用於抓取關鍵字 

也可以先使用 cat 顯示檔案內容於終端機上，在使用 grep

```html
wget 下載檔案網址
```

下載檔案 

- windows 加入方法

[](https://git-scm.com/images/logo@2x.png)

```html
curl 網址
```

送出 request 或者加上 -I 需要擷取 header 的資訊可使用

有需要串接 api 可使用

### 組合指令

```html
>
```

redirection > (輸出 file)

```html
>>
```

(新增內容至 file 最後方)

```html
|
```

pipe | (串接指令)，像水管一樣可連接各是指令，將符號左方的輸出變成右方的輸入

## 如何達成需求
>用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。
1. 按下鍵盤 Win+R 叫出執行功能，輸入 cmd 並執行，並在 cmd 中輸入 bash 進入 command line 的模式
2. 先輸入 `pwd` 了解自己的所在位置 `/Users/h0w 哥`
3. 輸入`mkdir wifi`建立叫做 wifi 的資料夾   
4. 輸入`cd wifi`切換到 wifi 資料夾  
5. 輸入`touch afu.js`建立一個叫 afu.js 的檔案
6. 輸入`ls`確認是否有個叫 afu.js 的檔案，有的話就完成囉