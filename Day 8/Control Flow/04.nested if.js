let i = 10;
if (i == 10) { // First if statement
	if (i < 15) {
		console.log("i is smaller than 15");
		// Nested - if statement
		if (i < 12)
			console.log("i is smaller than 12 too");
		else
			console.log("i is greater than 15");
	}
}
