jQuery(document).ready(function($) {
	$(".carousel-slider").slick({
		// settings: "unslick",
		speed: 200,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: true,
		infinite: true,
		dots: false,
		adaptiveHeight: true,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	$(".carousel-full").slick({
		// settings: "unslick",
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false,
		infinite: true,
		dots: true,
		adaptiveHeight: true,
		pauseOnHover: false,
		fade: true
	});
	$(".text-block--images").slick({
		// settings: "unslick",
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		arrows: true,
		infinite: true,
		dots: false,
		adaptiveHeight: false,
		pauseOnHover: false,
		fade: true
	});

	// $.fn.scrollView = function () {
	// 	return this.each(function () {
	// 		$('html, body').animate({
	// 			scrollTop: $(this).offset().top
	// 		}, 500);
	// 	});
	// }
	// $('body').on('click', '.slick-arrow', function () {
	// 	$(this).closest('.carousel').scrollView();
	// })  
});