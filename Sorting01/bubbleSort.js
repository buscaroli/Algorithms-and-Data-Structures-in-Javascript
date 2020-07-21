/* BubbleSort 
 *
 * The n items of the array are traversed n times, which gives a:
 *      Worst Case scenarion for Time Complexity: O(n^2)
 *      Best Case scenario for Time Complexity: O(n), which happens when
 *          there array is traversed only once (already sorted or all items
 *          are disposed in a way that make them sorted after the first pass).
 * 
 *      Space Complexity is O(n) as no extra arrays need to be created.
 *      
 *      Check Out the Optimized version of BubbleSort: bubbleSortOptimized.js.
 */

// Utility function
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// const array1 = [4, 3, 7, 5, 6]
// swap(array1, 1, 2)
// console.log(array1)

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
        console.log(`Pass ${i} :  ${arr}`) 
    }
}

/* Taking an additional, optional parameter, to select the direction
 * of the sorting: if nothing is selected (or if direction is 'inc') 
 * the array will be sorted in ascending order, any other direction
 * will result in the array being sorted in a descending order.
 */
const bubbleSort2 = (arr, direction = 'inc') => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ( direction === 'inc'){
                if (arr[j] > arr[j+1]) {
                    swap(arr, j, j+1)
                }
            } else {
                if (arr[j] < arr[j+1]) {
                    swap(arr, j, j+1)
                }
            }           
        }
    }
}


let array2 = [4, 7, 2, 5, 9, 1]
console.log('Unsorted array:      ', array2)
bubbleSort2(array2, 'inc')
console.log('Sorted Array(inc):   ', array2)

array2 = [4, 7, 2, 5, 9, 1]
console.log('Unsorted array:      ', array2)
bubbleSort2(array2, 'dec')
console.log('Sorted Array(dec):   ', array2)

array2 = [4, 7, 2, 5, 9, 1]
console.log('Unsorted array:                  ', array2)
bubbleSort2(array2)
console.log('Sorted Array(defaults to inc):   ', array2)

console.log('\nPrinting every pass:')
array2 = [4, 7, 2, 5, 9, 1]
console.log(`Unsorted: ${array2}`) 
bubbleSort(array2)


