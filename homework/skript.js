/* Задача №1 */
console.log("............Первая задача..............");

var	apartment;

apartment = prompt("Введите номер квартиры ", '');

while (isNaN(apartment - 0) ||  apartment > 100 || apartment < 1) {
	alert("Введите номер квартиры числом от 1 до 100");
	apartment = prompt("Введите номер квартиры ", '');
}


if ( apartment > 1 && apartment <= 20) {
	console.log("Квартира в 1 подъезде");
} else if ( apartment > 20 && apartment <= 40) {
	console.log("Квартира во 2 подъезде");
} else if ( apartment > 40 && apartment <= 60) {
	console.log("Квартира в 3 подъезде");
} else if ( apartment > 60 && apartment <= 80) {
	console.log("Квартира в 4 подъезде");
} else	{
	console.log("Квартира в 5 подъезде");
}
/* Задача №2 */
console.log("............Вторая задача..............");

var carModel;

carModel = prompt("Напишите марку автомобиля ", "");
console.log(carModel);

switch	(carModel) {
	case 'BMW':
	console.log( carModel + " - Страна производства Германия");
	break;
	case 'Peugeot':
	console.log( carModel + " - Страна производства Франция");
	break;
	case	'Ford':
	console.log( carModel + " - Страна производства США");
	break;
	case 'Fiat':
	console.log( carModel + " - Страна производства Италия");	
	break;
	case 'Ferrari':
	console.log( carModel + " - Страна производства Италия");	
	break;
	case 'Opel':
	console.log( carModel + " - Страна производства Германия");	
	break;
	case 'Audi':
	console.log( carModel + " - Страна производства Германия");	
	break;
	case	'Nissan':
	console.log( carModel + " - Страна производства Япония");
	break;
	case	'Honda':
	console.log( carModel + " - Страна производства Япония");
	break;
	default: console.log( carModel + " - Страна производства неизвестна");	
}

/* Задача №3 */ 
console.log("............Третья задача..............");

var	year;

year = prompt("Введите желаемый год ", '');
console.log(year);

while (isNaN(year - 0)) {
	alert("Введите год числом");
	year = prompt("Введите желаемый год ", '');
}

if ( year % 4 == 0 ) {
	console.log("Этот год високосный");
} else {
	console.log("Этот год НЕ високосный");
}

/* Четвертая задача */ 
console.log("............Четвертая задача..............");

var	userNum;
var tabl;
var total;
userNum = prompt(" Введите число  от 1 до 20", '');

while (isNaN(year - 0)) {
	alert(" Введите число  от 1 до 20");
	userNum = prompt(" Введите число  от 1 до 20",  '');
}
if (userNum > 1 && userNum < 20) {
for ( i = 1; i <= 10; i++) {
	tabl = (userNum + " * " + i);
	total = userNum * i;
	console.log(tabl + " = " + total);
}
} else	{	
	console.log("Данное ограничение наложено условием задачи, поэтому при вводе числа больше 20 или меньше 1, таблицу умножения не увидеть.");
	console.log("А я хочу оценку 10, поэтому придерживаюсь условия");
}

/* Пятая задача */ 
console.log("............Пятая задача..............");

alert("В этой задаче вводить ничего не нужно, просто в консоли будет сумма нечетных чисел от 0 до 50");

var summ;
var operator;
operator = 2;
summ = 0;

total__summ:
for ( i = 0; i <= 50; i++) {
	while ( i % operator == 0)
		continue total__summ;
	summ = summ + i;
}
console.log("Сумма нечетных чисел от 0 до 50 = " +  summ);


/* Шестая задача */ 
console.log("............Шестая задача..............");

alert("В этой задаче вводить ничего не нужно, просто в консоли будут 15 первых чисел Фибоначчи");

var firstNum;
var secondNum;
var fiboNum;

firstNum = 0;
secondNum = 1;
console.log(firstNum);
console.log(secondNum);

for ( i = 3; i <= 15; i++) {
	fiboNum = firstNum + secondNum;
	firstNum = secondNum;
	secondNum = fiboNum;
	console.log(fiboNum);
}

/* Седьмая задача */ 
console.log("............Седьмая задача..............");

var whiteSquare = "_";
var blackSquare = "#";
var totalSquare = whiteSquare + blackSquare;


for (var c = 0; c < 8; c++) {
    for (var d = 1; d <= 2; d++) {
        totalSquare = totalSquare + totalSquare;
    }
    console.log(totalSquare);
     if (c % 2 !== 0) {
        totalSquare = whiteSquare + blackSquare;
}
    else {
        totalSquare = blackSquare + whiteSquare;
  }
}