
//задача 3. Палиндром

function palindromCheck(str) {
	var newStr;
	newStr = str.split("").reverse();
	console.log(newStr); // я вам не рекомендую в практике использовать консоль логи, а тут уж они подавно не нужны
	newStr = newStr.join("");
	console.log(newStr);
	if (str == newStr) 
		return console.log("Палиндром");
}

palindromCheck('12rerer21'); // хз как учесть пробелы =(

//задача 4 
/*
function repeat(str) { 
	var res = {}; 
	for(var i = 0; i < str.length; i++) { 
		var current = str[i]; 

		if(res[current]) { 
			res[current]++; 
		} 
		else { 
			res[current] = 1; 
		} 
	} 

	var prev = null; 
	var big = {}; 

	for(var key in res) { 
		if(prev < res[key]) { 
			prev = res[key]; 
			big = { 
				[key]: res[key] 
			}; 
		} 
		else if(prev === res[key]) { 
			big[key] = res[key]; 
		} 
	} 

	return big; 
} 

var endResult = repeat('abcaababhjeeee'); 
console.log(endResult); // вывел в объект
*/
 function repeat(str) { 
 var res = {}; 
 for(var i = 0; i < str.length; i++) { 
 var current = str[i]; 

 if(res[current]) { 
 res[current]++; 
 } 
 else { 
 res[current] = 1; 
 } 
 } 
 console.log(res) // не доделали задачку, нужно было вывести самый повторяющийся а не все
 } 

 repeat('abcaba');  // повторения каждой буквы



//задача 5 
function searchAndChange (str, search, replace) {
	while (str.indexOf(search) >= 0) {
    str = str.slice(0, str.indexOf(search)) + replace + str.slice(str.indexOf(search) + search.length, str.length); // нужно такую колбасу разбивать, например какую-то часть обернуть в функцию
  }

  return str;
}

console.log(searchAndChange('Шла Саша по шоссе и сосала сушку', 'ос', 'ОС'));

//задача 6 

function littleBig(str) { // это имя рэппера?) firstLetterToUppercase
  str = str[0].toUpperCase() + str.slice(1, str.length);

  for (var i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length); // аналогично
    }
  }

  return str;
}

console.log(littleBig('you wake up dead'));

//задача 7 

function getDayOfWeekNow() {
  var now = new Date();
  switch (now.getDay()) {
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    case 6:
      return 'Суббота';
    case 0:
      return 'Воскресенье';
  }
}

console.log(getDayOfWeekNow());

//задача 8 
