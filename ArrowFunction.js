// return square of a number with normal function
/**

Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body.

To be a constructor, a function object must have a [[Construct]] internal method.

Functions created with the function keyword are constructors, as are some built-in functions such as Date. These are the functions you can use with new.

Other function objects do not have a [[Construct]] internal method. These include arrow functions. So you can't use new with these. 

*/ 
const square =  function(number) {
	return number* number;
}



// return square of a number with arrow function 
const squareArrow = (number) =>  number*number;


console.log(squareArrow(5));


const car  = {
	color:'Red',
	getSummary() {
		return `the car is ${this.color}`
	}
}

console.log(car.getSummary());



const carArrow  = {
	color:'Red',
	getSummary:() =>  {
		return `the car is ${this.color}`    // the arrow function does not bind this of method..  never use arrow function in method and constructor.
	}
}

console.log(carArrow.getSummary());
