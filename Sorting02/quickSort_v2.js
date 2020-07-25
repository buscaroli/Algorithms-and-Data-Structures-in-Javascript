/* Allternative version of QuickSort 
 *
 * Check out quicksort.js for the discussion on the Time and
 * Space Complexity of the std version of the algorithm.
 * 
 * This version has a different Space Complexity: O(n) as a new
 * array is created. (To Be Confirmed)
 * 
 * Note I am using arr[0] as a pivot, bad in case of almost/completely
 * sorted arrays!
 * 
 */

const quicksort = (arr) => {
    if (arr.length < 1) return []
    
    let left = [], right = []
    let pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [].concat(quicksort(left), pivot, quicksort(right))
}

// Executing quicksort
let array1 = [4, 6, 9, 5, 3, 10]
console.log('Unsorted array: ', array1)
let array2 = quicksort(array1)
console.log('Sorted array:   ', array2)