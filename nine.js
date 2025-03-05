/**
 * linear search Algorithm
 * 
 * input: 
 * user = [
 * 	{name: 'John', age: 25},
 * 	{name: 'Dave', age: 35},
 * 	{name: 'Goldberg', age: 34}
 * ], "Dave"
 * 
 * output: true
 */

function linearSearch(users, findName) {
	for(let user of users) {
		if (user.name === findName) {
			return true
		}
	}
	return false
}

users = [
	{name: 'John', age: 25},
	{name: 'Dave', age: 35},
	{name: 'Goldberg', age: 34}
]

console.log(linearSearch(users, 'John'))