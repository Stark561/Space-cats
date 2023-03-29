const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 18,
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  slidesToScroll: 1,
  speed: 800,
//   lazy: {
// loadPrevNext: true,
//   }
  slideToClickedSlide: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  }
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
