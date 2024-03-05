// let count=0;
// for(let a=1;a<=10;a++){
//     if(a%2==0)
//     {
//         // console.log(a);
//         count++;
//     }
// }
// console.log(count);




let a=153;
let rem=0,sum=0;
let cpy=a;

while(cpy!=0)
{
    rem=cpy%10;
    sum=sum+(rem*rem*rem);
    cpy=Math.floor(cpy/10);
}
console.log(sum);


