//Example of BankAccount class with withdraw and deposit methods
//there's one private property too, #balance

class BankAccount {
	#balance = 0; //private property

	deposit(amount) {
		if (amount > 0) {
			this.#balance += amount;
		}
	}

	withdraw(amount) {
		if (amount <= this.#balance && amount > 0) {
			this.#balance -= amount;
		}
	}

	checkBalance() {
		return this.#balance;
	}
}

const myAccount = new BankAccount();
console.log(myAccount.checkBalance()); //Output: 0

myAccount.deposit(2000);
console.log(myAccount.checkBalance()); //Output: 2000

myAccount.withdraw(1000);
console.log(myAccount.checkBalance()); //Output: 1000


