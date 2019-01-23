/* Задача №1 */
console.log('.........№1........');

function minNumber( a, b, c ) {
	if ( a > c && b > c) {
		return c;
	} else if ( a > b && c > b) {
		return b;
	} else if ( b > a && c > a) {
		return a;
	}
}

var min = minNumber( 13, 16, 4 );
console.log(min);

/* Задача №2 */
console.log('.........№2........');

var seconds;

function calcSecond( day, hours, minut ) {
	day = 24 * 60 * 60 * day;
	hours = 60 * 60 * hours;
	minut = 60 * minut;
	seconds = day + hours + minut;
	return seconds;
}

seconds = calcSecond( 3, 3, 33 );
console.log(seconds);


/* Задача №3 */
console.log('.........№3........');

function factorial(n) {
	
	if (n != 1) {
		return n * factorial(n - 1);
	} else return(n);
}

console.log( factorial(7) );

/* Задача №4 */
console.log('.........№4........');

var a;
a = prompt('Введите число', '')
a = Number(a);
console.log(a);


function	showMirrorNum(a) {
	
	if (a < 10) { 
		return String(a); 
	} 
	else { 
		return String(a % 10 + showMirrorNum((a - (a % 10)) / 10)); 
	} 
} 

console.log( showMirrorNum(a) );

/* Задача 5 */ 
console.log('.........№5........');

function equation(a, b, c) { 
var d = b * b - 4 * a * c; 
if (d < 0) { 
console.log("Корней нет") 
} 
else if (d == 0) { 
console.log("Один корень"); 
console.log(-(b + Math.sqrt(d)) / 2 * a); 

} 
else if (d > 0) { 
console.log("Два корня") 
console.log((-b + Math.sqrt(d)) / 2 * a); 
console.log((-b - Math.sqrt(d)) / 2 * a); 
} 
} 

equation(-2, 3, 2);