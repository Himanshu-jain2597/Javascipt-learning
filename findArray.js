/**


The find() method returns the value of the first element in an array that pass a test (provided as a function).

The find() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
Otherwise it returns undefined


*/



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

const result = person.find((personOne)=> personOne.age===22);
console.log(result);
