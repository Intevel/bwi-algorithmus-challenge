const fs = require('fs');
const Truck = require('./classes/truck.js');
const truckItem = require('./classes/truckItem.js');
const data = require("../data.json");
var asTable = require('as-table')

var remainingItemsDocument = fs.createWriteStream("../documents/remaining_items.txt", {
	flags: 'a'
})

async function start() {
	let valueOfAll = 0;

	const driversWeight = data.drivers.sort();

	if (driversWeight.length !== data.trucks.length) {
		throw new Error('Error with truck drivers');
	}

	const truckList = data.trucks.map((truck, i) => {
		return new Truck(truck.name, truck.maxLoad - driversWeight[i]);
	});

	let remainingItems = data.products.map((product) => {
		const newProduct = {
			...product,
		};
		return newProduct;
	});

	truckList.forEach((truck) => {
		remainingItems = loadTruck(truck, remainingItems);
		truck.createProductList();
		valueOfAll += truck.getValue();
	})
	remainingItemsDocument.write("\n" + asTable(remainingItems))
	console.log('Value of All: ' + valueOfAll);
}

function loadTruck(truck, remainingItems) {
	const newremainingItems = remainingItems.map((product) => {

		const productsToLoad = new truckItem(product.name, calculateAmountByWeight(product.amount, product.weight, truck.getRemainingWeight()), product.weight, product.value);

		if (!truck.checkProductsForLoading(productsToLoad)) throw new Error('Truck Overloading');

		truck.loadProducts(productsToLoad);
		const newItem = {
			...product,
			amount: product.amount - productsToLoad.getItemAmount()
		};
		return newItem;
	}).filter((item) => {
		return item.amount > 0;
	});
	return newremainingItems;
}

function calculateAmountByWeight(amount, weight, truckWeight) {
	const calculatedAmount = Math.floor(truckWeight / weight);
	if (calculatedAmount >= amount) {
		return amount;
	} else {
		return calculatedAmount;
	}
}

start();