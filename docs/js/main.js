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
	$('[data-fancybox="gallery"]').fancybox();
	$('[data-fancybox="gallery-bidsmart"]').fancybox();

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

	
	// const form = document.querySelector('#contacts-form')
	// form.addEventListener('submit', (e) => {
	// 	e.preventDefault()
	// 	ajaxFormSubmit()
	// })

	// jQuery Validate Form Plugin
	$("#contacts-form").validate({
		// Что валидируем
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			// phone:  { required: true },
			message: { required: true }
		},

		// Сообщения
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com. Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},

	  // В случае корректной валидации создаем Ajax запрос через функцию
	  submitHandler: function(form) {
			ajaxFormSubmit();
		}
	});


	// Функция AJAX запрса на сервер
	function ajaxFormSubmit(){
		var string = $("#contacts-form").serialize(); // Соханяем данные введенные в форму в строку.

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contacts-form").slideUp(400);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	};

	//Вызов библиотеке wow.js c настройкой параметров
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       80,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();

	function animate(elem){
	    var effect = elem.data("effect");
	    if(!effect || elem.hasClass(effect)) return false;
	    elem.addClass("animated " + effect).one('oAnimationEnd MSAnimationEnd mozAnimationEnd webkitAnimationEnd animationend',function(){
	    	elem.removeClass("animated " + effect);
	    });
	}
	$(".mouseEnter-animation").mouseenter(function() {
	    animate($(this));
	});

	// добавляем возраст на страницу
	// (function setAge () {
	// 	const currentYear = new Date().getFullYear()
	// 	const age = currentYear - 1979
	// 	document.querySelector('#age').textContent = `${age} ${getPluralEnding(age)}`
	// })()

	// аккордеон
	document.querySelector('.accordion').addEventListener('click', function (e) {
		const activeClass = 'accordion-item--active'

		if (e.target.classList.contains('accordion-item__title')) {
			const item = e.target.parentElement
			if (!item.classList.contains(activeClass)) {
				const activeElement = this.querySelector('.' + activeClass)
				if (activeElement) activeElement.classList.remove(activeClass)
			}
			item.classList.toggle(activeClass)	
		}
	})	

});

function getPluralEnding (number, values = ['год', 'года', 'лет']) {
	let n = number % 100
	if (n >= 11 && n <= 19) {
		return values[2]
	} else {
		n = number % 10
		if (n === 1) return values[0]
		if ([2, 3, 4].includes(n)) return values[1]
		return values[2]	
	}
}
