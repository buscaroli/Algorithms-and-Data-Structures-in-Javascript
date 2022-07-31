/* Quick Sort sorting algorithm.
 *
 * Time Complexity:
 *  Best Case scenario:  O(n log(n))
 *  Avg Case scenario:   O(n log(n))
 *  Worst Case scenario: O(n^2) Happens when the chosen pivot is constantly
 *          the minimum element as it splits the array into a 1 element
 *          array and the rest, then the rest is split again into a one elem
 *          array and so on... That's why selecting the pivot to be the arr[0]
 *           is really bad in case of already sorted arrays!
 *
 * It sorts IN PLACE.
 * It works well even in Virtual-Memory environments.
 * Apart from the worst case scenario it's very efficient as the hidden
 * constant k in 'n log(n)' is very small.
 *
 */

// Helper function to swap two elements of an array
const swap = (arr, index1, index2) => {
  ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// Helper function to find the pivot element so we can divide
// the array in two partitions.
const partition = (arr, left, right) => {
  // using the median for the pivot
  let pivot = arr[Math.floor((left + right) / 2)]

  // left is moving to the right until pointing to a value greater than
  // the pivot.
  // right is moving to the left until pointing to a value lower than
  // the pivot.
  while (left <= right) {
    while (arr[left] < pivot) left++
    while (arr[right] > pivot) right--

    // then the values get swapped and the loop is repeated so that all
    // values lower than the pivot are at its left and all values greater
    // are at its right.
    if (left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
  }
  // Once left and right meet, the value of the left pointer is returned so
  // that quicksort can be called on the two partitions at the left and right
  // of the left pointer (the meeting point).
  return left
}

// Actual Quicksort algorithm.
// Note that it should be called with the array name, 0 as its first element
// and arr.length-1 as its last element, but only the array name is required
// as we are passing default arguments.
const quicksort = (arr, left = 0, right = arr.length - 1) => {
  let index

  if (arr.length > 1) {
    index = partition(arr, left, right)

    if (left < index - 1) quicksort(arr, left, index - 1)
    if (index < right) quicksort(arr, index, right)
  }
  return arr
}

// Executing quicksort
let array1 = [4, 6, 9, 5, 3, 10]
console.log('Unsorted array: ', array1)
quicksort(array1)
console.log('Sorted array:   ', array1)
