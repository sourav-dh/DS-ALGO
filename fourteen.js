/**
 * List all employees who comes under "a"
 * 
 * input: 
 const team = {
	name: 'a',
	teams: [
		{
			name: 'b',
			teams: [
				{
					name: 'c',
					teams: [
						{
							name: 'd',
							teams: []
						},
						{
							name: 'e',
							teams: []
						}
					]
				},
				{
					name: 'f',
					teams: []
				}
			]
		}
	]
}
 *
 *output: [b, c, d, e, f]
 */

function getTeamMates(teams) {
	const result = []

	helperGetTeamMates(teams)

	function helperGetTeamMates(teams) {
		if (teams.teams.lenth === 0) {
			return
		}
		teams.teams.forEach(team => {
			result.push(team.name)
			helperGetTeamMates(team)
		})
	}

	return result
}

const teams = {
	name: 'a',
	teams: [
		{
			name: 'b',
			teams: [
				{
					name: 'c',
					teams: [
						{
							name: 'd',
							teams: []
						},
						{
							name: 'e',
							teams: []
						}
					]
				},
				{
					name: 'f',
					teams: []
				}
			]
		}
	]
}

console.log(getTeamMates(teams))


/**
 * Recursion to Sum All Values in a Deeply Nested Object
 * 
 * input:
 const nestedObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: 10
        },
        anotherValue: 5
      },
      value: 20
    },
    value: 30
  },
  value: 50
};
 *
 *output: 115
 */

function sumInObject(obj) {
	let sum = 0

	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			sum += obj[key]
			return sum
		} else if (typeof obj[key] === 'object') {
			sum += sumInObject(obj[key])
		}
	}
}

const nestedObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: 10
        },
        anotherValue: 5
      },
      value: 20
    },
    value: 30
  },
  value: 50
};
console.log(sumInObject(nestedObject))


/**
 * Flatten a Deeply Nested Object (Converting to a Flat Object)
 * 
 * input: 
const nestedObject1 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      }
    },
    key3: "value3"
  },
  key4: "value4"
};
 *
 * output: 
{
  "level1.level2.level3.key1": "value1",
  "level1.level2.level3.key2": "value2",
  "level1.key3": "value3",
  "key4": "value4"
}
 */

const nestedObject1 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      }
    },
    key3: "value3"
  },
  key4: "value4"
};

function flattenObject(obj, parentKey = '', result = {}) {
	for (let key in obj) {
		const newKey = parentKey ? parentKey + '.' + key : key
		if (typeof obj[key] === 'object') {
			flattenObject(obj[key], newKey, result)
		} else {
			result[newKey] = obj[key]
		}
	}
	return result
}

console.log(flattenObject(nestedObject1))

/**
 * Find a Specific Key in a Deeply Nested Object
 * 
const nestedObject2 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      }
    },
    key3: "value3"
  },
  key4: "value4"
};
 *
 *
 *input: nestedObject, "key2"
 *output: value2
 */

const nestedObject2 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      }
    },
    key3: "value3"
  },
  key4: "value4"
};

function findSpecificKey(obj, inputKey) {
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			const result = findSpecificKey(obj[key], inputKey)
			if (result) return result
		} else {
			if (inputKey === key) {
				return obj[key]
			}
		}
	}

	return null
}

console.log(findSpecificKey(nestedObject2, 'key1'))


/**
 * Count the Number of Leaf Nodes in a Deeply Nested Object
const nestedObject3 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      },
      key3: "value3"
    },
    key4: "value4"
  },
  key5: "value5"
};
 * 
 * input: nestedObject
 * output: 5
 */

const nestedObject3 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      },
      key3: "value3"
    },
    key4: "value4"
  },
  key5: "value5"
};

function countLeafNodes(obj) {
	let count = 0
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			count += countLeafNodes(obj[key])
		} else {
			++count
		}
	}

	return count
}

console.log(countLeafNodes(nestedObject3))


/**
 * Collect All Keys in a Deeply Nested Object
const nestedObject4 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      }
    },
    key3: "value3"
  },
  key4: "value4"
};
 * 
 * input: nestedObject4
 * output: ["level1", "key4", "level2", "key3", "level3", "key1", "key2"]
 */

function collectAllKeys(obj, keyArr = []) {
	for (let key in obj) {
		keyArr.push(key)

		if (typeof obj[key] === 'object') {
			collectAllKeys(obj[key], keyArr)
		}
	}

	return keyArr
}

const nestedObject4 = {
  level1: {
    level2: {
      level3: {
        key1: "value1",
        key2: "value2"
      }
    },
    key3: "value3"
  },
  key4: "value4"
};

console.log(collectAllKeys(nestedObject4))