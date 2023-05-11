//A: Question

//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

    //function sumAll(arr) {
    //    return 1;
    //  }
    //  sumAll([1, 4]);
    //  The lowest number will not always come first.
    //  
    //  sumAll([1, 4]) should return a number.
    //  sumAll([1, 4]) should return 10.
    //  sumAll([4, 1]) should return 10.
    //  sumAll([5, 10]) should return 45.

//B:Pseudocode:
 // 1. We create a function to calculate the sum in an array of numbers.
 //2. Declare a variable to store the sum with value 0;
 //3. Destructure an array which have tow elements "minRange" and "maxRange".
 //4. Create if condition to check if the minRange is greater than the maxRange.
 // 5 if the condition is true, then we swap the minRange and maxRange.
 // 6. Create a for loop to iterate through the array.
 // 7.sum the sum of the numbers between the minRange and maxRange through the for loop.
 // 8. Return the sum.
 // 9. Print the sum to the console by giving the array the target values.




//C: Code

function sumAll1(arr) {
    let sum =0;
    let[minRange, maxRange] =arr;
    if(minRange>maxRange){
    [minRange, maxRange] = [maxRange, minRange];
    for(let i=minRange; i<=maxRange; i++){
        sum+=i;
    }
}
return sum;
}
console.log(sumAll1([4, 1]));

function sumAll2(arr) {
    let sum =0;
    let[minRange, maxRange] =arr;

    for(let i=minRange; i<=maxRange; i++){
        sum+=i;
    }
return sum;
}
console.log(sumAll2([5, 10]));

//Diagram: The diagram is uploaded as an image.