const text = document.querySelectorAll(".articles-slider__text");
const investBlocks = document.querySelectorAll(".investers-block__item");
const sliderLine = document.querySelector(".slider-line");
const btnLeft = document.querySelector(".left-btn");
const InvestersBtnLeft = document.querySelector(".investers-left-btn");
const ExpertsBtnLeft = document.querySelector(".experts-left-btn");
const btnRight = document.querySelector(".right-btn");
const InvestersBtnRight = document.querySelector(".investers-right-btn");
const ExpertsBtnRight = document.querySelector(".experts-right-btn");

let investers1 = document.querySelector("#investers-1");
let investers2 = document.querySelector("#investers-2");
let investers3 = document.querySelector("#investers-3");

let experts1 = document.querySelector("#expert-block-1");
let experts2 = document.querySelector("#expert-block-2");
let experts3 = document.querySelector("#expert-block-3");

let count = 0;
let countInvests = 0;
let countExperts = 0;
let countStartups = 0;
let width;
// slider text
const init = () => {
	console.log('resize');
	width = document.querySelector(".slider").offsetWidth;
	sliderLine.style.width = width*text.length + 'px';
	text.forEach(item => {
	item.style.width = width + 'px'
	item.style.height = 'auto';
	});
	investers1.style.display = "block";
	investers2.style.display = "block";
	investers3.style.display = "block";
	experts1.style.display = "block";
	experts2.style.display = "block";
	experts3.style.display = "block";
	rollSlider();
	if (window.innerWidth <= '915') {
		investers1.style.display = "block";
		investers2.style.display = "none";
		investers3.style.display = "none";
		experts1.style.display = "none";
		experts2.style.display = "block";
		experts3.style.display = "none";
	}
}
window.addEventListener('resize', init);
init();

btnLeft.addEventListener('click', () => {
	count--;
	if (count < 0) {
		count = text.length - 1;
	}
	rollSlider();
});

btnRight.addEventListener('click', () => {
	count++;
	if (count >= text.length) {
		count = 0;
	}
	rollSlider();
});
function rollSlider() {
	sliderLine.style.transform = 'translate(-'+count*width+'px)'
}
//
// slider invests
	InvestersBtnLeft.addEventListener('click', (pos) => {
		countInvests--;
		switch (countInvests) {
			case 0: {
				investers1.style.display = "block";
				investers2.style.display = "none";
				investers3.style.display = "none";
				break;
			}

			case 1: {
				investers1.style.display = "none";
				investers2.style.display = "block";
				investers3.style.display = "none";
				break;
			}

			case 2: {
				investers1.style.display = "none";
				investers2.style.display = "none";
				investers3.style.display = "block";
				break;
			}
		}
		if (countInvests > 3) {
			investers1.style.display = "block";
			investers2.style.display = "none";
			investers3.style.display = "none";
			countInvests = 0;
		}

		if (countInvests < 0) {
			investers1.style.display = "none";
			investers2.style.display = "none";
			investers3.style.display = "block";
			countInvests = 2;
		} 
	});
	InvestersBtnRight.addEventListener('click', (pos) => {
		countInvests++;
		switch (countInvests) {
			case 0: {
				investers1.style.display = "block";
				investers2.style.display = "none";
				investers3.style.display = "none";
				break;
			}

			case 1: {
				investers1.style.display = "none";
				investers2.style.display = "block";
				investers3.style.display = "none";
				break;
			}

			case 2: {
				investers1.style.display = "none";
				investers2.style.display = "none";
				investers3.style.display = "block";
				break;
			}
		}
		if (countInvests > 3) {
			investers1.style.display = "block";
			investers2.style.display = "none";
			investers3.style.display = "none";
			countInvests = 0;
		}

		if (countInvests < 0) {
			investers1.style.display = "none";
			investers2.style.display = "none";
			investers3.style.display = "block";
			countInvests = 2;
		} 
	});
//

