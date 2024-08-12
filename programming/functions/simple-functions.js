//Creating reusable blocks of code (function), passing parameters, and returning values.

//Non parameterized function to generate and return random numbers between 0-10
function getRandomNumber() {
	return parseInt(Math.random() * 10);
}

console.log(getRandomNumber());

//Parameterized function that accept one or more arguments or parameters
function getBigNumber(a, b) {
	if (a === b) return 'Both numbers are equal!';
	if (a > b) {
		return `${a} is bigger than ${b}`;
	}
	else {
		return `${b} is bigger than ${a}`;
	}
}

console.log(getBigNumber(2,2));