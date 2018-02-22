$(document).ready(function(){

	$('.mobile-toggler-js').click(function() {
		$('.header-mobile').addClass('-open');
		$('.header-mobile').addClass('-Xvisible');
	})

	$('.mobile-togglerX-js').click(function() {
		$('.header-mobile').removeClass('-open');
		$('.header-mobile').removeClass('-Xvisible');
	})
});