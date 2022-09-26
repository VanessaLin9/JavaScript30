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