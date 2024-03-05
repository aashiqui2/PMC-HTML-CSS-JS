
const courses = { 
	firstCourse: 'JavaScript', 
	secondCourse: 'React', 
	thirdCourse: 'Angular'
}; 
let value = ''; 
for (let item in courses) { 
	value += courses[item] + " "; 
} 
console.log(value);


//with arrays

const numbers = [1, 2, 3, 4, 5];

for (let index in numbers) {
  console.log(index); // Outputs: 0, 1, 2, 3, 4
}
