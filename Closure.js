
// closure function when returned they remember their lexical environment.
function abc() {
    let a  = 2;
    function xyz() {
        console.log(a);
    }
    return xyz;
}

abc()();

// closure with set timeout 
function x() {
    var i=1;
    // function inside timeout will form a closure
    setTimeout(()=> {
        console.log(i);

    },1000);
}

x();


// closure with timeout with for loop 
function lo() {
    var i=1;
    for(i=1;i<5;i++) {
        setTimeout(()=> {
            console.log(i);   // output 6,6,6,6,6
        },i*1000);
    }
}

lo();

//closure with timeout with for loop 
function le() {
    for(let i=1;i<5;i++) {
        setTimeout(()=> {
            console.log(i);   // output 1,2,3,4,5 because let is block scope it will new copy of i 
        },i*1000);
    }
}

le();
