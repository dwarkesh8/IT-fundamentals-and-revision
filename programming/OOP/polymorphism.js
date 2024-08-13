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
