// Lesson 3
var question = prompt('Какое задание проверим? Введите число от 1 до 4');
if(question == 1){
	var i = 0;
	while(i < 100){
		i++;
		console.log(i);
	}
} else if (question == 2){
	// Доступные товары
	var goods = [{name:'good1', price:250}, {name:'good2', price:150}, {name:'good3', price:425}, {name:'good4', price:799}, {name:'good5', price:635}, {name:'good6', price:599}, {name:'good7', price:361}, {name:'good8', price:74}];

	function getRandomInt(min,max) {
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
	// Загоняем рандомное указанное количество товаров в корзину
	function pushToBasket(numOfGoods){
		var basket = [];
		for(var i = 0; basket.length < numOfGoods; i++){
			var rand = getRandomInt(0,(goods.length-1))
				if (!basket.includes(goods[rand])) { //исключаем уже добавленные товары
					basket.push(goods[rand]);
				}
		}
		console.log("Ваши товары:");
		console.log(basket);
		return basket;

	}
	// Считаем общую сумму корзины
	function countBasketPrice(array){
		var count = 0;
		for (var i = 0; i < array.length; i++){
			count = count + array[i].price;
		}
		return count;
	}

	function work(){
		console.log("В корзине товаров на сумму: " + countBasketPrice(pushToBasket(3)) + " RUB");
	}

	work();
} else if (question == 3){
	for(var i = 1; i <= 100; console.log(i++)){}
} else if (question == 4){
		var x = 'x'
		console.log(x);
	for (i = 0; i < 19; i++){
		x = x + 'x';
		console.log(x);
	}
}








/*// Lesson 2
var quastion = prompt('Какое задание проверим? Введите число от 1 до 3');

if(quastion == 1){
	alert("Данная задача больше на уровне теории, поэтому я расписал всё в комментариях на против строчек.");
	var a = 1, b = 1, c, d;
	c = ++a; alert("значение переменной было возвращено после увеличения, так как '++' распооложены перед переменной (1+1=2). Ответ: " + c);           // 2 - значение переменной было возвращено после увеличения, так как "++" распооложены перед переменной (1+1=2)
	d = b++; alert("к переменной b применён пост-инкрементный оператор, в данном случае возвращается значение до приращения. Ответ: " + d);           // 1 - к переменной b применён пост-инкрементный оператор, в данном случае возвращается значение до приращения
	c = (2+ ++a); alert("оператор '++' ранее уже добавил единицу к переменной a, в данном случае он её снова добавляет, используется пре-инкрементный оператор. Выходит что 2 + 3 = 5. Ответ: " + c);      // 5 - оператор "++" ранее уже добавил единицу к переменной a, в данном случае он её снова добавляет, используется пре-инкрементный оператор. Выходит что 2 + 3 = 5
	d = (2+ b++); alert("ранее к переменной b было прибавлено число значение операторм '++'. То есть b сейчас равно 2. Так как используется в данном примере пост-инкрементрый оператор, b возвращается без приращения. А значит 2 + 2 = 4. Ответ: " + d);      // 4 - ранее к переменной b было прибавлено число значение операторм "++". То есть b сейчас равно 2. Так как используется в данном примере пост-инкрементрый оператор, b возвращается без приращения. А значит 2 + 2 = 4
	alert("пременная а равна единице в начале, мы применили к ней 2 раза оператор ++ , в итоге 1+1+1=3. Ответ: " + a);                    // 3 - пременная а равна единице в начале, мы применили к ней 2 раза оператор ++ , в итоге 1+1+1=3
	alert("с переменной b таже история что и с переменной a выше. Ответ: " + b);                    // 3 - с переменной b таже история что и с переменной a выше
} else if( quastion == 2){
	var a = 2;
	var x = 1 + (a *= 2);
	alert(x); // мы применили оператор с умножением. То есть, выражение по сути имело вид 1 + (2 * 2) = 5
} else if( quastion == 3){
	// Пункты 1 - 3
	var a = -5;
	var b = -1;
	if (a > 0 && b > 0){
		alert("Вычитаем! = " + (a - b));
	} else if (a < 0 && b < 0){
		alert("Умножаем! = " + (a * b));
	} else if (a >= 0 && b <= 0 || a <= 0 && b >= 0){
		alert("Складываем! = " + (a + b));
	}

	// Пункт 4
	function getRandomInt(min,max) {
		return Math.floor(Math.random() * (max - min +1)) + min;
	}
	function switchNumber(sn){
		if (sn <= 15){
			switch (sn){
				case sn:
					alert(sn);
					sn++;
					break;
				default:
			    alert( 'Что-то подходящее по смыслу' );
			}
		switchNumber(sn);
		}
	}

	var a = getRandomInt(0,15);
	switchNumber(a);

	// Пункт 4 - вариант получше и попроще
	for(a; a <= 15; a++){
		alert(a);
	}

	// Пункт 5
	function getPluse(q,w){
		return q + w;
	}

	function getMinus(q,w){
		return q - w;
	}

	function getUmnojenie(q,w){
		return q * w;
	}

	function getDelenie(q,w){
		return q / w;
	}


	// Пункт 6
	function mathOperation(arg1, arg2, operation){
		return operation(arg1, arg2);
	}
	alert(mathOperation(10, 20, getPluse));
}



// Lesson 1
/*var choice = prompt('Преподаватель, какое задание вы хотите проверить? Напишите 1, если про градусы, напишите 2, если про вывод строки «Василий». Если не хотите проверять ДЗ, можете просто нажать "enter".')


if(choice == 1){
	//Фитча по переводу градусов Цельсия в Фаренгейты
	var Tc = prompt('Какую температуру по Цельсию вы хотите перевести в температуру по Фаренгейту? Укажите число');
	var result = (9 / 5) * Tc + 32;
	alert(result);
} else if(choice == 2){
	// вывод строчки "Василий"
	var name = 'Василий';
	var admin = name;
	alert(admin);

} else{
	alert('Увидимся на уроке!');
}

alert("И всё же, напоследок, задание про 1000 + '108'");
alert("Ответ: " + 1000 + "108");*/