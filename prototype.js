let car = {
	name:'himanshu',
	channel:'coding',
	run:function() {
		console.log('car is running');
	}
}


console.log(car);


// object has an additional property call as __proto__..   start with object prototype


// creating a constructor for general car
  function generalCar(name,speed){
	this.name =  name;
	this.speed = speed;
	this.run = function() {
		console.log(`${this.name} is running`)
	}
}

// adding a getName in generalCar prototype.. always change prototype of constructor object..
generalCar.prototype.getName= function() {
	return this.name;
}

const car1 =  new generalCar('nissan',90);

console.log(car1);
console.log(car1.getName())
