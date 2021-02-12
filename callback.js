
// call back is nothing but function pass  as argument 
setTimeout(()=> {
    console.log('async is running')
},2000)


const names = ['himanshu','jain','him']

const shortName = names.filter((name)=> {
return name.length<=4;
})


const geocode = (address,callback) => {
   setTimeout(()=> {
    const data = {
        lat:0,
        log:0
    }
    callback(data);  // calling a callback with data as argument
   },2000)
}

geocode('ratia',(data)=> {

    console.log(data);  // geocode has 2 argument ratia and annoyonums function.
});
