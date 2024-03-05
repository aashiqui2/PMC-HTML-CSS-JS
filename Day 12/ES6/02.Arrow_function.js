const square=function(number){
    return number*number;
}
const a=b=>b*b;




console.log(square(2));
// if we have single parameter we can remove parenthesis
// if we  single line code so we can remove return statement  and curly braces, if we did'nt remove curly braces.we get undefined
const squareCopy=number=>number*number;

console.log(square(5));
console.log(squareCopy(5));


// const jobs=[
//     {id:1,name:"ram",isActive:true},
//     {id:2,name:"kumar",isActive:false},
//     {id:3,name:"babu",isActive:true}
// ]

// const activeJobs=jobs.filter(function(job){return job.isActive==true; })
// const activeJobs=jobs.filter((job)=> job.isActive==true)
// console.log(activeJobs); 