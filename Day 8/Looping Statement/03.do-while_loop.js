// Exit Controlled Loops: In this type of loop the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. the do-while loop is exit controlled loop.

let val = 1; 

do { 
	console.log(val); 
	
	val += 1; 
	
} while (val < 6); 
