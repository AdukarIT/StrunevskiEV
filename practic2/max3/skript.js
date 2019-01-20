var	promptNumberA;
var	promptNumberB;
var	promptNumberC;



promptNumberA = prompt("Введите число A", '');
promptNumberB = prompt("Введите число B", '');
promptNumberC = prompt("Введите число C", '');


while (isNaN(promptNumberA - promptNumberB)) {
	alert("Вы ввели не числа");
	promptNumberA = prompt("Введите число A", '');
	promptNumberB = prompt("Введите число B", '');
	promptNumberC = prompt("Введите число C", '');
}
if ( promptNumberA > promptNumberB && promptNumberB > promptNumberC && promptNumberA > promptNumberC ) {
	console.log (promptNumberC);
	console.log	(promptNumberB);
	console.log	(promptNumberA);
} else if	(promptNumberA > promptNumberB && promptNumberC > promptNumberB && promptNumberA > promptNumberC ) {
	console.log (promptNumberB);
	console.log	(promptNumberC);
	console.log	(promptNumberA);
} else if (promptNumberA > promptNumberB && promptNumberC > promptNumberB && promptNumberC > promptNumberA ) {
	console.log (promptNumberB);
	console.log	(promptNumberA);
	console.log	(promptNumberC);
} else if (promptNumberB > promptNumberA && promptNumberC > promptNumberA && promptNumberC > promptNumberB ) {
	console.log (promptNumberA);
	console.log	(promptNumberB);
	console.log	(promptNumberC);
} else if (promptNumberB > promptNumberA && promptNumberB > promptNumberC && promptNumberC > promptNumberA ) {
	console.log (promptNumberA);
	console.log	(promptNumberC);
	console.log	(promptNumberB);
} else  {
	console.log (promptNumberC);
	console.log	(promptNumberA);
	console.log	(promptNumberB);
}


