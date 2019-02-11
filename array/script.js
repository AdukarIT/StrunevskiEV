/* Задача №1 */
console.log('.........№1........');

function getRandomArray(len) {
	var arr = [];
	
	for (var i = 0; i < len; i++) {
		arr[i] = Math.random();
	}

	return arr;
}
randomArray = getRandomArray(7);
secondRandomArray = getRandomArray(7);
console.log(randomArray);


/* Задача №2 */
console.log('.........№2........');

function arrayAverage(arr) {
	var summ = 0; 
	for (var i = 0; i < arr.length; i++) {
		summ += arr[i];
	}

	var average;
	average = summ / arr.length;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > average) {
			console.log(arr[i]);
		}
	}
}

arrayAverage(randomArray);

/* Задача №3 */
console.log('.........№3........');

function searchMinNumber(arr) {
	var iMin;
	var iMin2;
	arr.sort();
	console.log("Самое маленькое число в массиве: " + arr[0]);
	console.log("Второе самое маленькое число в массиве: " + arr[1]);
}

searchMinNumber(randomArray);

/* Задача №4*/
console.log('.........№4........');

function deleteAndAddNumbers(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0.3) {
			arr.splice(i, 1);
			arr.unshift(0);
		}
	}
	return arr;
}
console.log(deleteAndAddNumbers(randomArray));

/* Задача №5*/
console.log('.........№5........');

function summTwoArray(arr) {

}