// slider Experts
ExpertsBtnLeft.addEventListener('click', (pos) => {
	countExperts--;
	switch (countExperts) {
		case 0: {
			experts1.style.display = "none";
			experts2.style.display = "block";
			experts3.style.display = "none";
			break;
		}

		case 1: {
			experts1.style.display = "block";
			experts2.style.display = "none";
			experts3.style.display = "none";
			break;
		}

		case 2: {
			experts1.style.display = "none";
			experts2.style.display = "none";
			experts3.style.display = "block";
			break;
		}
	}
	if (countExperts > 3) {
		experts1.style.display = "block";
		experts2.style.display = "none";
		experts3.style.display = "none";
		countExperts = 0;
	}

	if (countExperts < 0) {
		experts1.style.display = "none";
		experts2.style.display = "none";
		experts3.style.display = "block";
		countExperts = 2;
	} 
});
ExpertsBtnRight.addEventListener('click', (pos) => {
	countExperts++;
	switch (countExperts) {
		case 0: {
			experts1.style.display = "none";
			experts2.style.display = "block";
			experts3.style.display = "none";
			break;
		}

		case 1: {
			experts1.style.display = "none";
			experts2.style.display = "none";
			experts3.style.display = "block";
			break;
		}

		case 2: {
			experts1.style.display = "block";
			experts2.style.display = "none";
			experts3.style.display = "none";
			break;
		}
	}
	if (countExperts > 3) {
		experts1.style.display = "none";
		experts2.style.display = "block";
		experts3.style.display = "none";
		countExperts = 0;
	}

	if (countExperts < 0) {
		investers1.style.display = "none";
		investers2.style.display = "none";
		investers3.style.display = "block";
		countExperts = 2;
	} 
});
// slider Startups
let startupArrow = document.querySelector(".startup-btn-arrow");
let startup1 = document.querySelector("#startup-btn-1");
let startup2 = document.querySelector("#startup-btn-2");
let startup3 = document.querySelector("#startup-btn-3");
let startup4 = document.querySelector("#startup-btn-4");
let startup5 = document.querySelector("#startup-btn-5");
let startup6 = document.querySelector("#startup-btn-6");
let startup7 = document.querySelector("#startup-btn-7");
let startup8 = document.querySelector("#startup-btn-8");

let imgZooz = document.querySelector("#img-zooz");
let imgPlay = document.querySelector("#img-play");
let imgPresentors = document.querySelector("#img-presentors");
let imgProjectu = document.querySelector("#img-projectu");
let imgTindog = document.querySelector("#img-tindog");
let imgUrban = document.querySelector("#img-urban");
let imgVet = document.querySelector("#img-vet");
let imgTaste = document.querySelector("#img-taste");

let zooz = document.querySelector("#zooz");
let play = document.querySelector("#play");
let presentors = document.querySelector("#presentors");
let projectu = document.querySelector("#projectu");
let tindog = document.querySelector("#tindog");
let urban = document.querySelector("#urban");
let vet = document.querySelector("#vet");
let taste = document.querySelector("#taste");
// Buttons

startupArrow.addEventListener('click', (pos) => {
	countStartups++;
	switch (countStartups) {
		case 0: {
			startup1.style.display = "block";
			startup2.style.display = "block";
			startup3.style.display = "block";
			startup4.style.display = "none";
			startup5.style.display = "none";
			startup6.style.display = "none";
			startup7.style.display = "none";
			startup8.style.display = "none";
			break;
		}

		case 1: {
			startup1.style.display = "none";
			startup2.style.display = "block";
			startup3.style.display = "block";
			startup4.style.display = "block";
			startup5.style.display = "none";
			startup6.style.display = "none";
			startup7.style.display = "none";
			startup8.style.display = "none";
			break;
		}

		case 2: {
			startup1.style.display = "none";
			startup2.style.display = "none";
			startup3.style.display = "block";
			startup4.style.display = "block";
			startup5.style.display = "block";
			startup6.style.display = "none";
			startup7.style.display = "none";
			startup8.style.display = "none";
			break;
		}
		case 3: {
			startup1.style.display = "none";
			startup2.style.display = "none";
			startup3.style.display = "none";
			startup4.style.display = "block";
			startup5.style.display = "block";
			startup6.style.display = "block";
			startup7.style.display = "none";
			startup8.style.display = "none";
			break;
		}
		case 4: {
			startup1.style.display = "none";
			startup2.style.display = "none";
			startup3.style.display = "none";
			startup4.style.display = "none";
			startup5.style.display = "block";
			startup6.style.display = "block";
			startup7.style.display = "block";
			startup8.style.display = "none";
			break;
		}
		case 5: {
			startup1.style.display = "none";
			startup2.style.display = "none";
			startup3.style.display = "none";
			startup4.style.display = "none";
			startup5.style.display = "none";
			startup6.style.display = "block";
			startup7.style.display = "block";
			startup8.style.display = "block";
			break;
		}
		case 6: {
			startup1.style.display = "block";
			startup2.style.display = "none";
			startup3.style.display = "none";
			startup4.style.display = "none";
			startup5.style.display = "none";
			startup6.style.display = "none";
			startup7.style.display = "block";
			startup8.style.display = "block";
			break;
		}
		case 7: {
			startup1.style.display = "block";
			startup2.style.display = "block";
			startup3.style.display = "none";
			startup4.style.display = "none";
			startup5.style.display = "none";
			startup6.style.display = "none";
			startup7.style.display = "none";
			startup8.style.display = "block";
			break;
		}
	}
	if (countStartups > 7) {
		startup1.style.display = "block";
		startup2.style.display = "block";
		startup3.style.display = "block";
		startup4.style.display = "none";
		startup5.style.display = "none";
		startup6.style.display = "none";
		startup7.style.display = "none";
		startup8.style.display = "none";
		countStartups = 0;
	}
});
// 

