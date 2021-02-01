

// variables in javasctipt can be declared with var,let,const 

var name  = 'himanshu';
var city = 'delhi';
var channel;
console.log(name);     // himanshu 
console.log(channel);  // undefined


const name1  = 'jain';
// name1 =  'goyal';   // cannot do this because const variable cannot be changed... 
console.log(name1);



// let is block level scope   let makes local variables of scope. 
{
	let city = 'ratia';
	city = 'fatehabad'
	console.log(city);
	
}

console.log(city);
