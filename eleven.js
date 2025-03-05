/**
 * Sorting algorithms | Selection sort Implementation
 * 
 * input: [0, 4, 34, 22, 10, 19]
 * output: [0, 4, 10, 19, 22, 34]
 */

function selectionSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		if (min !== i) {
			[arr[i], arr[min]] = [arr[min], arr[i]]
		}
	}
	return arr
}
console.log(selectionSort([0, 4, 34, 22, 10, 19]))