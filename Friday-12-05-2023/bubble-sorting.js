//A: Question
//Do the bubble sorting of the following array of numbers.
//bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
//bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
//bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]


//B: Pseudocode.
//1. Create a function "bubbleSorting" that takes an array of numbers and returns the numbers in sorted order.
//2. Declare an variable "swapped".
//3. We run a do while loop. to compare the numbers in the array.
//4. We declare that the variable swapped is false.
//5. We run the for loop function through the length of the array and we left the last index in the array.
//6. We set if condition to check whether the first number of the two numbers (pair) is greater than the second one. if it was true then the numbers should be swapped.
//7. If the condition is false the numbers should not be swapped 
//8. While all the above conditions were false then return the array.
//9 Print the array in sorted order in the console.


//C: Code

function bubleSort(arr){
    let swapped;
    do {
        swapped =false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    }
    while (swapped);
    return arr;
}
console.log(bubleSort([4, 8, 3, 9,10])); 

//D: Diagram