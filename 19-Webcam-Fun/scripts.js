const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d', {willReadFrequently: true});
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// 利用video element 播放 webcam
function getVideo() {
  navigator.mediaDevices.getUserMedia({video:true, audio:false}) //return promise
   .then(localMediaStream => {
    console.log(localMediaStream);
    video.srcObject = localMediaStream;
    video.play();
   })
   .catch(error => {
    console.log('Oh No!!', error)
   })
};

// 定時截圖webcam 到 canvas上
function paintToCanvas(){
  // 抓取video長寬
  const height = video.videoHeight;
  const width = video.videoWidth;
  console.log('video', height, width)

  // canvas等比例video
  canvas.height = height;
  canvas.width = width;

  
  // 定時截圖
  return setInterval(()=> {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);

    // mess with them

    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    pixels = greenScreen(pixels)

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16)
}

// 截圖
function takePhoto(){
  //播放音檔
  snap.currentTime = 0;
  snap.play();

  //從canvas截圖
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'bawbaw')
  link.innerHTML= `<img src="${data}" alt="bawbaw img" />`
  strip.insertBefore(link, strip.firstChild)
};

// 好玩圖片功能
function redEffect(pixels){
  for(let i=0; i < pixels.data.length; i+=4){
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
  }
  return pixels
};

function rgbSplit(pixels){
  for(let i=0; i < pixels.data.length; i+=4){
    pixels.data[i - 150] = pixels.data[i + 0]; //red
    pixels.data[i + 100] = pixels.data[i + 1]; //green
    pixels.data[i - 150] = pixels.data[i + 2]; //blue
  }
  return pixels
};

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input)=> {
    levels[input.name] = input.value;
  });

  for(let i =0; i<pixels.data.length; i += 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if( red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax){
        pixels.data[i + 3] = 0;
      }
  }
  return pixels
}


getVideo();

video.addEventListener('canplay', paintToCanvas)