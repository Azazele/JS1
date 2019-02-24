let statistic = {
	directionStat: [],
	getDirectionStat: function(){
		while(true){
		numberOfStat = parseInt(prompt('Какой свой ход вы хотите увидеть? Введите число от 1 до ' + this.directionStat.length));
			if (numberOfStat <= this.directionStat.length && numberOfStat > 0){
				console.log("Вы сделали ход используя цифру: " + this.directionStat[numberOfStat - 1]);
			} else {
				console.log("Вы ввели недопустимое число, если вы хотите продолжить просмотр статистики, введите statistic.getDirectionStat()");
				return false;
			}
		};
		return;

	}
};