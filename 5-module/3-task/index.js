function initCarousel() {
  const carousel = document.querySelector('.carousel__inner');
  const slideWidth = carousel.offsetWidth;
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let slideIndex = 0;

  // Скрываем кнопку "назад", т.к. мы видим первый слайд
  carouselArrowLeft.style.display = 'none';

  // Обработчик события для кнопки "вперед"
  carouselArrowRight.addEventListener('click', () => {
    slideIndex++;
    carousel.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    carouselArrowLeft.style.display = '';
    if (slideIndex === 3) {
      carouselArrowRight.style.display = 'none';
    }
  });

  // Обработчик события для кнопки "назад"
  carouselArrowLeft.addEventListener('click', () => {
    slideIndex--;
    carousel.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    carouselArrowRight.style.display = '';
    if (slideIndex === 0) {
      carouselArrowLeft.style.display = 'none';
    }
  });
}
