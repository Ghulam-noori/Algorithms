//A: 3rd Highest Number in Array.
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop). Array =[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31].


//B: Pseudocode.
//1. Create a function "thirdHighestNumber" that takes an array of numbers and returns the third highest number in the array.
//2. Declare the first, second and third variables which will be used in the for loop.The values these variables are 0.
//3. Create a for loop that will iterate through the array.
//4. If the number is greater than the first number, assign the third variable equal to second variable and second to first and the first variable equal to the value of [i] in the array.
//5. If the number is greater than the second number, assign the third variable equal to second variable and second to [i] in the array.
//6. If the number is greater than the third number, assign the third variable equal to [i] in the array.
//7. Return the thirdHighestNumber 
//8. Print the thirdHighestNumber to the console by giving the values of the elements in the array.


//C: Code.

function thirdHighestNumber(arr) {
    let first =0;
    let second =0;
    let third = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >first) {
            third=second;
            second=first;
            first=arr[i];    
        }
        else if (arr[i] > second) {
            third = second;
            second = arr[i];
        }
        else if (arr[i] > third) {
            third = arr[i];
        }
    }
return third;
}
console.log(thirdHighestNumber([5, 2, 8, 20, 0, 11, 7, 3, 9, 31]));

//Diagram.
// The picture of the diagram is available in the folder of Friday assignment in the GitHub repository.