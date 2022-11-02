const triggers = document.querySelectorAll('.cool> li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(){
  //show dropdown
  console.log('enter')
  this.classList.add('trigger-enter')
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
  // show background
  background.classList.add('open');
  //resize background
  const dropdown = this.querySelector('.dropdown'); //把被叫出來的這個dropdown選起來
  const dropdownCoords = dropdown.getBoundingClientRect(); //抓出這個 dropdown的長寬高
  const navCoords = nav.getBoundingClientRect(); // 抓出nav被推離視窗邊的距離去修正位置
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  } //定義出長寬，定義座標位

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
  console.log('leave')
  this.classList.remove('trigger-enter','trigger-enter-active')
  background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))