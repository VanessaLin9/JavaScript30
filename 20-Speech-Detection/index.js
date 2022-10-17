window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; //是否說完一句話才會顯示

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  // console.log(e.results)
  const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
  
  p.textContent = transcript;

  if(e.results[0].isFinal) { //boolean辨認是否結束?
    
    p = document.createElement('p');
    words.appendChild(p);
  }
const url = 'https://vanessalin9.github.io/temperature-P06/'

  if(transcript.includes('get the weather')){
    console.log('get the weather app')
    window.open(url)
  }
  console.log(transcript)
});

recognition.addEventListener('end', recognition.start) // 監聽到結束事件再開啟第二次辨識

recognition.start(); //只會開啟一次辨識