/**
 * Find the Maximum Occurring Character in String
 * 
 * input: Hello world
 * output: l
 */

function findMaxOccuranceChar(string) {
	const stringMap = {}
	for (let str of string.replace(' ', '')) {
		stringMap[str] = (stringMap[str] | 0) + 1
	}
	
	let maxChar = 1,
		character = ''
	for (let key in stringMap) {
		if (stringMap[key] >= maxChar) {
			maxChar = stringMap[key]
			character = key
		}
	}

	return character
}

console.log(findMaxOccuranceChar('Hello world'))
