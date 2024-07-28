const counterElement = document.querySelector('.header__counter');
const incrementButtons = document.querySelectorAll('.trend__like'); 

let count = 0;

incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        
        if (count === 1) {
            counterElement.style.display = 'flex';
        }

        counterElement.textContent = count;
    });
});

let menu = document.querySelectorAll(".profile__menuBtn")

menu.forEach(e => {
	e.addEventListener("click", () => {
		for(let elem of menu) {
			elem.classList.remove("profile__menuBtn_active")
		}
		e.classList.add("profile__menuBtn_active")
	})
}) 

let phoneInput = document.getElementById('phone');
let phoneMask = IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
});

let swiper = new Swiper('.trend__slider', {
	slidesPerGroup: 1,
    slidesPerView: 4,
	spaceBetween: 32,
	loop: true,
  })


