/*
same method names exists in two different classes, 
i.e: broadcastNews() method in both the Classes Internation & National

Let's understand how it works based on the object of the class. 
*/

class International {
	broadcastNews() {
		return `International news broadcasting...`;
	}
}

class National {
	broadcastNews() {
		return `National news broadcasting...`;
	}
}

const news = [new International(), new National()];

news.forEach(item => {
	console.log(item.broadcastNews());
});

/*
Output:
International news broadcasting...
National news broadcasting...
*/

/*
Explanation:
- The `broadcastNews` method is polymorphic; it behaves differently depending on whether the object is an instance of `International`, or `National` Class.
- Polymorphism allows for the same method to be called on different objects, and the correct method is executed based on the object's class.
*/