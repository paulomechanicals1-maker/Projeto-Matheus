const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

const track   = document.querySelector('.carrossel-track');
const cards   = document.querySelectorAll('.film-card');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let index = 0;

function getVisible() {
  if (window.innerWidth < 600)  return 1;
  if (window.innerWidth < 900)  return 2;
  return 3;
}

function getCardWidth() {
  const gap  = 24;
  const vis  = getVisible();
  const w    = track.parentElement.offsetWidth;
  return (w - gap * (vis - 1)) / vis + gap;
}

function goTo(n) {
  const max = cards.length - getVisible();
  index = Math.max(0, Math.min(n, max));
  track.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

btnNext.addEventListener('click', () => goTo(index + 1));
btnPrev.addEventListener('click', () => goTo(index - 1));
window.addEventListener('resize', () => goTo(index));

const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));