$(document).ready(function() {

	// slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a, a.mouse_scroll").mPageScroll2id({
	     offset:70 //Задаем отступ сверху например для мобильного меню
	    // clickedClass: "mPS2id-target-last"	// Устанавливает класс для ссылки, при клике на неё
		// targetClass: "active-item"	// Устанавливает класс для блока, при его появлении во время скролла
	});

	// Фильтр плагин
	$('#filter-container').mixItUp();

	// Fancybox - галерея для картинок
	$('[data-fancybox="gallery"]').fancybox({

	});

	// Добавляем и удаляем активный класс для элементов фильра
	$('.filter-block__button').on('click', function(){
		
		var activeClass= 'filter-block__button--active';
		var currentActiveElement = findElementByClass('.filter-block', '.' +  activeClass);
				
		if (!$(this).hasClass(activeClass)) {
			$(currentActiveElement).removeClass(activeClass);
		 	$(this).addClass(activeClass);
		}		
	});

	function findElementByClass(mainClass, classToFind) {
		return $(mainClass).find(classToFind);
	}

});

