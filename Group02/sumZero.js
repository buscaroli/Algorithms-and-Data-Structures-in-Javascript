/*      MULTIPLE POINTERS PATTERN
 * Write a function called sumZero which accepts a sorted array
 * of Integers. TYhe function should find the first pair where
 * the sum is zero. Return an array which contains both numbers 
 * or return undefined.
*/

// Two nested for loops: O(n^2)
// Compoare the element at index 0 with the element at the
// end of the array and keep decreasing the j pointer until
// either a match is found or j id at position i+1.
// At this point the outer loop increases, j is reset to the
// end of the array and everything starts again until either
// a match is found and the two number are returned as an array
// or a match isn't found and the function returns undefined.
const sumZero_01 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length-1; j > i; j--) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }

        }
    }
    return undefined
}

const exampleArray = [-3, -2, -1, 0, 1, 2, 3]
console.log(`Array: ${exampleArray}\n
             Result: ${sumZero_01(exampleArray)}\n`)

const exampleArray2 = [-2, 0, 1, 3]
console.log(`Array: ${exampleArray2}\n
             Result: ${sumZero_01(exampleArray2)}\n`)


// Second Method: O(n) using a Multiple Pointers Pattern
// The two pointers start at the two ends of the array and
// the elements are summed:
// - if the sum is > 0 j is decreased
// - if the sum is < 0 i is increased
// This way the array is looked through only once -> O(n)
const sumZero_02 = (arr) => {
    for (let i = 0, j = arr.length-1; i !== j; ){
        let sum = arr[i] + arr[j]
        if (sum === 0){
            return [[arr[i], arr[j]]]
        } else {
            sum > 0 ? --j : ++i
        }
    }
    return undefined
}



console.log(`Array: ${exampleArray}\n
             Result: ${sumZero_02(exampleArray)}\n`)

console.log(`Array: ${exampleArray2}\n
             Result: ${sumZero_02(exampleArray2)}\n`)
