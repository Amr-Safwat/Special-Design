let settingsBox = document.querySelector('.settings-box');
let icon = document.querySelector('.icon');

icon.onclick = function() {
  settingsBox.classList.toggle('open');
  this.classList.toggle('fa-spin')
}

let background = document.querySelector('.landing-page');
let image = new Image();

let imgs = [];

for(let i = 1; i<= 5;i++) {
  imgs.push(`../imgs/0${i}.jpg`);
}

setInterval(() => {
  background.style.backgroundImage = `url('${imgs[Math.floor(Math.random() * imgs.length)]}')`;
}, 10000);

