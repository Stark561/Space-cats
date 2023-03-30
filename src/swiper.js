const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 18,
  loop: true,
  slidesToScroll: 1,
  speed: 2000,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});


