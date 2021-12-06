$(function () {


	$("#my-menu").mmenu({
		// slidingSubmenus: false
		extensions: ['widesceen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.png" alt="NewProvidence">'
		}
	});


	if ($(window).height() < 450) {
		$('#slide_out_menu').addClass('xs-screen');
	}

	$(window).on('resize', function () {
		if ($(window).height() < 450) {
			$('#slide_out_menu').addClass('xs-screen');
		} else {
			$('#slide_out_menu').removeClass('xs-screen');
		}
	});



	$(".lightbox").magnificPopup();

});
