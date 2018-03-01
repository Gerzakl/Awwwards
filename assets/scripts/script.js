$(document).ready(function(){

	let random = Math.floor(Math.random() * (5 - 1) + 1);

	$('.section-main').css({
		'background-image': 'url(./assets/images/bg-' + random + '.jpg)'
	});

	$('.mobile-toggler-js').click(function() {
		$('.header-mobile').addClass('-open');
		$('.header-mobile').addClass('-Xvisible');
	})

	$('.mobile-togglerX-js').click(function() {
		$('.header-mobile').removeClass('-open');
		$('.header-mobile').removeClass('-Xvisible');
	})

	setTimeout(function(){
		$('h1').addClass('-animated');
		$('h2').addClass('-animated');
	}, 1500);
});