/* Write a function called 'same', which accepts two arrays.
 * The function should return true if every value in the first 
 * array has its corresponding value squared in the second array.
 * The frequency of values must be the same.
 *   EXAMPLES
 * same([1,2,3], [4,1,9]) is true
 * same([1,2,3], [1,9])   is false
 * same([1,2,1], [4,4,1]) is false
 */

 // O(n^2) as indexOf nested inside a for loop
 // indexOf is basically a for loop so it's a O(n)
const same_01 = (arr1, arr2) => {
    // If the arrays have different lengths they can't have the
    // same frequency.
    if (arr1.length !== arr2.length){
        return false
    }
    // For every element in array1 check for its square in array 2:
    // if found remove it with splice and keep looping
    // if not found indexOf returns -1; in this case array2 hasn't got
    // the aquare of that element of array1 so can return false.
    for (let i of arr1) {
        let match = arr2.indexOf(i*i) // matching 
    
        if (match === -1) {
            return false
        }
        arr2.splice(match, 1)
    }
    // If false is not returned before the end of the for loop all
    // elements have been assessed and matched: return true.
    return true
}

 // Different Implementation with O(n)
 // We create two frequency objects and then compare their keys 
 // and key values.
 // Accessing an Object with ' let key in Object ' only takes O(1)
 // so we end up with the loops O(n) run one after the other instead
 // then one inside the other. O(3n) is considered as O(n).

 const same_02 = (arr1, arr2) => {
    let freq1 = {}
    let freq2 = {}

    // If the two arrays don't have the same length they can't have
    // the same frequency
    if (arr1.length !== arr2.length){
        return false
    }

    // Creating the frequency object for arr1
    for (let elem of arr1) {
        freq1[elem] = ++freq1[elem] || 1
    }

    // Creating the freuency object for arr2
    for (let elem of arr2) {
        freq2[elem] = ++freq2[elem] || 1
    }
    
    // Iterating over the keys of freq1; for every iteration
    // I'm checking if the key in freq1 has an equivalent key
    // in freq2 (that need to be its square) and in case there
    // is (the expression on the right side of the && is not
    // checked if the one on its left side returns false) it
    // checks that the frequenxy of the key (which is the value
    // inside the object) is the same))
    for( let key in freq1) {
        if (!(freq1[key * key] in freq2) &&
            (freq1[key] !== freq2[key * key])){
            return false
        }  
    }
    return true
}


console.log('Same_01 ---------------')
console.log(same_01([1,2,3,2], [9,1,4,4]))
console.log(same_01([1,2,3], [4,1,9]))
console.log(same_01([1,2,1], [4,4,1]))
console.log(same_01([1,2,3], [1,9]))

console.log('Same_02 ---------------')
console.log(same_02([1,2,3,2], [9,1,4,4]))
console.log(same_02([1,2,3], [4,1,9]))
console.log(same_02([1,2,1], [4,4,1]))
console.log(same_02([1,2,3], [1,9]))