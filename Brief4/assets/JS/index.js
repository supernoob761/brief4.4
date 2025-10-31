const track = document.querySelector('.track');
const slides = [...track.children];
let idx = 0;

function nextSlide() {
  idx = (idx + 1) % slides.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
}

let timer = setInterval(nextSlide, 4000);
