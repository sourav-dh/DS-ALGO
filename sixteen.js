/**
 * Reverse a sentence
 * 
 * input: I Love Javascript
 * output: I evoL tpircsavaJ
 */

function reverseSentence(str) {
	let arr = str.split(' ')
	arr = arr.map(val => val.split('').myreverse().join(''))
	return arr.join(' ')
}

Array.prototype.myreverse = function() {
	const output = []
	let index = this.length
	for (let str of this) {
		output[--index] = str
	}
	return output
}

console.log(reverseSentence('I Love Javascript'))