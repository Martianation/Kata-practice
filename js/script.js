let swiper = null;
let itemHhidden = document.querySelector('.item-hidden');
let itemHhidden768 = document.querySelector('.item-hidden768');
let showButton = document.querySelector('.toggle-view-button');
let menuItem = document.querySelectorAll('.menu-item');
let slideClass = 'swiper-slide';

function removeClassOnResize() {
  if (window.innerWidth > 320) {
    const elements = document.querySelectorAll(`.${slideClass}`);
    elements.forEach(el => el.classList.remove(slideClass));
  }
}

removeClassOnResize();

window.addEventListener('resize', removeClassOnResize);

showButton.addEventListener('click', () => {
  menuItem.forEach(itemHhidden => {
    itemHhidden.classList.toggle('item-hidden');
    itemHhidden.classList.toggle('item-shown');
  });
});

showButton.addEventListener('click', function() {
  if (showButton.classList.contains('show-button')) {
    showButton.classList.remove('show-button');
    showButton.classList.add('hide-button');
    showButton.textContent = 'Скрыть';
  } else {
    showButton.classList.remove('hide-button');
    showButton.classList.add('show-button');
    showButton.textContent = 'Показать все';
  }
});

const windowWidth = window.innerWidth;

if (windowWidth < 768 && !swiper) {
  swiper = new Swiper('.mySwiper', {
        spaceBetween: 16,
        loop: false,
        allowTouchMove: true,
        slidesPerView: 1.3,
        slideToClickedSlide: true,
        centeredSlides: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      });
  }