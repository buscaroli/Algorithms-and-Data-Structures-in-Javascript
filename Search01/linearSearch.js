// Searching Algorithms: Linear Search

// Returns the Index of the value or -1 if not found
// Time Complexity is O(n) (worst case scenario where all the array
// is traversed; Best Case Scenario, where the element to search is
// in position 0 is O(1)).
const lienarSearch = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

console.log(lienarSearch(['Matt', 'Mel', 3, 7, true, 'algebra'], 7))
console.log(lienarSearch(['Matt', 'Mel', 3, 7, true, 'algebra'], 12))
