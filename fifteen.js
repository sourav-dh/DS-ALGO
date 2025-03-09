/**
 * Flatten Array of Array 
 * 
 * input: [1, 2, 3, [4, 5, 6, [7, 8, [9, 10, [11]]]], 12, 13, 14, [15, 16, 17, [18, 19, 20]], 21, 22]
 * output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
 */

const output = []

function flatten(arr) {
	
	arr.forEach(val => {
		if (Array.isArray(val)) {
			flatten(val)
		}
		else {
			output.push(val)
		}
	})
	return output
}

const arr = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10, [11]]]], 12, 13, 14, [15, 16, 17, [18, 19, 20]], 21, 22]
console.log(flatten(arr))