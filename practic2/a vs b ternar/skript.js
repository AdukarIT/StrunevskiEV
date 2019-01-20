var	promptNumberA;
var	promptNumberB;



promptNumberA = prompt("Введите число A", '');
promptNumberB = prompt("Введите число B", '');

while (isNaN(promptNumberA - promptNumberB)) {
	alert("Вы ввели не числа");
	promptNumberA = prompt("Введите число A", '');
	promptNumberB = prompt("Введите число B", '');
}



( promptNumberA > promptNumberB ) ? alert ( "Большее число " + promptNumberA ) : alert ( "Большее число " + promptNumberB );