const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  
  const linkCode = this.getBoundingClientRect();
  // console.log(linkCode)
  const coords = {
    width: linkCode.width,
    height: linkCode.height,
    top: linkCode.top + window.scrollY,
    left: linkCode.left + window.scrollX,
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))