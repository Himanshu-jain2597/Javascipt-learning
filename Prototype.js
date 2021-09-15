// proto type
Function.prototype.mybind = () => {
    console.log('hell0');
}

// prototype with arrow 
const arrow = () => {

}


arrow.mybind();

const simple = function() {

}

// prototype with function expression
simple.mybind();

function functionStatement() {

}

functionStatement.mybind();
