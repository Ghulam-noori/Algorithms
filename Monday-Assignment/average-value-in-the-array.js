
//Question6: Find Max value in an array x.
//write a program that will return the average value of all elements in the array X = [2,1,3] .

//B : Pseudocode
    // 1. The array X = [2,1,3] has a length of 3.
    // 2. the Javascript count from 0, so we add 1 more element to the length of X. the value of this lent is 0. 
    // 3. Loop through the lent of the array X with a variable called i.
    // 4. find the total value of the array by adding the value 0 to the sum of the array X.
    // 5. divide the total value by the length of the array X.
    // 3. Print the average value of the array X.

    //C:Codes:

var X = [2,1,3];

var totalValue = 0;
for (let i = 0; i < X.length; i++ ) {
    totalValue += X[i];
}
let averageValue = totalValue / X.length;
console.log(averageValue);

//D: Diagram:
// the average value will be find through the coding by this method: (2+1+3+0)/4 =2
