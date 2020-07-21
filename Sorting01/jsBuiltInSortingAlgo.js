/* JAVASCRIPT BUILT-IN sort() function
 * JS built-in sorting algotithm converts the values into UNICODE before
 * sorting them. This means that it works as expected when dealing with
 * words but not when dealing with numbers.
 */
const arrayWords = ['Banana', 'Avocado', 'Orange', 'Apple', 'Pear']
const arrayNumbers = [3, 8, 21, 42, 6]

console.log('arrayWords before sorting: ', arrayWords)
console.log('arrayWords after sorting:  ', arrayWords.sort())

console.log('arrayNumbers before sorting: ', arrayNumbers)
console.log('arrayNumbers after sorting:  ', arrayNumbers.sort())

/* To solve the problem we can pass a function to sort() like the following:
 * (a, b) => a - b
 * if the result is negative: a is before b
 * if the result is positive: b is before a 
 */
console.log('   and with extra function:  ', arrayNumbers.sort((a, b) => a - b))

/* We can sort a list of strings by their lengths */
console.log('arrayWords before sorting: ', arrayWords)
console.log('sorted by length of words: ', arrayWords.sort((a, b) => a.length - b.length))