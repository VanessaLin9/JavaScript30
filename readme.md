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
.slice(star, end) 不改變原array，return 一個arr(淺拷貝自原arr) end 有加的話不會算進去
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

### 15. LocalStorage and Event Delegation

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

- [input/label 冒泡時行為預防](https://ithelp.ithome.com.tw/articles/10192015)

---

### 16. Mouse move Shadow

```
監聽的時候如果元素有子元素的時候
滑到子元素 mousemove 會給你
以子元素層那層去算(做邊框)的x,y

```

---

### 17. Sort Without Articles

```
render出List, 並按照"除了冠詞外"的字排序
自己先寫完再看影片，發現自己需求沒搞清楚就開始寫(檢討)

字串取代功能用.replace()

正規表達式不會寫，筆記:
建立一個新的正規表達式:
var re = new RegExp('pattern', 'flags');
or
var re = /pattern/flags;
^匹配輸入的開頭
(a|b) a or b
這邊flags用i表示 Case-insensitive search.

```

---

### 18. Adding Up Times with Reduce

```
將list 中的video 總時長console出來
每篇的時長放在data set中
.reduce()的練習

.split()之後會拿到字串
要轉成數字可以直接接一個.map(parseFloat)
```

---

### 19. Webcam Fun

```
這集超酷!!居然可以自己寫一個webcam app玩!!!

需要一些套件首先要: npm i
(避免上傳node modules 也加了ignore)

啟動server: npm start

[大致流程]
利用video element及時播放webcam的畫面
每16/1000 sec 擷取webcam的畫面秀在 canvas element
然後我們就可以在canvas各種玩影像!

// 播放webcam
video.src 的寫法已經更新了
現在要寫成.srcObject

//截圖
button onClick -> takePhoto()
音檔來自於audio.snap

//好玩圖片功能
寫到前面都還正常運作
開始寫filter之後我的webcam就掛了QQ
確認過code應該都沒問題，大概是硬體不行了QQ
只好照著寫，之後再追這個問題
```

---

### 20. speech Detection

```
寫一個自動語音辨識轉成文字的程式!
超酷!有點像google翻譯會附上的語音輸入功能，講話(英文)就自動轉成字
一樣不需要特殊的套件包就可以做到
(不過還是需要跑在server上)

進入本資料夾:
-> npm i
-> npm start

使用 window.SpeechRecognition(firFox 不支援)
自己加了window.open()抓語音開啟我自己的天氣小專案XD
```

- [mdn:speechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

---

### 21. Geolocation

```
需要ios的環境
影片是下載 Xcode 來使用
我是直接用手機連3000 port 的 external

使用navigator的geolocation api
method 使用watchPosition()
不會只抓一次，可以監看多次

不過雖然用手機連線惹我的coords.heading 還是沒有資料XDD
不過經緯度到是有出來

```

-[mdn:geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)

---

### 22. Follow Along Link Highlighter

```
自動抓取滑鼠滑到哪邊並且把相關的字height出來

'mouseenter': 滑鼠進入元素邊界時觸發，事件不會 bubble，並且在滑鼠完全離開邊界之前不會再次觸發

Element.getBoundingClientRect()
可以得到DOMRect對象的大小長寬跟座標值

要特別記得滾動卷軸的時候會跑掉，要加上Scroll修正
```

## -[getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

### 23. Follow Along Link Highlighter

```
SpeechSynthesisUtterance() ，web api 是constructor function
內含好幾個 properties
這邊玩到的有:
.text
.voice
.rate
.pitch

speechSynthesis, 瀏覽器提供的api
有一些properties 跟 methods
這邊玩到的有:
.getVoices() 可以拿到該瀏覽器提供的語音
作者的列表看起來跟我的不一樣，
不知道是不同瀏覽器還是代數不同
.speak()
.cancel()
(看了一下還有暫停那些這次沒玩到)
```

- [mdn: SpeechSynthesisUtterance](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesisUtterance)
- [mdn: speechSynthesis](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis)

---

### 24. Sticky Nav

```
簡單的小變版招式~讚
class 的 toggle 直接加在body上!
很細心特別要注意的地方在於:
1. nav position fix之後跳出頁面流的空位，下面的補上時會有一個斷層跳動感，要記得補上相對應的高度(作者用paddingTop補)
2. nav 第一格的動畫: 用width不能用 transition控，但是用max-width可以
```

---

### 25. Event Capture, Propagation, Bubbling and Once

```
這篇在解說冒泡
capturing phases
外 -> -> -> 被點擊者

bubbling phases
外 <- <- <- 被點擊者

Event.stopPropagation() 阻止冒泡事件

addEventListener(type, listener, options)
平常在用的addEventListener居然有第三個參數!之前都沒有注意到!
options裡有許多property可選填，這篇講到其中兩個參數更動的效果:

1. capture: 預設是false， 改成true的話會干擾capture往下傳
2. once: 預設是false， 改成true的話觸發一次之後就會remove listener
```
-[mdn:stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) -[mdn:addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


---

### 26. Stripe Follow Along Dropdown

```
算是 22 那集的後續，這次真的要把自動下拉選單做出來了
會綜合應用上次那集學到的東西

animation 技巧:
css 要拆成兩次，display none的時候無法用transition
第一步: display none -> display block  
第二步: opacity 0 -> opacity 1

作者提到react 或 angular 的動畫做法其實也是類似的作法: 拆成兩步驟
remove的時候就沒差可以一起

Element.getBoundingClientRect()又再使用了一次(22教過)
可以得到DOMRect對象的大小長寬跟座標值

詳細設定寫在註解內
特別要注意的點在於nav本身位置沒有貼齊邊緣的時候只抓dropdown去定位會跑掉(作者故意在nav上面塞一個h2去模擬)要記得修正位置

另一個細部技巧: 使用者超快速切換的時候dropdown可能會有bug
第9行 那邊可以用 && 先確認已經加上第一個樣式再加第二個
```
---

### 27. Click and Drag to Scroll
```
做一個網頁滿常見的樣式，點擊之後按住可以左右滑動
可以找到滿多套件可以做到，但其實可以自己寫出來:

監聽滑鼠的四種狀態: 
mousedown:
mouseleave:
mouseup:
mousemove:

用變數 isDown做開關
mousedown 時用變數 startX 紀錄定位點
記得要扣掉 offsetLeft 校正
```
---

### 28. Video Speed Controller UI
```
這集應該算是 11 的續集
做一個bar可以調整影片的撥放速度
前面大部分是一些運算，讓我們可以隨滑鼠滑動調整bar條的高低
然後在把值同步到播放速度上

video.playbackRate
可以設定video的播放速度
```
---

### 29. Countdown Clock
```
倒數計時器，又是XD
類似練習不知道已經寫幾遍了，但是人家的UI設計的好
然後除此之外
自己有寫過的東西反到更能實際感受學到的優化的部分

倒數計時有幾個寫法:
-> setInterval(function(){ sec-- }, 1000) 每秒呼叫一次sec-- (我寫過這招)，
作者說有時候setInterval會當機，尤其在ios系統中，滾動滾輪的時候setInterval會停住(這個我倒是沒發現!!)，所以這個不是一個非常smooth的方式

->所以這邊使用的是: 總時間減去(每秒呼叫一次)現在時間的方法(最近一次寫也有用過這招)
好處是滾動或setInterval當住的話等一下也會(再呼叫)減回來

時間顯示格式的部分: 00:00 的格式
之前自己寫的時候是在運算就組好
作者直接用三元運算子寫然後插兩個，前面那個只做前綴判斷
也是新的一招XD

用白話直接整理一次時間應用:
Date.now() 拿到UTC時間，一整串數字
把UTC時間塞進 new Date() 可以拿到一串整理好人類看得懂的時間格式，用變數接下之後，就可以使用一串的內建函式
.getDay() .getDate() .getMonth()

表單有設定name的話，其實可以直接抓到!!
input 有設定name的話也可以在裡面直接抓到值
```
---

### 30. Whack A Mole Game
```
最後一集! 是打地鼠小遊戲!
作者說要fun~結果做了一個小遊戲XDDD
遊戲總長是10秒
但是地鼠會從哪個洞出來、出來的時長都是隨機的

選擇隨機地鼠洞:
有用到recursion呢，用來處理剛出的洞不會立刻再出

peep()
加完地鼠樣式之後用setTimeout移除

計分功能:
mouse clickevent 裡面有一個 isTrusted
驗證點擊是否來自使用者而不是其它程式
```
-[Event.isTrusted](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted)

---

### 31. That's All Folks!
```
後記! 恭喜完課(大撒花)
作者鼓勵大家繼續做點什麼
[如果你有1000個東西想做~現在你還有970個再等著你]XDDD
作者還有分享說，如果你不確定能做什麼
可以從分享&教別人你學到的東西開始
開源不只是寫code，新手也可以從分享心得、 post blog等等開始，作者自己的經驗覺得對於進步也很有幫助
我會把整理好的心得po到 blog當作是對作者的一個迴響
```