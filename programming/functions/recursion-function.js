//A function that calls itself, useful in problems like factorial calculation, Fibonacci series, etc.

//A function to calculate factorial of a number
function factorialOf(n) {
	if (n == 1 || n == 0) {
		return 1;
	}
	return n * factorialOf(n - 1);
}

console.log(factorialOf(4));