/* Given two strings, write a function to determine
 * if the second string is an anagram of the first one.
 */

const isAnagram = (word1, word2) => {
    let freq1 = {}
    let freq2 = {}

    // If the lengths of the two words are different
    // word2 can't be an anagram of word1 
    if (word1.length !== word2.length){
        return false
    }
    // Creating an object to store the frequency of
    // every character of word1
    for (let letter of word1) {
        freq1[letter] = ++freq1[letter] || 1
    }
    // Creating an object to store the frequency of
    // every character of word2
    for (let letter of word2) {
        freq2[letter] = ++freq2[letter] || 1
    }

    // Going through the keys of freq1 and checking:
    // - that every key of freq1 is also in freq2
    // - that the value of those keys is equal
    // In that case word2 is an anagram of word1,
    // otherwise it isn't and false is returned.
    for (key in freq1) {
        // console.log(freq1[key] === freq2[key])
        if ( !(key in freq2) ||
              (freq1[key] !== freq2[key])){
            return false
        }
    }
    return true
}

const myWord1 = 'cinema'
const myWord2 = 'iceman'
console.log(`Word1: ${myWord1}\nWord2: ${myWord2}`)
console.log(`Anagram? ${isAnagram(myWord1, myWord2)}\n`)

const myWord3 = 'medusa'
const myWord4 = 'iceman'
console.log(`Word1: ${myWord3}\nWord2: ${myWord4}`)
console.log(`Anagram? ${isAnagram(myWord3, myWord4)}\n`)

const myWord5 = 'medusa'
const myWord6 = 'iceman'
console.log(`Word1: ${myWord5}\nWord2: ${myWord6}`)
console.log(`Anagram? ${isAnagram(myWord5, myWord6)}\n`)

