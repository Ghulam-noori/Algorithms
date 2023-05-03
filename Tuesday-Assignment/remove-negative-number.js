
//3. Remove the negative numbers from the array.
// Question:
//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].


//B : Pseudocode:
    // 1.loop through the numbers in the array (myArray) with variable i.
    //3. write if condition to see find the negative numbers.
    //3. if the any number in the array is negative remove it from the array.
    // 4.print the remaining value of the array in console.log.

// C : Code:
var myArray = [1,-2,4,1];

for (i=0;i<myArray.length;i++) 
{
    if (myArray[i]<0)
    { myArray.splice(i, 1);}
}
console.log(myArray);

// D : Diagram:
//1. The variable i loops through the values in the array and finds the negative number with for loop formula.
//2. If the number is negative it will be remove from the array and if it was positive the formula jumps to the next step.
//3. At the end the result of the formula will be printed in console.log.
//4. The output of the for loop will be: [1,4,1].