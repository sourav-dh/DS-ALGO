/**
 * Find the count of unique numbers in a sorted array
 * 
 * input: [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
 * output: 8
 */

function countUniqueNumber(arr) {
	if (arr.length === 0) {
		throw new Error('Array is empty')
		return false
	}
	let i = 0
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++
			arr[i] = arr[j]
		}
	}
	return i + 1
}

console.log(countUniqueNumber([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9]))