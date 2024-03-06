// console.log( 5=='5');
// console.log( 5==='5');
// console.log(1==-1);
// console.log(1==true);
// console.log(1===true);
// console.log(NaN==NaN);
// console.log(NaN===NaN);


//little difference in this Object.is()
console.log(Object.is(NaN, NaN));
console.log(NaN===NaN);

console.log(Object.is(0,-0));
console.log(0===-0);
console.log(1==-1);
console.log(1+undefined);//NaN

+c