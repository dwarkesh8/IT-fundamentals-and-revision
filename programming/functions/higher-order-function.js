//A higher order function is a function that takes a function as an argument and return a function.
//Generally use to contruct a new function

//Example: we are creating a multipler function based on an argument
function createMultiplier(multiplier) {
	return function(number) {
		return number * multiplier;
	}
}

multiplyByTwo = createMultiplier(2);
multiplyByFive = createMultiplier(5);

console.log(multiplyByTwo(5)); //output: 10
console.log(multiplyByFive(6)); //output: 30


//Another example using `map`
//It's doubling each elements of an Array
function doubleArray(arr) {
	return arr.map(function(element){
		return element * 2;
	});
}

const numbers = [2,3,5,6,8];
console.log(doubleArray(numbers)); //output: [ 4, 6, 10, 12, 16 ]
