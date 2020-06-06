/* RECURSION
 * Implementing simple recursive functions.
 * Might add iterative version for comparison.
 */ 

//  Factorial: recursive version.
const factorial_rec = (n) => {
    if (n === 1 || n === 0) return 1
    return n * factorial_rec(n-1)
}


// Factorial: iterative version.
const factorial_iter = (n) => {
    let result = 1
    for (let i = n; i > 1; i--) {
        result *= i
    }
    return result
}

const random_num = Math.floor(Math.random() * Math.floor(6))
console.log(`(REC)  The Factorial of ${random_num} is ${factorial_rec(random_num)}.`)
console.log(`(ITER) The Factorial of ${random_num} is ${factorial_iter(random_num)}.`)

