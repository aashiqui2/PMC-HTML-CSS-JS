function isEven(n){
    return n%2===0;
}
function printResult(evenFunction,num)
{
    const number=evenFunction(num);
    console.log(`The number ${num} is an Even number ${number}`);
}
printResult(isEven,5)