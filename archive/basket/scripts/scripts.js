//Массив товаров
let goods = [
{name: "Good1", src: "https://pp.userapi.com/c844617/v844617908/fb2f8/CHUO-s4bSAk.jpg", price: 245},
{name: "Good2", src: "https://pp.userapi.com/c851016/v851016260/aa9d/NBHz6m7bnqo.jpg", price: 148},
{name: "Good3", src: "https://pp.userapi.com/c850520/v850520059/221b2/gd9eBNrJOtU.jpg", price: 591}
];
let allitems = document.getElementsByClassName("goods");

let renderGoods = {
	generateGoods(){
		let allgoods = "";
		for(let i = 0; i < goods.length; i++){
			allgoods += `<div class="good">`;
			allgoods += `<div class="image">`;
			allgoods += `<img src="${goods[i].src}">`;
			allgoods += `</div>`;
			allgoods += `<div class="name">${goods[i].name}`;
			allgoods += "</div>"
			allgoods += `<div class="price">${goods[i].price}`;
			allgoods += "</div>";
			allgoods += `<div class="add" data-good="${i}">Добавить в корзину`
			allgoods += "</div>";
			allgoods += "</div>";
		}
		h1.insertAdjacentHTML("afterEnd", "<div class='goods'>" + allgoods + "</div>");
	}
}
let basket = {
	basket: [],
	add(num){
		this.basket.push(goods[num]);
		console.log(basket.basket);
	},
	generateGoods(){
		let allgoods = "";
		for(let i = 0; i < this.basket.length; i++){
			allgoods += `<div class="good">`;
			allgoods += `<div class="image">`;
			allgoods += `<img src="${this.basket[i].src}">`;
			allgoods += `</div>`;
			allgoods += `<div class="name">${this.basket[i].name}`;
			allgoods += "</div>"
			allgoods += `<div class="price">${this.basket[i].price}`;
			allgoods += "</div>";
			allgoods += "</div>";
		}
		h2.insertAdjacentHTML("afterEnd", "<div class='goods' id='basket'> " + allgoods + "</div>");
	},
	clear(){
		let basket = document.getElementById('basket');
		if (basket){
			basket.remove();
		}
	},
	getSumm(){
		let summ = 0;
		for(let i = 0; i < this.basket.length; i++){
			summ += this.basket[i].price;
		}
		return summ;
	}
}
renderGoods.generateGoods();

let items = document.getElementsByClassName("add");

for(let i = 0; i < goods.length; i++){
	items[i].addEventListener("click", function() {
  	let numOfGood = items[i].getAttribute('data-good');
  	basket.add(numOfGood);
  	basket.clear();
  	basket.generateGoods();
});
}

