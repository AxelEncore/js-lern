var money = prompt("Ваш бюджет: ");
var name = prompt("Название магазина: ");

mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

var den1 = money/30;

alert("Бюджет на 1 день " + den1);