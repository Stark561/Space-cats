const swiper = new Swiper('.swiper-review', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    slidesToScroll: 1,
    speed: 2000,
    slideToClickedSlide: true,
    pagination: {
      el: '.swiper-pag',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });