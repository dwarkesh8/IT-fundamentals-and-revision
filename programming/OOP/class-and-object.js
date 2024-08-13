//Class is a blueprints for creating an objects, and Object is an instance of class

class Car {
	//constructor is the special function that executes upon creation of each object
	//to initialize variables and attach it to the object
	constructor(brand, model, year) {
		this.brand = brand;
		this.model = model
		this.year  = year;
	}

	//custom method that can be called by using myCar object (using . operation in JS)
	startEngine() {
		return `Engine has been started for the ${this.brand} ${this.model} ${this.year}`;
	}
}

//creating Object `myCar` of the class `Car`
const myCar = new Car('Maruti Suzuki', 'VXi', 2023);
console.log(myCar.startEngine());


//Output: Engine has been started for the Maruti Suzuki VXi 2023