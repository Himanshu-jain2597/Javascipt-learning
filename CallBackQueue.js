// there are many features which is provided by browsers 
// like timeout fetch 
console.log("start");


setTimeout(()=> {

    console.log("callback"); // when 2000 time expire the function will go to callback queeue 
                             // event loop will check whether there is function to execute on call back queue

},2000);


console.log("end");
