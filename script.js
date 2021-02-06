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

// burger menu
document.querySelector(".burger").addEventListener("click", function(e) {
	e.preventDefault();
	// this.classList.toggle("is-active");
	if (this.classList.contains("is-active")) {
		this.classList.remove("is-active");
		document.querySelector("#menu").classList.remove("nav-active");
		document.body.classList.remove("body-active");
	}
	else {
		this.classList.add("is-active");
		document.querySelector("#menu").classList.add("nav-active");
		document.body.classList.add("body-active");
	}
});
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
//