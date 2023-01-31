const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  speed: 3500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    autoplay: {
      delay: 4000,
    }
  },
});

swiper.autoplay.start()


