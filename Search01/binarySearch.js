// Searching Algorithms: Binary Search
// Only works on sorted algorithms.
//
// Time Complexity:
// Best Case Scenario: O(1)
// Worst Case Scenario: O(log n)
// Average Case Scenario: O(log n)

const binarySearch = (arr, value) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right)/2)
        console.log(`left -> ${left} -- right -> ${right} -- middle -> ${middle}`)
        if (arr[middle] === value) {
            return middle
        }

        if (value < arr[middle]) {
            right = middle - 1
        } else if (value > arr[middle]) {
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearch([1, 3, 5, 7, 9, 10, 11, 12, 13,17, 20, 24, 25], 2))