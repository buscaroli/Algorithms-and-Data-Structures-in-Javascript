/* RECURSION: HELPER METHOD RECURSION
 * The Outer function contains an inner recursive function that
 * usually works on an variable in its scope (eg working on
 * an array, which could have started as an empty array).
*/ 

// Filtering the odd values within an array of Ints
const filterOddValues = (arr) => {
    // Setting up an empty array
    let filtered = []

    function filterOdds (input) {
        // Base Case
        if (input.length === 0) return
        // If the first elem is odd push it into the array
        if (input[0] % 2) {             // same as input[0] & 1
            filtered.push(input[0])
        }
        // Call the inner function on the tail of the input
        // eg x:xs returns xs (<- x:xs naming borrowed from haskell)
        filterOdds(input.slice(1))
    }
    
    // Calling the inner recursive function that will push the odd
    // numbers into the array in this scope.
    // The inner function argument is the outer function's parameter.
    filterOdds(arr)

    // Returning the filtered array
    return filtered
}

// Filtering: using a PURE recursive function, without calling
// an inner helper function.
const filterOddValues_pure = (arr) => {
    // Store the odd values as you come across them.
    let builtArray = []

    // If the array is empty return the array you built so far.
    if (arr.length === 0) return builtArray
    // If the first element is odd return the concat of the array you built
    // so far and the result of running the function on the tail of the array.

    if (arr[0] % 2) {
        return builtArray.concat(builtArray, filterOddValues(arr.slice(1)))
    }

    // If the first element id even just return the result of running the
    // function on the tail of the array (basically discarding the even value).
    return filterOddValues(arr.slice(1))
}

const myArray = [2, 3, 5, 6, 8, 7, 24, 21, 3, 10, 11, 0, -3]
console.log(`Original array: ${myArray}.\nFiltered array: ${filterOddValues(myArray)}.`)
console.log(`Original array: ${myArray}.\nFiltered array: ${filterOddValues_pure(myArray)}.`)
