/**
 * Check if a string is anagram or not
 * 
 * input : hello, llhoe
 * output : true
 * 
 * input : hello, llleo
 * output : false
 */

function checkAnagram(string1, string2) {
	if (string1.length !== string2.length) {
		return false
	}

	const counterObj = {}
	for (const str of string1) {
		counterObj[str] = (counterObj[str] || 0) + 1
	}

	for (const str of string2) {
		if(!counterObj[str]) {
			return false
		}
		counterObj[str]--
	}

	return true
}

console.log(checkAnagram('hello', 'lllho'))