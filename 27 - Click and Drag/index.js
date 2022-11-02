const slider = document.querySelector('.items')
let isDown = false
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e)=> {
  isDown = true;
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft;
  // offsetLeft不扣的話，加個margin就會跑掉
  scrollLeft = slider.scrollLeft;
})

slider.addEventListener('mouseleave', ()=> {
  isDown = false;
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', ()=> {
  isDown = false;
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e)=> {
  if(!isDown) return
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({x, startX})
  const walk = (x - startX) * 3; //可以不一定要1:1，加倍讓滑動更快速
  // console.log(walk)
  slider.scrollLeft = scrollLeft - walk;
})