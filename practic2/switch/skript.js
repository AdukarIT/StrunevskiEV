var	promptNumberA;




promptNumberA = prompt("Введите число ", '');


while (isNaN(promptNumberA - 0)) {
	alert("Вы ввели не число");
	promptNumberA = prompt("Введите число ", '');

}

switch	(promptNumberA) {
	case	'1':
	console.log	("Это единичка");
	break;
	case	'2':
	console.log	("Это двоечка");
	break;
	case	'3':
	console.log	("Это троечка");
	break;
	case	'4':
	console.log	("Это четверочка");
	break;
	case	'5':
	console.log	("Это пятерочка");
	break;
	default:
	console.log	("Это много");
}