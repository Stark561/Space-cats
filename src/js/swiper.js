const OurProductsSwiper = new Swiper('.our-products-swiper', {
  slidesPerView: 1,
  spaceBetween: 18,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    846: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },

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

const ReviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },

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