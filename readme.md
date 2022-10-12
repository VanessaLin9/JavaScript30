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

---

### 09. Must know Dev Tools Tricks

```
console 的各種使用方式
直接看code就=筆記🤠
```

---

### 10. Hold shift and check checkedBox

```
類似Gmail的多選功能;
checkbox點了一個之後
按住shift鍵，再點另一個 = 中間所有的checkbox都已選

click event 裡面有shiftKey，值是boolean
顯示click時shift鍵有沒有被按住
(仔細看還有altKey
、ctrlKey、metaKey等等都有監聽)

困難點在於抓到兩次點擊的區間有誰
原理是用一個boolean變數isBetween去toggle:

[第一次點擊]
(沒按shift不進判斷式)紀錄成lastChecked

[第二次點擊的同時按者shift]
(進入if判斷式)-> 所有input一個一個檢視
碰到這次點擊的跟上次點擊的做 isBetween的 toggle:
false..(上次點擊or這次點的)true.....(上次點擊or這次點的)false

然後再將 isBetween true 的都給他 checked 就完成了
```

---

### 11. Custom Video Player 🎞

```
HTML 的 video 標籤應用! 手做撥放器

video標籤內建多種event可用
.play
.pause
.timeupdate 監聽video時間改變

video.paused 回傳 boolean
video.currentTime 當下播放到的長
video.duration 總長
parseFloat() 字串轉浮點數

播放條可拆分成兩部分:
1. 隨著播放時間調整bar條長短:
video監聽timeupdate事件，可以不用寫setInterval
觸發handleProgress去調整長短

2. 拉動Bar條調整播放時間
細分為: 1. 點擊bar條調整 2. 拖動bar條調整
調整的部分使用 scrub()
拖動判定設置變數mouseDown 做為開關

```

- [Mdn: HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
- [flexBasis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)

---

### 12. Key Sequence Detection
```
輸入特定的字串有隱藏的網頁小彩蛋

監聽Keyup事件
array.splice(start, delete, add)的複習
start 傳負數的話會從尾巴往前算
delete 不設的話從start開始的都會刪光、傳負數或0的話一個都不刪
add 選填，不填就不加

```
---

### 13. Slide in on Scroll
```
實作捲動卷軸的時候，當滑到相對應的位置
再動畫把圖片滑入

console.count() 可以計算console的次數
在這邊滾動卷軸的時候會呼叫非常多次function
使用debounce可以有效優化
用 console.count()可以看到顯著差異

藉由上面的count也可以提醒
有時候會寫出像這種滑鼠隨意滑一下就跑上百次function的狀況，要注意到並且加上debounce避免太過浪費效能

設定滾到照片一半的高度的時候動畫滑進來
學到使用scrollY可以抓到滾到的高度
還有內件的offsetTop可以抓到定位點與頂點的高度
```
---
### 14. Javascript reference VS Copying
```
 call by reference VS call by value 的概念
 因為不能直接用= 會變call by reference

 [array] 整理了數個copy array的方式

 1. .slice(start, end) return array
    原array的shallow copy 
    start預設為0, end預設為最後一個
 2. .concat() return array
    不會改變原本已存在的array，是回傳一個新的(shallow copy)
 3. ES6的新選擇: spread syntax
    mdn說copy的效果類似.slice()
    還沒看到底層怎麼做的不過先歸類shallow copy
 4. Array.from() mdn說明是建立陣列實體之後對原array(類array)執行.map()

 作者說3. 4.是他自己喜歡使用的方式

  [object] 整理了數個copy object的方式

 1. Object.assign() return object
    用來複製object(包含屬性)
 2. spread syntax 影片中還沒實裝
    現在已經實裝了，
    mdn說效果類似Object.assign()
    Note that Object.assign() triggers setters, whereas spread syntax doesn't.

重點是以上皆是淺拷貝，意思是第一層可以copy
但有第二層的時候依然是 call by reference🤣

需要copy一層以上的時候:
 1. 使用其他套件寫好的函式
    例如cloneDeep
 2. 作弊用JS型別轉換來繞過XD
    
```
- [Lodash: cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)
- [What is the most efficient way to deep clone an object in JavaScript?](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript)
---

### 15. LocalStorage

```
(又是一個) todo list
雖然已經寫很多遍了，但還是可以學到一些東西

Form.reset() 可以reset表單內的值都回到初始狀態
 (之前自己寫都覆空的值)

把做出清單的function抽出來(populateList)，
好處是未來有新增清單的時候也可以重複使用
輸入array預設一個[]避免沒傳入時爆掉

innerHTML 要拿字串，map() return array
所以要記得要加.join('') 不然會出現奇怪的bug(莫名的,)

localStorage.setItem(key, value)
注意! 都要是字串形式，
array 或 object直接丟進去會只剩'object'
要使用JSON.stringify
取出再用JSON.parse()

監聽器綁在一直存在的父層的觀念:
直接綁監聽器在checkbox上是會有bug的
在checkbox的dom長出來之前，綁監聽器的動作可能已經執行完畢了

因為點擊觸發兩次，或是有可能戳到別的
.matches()可以檢查event return boolean
```
- [input/label冒泡時行為預防](https://ithelp.ithome.com.tw/articles/10192015)
---
