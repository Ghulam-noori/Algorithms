
//A:Number to String

//Question: Write a program that takes an array of numbers and turns the negative values to strings. 
            //For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

//B : Pseudocode
    // 1. use a function called negativeToString.
    //2. use if condition in the function to replace the negative values.
    // 2. declare a variable and assign the result of the function to the variable.
    // 3. print the result in console.


//C: Codes:

function negativeToString(arr) {
    return arr.map(x => x < 0 ? 'Turing' : x);
}
const X = [1, -4, 0, -1];
const result = negativeToString(X);
console.log(result);

//D: Diagram:
//1. The function negativeToString takes the array of numbers and turn the negative values to strings. 
//2. This is the values: [1, -4, 0, -1].
//3. This is the output: [1, 'Turing,0,'Turing].