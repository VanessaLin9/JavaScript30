const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

let countdown;

function timer(seconds){
  // 優化，啟動前先清除任何已存在的timer
  clearInterval(countdown)
  // const now = (new Date()).getTime() //舊寫法
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds) // 這邊是優化，一開始就先呼叫一次printer就會顯示第一秒
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/ 1000)
    if(secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft) //這邊會一秒後才呼叫printer，看到的數字永遠少第一秒
  }, 1000)
}

function displayTimeLeft(seconds){ //printer 作用
  const minutes = Math.floor(seconds/60);
  const secondLeft = seconds % 60;
  const display = `${minutes}:${secondLeft<10?'0':''}${secondLeft}`;
  timerDisplay.textContent = display
  document.title = display //優化，直接讓title標籤也同步顯示倒數時間

  // console.log({minutes, secondLeft})
}

function displayEndTime(timestamp){
  const end = new Date(timestamp)
  const hour = end.getHours();
  const minutes = end.getMinutes()
  endTime.textContent = `Be Back At ${hour>12? hour-12: hour}:${minutes<10?'0':''}${minutes}`
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value; //可以直接抓的到裡面命名為minutes的input值
  console.log(mins)
  timer(mins*60);
  this.reset();
})