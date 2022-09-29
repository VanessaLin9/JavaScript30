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


```
---