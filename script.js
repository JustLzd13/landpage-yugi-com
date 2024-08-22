
var swiper = new Swiper(".swiper-container", {
 direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 10,


    breakpoints: {
      0: {
        slidesPerView: 1
      },
      650: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
});