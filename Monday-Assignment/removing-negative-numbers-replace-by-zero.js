//A: Question 7: Eliminate negative numbers.
    //Given an array X, write a program that will remove all negative numbers and replace them with a 0. 
    //For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

//B: Pseudocode:
//loop through the length of the array X.
// iterate the elements of the array from index 0 to 3.
//Replace the the values in array x which are less than 0 with 0.
//print 

//C: code:

const X = [2,-1,4,-3];
for (let i = 0; i < X.length; i++) {
if (X[i] < 0) {
    X[i] = 0;
}
}
console.log(X);

//D: Diagram:
//the diagram below shows the output of the pseudocode.
//[2,0,4,0]