let phoneInput = document.getElementById('phone');
let phoneMask = IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
});

swiper = new Swiper('.trend__slider', {
	slidesPerGroup: 1,
    slidesPerView: 4,
	spaceBetween: 32,
	loop: true,
  })