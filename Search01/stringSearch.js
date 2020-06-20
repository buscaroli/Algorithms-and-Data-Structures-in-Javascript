// Searching Algorithms: String Search and Count
// Search for the number of occurencies of a substring within a 
// larger string.
//
// Time Complexity:
//      Worst Case Scenario: O(m*n)

const stringSearch = (phrase, sub) => {
    const phraseLength = phrase.length
    const subLength = sub.length
    let counter = 0
    // Loop through the phrase.
    for (let i = 0; i < phraseLength; i++) {
        // When the char of the phrase pointer by i is the same as the first
        // char of the substring start an inner  loop counting through the 
        // substring.
        if (phrase[i] === sub[0]){ // <- I could have left out this check and
                                   // the function would still work, but doing
                                   // so I would have performed one assignment
                                   // (j = 0) and one comparison (j< subLength)
                                   // at every iteration over the outer i loop.
                                   // By using this comparison I only make one
                                   // comparison for every iteration over the
                                   // outer i loop (and one extra when the
                                   // comparison returns true).
            for (let j = 0; j < subLength; j++) {
                // If the corresponding chars dont match leave the inner loop. 
                if (phrase[i+j] !== sub[j]) break
                // If the inner loop has reached the last character of the
                // substring it means that all the previous chars were matching
                // otherwise break would have been called. If also this last
                // char is matching it means a match has been found and the
                // counter needs to be incremented.  
                if (j === subLength-1) counter++
            }
        }
    }
    return counter
}

const myPhrase = 'Hi there what a nice day today and what a nice day yesterday'
const mySubstring = 'day'
const mySubstring2 = 'tomorrow'

console.log(`\nPhrase: ${myPhrase}\nSubstring: ${mySubstring}`)
console.log(stringSearch(myPhrase, mySubstring))
console.log(`\nPhrase: ${myPhrase}\nSubstring: ${mySubstring2}`)
console.log(stringSearch(myPhrase, mySubstring2))