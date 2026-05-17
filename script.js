// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const track = document.querySelector(".carrossel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const cardWidht = 100;

nextBtn.onclick = () => {
  if (index < 1) {
    index++;
    track.style.transform = `translateX(-${index * cardWidht}%)`;
  }
};

prevBtn.onclick = () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * cardWidht}%)`;
  }
};