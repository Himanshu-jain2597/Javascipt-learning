/**
 * When Function passed as a argument in another function then it is called callback function
 * javascript has only one thread . and everything will be executed throuth that call stack only
 */
function x(y) {
console.log("x");
y();

}

x(function y() {  // y is a call back function 
    console.log("y");
})

// count no. of time button 
function addListener() {
    let count = 0;
    document.getElementById("button").addEventListener("click",()=> { // addEventListener should be removed to prevent memory leakage
        ++count;
        console.log(count);
    })
}

addListener();
