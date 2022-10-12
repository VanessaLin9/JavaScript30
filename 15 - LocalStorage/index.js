  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem (e) {
    e.preventDefault()
    const text  = (this.querySelector('[name=item]')).value
    const item = {
      text,
      done: false,
    }
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset()
    
  }

  // 我自己寫的
  // function toggleDone(e){
  //   if(e.target.type === 'checkbox') {
  //     const index = (e.target.dataset.index)/1
  //     items[index].done = !items[index].done
  //   }
  //   localStorage.setItem('items', JSON.stringify(items))
  // }

  function toggleDone(e) {
    if(!e.target.matches('input')) return
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
  }

  function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((item, i)=> {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${item.done? 'checked': ''}/>
          <label for="item${i}">${item.text}</label>
        </li>
      `
    }).join('')
  }

  
addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList)