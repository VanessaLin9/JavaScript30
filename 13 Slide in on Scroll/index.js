function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e){
  console.count(e)

  //抓取每張圖片要出現的高度
  sliderImages.forEach(sliderImage => {
    // 設定每張相片該出現的位置(卷軸滾到的高度 + 視窗高度) 半張照片高
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2
    // 照片最底部
    const imageBottom = sliderImage.offsetTop + sliderImage.height
    // 由上往下滾該出現的時機
    const isHaftShow = slideInAt > sliderImage.offsetTop
    // 已經滾過去這張了嗎?
    const isNotScrolledPast = window.scrollY < imageBottom

    if (isHaftShow && isNotScrolledPast){
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')
    }
  })

}

window.addEventListener('scroll', debounce(checkSlide))