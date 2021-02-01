const person = {
	name:'him',
	age:'89',
	walk() {		// method function define in object 
		console.log(this);              // this return reference to current object.. 
	}
};

person.walk();
const walk = person.walk // assign a function to walk variables.  
walk();                // window object 


const walk1 = person.walk.bind(person);  // bind this to person object
walk1();
