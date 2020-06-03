/* Implement the function countUniqueValues.
 * It accepts a sorted array and counts the unique
 * values.
*/

// Create a counter and set it to 0, then create a frequency object
// and set it to an empty object.
// Loop through the array, if the item is not present in the frequency
// object add it and increase the counter.
// Return the counter (in case of an empty array the counter was
// initially set to 0).
// It should be O(n) as it only goes through the array once.
const countUniqueValues = (arr) => {
    let count = 0
    let freq = {}

    for (let num of arr) {
        if( !(num in freq)){
            count++
            freq[num] = true
        }
    }
    return count
}

const myArray = [-5, -3, -3, 0, 2, 2, 4, 6, 6]
const emptyArray = []

console.log(`Array: ${myArray}`)
console.log(`Unique Values: ${countUniqueValues(myArray)}\n`)
console.log(`emptyArray: ${emptyArray}`)
console.log(`Unique Values: ${countUniqueValues(emptyArray)}\n`)

// Alternative function: set a counter to 0, create two pointers, one will keep
// track of the previous element of the array, and the other will check if the
// current element is greater of the previous; in the latter case the counter
// will be increased.
// At the end of the loop return the counter (counter is initially set to 0 in
// case of an empty array).
// It should be O(n) as it goes through the array only once but the Space 
// Performance should be better than the previous algorithm as it only keeps 
// track of two values instead of adding values to an object.
const countUniqueValues_2 = (arr) => {
    let count = 0
    let prev = -Infinity
    let current = -Infinity + 1
    for (let num of arr) {
        prev = current
        current = num
        if (current > prev){
            count++
        }
    }
    return count
}


console.log(`Array: ${myArray}`)
console.log(`Unique Values: ${countUniqueValues_2(myArray)}\n`)
console.log(`emptyArray: ${emptyArray}`)
console.log(`Unique Values: ${countUniqueValues_2(emptyArray)}\n`)


// Third Solution: one liner.
// Set should be O(n)
function countUniqueValues_3(arr) {
    return new Set(arr).size;
  }
console.log(`Array: ${myArray}`)
console.log(`Unique Values: ${countUniqueValues_3(myArray)}\n`)
console.log(`emptyArray: ${emptyArray}`)
console.log(`Unique Values: ${countUniqueValues_3(emptyArray)}\n`)
