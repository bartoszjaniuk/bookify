'use strict';
console.log('Working');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = () => {
  slides.forEach(
    (s, index) =>
      (s.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  );
};

const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

goToSlide(0);

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
