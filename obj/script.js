/* Задача 1 */
console.log(".........Задача1........");
var myObj = {
	name: "dog",
	eyes: 2,
	paw: 4,
	nickname: "developer",
	color: "brown"
};

function objectName(myObj, property) {
	if (property in myObj) {
		console.log("Такое свойство есть");
	} else {
		console.log("Такого свойства нету");
	}
}

objectName(myObj, 'nickname');

/* Задача 2 */
console.log(".........Задача2........");

var twoShavuhi = {
	name: "Шавуха",
	portions: 2,
	recipe: {
		Лаваш: 2,
		Огурец: 4,
		'Курица(гр)': 500,
		'Мазик(гр)': 200 
	}
}

function goMakeShavuhu() {
	var onePortion = "На одну порцию " + twoShavuhi.name + " требуется ";
	for (var key in twoShavuhi.recipe) {
		totalIngr = twoShavuhi.recipe[key] / twoShavuhi['portions'];
		console.log(onePortion + totalIngr + " " + key)
	}
}
goMakeShavuhu();


/* Задача 3 */
console.log(".........Задача3........");

var cylinder = {
  radius: 10,
  height: 20
};

cylinder.yardage = function() {
  return 3.14 * (this.radius ** 2) * this.height;
};

console.log(cylinder.yardage());

