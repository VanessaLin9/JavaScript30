const speed = document.querySelector('.speed');
const video = document.querySelector('.flex');
const bar = speed.querySelector('.speed-bar');

speed.addEventListener('mousemove', function(e){
  const y = e.pageY - this.offsetTop
  // console.log(y)
  const percent = y/this.offsetHeight;
  // console.log(percent)
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent* 100) + '%'
  // console.log(height)
  bar.style.height = height //設定bar的高度隨著滑鼠移動
  const playbackRate = percent * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
})