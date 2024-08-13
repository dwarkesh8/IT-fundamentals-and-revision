/*
When once class (Child) is extending another class (Parent)
to use parent class's properties, attributes, methods etc.

When you create child class that inherits parent class, you can do 
mainly two things: Override, Reuse
Override a method from parent class to change its behaviour
Reuse a method from parent class inside the child class to inhance it's functionality
*/

class Vehicle {
	constructor(type, speed) {
		this.type = type;
		this.speed = speed;
	}

	move() {
		return `${this.type} is moving at ${this.speed}`;
	}

	stop() {
		return `${this.type} is stopped`;
	}
}

class Car extends Vehicle {
	constructor(brand, model, speed) {
		super('car', speed); //using `super` keyword, calling parent class's contructor
		this.brand = brand;
		this.model = model;
	}

	//Override the `move` method
	move() {
		return `${this.brand} ${this.model} is driving at ${this.speed} km/h`;
	}

	//Reuse the `stop` method from the parent class
	stop() {
		return `${this.brand} ${this.model} is slowing down....` + super.stop();
	}

	//Additiona method in the child class
	honk() {
		return `${this.brand} honks beep beep...`;
	}
}

const myCar = new Car('BMW', 'i8', 200);

console.log(myCar.move()); //BMW i8 is driving at 200 km/h
console.log(myCar.honk()); //BMW honks beep beep...
console.log(myCar.stop()); //BMW i8 is slowing down....car is stopped
