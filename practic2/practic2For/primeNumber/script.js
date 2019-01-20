var x;


x = prompt("Введите число х ", '');



while	(isNaN(x-0)) {
	alert('Вы ввели не число');
	x = prompt("Введите число х ", '');
}
primeNumber:
for ( i = 2; i <= x; i++) {
	for (var divisor = 2; divisor < i; divisor++) {
		if (i % divisor == 0) 
			continue	primeNumber;
	}


	console.log(i);
}

