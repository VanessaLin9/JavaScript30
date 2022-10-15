const video = Array.from(document.querySelectorAll('[data-time]'))

const sec = 
  video
    .map(target => (target.dataset.time))
    .map(time => {
      const [mins, secs] = time.split(':').map(parseFloat)
      return  (mins * 60) + secs
    })
    .reduce((total, videoSec) => total + videoSec)

let secondsLeft = sec   
const hours = Math.floor(secondsLeft/3600)
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft/60)
secondsLeft = secondsLeft % 60

console.log(hours+':'+mins+':'+secondsLeft)
