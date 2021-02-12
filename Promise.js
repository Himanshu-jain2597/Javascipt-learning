
// promise is just like a callback but promise make syntax easy here promise is a Promise Object
const promise = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve([7,4,1]);

    },2000)
})



// promise has then and catch method .then is called when promise is resolved
promise.then((result)=> {
console.log(result);
}).catch((error)=> {
    console.log(error);
})
