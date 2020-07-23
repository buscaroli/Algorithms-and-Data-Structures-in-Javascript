/* Insertion Sort
 *
 * Time Complexity:
 *      - Worst Case: O(n^2) (really O(k*n), slightly more efficient).
 *      - Best Case:  O(n)
 * Space Complexity O(1) as no new arrays are created.
 * 
 * Not efficient, it could be reasonable for almost sorted arrays as in
 * this case the loop might be traversed only once or twice.
 * Could also be a reasonable choice as a live algorithm (where data is
 * added as the algorithm is working) as it keeps one side of the array
 * constantly sorted.
 * 
 */

 // Helper function
const swap = (arr, index1, index2) => {
     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


const insertionSort = (arr) => {
    console.log(`Unsorted Array:   ${arr}`)
    for (let i = 1; i < arr.length; i++) {
        let j = i 
        for (let j = i; j > 0; j--) {
            if (arr[j-1] > arr[j]) swap (arr, j, j-1)
            console.log(`Pass [i,j] [${i},${j}]: ${arr}`)
        }
        console.log(`Pass ${i}:           ${arr}`)
    }
}


let array1 = [3, 7, 2, 5, 1, 8]
console.log(array1)
insertionSort(array1)
console.log(array1)