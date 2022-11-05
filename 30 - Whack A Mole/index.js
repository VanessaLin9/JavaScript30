const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lestHoles;
let timeUp = false;
let score;

function randomTime(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx]
  if(hole === lestHoles){
    console.log('An nah thats the same one bud')
    return randomHole(holes)
  }
  
  lestHoles = hole
  return hole
}

function peep(){
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(()=>{
    hole.classList.remove('up');
    if(!timeUp) peep()
  }, time)

  console.log(time, hole)
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep()
  setTimeout(()=> timeUp = true, 10000)
}

function bonk(e){
 if(!e.isTrusted) return //cheater
  score++;
  this.classList.remove('up')
  scoreBoard.textContent = score;
}

moles.forEach(mole =>mole.addEventListener('click', bonk))
