const text = document.querySelectorAll(".articles-slider__text");
const sliderLine = document.querySelector(".slider-line");
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
let count = 0;
let width;

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