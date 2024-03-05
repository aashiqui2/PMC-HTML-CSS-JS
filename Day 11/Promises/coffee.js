function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('order for coffee received')
        }
        else{
            reject('Other order rejected')
        }

    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(`${order} and  is served`)
    
    })

}

placeOrder('cofee').then(function(orderPlaced){
    console.log(orderPlaced);
    // let orderIsProcessed=processOrder(orderPlaced)
    // return orderIsProcessed
    return processOrder(orderPlaced)
}).then(function(processOrder){
   console.log(processOrder);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("thanks for ordering the cofee");
})