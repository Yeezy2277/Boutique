const text = document.querySelectorAll(".articles-slider__text");
const investBlocks = document.querySelectorAll(".investers-block__item");
const sliderLine = document.querySelector(".slider-line");
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
let count = 0;
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
	rollSlider();
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