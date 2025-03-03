/**
 * Find the index from a sorted array using Divide & Conquerer Technique | Binary Search
 * 
 * input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7
 * output: 6
 */

function binarySearch(arr, element) {
	let min = 0,
		max = arr.length - 1
	
	while(min <= max) {
		const mid = Math.floor((min + max) / 2)
		if (arr[mid] > element) {
			max = mid - 1
		} else if (arr[mid] < element) {
			min = mid + 1
		} else {
			return mid
		}
	}
	return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7))