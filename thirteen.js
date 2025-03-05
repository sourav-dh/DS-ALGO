/**
 * Check if Given String is Palindrome or not
 * 
 * input: dad | 1221 | noon
 * output: true
 */

function checkPalindrome(string) {
	let left = 0,
		right = string.length - 1
		isPalindrome = true
	const strArr = string.split('')
	while(left <= right) {
		if (strArr[left] !== strArr[right]) {
			isPalindrome = false
			break
		}
		left++
		right--
	}
	return isPalindrome
}

console.log(checkPalindrome('dad'))