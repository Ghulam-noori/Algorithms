// A: Question:
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
//

//B : Pseudocode
    // 1. Create a function "largestOfFour".
    // 2. Create an empty array called arrMax.
    // 3. Loop through the array X with a variable called inside the array.
    // 4. Declare the value of a variable called max to zero "0".
    // 5. loop through the arrays inside the array.
    // 6. Create if condition to find the largest number in the arrays inside the main array.
    //7. Print the result to the console.


//C: Code:

function largestOfFour(arr) {

    var arrMax = [];
    for (var i = 0; i < arr.length; i++) {
    var max = 0;
    for (var x = 0; x < arr[i].length; x++) {
        if (arr[i][x] > max) {
        max = arr[i][x];
        }
    }
    arrMax.push(max);
    }
    return arrMax;}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);