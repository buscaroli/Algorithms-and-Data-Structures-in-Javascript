/* Write a function called maxSubarraySum which accepts an array of Integers
 * and a number n. The function should calculate the maximum sum of
 * n consecutive elements in the array.
*/

// The main index goes through the array from 0 tu its length - num.
// At every step, there is a inner loop that counts the sum of the next
// num elements of the array; at the end of the inner loop the sum is
// compared with the maximum value found so far (stored in the variable max)
// and if sum > max the maximum value is replaced.
// I have also inserted a console.log that prints the num elements responsible
// of the result but I have commented them as not requested from the problem;
// I would have preferred to return an object with both max and the elements.
// Time Complexity shhould be O(n^2) as there are two nested loops.
// Space complexity should be O(1) as no additional arrays or structures are
// created.
const maxSubarraySum = (arr, n) => {
    // If the length of the array is lower than n return null
    if (arr.length < n) {
        return null
    }

    // If the length of the array is equal to n loop through
    // return the sum of all the elements of the array.
    if (arr.length === n) {
        return arr.reduce((acc, curr) => {return acc + curr}, 0)
    }

    let max = -Infinity
    let starting_index = 0
    for (let i = 0; i < arr.length - num; i++){
        let sum = 0
        for (let j = 0; j < n; j++) {
            sum += arr[i+j]
        }
        if (sum > max) {
            max = sum
            starting_index = i
        }
    }
    // console.log(max)
    // console.log(`SubArray: ${arr.slice(starting_index, starting_index+num)}`)
    return max
}


// Alternative Algorithm: Time Complexity should be O(n) as it walks through
// the array only once.
const maxSubarraySum_2 = (arr, n) => {
    let max = -Infinity
    let sum = 0
    let j = 0
    if (arr.length < n) {
        return null
    }

    // Calculating the sum of the first n elements. At the end of the loop
    // j is incremented so it's in the right position for the second part
    // of the algorithm.
    for (j = 0; j < num; j++){
        sum+= arr[j]
    }
    max = sum

    // From now on we go through the rest of the array with a slot or
    // window or span of n elements. At every iteration of the loop we are
    // going to remove the value of the ex first element and add the value
    // of the next element of the slot.
    // At this beginning j should be at the right position of n (at the end of
    // the previous loop j was incremented).
    for (let i = 0; j < arr.length -1 ; i++, j++) {
        sum = sum - arr[i] + arr[j]
        
        if (sum > max){
            max = sum
        }
    }
    return max
}

const myArray = [6, -2, 0, 3, 8, 1, 4, 9, 2, 3]
const num = 10
console.log(`Array is: ${myArray} and n is: ${num}\n`)
console.log(`Result: ${maxSubarraySum(myArray, num)}`)
console.log(`Array is: ${myArray} and n is: ${14}\n`)
console.log(`Result: ${maxSubarraySum(myArray, 14)}`)
console.log(`Array is: ${'[]'} and n is: ${3}\n`)
console.log(`Result: ${maxSubarraySum([], 3)}`)

console.log(`Array is: ${myArray} and n is: ${num}\n`)
console.log(`Result: ${maxSubarraySum_2(myArray, num)}`)
console.log(`Array is: ${myArray} and n is: ${14}\n`)
console.log(`Result: ${maxSubarraySum_2(myArray, 14)}`)
console.log(`Array is: ${'[]'} and n is: ${3}\n`)
console.log(`Result: ${maxSubarraySum_2([], 3)}`)
