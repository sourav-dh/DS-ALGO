/**
 * Largest Sum of Consecutive Digits
 * 
 * input: [1, 2, 3, 4, 13, 5, 4, 6, 7, 8], 4
 * output: 28
 */

function largestSum(arr, num) {
	if (num > arr.length) {
		throw new Error('num can not be exceed the length of array')
	} else {
		let maxSum = 0
		for(let i = 0; i <= arr.length - num; i++) {
			let sum = 0
			for (let j = i; j < i + num; j++) {
				sum += arr[j]
			}
			if (sum > maxSum) {
				maxSum = sum
			}
		}
		return maxSum
	}
}

console.log(largestSum([1, 2, 3, 4, 13, 5, 4, 6, 7, 8], 4))


/**
 * Time complexity : O(n)
 */

function largestSumLinear(arr, n) {
	let maxSum = 0,
		currentSum = 0
	for (let i = 0; i < n; i++) {
		currentSum += arr[i]
	}
	maxSum = currentSum

	for (i = n; i < arr.length; i++) {
		currentSum = currentSum - arr[i - n] + arr[i]
		maxSum = Math.max(maxSum, currentSum)
	}

	return maxSum
}

console.log(largestSumLinear([1, 2, 3, 4, 13, 5, 4, 6, 7, 8], 4))