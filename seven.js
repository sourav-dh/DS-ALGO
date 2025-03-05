/**
 * Advance Recursive function | Sorting
 * 
 * Input : [2, 3, 1, 4]
 * Output : [1, 2, 3, 4]
 */

function isSorted(arr) {
	let isSort = true
	for (let i = 0; i < arr.length -1; i++) {
		if (arr[i] > arr[i + 1]) {
			isSort = false
			break
		}
	}
	return isSort
}

function recursiveSort(arr) {
	if (arr.length <= 1) {
		return arr
	}

	let sortedArr = []

	helperRecursiveSort(arr)

	function helperRecursiveSort(arr, i = 0, j = 1) {

		if (isSorted(arr)) {
			sortedArr = arr
			return
		}

		if (arr[i] < arr[j]) {
			helperRecursiveSort(arr, ++i, ++j)
		} else {
			[arr[i], arr[j]] = [arr[j], arr[i]]
			helperRecursiveSort(arr)
		}
	}

	return sortedArr
}

console.log(recursiveSort([2, 3, 1, 4]))