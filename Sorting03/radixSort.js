/* Radix Sort Sorting Algorithm.
 *
 * Time Complexity:
 *      Best Case, Avg case and Worst Case: O(nk) (performance decreases for
 *              very long numbers).
 *              If all numbers of the array are distinct the performace
 *              is more correctly described as O(n log(n)).
 *          Summary: Should be at least as efficient as Divide and Conquer
 *                   sorting algorithms, and it becomes more efficient in
 *                   some specific scenarios.
 *
 * Space Complexity: O(n + k) as an array with k elements needs to be created
 *                   (where k = digits of largest number in the array).
 *
 * Improves the efficiency over the O(n log(n)) algorithms like MergeSort
 * and QuickSort but it can only be used when the elements of the array belongs
 * to a restricted numerical range (eg 0 - 99, 0 - 399 etc). In fact we cannot
 * improve the performance of O(n log(n)) using a comparison sorting algorithm.
 *
 * It can be only used on numbers, so if our data is not number-based it needs
 * to be converted (eg strings).
 *
 * It doesn't make comparison between the elements of an array, instead it
 * exploits the fact that information about the size of a number is encoded in
 * the number  of digits (eg 12 is lower than 345 because it has only two
 * digits instead of three).
 *
 * It's STABLE (equal elements keep their relative position)
 *
 * It doesn't change the original array
 *
 */

// Helper function that returns the number of digits of a number
const digitCount = (num) => {
  return num.toString().length
}

// Alternative version of digitCount
// const digitCount2 = (num) => {
//     if (num === 0) return 1
//     return Math.floor(Math.log10(Math.abs(num))) + 1
// }

//Helper function that returns the digit at a given position
const getDigit = (num, pos) => {
  const numLen = digitCount(num)
  if (pos >= numLen) return 0
  return parseInt(num.toString()[numLen - pos - 1])
}

// Alternative version of getDigit
// const getDigit2 = (num, pos) => {
//     return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
// }

// Helper function that returns the length of the number with most digits
const mostDigits = (arr) => {
  const max = arr.reduce((a, b) => {
    if (digitCount(a) > digitCount(b)) {
      return a
    }
    return b
  }, '0')
  return max.toString().length
}

// Alternative to mostDigits
// const mostDigits2 = (arr) => {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         max = Math.max(max, digitCount(arr[i]))
//     }
//     return max
// }

// Testing mostDigits
// const myArray = [23, 0, 2345, 2, 345, 456]
// console.log(mostDigits(myArray))

// Testing getDigit
// const myNum = 3425
// console.log(getDigit(myNum, 0))
// console.log(getDigit(myNum, 1))
// console.log(getDigit(myNum, 2))
// console.log(getDigit(myNum, 3))
// console.log(getDigit(myNum, 4))
// console.log(getDigit(myNum, 7))

const radixSort = (arr) => {
  const maxDigits = mostDigits(arr)
  let piles // an array of arrays

  // Creating a number of arrays(piles) equal to the number of digits of the
  // largest element of the array that needs to be sorted.
  for (let k = 0; k < maxDigits; k++) {
    // Each pile will have 10 empty arrays (10 as we are dealing with
    // numbers in base 10)
    piles = Array.from({ length: 10 }, () => [])

    // We start from the last digit of each number and push each number
    // in the array with an index equal to the digit, then we advance one
    // position per loop.
    // eg number: 365
    // First loop:  pushed in position 5
    // Second loop: pushed in position 6
    // Third loop:  pushed in position 3
    // If the array contains numbers with more than 3 digits, 365 will be
    // pushed in position 0 (is considered 0365, 00365, 000365 etc).
    for (let i = 0; i < arr.length; i++) {
      piles[getDigit(arr[i], k)].push(arr[i])
    }

    // Flattening the array at each loop. As This loop is stable (keeps
    // the order of the elements), the array is getting slowly more sorted
    // after each loop.
    arr = [].concat(...piles)
  }
  return arr
}

// Testing radixSort
const myArray = [23, 456, 2, 34567, 345, 8765, 343, 5, 25]
console.log('Unsorted Array: ', myArray)
console.log('Sorted Array:   ', radixSort(myArray))
