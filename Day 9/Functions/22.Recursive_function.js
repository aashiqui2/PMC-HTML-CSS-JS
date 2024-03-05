//Recursive Function

// function countDown(num){
//     if(num>=0)
//         console.log(num);
//         countDown(num-1)
    
// }
// countDown(10)

function FetchWater(count){
    if(count===0){
        console.log("No more Water left!");
        return;
    }
    console.log("Fetching the water");
    FetchWater(count-1)
}
FetchWater(3)