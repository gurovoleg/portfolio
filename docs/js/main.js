$(document).ready(function() {

	// slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a, a.mouse_scroll").mPageScroll2id({
	     offset:70 //Задаем отступ сверху например для мобильного меню
	    // clickedClass: "mPS2id-target-last"	// Устанавливает класс для ссылки, при клике на неё
		// targetClass: "active-item"	// Устанавливает класс для блока, при его появлении во время скролла
	});
	
	
});

