// A: Question
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// B: Pseudocode:
//1. Create a function with parameters: n.
//2. Create if statement to check if n is a positive integer.
//3. If n is a positive integer, multiply the n by factorial of n minus 1.
//4. If n is not a positive integer, return 1.
//5.print the factorial of n if the value of n is 10.
// The second formula also does the same function, only the value of n is 20.


//C: Code:
//....................................................
// => Basic Javascript function formula for factorial:
//....................................................

function basicFactorialize(n) {
    if (n>0){
        return(n*basicFactorialize(n-1));
    }
    else {
        return 1;
    }
}
console.log(basicFactorialize(10));

//.....................................................
// => Advance Javascript function formula for factorial:
//.....................................................

let advanceFactorialize = (n) => n>0? n*advanceFactorialize(n-1) : 1; 
console.log(advanceFactorialize(20));


//D: Diagram:
//1. the function basicFactorial/advanceFactorial returns the factorial of the provided integer n after applying the condition.
//2. The if condition statement checks if n is a positive integer.
//3. If n is a positive integer, then it multiplies n by factorial of n minus 1.
//4. If n is not a positive integer, return 1.
//5. At the end, the code prints the factorial of n if the value of n is 10 or any.
//6. The second formula also does the same function, only the value of n is 20.
//7. the mathematical formula for factorial is: n! = n * (n - 1) * (n - 2) *...

