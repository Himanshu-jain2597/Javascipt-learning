let car = {
	name:'himanshu',
	channel:'coding',
	run:function() {
		console.log('car is running');
	}
}



// object has an additional property call as __proto__..   start with object prototype


// creating a constructor for general car.. // arrow function cannot be used with new keywoard.. and throw an error if used with new 
  function generalCar(name,speed){
	this.name =  name;
	this.speed = speed;
	this.run = function() {
		console.log(`${this.name} is running`)
	}
}

const car1 =  new generalCar('nissan',90);
console.log(car1);
