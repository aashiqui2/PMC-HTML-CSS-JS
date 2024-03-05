function isArmstrong(number) {
	let temp = number;
	let o = order(temp)
	let sum = 0;

	// Loop until temp is greater than 0
	while (temp) {
		remainder = temp % 10;

		// Floor value of the quotient
		temp = Math.floor(temp / 10);
		sum = sum + Math.pow(remainder, o);
	}
	if (sum === number) {
		console.log(number + " is an Armstrong Number");
	}
	else {
		console.log(number + " is Not an Armstrong Number");
	}
}

// Function to calculate number of digits
function order(number) {
	let n = 0;
	while (number > 0) {
		n++;
		number = Math.floor(number / 10);
	}
	return n;
}

// Input value 153
isArmstrong(153);

// Input value 520
isArmstrong(520);
