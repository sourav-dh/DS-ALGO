/**
 * Sorting algorithms | Bubble Sort Implementation
 * time complexity: O(n ^ 2)
 * 
 * input: [4, 5, 1, 3, 2]
 * output: [1, 2, 3, 4, 5]
 */

function bubbleSort(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let isSwaped = false;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j],  arr[j + 1]] = [arr[j + 1],  arr[j]]
				isSwaped = true
			}
		}
		if (!isSwaped) {
			break
		}
	}
	return arr
}

console.log(bubbleSort([4, 5, 1, 3, 2, 6]))
