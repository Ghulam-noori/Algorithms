// A: Question 3:
//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far.

//B : Pseudocode
// 1. Make a variable called j with a value of 0.
// 2. Loop through the numbers from 1 to 135 with a variable called i.
// 3. sum the result of i with the value of j each time.
// 3. Print the value of i and the sum of the i and j after adding the text "Number is" to i and the text "Sum:" to j in console through bare brackets.

//C: Code

let j = 0;

for (let i = 0; i <= 135; i++) {
j += i;
console.log(`Number is: ${i} Sum: ${j}`)};


// D: Diagram
//The result looks as follow after adding the value of j to i in each step//
    //1. Number is: 0 Sum: 0
    //2. Number is: 1 Sum: 1
    //3. Number is: 2 Sum: 3
    //4. Number is: 3 Sum: 6
    //.... 
    //....
    //Number is: 135 Sum: 9180



