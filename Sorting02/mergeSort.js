/* MergeSort sorting algorithm.
 * 
 * Recursive Algorithm.
 *  
 * Time Complexity:  O(n log(n)) (Best, Avg and Worst Case scenarios).
 * Space Complexity: O(n)  as an additional array of the same length
 *                   of the original one is created.
 *
 */

// Helper function that merges two sorted arrays and returns a new
// sorted array.
const merge = (arr1, arr2) => {
    let newArray = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i])
            i++
        }
        else {
            newArray.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        newArray.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        newArray.push(arr2[j])
        j++
    }
    return newArray
}

// Testing merge()
let a1 = [3, 6, 9, 12, 16, 20, 25, 31, 34, 47]
let a2 = [5, 7, 10, 20, 24, 26]
console.log('Array 1:        ', a1)
console.log('Array 2:        ', a2)
console.log('Merged array:   ',merge(a1, a2))

// Actual sorting Algorithm, recursive.
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


// Executing mergesort
let array1 = [4, 8, 3, 14, 16, 18, 2, 10]
console.log('Unsorted array: ', array1)
let array2 = mergeSort(array1)
console.log('Sorted array:   ', array2)
