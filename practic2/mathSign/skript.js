var	promptNumberA;
var	promptNumberB;
var total;


promptNumberA = prompt("Введите число A", '');
promptNumberB = prompt("Введите число B", '');

while (isNaN(promptNumberA - promptNumberB)) {
	alert("Вы ввели не числа");
	promptNumberA = prompt("Введите число A", '');
	promptNumberB = prompt("Введите число B", '');
}

total = promptNumberA * promptNumberB;

if ( total > 0 ) {
	alert ( "Знак произведения (+)");
} else if ( total < 0)	{ 
	alert ( "Знак произведения (-)" );
} else {
	alert ("Произведение равно 0")
}