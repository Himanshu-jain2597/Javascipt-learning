
const person  = [{
	name : 'himanshu',
	age : 21
}, {
name: 'jain',
age:22
}, {
	name:'kumar',
	age:31
}
]



// Return an array of all the values in the ages array that are 30 or less:
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

const under30 = person.filter(function(personOne) {
	return personOne.age<30;
})

console.log(under30);
