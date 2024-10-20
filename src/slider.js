const swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true, 
    autoplay: {
      delay: 2500, 
      disableOnInteraction: false, 
    },
    speed: 1500, 
  });
