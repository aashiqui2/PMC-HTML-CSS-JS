let mypromise=new Promise(function(resolve,reject){
    const a=4;
    const b=4;
    setTimeout(()=>{
        if(a==b){
            resolve('the value is equal')
        }
        else{
            reject('the value is not equal')
        }
    },4000)
});
mypromise.then((result)=>{
    console.log(result);
})

mypromise.catch((err)=>{
    console.log(err);

})

