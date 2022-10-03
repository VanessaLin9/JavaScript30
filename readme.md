# JavaScript30

---

#### 這是 clone 至 [javaScript30 挑戰](https://javascript30.com/)

連續 30 天使用 vanillaJs 完成一些小專案的挑戰
每天的小筆記紀錄在下面

---

### 01. Drum Kit

```
audio.currentTime
退回到指定秒數，解決上一次還沒播完不能再按的問題

Array.from() 直接把一堆可迭代物件建立成一個array

transitionend : 指定 transition end
因為transition寫all,所以會有很多個
指定其中的transform

```
- [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event)
- 方便的[查 keycode 的網站](https://www.toptal.com/developers/keycode)
---
### 02. JS and CSS clock
```
transform-origin:
default設定是50%(中心為轉點)
改成100%固定在一頭(0%時在另一頭)

transition: <property> <duration> <timing-function> <delay>
平常比較少把timing-function拉開來寫
這個會抖動的效果很適合做時鐘

Date.getHours()
會是24小時制(不過繞超過一圈沒影響)

min/hour第二個角度數值讓時針跟分針走的更平順
把每分鐘(小時)要走的格數拆成好幾次走
```
---
### 03. CSS variables
```
其實原生的css就有可以設定變數名稱的功能
--base: #ffc600 (宣告，格式前方要使用--)
color: var(--base) (使用，用var())

querySelectorAll()
吐出來的東西是NotList(不是array)
內建的function比較少，不過還是有forEach可用

addeventListener()
'change' 確定值被改變的時候觸發，所以按著滑鼠拉還沒放下時不會觸發
'mousemove'會偵測滑鼠移動

dataset 吐出來是object
抓root的style然後重設的語法是重點
```
---
### 04. Array Cardio Day 1
```
一些基本的array練習，難度應該不到Easy
不過還是有可以學習的地方

console.table() 可以直接看table!!!!

上一個挑戰說過，querySelectorAll出來的會是NodeLink 不是 array
pototype 裡面能用的內建function很少(沒有map)
轉成array:
1. Array.from()
2. [...展開]

hash table也可以直接用reduce寫

```
---
### 05. Flex Panel Gallery
```
css selector 有加了 >*
刪掉在chrome 跟 edge裡看不出差異
(但是空格留不對反而會有bug)
(推測應該是各瀏覽器相容的部分?或是舊版相容問題?)

toggleActive 那邊要用includes('flex')
影片中說明是 safari 是flex-grow chrome是flex 寫死=== flex 選取上會有問題
不過我查了一下 can i use 好像已經沒有這個問題了(?) 
而且我chrome 顯示的property 也是flex-grow
不過就先這樣
```
---
### 06. Type Ahead
```
這集學到的超多讚讚

fetch return 的是promise物件(常忘記)

字串的搜尋.match() 
除了直接給string 也可以給正規表達式

宣告一個正規表達式除了使用/ / 以外
還可以 new RegExp(string寫需要的, flags)
適合用在這次這種要塞變數的場合
這邊flags裡用到的 
'g': global search, 'i': 不比對大小寫

用String.replace(要比對字串(RegExp), 取代的字串)
做出比對相同的字串處換樣式
```
- [mdn: Regular Expression](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)
---
### 07. Array Cardio Day 2
```
array 其他常用的函式複習
.some() return boolean 有一個符合就true
.every() return boolean 全部都符合才true

.find() return 找到的值(在這題是object)
.findIndex() return 符合的 index

.splice() 剪切原array 可用變數接到被切掉的那個值
.slice() 不改變原array 
```
---
### 08. Fun with HTML5 Canvas
```
自己建一個小畫家!! 超讚
使用html5原生的 canvas標籤來玩

起手式:
使用 .getContext() 取得渲染環境 
使用canvas屬性調整長寬大小
(mdn有寫不建議用外部css去調整)

.strokeStyle 設定勾勒圖形用的顏色(填滿用fillStyle)
.lineCap 指定線條端點樣式(有三種可選，見mdn)
.lineJoin 指定兩線連接處的樣式(也有三種可選，見mdn)
.lineWidth 指定線粗細

.beginPath() 產生一個路徑
.move(x, y) 畫筆移動到這個點
.lineTo(x, y) 從目前繪點畫一條直線到這個點

hsl(0~360, saturation%, lightness%)
參數1可用數字表示一個紅色開始(0)紅色結束(360)的彩虹色, 
參數2是飽和度,3是亮度

globalCompositeOperation 有許多參數可以玩
```
- [mdn: canvas](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [mother effing hsl](https://mothereffinghsl.com/)
- [globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)