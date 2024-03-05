let grade = 'B';
let result;
switch (grade) {
	case 'A':
		result = "A (Excellent)";
		break;
	case 'B':
		result = "B (Average)";
		// break;
	case 'C':
		result = "C (Below than average)";
		break;
	default:
		result = "No Grade";
}
console.log(result);


//another example
let i = 9;
switch (i) {
	case 0:
		console.log("i is zero.");
		break;
	case 1:
		console.log("i is one.");
		break;
	case 2:
		console.log("i is two.");
		break;
	default:
		console.log("i is greater than 2.");
}
