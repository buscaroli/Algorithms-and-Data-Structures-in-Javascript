// Given a string, count how many of each characters it contains.

const charCount = (str) => {
    let result = {}     // will store data in the form ' char: qty '

    // REMEMBER: for .. of is for iterable      (eg arrays or strings)
    //           for .. in is for enumerable    (eg object keys)
    for (let char of str) {
        // Validation: only a-z, A-Z and 0-9
        if (validateInput(char)) {
            char = char.toLowerCase()
            result[char] = ++result[char] || 1  // if key found increase, else
                                                // create key and set it to 1
            // Alternative:
            // result[char] ? ++result[char] : result[char] = 1
        }
                                            }
    return result
}

const validateInput = (char) => {
    let charCode = char.charCodeAt(0)

    return ((charCode >= 97 && charCode <= 122) ||  // a - z
            (charCode >= 65 && charCode <= 90)  ||  // A - Z
            (charCode >= 48 && charCode <= 57))     // 0 - 9
}

const exampleString = 'Hi there!'
console.log(exampleString)
console.log(charCount(exampleString))
