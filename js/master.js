let background = document.querySelector('.landing-page');
let image = new Image();

let imgs = [];

for(let i = 1; i<= 5;i++) {
  imgs.push(`../imgs/0${i}.jpg`);
}

setInterval(() => {
  background.style.backgroundImage = `url('${imgs[Math.floor(Math.random() * imgs.length)]}')`;
}, 10000);

