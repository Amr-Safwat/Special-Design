// Check If There Is Local Storage Color
if(localStorage.color !== null) {
  document.documentElement.style.setProperty('--main-color',localStorage.color);
  // Remove Active Class
  document.querySelectorAll('.colors-list li').forEach((li)=>{
    li.classList.remove('active');
    // check If Li Equal Local Storage Item
    li.dataset.color=== localStorage.color? li.classList.add('active'):'';
  });
}

let settingsBox = document.querySelector('.settings-box');
let icon = document.querySelector('.icon');

icon.onclick = function() {
  settingsBox.classList.toggle('open');
  this.classList.toggle('fa-spin')
}

// Switch Colors
let colorsLi = document.querySelectorAll('.colors-list li');

colorsLi.forEach(li => {
  li.addEventListener('click',(e)=>{
    // Remove Active Class
    colorsLi.forEach((li)=>{
      li.classList.remove('active');
    });
    // Add An Active Class On The Clicked Element
    e.target.classList.add('active');
    // Set Color On Root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

    // Store Color In Local Storage
    localStorage.setItem('color',e.target.dataset.color);
  })
});

let background = document.querySelector('.landing-page');
let image = new Image();

let imgs = [];

for(let i = 1; i<= 5;i++) {
  imgs.push(`../imgs/0${i}.jpg`);
}

setInterval(() => {
  background.style.backgroundImage = `url('${imgs[Math.floor(Math.random() * imgs.length)]}')`;
}, 10000);

