// Check If There Is Local Storage Color
if (localStorage.color !== null) {
	document.documentElement.style.setProperty(
		'--main-color',
		localStorage.color
	);
	// Remove Active Class
	document.querySelectorAll('.colors-list li').forEach((li) => {
		li.classList.remove('active');
		// check If Li Equal Local Storage Item
		li.dataset.color === localStorage.color ? li.classList.add('active') : '';
	});
}

let settingsBox = document.querySelector('.settings-box');
let icon = document.querySelector('.icon');

icon.onclick = function () {
	settingsBox.classList.toggle('open');
	this.classList.toggle('fa-spin');
};

// Switch Colors
let colorsLi = document.querySelectorAll('.colors-list li');

colorsLi.forEach((li) => {
	li.addEventListener('click', (e) => {
		// Remove Active Class
		colorsLi.forEach((li) => {
			li.classList.remove('active');
		});
		// Add An Active Class On The Clicked Element
		e.target.classList.add('active');
		// Set Color On Root
		document.documentElement.style.setProperty(
			'--main-color',
			e.target.dataset.color
		);

		// Store Color In Local Storage
		localStorage.setItem('color', e.target.dataset.color);
	});
});

// Switch Random Background Option
let randomBgEl = document.querySelectorAll('.random-backgrounds span');

let bgOption = true;

let bgInterval;

// get value from local storage
let bgLocal = localStorage.option;

if (bgLocal !== null) {
	if (localStorage.option === 'true') {
		bgOption = true;
	} else {
		bgOption = false;
	}
	randomBgEl.forEach((span) => {
		span.classList.remove('active');
		if (localStorage.option === 'true') {
			document.querySelector('.yes').classList.add('active');
		} else {
			document.querySelector('.no').classList.add('active');
		}
	});
} else {
}

randomBgEl.forEach((span) => {
	span.addEventListener('click', (e) => {
		// Remove Active Class
		randomBgEl.forEach((span) => {
			span.classList.remove('active');
		});
		// Add An Active Class On The Clicked Element
		e.target.classList.add('active');
		if (e.target.dataset.option === 'yes') {
			bgOption = true;
			randomizeImgs();
			localStorage.setItem('option', true);
		} else {
			bgOption = false;
			clearInterval(bgInterval);
			localStorage.setItem('option', false);
		}
		// Store The Value In Local Storage
	});
});

let background = document.querySelector('.landing-page');

let imgs = [];

for (let i = 1; i <= 5; i++) {
	imgs.push(`../imgs/0${i}.jpg`);
}

// put the Interval In Function
function randomizeImgs() {
	if (bgOption === true) {
		bgInterval = setInterval(() => {
			background.style.backgroundImage = `url('${
				imgs[Math.floor(Math.random() * imgs.length)]
			}')`;
		}, 10000);
	} else {
		clearInterval(bgInterval);
	}
}

randomizeImgs();

// Skills Section
let skills = document.querySelector('.skills');
let spans = document.querySelectorAll('.skill-prog span');

window.onscroll = function () {
	if (window.scrollY >= skills.offsetTop) {
		spans.forEach((span) => {
			span.style.width = span.dataset.width;
		});
	}
};
// Skills Section

// Create Popup With The Image
let imgsGallery = document.querySelectorAll('.imgs-box img');

imgsGallery.forEach((img) => {
	img.addEventListener('click', (e) => {
		// Create Overlay Element
		let overlay = document.createElement('div');

		overlay.className = 'overlay';

		document.body.appendChild(overlay);

		// Create Popup Box
		let popup = document.createElement('div');

		popup.className = 'popup';

		// check if alt is not empty
		if(img.alt !== null) {
			let head = document.createElement('h3');

			let txt = document.createTextNode(img.alt);

			head.appendChild(txt);

			popup.appendChild(head);
		}

		// Create Image Element
		let popImg = document.createElement('img');

		popImg.src = img.src;

		popup.appendChild(popImg);

		document.body.appendChild(popup);

		// Create Close Buttton
		let close = document.createElement('i');
		close.className = 'fa-solid fa-xmark close';

		popup.appendChild(close);
	});
});

// Close Popup Box
document.addEventListener('click',function (e) {
	// check If The Element Clicked has close Class
	if(e.target.className == 'fa-solid fa-xmark close') {
		// Remove The Overlay
		e.target.parentElement.previousSibling.remove();
		// Remove The Current Popup
		e.target.parentNode.remove();
	}
});
