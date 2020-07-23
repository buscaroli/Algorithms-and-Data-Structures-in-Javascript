/* Selection Sort
 * Time Complexity: 
 *      - Worst Case: O(n^2) as there is a nested loop.
 *      - Best Case:  O(n^2) (We still have to look for the minimum item
 *                    even if the array is completely or almost sorted).
 * Space Complexity: O(1) as no arrays are created.
 *      It's not an efficient sorting algotrithm, could be considered
 *      in case we want to reduce the writing to memory as the swap
 *      is performed only once at the end of the loop.
 * 
 */

// Helper function
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const selectionSort = (arr) => {
    console.log('Unsorted Array: ' + arr)
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j    
        }
        if (min !== i) swap(arr, i, min)
        console.log(`Pass ${i}:         ${arr}`)
    }
    console.log('Sorted array:   ' + arr)
}

let array1 = [4, 9, 3, 5, 7, 2]

selectionSort(array1)
