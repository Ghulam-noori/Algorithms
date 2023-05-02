//A: Question -4 
//Print the elements of an array

//B : Pseudocode
    // 1. An array called (x) has 4 numbers as its indexes.
    //2. Loop through the length of the array with a variable called i.
    // 2. iterate the elements of the array from 0 to 3.
    // 3. print all the elements (the numbers) of the array in console.


//C: Code

let x = [1, 4, 2, 12];

for(let i = 0; i < x.length; i++) {
console.log(x[i]);
}

// D: Diagram
    //The program prints the first number (1) in the array when the value of i = 0.
    //The program prints the second number (4) in the array when the value of i = 1.
    //The program prints the first number (2) in the array when the value of i = 2.
    //The program prints the first number (12) in the array when the value of i = 3.
    //finally the result looks as follow:
    //1
    //4
    //2
    //12