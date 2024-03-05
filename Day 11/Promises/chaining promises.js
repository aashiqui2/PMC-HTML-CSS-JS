// Function that returns a Promise to simulate an asynchronous operation
function asyncOperation(value, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(`Operation completed with value: ${value}`);
        }, delay);
    });
}

// Chaining Promises
asyncOperation(1, 1000)
    .then(function(result1) {
        console.log(result1);
        return asyncOperation(2, 1500);
    })
    .then(function(result2) {
        console.log(result2);
        return asyncOperation(3, 500);
    })
    .then(function(result3) {
        console.log(result3);
        // You can continue chaining as needed
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
