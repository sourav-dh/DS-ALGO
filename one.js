/**
 * Find the first pair from a sorted array whose sum is zero
 * 
 * input : [-5, -4, -3, -2, 0, 2, 4, 6, 8]
 * output : [-4, 4]
 */

function findPairSumZero(arr) {
	let left = 0,
		right = arr.length - 1
	while(left < right) {
		const sum = arr[left] + arr[right]

		if(sum === 0) {
			return [arr[left], arr[right]]
		} else if (sum > 0) {
			right--
		} else if (sum < 0) {
			left++
		}
	}
}

console.log(findPairSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]))


/**
 * Find the first pair from an array whose sum is close to zero
 * 
 * input : [4, 8, -7, -3, -9, 2]
 * output : (2, -3)
 * 
 * input : [7, -2, -8, 5, 1, -4]
 * output : (-2, 1)
 */

function findPairCloseToZero(arr) {
	const sortedArr = arr.sort((a, b) => a - b)
	let left = 0,
		right = sortedArr.length - 1,
		tempSum = Infinity,
		pair = []

	while(left < right) {
		const sum = sortedArr[left] + sortedArr[right]
		if (Math.abs(sum) <= Math.abs(tempSum)) {
			tempSum = sum
			pair = [sortedArr[left], sortedArr[right]]
		}

		if (sum > 0) {
			right--
		} else if (sum < 0) {
			left++
		} else {
			break
		}
	}

	return pair;
}

console.log(findPairCloseToZero([4, 8, -7, -3, -9, 2]), 
findPairCloseToZero([7, -2, -8, 5, 1, -4]), 
findPairCloseToZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]))



