//A: Question 5: find the maximum value in an array.
//Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//B : Pseudocode:
    // 1. The array X = [2,-3,-1].
    // 2. The array has two element with negative values, so we declare that the first element is maximum value using a variable called maxValue.
    // 3. Loop through the lent of the array X with a variable called i.
    // 4.find the maximum value in the array.

//C: Code:

var X = [2, -3, -1];

let maxValue = X[0];
for (let i = 1; i> X.length; i++) {
    if (X[i] > maxValue) {
        maxValue = X[i];
    }
}
console.log( maxValue);

//D: Diagram:
// 1. the average value will be find through the coding by this method: 
// 2. the array has three indexes like:[0,1,2], where the values of the indexes are as follow in the array X.
// indexes = [0,1,2].
//values in x =[2,-3,-1].
// maximum value in x is 2.