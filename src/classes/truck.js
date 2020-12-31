const fs = require("fs")
var asTable = require('as-table')


module.exports = class Truck {

	constructor(name, max) {
		this.max = max;
		this.name = name;
		this.productList = [];
	}

	loadProducts(products) {
		if (this.checkProductsForLoading(products)) {
			if (products.getItemAmount() > 0) this.productList.push(products);
		} else {
			throw new Error('Overloading');
		}
	}

	createProductList() {
		var transportPlan = fs.createWriteStream(`../documents/${this.name}.txt`, {
			flags: 'a'
		})
		transportPlan.write('\n\nTruck: ' + this.name);
		transportPlan.write('\nAdditional Load without driver: ' + (this.getWeight()) / 1000 + "KG");
		transportPlan.write('\nValue of all in the Truck: ' + this.getValue());
		transportPlan.write('\nRemaining Space: ' + (this.max - this.getWeight()) / 1000 + "KG");
		transportPlan.write("\n\n" + asTable(this.productList) + "\n")
		console.log(`Done! Look at "documents/${this.name}.txt" to see the results!`)
	}

	checkProductsForLoading(products) {
		return (this.getRemainingWeight() >= products.getFullWeight());
	}

	getWeight() {
		return this.productList.reduce((a, product) => {
			return a + product.getFullWeight();
		}, 0);
	}

	getValue() {
		return this.productList.reduce((a, product) => {
			return a + product.getValue();
		}, 0);
	}

	getRemainingWeight() {
		return this.max - this.getWeight();
	}

	getMax() {
		return this.max;
	}

}