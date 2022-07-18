window.onload = function() {

	//show n hide block
	$("a.left-nav-and-main__left-nav__calculators__list__title__trigger").mouseenter(function(event) {
		$('div.left-nav-and-main__left-nav__calculators__list__submenu').show();
	});
	$("div.left-nav-and-main__left-nav__calculators").mouseleave(function(event) {
		$('div.left-nav-and-main__left-nav__calculators__list__submenu').hide();
	});

	$("li.left-nav-and-main__left-nav__calculators__list__submenu__list__calculator").click(function(event) {
		$("div.left-nav-and-main__main__calculator").show();
		$("div.left-nav-and-main__main__calculator-lite").hide();
	});

	$("li.left-nav-and-main__left-nav__calculators__list__submenu__list__calculator-lite").click(function(event) {
		$("div.left-nav-and-main__main__calculator").hide();
		$("div.left-nav-and-main__main__calculator-lite").css('display', 'flex');
	});

	/* main calc buttons
	   first row
	   memory buttons
	*/
	$("button.left-nav-and-main__main__calculator__memory-buttons__save__save-button").click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__memory-input").val(task);
	});
	$("button.left-nav-and-main__main__calculator__memory-buttons__return__return-button").click(function(event) {
		let memory = $("input.left-nav-and-main__main__calculator__inputs__memory-input").val()
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(memory);
	});
	$("button.left-nav-and-main__main__calculator__memory-buttons__save-plus__save-plus-button").click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__memory-input").val("+" + task);
	});
	$("button.left-nav-and-main__main__calculator__memory-buttons__save-minus__save-minus-button").click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__memory-input").val('-' + task);
	});
	$("button.left-nav-and-main__main__calculator__memory-buttons__clear__clear-button").click(function(event) {
		$("input.left-nav-and-main__main__calculator__inputs__memory-input").val('');
	});

	/* second row
	   trigonometry buttons
	*/
	$('button.left-nav-and-main__main__calculator__trigonometry-buttons__sin__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "Math.sin(");
	});

	$('button.left-nav-and-main__main__calculator__trigonometry-buttons__cos__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "Math.cos(");
	});
	$('button.left-nav-and-main__main__calculator__trigonometry-buttons__tg__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "Math.tan(");
	});

	// special values buttons
	$('button.left-nav-and-main__main__calculator__trigonometry-buttons__pi__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "3.14");
	});
	$('button.left-nav-and-main__main__calculator__trigonometry-buttons__e__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "2.72");
	});


	/* trird row
	   logarithm buttons
	*/
	// $('button.left-nav-and-main__main__calculator__log-and-erase-buttons__log__button').click(function(event) {
	// 	let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
	// 	$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "log(");
	// });
	$('button.left-nav-and-main__main__calculator__log-and-erase-buttons__lg__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "Math.log10(");
	});
	$('button.left-nav-and-main__main__calculator__log-and-erase-buttons__ln__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "Math.log(");
	});


	// erase buttons
	$('button.left-nav-and-main__main__calculator__log-and-erase-buttons__backspace__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task.slice(0, task.length - 1));
	});
	$('button.left-nav-and-main__main__calculator__log-and-erase-buttons__clear__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val("");
	});


	// Возведение в степень и Скобки
	$('button.left-nav-and-main__main__calculator__degree-and-numbers-buttons__degree__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "**");
	});
	$('button.left-nav-and-main__main__calculator__degree-and-numbers-buttons__ground__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "**");
	});
	$('button.left-nav-and-main__main__calculator__parenthesis-and-numbers-buttons__left-parenthesis__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "(");
	});
	$('button.left-nav-and-main__main__calculator__parenthesis-and-numbers-buttons__right-parenthesis__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + ")");
	});


	// Базовые мат операции
	$('button.left-nav-and-main__main__calculator__summation-and-numbers-buttons__summation__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "+");
	});
	$('button.left-nav-and-main__main__calculator__summation-and-numbers-buttons__difference__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "-");
	});
	$('button.left-nav-and-main__main__calculator__multiplication-and-numbers-buttons__division__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "/");
	});
	$('button.left-nav-and-main__main__calculator__multiplication-and-numbers-buttons__multiplication__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "*");
	});


	// Точка и цифры
	$('button.left-nav-and-main__main__calculator__summation-and-numbers-buttons__dot__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + ".");
	});
	$('button.left-nav-and-main__main__calculator__summation-and-numbers-buttons__zero__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "0");
	});

	$('button.left-nav-and-main__main__calculator__multiplication-and-numbers-buttons__one__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "1");
	});
	$('button.left-nav-and-main__main__calculator__multiplication-and-numbers-buttons__two__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "2");
	});
	$('button.left-nav-and-main__main__calculator__multiplication-and-numbers-buttons__three__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "3");
	});

	$('button.left-nav-and-main__main__calculator__parenthesis-and-numbers-buttons__four__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "4");
	});
	$('button.left-nav-and-main__main__calculator__parenthesis-and-numbers-buttons__five__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "5");
	});
	$('button.left-nav-and-main__main__calculator__parenthesis-and-numbers-buttons__six__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "6");
	});

	$('button.left-nav-and-main__main__calculator__degree-and-numbers-buttons__seven__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "7");
	});
	$('button.left-nav-and-main__main__calculator__degree-and-numbers-buttons__eight__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "8");
	});
	$('button.left-nav-and-main__main__calculator__degree-and-numbers-buttons__nine__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator__inputs__task-input").val(task + "9");
	});


	// Кнопка для решения введённого выражения
	$("button.left-nav-and-main__main__calculator__summation-and-numbers-buttons__equally__button").click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator__inputs__task-input").val();
		// тут должна быть защита от вредоносного кода
		$("input.left-nav-and-main__main__calculator__inputs__result-input").val(eval(task));
	});

	/*
		Кнопки упрощённого калькулятора
	*/
	// первый ряд
	$('button.left-nav-and-main__main__calculator-lite__first-row__backspace__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task.slice(0, task.length - 1));
	});
	$('button.left-nav-and-main__main__calculator-lite__second-row__degree__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "**");
	});
	$('button.left-nav-and-main__main__calculator-lite__first-row__left-parenthesis__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "(");
	});
	$('button.left-nav-and-main__main__calculator-lite__first-row__right-parenthesis__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + ")");
	});

	// Базовые мат операции
	$('button.left-nav-and-main__main__calculator-lite__fifth-row__summation__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "+");
	});
	$('button.left-nav-and-main__main__calculator-lite__fourth-row__difference__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "-");
	});
	$('button.left-nav-and-main__main__calculator-lite__second-row__division__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "/");
	});
	$('button.left-nav-and-main__main__calculator-lite__third-row__multiplication__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "*");
	});
	// Точка и цифры
	$('button.left-nav-and-main__main__calculator-lite__fifth-row__dot__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + ".");

	});
	$('button.left-nav-and-main__main__calculator-lite__fifth-row__zero__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "0");
	});

	$('button.left-nav-and-main__main__calculator-lite__fourth-row__one__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "1");
	});
	$('button.left-nav-and-main__main__calculator-lite__fourth-row__two__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "2");
	});
	$('button.left-nav-and-main__main__calculator-lite__fourth-row__three__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "3");
	});

	$('button.left-nav-and-main__main__calculator-lite__third-row__four-button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "4");
	});
	$('button.left-nav-and-main__main__calculator-lite__third-row__five__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "5");
	});
	$('button.left-nav-and-main__main__calculator-lite__third-row__six__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "6");
	});

	$('button.left-nav-and-main__main__calculator-lite__second-row__seven__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "7");
	});
	$('button.left-nav-and-main__main__calculator-lite__second-row__eight__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "8");
	});
	$('button.left-nav-and-main__main__calculator-lite__second-row__nine__button').click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		$("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val(task + "9");
	});


	// Кнопка для решения введённого выражения
	$("button.left-nav-and-main__main__calculator-lite__fifth-row__equally__button").click(function(event) {
		let task = $("input.left-nav-and-main__main__calculator-lite__inputs__task-input").val();
		// тут должна быть защита от вредоносного кода
		$("input.left-nav-and-main__main__calculator-lite__inputs__result-input").val(eval(task));
	});
};