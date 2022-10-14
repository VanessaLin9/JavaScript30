const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
  return bandName.replace(/^(a |an |the )/i,'').trim();
}

const sortBands = bands.sort((a, b) => strip(a)> strip(b)? 1: -1);

document.querySelector('#bands').innerHTML = sortBands.map(band => `<li>${band}</li>`).join('')

// --------------------------------
// 自己寫的 (忘了sort)
// const band = document.querySelector('#bands')

// band.innerHTML = bands.map(list => {
//   const newList = filterArticle(list)
//   return `
//     <li>${newList}</li>
//   `
// }).join('')

// function filterArticle(b){
//  let a = ['An ', 'A ', 'The ']
//  for (let i=0; i<a.length; i++){
//   if(b.includes(a[i])){
//     return b.replace(a[i],'')
//   }
//  }
//  return b
// }