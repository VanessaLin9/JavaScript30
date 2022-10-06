const inputs = document.querySelectorAll('.item input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
  // console.log(e)
  // console.log(e.shiftKey)
  let isBetween = false;
  if(e.shiftKey && this.checked) {
    //列出全部 input
    inputs.forEach(input => {
      if(input === this || input === lastChecked){
        isBetween = !isBetween
        console.log('Toggle it!')
      }
      if(isBetween) {
        input.checked = true;
      }
    })

  }
  //第一次點擊不進判斷先用變數接下
  lastChecked = this

}

inputs.forEach(input => input.addEventListener('click', handleCheck))