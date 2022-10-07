const inputs = document.querySelectorAll('.item input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
  // console.log(e)
  // console.log(e.shiftKey)
  let isBetween = false;
  // 第二次點擊同時按者shift鍵進入判斷式
  if(e.shiftKey && this.checked) {
    //列出全部 input 逐個檢視
    inputs.forEach(input => {
      // 這次點擊的跟上次點擊的做toggle
      if(input === this || input === lastChecked){
        isBetween = !isBetween
        console.log('Toggle it!')
      }
      // true 的都給他 checked
      if(isBetween) {
        input.checked = true;
      }
    })

  }
  //第一次點擊不進判斷先用變數接下
  lastChecked = this

}

inputs.forEach(input => input.addEventListener('click', handleCheck))