// return square of a number with normal function
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
