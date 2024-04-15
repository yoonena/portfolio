var responsiveSwiper = new Swiper(".swiper", {
	slidesPerView: 2,
	slidesPerColumn: 2,
	spaceBetween: 10,			
	loop: true,
	autoplay: { 
		delay: 3000,
		disableOnInteraction: false, 
	},			
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints:{
		769: {
			slidesPerView: 3,
			slidesPerColumn: 3,
		},
		1201: {
			slidesPerView: 4,
			slidesPerColumn: 4,
		}
	},
	touchEventsTarget: 'wrapper',
});