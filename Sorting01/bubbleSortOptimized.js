/* Optimized version of BubbleSort, used when the array is
 * almost sorted.
 *
 * This algorithm could be appropriate if we run it after every insertion
 * to the array as it will need to run only once giving a 
 * Time Complexity of O(n).
 * Space Complexity is O(1) as the standars BubbleSort Algo as no extra arrays
 * are created.
 */

// Utility function
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const bubbleSortOpt = (arr) => {
    let swapped
    for (let i = 0; i < arr.length; i++) {
        swapped = false     
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                swapped = true
            }
        }
        // console.log(`Pass ${i} :  ${arr}`)
    
        if (!swapped) break
    }
}

let array1 = [1, 6, 2, 3, 4, 5, 7, 8, 9] 
console.log('Unsorted Array: ', array1)
bubbleSortOpt(array1)
console.log('Sorted Array:   ', array1)