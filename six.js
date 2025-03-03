/**
 * Check Square Elements of Another Array
 * 
 * input: [1, 2, 3, 4], [4, 1, 16, 9]
 * output: true
 * 
 * Method : Greedy and timecomplexity O(n^2)
 */

function checkSquareElement(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		throw new Error('Array length should match')
	} else {
		for(let i = 0; i < arr1.length; i++) {
			const squareElement = arr1[i] * arr1[i]
			let isMatched = false

			for(let j = 0 ; j < arr2.length; j++) {
				if (squareElement === arr2[j]) {
					isMatched = true
					break
				}
			}

			if (!isMatched) {
				return false
			}
		}
		return true
	}
}

console.log(checkSquareElement([1, 2, 3, 4], [4, 1, 16, 9]))