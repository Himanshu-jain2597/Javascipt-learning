
const add = (a,b) => {

    return new Promise((resolve,reject)=> {

        setTimeout(()=> {
            resolve(a+b);
        },3000)
    })

}

// asyync function return a promise and promise is fulfilled with return value of himanshu
const doWork = async () => {
    //throw new Error('something went wrong')  // this line will run a catch block
    return 'himanshu'; // this will return then block.
}

doWork().then((result)=> {
    console.log(result)
}).catch((e)=> {
    console.log(e);
})

const addValue  = async () => {
    const sum =  await add(1,3);
	console.log(`this is sum ${sum}`)
	const sum2 =  await add(sum,1);  // this will only be call if upper await is fulfilled resolved correctly if it reject then it will notcall
	console.log(`add function ${sum2}`)
    return sum2;
}

addValue().then((result)=> {
console.log(`this is sum2 ${result}`);
}).catch(()=> {
    console.log('something went wrong');
})
