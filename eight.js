/**
 * Find odd number using Helper Recursive function
 * 
 * input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 * output: [1, 3, 5, 7, 9, 11]
 */

function findOddNumber(arr) {
	const oddNumberArr = []
	helperFindOddNumber(arr)
	function helperFindOddNumber(arr) {
		if(arr[0] % 2) {
			oddNumberArr.push(arr[0])
		}
		if(arr.length === 1) {
			return
		}
		helperFindOddNumber(arr.slice(1))
	}
	return oddNumberArr
}

console.log(findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]))