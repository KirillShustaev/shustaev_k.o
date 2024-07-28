// бургер
let burgerOpen = document.querySelector(".header__burgerBtn")
let burgerClose = document.querySelector(".burger__close")
let burgerLink = document.querySelectorAll(".burger__link")
let burgerBlock = document.querySelector(".burger")

burgerOpen.addEventListener("click", () => {
	burgerBlock.classList.add("transBurger")
	document.body.classList.add("stop-scroll");
})

burgerClose.addEventListener("click", () => {
	burgerBlock.classList.remove("transBurger")
	document.body.classList.remove("stop-scroll");
})

burgerLink.forEach((e) => {
	e.addEventListener("click",() => {
		burgerBlock.classList.remove("transBurger");
		document.body.classList.remove("stop-scroll");
	})
})

// счетчик
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

// меню
let menu = document.querySelectorAll(".profile__menuBtn")

menu.forEach(e => {
	e.addEventListener("click", () => {
		for(let elem of menu) {
			elem.classList.remove("profile__menuBtn_active")
		}
		e.classList.add("profile__menuBtn_active")
	})
}) 

// маска тлф
let phoneInput = document.getElementById('phone');
let phoneMask = IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
});

// слайдер
let swiper = new Swiper('.trend__slider', {
	slidesPerGroup: 1,
    slidesPerView: 4,
	spaceBetween: 32,
	loop: true,
  })


