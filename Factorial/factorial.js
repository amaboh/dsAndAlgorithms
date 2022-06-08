// Factorial of a number is a denoted n!,is hte product of all positive integers less than or equal to 'n'. 
// Factorial of zero is 1.
// Factorial(4) = 4*3*2*1 = 24

function factorial(n){
    let result = 1 // the factorial of 0 is 1 and is the starting point in the multiplication process

    for (let i= 2; i <= n; i++){
         result *= i //result = result * i
    }
    return result
}

console.log(factorial(5))
console.log(factorial(10))

console.log(factorial(20))