// Blocks 
startup1.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'block';
	presentors.style.display = 'none';
	projectu.style.display = 'none';
	tindog.style.display = 'none';
	urban.style.display = 'none';
	vet.style.display = 'none';
	taste.style.display = 'none';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'block';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'none';
});
startup2.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'none';
	presentors.style.display = 'none';
	projectu.style.display = 'none';
	tindog.style.display = 'none';
	urban.style.display = 'none';
	vet.style.display = 'block';
	taste.style.display = 'none';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'block';
	imgTaste.style.display = 'none';
});
startup3.addEventListener('click', (pos) => {
	zooz.style.display = 'block';
	play.style.display = 'none';
	presentors.style.display = 'none';
	projectu.style.display = 'none';
	tindog.style.display = 'none';
	urban.style.display = 'none';
	vet.style.display = 'none';
	taste.style.display = 'none';

	imgZooz.style.display = 'block';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'none';
});
startup4.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'none';
	presentors.style.display = 'block';
	projectu.style.display = 'none';
	tindog.style.display = 'none';
	urban.style.display = 'none';
	vet.style.display = 'none';
	taste.style.display = 'none';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'block';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'none';
});
startup5.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'none';
	presentors.style.display = 'none';
	projectu.style.display = 'none';
	tindog.style.display = 'none';
	urban.style.display = 'none';
	vet.style.display = 'none';
	taste.style.display = 'block';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'block';
});
startup6.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'none';
	presentors.style.display = 'none';
	projectu.style.display = 'none';
	tindog.style.display = 'none';
	urban.style.display = 'block';
	vet.style.display = 'none';
	taste.style.display = 'none';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'block';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'none';
});
startup7.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'none';
	presentors.style.display = 'none';
	projectu.style.display = 'none';
	tindog.style.display = 'block';
	urban.style.display = 'none';
	vet.style.display = 'none';
	taste.style.display = 'none';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'none';
	imgTindog.style.display = 'block';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'none';
});
startup8.addEventListener('click', (pos) => {
	zooz.style.display = 'none';
	play.style.display = 'none';
	presentors.style.display = 'none';
	projectu.style.display = 'block';
	tindog.style.display = 'none';
	urban.style.display = 'none';
	vet.style.display = 'none';
	taste.style.display = 'none';

	imgZooz.style.display = 'none';
	imgPlay.style.display = 'none';
	imgPresentors.style.display = 'none';
	imgProjectu.style.display = 'block';
	imgTindog.style.display = 'none';
	imgUrban.style.display = 'none';
	imgVet.style.display = 'none';
	imgTaste.style.display = 'none';
});
//
//

// burger menu
let menu = document.querySelector(".burger");
let burgerButton = document.querySelector(".burger-img");
let active = false;
burgerButton.addEventListener('click', () => {
	if (active === false) {
		menu.style.display = 'block';
		active = true;
	}
	else if (active === true) {
		menu.style.display = 'none';
		active = false;
	}
})

//