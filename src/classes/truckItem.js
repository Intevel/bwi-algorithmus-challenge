module.exports = class TruckPosition {

	constructor(name, amount, weight, value) {
		this.name = name;
		this.amount = amount;
		this.value = value;
		this.weight = weight;
	}
	getValue() {
		return this.amount * this.value;
	}

	getFullWeight() {
		return this.amount * this.weight;
	}

	getName() {
		return this.name;
	}

	getItemWeight() {
		return this.weight;
	}
	getItemAmount() {
		return this.amount;
	}
}