$(document).ready(function() {

	var $mobileIcon = $('#mobile-menu__icon');
	var $navList = $('.navigation__list');
	var $navLink = $('.navigation__list a');
	var navListOpened = 'mobile-menu--opened';
	var IconAnimation = 'is-opened';

	// открываем мобильное меню
	$($mobileIcon).on('click', function(){
		$(this).toggleClass(IconAnimation);
		$($navList).toggleClass(navListOpened);
	});

	// убираем мобильное меню по клику на ссылки
	$($navLink).on('click', function(){
		$($mobileIcon).removeClass(IconAnimation);
		$($navList).removeClass(navListOpened);
	});

	$(window).resize(function(){
		var $w = $(window).width();
		if ($w > 768) {
			$($navList).removeClass(navListOpened);	
			$($mobileIcon).removeClass(IconAnimation);	
		}
	});	

});	
